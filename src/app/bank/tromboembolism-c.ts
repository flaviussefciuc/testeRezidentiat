import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('tromboembolism',29,-810,`tromboembolism-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const TROMBOEMBOLISM_C=[
q(41,['Tromboza, spre deosebire de hemostaza fiziologică, constă în:',
 ['Formarea, în interiorul unui vas, a unei mase solide din constituenți ai sângelui, atașată de perete, din care se pot desprinde emboli','Formarea unui cheag bogat în fibrină situat în afara endoteliului, ca răspuns la o leziune','Ocluzia arterială prin placă de aterom, fără fibrină sau trombocite','Liza spontană a cheagului, fără participarea trombocitelor','Un proces limitat la capilare, fără atașare de peretele vascular'],'A',1001,'Patogeneza trombozei — Definiție',
 'Separarea trombozei (masă intramurală cu emboli) de hemostaza extravasculară de după leziune.',
 ['Definiția trombului intramural, atașat, cu emboli este cea din paragraf.','Cheagul extraendotelial după leziune este hemostaza fiziologică, nu tromboza.','Placa ateromatoasă este discutată ca factor al trombozei arteriale, nu ca definiție.','Textul descrie generarea de fibrină cu participare variabilă a trombocitelor, nu liza spontană.','Trombul se formează pe peretele vasului și este atașat de el.']],
 8,'Distractorii reciclează hemostaza fiziologică și placa arterială din triada de pe pagina următoare ca și cum ar fi definiția trombozei.',['masă localizată solidă','în afara endoteliului']),

q(42,['În triada lui Virchow, ponderea componentelor diferă astfel:',
 ['Tromboza arterială este influențată mai ales de turbulență și de disfuncția peretelui vascular produse de plăcile ateromatoase','Staza și hipercoagulabilitatea sunt mai relevante pentru patogeneza trombozei venoase','Cele trei elemente sunt staza/turbulența, disfuncția peretelui și hipercoagulabilitatea','Staza este determinantul principal al trombozei arteriale, placa neavând rol','Hipercoagulabilitatea explică tromboza arterială, nu pe cea venoasă'],'ABC',1002,'Factorii care influențează tromboza — Virchow',
 'Contrastarea pachetului arterial (turbulență + placă) cu cel venos (stază + hipercoagulabilitate).',
 ['Perechea turbulență–disfuncție de perete prin aterom este explicită pentru arterial.','Staza și hipercoagulabilitatea sunt atribuite venosului.','Cele trei elemente ale triadei sunt enumerate.','Textul atribuie staza venosului, nu arterialului.','Hipercoagulabilitatea este mai relevantă venos, nu arterial.']],
 8,'Distractorii inversează atribuirea stază/placă între arterial și venos, distincția centrală a paragrafului.',['triada lui Virchow','plăcile ateromatoase']),

q(43,['Scorul Wells cu două niveluri pentru TVP (Cadranul 29.3) include printre caracteristici:',
 ['Cancer activ (sub tratament în ultimele 6 luni sau paleație)','Repaus la pat recent ≥3 zile sau chirurgie majoră în ultimele 12 săptămâni sub anestezie','Gambă edemațiată cu cel puțin 3 cm mai mare decât cea asimptomatică și un diagnostic alternativ la fel de probabil (scor −2)','TVP probabilă la un scor simplificat ≥2; scorul singur nu confirmă și nu exclude TEV','Un scor Wells pozitiv confirmă TVP fără D-dimeri sau imagistică'],'ABCD',1004,'Cadranul 29.3 — Scorul Wells pentru TVP',
 'Reținerea itemilor (cancer, imobilizare 3 zile/12 săptămâni, Δ3 cm, −2 pentru alternativ) și a pragului ≥2, cu limita că scorul nu diagnostichează singur.',
 ['Cancerul activ din ultimele 6 luni figurează în tabel.','Pragurile 3 zile și 12 săptămâni sunt din listă.','Δ3 cm și punctajul −2 pentru diagnosticul alternativ sunt explicite.','Pragul ≥2 și absența valorii diagnostice izolate sunt din textul însoțitor.','Textul precizează că scorurile nu confirmă și nu exclud, fiind necesară evaluare suplimentară.']],
 8,'Patru itemi/praguri reale; distractorul transformă un scor de predicție într-un test de confirmare.',['cel puţin 3 cm','2:2']),

q(44,['Măsurarea D-dimerilor în algoritmul NICE se caracterizează prin:',
 ['D-dimerii sunt produși de degradare a fibrinei; nivelurile crescute nu sunt specifice TEV, întâlnindu-se la vârstnici, în infecții, postoperator, cancer și sarcină','Valoarea predictivă negativă este ridicată: TEV este foarte puțin probabilă la probabilitate pre-test scăzută (Wells) cu D-dimeri sub prag, fără imagistică suplimentară','Rămâne o rată mică de eșec (<2% în 3 luni); D-dimeri crescuți sau Wells „probabil” impun imagistică','D-dimerii pozitivi confirmă TEV și înlocuiesc ultrasonografia','Valoarea predictivă negativă este nulă, deci D-dimerii se omit la probabilitate scăzută'],'ABC',1004,'Măsurarea D-dimerilor',
 'Contrastarea specificității joase cu VPN-ul ridicat și cu rata de eșec <2% la 3 luni.',
 ['Lista de cauze nespecifice este cea din paragraf.','VPN-ul ridicat și omiterea imagisticii la Wells improbabil + D-dimeri sub prag sunt explicite.','<2% la 3 luni și indicația de imagistică la D-dimeri crescuți sau Wells probabil sunt enunțate.','D-dimerii pozitivi nu confirmă; impun imagistică.','Algoritmul se bazează tocmai pe VPN.']],
 8,'Distractorii inversează VPN-ul (temelia algoritmului) și transformă un test de excludere într-unul de confirmare.',['valoa￾rea lor predictivă negativă','<2% în 3 luni']),

q(45,['Ultrasonografia în suspiciunea de TVP:',
 ['Explorarea proximală (comprimarea poplitee și femurală) este foarte sensibilă pentru TVP proximală (>95%), dar mai puțin pentru cea distală (70%)','La Wells „probabil”, o scanare negativă limitată la sistemul proximal nu exclude diagnosticul; se repetă ultrasonografia proximală după 5-7 zile sau se scanează tot membrul','Sensibilitatea pentru TVP distală depășește 95%, repetarea la 5-7 zile fiind superfluă','Venografia rămâne standardul de primă intenție, ultrasonografia fiind abandonată','O scanare proximală negativă la Wells probabil infirmă orice TVP distală'],'AB',1004,'Examinarea imagistică a TVP',
 'Reținerea sensibilităților >95% proximal / 70% distal și a ferestrei de re-scanare 5-7 zile.',
 ['Cele două sensibilități sunt cifrele din text.','Regula Wells probabil + scan proximal negativ și fereastra 5-7 zile sunt din paragraf și din Fig. 29.2.','70% nu depășește 95%; repetarea este cerută.','Ultrasonografia a înlocuit venografia ca standard de aur.','Textul precizează că scanarea proximală negativă nu identifică unele TVP distale.']],
 8,'Distractorii inversează sensibilitățile 95%/70% și anulează re-scanarea de 5-7 zile din algoritm.',['>95%','5-7 zile'],[1005]),

q(46,['Dacă imagistica diagnostică pentru TEV nu poate fi finalizată imediat, prima doză de anticoagulant se administrează când se anticipează o întârziere de peste:',
 ['O oră în suspiciunea de EP și 4 ore în suspiciunea de TVP','24 de ore atât pentru EP, cât și pentru TVP, fără doză intermediară','O oră în TVP și 4 ore în EP, invers față de urgența embolică','12 ore, indiferent de suspiciune','Anticoagularea se amână până după imagistică, chiar dacă întârzierea depășește o zi'],'A',1005,'Calendarul efectuării investigațiilor',
 'Reținerea ferestrelor diferite: >1 oră pentru EP versus >4 ore pentru TVP, plus completarea în 24 de ore.',
 ['Pragurile 1 oră (EP) și 4 ore (TVP) sunt enunțate explicit; investigațiile se completează în primele 24 de ore.','24 de ore este termenul de finalizare a investigațiilor, nu pragul de start al anticoagulantului.','Sensul pragurilor este inversat.','12 ore nu este cifra din text.','Textul cere tocmai o primă doză dacă intervalul depășește pragurile.']],
 8,'Distractorii permută pragurile 1 oră versus 4 ore între EP și TVP, capcana temporală a aceluiași paragraf.',['o oră','4 ore']),

q(47,['Scintigrafia de ventilație-perfuzie (V/Q) în suspiciunea de EP:',
 ['Are o fază de perfuzie (agregate de albumină marcate cu tehnețiu i.v.) și o fază de ventilație (xenon sau tehnețiu inhalat)','Diagnosticul de EP se pune pe anomalii de perfuzie cu ventilație normală; un rezultat normal exclude EP','Avantajul este doza mai mică de radiații, fiind preferată în insuficiență renală și alergie la contrastul i.v.; dezavantajul este disponibilitatea mai mică și rezultatele adesea neconcludente','V/Q înlocuiește CTPA ca tehnică cea mai comună, contrastul iodat fiind necesar în V/Q','Un V/Q normal nu exclude EP, spre deosebire de CTPA'],'ABC',1005,'Examinarea imagistică a EP — V/Q',
 'Contrastarea mismatch-ului perfuzie/ventilație și a preferinței V/Q în IRC/alergie cu caracterul adesea neconcludent.',
 ['Cele două faze și tracerii sunt din paragraf.','Mismatch-ul și puterea de excludere a unui rezultat normal sunt explicite.','Doza mai mică de radiații, preferința renală/alergică și neajunsurile sunt enunțate.','CTPA este tehnica cea mai comună; V/Q nu folosește contrast iodat i.v.','Textul spune că rezultatul normal exclude EP.']],
 8,'Distractorii inversează ierarhia CTPA/V/Q și neagă puterea de excludere a V/Q normal.',['fază de perfuzie','insuficienţă renală']),

q(48,['La un pacient cu suspiciune de EP și hipotensiune, dacă CTPA de urgență nu este posibilă, capitolul indică:',
 ['Ecocardiografie transtoracică la patul bolnavului, care poate arăta hipertensiune pulmonară acută și disfuncție de ventricul drept','Așteptarea unei scintigrafii V/Q programate a doua zi, fără altă evaluare','D-dimeri ca unică investigație, ecocardiografia fiind inutilă în șoc','Venografie de membru inferior ca substitut imediat al CTPA','Oprirea oricărei imagistici, mortalitatea fiind oricum mică în această minoritate'],'A',1005,'Prezentările în urgență — EP hipotensivă',
 'Identificarea eco-ului la pat ca substitut diagnostic când CTPA de urgență nu este disponibilă.',
 ['Rolul eco-ului transtoracic (HTP acută, disfuncție VD) este explicit; mortalitatea acestei minorități este ridicată.','V/Q nu este substitutul de urgență descris în șoc.','D-dimerii nu înlocuiesc imagistica în instabilitate.','Venografia privește TVP, nu EP masivă.','Textul subliniază mortalitatea ridicată și nevoia de diagnostic prompt.']],
 8,'Vigneta cere substitutul de pat (eco VD) din același paragraf care definește minoritatea hipotensivă cu mortalitate ridicată.',['ecocardiografia transtoracică','disfuncţiei ventriculare drepte']),

q(49,['Schemele de inițiere ale DOAC în TEV, distinct de warfarina cu overlap heparinic, includ:',
 ['Edoxabanul și dabigatranul sunt precedate de anticoagulare parenterală (LMWH) 5 zile, trecerea făcându-se în ziua a șasea fără suprapunere','Apixabanul și rivaroxabanul nu necesită anticoagulant parenteral, fiind folosite de la început în doză inițială mai mare, 7 zile, respectiv 21 de zile','Există trei inhibitori direcți ai factorului Xa (apixaban, edoxaban, rivaroxaban) și un inhibitor direct al trombinei (dabigatran)','Dabigatranul se începe din ziua 0, fără LMWH, identic apixabanului','Rivaroxabanul impune 5 zile de UFH i.v. înaintea oricărei doze orale'],'ABC',1007,'Anticoagulantele orale directe — Scheme de start',
 'Contrastarea punții de 5 zile (edoxaban/dabigatran) cu încărcarea 7/21 de zile (apixaban/rivaroxaban).',
 ['Puntea de 5 zile fără overlap este explicită.','Dozele inițiale mai mari 7 și 21 de zile sunt enunțate.','Cele trei anti-Xa și dabigatranul anti-IIa sunt din deschidere.','Dabigatranul cere tocmai LMWH 5 zile.','Rivaroxabanul este din grupul fără parenteral.']],
 8,'Distractorii permută schemele 5 zile versus 7/21 de zile între cele două perechi de DOAC din același paragraf.',['ziua a şasea','21 de zile'],[1006]),

q(50,['Anticoagularea în sarcină, dincolo de interdicția transplacentară a DOAC/warfarinei ca clasă:',
 ['Warfarina produce embriopatie între săptămânile 6 și 12 (hipoplazie nazală, epifize punctate), iar mai târziu hemoragie fetală, anomalii neurologice și risc de deces intrauterin','La femeia care rămâne gravidă sub warfarină, medicamentul este sigur până în săptămâna 6; atunci se înlocuiește cu LMWH, care nu traversează placenta','Warfarina și LMWH sunt sigure la alăptare; pentru DOAC acest lucru nu este bine stabilit, deci se evită','Warfarina este teratogenă din ziua concepției, fără fereastră sigură până în săptămâna 6','LMWH traversează placenta identic warfarinei, fiind evitată pe tot parcursul sarcinii'],'ABC',1007,'Femeile gravide; Mamele care alăptează',
 'Reținerea ferestrei teratogene 6-12 săptămâni, a siguranței până în săptămâna 6 și a contrastului alăptare warfarină/LMWH versus DOAC.',
 ['Embriopatia 6-12 și sechelele tardive sunt din paragraf.','Siguranța până în săptămâna 6 și comutarea pe LMWH sunt explicite.','Contrastul alăptare este de la pagina următoare.','Există o fereastră până în săptămâna 6.','LMWH nu traversează placenta și este tratamentul de elecție.']],
 8,'Distractorii anulează fereastra până în săptămâna 6 și atribuie LMWH pasajul transplacentar al warfarinei.',['6-a şi a 12-a','săptămâna a 6-a'],[1008]),

q(51,['În PESI simplificat (Cadranul 29.5), mortalitatea la 30 de zile este:',
 ['Circa 1% (IC 0-2,1%) la 0 puncte și circa 10,9% (IC 8,5-30,2%) la ≥1 punct','Identică în ambele trepte, circa 20%, independent de punctaj','Nulă la ≥1 punct, clasa simplificată neavând valoare prognostică','Superioară clasei V originale doar când vârsta este sub 40 de ani','Calculată doar din saturația de oxigen, celelalte itemuri fiind omise'],'A',1008,'Cadranul 29.5 — PESI original și simplificat',
 'Reținerea splitului 0 puncte ≈1% versus ≥1 punct ≈10,9% mortalitate la 30 de zile.',
 ['Cele două procente cu intervale de încredere sunt din tabelul versiunii simplificate.','Textul distinge clar cele două trepte.','≥1 punct crește mortalitatea, nu o anulează.','Vârsta >80 de ani valorează 1 punct; nu este vorba de sub 40 de ani.','Itemurile includ vârstă, cancer, IC, BPCO, AV, TAS, nu doar saturația.']],
 8,'Distractorii permută mortalitățile 1% și 10,9% sau anulează pragul de 1 punct al versiunii simplificate.',['1%','10,9%']),

q(52,['Rolul trombolizei în TEV, potrivit capitolului:',
 ['Anticoagulantele previn extensia și recurența, dar nu dizolvă trombii, spre deosebire de trombolitice','Tromboliticele sunt rareori folosite din cauza riscului mai mare de hemoragie majoră, inclusiv 2% hemoragie intracraniană','În EP masivă cu TAS ≤90 mmHg, tromboliza sistemică (sau ocazional pe cateter) poate salva viața prin restabilirea rapidă a perfuziei pulmonare','Tromboliza este tratamentul de rutină al TVP distale, riscul hemoragic fiind neglijabil','Anticoagulantele dizolvă trombul format, tromboliza fiind rezervată TVP distale asimptomatice'],'ABC',1008,'Rolul trombolizei',
 'Contrastarea absenței lizei sub anticoagulant cu pragul TAS ≤90 mmHg și cu riscul de 2% ICH.',
 ['Distincția prevenire versus dizolvare este fraza de deschidere.','Cifra de 2% ICH este explicită.','Pragul TAS ≤90 mmHg și potențialul de salvare sunt enunțate.','TVP distală nu este indicația de rutină.','Relația liza/anticoagulant este inversă.']],
 8,'Distractorii inversează cine dizolvă trombul și mută tromboliza pe TVP distală, departe de EP masivă.',['2% de hemoragie intracraniană',':590 mmHg']),

q(53,['Dacă anticoagularea pentru TEV este oprită după cel puțin 3 luni, riscul de tromboză recurentă în anul următor este de aproximativ:',
 ['5%','1%','30%','50%','0%, durata peste 3 luni anulând recurența'],'A',1009,'Durata anticoagulării — Recurența după oprire',
 'Reținerea cifrei de ~5% în anul de după oprirea tratamentului de ≥3 luni, independent de prelungirea anterioară.',
 ['Cifra de aproximativ 5% în anul următor este explicită; o durată mai lungă peste 3 luni nu reduce recurența după oprire.','1% este mortalitatea PESI 0, nu recurența după oprire.','30% este recurența la 5 ani a TEV neprovocat.','50% este riscul trombotic netratat al HIT, nu recurența post-oprire.','Textul neagă anularea recurenței prin prelungire peste 3 luni.']],
 8,'Distractorii reciclează 1%, 30% și 50% din același capitol (PESI, neprovocat, HIT) în locul pragului de 5%.',['aproximativ 5%','cel puţin 3 luni']),

q(54,['Riscul de recurență după TEV, în datele de stratificare:',
 ['TEV neprovocat: circa 10% la 1 an și 30% la 5 ani; riscul este mai mare la bărbați, la al doilea eveniment și la EP/TVP proximală versus TVP distală','Riscul de EP recurentă este mai mare dacă prezentarea inițială a fost EP, nu TVP, iar fatalitatea cazului este mai mare în EP','Majoritatea TVP distale simptomatice se tratează 3 luni; la factor provocator tranzitor rezolvat, durata poate scădea la 6 săptămâni','TVP de membru superior asociată cateterului se anticoagulează cel puțin 3 luni și mai mult dacă linia rămâne in situ','Recurența este mai mică la bărbați și după EP decât după TVP distală, motiv pentru a opri anticoagularea la o lună'],'ABCD',1010,'Riscul de recurență',
 'Integrarea 10%/30% neprovocat, a gradientului sex/sediu și a duratelor 3 luni versus 6 săptămâni (distal) și ≥3 luni (cateter).',
 ['Cifrele 10% și 30% plus gradientul masculin/proximal sunt din deschidere.','Gradientul EP versus TVP și fatalitatea sunt explicite.','3 luni versus 6 săptămâni este practica distalei.','Regula cateterului ≥3 luni este enunțată.','Sensurile (bărbați, EP) sunt inverse față de text.']],
 8,'Patru praguri de recurență/durată; distractorul inversează sexul și ierarhia EP versus distală.',['10% la 1 an','6 săptămâni']),

q(55,['Sindromul post-trombotic, dincolo de prevalența de 40% după TVP proximală:',
 ['În forma severă produce afectare cutanată permanentă (roșeață, hiperpigmentare, ectazii, lipodermatoscleroză), iar 5-10% dezvoltă ulcerație de membru inferior, recidivantă și greu de tratat','Rolul ciorapilor până la genunchi cu compresie graduală de cel puțin 24 mmHg la gleznă în prevenția SPT rămâne controversat','Ulcerația apare la peste 80% după orice TVP distală, ciorapii de 24 mmHg fiind inutili simptomatic','SPT se datorează doar hipertensiunii arteriale sistemice, fără ocluzie venoasă sau leziune valvulară','Ciorapii de 8 mmHg sunt standardul de prevenție, controversa privind 24 mmHg fiind infirmată'],'AB',1010,'Sindromul post-trombotic — Ulcerație; Ciorapi',
 'Reținerea ulcerației de 5-10% și a pragului controversat ≥24 mmHg, distinct de prevalența SPT deja acoperită.',
 ['Spectrul cutanat sever și 5-10% ulcerații sunt din paragraf.','Pragul ≥24 mmHg și controversa sunt explicite.','5-10% nu este 80%; unii pacienți au beneficiu simptomatic.','Mecanismul include ocluzie proximală, valve, colaterale, hipertensiune venoasă.','Cifra din text este 24 mmHg, nu 8.']],
 8,'Distractorii umflă ulcerația de la 5-10% la 80% și înlocuiesc pragul controversat de 24 mmHg.',['5-10%','24 mmHg']),

q(56,['Factorul V Leiden, în datele de prevalență și risc:',
 ['Heterozigotul este prezent la circa 5% dintre europeni/mediteraneeni, lipsește în estul Asiei, crește riscul de TEV pe viață de cinci ori și este găsit la circa 20% din cazurile de TEV','La purtătoarele heterozigote pe contraceptiv oral combinat, riscul crește de circa 30 de ori față de non-purtătoarele fără pilulă, dar riscul absolut rămâne semnificativ sub 0,5% pe an','Homozigoții sunt mult mai rari, cu risc de tromboză circa de 10 ori mai mare decât heterozigoții','Mutația explică majoritatea trombozelor arteriale coronariene la vârstnici','Riscul absolut la tânăra pe pilulă depășește 10% pe an, contraindicând orice contraceptiv hormonal la non-purtătoare'],'ABC',1011,'Factorul V Leiden',
 'Integrarea 5%/5×/20%, a multiplicatorului 30× cu absolutul <0,5%/an și a homozigotului 10×.',
 ['Prevalența 5%, absența asiatică, 5× și 20% din TEV sunt din paragraf.','30× și plafonul <0,5%/an sunt explicite.','Homozigotul de ~10 ori față de heterozigot este enunțat.','Trombofiliile ereditare nu joacă un rol semnificativ arterial.','Textul subliniază că absolutul rămâne sub 0,5%/an.']],
 8,'Cere simultan 5×, 30× și <0,5%/an; distractorul transformă riscul relativ mare într-un absolut de 10%/an.',['cinci ori','0,5% pe an']),

q(57,['Mutația G20210A a genei protrombinei se caracterizează prin:',
 ['Creșterea nivelului de protrombină și a riscului de TEV de 2-3 ori pe viață; este prezentă la circa 2% din populația albă și la circa 5% dintre persoanele cu TEV','Un risc de 30 de ori, identic heterozigotului FV Leiden pe pilulă','Absența din TEV, fiind relevantă doar pentru tromboza arterială','Homozigotia este condiția necesară pentru a avea vreun efect','O prevalență de 20% în populația generală, identică FV Leiden din TEV'],'A',1011,'Mutația genei protrombinei G20210A',
 'Reținerea tripletului 2-3× / 2% populație albă / 5% din TEV, distinct de FV Leiden.',
 ['Cele trei cifre sunt enunțate explicit.','30× aparține interacțiunii FV Leiden–OCP.','Rolul este venos, nu arterial.','Textul nu cere homozigotie.','20% este ponderea FV Leiden în TEV, nu prevalența G20210A.']],
 8,'Distractorii aplică cifrele FV Leiden (30×, 20%) asupra mutației de protrombină 2-3×/2%/5%.',['G20210A','2-3 ori']),

q(58,['Deficitul de antitrombină, spre deosebire de FV Leiden:',
 ['Deficitul heterozigot este rar, crește riscul de TEV de circa 10 ori și se identifică prin activitate, nu printr-un test genetic unic','Nivelul poate fi scăzut dobândit (boală acută, chirurgie, heparină, ficat, sindrom nefrotic); pacienții pot fi relativ rezistenți la heparină, antitrombina fiind necesară acțiunii ei','Tratamentul fazei acute nu se schimbă după identificarea trombofiliei; testarea se face de preferință după faza acută și după ≥3 luni de anticoagulare','Deficitul se diagnostichează genetic din prima zi de heparină, nivelul scăzut fiind specific mutației','Heparina este mai eficientă în deficitul de AT, rezistența fiind infirmată'],'ABC',1011,'Pierderea funcției — Antitrombina',
 'Reținerea riscului 10×, a falsului AT scăzut sub heparină și a rezistenței relative la heparină.',
 ['10× și măsurarea activității sunt din paragraf.','Cauzele dobândite și rezistența la heparină sunt explicite.','Regula de a nu testa în acut și de a aștepta ≥3 luni este de la pagina următoare.','Nivelul scăzut poate fi dobândit; testarea genetică nu este metoda.','Textul descrie rezistență relativă, nu eficacitate crescută.']],
 8,'Distractorii transformă un AT scăzut iatrogen (heparină) într-un diagnostic genetic de urgență.',['aproximativ 10 ori','rezistenţi la heparină'],[1012]),

q(59,['Proteinele C și S, ca anticoagulanți naturali dependenți de vitamina K:',
 ['Inhibă Va și VIIIa; deficiențele heterozigote cresc riscul trombotic de cel puțin 5 ori; diagnosticul se bazează pe activitate/concentrație, nivelurile putând fi scăzute dobândit (acut, ficat, warfarină, deficit de K; proteina S și în sarcină/estrogeni)','Foarte rar, deficiențele homozigote se manifestă prin purpură fulminantă neonatală','Homozigoția este forma comună, cu risc arterial predominant','Warfarina crește nivelurile de proteină C/S, facilitând diagnosticul în timpul tratamentului','Deficiențele nu predispun la tromboză, ci doar la sângerare'],'AB',1012,'Proteina C și proteina S',
 'Contrastarea riscului ≥5× și a capcanei de laborator (warfarină, sarcină) cu purpura fulminantă homozigotă.',
 ['Țintele Va/VIIIa, ≥5× și cauzele de nivel scăzut dobândit sunt din paragraf.','Purpura fulminantă neonatală homozigotă este explicită.','Homozigoția este foarte rară, nu comună.','Warfarina scade nivelurile, îngreunând diagnosticul.','Deficiența predispune la tromboză prin generare crescută de trombină.']],
 8,'Distractorii inversează efectul warfarinei asupra PC/PS și confundă tromboza cu diateza hemoragică.',['cel puţin 5 ori','purpura fulminantă neonatală']),

q(60,['Diagnosticul de sindrom antifosfolipidic trebuie luat în considerare la:',
 ['TEV la vârstă sub 50 de ani, mai ales neprovocat sau cu factor minor, și tromboza venoasă cu localizare neobișnuită','Episoade venoase recurente sub anticoagulant și tromboză arterială inexplicabilă sub 50 de ani','Morbiditate obstetricală: ≥3 pierderi embrionare înainte de săptămâna 10, deces fetal neexplicat după săptămâna 10 sau naștere prematură înainte de săptămâna 34 prin preeclampsie severă/insuficiență placentară','APTT prelungit incidental, care în practică se asociază cu tendință protrombotică, nu hemoragică','SAFL reduce recurența TEV, DOAC fiind preferate warfarinei în această situație'],'ABCD',1012,'Sindromul antifosfolipidic — Când se consideră diagnosticul',
 'Recunoașterea clusterului de vârstă <50, sedii neobișnuite, recurență sub AC, arterial inexplicabil, criterii obstetricale și APTT paradoxal.',
 ['Vârsta <50 și sediul neobișnuit sunt primele indicații.','Recurența sub AC și arterialul tânăr completează lista.','Cele trei criterii obstetricale sunt din paragraf.','APTT prelungit cu fenotip protrombotic este capcana de laborator.','SAFL crește recurența; DOAC ar putea fi mai puțin eficiente decât warfarina.']],
 8,'Patru indicații reale; distractorul inversează recurența și preferința warfarină versus DOAC din închiderea paragrafului.',['<50 de ani','a 10-a săptămână']),

q(61,['Heparina cu greutate moleculară mică, spre deosebire de UFH, se caracterizează prin:',
 ['Lanțuri mai scurte: inhibarea trombinei de către antitrombină cere ≥18 zaharide, deci LMWH inhibă factorul Xa într-un grad mai mare decât trombina (Xa > IIa)','Administrare subcutanată, activitate maximă la 4 ore, timp de înjumătățire circa 4 ore, excreție renală','Cadranul 29.7 atribuie LMWH greutate 2.000-9.000 Da, față de 3.000-30.000 Da la UFH și 1.500 Da la fondaparinux','LMWH inhibă IIa mai mult decât Xa, identic UFH, și nu se excretă renal','Activitatea maximă este la 18 ore, identic fondaparinuxului, fără prudență în insuficiența renală'],'ABC',1014,'Heparina cu greutate moleculară mică; Cadranul 29.7',
 'Corelarea pragului de 18 zaharide (Xa > IIa) cu t½/Tmax de 4 ore și cu greutățile din tabel.',
 ['Mecanismul ≥18 zaharide și Xa > IIa sunt din paragraf.','4 ore (maxim și t½) și excreția renală sunt explicite.','Cele trei greutăți moleculare sunt din cadran.','UFH are Xa = IIa; LMWH are Xa > IIa.','18 ore este t½ al fondaparinuxului, nu al LMWH.']],
 8,'Distractorii inversează raportul Xa/IIa și atribuie LMWH t½-ul de 18 ore al fondaparinuxului din același tabel.',['18 zaharide','4 ore']),

q(62,['Utilizarea actuală a UFH în TEV este, potrivit capitolului, în mare măsură limitată la cazuri particulare cu risc crescut deoarece:',
 ['Timpul de înjumătățire scurt (1 oră), reversibilitatea cu protamină și lipsa excreției renale sunt proprietăți favorabile în aceste situații','Se absoarbe oral complet, fără nevoie de APTT','t½ de 18 ore o face impracticabilă în urgență','Protamina nu o inversează, identic fondaparinuxului','Este preferată tromboprofilaxiei de rutină, o singură injecție zilnică fiind suficientă'],'A',1014,'Heparina nefracționată — Locul actual',
 'Identificarea triadei t½ 1 oră / protamină / fără excreție renală ca motiv al rezervării UFH pentru cazurile cu risc crescut.',
 ['Cele trei proprietăți și limitarea la cazuri particulare sunt enunțate; tromboprofilaxia cu UFH este rară din cauza injecțiilor de 2-3 ori pe zi.','UFH este parenterală, ghidată de APTT.','t½ 18 ore aparține fondaparinuxului.','Protamina este antidotul UFH.','Textul spune că este rar utilizată pentru tromboprofilaxie.']],
 8,'Distractorii aplică t½-ul fondaparinuxului sau absența protaminei asupra UFH, al cărei loc restant este tocmai reversibilitatea renal-independentă.',['1 oră','sulfat de protamină']),

q(63,['Conform Cadranului 29.8, la un INR >5,0 fără sângerare se procedează astfel:',
 ['Se oprește warfarina, se reduce doza de întreținere și se investighează cauza INR-ului crescut','Majoritatea sângerărilor sub warfarină apar când INR este în intervalul terapeutic, riscul major crescând odată cu INR-ul','Se crește doza de warfarină pentru a „stabiliza” INR-ul peste 5','Sângerarea majoră apare doar peste INR 8, fiind nulă în ținta 2-3','Vitamina K se evită în orice INR crescut, chiar și la sângerare amenințătoare'],'AB',1016,'Cadranul 29.8 — INR crescut; Riscurile warfarinei',
 'Reținerea triadei (oprire, reducere, cauză) la INR >5 fără sângerare și a faptului că majoritatea sângerărilor sunt în țintă.',
 ['Cei trei pași sunt lista cadranului pentru INR >5 fără sângerare.','Apariția majorității sângerărilor în intervalul terapeutic este din paragraful de riscuri.','Doza se reduce, nu se crește.','Majoritatea sângerărilor sunt în țintă; nu sunt nule.','Cadranul tratează și sângerarea; vitamina K figurează în managementul INR crescut/sângerare.']],
 8,'Distractorii inversează reducerea dozei la INR >5 și pretind siguranță absolută în ținta 2-3, contrazisă de același paragraf.',['INR >5,0','intervalul terapeutic']),

q(64,['Profilul hemoragic al DOAC și antidoturile, dincolo de Tmax-ul de 2 ore deja consacrat:',
 ['Per global, risc similar sau mai scăzut de sângerare majoră, cu risc redus de hemoragie intracraniană, parțial contrabalansat de risc crescut de hemoragie gastrointestinală','În hemoragie majoră se oprește DOAC-ul, se dă suport (lichide, masă eritrocitară) și se consideră o intervenție specifică (ex. endoscopie)','Pentru dabigatran, idarucizumab se leagă rapid și antagonizează complet efectul; andexanet alfa pentru anti-Xa era în evaluare clinică','DOAC reduc sângerarea digestivă față de warfarină, ICH fiind mai frecventă','Idarucizumab este antidotul rivaroxabanului, dabigatranul neavând antagonist'],'ABC',1017,'DOAC — Sângerare; Antidoturi',
 'Contrastarea ICH↓ / GI↑ cu pachetul de suport și cu perechea idarucizumab (dabigatran) versus andexanet (anti-Xa).',
 ['Balansul ICH versus GI este din paragraf.','Cei trei pași de hemoragie majoră sunt lista.','Idarucizumab versus andexanet este distincția antidoturilor.','Direcțiile GI și ICH sunt inverse.','Idarucizumab este al dabigatranului, nu al rivaroxabanului.']],
 8,'Distractorii inversează ICH versus GI și atribuie idarucizumabul unui anti-Xa din același tablou de antidoturi.',['hemoragie intracraniană','ldarucizumab']),

q(65,['Cele trei faze tradiționale ale anticoagulării în TEV sunt:',
 ['Faza acută de 5-10 zile, faza de menținere de minimum 3 luni și faza de lungă durată dincolo de menținere','În faza acută se previne extensia (deci embolizarea); ulterior se previne recurența','Faza acută durează 3 luni, menținerea 5-10 zile, fără fază extinsă','Anticoagularea se limitează la 48 de ore, recurența fiind independentă de durată','Faza de menținere este opțională dacă s-a făcut tromboliză'],'AB',1006,'Tratament — Cele trei faze',
 'Reținerea ferestrelor 5-10 zile / ≥3 luni / extins și a scopurilor distincte (extensie versus recurență).',
 ['Cele trei faze și duratele sunt din deschiderea tratamentului.','Cele două scopuri pe faze sunt enunțate.','Duratele sunt inversate.','48 de ore este fereastra de externare precoce PESI, nu durata anticoagulării.','Menținerea de minimum 3 luni rămâne standardul, tromboliza fiind rară.']],
 8,'Distractorii permută 5-10 zile cu 3 luni și confundă faza acută cu fereastra PESI de 24-48 de ore.',['5-10 zile','minimum 3 luni']),
];
