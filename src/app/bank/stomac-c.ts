import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=168?p-70:p<=174?p-73:p-77;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('stomac',13,pdfOffset,`stomac-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const STOMAC_C=[
q(37,['Secreția bazală de acid gastric, în afara stimulării meselor, se caracterizează prin:',
 ['Are ritm circadian, cu nivele maxime în timpul nopții și nivele inferioare în orele dimineții','Este maximă dimineața și absentă noaptea, identică cortizolului inversat','Depinde doar de secretină duodenală, fără celule parietale','Este blocată de acarboză 50–100 mg, ca în dumpingul tardiv','Are loc numai după vagotomie, pompele de protoni fiind inactive bazal'],'A',168,'Fiziologie — Secreție bazală circadiană',
 'Reținerea ritmului circadian (vârf nocturn, minim matinal) al secreției acide bazale parietale.',
 ['Vârful nocturn și minimul matinal sunt explicite.','Direcția circadiană este inversată față de text.','Secretina duodenală nu definește secreția bazală; parietalele secretă HCl.','Acarboza este pentru dumping tardiv, nu pentru acid.','Secreția bazală există și fără vagotomie; IPP blochează pompa când este stimulată.']],
 8,'Inversează vârful nocturn cu minimul matinal, două extreme ale aceluiași ritm circadian.',['ritm circadian','nivele maxime']),

q(38,['Faza cefalică a secreției acide se caracterizează prin:',
 ['Este mediată de SNC și stimulată de vederea, mirosul sau ideea alimentelor','Activitatea eferentă pornește de la hipotalamus către stomac prin nervul vag','Acetilcolina vagală are trei acțiuni: stimulare directă a parietaleelor, eliberare de gastrină antrală și eliberare de histamină de către ECL','Faza cefalică este mediată de secretină și CCK, fără vag, identică fazei intestinale','Secreția bazală lipsește noaptea, pompele fiind inactive în absența meselor'],'ABC',168,'Fiziologie — Faza cefalică',
 'Maparea axului SNC–hipotalamus–vag–ACh cu cele trei ținte (parietal, G, ECL) și cu efectul vagotomiei.',
 ['Medierea SNC și stimulii vizuali/olfactivi/ideatici sunt explicite.','Traiectul hipotalamus–vag este citat.','Cele trei acțiuni ale acetilcolinei sunt enumerate.','Secretina și CCK țin de duoden ca organ endocrin, nu de faza cefalică.','Secreția bazală există, cu vârf nocturn; pompele se activează la stimulare.']],
 8,'Înlocuiește acetilcolina vagală cu secretina/CCK, confundând faza cefalică cu semnalul duodenal.',['Faza cefa I ică','acetilcolinei (Ach)']),

q(39,['Artera gastroduodenală, relevantă pentru ulcerul duodenal posterior, se caracterizează prin:',
 ['Este situată posterior de duoden; ulcerele gastrice penetrante posterioare pot eroda această arteră și provoca hemoragii','Este prima ramură a arterei hepatice proprii, se desprinde imediat posterior de bulbul duodenal și se împarte în arcadele pancreaticoduodenale superioare','Provine din artera mezenterică inferioară, identic colonului stâng ca grefon esofagian','Este unica sursă a stomacului după păstrarea gastricei stângi','Trece prin ligamentul gastrohepatic, inervând colecistul'],'AB',168,'Vascularizație — Gastroduodenala și ulcerul posterior',
 'Localizarea gastroduodenalei posterior de bulb, ca sursă de hemoragie prin eroziune, plus originea din hepatica proprie.',
 ['Sediul posterior și eroziunea ulceroasă sunt explicite în legendă.','Originea din hepatica proprie, posterior de bulb, și arcadele superioare sunt citate.','AMI irigă colonul stâng, nu gastroduodenala.','Gastroduodenala este o sursă duodenală/gastrică, nu unica după păstrarea gastricei stângi.','Ligamentul gastrohepatic este traiectul ramurii hepatice vagale, nu al arterei.']],
 8,'Mută gastroduodenala pe AMI sau pe ligamentul gastrohepatic, două pediculi din capitole vecine.',['Artera gastro-duodenală','posterior de duoden']),

q(40,['Lezarea distală a nervului Latarjet se soldează cu:',
 ['Pilorul pierde capacitatea de a se relaxa ca răspuns la stimuli fiziologici','Creșterea relaxării pilorice, cu dumping precoce osmotic','Secționarea ramurii hepatice, cu denervarea colecistului izolat','Atonie fundică izolată, pacemaker-ul rămânând în antru','Hipersecreție de gastrină, identică sindromului Zollinger-Ellison'],'A',168,'Inervație — Nervul Latarjet',
 'Traducerea leziunii distale Latarjet în eșecul relaxării pilorice, nu în dumping sau ZES.',
 ['Fraza despre pierderea relaxării pilorice este explicită în legendă.','Leziunea împiedică relaxarea, nu o crește.','Ramura hepatică este a vagului stâng prin ligamentul gastrohepatic, nu Latarjet.','Pacemaker-ul este fundic circular, nu antral.','ZES este un gastrinom, nu o leziune Latarjet.']],
 8,'Inversează efectul Latarjet (eșec de relaxare pilorică) în hiperrelaxare cu dumping.',['nerv Lata1jet','Picior de cioară']),

q(41,['Capacitatea stomacului de a secreta HCl și blocarea ei farmacologică se caracterizează prin:',
 ['Secreția de acid este aproape liniar asociată cu masa celulară parietală','Secreția stimulată activează pompele de protoni ale celulelor parietale','Blocarea directă a acestei etape inhibă producția de acid, acesta fiind mecanismul IPP','Secreția are loc secvențial în trei faze: cefalică, gastrică și intestinală, fiecare cu mecanisme distincte de activare','Masa parietală nu influențează debitul acid, IPP acționând pe secretina duodenală'],'ABCD',168,'Fiziologie — Masă parietală, IPP, trei faze',
 'Legarea debitului acid de masa parietală, a IPP de pompa de protoni și a celor trei faze secvențiale.',
 ['Relația aproape liniară masă parietală–HCl este explicită.','Activarea pompelor la stimulare este citată.','Mecanismul IPP este descris.','Cele trei faze sunt enumerate.','Debitul ține de masa parietală; IPP blochează pompa, nu secretina.']],
 8,'Rupe legătura masă parietală–HCl și mută IPP-ul pe secretină, două confuzii de etaj fiziologic.',['pompele de protoni','trei faze generale']),

q(42,['Sindromul Peutz-Jeghers, când se identifică polipi gastrici, se caracterizează prin:',
 ['Boală autozomal dominantă cu grad ridicat de penetrabilitate; polipi hamartomatoși rar maligne, deci management conservator; pete de melanină pe buze și mucoasa bucală','PAF cu adenom vilos duodenal, care impune Whipple de principiu','Polipi hiperplastici >1,5 cm cu risc mai mare decât adenomatoșii','GIST submucos cu >10 mitoze la 50 CGA','Limfom non-Hodgkin al vârstnicului, cu chimio de primă intenție'],'A',172,'Polipi — Peutz-Jeghers',
 'Separarea hamartomului AD cu pete melanice (conservator) de PAF, de adenomul >1,5 cm și de GIST/limfom.',
 ['Moștenirea AD, penetrabilitatea, hamartoamele rareori maligne, managementul conservator și petele melanice sunt explicite.','PAF și adenomul vilos țin de altă secțiune.','Adenomatoșii >1,5 cm, nu hiperplasticii, au riscul mai mare.','GIST are alte criterii de agresivitate.','Limfomul gastric este altă entitate.']],
 8,'Confundă hamartomul Peutz-Jeghers (conservator) cu adenomul PAF sau cu pragul 1,5 cm.',['Peutz-Jeghers','autozomal dominantă']),

q(43,['Epidemiologia și factorii de risc ai adenocarcinomului gastric includ:',
 ['Aproximativ 95% din cancerele de stomac sunt adenocarcinoame; incidența generală a scăzut constant în ultimii 50 de ani','Frecvența este relativ mică în SUA și Europa, considerabil mai mare în Asia (Japonia, China), plus Rusia, Chile și Finlanda','Emigranții din zonele cu risc ridicat care se stabilesc în SUA au o incidență mai mică, alimentația fiind incriminată','Incidența maximă este în SUA, emigranții păstrând riscul asiatic neschimbat, H. pylori nefiind incriminat','Screeningul endoscopic de masă din SUA este cost-eficient, identic Japoniei'],'ABC',172,'Adenocarcinom gastric — Epidemiologie',
 'Contrastul Occident versus Asia/Chile și al scăderii de risc la emigranți, plus lista H. pylori/pernicioasă/caustic.',
 ['Ponderea 95% și scăderea pe 50 de ani sunt explicite.','Geografia SUA/Europa versus Asia/Rusia/Chile/Finlanda este citată.','Scăderea de incidență la emigranți și rolul alimentației sunt descrise.','Textul plasează SUA la incidență relativ mică și incriminează H. pylori.','Screeningul US este considerat prohibitiv ca și cost, nu cost-eficient.']],
 8,'Inversează geografia (SUA maxim, Asia minim) și neagă H. pylori, două mesaje centrale ale paragrafului.',['95% din cancerele','H. pylori']),

q(44,['Pentru un adenocarcinom gastric distal localizat, rezecția curativă electivă este:',
 ['Gastrectomia subtotală radicală, care îndepărtează aproximativ 85% din stomac și marele epiploon, cu examen extemporaneu al marginii proximale','Restabilirea continuității prin gastrojejuno-anastomoză Roux-en-Y sau anastomoză Billroth II, doar după confirmarea absenței invaziei proximale','Gastrectomie totală de principiu pentru orice leziune antrală, fără extemporaneu','Hemicolectomie dreaptă, tumora fiind periampulară D2','Enucleere locală cu margine 2–3 cm, identică GIST'],'AB',173,'Adenocarcinom — Gastrectomie subtotală 85%',
 'Aplicarea pragului ~85% plus omentectomie și a reconstrucției Roux/BII condiționate de extemporaneul negativ.',
 ['Cifra de aproximativ 85% și omentectomia sunt explicite.','Roux sau Billroth II după verificarea marginii sunt citate.','Gastrectomia totală este pentru leziuni distale întinse sau proximale, nu de principiu antral.','Hemicolectomia dreaptă ține de D2/carcinoid, nu de stomac.','Enucleerea 2–3 cm este a GIST, nu a adenocarcinomului.']],
 8,'Permutează gastrectomia 85% cu enucleerea GIST sau cu hemicolectomia duodenală.',['85% din stomac','Billroth II']),

q(45,['Limfadenectomia și terapia adjuvantă în adenocarcinomul gastric se caracterizează prin:',
 ['Japonezii susțin limfadenectomia radicală dincolo de ganglionii perigastrici; în SUA majoritatea limitează disecția la ganglionii imediat adiacenți și la cei cu ligatura vaselor perigastrice','Comparațiile japoneze arată supraviețuire îmbunătățită după disecție radicală; țările occidentale nu au replicat rezultatele, disecțiile extinse părând a crește morbiditatea fără beneficiu de supraviețuire','Chimioterapia preoperatorie ± radioterapie este recomandată pentru leziunile rezecabile care par a invada dincolo de lamina propria sau cu ganglioni pozitivi','Leziunile care invadează doar submucoasa la EUS pot fi excizate fără neoadjuvant; chimio postoperatorie ± RT se folosește exceptând tumorile doar mucosale','D2 occidental este standard fără morbiditate, neoadjuvantul fiind evitat la T3 N+'],'ABCD',173,'Adenocarcinom — D2 și perioperator',
 'Cântărirea D2 japonez versus morbiditatea occidentală și a ferestrei neoadjuvante (dincolo de lamina propria / N+).',
 ['Contrastul Japonia versus SUA este explicit.','Lipsa replicării occidentale și morbiditatea sunt citate.','Indicația neoadjuvantă (dincolo de lamina propria sau N+) este descrisă.','Excepțiile EUS-submucoasă și mucoasă-only sunt menționate.','Occidentul nu a replicat beneficiul D2; neoadjuvantul este tocmai pentru T dincolo de lamina propria/N+.']],
 8,'Declară D2 occidental standard și interzice neoadjuvantul la T3 N+, inversând ambele concluzii.',['lamina propria','limfadenectomia radicală']),

q(46,['Un pacient cu durere epigastrică de arsură, trezit noaptea, ameliorată de antiacide, cu creștere ponderală recentă. Durerea ulcerului duodenal necomplicat, spre deosebire de ulcerul gastric, este de obicei:',
 ['Mai intensă în perioadele de post alimentar, apare la 1–3 ore după ingestia alimentelor și trezește pacienții din somn','Maximă în timpul mesei, cu scădere ponderală prin teamă de a mânca, identică ulcerului gastric','Independentă de alimente, identică dumpingului tardiv de la 1–3 ore','O durere disproporționată față de examenul abdominal, identică ischemiei mezenterice','O crampă postprandială urmată de vărsătură „ulei de motor”, identică ansei aferente'],'A',174,'Ulcer duodenal — Tablou de post',
 'Izolarea ferestrei 1–3 ore / nocturn / antiacide / creștere ponderală ca semn de DU, nu de GU sau de dumping.',
 ['Fereastra 1–3 ore, postul, trezirea nocturnă sunt explicite; antiacidele și creșterea ponderală sunt citate.','Durerea gastrică nu este descrisă astfel; creșterea ponderală ține de DU.','Dumpingul tardiv are simptome vasomotorii, nu durere ulceroasă de post.','Durerea disproporționată este a IMA.','Vărsătura „ulei de motor” este stenoza ansei aferente.']],
 8,'Permutează fereastra 1–3 ore a DU cu dumpingul tardiv sau cu ansa aferentă, trei entități cu același interval.',['1-3 ore','post alimentar']),

q(47,['Excizia GIST gastric și testarea genetică se caracterizează prin:',
 ['O marjă de 2–3 cm ar trebui inclusă la tumorile mari, dar marginile negative sunt necesare doar pentru leziunile mici','Testele genetice pentru mutația c-KIT și PDGFRA favorizează determinarea eficacității relative a imatinibului','Gastrectomia totală plus limfadenectomie D2 este regula, invazia ganglionară fiind frecventă','Biopsia endoscopică clasică este de regulă diagnostică, imatinibul neavând rol preoperator','GIST derivă din mucoasa de suprafață și se stadializează identic adenocarcinomului'],'AB',174,'GIST — Marjă 2–3 cm și c-KIT',
 'Completarea criteriilor de agresivitate (deja tratate) cu marja 2–3 cm la tumorile mari și cu genotipul c-KIT/PDGFRA.',
 ['Marja 2–3 cm la marile și excepția leziunilor mici sunt explicite.','c-KIT și PDGFRA pentru eficacitatea imatinibului sunt citate.','Excizia locală este tratamentul; invazia ganglionară este rară.','Biopsia este de obicei nondiagnostică; imatinibul poate downstaga.','GIST-urile sunt submucoase, nu mucosale.']],
 8,'Înlocuiește excizia locală 2–3 cm cu D2, ignorând raritatea metastazelor ganglionare.',['2-3 cm','c-KIT.şi PDGFRA']),

q(48,['Tabloul clinic care trebuie să ridice suspiciunea de Zollinger-Ellison include:',
 ['Simptome ulceroase cu diaree cronică sau severă concomitentă','Ulcere duodenale multiple sau ulcerații în localizări atipice (jejun sau ileon)','Istoric personal sau familial de BUP refractară sau de boală endocrină, inclusiv MEN-1','Gastrina se dozează sub IPP, pragul de 200 pg/mL fiind suficient fără secretină','Gastrectomia totală rămâne operația de primă intenție, IPP-ul fiind inutil'],'ABC',179,'ZES — Clinic atipic și IPP inițial',
 'Recunoașterea triadei diaree + ulcere atipice jejun/ileon + teren MEN-1, plus IPP-ul în doze mari ca prim gest.',
 ['Cuplul ulcer + diaree este explicit.','Sediile atipice jejun/ileon sunt citate.','Istoricul familial/MEN-1 este descris.','IPP-ul crește gastrina; se oprește ≥1 săptămână; 1.000 pg/mL este pragul diagnostic, nu 200.','Gastrectomia totală a devenit foarte rar practicată; tratamentul începe cu IPP în doze mari.']],
 8,'Dozează gastrina sub IPP la pragul delta-ului de secretină (200), nu la 1.000 à jeun.',['diaree cronică','jejun sau ileon']),

q(49,['Dacă diareea post-vagotomie este severă sau refractară la tratamentul medical, montajul chirurgical citat pentru întârzierea tranzitului este:',
 ['Un segment de jejun de 10 cm antiperistaltic, plasat la 100 cm de unghiul lui Treitz','Un Roux de 5 cm, identic gastroplastiei Collis','O bandă gastrică ajustabilă pe esofag, pars flaccida','O hemicolectomie dreaptă, ca în carcinoidul >2 cm','O piloroplastie izolată, fără segment antiperistaltic'],'A',181,'Diaree post-vagotomie — 10 cm la 100 cm',
 'Fixarea inserției antiperistaltice 10 cm la 100 cm de Treitz, față de lungimile Collis (5 cm) sau Roux bariatric (75–150 cm).',
 ['Cei 10 cm antiperistaltici la 100 cm de Treitz sunt expliciți.','5 cm este Collis, nu acest montaj.','Pars flaccida este tehnica benzii, nu a diareei post-vagotomie.','Hemicolectomia ține de carcinoid/apendice.','Piloroplastia nu este gestul citat pentru forma refractară.']],
 8,'Permutează 10 cm/100 cm cu 5 cm Collis sau cu Roux-ul bariatric 75–150 cm.',['I O cm antiperistaltic','l 00 de cm']),

q(50,['Sindromul de ansă oarbă după Billroth II se caracterizează prin:',
 ['Este mai frecvent după Billroth II decât după Roux-en-Y; apare și după bypass ileojejunal sau bypass al intestinului iradiat','Bacteriile din ansa exclusă interferează cu metabolismul folatului și B12, cu anemie megaloblastică; deconjugarea sărurilor biliare dă steatoree','Testul Schilling cu cobalamină legată de FI este adesea anormal și se normalizează după antibiotice cu succes','Tratamentul: antibiotice orale cu spectru aerob și anaerob (ex. tetraciclină); adesea temporizare, mulți necesitând conversie la Billroth I','Ansa oarbă este patognomonică Roux-ului, tetraciclina fiind contraindicată, Schilling-ul rămânând normal'],'ABCD',181,'Ansa oarbă — Schilling și tetraciclină',
 'Împerecherea predilecției BII cu megaloblastica B12, Schilling anormal și tetraciclină ca punte spre conversia BI.',
 ['Predominanța BII și contextele de bypass sunt explicite.','B12/folat, megaloblastica și steatoreea sunt citate.','Schilling-ul și normalizarea post-antibiotic sunt descrise.','Tetraciclina și conversia BI sunt menționate.','Ansa oarbă este mai rară după Roux; tetraciclina este exemplul citat.']],
 8,'Mută ansa oarbă pe Roux și interzice tetraciclina, inversând atât epidemiologia cât și tratamentul.',['Testul Schilling','tetraciclina']),

q(51,['Ulcerul marginal de pe versantul jejunal al unei gastrojejunostomii se caracterizează prin:',
 ['Etiologia este de obicei ischemia, fumatul putând contribui','Endoscopia relevă un ulcer pe ansa jejunală la cel mult 2 cm distal de anastomoză','Prima linie: oprirea tutunului și IPP; în cazuri severe NPO plus NPT','Enucleerea leiomiomului sau Nissen 360° sunt gesturile de primă intenție','Hollander-ul cu insulină vindecă ulcerul marginal fără IPP'],'ABC',182,'Ulcer marginal — ≤2 cm jejunal',
 'Fixarea sediului ≤2 cm jejunal și a ierarhiei tutun/IPP → NPT → revizuire anastomotică.',
 ['Ischemia și fumatul sunt explicite.','Pragul de cel mult 2 cm este citat.','Cuplul tutun/IPP și NPO/NPT sunt descrise.','Nissen și enucleerea țin de esofag, nu de ulcerul marginal.','Hollander-ul a fost înlocuit; IPP-ul este prima linie, nu insulina.']],
 8,'Înlocuiește IPP-ul pe ulcerul ≤2 cm cu Nissen sau enucleere, două gesturi esofagiene.',['cel mult 2 cm','Ulcerele marginale']),

q(52,['Recurența ulceroasă după chirurgia BUP și documentarea vagotomiei incomplete includ:',
 ['Cauza cea mai frecventă este vagotomia incompletă, adesea trunchiul posterior sau nervul criminal al lui Grassi','Vagotomia tronculară cu antrectomie are recurență de aproximativ 2%; vagotomia supraselectivă, cea mai mare, de aproximativ 12%','Roșul de Congo după pentagastrină evidențiază zonele cu pH scăzut, deci inervație vagală intactă; masa falsă a înlocuit testul Hollander periculos','Recurența după antrectomie este 12%, iar HSV 2%, Grassi fiind un nerv hepatic','Hollander-ul cu insulină rămâne testul preferat, endoscopia fiind inutilă'],'ABC',182,'Recurență BUP — 2% vs 12% și roșu de Congo',
 'Aplicarea ierarhiei 2% (TV+A) versus 12% (HSV) și a roșului de Congo/pentagastrină ca substitut al Hollander-ului.',
 ['Grassi și trunchiul posterior sunt explicite.','Cifrele ~2% și ~12% sunt citate.','Congo red, pentagastrina și înlocuirea Hollander sunt descrise.','Cifrele sunt inversate; Grassi este posterior, nu hepatic.','Masa falsă a înlocuit Hollander; endoscopia este modalitatea preferată.']],
 8,'Inversează 2% și 12% între antrectomie și HSV, două procente alăturate în același paragraf.',['aproximativ 2%','aproxinlativ 12%']),

q(53,['Conform Tabelului 13-3, medicația sindroamelor postgastrectomie include:',
 ['Acarboză 50–100 mg po, 3×/zi, inhibitor de α-glucozidază, pentru dumping tardiv','Sucralfat 1 g po, 4×/zi, protector mucos, pentru ulcer marginal și gastrită de reflux alcalin','Metoclopramid 10 mg cu 30 de minute înainte de fiecare masă și la culcare, pentru gastrită atonă','Somatostatină cu durată lungă de acțiune 20 mg IM lunar, pentru diaree post-vagotomie și dumping','Ursodeoxicolic 300 mg ×2/zi, 6 luni, ca tratament al dumpingului precoce osmotic'],'ABCD',183,'Tabelul 13-3 — Doze postgastrectomie',
 'Memorarea celor patru scheme (acarboză, sucralfat, metoclopramid, octreotid/somatostatină) față de ursodeoxicolicul bariatric.',
 ['Doza 50–100 mg 3×/zi și indicația dumping tardiv sunt din tabel.','1 g ×4 și indicațiile sucralfatului sunt citate.','10 mg înainte de mese/culcare este descris.','20 mg IM lunar este menționat.','300 mg ursodeoxicolic ×2/zi, 6 luni, este profilaxia litiazei post-bypass, nu dumpingul precoce.']],
 8,'Permutează ursodeoxicolicul 300 mg (litiază bariatrică) în tabelul postgastrectomie, două scheme de 300 vs 50–100 mg.',['50-100 mg po, 3x/zi','20 mg IM lunar']),

q(54,['Axul hormonal al apetitului (Figura 13-10) se caracterizează prin:',
 ['Ghrelina din celulele oxintice gastrice stimulează centrul foamei hipotalamic, crescând consumul caloric','Leptina din adipocit activează centrul sațietății, scăzând aportul','Deficitul receptorului de leptină pierde semnalul de sațietate și produce obezitate; supraproducția de grelină contribuie la hiperfagia din Prader-Willi','Leptina stimulează foamea, iar ghrelina sațietatea; Prader-Willi este un deficit de ghrelină','Axul hormonal exclude hipotalamusul, adipocitul fiind unica sursă de sațietate'],'ABC',183,'Obezitate — Ghrelină, leptină, Prader-Willi',
 'Maparea ghrelină-foame versus leptină-sațietate, plus exemplele receptor-leptină și Prader-Willi, și pragul 10 kcal/zi.',
 ['Originea oxintică și efectul orexigen sunt explicite.','Leptina și sațietatea sunt citate.','Cele două disfuncții (receptor vs Prader-Willi) sunt descrise.','Direcția ghrelină/leptină este inversată; Prader-Willi asociază supraproducție, nu deficit de ghrelină.','Hipotalamusul, stomacul și adipocitul formează axul descris, nu adipocitul izolat.']],
 8,'Inversează ghrelina (foame) cu leptina (sațietate) și atribuie Prader-Willi unui deficit de ghrelină.',['ghrelină','Prader-Willi']),

q(55,['Doar 10 kcal pe zi de energie suplimentară (un biscuit sărat) poate duce, pe parcursul unui an, la o creștere ponderală de:',
 ['1 lb','10 kg, identic scăderii GCE după bandă','1 kg pe săptămână, identic protocolului de circuit rapid','5 L, volumul din șocul neurogen','25 cm, lungimea fiind confundată cu energia'],'A',183,'Obezitate — 10 kcal/zi',
 'Izolarea echivalenței 10 kcal/zi ≈ 1 lb/an, față de procente GCE sau volume din alte capitole.',
 ['Echivalența 10 kcal/zi → 1 lb/an este explicită.','10 kg nu este cifra citată.','1 kg/săptămână nu apare.','5 L este un volum de resuscitare, nu o creștere ponderală anuală.','25 cm este lungime, nu energie.']],
 8,'Umflă 1 lb/an la 10 kg sau 1 kg/săptămână, două ordine de mărime greșite.',['I O kcal/','I lb']),

q(56,['Indicele de masă corporală, ca standard OMS de peste 30 de ani, se caracterizează prin:',
 ['Se calculează împărțind greutatea (kg) la pătratul înălțimii (m): IMC = greutate (kg) / [înălțime (m)]²','Poate supraestima grăsimea la culturiști (masă musculară) și o poate subestima la vârstnici','Conform Tabelului 13-4: <18,5 subponderal; 18,5–24,9 normoponderal; 25–29,9 supraponderal; 30–39,9 obezitate; ≥40 obezitate morbidă','Cântărirea hidrostatică este foarte precisă, dar costisitoare și greoaie; pliurile cutanate depind de operator','IMC măsoară exact procentul de grăsime la sportivi, cântărirea hidrostatică fiind inutilă'],'ABCD',184,'Obezitate — Formulă IMC și Tabelul 13-4',
 'Aplicarea formulei kg/m², a capcanelor culturist/vârstnic și a treptelor <18,5 / 25 / 30 / ≥40.',
 ['Formula este explicită.','Supraestimarea la culturiști și subestimarea la vârstnici sunt citate.','Cele cinci categorii din tabel sunt descrise.','Hidrostatica precisă-dar-greoaie și pliurile operator-dependente sunt menționate.','Textul precizează că IMC este inexact la masa musculară ridicată.']],
 8,'Declară IMC exact la sportivi, contrar avertismentului despre culturiști.',['IMC = greutate','2-40,0']),

q(57,['Contraindicațiile relative ale chirurgiei bariatrice, potrivit textului, includ:',
 ['Insuficiență cardiacă severă, boală coronariană instabilă, boală pulmonară în stadiu final','Cancer în diagnostic sau tratament activ, ciroză cu hipertensiune portală, dependență necontrolată de droguri sau alcool și capacitate intelectuală grav afectată','IMC ≥40 fără comorbidități, ca interdicție absolută','Vârsta 35–40 de ani, NIH interzicând adulții','Eșecul dietelor anterioare, care contraindică procedura'],'AB',184,'Bariatric — Contraindicații relative',
 'Separarea listei de contraindicații relative (cord, plămân, cancer, ciroză, adicție, cognitiv) de criteriile de indicație IMC.',
 ['Triada cord/coronarian/pulmonar este explicită.','Cancerul activ, ciroza cu HTP, adicția și deficitul cognitiv sunt citate.','IMC ≥40 fără comorbidități este o indicație, nu o contraindicație; nu există contraindicații absolute.','Adulții care îndeplinesc IMC sunt candidați; s-a discutat chiar extinderea sub 18 ani.','Eșecul dietelor este un criteriu de selecție, nu o contraindicație.']],
 8,'Transformă indicația IMC ≥40 într-o contraindicație absolută, inversând Tabelul 13-4/NIH.',['insuficienta cardiacă','hipertensiune po1ială']),

q(58,['Gastrectomia longitudinală (sleeve), conform textului și Tabelului 13-6, se caracterizează prin:',
 ['Este o procedură restrictivă, alături de banda ajustabilă; BGRNY este combinație malabsorbție+restricție; DBP/DBP-SD sunt malabsorbtive','Chirurgul îndepărtează laparoscopic aproximativ 85% din stomac, tubul rezultat; procedura nu este reversibilă','Inervația pilorului și a stomacului rămân intacte, spre deosebire de multe alte proceduri bariatrice','A devenit cea mai frecventă operație pentru obezitate morbidă în SUA, depășind recent BGRNY (în 2016: GL 125.496 vs BGRNY 40.392)','Este reversibilă, păstrează 15% din stomac ca rezecție, pilorul fiind denervat de principiu'],'ABCD',186,'Sleeve — 85%, pilor intact, cea mai frecventă',
 'Reținerea caracterului restrictiv ireversibil ~85%, a pilorului inervat și a ierarhiei 2016 (GL > BGRNY).',
 ['Clasificarea din Tabelul 13-6 este explicită.','Cifra ~85% și ireversibilitatea sunt citate.','Păstrarea inervației pilorice este descrisă.','Depășirea BGRNY și cifrele 2016 sunt din figură/text.','Procedura nu este reversibilă; se îndepărtează ~85%, nu 15%; pilorul rămâne inervat.']],
 8,'Inversează 85% rezecat în 15% și declară sleeve-ul reversibil cu pilor denervat.',['85% din stomac','nu este reversibilă']),

q(59,['Sângerarea precoce după bypass gastric, față de sleeve, se caracterizează prin:',
 ['Este o complicație precoce gravă de 1–5% după BGRNY','Există două tipuri: intra-abdominală (linii de capsă: gastrojejunostomie, rezervor, jejunojejunostomie, stomac exclus) și intraluminală în aceleași locuri','Tubul de dren ajută distincția; tahicardie, scăderea Hb, hematemeză sau melenă; hemoragia din primele ore cere reintervenție','După sleeve rata este 15%, identică fistulei tardive, sângerarea fiind doar intraluminală','Manometria anală localizează sângerarea, Nissen-ul fiind hemostaza de primă intenție'],'ABC',188,'Bariatric — Hemoragie 1–5% vs 0,5%',
 'Contrastul 1–5% RYGB (intra vs intra-luminal) versus 0,5% sleeve (mai ales intra-abdominal).',
 ['Intervalul 1–5% este explicit.','Cele două tipuri și sediile de capsă sunt citate.','Rolul drenului și al reintervenției precoce sunt descrise.','15% nu este rata de sângerare; fistula este 1–5% precoce, nu tardivă la 15 ani.','După sleeve sângerarea este ~0,5%, de obicei intra-abdominală; Nissen nu este hemostază gastrică.']],
 8,'Permutează 1–5% (RYGB) cu 0,5% (sleeve) și mută sângerarea în palierul tardiv de 15 ani.',['de 1-5%','(0,5%)']),

q(60,['Suplimentarea nutrițională după bypass gastric include:',
 ['Proteine 60–80 g zilnic; deficitul de fier, cel mai frecvent, apare la până la 50% ; femeile nemenopauzate și cei cu deficit preexistent iau 65 mg fier elemental plus vitamina C','B12 este al doilea ca frecvență; stomacul distal izolat împiedică FI să se combine cu B12; se administrează de rutină IM sau sublingual; plus tiamină, calciu și vitamina D pe viață','Banda gastrică produce aceleași carențe ca DBP, fără nevoie de monitorizare anuală','Fierul se absoarbe mai bine după bypass, duodenul rămânând în circuit','Tiamina se evită, neuropatia ținând doar de B12'],'AB',188,'Bariatric — Fier 50%, B12 IM, 60–80 g',
 'Aplicarea pachetului 60–80 g proteine / fier 50% cu 65 mg+C / B12 IM-sublingual, față de procedurile restrictive.',
 ['Doza de proteine, ponderea 50% a fierului și schema 65 mg+C sunt explicite.','Locul 2 al B12, mecanismul FI și calea IM/sublinguală sunt citate.','Carențele sunt mai frecvente la malabsorbtive decât la bandă; monitorizarea este pe viață.','Duodenul este ocolit, deci fierul și calciul se absorb mai puțin.','Tiamina este importantă pentru simptome neuropatice.']],
 8,'Neagă ocolirea duodenului și pune banda pe același palier carențial cu DBP.',['60-80 g','până la 50%']),

q(61,['Strictura, hernia internă și obstrucția ansei biliopancreatice după bypass se caracterizează prin:',
 ['Strictura gastrojejunală (sau pe linia de capsă a sleeve-ului) apare în primele 3 luni; pacientul nu își diversifică altceva decât lichide; dilatarea pneumatică este de elecție','Herniile interne prin breșele mezenterice (două sau trei) cer explorare chirurgicală, nu tratament conservator ca OIS parțială; CT-ul poate fi normal, deci laparoscopia diagnostică','Obstrucția ansei BP în prima lună: durere, greață, vărsături nonbiloase; decompresie prin gastrostomie percutană a bontului până la recanalizarea jejunojejunostomiei','Hernia internă se tratează 2 săptămâni conservator, identic OIS precoce aderențiale','Strictura apare la 15 ani, dilatarea fiind contraindicată'],'ABC',189,'Bariatric — Strictură 3 luni, hernie internă, ansă BP',
 'Separarea ferestrei de 3 luni (strictură, balon) de hernia internă (chirurgie, nu 2 săptămâni) și de ansa BP (G-tube).',
 ['Fereastra de 3 luni și dilatarea sunt explicite.','Indicația operatorie și CT-ul fals negativ sunt citate.','Prima lună, vărsăturile nonbiloase și G-tube-ul sunt descrise.','Temporizarea de 2 săptămâni ține de OIS precoce aderențială, nu de hernia internă post-bypass.','Strictura este precoce (3 luni), nu la 15 ani.']],
 8,'Aplică fereastra de 2 săptămâni a OIS precoce pe hernia internă post-bypass, pe care textul o operează.',['primele 3 luni','vărsături nonbiloase']),

q(62,['Eroziunea inelului gastric ajustabil în stomac, ca o complicație relativ rară pe termen lung, apare la aproximativ:',
 ['1%','15%, identic fistulei anastomotice tardive','50%, identic anemiei feriprive post-bypass','80%, identic rezolvării OIS parțiale','90%, identic mucoasei ectopice colonice a lui Meckel'],'A',190,'Bandă — Eroziune ~1%',
 'Izolarea cifrei de aproximativ 1% pentru eroziunea inelului, față de 1–5% fistulă sau 50% feripriv.',
 ['Aproximativ 1% este explicit.','Fistula anastomotică este 1–5% precoce, nu 15% tardiv.','50% este anemia feriprivă după bypass.','80% este rezolvarea OIS parțiale aderențiale.','90% nu este o cifră a eroziunii; mucoasa gastrică ectopică Meckel este ~50%.']],
 8,'Permutează ~1% (eroziune) cu 1–5% (fistulă) sau 50% (fier), trei procente bariatrice/postgastrectomie.',['aproximativ I%','Eroziunea inelului']),

q(63,['Alunecarea inelului gastric ajustabil se recunoaște și se tratează inițial astfel:',
 ['Tranzitul baritat arată dilatație proximală, încetinirea contrastului și orientarea necorespunzătoare (spre inferior) a inelului','Tratamentul inițial este deflația completă; ocazional prolapsul se remite și inelul poate fi reumflat treptat; adesea este nevoie de reducere operatorie cu repoziționare sau înlocuire','Se montează un stent esofagian paliativ, deflația fiind contraindicată','Diagnosticul se pune prin manometrie anală, inelul ținând de sfincterul intern','Observație 2 săptămâni fără deflație, identic OIS precoce'],'AB',190,'Bandă — Derapaj și deflație',
 'Citirea tridentului baritat (dilatație, stază, inel inferior) și a deflației ca prim gest, înaintea repoziționării.',
 ['Cele trei semne baritate, inclusiv orientarea inferioară, sunt explicite.','Deflația, reumflarea treptată și repoziționarea sunt citate.','Stentul paliativ este pentru cancer esofagian.','Manometria anală nu evaluează inelul gastric.','Deflația este primul gest, nu observația fără decompresie a inelului.']],
 8,'Înlocuiește deflația inelului cu stent esofagian sau cu temporizarea OIS, două algoritmi din alte capitole.',['orientarea spre inferior','deflaţia completă']),

q(64,['Profilaxia trombozei după chirurgie bariatrică, conform Tabelului 13-8, include:',
 ['Heparină 5.000 unități SC 3×/zi profilactic; enoxaparină 40 mg SC zilnic sau 2×/zi profilactic, 1 mg/kg SC 2×/zi terapeutic','Rivaroxaban 15 mg po 2×/zi 3 săptămâni, apoi 20 mg po zilnic terapeutic','Warfarină cu INR țintă 2–3','Acarboză 50–100 mg 3×/zi ca anticoagulant, identic dumpingului tardiv','Sucralfatul 1 g ×4 înlocuiește heparina în profilaxia TVP'],'ABC',190,'Tabelul 13-8 — Heparină, rivaroxaban, INR',
 'Separarea schemelor TVP/EP (heparină 5.000, enoxaparină, rivaroxaban, INR 2–3) de ursodeoxicolicul litiazic și de acarboză.',
 ['Dozele de heparină 5.000 și enoxaparină sunt din tabel.','Schema rivaroxaban 15 apoi 20 mg este citată.','INR 2–3 este descris.','Acarboza este din Tabelul 13-3 (dumping tardiv), nu un anticoagulant.','Sucralfatul protejează mucoasa în ulcerul marginal, nu înlocuiește heparina.']],
 8,'Introduce acarboza din tabelul postgastrectomie ca anticoagulant bariatric.',['5.000 unităţi','INR ţintă = 2-3']),

q(65,['Beneficiile operațiilor bariatrice, în meta-analiza a 22.094 de pacienți și în studiul suedez, includ:',
 ['Vindecarea diabetului la 76% dintre pacienți','Vindecarea hipertensiunii la 61,7%','Vindecarea apneei obstructive de somn la 85,7% și scăderea colesterolului ridicat la peste 70%','Reducere de 28% a ratei globale a mortalității în grupul chirurgical, comparativ cu tratamentul convențional','Diabetul se vindecă sub 10%, mortalitatea chirurgicală depășind lotul medical cu 28%'],'ABCD',190,'Bariatric — 76% / 61,7% / 85,7% / 28%',
 'Memorarea cvartetului 76% DM / 61,7% HTA / 85,7% AOS / 28% mortalitate, față de inversarea direcției mortalității.',
 ['76% este explicit.','61,7% este citat.','85,7% și >70% colesterol sunt descrise.','Reducerea de 28% din studiul suedez este menționată.','Direcția mortalității este inversată; 76%, nu <10%, este vindecarea diabetului.']],
 8,'Inversează reducerea de 28% a mortalității într-un exces de 28% și coboară vindecarea DM la <10%.',['76% dintre pacienţi','61,7%'],[191]),

q(66,['Criteriile NIH 1991 de selecție pentru chirurgia obezității severe, dincolo de pragurile IMC, cer ca pacienții adulți:',
 ['Să fi eșuat regimurile de dietă și exerciții, să fie motivați și bine informați și să nu prezinte afecțiuni psihologice semnificative','Beneficiile preconizate să depășească riscurile; ulterior s-a discutat extinderea la IMC sub 35 kg/m² selectat sau vârstă sub 18 ani','Să aibă contraindicație absolută la IMC 35–40 cu diabet','Să evite evaluarea psihologică, depresia fiind o indicație de urgență operatorie','Să omită dieta preoperatorie hipocalorică, ficatul mare facilitând laparoscopia'],'AB',184,'Bariatric — NIH 1991 dincolo de IMC',
 'Completarea pragurilor IMC cu eșecul dietă/exercițiu, motivație, absența psihozei majore și cu extinderea controversată sub 35 sau sub 18 ani.',
 ['Eșecul non-operator, motivația și absența psihozei semnificative sunt explicite.','Balanța beneficiu/risc și extinderea IMC<35 / <18 ani sunt citate.','IMC 35–40 cu comorbidități este o indicație, nu o contraindicație absolută.','Evaluarea psihologică precede majoritatea intervențiilor.','Dieta hipocalorică preoperatorie reduce volumul hepatic pentru abordul minim invaziv.']],
 8,'Transformă extinderea atentă sub IMC 35 într-o contraindicație și anulează evaluarea psihologică.',['motivaţi şi bine informaţi','vârsta <18 ani']),
];
