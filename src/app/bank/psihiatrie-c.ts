import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('psihiatrie',14,pdfOffset,`psihiatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PSIHIATRIE_C=[
q(23,['Identificați afirmația corectă privind sindromul neuroleptic malign, conform tabelului 14-2:',
 ['Este declanșat de antipsihotice care blochează D2; debutul este progresiv mai degrabă decât abrupt, cu rigiditate de tip plastic „țeavă de plumb” și reflexe scăzute','Este declanșat de SSRI, SNRI, ADT sau IMAO, cu mioclonii și hipertonii la extremitățile inferioare, și se tratează cu ciproheptadină','Asociază piele uscată, midriază „orb ca liliacul” și se tratează cu fizostigmină','Este declanșat de anestezice volatile și succinil-colină, cu rigiditate de tip „rigor mortis”','Evoluția este rapid rezolutivă, identică sindromului serotoninergic'],'A',320,'Tulburări psihotice — Sindromul neuroleptic malign',
 'Diferențierea SNM de sindromul serotoninergic, de intoxicația anticolinergică și de hipertermia malignă.',
 ['Tabelul atribuie SNM blocanților D2, debutului progresiv, țevii de plumb și reflexelor scăzute.','Aceasta este descrierea sindromului serotoninergic.','Pielea uscată și fizostigmina definesc sindromul toxic anticolinergic.','Anestezicele volatile, succinil-colina și dantrolenul definesc hipertermia malignă.','Evoluția prelungită (zile până la săptămâni) caracterizează SNM, nu rezoluția rapidă.']],
 8,'Fiecare distractor este un rând real din tabelul 14-2, permutat pe SNM.',['ţeavă de plumb','Ciproheptadină']),

q(24,['Alegeți afirmațiile corecte referitoare la clasele de antidepresive din tabelul 14-3:',
 ['Supradozarea ADT de 5 ori doza terapeutică poate fi fatală, prin alungirea intervalului QTc','Consumul de alimente cu tiramină (brânză, carne maturată, bere) în timpul tratamentului cu IMAO poate provoca crize hipertensive','Bupropionul nu produce disfuncție sexuală, dar scade pragul convulsivant','SSRI își ating efectul în 24 de ore, fără risc de sindrom serotoninergic','Mirtazapina este rezervată depresiei cu oboseală și ADHD, identic bupropionului'],'ABC',322,'Tulburări afective — Antidepresive',
 'Asocierea toxicității QTc a ADT, a crizei hipertensive la IMAO și a profilului sexual/convulsivant al bupropionului.',
 ['Fatalitatea la 5× doză prin QTc este din tabel.','Restricția de tiramină la IMAO este explicită.','Absența disfuncției sexuale și scăderea pragului convulsivant sunt ale bupropionului.','SSRI cer 3-4 săptămâni și au risc de sindrom serotoninergic.','Mirtazapina este indicată în depresia cu insomnie și/sau anorexie, nu în ADHD.']],
 8,'Distractorii comprimă latența SSRI și permută indicația mirtazapinei cu cea a bupropionului.',['intervalului QTc','tiramină']),

q(25,['Episodul maniacal, spre deosebire de cel hipomaniacal:',
 ['Are dispoziție elevată, expansivă sau iritabilă cu durată de cel puțin o săptămână și afectează semnificativ funcționarea','Episodul hipomaniacal durează cel puțin 4 zile și nu produce o afectare semnificativă a capacității de funcționare','Ambele cer o durată minimă de 2 ani, ca tulburarea depresivă persistentă','Hipomania durează cel puțin o săptămână și impune internare de principiu','Mania se definește prin atacuri de maximum 30 de minute, ca panica'],'AB',322,'Tulburări afective — Manie și hipomanie',
 'Aplicarea pragurilor de o săptămână versus 4 zile și a prezenței versus absenței disfuncției.',
 ['Durata de o săptămână cu disfuncție definește mania.','Cele 4 zile fără disfuncție semnificativă definesc hipomania.','Pragul de 2 ani este al distimiei/ciclotimiei.','O săptămână cu disfuncție este mania, nu hipomania.','Plafonul de 30 de minute definește atacul de panică.']],
 8,'Distractorii mută pragul de 2 ani al distimiei și durata atacului de panică pe mania/hipomanie.',['cel puţin 4 zile','episod maniacal']),

q(26,['Tulburarea bipolară de tip I se definește prin:',
 ['Cel puțin un episod maniacal; episoadele de depresie majoră sunt frecvente, dar nu sunt necesare pentru diagnostic','Cel puțin un episod hipomaniacal și cel puțin un episod de depresie majoră, fără manie','Cicluri rapide de simptome maniacale și depresive ușoare peste 2 ani, fără perioadă de dispoziție normală peste 2 luni','Un singur episod depresiv de 2 săptămâni, fără manie sau hipomanie','Atacuri de panică recurente de maximum 30 de minute'],'A',322,'Tulburări afective — Bipolar tip I versus II',
 'Separarea tipului I (manie necesară, depresia nu) de tipul II (hipomanie plus depresie).',
 ['Definiția tipului I este explicită.','Aceasta este definiția tipului II.','Aceasta este ciclotimia, de pe pagina următoare.','Un episod depresiv izolat definește TDM, nu bipolarul I.','Atacurile de 30 de minute definesc panica.']],
 8,'Distractorii sunt definițiile tipului II, ale ciclotimiei, ale TDM și ale panicii, alăturate în capitol.',['Tipul I','episod maniacal'],[323]),

q(27,['Tulburarea ciclotimică:',
 ['Alternă simptome maniacale ușoare și depresive ușoare, cu durată peste 2 ani, fără perioadă de dispoziție normală peste 2 luni','Simptomele afectează funcționarea, dar nu întrunesc criteriile pentru depresie majoră, manie sau hipomanie','Cere cel puțin un episod maniacal complet, ca bipolarul I','Se tratează de primă intenție cu flumazenil, ca supradoza de benzodiazepine','Durata minimă este de 4 zile, identică hipomaniei'],'AB',323,'Tulburări afective — Ciclotimia',
 'Aplicarea ferestrei de peste 2 ani și a absenței criteriilor complete de manie/depresie.',
 ['Ciclurile ușoare >2 ani fără interval normal >2 luni sunt explicite.','Neîndeplinirea criteriilor complete, cu afectare funcțională, este citată.','Episodul maniacal complet definește bipolarul I, nu ciclotimia.','Flumazenilul este antagonistul benzodiazepinelor.','Cele 4 zile definesc hipomania.']],
 8,'Distractorii ridică ciclotimia la criteriul de manie și importă flumazenilul de pe pagina de anxiolitice.',['>2 ani','>2 luni']),

q(28,['Tulburarea de panică:',
 ['Atacurile pot dura până la maximum 30 de minute, cu anxietate extremă, durere toracică, dispnee, palpitații și frică de moarte','Diagnosticul cere episoade recurente plus frică persistentă de recurență sau modificare maladaptativă a comportamentului','Alprazolamul, cu debut rapid și timp de înjumătățire scurt, este util mai ales în tratamentul atacurilor de panică','Buspirona este antidotul supradozei, ca flumazenilul','Atacul izolat de 6 luni, fără frică de recurență, definește tulburarea'],'ABC',323,'Tulburări anxioase — Panica',
 'Corelarea duratei de 30 de minute, a criteriului de recurență/evitare și a alprazolamului.',
 ['Plafonul de 30 de minute și simptomele sunt explicite.','Recurența plus frica sau evitarea maladaptativă sunt criteriile.','Nota din tabel despre alprazolam este explicită.','Buspirona este anxiolitic; antidotul benzodiazepinelor este flumazenilul.','Fără frică de recurență nu se întrunește diagnosticul; 6 luni este fereastra GAD.']],
 8,'Distractorii substituie flumazenilul cu buspirona și mută pragul GAD de 6 luni pe panică.',['30 de minute','Alprazolamul']),

q(29,['Fobia specifică:',
 ['Apare în mod tipic în copilărie și constă în frică de un obiect, activitate sau situație anume, cu evitare','Confruntarea cu obiectul fricii poate induce atac de panică; unii pacienți au reacție vasovagală (leșin)','Tratamentul implică desensibilizare sistematică prin expuneri repetate, tehnici de relaxare, hipnoză sau instruire','β-blocantele sunt prima linie, ca în anxietatea socială ușoară','Diagnosticul cere trei simptome de GAD peste 6 luni, fără obiect fobic'],'ABC',324,'Tulburări anxioase — Fobia specifică',
 'Recunoașterea debutului din copilărie, a leșinului vasovagal și a desensibilizării, distinct de fobia socială.',
 ['Debutul din copilărie și evitarea obiectului sunt explicite.','Atacul de panică la confruntare și leșinul vasovagal sunt citați.','Desensibilizarea sistematică este tratamentul citat.','β-blocantele sunt menționate la anxietatea socială ușoară, nu ca primă linie aici.','Cele trei simptome peste 6 luni definesc GAD.']],
 8,'Distractorii importă β-blocantul fobiei sociale și criteriile GAD asupra fobiei specifice.',['desensibilizare sistematică','copilărie']),

q(30,['Tulburările comorbide asociate TOC, conform textului, includ:',
 ['Tulburări de dispoziție afectivă în circa 70% din cazuri, tulburare de personalitate obsesiv-compulsivă și ticuri în circa 30%','Schizofrenie rezistentă, care impune clozapină de primă intenție','Greutate sub 85% din cea ideală, cu lanugo','Delirium tremens și halucinații tactile','Anomalia Ebstein, ca la litiu'],'A',324,'TOC — Comorbidități',
 'Memorarea ponderilor de circa 70% (dispoziție) și circa 30% (ticuri/TPOC).',
 ['Cifrele ~70% și ~30% sunt explicite.','Clozapina este a psihozei refractare, nu a TOC.','Pragul ponderal 85% și lanugo sunt ale anorexiei.','Delirium tremens ține de sevrajul alcoolic.','Ebstein este al litiului.']],
 8,'Distractorii importă comorbidități și tratamente din schizofrenie, anorexie, alcool și litiu.',['dispoziţie afectivă','ticurile']),

q(31,['Tulburarea de adaptare:',
 ['Simptomele apar în primele 3 luni de la evenimentul stresant','Simptomele încetează după 6 luni de la dispariția evenimentului stresant','Poate fi descrisă cu dispoziție depresivă, cu anxietate, cu ambele sau cu tulburări de conduită','Debutul și remisiunea se înscriu ambele în prima lună, definind PTSD','Durata minimă a simptomelor este de 2 ani, ca distimia'],'ABC',325,'Tulburări legate de stres — Adaptarea',
 'Aplicarea ferestrelor 3 luni (debut) și 6 luni (remisiune), distinct de stresul acut și de PTSD.',
 ['Debutul în 3 luni este explicit, inclusiv în notă.','Remisiunea în 6 luni de la dispariția stresorului este citată.','Subtipurile depresie/anxietate/conduită sunt enumerate.','Fereastra de o lună definește stresul acut; PTSD cere cel puțin o lună, nu remisiune în prima lună.','Pragul de 2 ani este al tulburării depresive persistente.']],
 8,'Distractorii comprimă adaptarea pe fereastra de o lună a stresului acut sau o lungesc la distimie.',['primele 3 luni','6 luni']),

q(32,['În PTSD, textul menționează că prazosinul:',
 ['Este un antagonist al receptorilor α-1, util în ameliorarea coșmarurilor și a stării de alertă','Poate fi asociat terapiei cognitiv-comportamentale, singure sau cu SSRI/SNRI','Înlocuiește expunerea la traumă ca unic criteriu diagnostic','Este antidotul supradozei de benzodiazepine','Se indică doar în fobia specifică din copilărie'],'AB',326,'Tulburări legate de traumă — Prazosinul',
 'Identificarea prazosinului ca antagonist α-1 pentru coșmaruri și hipervigilență.',
 ['Mecanismul α-1 și țintele (coșmaruri, alertă) sunt explicite.','TCC ± SSRI/SNRI este cadrul terapeutic în care se înscrie.','Expunerea la traumă rămâne criteriul, nu un medicament.','Antidotul benzodiazepinelor este flumazenilul.','Fobia specifică se tratează prin desensibilizare, nu cu prazosin.']],
 8,'Distractorii transformă prazosinul în criteriu diagnostic sau în antidot/anxiolitic de fobie.',['Prazosin','coşmarurilor']),

q(33,['Simularea premeditată și tulburările factice:',
 ['Simularea (malingering) este prefăcarea bolii pentru un beneficiu (scutire de muncă sau școală, urmărire penală, narcotice) și este mai frecventă la bărbați','În tulburările factice nu există un beneficiu evident sau un beneficiu secundar pentru pacient','Sindromul Münchausen prin transfer, în care părinții fac copilul să pară bolnav, este considerat abuz și trebuie raportat','Pacienții cu conversie sunt foarte afectați psihologic de simptome, identic celor cu simptome somatice','La belle indifférence caracterizează simularea, nu conversia'],'ABC',326,'Tulburări somatice — Simulare versus factice',
 'Separarea malingering-ului (beneficiu secundar) de factice (fără beneficiu) și recunoașterea Münchausen by proxy ca abuz.',
 ['Definiția, exemplele de beneficiu și predominanța masculină sunt din notă.','Absența beneficiului secundar diferențiază facticele.','Münchausen by proxy ca abuz de raportat este din pasul următor.','Nota contrastează conversia (indiferență) cu simptomele somatice (afectare psihologică marcată).','La belle indifférence caracterizează conversia.']],
 8,'Distractorii inversează indiferența conversiei cu afectarea din tulburarea cu simptome somatice.',['Simularea premeditată','beneficiu secundar']),

q(34,['Anorexia nervosa, dincolo de criteriile diagnostice deja folosite în bancă:',
 ['Are o rată de mortalitate pe 10 ani de 6%, prin complicațiile bolii sau suicid','Sindromul de realimentare, prin comutarea metabolismului de la lipide spre glucide, asociază hipofosfatemie, hipomagneziemie și hipocalcemie','Complicațiile realimentării includ colaps cardiovascular, rabdomioliză, confuzie și convulsii','90% din cazuri sunt femei; osteoporoza poate fi prezentă','Terapia farmacologică este superioară spitalizării și este de primă intenție'],'ABCD',327,'Tulburări alimentare — Anorexia: complicații',
 'Aplicarea mortalității de 6%, a triadei electrolitice a realimentării și a predominanței feminine.',
 ['Cifra de 6% pe 10 ani este din notă.','Comutarea lipid–glucid și triada electrolitică sunt explicite.','Colapsul, rabdomioliza, confuzia și convulsiile sunt complicațiile citate.','90% femei și osteoporoza sunt din textul clinic.','Textul precizează că terapia farmacologică nu și-a dovedit utilitatea; spitalizarea este frecvent necesară.']],
 8,'Distractorul inversează ierarhia: textul neagă utilitatea farmacoterapiei și cere adesea spitalizare.',['6%','hipofosfatemie']),

q(35,['Medicația aprobată de FDA pentru bulimie, citată în text, este:',
 ['Fluoxetina','Litiul, ca în mania de întreținere','Clozapina, ca în psihoza refractară','Metadonă, ca în dependența de opioizi','Prazosin, ca în coșmarurile din PTSD'],'A',327,'Tulburări alimentare — Bulimia',
 'Identificarea fluoxetinei ca unicul agent FDA citat pentru bulimie.',
 ['Fluoxetina este numită explicit ca medicație aprobată de FDA.','Litiul este stabilizatorul maniei.','Clozapina este a psihozei refractare.','Metadona este a opioizilor.','Prazosinul este al coșmarurilor din PTSD.']],
 8,'Fiecare distractor este un medicament-cheie din alt capitol de psihiatrie, nu agentul FDA al bulimiei.',['Fluoxetină','bulimie']),

q(36,['Caracteristicile din tabelul 14-5 includ:',
 ['Personalitatea paranoidă: neîncredere persistentă, interpretarea acțiunilor altora ca vătămătoare, suspiciuni de infidelitate','Personalitatea schizoidă: incapacitatea de a lega relații apropiate, detaşare socială, răceală afectivă, anhedonie','Personalitatea narcisică: grandiozitate, nevoie de admirație, lipsă de empatie, invidie','Personalitatea evitantă: agresivitate față de oameni și animale, minciună patologică și vârstă peste 18 ani','Personalitatea dependentă face parte din grupul A, alături de paranoid'],'ABC',328,'Tulburări de personalitate — Paranoidă, schizoidă, narcisică',
 'Asocierea fiecărui tip cu descrierea sa de tabel, fără a muta criteriile antisociale pe evitant.',
 ['Neîncrederea și infidelitatea sunt rândul paranoidei.','Detașarea și anhedonia sunt ale schizoidei.','Grandiozitatea și lipsa empatiei sunt ale narcisicului.','Agresivitatea, minciuna și pragul de 18 ani definesc antisociala.','Dependentă este în grupul C, nu în A.']],
 8,'Distractorii aplică criteriile antisocialei pe evitant și mută dependentul din C în A.',['Neîncredere persistentă','Grandiozitate']),

q(37,['Intoxicația cu fenciclidină și tratamentul opioizilor:',
 ['PCP produce euforie, impulsivitate, comportament agresiv, nistagmus vertical și orizontal și hiperreflectivitate','Tratamentul PCP include izolare și contenționare până la remitere, benzodiazepine, antipsihotice și acid ascorbic','Naloxona este antagonistul opioizilor folosit în supradoza acută cu depresie respiratorie semnificativă','Naltrexona poate preveni euforia în timpul utilizării opioizilor; metadona este folosită în tratament','Naloxona este tratamentul de întreținere de primă intenție, iar PCP se tratează cu flumazenil'],'ABCD',330,'Abuzul de substanțe — PCP și opioizi',
 'Recunoașterea nistagmusului bidirecțional al PCP și a rolurilor distincte naloxonă versus naltrexonă versus metadonă.',
 ['Nistagmusul vertical și orizontal plus agresivitatea sunt din tabel.','Izolarea, benzodiazepinele, antipsihoticele și acidul ascorbic sunt tratamentul citat.','Naloxona în supradoza cu depresie respiratorie este explicită.','Naltrexona anti-euforie și metadona de tratament sunt citate.','Naloxona este acută, nu de întreținere; flumazenilul este al benzodiazepinelor.']],
 8,'Distractorul inversează rolul acut al naloxonei cu întreținerea și atribuie flumazenilul PCP.',['nistagmus','naloxona']),
];
