import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-149;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('electroliti',9,pdfOffset,`electroliti-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const ELECTROLITI_C=[
q(51,['Identificați afirmația corectă referitoare la volumul arterial sanguin efectiv (VASE) și excreția de sodiu:',
 ['Plenitudinea arterială depinde de relația debit cardiac–rezistență periferică; expansiunea VASE poate crește Na+ urinar peste 100 mmol/L, iar depleția VASE cu funcție renală normală poate face urina practic liberă de Na+','Excreția de Na+ este independentă de VASE, fiind fixată la 50 mmol/L','Depleția VASE crește Na+ urinar peste 200 mmol/L, rinichiul fiind incapabil să conserve sodiul','VASE crește când scade debitul cardiac sau când crește capacitanța patului arterial','Reabsorbția tubulară este irelevantă, doar RFG determinând adaptarea la volum'],'A',173,'Volumul arterial efectiv — Excreția de sodiu',
 'Reținerea polarității VASE: Na+ urinar >100 mmol/L la expansiune versus urină aproape fără Na+ la depleție.',
 ['Relația debit–rezistență și cele două extreme ale Na+ urinar sunt enunțate.','Excreția variază cu VASE, nu este fixă.','Depleția conservă sodiul, deci Na+ urinar scade.','Scăderea debitului sau creșterea capacitanței inițiază scăderea VASE, nu creșterea.','Textul precizează că modificările reabsorbției tubulare sunt principalul răspuns adaptativ.']],
 8,'Distractorii inversează direcția Na+ urinar la depleție versus expansiune, capcana centrală a paragrafului VASE.',['peste 100 mmol/L','liberă de Na+']),

q(52,['Receptorii implicați în reglarea volemică, dincolo de lista anatomică deja consacrată, se ierarhizează astfel:',
 ['Receptorii de presiune arterială înaltă (carotidieni, arc aortic, aparat juxtaglomerular) au influență mai mare asupra controlului volumului lichidian la mamifere decât receptorii de volum de joasă presiune','Receptorii atriali controlează eliberarea ANP din granulațiile pereților atriali','Prostaglandinele I2 și E2, generate ca răspuns la angiotensina II, mențin RFG și modulează retenția de sodiu a hormonului','Receptorii de joasă presiune domină controlul volemic, baroreceptorii înalți fiind superfluți','ANP este eliberat din aparatul juxtaglomerular, nu din atrii'],'ABC',173,'Reglarea neuro-hormonală — Ierarhia receptorilor',
 'Contrastarea predominanței baroreceptorilor de înaltă presiune cu ANP atrial și cu prostaglandinele renale.',
 ['Ierarhia înaltă versus joasă presiune este fraza-cheie.','ANP din granulațiile atriale este explicit.','PG I2/E2 ca modulatori ai angiotensinei II sunt din paragraful receptorilor intrarenali.','Textul atribuie influența mai mare receptorilor de înaltă presiune.','ANP este atrial, renina fiind juxtaglomerulară.']],
 8,'Distractorii inversează ierarhia înaltă/joasă presiune și mută ANP pe aparatul juxtaglomerular.',['presiune arterială înaltă','peptidul natriuretic atrial']),

q(53,['Conform Fig. 9.6, cantitățile care intră zilnic în nefroni și cele excretate sunt:',
 ['Circa 180 L de apă și 26.000 mmol de sodiu intră zilnic pe arterele aferente','Se excretă aproximativ 1 L de apă și 60-180 mmol de sodiu pe zi','Se filtrează 1 L și 60 mmol, excretându-se 180 L și 26.000 mmol','Tot sodiul filtrat este excretat, reabsorbția fiind nulă','Apa filtrată este 42 L, identică apei totale a organismului'],'AB',175,'Fig. 9.6 — Filtrare versus excreție',
 'Reținerea ordinelor de mărime 180 L / 26.000 mmol filtrate versus ~1 L / 60-180 mmol excretate.',
 ['Cifrele de intrare 180 L și 26.000 mmol sunt din legendă.','Excreția ~1 L și 60-180 mmol completează bilanțul.','Sensul filtrare/excreție este inversat.','Reabsorbția netă este uriașă, nu nulă.','42 L este apa totală a bărbatului de 70 kg, nu filtrarea zilnică.']],
 8,'Distractorii permută 180 L filtrate cu 1 L excretat și reciclează 42 L (apa totală) din deschiderea capitolului.',['180 L','26.000 mmol']),

q(54,['Căile separate de osmoreglare și volemie, aplicate SIADH și ingestiei de sare fără apă:',
 ['În SIADH, excreția apei este afectată și apare hiponatremie de diluție prin ADH persistent, dar eliberarea ANP și a aldosteronului nu este împiedicată, manipularea Na+ rămânând intactă; corecția inițială cere restricție de apă','Ingestia de chipsuri/alune sărate fără băutură crește osmolalitatea, stimulează ADH și setea, iar hipervolemia crește ANP și suprimă aldosteronul, cu excreție de Na+ fără apă','ADH non-osmolar (stres, chirurgie, VASE redus, greață) acționează și prin receptori V1A vasculari, producând vasoconstricție','În SIADH, ANP și aldosteronul sunt blocate, deci se corectează mai întâi cu salină izotonă abundentă, fără restricție de apă','Sarea fără apă suprimă ADH, identic unei încărcări de apă liberă'],'ABC',177,'Osmoreglare versus volemie — SIADH; Sare fără apă',
 'Contrastarea restricției de apă din SIADH (Na+ intact) cu răspunsul dual ADH+ANP la sarea uscată și cu V1A.',
 ['Integritatea ANP/aldosteron și restricția de apă sunt implicațiile SIADH.','Profilul osmotic plus volemic al sării fără apă este exemplul din paragraf.','Stimulii non-osmolari și V1A sunt enunțate.','Textul cere restricție de apă tocmai pentru că manipularea Na+ e intactă.','Sarea crește osmolalitatea și stimulează ADH, nu îl suprimă.']],
 8,'Distractorii inversează conduita SIADH (restricție versus salină) și soarta ADH după sarea uscată.',['restricţia aportului de apă','receptorilor de tip V,A']),

q(55,['Edemul periferic prin expansiunea volumului extracelular, dincolo de pragul de 2 L deja consacrat, se distribuie clinic astfel:',
 ['Prima regiune afectată sunt gleznele; la față mai ales dimineața; la imobilizați, în regiunea sacrată; expansiunea interstițială poate da edem pulmonar, revărsate și ascită','Expansiunea volumului sanguin crește PVJ, dă cardiomegalie, zgomote supraadăugate, crepitații bazale și poate crește tensiunea arterială','Edemul începe la față seara și cruță gleznele, PVJ rămânând scăzută','Ascita exclude expansiunea interstițială, fiind un spațiu independent de Starling','Crepitațiile bazale infirmă expansiunea volemică, fiind specifice pneumonia'],'AB',177,'Creșterea volumului extracelular — Tablou clinic',
 'Separarea edemului interstițial (glezne, sacrat, seroase) de semnele de expansiune a volumului sanguin (PVJ, cardiomegalie).',
 ['Gradientul glezne–față–sacrat și seroasele sunt din paragraf.','Semnele de expansiune intravasculară sunt lista următoare.','Ordinea glezne versus față este inversă.','Ascita este o formă de expansiune interstițială după Starling.','Crepitațiile figurează printre semnele de expansiune a volumului sanguin.']],
 8,'Distractorii inversează sediul de start (glezne versus față) și scot crepitațiile din semnele de supraîncărcare.',['gleznele','regiunea sacrată']),

q(56,['Edemele induse medicamentos, în mecanismele ENaC și precapilare:',
 ['TZD (PPAR-γ) rețin sare și apă, sunt contraindicate în insuficiența cardiacă, iar diureticele de elecție sunt amiloridul și triamterenul, prin suprareglarea ENaC','Inițierea insulinei în DT1 și realimentarea după malnutriție dau edeme tranzitorii tot prin ENaC, amiloridul/triamterenul fiind de elecție','Blocanții de calciu dihidropiridinici (amlodipină) produc edem periferic la până la 10% din pacienți, prin relaxarea arteriolelor precapilare; dispare la oprire','Lemnul dulce (liquorice) potențează acțiunea cortizolului de retenție a sodiului, cu efect aldosteron-like','Amlodipina acționează pe ENaC, TZD fiind diuretice de ansă fără risc de edem'],'ABCD',178,'Retenția sodiului — TZD; Insulină; Amlodipină; Liquorice',
 'Contrastarea edemului ENaC (TZD, insulină → amilorid) cu edemul precapilar al amlodipinei (10%) și cu liquorice.',
 ['Mecanismul PPAR-γ/ENaC și amiloridul sunt explicite.','Perechea insulină/realimentare cu același diuretic este enunțată.','Cifra de 10% și relaxarea precapilară sunt din paragraf.','Liquorice și cortizolul completează lista aldosteron-like.','Amlodipina este precapilară, nu ENaC; TZD cauzează edem, nu îl tratează ca diuretice de ansă.']],
 8,'Patru mecanisme reale; distractorul permută ENaC de pe TZD pe amlodipină.',['până la 10%','amilorodul']),

q(57,['În tratamentul expansiunii volemice, restricția de sodiu și „spațiul al treilea”:',
 ['Aportul de sodiu poate fi redus ușor la circa 100 mmol (2 g) zilnic; scăderile sub această valoare sunt greu de obținut fără a afecta gustul; restricția are rol limitat, util la rezistența la diuretice','Se pot acumula câțiva litri în pleură sau ascită („spațiul al treilea”) fără edeme evidente și fără creșterea PVC; oasele pot acționa ca scurgere pentru Na+ și apă','Restricția sub 20 mmol/zi este ușoară și înlocuiește diureticele la toți pacienții','Spațiul al treilea nu există, lichidul pleural crescând imediat PVC','Oasele nu stochează sodiu, Na-IRM infirmând depozitele extrarenale'],'AB',178,'Tratament — Restricție de sodiu; Spațiul al treilea',
 'Reținerea țintei ~100 mmol (2 g) și a sechestrării în spațiul al treilea/oase fără edem sau PVC crescută.',
 ['100 mmol / 2 g și limita gustului sunt explicite.','Spațiul al treilea și oasele ca scurgere sunt din același paragraf.','Sub 100 mmol este descris ca dificil, nu ușor.','Textul spune tocmai că PVC poate rămâne nemodificată.','Paragraful de Na-IRM de la p. 183 documentează depozite extrarenale; aici oasele sunt menționate ca scurgere.']],
 8,'Distractorii coboară ținta de 100 mmol la 20 și neagă sechestrarea în spațiul al treilea.',['100 mmol (2 g)','spaţiul al treilea']),

q(58,['Conform Cadranului 9.6, clasele de diuretice se deosebesc prin:',
 ['Diureticele de ansă (furosemid, bumetanidă, torasemid) blochează co-transportul Na+-Cl−-K+ în brațul gros ascendent, cu potență +++, în supraîncărcare (ICC, nefrotic, BCR) și SIADH','Tiazidele (bendroflumetiazidă, clortalidonă, metolazon, indapamid) blochează co-transportul Na+-Cl−, potență ++, în HTA, ICC și hipercalciurie','Economisitoarele de K+ acționează pe reabsorbția Na+ (schimb cu K+) în celulele principale; antagoniștii de aldosteron (spironolactonă, eplerenonă) în hiperaldosteronism, Bartter și IC','Tiazidele blochează NKCC2 în ansă, cu potență superioară furosemidului','Acetazolamida este diureticul de elecție al SIADH, cu potență identică ansei'],'ABC',179,'Cadranul 9.6 — Tipuri de diuretice',
 'Reținerea sitului (NKCC2 versus NCC versus ENaC/aldosteron) și a potențelor +++ / ++ / +.',
 ['Situl ansei, exemplele, potența +++ și indicațiile inclusiv SIADH sunt din tabel.','NCC, potența ++ și hipercalciuria sunt rândul tiazidic.','Celulele principale și indicațiile antialdosteronice completează clasa.','NKCC2 este al ansei, nu al tiazidelor.','Acetazolamida este inhibitor de anhidrază carbonică, nu elecția SIADH.']],
 8,'Distractorii permută NKCC2 și potența +++ de pe ansă pe tiazide, distincția centrală a cadranului.',['Co-transportul Na•-cI--K+','Potenţi']),

q(59,['Hiponatremia euvolemică postoperatorie și la efort, în datele de risc:',
 ['Hiponatremia postoperatorie apare la circa 1% dintre pacienți, iar dintre aceștia 20% au formă simptomatică','Cea mai comună cauză iatrogenă este glucoza 5% cu potasiu în exces postoperator, exacerbată de ADH de stres','Femeile premenopauză au risc maxim de encefalopatie: valorile postoperatorii de ADH sunt de 40 de ori mai mari decât la bărbații tineri; se evită lichidele hipotone, preferându-se salina 0,9% dacă nu este contraindicată','Băuturile „izotone” de efort conțin mult Na+, deci nu pot produce hiponatremie','La funcție renală normală, 1 L/oră de apă produce invariabil hiponatremie de diluție'],'ABC',184,'Hiponatremia euvolemică — Postoperator; Maraton',
 'Integrarea 1%/20%, a multiplicatorului ADH 40× la femeia tânără și a capcanei băuturilor „izotone”.',
 ['1% și 20% simptomatice sunt cifrele din paragraf.','Glucoza 5% plus ADH de stres este cauza iatrogenă comună.','40× și evitarea hipotonicelor sunt explicite.','„Izotonele” au puțin Na+, osmolalitatea venind din hidrați metabolizați la apă.','Textul spune că diluția este rară chiar la ~1 L/oră dacă funcția renală e normală.']],
 8,'Cere simultan 1%, 20% și 40×; distractorul transformă băutura „izotonă” într-o protecție salină.',['aproximativ 1%','40 de ori']),

q(60,['Pentru a evita sindromul de demielinizare osmotică, concentrația plasmatică a sodiului la hiponatremici nu trebuie să crească cu mai mult de:',
 ['8 mmol/L pe zi; viteza trebuie să fie și mai mică la alcoolici, cirotici, malnutriți sau hipokaliemici','2 mmol/L pe zi la toți pacienții, indiferent de teren','25 mmol/L în prima oră, SDO fiind infirmat la alcoolici','8 mmol/L pe oră, ținta zilnică fiind irelevantă','Nicio limită, dacă se folosește salină 3%'],'A',185,'Sindromul de demielinizare osmotică',
 'Reținerea plafonului 8 mmol/L/zi și a terenurilor de risc (alcool, ciroză, malnutriție, hipokaliemie).',
 ['8 mmol/L/zi și lista de risc crescut sunt explicite.','2 mmol/L/zi nu este plafonul general.','25 mmol/oră ar fi o corecție periculoasă; alcoolicii sunt tocmai la risc.','Limita este pe zi, nu pe oră.','Salina 3% nu anulează plafonul de 8 mmol/L/zi.']],
 8,'Distractorii permută 8 mmol/L de pe zi pe oră sau anulează terenul de risc al SDO.',['8 mmol/l/zi','demielinizare osmotică']),

q(61,['În hiponatremia acută cu semne neurologice severe, administrarea salinei 3% (513 mmol/L) se ghidează după:',
 ['Viteza nu mai mult de 70 mmol/oră','Obiectivul de a crește Na+ seric cu 4-6 mmol/L în primele 4 ore','Creșterea absolută să nu depășească 15-29 mmol/L în 48 de ore; în general Na+ nu se corectează peste 125-130 mmol/L','Cauze comune: hiponatremia postoperatorie iatrogenă, ingestie psihotică de apă, maraton, ecstasy','Salina 3% se dă în bolus de 500 mmol/oră până la Na+ 140 mmol/L în 2 ore'],'ABCD',185,'Debut acut cu simptome — Salină 3%',
 'Integrarea plafonului 70 mmol/oră, a ținței 4-6 mmol/4 ore și a limitelor 15-29 mmol/48 h și 125-130 mmol/L.',
 ['Limita 70 mmol/oră este explicită.','Ținta 4-6 mmol în 4 ore este enunțată.','Plafoanele 15-29/48 h și 125-130 completează ghidajul.','Cele patru cauze de urgență sunt lista.','500 mmol/oră și ținta 140 în 2 ore încalcă toate plafoanele.']],
 8,'Patru plafoane reale; distractorul înlocuiește 70 mmol/oră cu un bolus de 500 mmol spre 140 mmol/L.',['70 mmol/ore','4-6 mmol/l']),

q(62,['După corectarea cauzei reversibile a retenției de apă (hipovolemie, tiazide), sodiul plasmatic poate crește cu până la:',
 ['2 mmol/L pe oră, prin diureză apoasă; această diureză trebuie anticipată și prevenită cu desmopresină','0,1 mmol/L pe zi, desmopresina fiind contraindicată','10 mmol/L pe minut, fără risc de SDO','2 mmol/L pe săptămână, independent de vasopresină','Potasiul scăzut protejează de supracorecție, înlocuirea K+ neinfluențând Na+'],'A',186,'Hiponatremia reversibilă convertită la hipernatremie',
 'Reținerea vitezei de 2 mmol/L/oră după căderea vasopresinei și a rolului desmopresinei, plus capcana K+.',
 ['2 mmol/L/oră și desmopresina sunt din deschidere; înlocuirea unui deficit masiv de K+ (Na <120, K <2) poate produce SDO.','Viteza citată este 2 mmol/oră, nu 0,1/zi.','10 mmol/minut ar fi catastrofal.','Fereastra este orară, mediată de căderea vasopresinei.','K+ scăzut crește susceptibilitatea la supracorecție, iar administrarea de K+ crește Na+.']],
 8,'Distractorii comprimă sau dilată viteza de 2 mmol/L/oră și neagă rolul desmopresinei și al potasiului în SDO.',['2 mmol/L pe oră','desmopresinei']),

q(63,['Antagoniștii de vasopresină (vaptani) se caracterizează prin:',
 ['Lixivaptan, tolvaptan și satavaptan sunt selectivi pe V2; conivaptanul blochează V1A și V2','Produc diureză apoasă fără a afecta excreția de Na+ și K+; cresc Na+ în SIADH, IC și ciroză','Tolvaptanul oral a crescut Na+ mediu de la 129 la 136 mmol/L în 4 săptămâni; conivaptan i.v. 20 mg în 1-4 zile, cu risc de flebită (venă mare, schimbarea locului la 24 de ore)','Vaptanii cresc excreția de Na+ și K+, fiind evitanți în SIADH','Conivaptanul se administrează oral 12 săptămâni, fără risc de flebită'],'ABC',186,'Antagoniștii vasopresinei',
 'Contrastarea selectivității V2 versus V1A+V2, a diurezei apei libere și a schemei conivaptan 20 mg/1-4 zile cu flebită.',
 ['Selectivitatea celor trei orali versus conivaptan este explicită.','Diureza apoasă fără Na/K și indicațiile sunt enunțate.','129→136 mmol/L, 20 mg/1-4 zile și flebita sunt din închidere.','Textul spune că nu afectează excreția de Na+ și K+.','Conivaptanul este i.v., nu oral cronic.']],
 8,'Distractorii inversează efectul pe Na+/K+ și calea conivaptanului (i.v. cu flebită versus oral lung).',['tolvaptan','20 mg în 1-4 zile']),

q(64,['În hipernatremia severă (>170 mmol/L), capitolul recomandă inițial:',
 ['Soluție salină 0,9% (150 mmol/L); se evită scăderile bruște, obiectivul fiind corecția în 48 de ore, o corecție prea rapidă putând da edem cerebral','Glucoză 5% în bolus până la Na+ 140 mmol/L în 2 ore','Apă pură intravenoasă, pentru liza osmotică controlată','Desmopresină de primă intenție, independent de volemie','Salină 3%, ca în hiponatremia acută'],'A',187,'Hipernatremia — Tratament',
 'Identificarea salinei 0,9% ca start la Na+ >170 mmol/L și a ferestrei de 48 de ore contra edemului cerebral.',
 ['Salina 0,9% (150 mmol/L), evitarea scăderii bruște și 48 de ore sunt explicit; la >150 mmol/L se trece pe glucoză 5% sau 2,5%.','Corecția în 2 ore riscă edem cerebral.','Apa pură i.v. ar liza hematiile (paragraf anterior).','Desmopresina privește prevenția supracorecției hiponatremiei, nu startul hipernatremiei.','Salina 3% este a hiponatremiei acute simptomatice.']],
 8,'Distractorii aplică salina 3% sau glucoza rapidă asupra hipernatremiei >170, unde textul cere NaCl 0,9% și 48 de ore.',['>170 mmol/L','48 ore']),

q(65,['Intrarea potasiului în celulă, potrivit reglării Na+/K+-ATP-azei și a H+:',
 ['Este stimulată de insulină, stimulare β-adrenergică și teofilină','Este diminuată de stimulare α-adrenergică, de acidoză (schimb K+–H+) și de lezarea/moartea celulară cu eliberare masivă de K+','Rinichiul menține echilibrul de K+ prin variația secreției în funcție de aport','Insulina și teofilina scot K+ din celulă, β-agoniștii fiind evitanți în hiperkaliemie','Acidoza introduce K+ în celulă, α-stimularea fiind kalemiantă prin retenție'],'ABC',187,'Reglarea concentrației de potasiu seric',
 'Separarea stimulatorilor de intrare (insulină, β, teofilină) de factorii care cresc K+ extracelular (α, acidoză, liză).',
 ['Cei trei stimulatori sunt lista.','Cei trei factori de diminuare/eliberare sunt lista următoare.','Variația secreției renale cu aportul este enunțată imediat după listele transmembranare.','Direcția insulinei/teofilinei este inversă.','Acidoza scoate K+ (schimb cu H+), nu îl introduce.']],
 8,'Distractorii inversează shuttle-ul insulină/β versus α/acidoză, două liste alăturate în același paragraf.',['stimulare p-adrenergică','teofilină']),

q(66,['Suxametoniul și relaxanții depolarizanți, în timpul anesteziei generale:',
 ['Determină eliberarea potasiului din celule, cu o creștere de până la 1 mmol/L; de obicei nu e o problemă în absența hiperkaliemiei anterioare','Nu modifică kalemia, fiind preferați tocmai în hiperkaliemia preexistentă','Cresc K+ cu 5 mmol/L la toți pacienții eukaliemici','Blochează eliberarea de K+, fiind antidotul hiperkaliemiei intraoperatorii','Creșterea de 1 mmol/L apare doar după 48 de ore, nu la inducție'],'A',190,'Suxametoniul — Eliberarea iatrogenă de K+',
 'Reținerea creșterii de până la 1 mmol/L la inducția cu suxametoniu, relevantă doar pe teren hiperkaliemic.',
 ['Eliberarea din celule și delta de până la 1 mmol/L sunt enunțate.','Textul avertizează tocmai dacă există hiperkaliemie anterioară.','5 mmol/L nu este cifra citată.','Suxametoniul eliberează K+, nu îl scade.','Creșterea este la inducția anesteziei, nu după 48 de ore.']],
 8,'Distractorii transformă o creștere de ≤1 mmol/L la inducție într-un antidot sau într-o creștere de 5 mmol/L.',['Suxametoniul','1 mmol/L']),

q(67,['În urgența hiperkaliemiei, protecția membranei și mutarea transcelulară se deosebesc astfel:',
 ['Ionii de calciu protejează membranele (restabilesc dependența de voltaj a canalelor de Na+ inactivate de K+), dar nu modifică concentrația potasiului','Insulina i.v. suprafiziologică (10-20 unități) introduce K+ în celule și scade K+ plasmatic cu 1 mmol în 60 de minute, asociată cu glucoză; glicemia se verifică la 6 ore','Glucoza singură la nediabetic nu atinge nivelurile de insulină necesare, deci nu este recomandată','Calciul scade K+ cu 1 mmol în 60 de minute, insulina neavând efect transcelular','Glucoza fără insulină este schema de elecție la nediabetic'],'ABC',190,'Cadranul 9.20 — Calciu versus insulină',
 'Separarea protecției de membrană (Ca2+, fără ΔK+) de mutarea transcelulară (insulină 10-20 U, −1 mmol/60 min).',
 ['Protecția fără modificare a K+ este explicită.','Doza 10-20 U, −1 mmol/60 min, glucoza asociată și verificarea la 6 ore sunt din paragraf.','Glucoza izolată la nediabetic este descurajată.','Calciul nu scade K+; acesta este efectul insulinei.','Textul nu recomandă glucoza singură la nediabetic.']],
 8,'Distractorii atribuie calciului scăderea de 1 mmol/60 min a insulinei, confuzia clasică urgență-versus-shift.',['10-20 unități','1 mmol în 60 min']),

q(68,['Un potasiu seric peste 7,0 mmol/L reprezintă, potrivit capitolului:',
 ['O urgență medicală asociată cu modificări ECG, care poate fi asimptomatică și predisune la moarte subită prin asistolă; depolarizarea membranelor crește excitabilitatea cardiacă, cu hipotensiune, bradicardie și în final asistolă','O valoare fiziologică post-efort, fără indicație de tratament','Pragul de hipokaliemie severă, cu risc de torsadă','O indicație de a omite ECG-ul, astenia fiind suficientă','Un stimulent al canalelor de sodiu, calciul fiind contraindicat'],'A',190,'Tablou clinic — Hiperkaliemia severă',
 'Identificarea pragului >7,0 mmol/L ca urgență, posibil silențioasă, cu asistolă ca deznodământ.',
 ['Pragul >7,0, ECG, asistolia posibil silențioasă și secvența hipotensiune–bradicardie–asistolă sunt enunțate.','Efortul dă hiperkaliemie acută autolimitantă, dar >7 nu este „fiziologic de ignorat”.','>7 este hiper-, nu hipokaliemie.','ECG-ul este parte a urgenței.','K+ inactivează canalele de Na+; calciul le restabilește.']],
 8,'Distractorii transformă pragul de urgență >7 mmol/L într-o variantă fiziologică sau într-o hipokaliemie.',['> 7.0 mmol/L','asistolă']),

q(69,['Edemele idiopatice se caracterizează prin:',
 ['Tendință de a apărea la femei fără IC, hipoalbuminemie sau boli renale/endocrine; sunt intermitente, se accentuează premenstrual și se remit după menopauză','Retenție de sodiu ziua și creșterea excreției în decubit; posibilă scădere anormală a volumului plasmatic la ridicare prin permeabilitate capilară crescută la proteine','Sunt forma tipică de edem la bărbatul cu insuficiență cardiacă, fără variație menstruală','Se datorează hipoalbuminemiei nefrotice, amiloridul fiind inutil','Menopauza le agravează, retenția de Na+ fiind maximă noaptea'],'AB',178,'Edemele idiopatice',
 'Recunoașterea terenului feminin ciclic, a remisiunii post-menopauză și a patternului zi/decubit.',
 ['Terenul, intermitența, premenstrualul și remisiunea sunt din paragraf.','Patternul zi versus decubit și ipoteza permeabilității sunt explicite.','Textul le plasează la femei fără IC.','Hipoalbuminemia este exclusă prin definiție.','Remisiunea este după menopauză; retenția este diurnă.']],
 8,'Distractorii mută edemul idiopatic pe IC/nefrotic masculin și inversează efectul menopauzei.',['femeile','după menopauză']),

q(70,['Hiponatremia de diluție la funcție renală normală și băuturile de efort:',
 ['La funcție renală normală, hiponatremia de diluție este rară chiar dacă se bea circa 1 L pe oră','Alergătorii de maraton care beau apă excesiv pot deveni hiponatremici; băuturile „sportive izotone” conțin puțin sodiu, osmolalitatea venind din hidrați de carbon metabolizați la apă și energie','Sodiul seric trebuie măsurat zilnic la pacienții postoperatori care primesc lichide','1 L/oră produce invariabil hiponatremie, rinichiul neputând excreta apa liberă','Băuturile izotone de efort previn hiponatremia prin conținutul ridicat de Na+'],'ABC',184,'Hiponatremia euvolemică — Capacitatea de excreție; Maraton',
 'Contrastarea capacității de ~1 L/oră a rinichiului normal cu capcana băuturilor „izotone” sărace în Na+.',
 ['Raritatea diluției la ~1 L/oră este explicită.','Maratonul și metabolizarea glucidelor la apă sunt din paragraf.','Măsurarea zilnică postoperatorie este recomandarea de prevenție.','Textul spune că diluția este rară la 1 L/oră dacă funcția e normală.','„Izotonele” au puțin Na+.']],
 8,'Distractorii transformă capacitatea de 1 L/oră într-o inevitabilitate și pretind că băutura „izotonă” este salină.',['1 L pe oră','băuturi sportive izotone']),
];
