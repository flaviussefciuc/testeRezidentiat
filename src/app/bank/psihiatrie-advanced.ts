import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('psihiatrie',14,pdfOffset,`psihiatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PSIHIATRIE_ADVANCED=[
q(1,['Schizofrenia:',
 ['Diagnosticul cere două sau mai multe simptome caracteristice cel puțin o lună, dintr-un interval de 6 luni, cu afectarea funcționării peste 6 luni','Antipsihoticele atipice sunt medicamente de primă linie în tratamentul de întreținere','Clozapina este rezervată psihozei refractare din cauza riscului de agranulocitoză','Neurolepticele cu potență crescută au mai multe efecte extrapiramidale și mai puține efecte anticolinergice','Simptomele negative, dacă predomină, asociază un prognostic mai bun'],'ABCD',319,'Tulburări psihotice — Schizofrenia',
 'Aplicarea criteriului temporal de 6 luni și a ierarhiei antipsihoticelor, inclusiv a clozapinei.',
 ['Criteriul a două simptome o lună din 6, cu disfuncție >6 luni, este explicit.','Atipicele sunt citate ca primă linie de întreținere.','Clozapina este cel mai eficace, dar rezervată formelor refractare prin agranulocitoză.','Textul contrastează potența crescută (mai multe extrapiramidale, mai puține anticolinergice) cu cea redusă.','Predominanța simptomelor negative asociază prognostic mai prost.']],
 8,'Distractorul inversează prognosticul formelor cu simptome negative predominante.',['agranulocitoză','Medicamente de primă linie']),

q(2,['Care dintre următoarele afirmații diferențiază corect tulburările psihotice după durată?',
 ['Tulburarea schizofreniformă durează cel puțin o lună, dar nu depășește 6 luni','Tulburarea psihotică scurtă durează cel puțin o zi, dar nu depășește o lună, fără a include simptomele negative între criteriile de definire','În tulburarea schizoafectivă, halucinațiile și delirurile trebuie să fie prezente și separat de episodul afectiv','Tulburarea delirantă întrunește criteriile complete de schizofrenie, cu dezorganizare marcată a vorbirii','Tulburarea schizofreniformă cere simptome peste 6 luni, identic cu schizofrenia'],'ABC',320,'Tulburări psihotice — Alte tulburări psihotice',
 'Separarea schizofreniformei, a psihozei scurte și a schizoafectivei după durată și după relația cu dispoziția.',
 ['Intervalul 1–6 luni definește schizofreniforma.','Intervalul 1 zi–1 lună, fără simptomele negative între criterii, definește psihoza scurtă.','Disocierea psihozei de episodul afectiv este criteriul schizoafectivei.','Tulburarea delirantă nu întrunește criteriile de schizofrenie și nu afectează funcția în afara consecințelor delirului.','Peste 6 luni cu disfuncție este criteriul schizofreniei, nu al schizofreniformei.']],
 8,'Distractorii lungesc schizofreniforma până la criteriul schizofreniei și atribuie delirantei dezorganizarea schizofrenă.',['fără să depăşească 6 luni','fără a depăşi o lună']),

q(3,['Tulburarea depresivă majoră:',
 ['Diagnosticul cere cinci simptome, incluzând dispoziția depresivă sau anhedonia, peste 2 săptămâni','După remisiune, rata de recurență a episoadelor este de 50%','Subtipul cu simptome atipice este cel mai frecvent','TEC este contraindicată în formele severe, rezistente la tratament','Fototerapia este tratamentul subtipului cu simptome psihotice, nu al celui sezonier'],'ABC',321,'Tulburări afective — Tulburarea depresivă majoră',
 'Aplicarea pragului de 2 săptămâni, a recurenței de 50% și a ierarhiei subtipurilor.',
 ['Cele cinci simptome cu dispoziție sau anhedonie >2 săptămâni sunt criteriile din text.','Recurența de 50% este explicită.','Nota identifică forma atipică drept cel mai frecvent subtip.','TEC este indicată tocmai în cazurile rezistente sau severe.','Fototerapia tratează forma cu ritmicitate sezonieră, nu pe cea psihotică.']],
 8,'Distractorii interzic TEC acolo unde textul o indică și mută fototerapia de pe forma sezonieră pe cea psihotică.',['rata de recurenţă de 50%','simptome atipice']),

q(4,['Medicamentul de primă linie citat pentru tratamentul de lungă durată al maniei este:',
 ['Litiul, cu risc de anomalie Ebstein, diabet insipid nefrogen și hipotiroidism','Valproatul, fără risc teratogen','Carbamazepina ca unică opțiune, fără asociere cu antipsihotice atipice','Benzodiazepinele ca stabilizator unic de întreținere','SSRI în monoterapie, fără stabilizator de dispoziție'],'A',323,'Tulburări afective — Tulburarea bipolară',
 'Identificarea litiului ca primă linie de întreținere și a reacțiilor adverse specifice, inclusiv teratogenitatea.',
 ['Litiul este frecvent prima linie de lungă durată; efectele adverse includ Ebstein, diabet insipid nefrogen și hipotiroidism.','Valproatul este un stabilizator, dar textul nu îl scutește de teratogenitate și nu îl pune ca răspuns al acestei descrieri.','Atipicele pot fi asociate; carbamazepina nu este unica opțiune.','Benzodiazepinele nu sunt stabilizatorul de întreținere citat.','SSRI fără stabilizator pot induce manie.']],
 8,'Distractorii propun monoterapii (SSRI, benzodiazepine) pe care textul le leagă de viraj maniacal sau de alt scop terapeutic.',['Litiul este folosit frecvent','anomalia Ebstein']),

q(5,['Tulburarea bipolară:',
 ['Tipul I cere cel puțin un episod maniacal; depresia majoră este frecventă, dar nu necesară pentru diagnostic','Tipul II asociază cel puțin un episod hipomaniacal și cel puțin un episod de depresie majoră','Episodul maniacal durează cel puțin 4 zile și nu afectează funcționarea','Tipul II se definește prin episoade maniacale recurente, fără depresie','Hipomania durează cel puțin o săptămână și produce dezorganizare funcțională identică maniei'],'AB',322,'Tulburări afective — Tulburarea bipolară',
 'Separarea bipolarului I de II după prezența maniei versus hipomaniei și a depresiei majore.',
 ['Criteriul de cel puțin un episod maniacal pentru tipul I este explicit.','Tipul II cere hipomanie plus depresie majoră.','Durata de 4 zile fără afectare funcțională definește hipomania, nu mania.','Episoadele maniacale definesc tipul I, nu II.','Hipomania durează cel puțin 4 zile și nu produce afectare semnificativă a funcționării.']],
 8,'Distractorii inversează mania/hipomania între tipurile I și II și lungesc hipomania până la criteriul maniei.',['Tipul I','Tipul II'],[323]),

q(6,['Tulburarea de panică:',
 ['Atacurile durează până la maximum 30 de minute și asociază teama de moarte, palpitații și dispnee','SSRI și SNRI sunt folosite în tratamentul de lungă durată','Benzodiazepinele pot fi folosite pentru tratamentul de moment al atacului','Buspirona înlocuiește SSRI ca primă linie a atacurilor acute','Diagnosticul se pune după un singur atac, fără teamă anticipatorie și fără modificare de comportament'],'ABC',323,'Tulburări anxioase — Tulburarea de panică',
 'Corelarea duratei atacului cu tratamentul de fond (SSRI/SNRI) versus cel de moment (benzodiazepine).',
 ['Plafonul de 30 de minute și simptomele vegetative sunt explicite.','SSRI și SNRI sunt tratamentul de lungă durată.','Benzodiazepinele sunt rezervate momentului atacului; alprazolamul are debut rapid.','Buspirona este citată pentru anxietatea cronică cu risc de abuz, nu ca salvare a atacului acut.','Diagnosticul cere recurență plus teamă persistentă sau evitare maladaptativă.']],
 8,'Distractorii mută buspirona pe atacul acut și permit diagnosticul după un episod izolat.',['maximum 30 de minute','Benzodiazepinele']),

q(7,['Supradoza de benzodiazepine:',
 ['Doza letală este de peste 1.000 de ori mai mare decât doza terapeutică, ceea ce face suicidul prin această cale foarte dificil','Flumazenilul este antagonistul care poate anula efectele supradozei','Doza letală este apropiată de cea terapeutică, similar antidepresivelor triciclice','Naloxona este antidotul specific','Flumazenilul este contraindicat, deoarece crește toxicitatea benzodiazepinelor'],'AB',324,'Tulburări anxioase — Medicația anxiolitică',
 'Recunoașterea indexului terapeutic larg al benzodiazepinelor și a rolului flumazenilului.',
 ['Nota „De reținut” citează raportul >1.000 între doza letală și cea terapeutică.','Flumazenilul este antagonistul citat.','Indexul terapeutic îngust aparține ADT (supradoză la de 5 ori doza terapeutică), nu benzodiazepinelor.','Naloxona este antagonist opioid, nu benzodiazepinic.','Textul prezintă flumazenilul ca antidot, nu ca factor de toxicitate.']],
 8,'Distractorii aplică toxicitatea ADT și antidotul opioidelor asupra benzodiazepinelor.',['I.OOO ori','Flumazenilul']),

q(8,['Tulburarea acută de stres se caracterizează prin:',
 ['Debut în prima lună după eveniment și remisiune într-o lună','Debut în primele 3 luni și remisiune în 6 luni de la dispariția stresorului','Simptome care durează cel puțin o lună, definind astfel PTSD','Debut la peste un an de la stresor','Evoluție cronică prin definiție, identică tulburării de adaptare'],'A',325,'Tulburări legate de traumă — Tulburarea acută de stres',
 'Identificarea ferestrei de o lună care separă stresul acut de adaptare și de PTSD.',
 ['Nota „De reținut” plasează debutul și remisiunea în prima lună.','Fereastra 3 luni / 6 luni definește tulburarea de adaptare.','Durata de cel puțin o lună este criteriul PTSD.','Debutul tardiv, peste un an, nu este descris pentru stresul acut.','Adaptarea se remite în 6 luni și nu este cronică prin definiție.']],
 8,'Distractorii sunt ferestrele temporale reale ale adaptării și PTSD, ușor de permutat.',['prima lună','se remite într-o lună']),

q(9,['Identificați afirmațiile corecte privind tulburarea conversivă și entitățile înrudite:',
 ['Tulburarea conversivă produce deficite senzoriale sau motorii fără o condiție neurologică identificată, adesea cu „la belle indifférence”','În tulburarea cu simptome somatice, pacienții sunt foarte afectați psihologic de simptomele lor, spre deosebire de conversie','Tulburările factice nu au un beneficiu secundar evident, spre deosebire de simularea premeditată','Simularea premeditată urmărește un beneficiu (scutire de muncă, narcotice) și este mai frecventă la bărbați','Tulburarea conversivă se caracterizează prin preocuparea de a avea o boală gravă în absența simptomelor somatice'],'ABCD',326,'Tulburări somatice — Conversie, factice, simulare',
 'Diferențierea conversiei, a simptomelor somatice, a tulburărilor factice și a simulării după motiv și insight afectiv.',
 ['Deficitele inexplicabile și „la belle indifférence” definesc conversia.','Contrastul cu preocuparea intensă din tulburarea cu simptome somatice este explicit.','Absența beneficiului secundar distinge facticele de simulare.','Beneficiul și predominanța masculină sunt citate pentru malingering.','Preocuparea de boală fără simptome semnificative definește tulburarea nosofobică, nu conversia.']],
 8,'Distractorul atribuie conversiei criteriul nosofobiei, cele trei entități fiind definite pe aceeași pagină.',['La belle indifference','beneficiu secundar']),

q(10,['Anorexia nervosa și bulimia nervosa:',
 ['În anorexie, greutatea este în general sub 85% din greutatea ideală, cu lanugo, bradicardie și amenoree','Anorexia are o rată de mortalitate pe 10 ani de 6%, prin complicații sau suicid','Fluoxetina este medicația aprobată pentru bulimie; în anorexie, farmacoterapia nu și-a dovedit utilitatea ca tratament de fond','Pacientele cu bulimie au, în general, greutate corporală scăzută, similar anorexiei','Sindromul de realimentare se caracterizează prin hiperfosfatemie și nu are risc cardiovascular'],'ABC',327,'Tulburări alimentare — Anorexia și bulimia',
 'Separarea anorexiei de bulimie după greutate, mortalitate și locul fluoxetinei.',
 ['Pragul <85% și semnele de înfometare sunt explicite.','Mortalitatea de 6% pe 10 ani este din notă.','Fluoxetina este citată pentru bulimie; farmacoterapia anorexiei nu și-a dovedit utilitatea.','În bulimie greutatea este în general normală, nu scăzută.','Realimentarea produce hipofosfatemie, hipomagneziemie și hipocalcemie, cu risc de colaps cardiovascular.']],
 8,'Distractorii atribuie bulimiei cașexia anorexiei și inversează tulburările ionice ale realimentării.',['<85% din greutatea','Fluoxetină']),
];
