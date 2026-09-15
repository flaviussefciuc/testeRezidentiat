import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=336?p-275:p-289;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hematologie',16,pdfOffset,`hematologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HEMATOLOGIE_D=[
q(65,['Pragul de prevalență mondială a carenței de fier, descris ca cea mai frecventă cauză de anemie, este de aproximativ:',
 ['30% din populația lumii','3% din populația lumii','90% din populația lumii','0,5% din populația lumii','Carența de fier este rară la nivel global, talasemia fiind cauza dominantă'],'A',328,'Anemia microcitară — Epidemiologie',
 'Reținerea cifrei de 30% și a statutului de cauză globală dominantă a anemiei, distinct de talasemie.',
 ['Textul precizează că deficitul de fier afectează 30% din populația lumii și este cea mai frecventă cauză de anemie.','3% subestimează cu un ordin de mărime prevalența citată.','90% depășește cifra din paragraf.','0,5% este un ordin de mărime prea mic.','Talasemia este o cauză de microcitoză, nu cauza globală dominantă a anemiei.']],
 8,'Distractorii mută 30% spre 3% sau 90% și înlocuiesc carența marțială cu talasemia ca etiologia mondială.',['30% din populaţia lumii','cea mai frecventă cauză de anemie']),

q(66,['Clasificarea anemiei după VEM, ilustrată în Figura 16.7, include următoarele asocieri:',
 ['Microcite (VEM <80 fL): deficit de fier, talasemie, anemie din boli cronice și anemie sideroblastică','Macrocite (VEM >96 fL) megaloblastice: deficit de vitamină B12 sau folat; normoblastice: alcool, reticulocitoză, boală hepatică, hipotiroidism, azatioprină','Normocite (VEM normal): hemoragie acută, anemie din boli cronice, boală cronică de rinichi, boli autoimune reumatice, infiltrare/fibroză, boli endocrine, hemoliză','Microcitele sunt rezervate deficitului de B12, iar VEM >96 fL definește doar sideroblastoza ereditară','Hemoragia acută produce constant macrocitoză megaloblastică, nu normocitoză'],'ABC',328,'Figura 16.7 — Clasificarea anemiei',
 'Perecherea celor trei categorii VEM cu listele etiologice din figură, fără a muta B12 pe microcitoză.',
 ['Rândul de microcitoză al figurii enumeră fierul, talasemia, anemia inflamatorie și sideroblastoza.','Bifurcația megaloblastică versus normoblastică a macrocitozei este cea din figură.','Lista de normocitoză deschide cu hemoragia acută și include hemoliza.','B12 produce macrocitoză megaloblastică; sideroblastoza ereditară este microcitară.','Hemoragia acută figurează la normocite, nu la megaloblastoză.']],
 8,'Distractorii mută B12 pe microcitoză și hemoragia acută pe megaloblastoză, inversând două rânduri vecine ale figurii.',['VEM scăzut','>961L']),

q(67,['Fierul heminic versus non-heminic din dietă, în datele de absorbție, se caracterizează prin:',
 ['Fierul non-heminic se găsește în principal în cereale, de obicei fortificate, și constituie partea principală a fierului alimentar','Fierul heminic, derivat din hemoglobină și mioglobină din carnea roșie sau organe, este absorbit mai bine decât cel non-heminic','Absorbția se face predominant în ileonul terminal, biodisponibilitatea heminică fiind mai influențată de ceilalți constituenți alimentari','Gătitul distruge complet fierul heminic, cerealele nefiind o sursă relevantă','Fierul non-heminic este absorbit mai rapid decât cel heminic, independent de pH-ul gastric'],'AB',329,'Aportul dietetic — Heminic versus non-heminic',
 'Contrastarea cerealelor fortificate ca sursă principală de cea a hemului din carne/organe, cu absorbție superioară heminică.',
 ['Cerealele fortificate ca partea principală a fierului alimentar deschid paragraful.','Originea din Hb/Mb și absorbția superioară a hemului sunt explicitate.','Absorbția scade distal; biodisponibilitatea non-heminică, nu heminică, este mai influențată de dietă.','Textul nu descrie distrugerea completă prin gătire; cerealele sunt sursa principală.','Ierarhia este heminic > non-heminic, nu invers.']],
 8,'Distractorii mută absorbția pe ileonul terminal și inversează ierarhia heminic versus non-heminic.',['Fierul non-heminic','Fierul heminic']),

q(68,['Depozitele și pierderile zilnice de fier, potrivit capitolului, includ:',
 ['Aproximativ două treimi din fierul total circulă ca hemoglobină (2,5-3 g la bărbatul adult)','Restul (500-1.500 mg) stă în celule reticuloendoteliale, hepatocite și mușchi scheletic; circa două treimi ca feritină și o treime ca hemosiderină','În fiecare zi se pierd 0,5-1,0 mg prin materii fecale, urină și transpirație','Femeile pierd 30-40 ml de sânge menstrual pe lună (0,5-0,7 mg fier/zi); pierderea peste 100 ml duce de obicei la deficit','Plasma conține circa 400 mg de fier, pierderile zilnice fiind nule la femeie'],'ABCD',330,'Depozitele de fier; Necesarul de fier',
 'Integrarea masei de 2,5-3 g ca Hb, a raportului feritină/hemosiderină și a pierderilor 0,5-1 mg versus menstra >100 ml.',
 ['Fracția de două treimi și 2,5-3 g sunt cifrele de deschidere.','Intervalul 500-1.500 mg și raportul 2/3–1/3 completează depozitele.','0,5-1,0 mg/zi este pierderea bazală citată.','30-40 ml, 0,5-0,7 mg/zi și pragul de 100 ml sunt ale menstruației.','Plasma conține aproximativ 4 mg, nu 400 mg; femeile au pierderi menstruale suplimentare.']],
 8,'Distractorul umflă fierul plasmatic de la 4 mg la 400 mg și anulează pierderea menstruală.',['2,5-3 g','0,5-1,0 mg']),

q(69,['Numărul de absorbante sau tampoane sanitare considerat normal pe zi, în anamneza menometroragiei din capitol, este:',
 ['3-5','10-15','1','20-25','Nu se întreabă numărul, ci doar culoarea sângelui'],'A',331,'Anamneza — Menstruația',
 'Reținerea ferestrei 3-5 absorbante/tampoane pe zi ca reper de normalitate.',
 ['3-5 pe zi este cifra citată ca normală.','10-15 depășește reperul din text.','Un singur absorbant subestimează uzul normal.','20-25 sugerează menometroragie, nu normalul.','Textul cere explicit durata, cheagurile și numărul de absorbante.']],
 8,'Distractorii înlocuiesc fereastra 3-5 cu extreme plauzibile de hipo- sau hipermenoree.',['3-5 pe zi este normal','tampoane sanitare']),

q(70,['Manifestările clinice ale carenței marțiale foarte îndelungate, dincolo de simptomele generale de anemie, includ:',
 ['Unghii fragile, koilonichie, atrofierea papilelor linguale, stomatită angulară și păr fragil','Sindrom de disfagie și glosită (Plummer-Vinson sau Paterson-Brown-Kelly)','La sugari: prematuritate sau întârzierea alimentației diversificate; anamneza cere AINS și sânge în scaun','Koilonichia este semnul siclemiei, iar Plummer-Vinson ține de deficitul de B12','Prematuritatea protejează de carența marțială, AINS-urile neinfluențând sângerarea digestivă'],'ABC',331,'Tablou clinic — Deficitul de fier',
 'Asocierea semnelor epiteliale și a sindromului Plummer-Vinson de contextul pediatric și de anamneza AINS.',
 ['Lista epitelială (unghii, limbă, comisuri, păr) deschide caracteristicile îndelungate.','Perechea disfagie-glosită cu cele două eponime este explicită.','Prematuritatea/diversificarea întârziată și AINS/sângele fecal completează contextul.','Koilonichia este feriprivă; Plummer-Vinson nu este atribuit B12.','Prematuritatea crește, nu scade, riscul; AINS pot produce sângerare digestivă.']],
 8,'Distractorii mută koilonichia pe siclemie și Plummer-Vinson pe B12, semne din alte secțiuni ale capitolului.',['koilonichie','Plummer-Vinson']),

q(71,['Cele mai frecvente cauze ale eșecului tratamentului cu fier oral, înainte de a trece la calea parenterală, sunt:',
 ['Lipsa complianței','Pierderi continue de sânge','Diagnostic incorect, de exemplu talasemie','Creșterea hepcidinei după o doză orală, care stimulează absorbția dozelor următoare','Răspunsul hematologic parenteral este constant mai rapid, deci calea orală se abandonează din prima zi'],'ABC',332,'Tratament — Eșecul fierului oral',
 'Reținerea triadei complianță / sângerare persistentă / talasemie, distinct de cinetica hepcidinei și de viteza hematologică.',
 ['Complianța redusă deschide lista de eșec.','Sângerarea continuă este a doua cauză citată.','Talasemia ca diagnostic incorect închide triada.','Hepcidina crescută după o doză suprimă, nu stimulează, absorbția ulterioară.','Depozitele se reîncarcă mai repede parenteral, dar răspunsul hematologic nu este mai rapid.']],
 8,'Distractorii inversează efectul hepcidinei post-doză și viteza hematologică parenteral versus oral.',['lipsa complianţei','talasemie']),

q(72,['Anemia sideroblastică, în definiția și etiologia din capitol, se caracterizează prin:',
 ['Anemie refractară la suplimentarea hematinică simplă, cu celule hipocrome variabile și exces de fier plus sideroblaști inelari în măduvă','Inelele sunt acumulări mitocondriale de fier în jurul nucleului, vizibile cu reacția Perls','Forma X-linkată are un defect al δ-ALA-sintetazei, enzimă dependentă de piridoxină, din prima etapă a sintezei hemului','Forma dobândită a adultului este, în majoritate, un sindrom mielodisplazic; cauze: izoniazidă, alcool, plumb','Transmiterea este constant autozomal dominantă, Perls fiind negativ în măduvă'],'ABCD',332,'Anemia sideroblastică',
 'Asocierea inelului mitocondrial Perls, a ALA-sintetazei X-linkate și a MDS-ului ca forma adultă dominantă.',
 ['Refractaritatea, hipocromia și sideroblaștii inelari definesc entitatea.','Sediul mitocondrial și Perls sunt descrierea inelului.','δ-ALA-sintetaza piridoxin-dependentă este defectul X-linkat.','MDS, izoniazida, alcoolul și plumbul sunt cauzele dobândite citate.','Există și formă autozomal recesivă; Perls evidențiază tocmai inelele.']],
 8,'Distractorul transformă Perls-ul pozitiv și heterogenitatea genetică într-o boală autozomal dominantă Perls-negativă.',['sideroblaşti inelari','izoniazidă']),

q(73,['Aportul, stocarea și pierderile de vitamină B12, în cifrele de deschidere, includ:',
 ['Este sintetizată de microorganisme; omul depinde de surse animale (carne, pește, ouă, lapte), nu de plante; gătitul nu o distruge de obicei','Dieta zilnică obișnuită conține 5-30 µg, din care se absorb 2-3 µg','Adultul stochează circa 2-3 mg, mai ales hepatic; deficitul după malabsorbție poate întârzia 2 ani sau mai mult, pierderile zilnice fiind 1-2 µg','Plantele sunt sursa principală, gătitul inactivând complet cobalamina','Depozitele hepatice de 2-3 µg se epuizează în 2 săptămâni'],'ABC',334,'Vitamina B12 — Surse și depozite',
 'Reținerea ferestrei 5-30 / 2-3 µg, a depozitului 2-3 mg și a latenței de ≥2 ani, distinct de originea vegetală.',
 ['Originea microbiană/animală și rezistența la gătire deschid paragraful.','Cifrele 5-30 µg și 2-3 µg absorbiți sunt ale dietei.','2-3 mg, 2 ani și 1-2 µg/zi închid bilanțul.','Plantele nu conțin B12; gătitul nu o distruge de obicei.','Depozitul este de 2-3 mg, nu µg, iar latența este de ani, nu de săptămâni.']],
 8,'Distractorii mută originea pe plante și comprimă depozitul de 2-3 mg la 2-3 µg epuizabili în 2 săptămâni.',['5-30 pg','2-3 mg']),

q(74,['Anomaliile neurologice din deficitul de vitamină B12 apar, potrivit capitolului, numai la niveluri serice:',
 ['Foarte scăzute, sub 60 ng/L (50 pmol/L), ocazional fără semne clinice de anemie','Sub 160 ng/L, dar numai dacă există și anemie severă','Peste 1 000 ng/L, ca efect toxic al cobalaminei','Identice pragului de folat seric (<3 µg/L)','Doar după epuizarea folatului eritrocitar, independent de B12'],'A',334,'Anemia pernicioasă — Tablou neurologic',
 'Reținerea pragului neurologic <60 ng/L (50 pmol/L), distinct de limita inferioară uzuală de 160 ng/L și de posibila absență a anemiei.',
 ['<60 ng/L (50 pmol/L) și posibila absență a anemiei clinice sunt fraza din paragraf.','160 ng/L este limita inferioară de laborator, nu pragul neurologic; textul admite forme fără anemie.','1 000 ng/L nu este un prag toxic descris aici.','<3 µg/L este al folatului seric, nu al B12 neurologice.','Neuropatia este a deficitului de B12, nu a folatului.']],
 8,'Distractorii confundă pragul neurologic <60 ng/L cu limita de laborator 160 ng/L sau cu pragul de folat.',['<60 ng/L','50 pmol/L']),

q(75,['Acidul folic, în metabolismul, aportul și tabloul clinic din capitol, se caracterizează prin:',
 ['Nu există în natură ca monoglutamat, ci ca poliglutamați (dihidro- sau tetrahidrofolat), transformați la absorbție în metil-THF, forma serică principală','Gătitul pierde 60-90% din folat; minimul zilnic necesar este circa 100 µg; depozitele sunt de aproximativ 10 mg','După o dietă necorespunzătoare, deficitul se dezvoltă în circa 4 luni','Spre deosebire de deficitul de B12, în deficitul de folat nu apare neuropatia','Depozitele de 10 mg durează 2 ani, iar neuropatia este identică celei din carența de B12'],'ABCD',335,'Acidul folic — Aport și deficit',
 'Integrarea poliglutamaților, a pierderii 60-90% la gătire, a depozitului 10 mg/4 luni și a absenței neuropatiei.',
 ['Originea poliglutamată și metil-THF seric deschid biochimia.','60-90%, 100 µg și 10 mg sunt cifrele de aport/depozit.','Cele 4 luni sunt latența după dietă săracă.','Absența neuropatiei, spre deosebire de B12, este explicită.','Latența de 2 ani și neuropatia sunt ale B12, nu ale folatului.']],
 8,'Distractorul aplică latența de 2 ani și neuropatia cobalaminei asupra folatului, unde textul dă 4 luni fără neuropatie.',['60-90%','10 mg']),

q(76,['În tratamentul anemiei megaloblastice, capitolul precizează că:',
 ['Transfuzia nu este de obicei indicată în anemia cronică; la vârstnici poate precipita insuficiența cardiacă','Acidul folic poate produce răspuns hematologic în deficitul de B12, dar poate agrava neuropatia; doze mari de folat singure nu se folosesc decât dacă B12 serică este normală','Transfuzia de rutină precede orice substituție vitaminică, inclusiv la tânărul compensat','Dozele mari de folat sunt de primă intenție în toate megaloblastozele, B12 fiind superfluă','Vegetarienii nu necesită suplimentare orală de B12'],'AB',336,'Tratamentul anemiei megaloblastice — Principii',
 'Separarea interdicției transfuziei de rutină (mai ales la vârstnic) de riscul folatului asupra neuropatiei din carența de B12.',
 ['Absența indicației uzuale și precipitatea ICC la vârstnic sunt din deschidere.','Răspunsul hematologic paradoxal și agravarea neuropatiei, plus condiția B12 normale, sunt fraza următoare.','Textul evită transfuzia de rutină în forma cronică.','Folatul singur, în doze mari, este interzis dacă B12 nu este documentat normal.','Vegetarienii pot necesita suplimentare orală de B12.']],
 8,'Distractorii transformă folatul din risc neurologic într-o primă intenție universală și impun transfuzia de rutină.',['Transfuzia de sânge nu este','poate agrava neuropatia']),

q(77,['Tratamentul și profilaxia deficitului de folat, în schemele din capitol, includ:',
 ['Corecția cu 5 mg acid folic zilnic, circa 4 luni, pentru reumplerea depozitelor','Profilactic, 400 µg zilnic tuturor femeilor care planifică sau sunt la început de sarcină, pentru a reduce defectele de tub neural','Femeile cu un copil anterior cu defect de tub neural: 5 mg zilnic înainte și în timpul unei sarcini ulterioare','400 µg zilnic înlocuiesc schema de 5 mg la bolile hematologice cronice și la dializă','Cei 5 mg sunt evitați după un defect de tub neural anterior, 400 µg fiind suficienți'],'ABC',336,'Tratamentul deficitului de folat; Profilaxie',
 'Contrastarea ferestrelor 5 mg / 4 luni, 400 µg de concepție și 5 mg după un NTD anterior.',
 ['5 mg/zi și cele 4 luni sunt schema de reumplere.','400 µg la planificare/început de sarcină este profilaxia generală.','5 mg înainte și în timpul sarcinii următoare este schema după NTD.','În boli hematologice cronice și dializă se dau tot 5 mg zilnic sau săptămânal, nu 400 µg.','După NTD anterior doza este 5 mg, nu 400 µg.']],
 8,'Distractorii mută 400 µg pe teritoriul celor 5 mg (NTD anterior, dializă), cele două trepte ale aceluiași paragraf.',['5 mg de acid folie','400 µg zilnic']),

q(78,['Macrocitoza cu măduvă normoblastică, nu megaloblastică, se asociază, printre cauzele patologice frecvente, cu:',
 ['Excesul de alcool','Afecțiuni hepatice, reticulocitoză (de exemplu după hemoliză) și hipotiroidism','Aplazie, mielodisplazie, aplazie eritroidă pură, mielom; hidroxicarbamidă și azatioprină','Aglutinine la rece: VEM scade la normal după încălzirea probei la 37°C','Niveluri constant scăzute de B12 și folat, fără care macrocitoza nu apare'],'ABCD',336,'Macrocitoza fără modificări megaloblastice',
 'Reținerea listei normoblastice (alcool, ficat, tiroidă, aplazie/MDS, citostatice) și a artefactului de aglutinine la 37°C.',
 ['Alcoolul deschide cauzele patologice frecvente.','Ficatul, reticulocitele și hipotiroidismul continuă lista.','Aplazia/MDS/mielomul și cele două medicamente închid hematologicul.','Normalizarea VEM la 37°C distinge aglutininele la rece.','În aceste afecțiuni B12 și folatul sunt normale.']],
 8,'Distractorul impune carență de B12/folat unei liste din care textul tocmai a exclus megaloblastoza.',['măduvă normoblastică','37°C']),

q(79,['Hemoglobinuria paroxistică nocturnă, în detaliile clinice și de prognostic care depășesc mecanismul GPI, se recunoaște prin:',
 ['Caracteristic, doar micțiunile nocturne și prima urină de dimineață sunt închise la culoare (motivul este neclar); în forme severe, toate micțiunile; pierderile urinare de fier pot produce deficit marțial','Mediana de supraviețuire este 10-15 ani; clona HPN poate dispărea; transplantul s-a făcut cu donori înrudiți HLA-compatibili sub 50 de ani sau neînrudiți sub 25 de ani','Eculizumabul reactivează constant măduva aplazică, transplantul fiind inutil sub 50 de ani','Urina este deschisă la culoare noaptea și se închide doar seara','Clona HPN rămâne permanentă, mediana de supraviețuire fiind sub 12 luni'],'AB',354,'HPN — Clinică și prognostic',
 'Separarea patternului nictemer al urinii și a pierderii urinare de fier de mediana 10-15 ani și de ferestrele de vârstă ale transplantului.',
 ['Patternul nocturn/matinal, formele severe și fierul urinar sunt din tabloul clinic.','10-15 ani, dispariția clonei și pragurile 50/25 de ani sunt din prognostic/tratament.','Textul precizează că eculizumabul nu reactivează măduva.','Sensul nictemer al culorii urinii este inversat.','Clona poate dispărea; mediana nu este sub un an.']],
 8,'Distractorii inversează nictemera urinii și atribuie eculizumabului reactivarea medulară, pe care textul o neagă.',['prima urină de dimineaţă','10-15 ani'],[355]),
];
