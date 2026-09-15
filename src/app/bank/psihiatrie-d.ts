import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('psihiatrie',14,pdfOffset,`psihiatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PSIHIATRIE_D=[
q(38,['Neurolepticele cu potență redusă versus cele cu potență ridicată, conform tabelului 14-1:',
 ['Cele cu potență redusă (clorpromazină, tioridazină) blochează D2, sunt utile în simptome pozitive intense și asociază efecte anticolinergice (confuzie, constipație, retenție urinară, hipotensiune)','Cele cu potență ridicată (flufenazină, haloperidol, loxapină, tiotixen, trifluoperazină) sunt folosite și pentru controlul de urgență al psihozei sau agitației','Cele cu potență ridicată asociază distonie, parkinsonism, akinezie, akatizie, diskinezie tardivă, hiperprolactinemie și sindrom neuroleptic malign','Atât potența redusă, cât și cea ridicată sunt descrise ca medicamente de linia a 2-a în tratamentul de întreținere','Haloperidolul blochează doar serotonina, fără efect pe D2'],'ABCD',319,'Tulburări psihotice — Potență redusă versus ridicată',
 'Separarea profilului anticolinergic al potenței reduse de indicația de urgență și de EPS ale potenței ridicate.',
 ['Clorpromazina/tioridazina, blocarea D2, simptomele pozitive și clusterul anticolinergic sunt din tabel.','Controlul de urgență al psihozei/agitației este al potenței ridicate.','Lista EPS plus diskinezie, prolactină și SNM este a potenței ridicate.','Ambele rânduri de potență clasică sunt plasate ca linia a 2-a de întreținere.','Haloperidolul blochează D2, ca celelalte cu potență ridicată.']],
 8,'Distractorul scoate haloperidolul de pe D2, restul fiind rânduri reale din tabelul 14-1.',['clorpromazină','controlul de urgenţă']),

q(39,['Tulburarea delirantă se definește prin:',
 ['Unul sau mai multe deliruri de cel puțin o lună, fără a întruni criteriile de schizofrenie; funcționarea este păstrată, cu excepția consecințelor delirului','Cel puțin două simptome de schizofrenie peste 6 luni, cu simptome negative cerute între criterii','Psihoză de cel puțin o zi și cel mult o lună, fără simptome negative între criterii','Psihoză de cel puțin o lună și cel mult 6 luni, identică schizofreniformei','Halucinații și deliruri doar în interiorul episodului afectiv, identic TDM psihotic'],'A',320,'Tulburări psihotice — Tulburarea delirantă',
 'Separarea delirului izolat ≥1 lună, fără criterii complete de schizofrenie, de schizofreniformă, psihoza scurtă și schizoafectivă.',
 ['Durata de o lună, absența criteriilor de schizofrenie și funcționarea păstrată sunt explicite.','Criteriile complete peste 6 luni definesc schizofrenia.','Fereastra o zi–o lună, fără simptome negative, este a psihozei scurte.','Fereastra 1–6 luni este a schizofreniformei.','Psihoza doar intra-episod afectiv este a TDM/maniei, nu a delirantei.']],
 8,'Distractorii sunt ferestrele reale ale schizofreniei, psihozei scurte și schizofreniformei, mutate pe delirantă.',['cel puţin o lună','nu întruneşte criteriile']),

q(40,['Sindromul serotoninergic și sindromul toxic anticolinergic, conform tabelului 14-2:',
 ['Sindromul serotoninergic este declanșat de SSRI, SNRI, ADT sau IMAO, cu debut abrupt, mioclonii și hipertonii la extremitățile inferioare, și se tratează cu ciproheptadină sau metisergid','Sindromul toxic anticolinergic asociază piele uscată, midriază „orb ca liliacul”, tonus normal sau relaxat și se tratează cu fizostigmină','Hipertermia malignă este declanșată de SSRI, cu rigiditate de țeavă de plumb și ciproheptadină','Sindromul serotoninergic are piele uscată și ileus, identic anticolinergicelor','Fizostigmina este antidotul hipertermiei maligne, nu dantrolenul'],'AB',320,'Tulburări psihotice — SS versus anticolinergic',
 'Maparea declanșatorilor, a pielii (transpirații versus uscată) și a antidoturilor ciproheptadină versus fizostigmină.',
 ['Declanșatorii, debutul abrupt, miocloniile și ciproheptadina sunt din rândul SS.','Pielea uscată, „orb ca liliacul” și fizostigmina definesc SDA.','Hipertermia malignă este declanșată de volatile și succinil-colină, cu rigor mortis și dantrolen.','Pielea uscată și ileusul sunt ale SDA, nu ale SS (transpirații, zgomote intestinale crescute).','Dantrolenul, nu fizostigmina, este al hipertermiei maligne.']],
 8,'Distractorii permută rândurile SNM/SS/SDA/HM din același tabel 14-2.',['Ciproheptadină','Fizostigmină']),

q(41,['Tulburarea depresivă majoră cu simptome atipice:',
 ['Asociază reactivitate afectivă, hiperfagie cu creștere ponderală, hipersomnie, lentoare psihomotorie („membre de plumb”) și hipersensibilitate la rejecție','Este descrisă ca cel mai frecvent subtip al depresiei majore','Se tratează cu fototerapie, identic subtipului cu ritmicitate sezonieră','Cere debut în primele 4 săptămâni după naștere, definind forma peripartum','Exclude anhedonia din criteriile de TDM'],'AB',321,'Tulburări afective — Depresia atipică',
 'Recunoașterea clusterului atipic (reactivitate, hiperfagie, membre de plumb) și a notei că este cel mai frecvent subtip.',
 ['Cele cinci trăsături atipice sunt enumerate.','Nota precizează că este cel mai frecvent subtip.','Fototerapia este a formei sezoniere, nu a celei atipice.','Fereastra de 4 săptămâni postpartum definește forma peripartum.','TDM cere dispoziție depresivă sau anhedonie, inclusiv în forma atipică.']],
 8,'Distractorii mută fototerapia sezonieră și fereastra peripartum pe subtipul atipic.',['membre de plumb','cel mai frecvent subtip']),

q(42,['Tulburarea depresivă persistentă:',
 ['Cere disforie plus cel puțin două alte simptome depresive, în majoritatea zilelor, peste 2 ani','Poate include atât depresia majoră cronică, cât și depresia ușoară cronică care nu întrunește criteriile de TDM','Cere cel puțin un episod maniacal, ca bipolarul I','Durata minimă este de 4 zile, identică hipomaniei','Se tratează de primă intenție cu flumazenil'],'AB',321,'Tulburări afective — Depresia persistentă',
 'Aplicarea pragului de 2 ani și a dublei forme (TDM cronic versus depresie ușoară sub pragul de TDM).',
 ['Disforia plus două simptome peste 2 ani este criteriul.','Includerea TDM cronic și a formei ușoare sub prag este explicită.','Mania definește bipolarul I, nu distimia.','4 zile este hipomania.','Flumazenilul este antagonistul benzodiazepinelor.']],
 8,'Distractorii mută mania, hipomania și flumazenilul pe distimie.',['>2 ani','disforiei']),

q(43,['Cauze iatrogene și medicale care pot mima depresia, conform textului:',
 ['Substanțe: alcool, benzodiazepine, antihistaminice, neuroleptice convenționale, glucocorticoizi și interferon α','Condiții medicale: hipotiroidism, hiperparatiroidism, boala Parkinson, accident vascular cerebral și tumori cerebrale','Patologic, depresia ar fi cauzată de activitate scăzută în SNC a serotoninei, norepinefrinei și dopaminei','Cauza principală este excesul de serotonină, identic sindromului serotoninergic','Interferonul α este tratamentul de primă linie al TDM, nu o cauză'],'ABC',321,'Tulburări afective — Mimici ale TDM',
 'Listarea substanțelor și a bolilor care produc simptome depresive, plus hipoactivitatea monoaminelor.',
 ['Lista de substanțe este explicită.','Lista de condiții medicale este citată.','Hipoactivitatea serotoninei, norepinefrinei și dopaminei este enunțată.','Textul descrie activitate scăzută, nu exces de serotonină.','Interferonul α este cauză de simptome depresive, nu tratament.']],
 8,'Distractorii inversează hipoactivitatea monoaminelor și transformă interferonul din cauză în tratament.',['interferonul a','hipotiroidismul']),

q(44,['Mecanismul de acțiune cel mai probabil al litiului, conform textului, implică:',
 ['Activitatea inozitoltrifosfatului','Blocarea receptorilor D2, identic haloperidolului','Inhibarea recaptării serotoninei, identic SSRI','Antagonismul GABA, identic flumazenilului','Blocarea receptorilor α-1, identic prazosinului'],'A',323,'Tulburări afective — Mecanismul litiului',
 'Identificarea inozitoltrifosfatului ca mecanism propus, distinct de D2, SERT, GABA și α-1.',
 ['Textul precizează că mecanismul este necunoscut, dar cel mai probabil implică inozitoltrifosfatul.','Blocarea D2 este a neurolepticelor.','Inhibarea recaptării serotoninei este a SSRI.','Flumazenilul antagonizează benzodiazepinele pe GABA, nu litiul.','Prazosinul este antagonist α-1 pentru coșmarurile din PTSD.']],
 8,'Toate distractoarele sunt mecanisme reale din capitol, mutate pe litiu.',['inozitoltrifosfatului','mecanismul său de acţiune']),

q(45,['Clasele de antidepresive din tabelul 14-3, altele decât ADT, IMAO și bupropion:',
 ['SNRI (desvenlafaxină, duloxetină, venlafaxină) sunt de primă linie în depresia comorbidă cu durere neuropată și de linia a doua după eșecul SSRI','Modulatorii serotoninei (nefazodonă, trazodonă, vilazodonă) sunt indicați în depresia cu insomnie semnificativă; trazodona asociază priapism','Sunătoarea (Hypericum perforatum) este agent de primă linie în Europa, considerată alternativă în SUA','SSRI își ating efectul în 24 de ore, fără risc de ideație suicidară la adolescenți','Mirtazapina este rezervată ADHD și renunțării la fumat, identic bupropionului'],'ABC',322,'Tulburări afective — SNRI, trazodonă, sunătoare',
 'Extragerea indicației SNRI în durerea neuropată, a priapismului trazodonei și a statutului european al sunătoarei.',
 ['Indicația de primă linie în depresie plus durere neuropată este din tabel.','Insomnia semnificativă și priapismul sunt ale modulatorilor/trazodonei.','Statutul european versus alternativa SUA este explicit.','SSRI cer 3-4 săptămâni și pot crește ideația suicidară la adolescenți.','ADHD și renunțarea la fumat sunt ale bupropionului; mirtazapina este pentru insomnie și/sau anorexie.']],
 8,'Distractorii comprimă latența SSRI și permută indicația mirtazapinei cu cea a bupropionului.',['durere neuro','priapism']),

q(46,['Înainte de a prescrie un antidepresiv și profilul advers al litiului:',
 ['Istoricul de manie trebuie exclus, deoarece antidepresivele fără stabilizator pot induce un episod maniacal la bipolar','Efectele adverse ale litiului includ tremor, diabet insipid nefrogen, hipotiroidism, insuficiență renală și creștere ponderală','Litiul este folosit frecvent ca primă linie în tratamentul de lungă durată al maniei','Antidepresivele în monoterapie sunt tratamentul de întreținere al maniei, fără stabilizator','Litiul este lipsit de efecte renale și tiroidiene'],'ABC',323,'Tulburări afective — Switch maniacal și litiu',
 'Corelarea riscului de switch maniacal cu clusterul advers renal-tiroidian-ponderal al litiului.',
 ['Nota „Pasul următor” cere excluderea maniei înainte de antidepresiv.','Lista de efecte adverse, inclusiv NDI și hipotiroidism, este explicită.','Statutul de primă linie în întreținerea maniei este citat.','Stabilizatorii, nu antidepresivele singure, controlează mania.','Textul enumeră tocmai efectele renale și tiroidiene.']],
 8,'Distractorii transformă antidepresivul în tratament de întreținere al maniei și neagă toxicitatea litiului.',['induce un episod maniacal','diabetul insipid nefrogen']),

q(47,['Epidemiologia tulburării obsesiv-compulsive, conform notei, include:',
 ['Componentă genetică importantă, vârstă de debut la 20 de ani și prevalență egală între femei și bărbați','Predominanță feminină dublă, identică GAD','Debut în copilăria precoce, identic fobiei specifice','Absența oricărei componente genetice, spre deosebire de schizofrenie','Prevalență limitată la bărbații peste 18 ani cu tulburare de conduită'],'A',324,'TOC — Epidemiologie',
 'Recunoașterea triadei genetică–debut la 20 de ani–sex-ratio egal, distinctă de GAD și de personalitatea antisocială.',
 ['Cele trei elemente epidemiologice sunt din notă.','Riscul dublu la femei aparține GAD.','Debutul în copilărie este al fobiei specifice.','Textul afirmă componenta genetică importantă.','Criteriul >18 ani cu conduită înainte de 15 este al personalității antisociale.']],
 8,'Distractorii importă sex-ratio-ul GAD, vârsta fobiei și criteriul antisocial pe TOC.',['20 de ani','prevalentă egală']),

q(48,['Tulburarea de acumulare (colecționarismul patologic):',
 ['Pacientul are dificultăți de a arunca obiecte fără valoare; renunțarea produce disconfort semnificativ și dezordine potențial periculoasă','Tratamentul este terapie cognitiv-comportamentală țintită pe acumulare; tulburarea este în general foarte dificil de tratat','Se tratează de primă intenție cu enucleere, ca dismorfia corporală nerezolvată chirurgical','Diagnosticul cere greutate sub 85% din cea ideală, cu lanugo','Obiectele acumulate sunt ego-sintonice doar dacă există ticuri vocale'],'AB',325,'Tulburări înrudite TOC — Acumularea',
 'Separarea colecționarismului (disconfort la discard, TCC țintită, greu de tratat) de dismorfie și anorexie.',
 ['Dificultatea de a arunca, disconfortul și dezordinea periculoasă sunt explicite.','TCC țintită și dificultatea terapeutică sunt citate.','Enucleerea nu aparține capitolului; la dismorfie se evită operațiile inutile.','<85% cu lanugo definește anorexia.','Ticurile și distincția ego-sinton/diston sunt ale TOC versus TPOC.']],
 8,'Distractorii importă evitatea chirurgicală greșit transformată, anorexia și distincția TOC/TPOC.',['arunca sau a împărţi','foarte dificil de tratat']),

q(49,['Tulburarea conversivă (simptome neurologice funcționale):',
 ['Produce deficite senzoriale sau motorii acute fără condiție neurologic identificată; simptomele pot include paralizie, distonie, disfonie, crize non-epileptice sau tulburări de văz/auz','Prezentarea diagnosticului și educarea asupra naturii psihogene duc la dispariție spontană în 40-50% din cazuri','Linia a doua include TCC, fizioterapie și, uneori, SSRI/SNRI','Pacienții sunt foarte afectați psihologic de simptome, identic tulburării cu simptome somatice','Preocuparea de a avea o boală gravă fără simptome somatice definește entitatea, ca nosofobia'],'ABC',326,'Tulburări somatice — Conversia: tratament',
 'Aplicarea ratei de remisiune 40–50% după educare și a liniei a doua TCC/fizioterapie, distinct de simptome somatice și nosofobie.',
 ['Deficitele inexplicabile și lista de simptome sunt explicite.','Remisiunea 40-50% după educare este citată.','TCC, fizioterapia și SSRI/SNRI sunt linia a doua.','Afectarea psihologică intensă definește tulburarea cu simptome somatice, contrastată explicit cu conversia.','Nosofobia este preocuparea de boală fără simptome semnificative.']],
 8,'Distractorii atribuie conversiei insight-ul din simptomele somatice și criteriul nosofobiei.',['40-50% din cazuri','simptome neurologice funcţionale']),

q(50,['Tulburarea nosofobică:',
 ['Este preocuparea de a avea sau contracta o boală gravă, în absența simptomelor somatice semnificative, cu anxietate ridicată și verificări repetitive','Tratamentul include vizite regulate la medic, terapie cognitiv-comportamentală și SSRI','Cere deficite motorii cu la belle indifférence, identic conversiei','Se definește prin falsificarea semnelor pentru un beneficiu (scutire de muncă), identic simulării','Durata minimă a simptomelor neurologice este de 2 ani, ca distimia'],'AB',326,'Tulburări somatice — Nosofobia',
 'Separarea anxietății de boală fără simptome de conversie, simulare și distimie.',
 ['Preocuparea fără simptome semnificative, plus verificările, este definiția.','Vizitele regulate, TCC și SSRI sunt tratamentul.','La belle indifférence și deficitele motorii definesc conversia.','Beneficiul secundar definește simularea.','Pragul de 2 ani este al depresiei persistente.']],
 8,'Distractorii permută conversia, simularea și distimia pe nosofobie.',['boală gravă','Vizite regulate']),

q(51,['Tulburarea de alimentație compulsivă, spre deosebire de bulimie:',
 ['Episoade necontrolate de alimentație compulsivă fără comportamente compensatorii inadecvate','Episoadele apar cel puțin o dată pe săptămână, peste 3 luni; pacientele sunt adesea supraponderale sau obeze','Psihoterapia (TCC și terapie interpersonală) este de primă linie și în general mai eficace decât farmacoterapia; SSRI pot fi folosite','Greutatea este în general sub 85% din cea ideală, cu lanugo, ca în anorexie','Comportamentele compensatorii (purgație, exercițiu excesiv) definesc diagnosticul, ca în bulimie'],'ABC',327,'Tulburări alimentare — Binge eating',
 'Contrastul binge eating (fără compensare, exces ponderal, TCC > farmacoterapie) cu anorexia și bulimia.',
 ['Absența compensării este criteriul de diferențiere.','Frecvența ≥1/săptămână peste 3 luni și excesul ponderal sunt explicite.','Prioritatea psihoterapiei față de farmacoterapie este citată.','<85% cu lanugo definește anorexia.','Compensarea definește bulimia, nu binge eating.']],
 8,'Distractorii aplică cașexia anorexiei și compensarea bulimiei pe binge eating.',['fără comportamente compensatorii','o dată pe săptămână']),

q(52,['Personalitățile schizotipală, histrionică și obsesiv-compulsivă, conform tabelului 14-5:',
 ['Schizotipală (grup A): paranoia, idei de referință, comportament excentric, anxietate socială, vorbire dezorganizată, convingeri bizare','Histrionică (grup B): caută atenția, comportament seducător sau teatral, labilitate emoțională, relații superficiale, sugestibilitate','Obsesiv-compulsivă (grup C): preocupare pentru detalii, perfecționism, devotament excesiv muncii, inflexibilitate, zgârcenie, încăpățânare','Tratamentul histrionicului este psihoterapie pe termen lung, orientată pe dezvoltarea relațiilor și pe stabilirea de limite','Schizotipalul cere vârstă peste 18 ani și tulburare de conduită înainte de 15 ani, identic antisocialului'],'ABCD',328,'Tulburări de personalitate — Schizotipal, histrionic, TPOC',
 'Maparea a trei rânduri nefolosite din tabelul 14-5, plus coloana de tratament a histrionicului.',
 ['Clusterul excentric al schizotipalului este din tabel.','Clusterul teatral al histrionicului este citat.','Clusterul perfecționist al TPOC este explicit.','Coloana de tratament a histrionicului precizează psihoterapia pe termen lung cu limite.','Conduita înainte de 15 ani și vârsta >18 definesc antisocialul, nu schizotipalul.']],
 8,'Distractorul aplică criteriile antisocialului pe schizotipal, restul fiind rânduri reale din tabel.',['idei de referinţă','comportament seducător']),
];
