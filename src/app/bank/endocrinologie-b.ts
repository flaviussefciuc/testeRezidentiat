import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=618?p-523:p-525;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('endocrinologie',21,pdfOffset,`endocrinologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const ENDOCRINOLOGIE_B=[
q(21,['Conform Cadranului 21.25, efectele fiziologice ale hormonilor tiroidieni includ:',
 ['Creșterea ritmului și debitului cardiac; creșterea sensibilității la catecolamine și a numărului de receptori β-adrenergici în inimă, mușchi, adipocite și limfocite, cu scăderea receptorilor α-adrenergici cardiaci','Menținerea stimulării hipoxice și hipercapnice a centrului respirator și creșterea motilității intestinale','Creșterea 2,3-BPG eritrocitar, facilitând eliberarea de oxigen către țesuturi, plus creșterea gluconeogenezei/glicolizei hepatice și a absorbției intestinale de glucoză','Creșterea lipolizei și a sintezei/degradării colesterolului, a ratei de remodelare osoasă și a vitezei de contracție/relaxare musculară','Scăderea debitului cardiac, blocarea 2,3-BPG și creșterea receptorilor α-adrenergici cardiaci, cu scăderea celor β'],'ABCD',611,'Cadranul 21.25 — Efectele fiziologice ale hormonilor tiroidieni',
 'Integrarea efectelor CV (β↑/α↓), respiratorii, eritrocitare (2,3-BPG) și metabolice, distinct de profilul inversat.',
 ['Perechea CV plus β↑/α↓ este din rândurile cardiovascular și simpatic.','Centrul respirator și motilitatea GI sunt două rânduri consecutive.','2,3-BPG și metabolismul glucidic completează sângele și carbohidrații.','Lipidele, osul și mușchiul închid tabelul.','Profilul inversat (debit↓, α↑, β↓) contrazice cadranul.']],
 8,'Patru rânduri reale ale tabelului trebuie ținute împreună; distractorul inversează β versus α și soarta 2,3-BPG.',['2,3-BPG','receptori β-adrenergici']),

q(22,['Profilul din Cadranul 21.26 care definește T3-toxicoza este:',
 ['TSH supresat (<0,05 mU/L), fT4 normală, fT3 crescută','TSH crescut (>10 mU/L), fT4 scăzută, fT3 scăzută','TSH 5-10 mU/L, fT4 și fT3 normale','TSH supresat, fT4 crescută, fT3 crescută, ca tirotoxicoza obișnuită','TSH normal, fT4 crescută, fT3 scăzută'],'A',611,'Cadranul 21.26 — T3 toxicoza',
 'Separarea T3-toxicozei (TSH↓, fT4 N, fT3↑) de tirotoxicoza clasică și de eutiroidismul compensat.',
 ['Acesta este rândul „T3 Toxicoza” din tabel, cu analizele informative îngroșate.','Profilul descrie hipotiroidismul primar.','TSH 5-10 cu hormoni liberi normali este eutiroidismul compensat.','Tirotoxicoza obișnuită are și fT4 crescută.','Acest amestec nu figurează în cadran.']],
 8,'Distractorii sunt celelalte rânduri reale ale aceluiași tabel (hipotiroidism, compensat, tirotoxicoză clasică).',['T3 Toxicoza','<0.05mU/L']),

q(23,['Eutiroidismul compensat, în Cadranul 21.26, se recunoaște prin:',
 ['TSH ușor ridicat (5-10 mU/L)','fT4 normală și fT3 normală','TSH supresat cu fT3 izolat crescută','TSH >10 mU/L cu fT4 scăzută','TSH nedetectabil cu ambii hormoni liberi crescuți'],'AB',611,'Cadranul 21.26 — Eutiroidism compensat',
 'Reținerea ferestrei TSH 5-10 mU/L cu hormoni liberi normali, distinct de T3-toxicoză și de hipotiroidismul primar.',
 ['Intervalul 5-10 mU/L este cel al rândului compensat.','Ambii hormoni liberi normali completează profilul.','TSH supresat + fT3↑ este T3-toxicoza.','TSH >10 cu fT4 scăzută este hipotiroidismul primar.','TSH nedetectabil cu T4/T3 crescute este tirotoxicoza.']],
 8,'Distractorii sunt rândurile vecine ale tabelului, cu TSH mutată cu o treaptă.',['5-10mU/L','Eutiroidism compensat']),

q(24,['Deficitul alimentar de iod, în datele de la sfârșitul secolului XX:',
 ['Există ca „gușă endemică” în zone unde gușa, uneori masivă, este întâlnită cu frecvență înaltă','Pacienții sunt eu- sau hipotiroidieni, în raport cu severitatea deficitului; mecanismul este hipotiroidismul de graniță cu stimulare TSH și creșterea tiroidei','Din cele 500 de milioane de cazuri cu deficit de iod din India, aproximativ 2 milioane prezentau cretinism','Deficitul de iod a dispărut complet după iodarea sării, inclusiv în India','Cretinismul a fost documentat la 500 de milioane de indieni, gușa endemică fiind rară'],'ABC',612,'Deficitul de iod',
 'Reținerea magnitudinii indiene (500 de milioane / 2 milioane cretinism) și a mecanismului TSH-gușă.',
 ['Gușa endemică masivă este cadrul epidemiologic.','Eu-/hipotiroidismul proporțional cu deficitul și stimularea TSH sunt mecanismul.','Cifrele 500 de milioane și 2 milioane sunt din închidere.','Textul spune că iodarea are succes incomplet.','Cifrele sunt inversate: 500 de milioane au deficit, 2 milioane cretinism.']],
 8,'Distractorii inversează 500 de milioane versus 2 milioane și neagă persistența problemei după iodarea sării.',['500 de milioane','2 milioane']),

q(25,['Diagnosticul diferențial al hipertiroidismului cu anxietatea se sprijină pe:',
 ['Markeri clinici pozitivi: semne oculare, gușă difuză, miopatie proximală și scădere ponderală','Circulația hiperdinamică cu tegumente periferice calde, în contrast cu mâinile reci și umede din anxietate','Mâinile reci și umede ca semn de hipertiroidism, gușa fiind rară în Graves','Pierderea în greutate cu apetit scăzut ca singurul marker de anxietate','Absența semnelor oculare și a gușii ca argument pentru Graves'],'AB',616,'Diagnostic diferențial — Anxietate versus hipertiroidism',
 'Contrastarea tegumentelor calde hiperdinamice și a pachetului ocular/gușă/miopatie/scădere ponderală de mâinile reci umede ale anxietății.',
 ['Cei patru markeri pozitivi sunt lista din paragraf.','Contrastul cald versus rece-umed este fraza-cheie.','Mâinile reci umede sunt ale anxietății, nu ale hipertiroidismului.','Pierderea în greutate cu apetit păstrat/crescut este utilă pentru hipertiroidism.','Semnele oculare și gușa sunt tocmai markerii pozitivi.']],
 8,'Distractorii inversează mâinile calde versus reci-umede, distincția centrală a paragrafului.',['mâini reci şi umede','tegumente periferice calde']),

q(26,['În confirmarea biochimică a hipertiroidismului sunt adevărate:',
 ['TSH este suprimat (<0,05 mU/L), cu excepția cazurilor foarte rare de hipersecreție de TSH','T3 este mai sensibilă, existând cazuri ocazionale de T3-toxicoză izolată; un nivel ridicat de fT4 sau fT3 confirmă diagnosticul','TRAb de generația a treia sunt 97-99% specifice pentru boala Graves','Anti-TPO și anti-Tg, prezenți în 80% din Graves, sunt 97-99% specifici și înlocuiesc TRAb','Tratamentul se începe pe baza tabloului clinic, fără confirmare biochimică'],'ABC',616,'Investigații — Hipertiroidism',
 'Integrarea TSH suprimat, a sensibilității T3 și a specificității 97-99% a TRAb, distinct de anti-TPO nespecifici.',
 ['Pragul <0,05 mU/L și excepția de hipersecreție TSH sunt enunțate.','Sensibilitatea superioară a T3 și confirmarea prin fT4/fT3 sunt din listă.','97-99% este specificitatea TRAb de generația a treia.','Anti-TPO/Tg apar și la persoane fără patologie confirmată; specificitatea 97-99% este a TRAb.','Textul cere confirmare biochimică înaintea tratamentului.']],
 8,'Distractorii mută specificitatea 97-99% de pe TRAb pe anti-TPO și autorizează tratamentul fără laborator.',['97-99%','T3 toxicoză'],[611]),

q(27,['Beta-blocantele în hipertiroidism, potrivit capitolului:',
 ['Sunt utile pentru control simptomatic parțial rapid, multe manifestări fiind mediate simpatic; scad și conversia periferică T4→T3','Se preferă preparatele fără activitate simpatomimetică intrinsică, de exemplu propranolol; nu se folosesc ca monoterapie decât în evoluția autolimitantă (tiroidită subacută)','Sunt monoterapia de primă intenție în Graves, în locul antitiroidienelor','Se preferă preparatele cu activitate simpatomimetică intrinsică, propranololul fiind evitat','Nu influențează conversia T4 în T3'],'AB',616,'Beta-blocantele — Control simptomatic',
 'Reținerea preferinței pentru absența ISA (propranolol) și a interdicției de monoterapie, exceptând tiroidita subacută.',
 ['Controlul simptomatic rapid și scăderea conversiei sunt cele două efecte.','Fără ISA, exemplul propranolol și excepția subacută sunt explicitate.','Antitiroidienele, nu beta-blocantul, sunt terapia de fond a Graves.','Textul preferă absența ISA.','Scăderea conversiei T4→T3 este enunțată.']],
 8,'Distractorii inversează ISA versus non-ISA și transformă adjuvantul simptomatic în monoterapie a Graves.',['activitate simpaticomimetică','tiroidita subacută']),

q(28,['Administrarea iodului radioactiv 131I, în detaliile de protocol, include:',
 ['Doza empirică este de obicei 400-550 MBq, ținând seama de captarea și radiosensibilitatea variabilă','Antitiroidianul se sistează cu cel puțin 4 zile înainte și nu se reîncepe mai devreme de 3 zile după','Eutiroidismul se instalează de regulă în 2-3 luni; hipotiroidismul apare la majoritatea în următorii 20 de ani, circa 75% eutiroidizându-se pe termen scurt','Nu există risc neoplazic crescut după IRA','Doza standard este 50 MBq, antitiroidienele continuându-se fără întrerupere până în ziua administrării'],'ABCD',617,'Iodul radioactiv — Protocol',
 'Reținerea dozei 400-550 MBq, a ferestrelor 4 zile / 3 zile, a eutiroidiei la 2-3 luni și a hipotiroidismului pe 20 de ani.',
 ['400-550 MBq este doza empirică citată.','Cele două ferestre 4 zile și 3 zile sunt protocolul.','2-3 luni, 75% pe termen scurt și hipotiroidismul pe 20 de ani sunt din supraveghere.','Absența riscului neoplazic este enunțată.','50 MBq și continuarea ATD contrazic protocolul.']],
 8,'Distractorul coboară doza de zece ori și anulează fereastra de întrerupere a antitiroidienelor.',['400-550 MBq','2-3 luni']),

q(29,['Pregătirea preoperatorie a tiroidectomiei, potrivit capitolului:',
 ['Se realizează doar la pacienți eutiroidieni','Antitiroidianul se sistează uzual cu 10-14 zile înainte','Se administrează iodură de potasiu 60 mg de 3 ori pe zi, care reduce vascularizația și sinteza hormonală prin inhibarea organificării (efect Wolff–Chaikoff)','Intervenția se face de preferință în tirotoxicoză necontrolată, iodura fiind inutilă','Iodura de potasiu crește vascularizația, fiind evitată preoperator'],'ABC',617,'Tratamentul chirurgical — Pregătire',
 'Asocierea eutiroidiei, a ferestrei 10-14 zile și a iodurii 60 mg × 3 (Wolff–Chaikoff) ca reducători de vascularizație.',
 ['Condiția eutiroidiană este prima frază.','10-14 zile este fereastra de oprire a ATD.','60 mg × 3 și Wolff–Chaikoff sunt schema de iodură.','Textul cere eutiroidie, nu operație pe tirotoxicoză.','Iodura reduce, nu crește, vascularizația.']],
 8,'Distractorii inversează efectul iodurii asupra vascularizației și autorizează chirurgia pe tirotoxicoză necontrolată.',['60 mg','Wolff-Chaikoff']),

q(30,['Complicațiile tiroidectomiei, în cifrele din capitol, includ:',
 ['Pareza de nerv laringeu în 1% din cazuri; preoperator se verifică mobilitatea corzilor vocale','Hipocalcemia tranzitorie în maxim 10% din cazuri, hipoparatiroidismul permanent la mai puțin de 1%','Sângerarea precoce cu compresie traheală ca urgență rară care impune suprimarea imediată a clipsurilor','Pareza de nerv laringeu în 25% din cazuri, hipoparatiroidismul permanent în 30%','Hipocalcemia tranzitorie lipsește, fiind înlocuită de hipertiroidism de rebound'],'ABC',617,'Complicațiile tiroidectomiei',
 'Reținerea cifrelor 1% (laringeu), ≤10% (hipocalcemie tranzitorie) și <1% (hipoparatiroidism permanent).',
 ['1% și verificarea corzilor sunt din listă.','Maxim 10% și <1% sunt cifrele calciului.','Sângerarea cu decompresie de urgență este prima complicație.','25% și 30% exagerează de un ordin de mărime.','Hipocalcemia tranzitorie este tocmai complicația citată.']],
 8,'Distractorii umflă 1% și 10% la 25–30% și neagă hipocalcemia tranzitorie din aceeași listă.',['1% din cazuri','maxim 10%']),

q(31,['Tiroidectomia „subtotală” versus „cvasitotală” în Graves sau gușa multinodulară:',
 ['Tehnica subtotală tradițională, menită să păstreze eutiroidia fără tratament, se soldează cu recurența hipertiroidismului la 1-3% în primul an, apoi încă 1% pe an, și cu hipotiroidism la circa 10% în primul an, procent care crește în timp','De aceea, tiroidectomia cvasitotală este tehnica preferată, cu hipotiroidism inevitabil dar cu risc de recidivă mult diminuat','Pentru nodulul toxic unic, excizia leziunii este curativă','Subtotala garantează eutiroidia definitivă, cvasitotala fiind abandonată','Recurența după subtotală este nulă, hipotiroidismul apărând la 90% din prima săptămână'],'ABC',617,'Tehnica chirurgicală — Subtotală versus cvasitotală',
 'Contrastarea recurenței 1-3% apoi 1%/an și a hipotiroidismului 10% ale subtotalei de opțiunea cvasitotală cu hipotiroidism inevitabil.',
 ['Cifrele 1-3%, 1%/an și 10% sunt ale subtotalei.','Preferința pentru cvasitotală și hipotiroidismul inevitabil sunt concluzia.','Excizia nodulului unic este curativă.','Subtotala tocmai nu garantează eutiroidia.','Recurența nu este nulă, iar 90% în prima săptămână nu este cifra din text.']],
 8,'Distractorii transformă recurența 1-3% a subtotalei în zero și mută hipotiroidismul de la 10%/an la 90% în prima săptămână.',['1-3%','cvasitotală']),

q(32,['Criza tiroidiană („furtuna tiroidiană”), în descrierea capitolului, se caracterizează prin:',
 ['Agravare rapidă rară, cu mortalitate de 10%, hiperpirexie, tahicardie severă, agitație extremă, insuficiență cardiacă și disfuncție hepatică; tratament de urgență cu propranolol în doză completă, iodură de potasiu, antitiroidian, corticosteroizi și reechilibrare','O formă ușoară de anxietate, fără risc vital, tratată doar prin odihnă','Mortalitate de 90%, iodura de potasiu fiind contraindicată','Absența tahicardiei, diagnosticul cerând doar T4 scăzută','Monoterapie cu levotiroxină, corticosteroizii fiind evitați'],'A',617,'Criza tiroidiană',
 'Reținerea mortalității de 10% și a pachetului propranolol + iodură + antitiroidian + corticoid.',
 ['Tabloul, mortalitatea 10% și cele patru clase plus reechilibrarea sunt din paragraf.','Textul o descrie ca urgență cu mortalitate 10%, nu ca anxietate.','Mortalitatea citată este 10%, nu 90%; iodura face parte din tratament.','Tahicardia severă este cardinală.','Levotiroxina nu este terapia furtunii; corticosteroizii inhibă manifestările.']],
 8,'Distractorii umflă mortalitatea la 90% sau o reduc la anxietate și scot iodura/corticoidul din pachetul de urgență.',['mortalitate de 10%','furtuna tiroidiană']),
];
