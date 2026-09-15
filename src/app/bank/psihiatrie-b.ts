import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('psihiatrie',14,pdfOffset,`psihiatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PSIHIATRIE_B=[
q(11,['Tulburarea de anxietate generalizată:',
 ['Presupune anxietate excesivă în majoritatea zilelor, peste 6 luni, cu afectarea funcționării','Diagnosticul cere trei dintre simptomele: neliniște, oboseală, deficit de concentrare, iritabilitate, tensiune musculară, tulburări de somn','Buspirona este considerată mai sigură pe termen lung decât benzodiazepinele, din cauza riscului de dependență','Riscul femeilor de a fi afectate este dublu comparativ cu bărbații','Se definește prin atacuri care durează maximum 30 de minute, fără anxietate intercritică'],'ABCD',324,'Tulburări anxioase — Anxietatea generalizată',
 'Aplicarea pragului de 6 luni, a celor trei simptome, a buspironei și a predominanței feminine duble.',
 ['Durata >6 luni cu afectare funcțională este explicită.','Cele șase simptome, dintre care trei, sunt enumerate.','Buspirona versus benzodiazepine în tratamentul cronic este citată.','Dublarea riscului la femei este epidemiologia citată.','Plafonul de 30 de minute definește atacul de panică.']],
 8,'Distractorii importă durata atacului de panică și fototerapia depresiei sezoniere.',['>6 luni','Buspirona']),

q(12,['Obsesiile și compulsiile din TOC sunt descrise ca:',
 ['Nedorite și supărătoare (ego-distonice)','Dezirabile, legate de control și perfecționism (ego-sintonice)','Absente prin definiție, diagnosticul cerând doar ticurile vocale','Identice criteriilor de personalitate antisocială','Un deficit de distrofină, ca în Duchenne'],'A',324,'TOC — Distincția de personalitatea obsesiv-compulsivă',
 'Separarea TOC ego-distonice de personalitatea obsesiv-compulsivă ego-sintonică.',
 ['Nota definește TOC ca ego-distonică.','Ego-sintonicul caracterizează TPOC, nu TOC.','Ticurile vocale țin de Tourette, nu înlocuiesc obsesiile.','Personalitatea antisocială are alte criterii.','Distrofina este irelevantă.']],
 8,'Nota contrastează explicit ego-distonic versus ego-sintonic; distractorul principal este TPOC.',['ego-DIStonice','TOC']),

q(13,['Tulburarea de stres post-traumatic:',
 ['Simptomele trebuie să dureze cel puțin o lună','Evenimentul poate fi trăit direct, ca martor sau de o persoană apropiată','Debutul și remisiunea se înscriu ambele în prima lună, definind astfel stresul acut','Durata minimă este de o zi, ca în psihoza scurtă','Buspirona înlocuiește expunerea la traumă ca unic criteriu diagnostic'],'AB',325,'Tulburări legate de traumă — PTSD',
 'Aplicarea duratei de cel puțin o lună și a modalităților de expunere, distinct de stresul acut.',
 ['Durata de cel puțin o lună este explicită.','Cele trei modalități de expunere sunt citate.','Fereastra de o lună debut–remisiune definește stresul acut, din notă.','O zi este criteriul psihozei scurte.','Buspirona nu este criteriu diagnostic.']],
 8,'Nota de pe aceeași pagină pune stresul acut în prima lună; distractorul mută PTSD pe acea fereastră.',['cel puţin 1 lună','flashback-uri']),

q(14,['Clasificarea tulburărilor de personalitate pe grupe:',
 ['Grupul A (excentric) include tipurile schizoid, schizotipal și paranoid','Grupul B (extravagant) include histrionic, narcisist, borderline și antisocial','Grupul C (ezitant) include evitant, dependent și obsesiv-compulsiv','Grupul A include borderline și antisocial','Grupul C include paranoid și schizotipal'],'ABC',329,'Tulburări de personalitate — Grupele A, B, C',
 'Memorarea conținutului celor trei clustere, fără a muta borderline în A sau paranoid în C.',
 ['Schizoid, schizotipal, paranoid = A.','Histrionic, narcisist, borderline, antisocial = B.','Evitant, dependent, obsesiv-compulsiv = C.','Borderline și antisocial sunt în B.','Paranoid și schizotipal sunt în A.']],
 8,'Mutarea unui tip peste cluster este capcana clasică a tabelului 14-5.',['Grupul A','Grupul C']),

q(15,['Tulburarea de personalitate antisocială cere, printre altele:',
 ['Vârsta peste 18 ani și istoric de tulburare de conduită înainte de 15 ani','Debut după 40 de ani, fără antecedente de conduită','Simptome negative predominante, cu prognostic bun','La belle indifférence ca semn cardinal al diagnosticului','Greutate sub 85% din cea ideală, cu lanugo'],'A',328,'Tulburări de personalitate — Antisocială',
 'Aplicarea pragurilor de 18 ani (diagnostic) și 15 ani (conduită prealabilă).',
 ['Vârsta >18 ani cu conduită înainte de 15 ani este din tabel.','Debutul tardiv fără conduită nu îndeplinește criteriul.','Simptomele negative țin de schizofrenie.','La belle indifférence caracterizează conversia.','Pragul ponderal 85% este al anorexiei.']],
 8,'Pragurile 15 și 18 ani sunt ușor de inversat; distractorii importă semne din conversie și anorexie.',['>18 ani','15 ani']),

q(16,['Intoxicația și sevrajul alcoolic:',
 ['Intoxicația include scăderea inhibiției, vorbire neclară și afectarea coordonării','Sevrajul poate include delirium tremens (convulsii, stare confuzională) și halucinații tactile','Naltrexona reduce stările de nevoie imperioasă; disulfiramul produce greață dacă se consumă alcool','Benzodiazepinele previn delirium-ul tremens în cursul sevrajului','Antidotul specific al intoxicației este flumazenilul, ca în supradoza de benzodiazepine'],'ABCD',329,'Abuzul de substanțe — Alcoolul',
 'Corelarea DT și a halucinațiilor tactile cu naltrexonă, disulfiram și benzodiazepinele de sevraj.',
 ['Semnele de intoxicație sunt din tabel.','DT și halucinațiile tactile sunt la sevraj.','Naltrexona și disulfiramul sunt tratamentul citat.','Benzodiazepinele previn DT.','Flumazenilul este antagonistul benzodiazepinelor, nu al alcoolului.']],
 8,'Distractorul aplică antidotul benzodiazepinelor asupra alcoolului, o confuzie de sevraj.',['delirium','disulfiramul']),

q(17,['Tulburarea de anxietate socială:',
 ['β-blocantele pot fi folosite în cazurile ușoare pentru a preveni tahicardia','SSRI sunt frecvent eficace în reducerea anxietății sociale','Este identică fobiei specifice de animale, fără componentă evaluativă','Se tratează de primă linie cu lithium, ca mania','Diagnosticul cere simptome negative și dezorganizare peste 6 luni'],'AB',324,'Tulburări anxioase — Fobia socială',
 'Recunoașterea β-blocantelor situaționale și a SSRI, distinct de fobia specifică și de schizofrenie.',
 ['β-blocantele pentru tahicardie în situații anxiogene sunt citate.','SSRI sunt descrise ca frecvent eficace.','Fobia socială ține de evaluarea celorlalți, nu de un obiect anume.','Litiul este al maniei.','Criteriul de 6 luni cu simptome negative este al schizofreniei.']],
 8,'Distractorii mută litiul și criteriile schizofreniei asupra fobiei sociale.',['P-blocantele','SSRI']),

q(18,['În tulburarea dismorfică corporală, textul recomandă:',
 ['Evitarea efectuării operațiilor inutile','Enucleerea de primă intenție, ca în retinoblastom','Ham Pavlik sub 6 luni','Fototerapia ca în depresia sezonieră','Clozapina ca primă linie, înaintea psihoterapiei'],'A',325,'Tulburări înrudite TOC — Dismorfia corporală',
 'Recunoașterea recomandării de a evita chirurgia estetică inutilă.',
 ['„De evitat efectuarea operațiilor inutile” este explicit.','Enucleerea este a retinoblastomului.','Pavlik este al displaziei de șold.','Fototerapia este a depresiei sezoniere.','Clozapina este rezervată psihozei refractare.']],
 8,'Pacientul cere adesea chirurgie; textul o interzice ca tratament al distorsiunii perceptuale.',['operaţiilor inutile','dermatolog']),

q(19,['Tulburarea de personalitate borderline:',
 ['Include relații instabile, frică de abandon, impulsivitate și gândire de tip „alb și negru”','Este mai frecventă la femei','Tratamentul combină psihoterapie extensivă cu doze mici de antipsihotice, SSRI sau stabilizatori','Cere vârsta peste 18 ani și tulburare de conduită înainte de 15 ani','Face parte din grupul A, alături de paranoid'],'ABC',328,'Tulburări de personalitate — Borderline',
 'Recunoașterea splitting-ului, a predominanței feminine și a tratamentului combinat, distinct de antisocială.',
 ['Instabilitatea, abandonul și gândirea alb-negru sunt din tabel.','Predominanța la femei este citată.','Psihoterapia plus doze mici de antipsihotice/SSRI/stabilizatori este schema.','Criteriile 18/15 ani definesc forma antisocială.','Borderline este în grupul B, nu A.']],
 8,'Distractorii mută criteriile antisocialei și clusterul A asupra borderline, mai frecventă la femei.',['alb şi negru','femei']),

q(20,['Chestionarul CAGE pentru depistarea abuzului de alcool cuprinde:',
 ['Dorința de a reduce consumul (Cut down)','Frustrarea provocată de sugestia altora de a opri consumul (Annoyance)','Vinovăția legată de consum (Guilt) și utilizarea dimineața la trezire (Eye-opener)','Numărul de ticuri vocale pe zi, ca în Tourette','Scorul Bishop al colului uterin'],'ABC',329,'Abuzul de substanțe — Screening CAGE',
 'Reconstituirea celor patru itemi CAGE, distinct de alte scoruri clinice.',
 ['Cut down este primul item.','Annoyance este al doilea.','Guilt și Eye-opener completează acronimul.','Ticurile vocale țin de Tourette.','Bishop este scor obstetrical.']],
 8,'Acronimul CAGE este ușor de înlocuit cu alte scale memorabile (ticuri, Bishop).',['CAGE','Eye￾opener']),

q(21,['Intoxicația cu opioizi se caracterizează prin:',
 ['Mioză, scăderea vigilității și depresie respiratorie','Midriază, tahicardie și HTA, ca amfetaminele','Nistagmus vertical și orizontal, ca PCP','Conjunctive injectate și apetit crescut, ca marijuana','Halucinații cu flashback-uri, ca LSD'],'A',330,'Abuzul de substanțe — Opioizi',
 'Identificarea triadei mioză–sedare–depresie respiratorie, distinct de simpatomimetice și PCP.',
 ['Mioza, vigilitatea scăzută și depresia respiratorie sunt din tabel.','Midriaza cu tahicardie/HTA este a amfetaminelor.','Nistagmusul bidirecțional este al PCP.','Conjunctivele injectate și apetitul țin de marijuana.','Flashback-urile sunt ale halucinogenelor.']],
 8,'Fiecare distractor este semnul-cheie al altei substanțe din același tabel.',['Mioză','depresie respiratorie']),

q(22,['Etapele schimbării la pacienții care își modifică obiceiurile de consum, conform textului, încep de la:',
 ['Precontemplare și contemplare, urmate de pregătire, acțiune și menținere','Enucleere, apoi radioterapie','Ham Pavlik, apoi reducție deschisă','Doar histerectomie, fără consiliere','Inducție cu oxitocină, apoi stadiul 3 al travaliului'],'A',330,'Abuzul de substanțe — Etapele schimbării',
 'Identificarea secvenței precontemplare–contemplare–pregătire–acțiune–menținere.',
 ['Textul enumeră această succesiune de etape ale schimbării.','Enucleerea este tratamentul retinoblastomului.','Pavlik este al DDH.','Histerectomia nu este etapa schimbării comportamentale.','Inducția obstetricală nu descrie stadiile motivaționale.']],
 8,'Distractorii sunt secvențe terapeutice reale din alte capitole Sinopsis, nu modelul schimbării.',['etapele schimbării','contemplare']),
];
