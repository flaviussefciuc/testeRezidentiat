import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('tromboembolism',29,-810,`tromboembolism-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const TROMBOEMBOLISM_B=[
q(16,['Tromboembolismul venos, în datele de deschidere ale capitolului:',
 ['Apare pe parcursul vieții la peste 5% din oameni, riscul crescând cu vârsta','Embolia pulmonară este a treia cea mai frecventă cauză cardiovasculară de deces, după IMA și AVC','Etiologia rămâne necunoscută în aproape 50% din cazuri','EP este cea mai frecventă cauză de deces evitabilă la internare și singura cauză directă de deces în sarcină și lehuzie, în Marea Britanie','TEV este o boală rară a adultului tânăr, fără recurență și fără sechele'],'ABCD',1001,'Introducere — Impactul TEV',
 'Integrarea prevalenței pe viață, a rangului EP între cauzele CV de deces și a caracterului prevenibil spitalicesc/obstetrical.',
 ['Cifra de peste 5% pe viață este din deschidere.','Rangul trei după IMA și AVC este explicit.','Aproape 50% fără etiologie identificată este enunțat.','Cele două superlative (deces evitabil spitalicesc; cauză directă obstetricală UK) sunt din listă.','Textul subliniază frecvența, recurența și sechelele, nu raritatea.']],
 8,'Patru fapte epidemiologice; distractorul neagă recurența și sechelele descrise în același paragraf.',['peste 5%','a treia cea mai frecventă']),

q(17,['Originea și extensia trombozei venoase:',
 ['Cel mai frecvent începe în buzunarul unei valve a venelor profunde ale membrului inferior, unde fluxul poate fi turbulent','Aproximativ 10% dintre episoade apar în alte sedii (membrul superior, sinusuri cerebrale, vene splanhnice)','Trombul limitat la venele gambei este TVP distală; extensia la vena poplitee sau deasupra definește TVP proximală, mai predispusă la embolizare','Se consideră că sunt necesare cel puțin câteva zile pentru ca trombii venoși să producă manifestări clinice','TVP proximală este limitată la venele gambei, distală fiind cea de deasupra poplitei'],'ABCD',1002,'Definiție — Originea și extensia TVP',
 'Distingerea TVP distale de cea proximală (pragul popliteu) și recunoașterea originii în buzunarul valvular.',
 ['Originea în buzunarul valvular cu turbulență este mecanismul citat.','Proporția de 10% sedii neobișnuite este explicită.','Pragul popliteu separă distal de proximal.','Fereastra de câteva zile până la simptome este enunțată.','Definițiile distal/proximal sunt inversate.']],
 8,'Distractorul inversează pragul popliteu, distincția centrală a paragrafului.',['vena poplitee','aproximativ 10%']),

q(18,['Incidența anuală a TEV în comunitate:',
 ['Este estimată, în general, la 1 la 1.000 pe an și este dependentă de vârstă','Afectează aproximativ 1 la 10.000 de adulți tineri și 1 la 1.000 de adulți de vârstă medie, apropiindu-se de 1 la 100 la vârstnici','Datele autopsice sugerează că aproximativ 10% dintre decesele pacienților internați s-au produs din cauza EP','Clinic, aproximativ 60% dintre episoade se prezintă ca TVP, iar 40% ca EP cu sau fără TVP clinică','Incidența este identică la copil și la vârstnic, în jur de 1 la 100 pe an'],'ABCD',1002,'Epidemiologie și factori de risc',
 'Reținerea gradientului de vârstă 1/10.000 – 1/1.000 – 1/100 și a splitului 60/40 TVP/EP.',
 ['1 la 1.000 este cifra de bază.','Cele trei trepte de vârstă sunt enumerate.','10% din decesele intra-spitalicești prin EP este cifra autopsică.','Splitul 60% TVP / 40% EP este clinic.','Copilăria este descrisă ca neobișnuită, nu 1 la 100.']],
 8,'Patru trepte numerice; distractorul aplică incidența vârstnicului asupra copilului.',['1 la 1.000','1 la 100']),

q(19,['Printre factorii de risc pentru TEV din Cadranul 29.1 se numără:',
 ['Imobilizare (repaus la pat peste 3 zile), aparat gipsat și călătorii recente peste 4 ore','Indice de masă corporală peste 30 kg/m², vârstă avansată și istoric de TEV','Cateter venos central, tromboză venoasă superficială și neoplasme mieloproliferative','Administrare de estrogeni (contraceptive combinate, hormonoterapie orală) și sarcină/lehuzie','Activitatea fizică regulată și IMC sub 20 kg/m², ca factori persistenți majori'],'ABCD',1002,'Cadranul 29.1 — Factori de risc pentru TEV',
 'Recunoașterea pragurilor >3 zile, >4 ore și IMC >30, plus factorii de internare și hormonali.',
 ['Pragurile 3 zile și 4 ore sunt din lista tranzitorie.','IMC >30 și vârsta/istoria sunt persistenți.','Cateterul, TVS și mieloproliferativele figurează în tabel.','Estrogenii și sarcina sunt tranzitorii hormonali.','Exercițiul și subponderalitatea nu sunt factorii listați.']],
 8,'Patru praguri/categorizări reale; distractorul inversează direcția IMC.',['>3 zile','>30 kg/m2']),

q(20,['Embolia pulmonară se prezintă clinic:',
 ['În aproximativ 65% din cazuri cu durere toracică pleuritică și dispnee, uneori hemoptizie','În alte 25% cu dispnee izolată, uneori evidentă doar la efort','În celelalte 10% cu sincopă, hipotensiune sau șoc și ischemie cu durere medio-toracică','Cel puțin o treime dintre pacienții cu TVP au EP asimptomatică; circa 70% dintre cei cu EP simptomatică au TVP asociată','Forma severă se manifestă tipic prin bradicardie și vasodilatație, fără tahipnee'],'ABCD',1003,'Aspecte clinice — Prezentarea EP',
 'Memorarea splitului 65/25/10 și a suprapunerii TVP–EP (o treime / 70%).',
 ['65% pleuritic este prima categorie.','25% dispnee izolată este a doua.','10% instabilitate este a treia.','O treime EP mute în TVP și 70% TVP în EP simptomatică sunt cifrele de închidere.','Forma severă este tahipneică, tahicardică, cu vasoconstricție.']],
 8,'Patru procente de prezentare; distractorul inversează semnele formei severe.',['65% din cazuri','Cel puţin o treime']),

q(21,['Investigațiile inițiale în suspiciunea de EP:',
 ['Aspectul ECG clasic S1Q3T3 este prezent doar la o minoritate; mai frecvent se observă tahicardie sinusală','Radiografia toracică poate fi normală, dar cel mai adesea arată modificări nespecifice (atelectazie, ascensionarea hemidiafragmului, colecție)','Gazometria arată tipic hipoxemie și hipocapnie, dar acestea sunt nespecifice și pot lipsi','BNP/NT-proBNP și troponina pot crește prin supraîncărcarea/lezarea VD, fără a fi specifice','S1Q3T3 este prezent la majoritatea pacienților și confirmă EP fără imagistică'],'ABCD',1003,'Diagnostic — Investigații inițiale',
 'Contrastarea rarității S1Q3T3 cu tahicardia sinusală și caracterul nespecific al Rx, gazelor și biomarkerilor.',
 ['Minoritatea S1Q3T3 versus tahicardia sinusală este explicită.','Modificările Rx nespecifice sunt lista din text.','Hipoxemia/hipocapnia nespecifice sunt enunțate.','BNP și troponina VD sunt nespecifice.','S1Q3T3 nu confirmă și nu este majoritar.']],
 8,'Distractorul transformă un aspect minoritar într-un criteriu diagnostic suficient.',['S1Q3T3','tahicardie sinusală']),

q(22,['În tratamentul tradițional cu heparină plus warfarină:',
 ['Activitatea heparinei se instalează aproape imediat, iar warfarina necesită cel puțin 5 zile pentru anticoagulare terapeutică apreciată prin INR','Când INR este 2,0 sau mai mult timp de 2 zile consecutive, heparina sau fondaparinuxul se pot opri, continuând warfarina','Scopul fazei acute (5-10 zile) este prevenirea extinderii trombului; ulterior se urmărește prevenirea recurenței','Warfarina asigură anticoagulare terapeutică în 2 ore, similar DOAC, fără nevoie de heparină','INR de 1,0 timp de o zi permite oprirea heparinei'],'ABC',1006,'Tratament — Tratamentul tradițional',
 'Reținerea ferestrei de 5 zile a warfarinei și a regulii INR ≥2,0 două zile consecutive.',
 ['Instalarea imediată versus ≥5 zile este contrastul central.','Regula 2,0 două zile consecutive este explicită.','Cele două scopuri pe faze sunt din deschiderea tratamentului.','Warfarina nu acționează în 2 ore.','INR 1,0 nu este terapeutic.']],
 8,'Distractorii aplică cinetica DOAC (2 ore) asupra warfarinei, al cărei prag este 5 zile și INR 2,0×2.',['2 zile consecutive','cel puţin 5 zile']),

q(23,['Îngrijirea în ambulatoriu a EP și definiția instabilității:',
 ['EP cu risc scăzut, identificată prin PESI sau PESI simplificat, poate fi gestionată ambulator sau prin externare precoce după 24-48 de ore','EP cu șoc se definește prin TAS <90 mmHg sau scădere a TAS >40 mmHg peste 15 minute, fără aritmie nouă, hipovolemie sau sepsis','Mulți pacienți cu TVP pot fi îngrijiți ambulator, internarea fiind rezervată tablourilor complexe','Toate EP, inclusiv cele cu PESI scăzut, impun internare prelungită de rutină','Scăderea TAS cu 10 mmHg timp de 2 minute definește șocul din EP'],'ABC',1007,'Îngrijirea în ambulatoriu; EP cu risc crescut',
 'Aplicarea PESI pentru ambulator și a criteriului TAS <90 sau scădere >40 mmHg >15 minute.',
 ['PESI și fereastra 24-48 de ore sunt din paragraf.','Definiția hemodinamică este nota din Fig. 29.4.','TVP ambulatorie este enunțată.','PESI scăzut permite tocmai ambulatorul.','Pragurile 10 mmHg / 2 minute nu sunt cele din text.']],
 8,'Distractorii înlocuiesc pragurile 90/40 mmHg și 15 minute cu valori apropiate, dar greșite.',['PESI','>15 minute'],[1006]),

q(24,['Cancerul asociat TEV (sindrom Trousseau):',
 ['10-20% din toate episoadele de TEV sunt diagnosticate la persoane cu cancer','Până la 5% dintre pacienții cu TEV aparent neprovocat sunt diagnosticați cu cancer în următoarele 12 luni','Patogeneza include hipercoagulabilitate tumorală, chirurgie/chimioterapie, imobilizare și catetere centrale','NICE recomandă, la peste 40 de ani cu TEV neprovocat, luarea în considerare a CT abdomino-pelvin și, la femei, a mamografiei','Cancerul este o cauză rară de TEV, sub 1%, și nu justifică screening după un episod neprovocat'],'ABCD',1010,'Complicații — Cancerul asociat',
 'Reținerea proporțiilor 10-20% și 5% la 12 luni, plus pachetul NICE după 40 de ani.',
 ['10-20% este prevalența în TEV.','5% cancer ocult la 12 luni este cifra dată.','Cei patru piloni patogenici sunt listați.','Recomandarea NICE (cu incertitudinea beneficiului de supraviețuire) este de la p. 1011.','Cancerul este comun, nu rar.']],
 8,'Patru cifre/indicții de screening; distractorul minimizează cancerul sub 1%.',['10-20%','sindromul Trousseau'],[1011]),

q(25,['Sindromul post-trombotic și mortalitatea după TEV:',
 ['SPT apare la aproximativ 40% după TVP proximală','După diagnostic și tratament, mortalitatea la 1 lună în EP este în jur de 5%, cel puțin jumătate prin comorbidități, nu prin EP','Pacienții cu TEV au mortalitate 10-20% la 1 an; cancerul este principala cauză de deces','Mortalitatea pe termen scurt este mai scăzută la TVP decât la EP','SPT este rar (<5%) după TVP proximală și nu afectează calitatea vieții'],'ABCD',1010,'Complicații — Mortalitatea; Sindromul post-trombotic',
 'Contrastarea SPT de 40%, a mortalității EP la 1 lună (5%) și la 1 an (10-20%).',
 ['40% după TVP proximală este prevalența SPT.','5% la o lună, jumătate comorbidități, este cifra EP.','10-20% la un an cu cancer ca principală cauză este explicit.','Mortalitatea pe termen scurt mai mică în TVP este enunțată.','40% nu este rar; calitatea vieții este afectată.']],
 8,'Distractorul coboară SPT de la 40% la <5%, inversând mesajul de morbiditate pe termen lung.',['aproximativ 40%','10-20% la 1 an']),

q(26,['Profilaxia TEV la internare:',
 ['Între o treime și jumătate dintre episoadele de TEV sunt provocate de chirurgie și/sau internare, diagnosticate în mare parte în primele trei luni după externare','Screeningul postoperator în ortopedie/oncologie majoră a raportat TVP asimptomatică de până la 50%','Toți adulții internați necesită evaluare formală a riscului de TEV și de hemoragie','La risc de TEV fără risc hemoragic se recomandă profilaxie farmacologică, cu sau fără măsuri mecanice','Profilaxia farmacologică este indicată și când riscul hemoragic este predominant, ciorapii fiind inutili'],'ABCD',1013,'Profilaxia',
 'Reținerea ferestrei de 3 luni post-externare, a TVP mute de 50% și a algoritmului risc TEV versus sângerare.',
 ['O treime–jumătate și fereastra de 3 luni sunt din deschidere.','Până la 50% TVP asimptomatică este cifra screeningului.','Evaluarea formală a tuturor adulților internați este cerută.','Algoritmul farmacologic ± mecanic este explicit.','La risc hemoragic, farmacologicul poate fi impropriu, mecanicul rămânând o opțiune.']],
 8,'Distractorul inversează alegerea farmacologic versus mecanic în funcție de sângerare.',['primele trei luni','până la 50%']),

q(27,['Profilaxia mecanică a TEV include:',
 ['Mobilizare precoce, ridicarea membrelor inferioare și ciorapi antiembolie până la genunchi sau coapsă','Ciorapii nu trebuie folosiți la boală arterială periferică, accident vascular cerebral sau când ar produce leziuni cutanate','Dispozitive de compresie intermitentă, aplicabile intraoperator sau la pat','Ciorapii sunt indicați precis în AVC acut, pentru a reduce EP','Mobilizarea precoce este contraindicată după chirurgia majoră, ciorapii înlocuind-o'],'ABC',1013,'Profilaxia mecanică',
 'Recunoașterea contraindicațiilor ciorapilor (BAP, AVC, leziuni cutanate) și a locului IPC.',
 ['Cele trei măsuri de bază sunt lista.','Contraindicațiile ciorapilor sunt explicite.','IPC intraoperator/la pat este descris.','AVC este o contraindicație a ciorapilor, nu o indicație.','Mobilizarea precoce este prima măsură, nu o contraindicație.']],
 8,'Distractorii transformă contraindicația din AVC într-o indicație de ciorapi.',['accident vascular cerebral','compresie intermitentă']),

q(28,['Heparina, ca anticoagulant indirect:',
 ['Este un amestec de polizaharide din mucoasa intestinală porcină, distrusă în stomac, deci parenterală','Se leagă printr-o secvență pentazaharidică de antitrombină, crescându-i activitatea de cel puțin 1.000 de ori','Inhibă mai ales trombina (IIa) și factorul Xa','UFH se administrează de obicei bolus apoi perfuzie ghidată de APTT, ținta fiind de regulă 1,5-2,5 ori controlul','Heparina se absoarbe oral complet și nu necesită antitrombină'],'ABCD',1014,'Anticoagulante injectabile — Heparina',
 'Corelarea originii porcine, a pentazaharidului–AT (×1000) și a țintei APTT 1,5-2,5.',
 ['Originea porcină și calea parenterală sunt explicite.','Potențarea antitrombinei de ≥1000 de ori este mecanismul.','IIa și Xa sunt țintele principale.','Ținta APTT 1,5-2,5 este intervalul citat.','Heparina este distrusă în stomac și acționează via antitrombină.']],
 8,'Patru detalii de mecanism/monitorizare; distractorul pretinde absorbție orală, contrazisă de distrugerea gastrică.',['1.000 de ori','1,5-2,5']),

q(29,['Fondaparinuxul, spre deosebire de heparine:',
 ['Este un pentazaharid sintetic care, prin lanțul scurt, inhibă doar factorul Xa, nu trombina','Se administrează subcutanat, are timp de înjumătățire de aproximativ 18 ore și se excretă renal','Efectul nu este inversat de sulfatul de protamină și nu se folosește în insuficiență renală importantă','Este un amestec biologic porcin, identic UFH ca țintă IIa=Xa','Protamina anulează complet fondaparinuxul, ca pe UFH'],'ABC',1015,'Fondaparinux',
 'Distingerea pentazaharidului sintetic anti-Xa, a t½ 18 ore și a absenței antidotului cu protamină.',
 ['Sinteza și selectivitatea Xa sunt din paragraf.','18 ore și excreția renală sunt explicite.','Absența reversibilității cu protamină și limita renală sunt enunțate.','Fondaparinuxul nu este biologic porcin și nu inhibă IIa.','Protamina nu inversează fondaparinuxul.']],
 8,'Distractorii atribuie fondaparinuxului originea și antidotul UFH, inversând tocmai particulariățile clasei.',['pentazaharid sintetic','aproximativ 18 ore']),

q(30,['Identificați afirmația corectă referitoare la momentul și gravitatea HIT, dincolo de mecanismul IgG–FP4:',
 ['Apare de obicei la 5-14 zile de la heparină, cu scădere peste 30% a trombocitelor în 1-2 zile; trombocitele scad rar sub 20×10⁹/L','Riscul de tromboză venoasă sau arterială, fără tratament prompt, este de 50% în zilele următoare','Debutul este imediat în primul minut al primei doze, cu trombocite constant sub 5×10⁹/L','HIT se manifestă predominant prin hemoragii cerebrale, nu prin tromboză','Scăderea trombocitelor sub 20×10⁹/L este regula, nu excepția'],'AB',1015,'Trombocitopenia indusă de heparină',
 'Reținerea ferestrei 5-14 zile, a pragului >30% și a riscului trombotic de 50%, cu raritatea trombocitelor <20.',
 ['Fereastra 5-14 zile, delta >30% și raritatea <20 sunt din paragraf.','Riscul de 50% este explicit.','Debutul nu este în primul minut al primei expuneri naive.','Tendința este protrombotică, nu hemoragică.','Scăderea sub 20 este rară.']],
 8,'Distractorii inversează fereastra temporală și caracterul protrombotic, două nuanțe alăturate mecanismului deja cunoscut.',['5-14 zile','50%']),

q(31,['Warfarina, ca antagonist al vitaminei K:',
 ['Inhibă sinteza hepatică a factorilor II, VII, IX și X și a proteinelor C și S','Atingerea efectului complet durează cel puțin 5 zile; t½ al factorului VII este circa 6 ore, al protrombinei circa 60 de ore','Pentru majoritatea pacienților, INR țintă este 2,0-3,0; o minoritate cu TEV recurent în țintă trece la 3,0-4,0','Timpul de înjumătățire al warfarinei este de aproximativ 36 de ore','Efectul maxim apare în 2 ore, similar apixabanului, fără nevoie de heparină la start'],'ABCD',1016,'Antagoniștii vitaminei K — Warfarina',
 'Integrarea țintelor II/VII/IX/X, a t½ 6 vs 60 de ore, a INR 2-3 (sau 3-4) și a t½ 36 de ore a warfarinei.',
 ['Cei patru factori și PC/PS sunt țintele.','5 zile și contrastul 6 vs 60 de ore explică overlap-ul cu heparina.','Intervalele INR 2-3 și 3-4 sunt explicite.','36 de ore este t½ citat.','2 ore este efectul maxim al DOAC, nu al warfarinei.']],
 8,'Patru date farmacologice; distractorul aplică Tmax-ul DOAC de 2 ore asupra warfarinei.',['2,0-3,0','aproximativ 36 de ore']),

q(32,['Monitorizarea și riscurile warfarinei:',
 ['La inițiere, INR se măsoară aproape zilnic până când este în țintă 2 zile consecutive; pe termen lung, cel puțin o dată la 8-12 săptămâni dacă este stabil','Riscul de sângerare majoră este de 2% pe an, iar circa 0,25% pe an au sângerare fatală, de obicei intracraniană','Warfarina nu trece în laptele matern, fiind sigură la alăptare','Întreruperea pre-procedurală ține seama de t½ lung; înlocuirea cu LMWH permite oprire mai aproape de procedură','Sângerarea majoră apare doar când INR depășește 5, fiind nulă în intervalul 2-3'],'ABCD',1016,'Monitorizarea tratamentului cu warfarină; Riscuri',
 'Reținerea ritmului 8-12 săptămâni, a riscului 2%/0,25% și a siguranței la alăptare.',
 ['Aproape zilnic apoi 8-12 săptămâni este schema.','2% major și 0,25% fatal sunt cifrele.','Absența pasajului în lapte este explicită.','Contrastul t½ warfarină vs LMWH ghidează bridging-ul.','Majoritatea sângerărilor apar când INR este în intervalul terapeutic.']],
 8,'Distractorul pretinde siguranță absolută în INR 2-3, contrazisă de text (majoritatea sângerărilor sunt în țintă).',['2% pe an','0,25%']),

q(33,['Proprietățile comparative ale DOAC din Cadranul 29.9 includ:',
 ['Efectul maxim al apixabanului, edoxabanului, rivaroxabanului și dabigatranului este la circa 2 ore, față de 5 zile (variabil) la warfarină','Eliminarea renală este circa 25% apixaban, 50% edoxaban, 33% rivaroxaban și 80% dabigatran','Antidotul dabigatranului este idarucizumab; pentru inhibitorii Xa se menționează andexanet (neautorizat în tabel)','Rivaroxabanul trebuie consumat cu alimente pentru a-i crește biodisponibilitatea','Dabigatranul nu are eliminare renală, fiind preferat la clearance sub 15 ml/min'],'ABCD',1017,'Cadranul 29.9 — Anticoagulante orale',
 'Compararea Tmax 2 ore, a fracțiilor renale 25/50/33/80% și a antidoturilor idarucizumab/andexanet.',
 ['Tmax 2 ore versus 5 zile este din tabel.','Cele patru procente renale sunt din rândul eliminării.','Idarucizumab versus andexanet este distincția antidoturilor.','Nota de subsol cere alimente pentru rivaroxaban.','Dabigatranul are 80% eliminare renală, cu limita inferioară de 30 ml/min.']],
 8,'Distractorul inversează profilul renal al dabigatranului (80%), cel mai dependent de clearance dintre DOAC.',['80%','ldarucizumab']),

q(34,['Situațiile speciale ale DOAC, conform textului:',
 ['Traversează placenta și nu trebuie folosite în sarcină, la concepție sau la alăptare','Sunt contraindicate la înlocuire valvulară mecanică sau stenoză mitrală moderată/severă','Inhibitorii Xa sunt aprobați până la clearance 15 ml/min, dar datele sub 30 ml/min rămân limitate; dabigatranul are limita inferioară 30 ml/min','În tromboza asociată cancerului, DOAC cresc riscul de sângerare digestivă, LMWH rămânând preferată când acest risc contează','DOAC sunt de primă intenție la protezele mecanice, warfarina fiind abandonată'],'ABCD',1017,'DOAC — Situații speciale',
 'Recunoașterea interdicțiilor (sarcină, proteză mecanică, stenoză mitrală) și a preferinței LMWH în cancer digestiv.',
 ['Pasajul transplacentar și alăptarea sunt interdicții.','Proteza mecanică și stenoza mitrală sunt contraindicații.','Pragurile 15 și 30 ml/min sunt nuanțate.','Sângerarea GI și preferința LMWH în cancer sunt explicite.','Protezele mecanice contraindică DOAC.']],
 8,'Distractorul inversează contraindicația de la proteza mecanică, o capcană clasică față de FA non-valvulară.',['valvele cardiace','sângerare gastrointestinală']),

q(35,['Testarea trombofiliei în TEV nou:',
 ['Trombofiliile ereditare se depistează în aproximativ 20% din cazurile de TEV, dar nu joacă un rol semnificativ în tromboza arterială','Indicațiile rămân controversate','Toți pacienții cu TEV neprovocată trebuie testați genetic înaintea primei doze de anticoagulant','Trombofilia ereditară explică majoritatea trombozelor arteriale coronariene','Testarea înlocuiește hemoleucograma, funcția renală și radiografia toracică din bilanțul inițial'],'AB',1011,'Investigarea cazurilor noi — Testarea trombofiliei',
 'Plasarea randamentului de 20% în TEV venos, cu rol nesemnificativ arterial și indicații controversate.',
 ['20% și absența rolului arterial sunt explicite.','Controversa indicațiilor este enunțată.','Testarea nu este un pas prealabil universal.','Rolul arterial este descris ca nesemnificativ.','Bilanțul general (hemogramă, rinichi, ficat, Rx, urină) rămâne primul pas.']],
 8,'Distractorii transformă un test controversat, cu randament 20%, într-un pas obligatoriu sau într-o explicație a trombozei arteriale.',['aproximativ 20%','nu joacă un rol semnificativ']),

q(36,['Evaluarea generală a TEV neprovocat recent include:',
 ['Hemoleucogramă, funcție renală și hepatică inclusiv calciu seric, coagulogramă, radiografie toracică și analiză de urină','La peste 40 de ani, NICE propune luarea în considerare a CT abdomino-pelvin și, la femei, a mamografiei, deși beneficiul de supraviețuire este incert','Bilanțul se limitează la D-dimeri, celelalte teste fiind superflue după confirmarea imagistică','Calciul seric este omis intenționat, neavând loc în screeningul de cancer','Mamografia este rezervată bărbaților sub 40 de ani'],'AB',1011,'Investigații generale',
 'Reținerea pachetului de laborator/Rx și a screeningului imagistic NICE după 40 de ani, cu incertitudinea de supraviețuire.',
 ['Cele cinci categorii de teste sunt lista.','Pragul de 40 de ani și incertitudinea beneficiului sunt explicite.','D-dimerii nu înlocuiesc bilanțul general.','Calciul seric este inclus.','Mamografia este propusă la femei, nu la bărbați tineri.']],
 8,'Distractorii anulează calciul și inversează populația țintă a mamografiei din aceeași recomandare NICE.',['peste 40 de ani','calciul seric']),

q(37,['Femeilor cu sindrom antifosfolipidic în context obstetrical li se administrează, în general:',
 ['Aspirină în doză mică și LMWH în doză profilactică, pe tot parcursul sarcinii','Warfarină cu INR 3-4 pe tot parcursul sarcinii, ca în SAFL trombotic','DOAC în doze terapeutice, fiind sigure în sarcină','Doar aspirină după săptămâna 36, fără heparină','Niciun anticoagulant, riscul obstetrical fiind independent de tromboză'],'A',1011,'Sindromul antifosfolipidic — Context obstetrical',
 'Identificarea asocierii aspirină în doză mică plus LMWH profilactic pe toată sarcina.',
 ['Asocierea aspirină + LMWH profilactic este conduita descrisă.','Warfarina este teratogenă în fereastra 6-12 săptămâni.','DOAC traversează placenta.','Heparina profilactică se administrează pe tot parcursul sarcinii, nu doar tardiv.','Anticoagularea/antiagregarea este tocmai strategia citată.']],
 8,'Distractorii aplică intensitatea INR 3-4 a SAFL trombotic sau DOAC asupra sarcinii, unde textul cere aspirină + LMWH profilactic.',['doză mică','doză profilactică']),

q(38,['Hipertensiunea pulmonară tromboembolică cronică, ca sechelă a EP, poate beneficia de:',
 ['Endarterectomie pulmonară, la o parte dintre pacienți, după evaluare de către specialiști în boli respiratorii','Tromboliză sistemică tardivă, aplicată de rutină la luni de la episodul acut','Transplant cardiac imediat, endarterectomia fiind considerată inutilă','Evaluare de primă intenție de către chirurgul vascular periferic, fără expertiză respiratorie','Oprirea anticoagulării de îndată ce hipertensiunea pulmonară este documentată'],'A',1011,'Complicații — Hipertensiunea pulmonară cronică',
 'Identificarea endarterectomiei pulmonare ca opțiune chirurgicală selectată, după evaluare respiratorie.',
 ['Evaluarea de către pneumologi și endarterectomia de succes la o parte dintre pacienți sunt cele din text.','Tromboliza sistemică privește EP acută masivă, nu sechela cronică.','Endarterectomia poate fi de succes; nu este descrisă ca inutilă.','Textul atribuie evaluarea specialiștilor în boli respiratorii.','Anticoagularea rămâne parte a managementului TEV; textul nu cere oprirea ei la documentarea HTP.']],
 8,'Distractorii mută tromboliza acută asupra formei cronice și neagă endarterectomia descrisă.',['endarterectomie pulmonară','bolilor respiratorii']),

q(39,['Profilaxia farmacologică a TEV:',
 ['Presupune anticoagulante în doze mai mici decât cele terapeutice; cel mai adesea LMWH în timpul internării','După chirurgie abdominală importantă pentru cancer, administrarea poate continua o perioadă după externare','DOAC în doză mică au fost aprobate pentru prevenție după înlocuire majoră de șold și genunchi','Dozele profilactice sunt identice celor terapeutice, pentru a dizolva trombii preexistenți','LMWH profilactică se evită după chirurgia oncologică abdominală'],'ABC',1013,'Profilaxia farmacologică',
 'Distingerea dozei profilactice de cea terapeutică și a prelungirii post-externare în chirurgia oncologică, plus DOAC după artroplastie.',
 ['Dozele subterapeutice și LMWH-ul de internare sunt enunțate.','Prelungirea după cancer abdominal este exemplul dat.','Aprobarea DOAC după șold/genunchi este explicită.','Profilaxia nu este doză terapeutică și nu dizolvă trombi formați.','Chirurgia oncologică abdominală este tocmai contextul de prelungire.']],
 8,'Distractorii confundă doza profilactică cu cea terapeutică și neagă prelungirea post-cancer pe care textul o recomandă.',['doze mai mici','înlocuire a şoldului']),

q(40,['Inițierea coagulării, în descrierea capitolului despre anticoagulante:',
 ['Inițierea are loc prin legarea factorului VII circulant de factorul tisular de pe celulele subendoteliale, ducând la factor X activat (sistem extrinsec)','Urmează o primă producere de trombină și amplificare prin sistemul intrinsc, cu activare suplimentară a factorului X','Anticoagulantele acționează prin inhibarea producerii și/sau a activității trombinei','Inițierea este independentă de factorul tisular, pornind doar din contactul cu sticla','Factorul VII nu participă la inițierea descrisă'],'ABC',1014,'Medicația anticoagulantă — Inițierea coagulării',
 'Localizarea inițierii la complexul VII–factor tisular (extrinsec) și a amplificării prin intrinsc către trombină.',
 ['Complexul VII–FT și denumirea de sistem extrinsec sunt explicite.','Amplificarea intrinscă este pasul următor.','Inhibarea trombinei este modul comun al anticoagulantelor.','Inițierea este dependentă de factorul tisular.','Factorul VII este piesa de start.']],
 8,'Distractorii neagă factorul tisular și factorul VII, exact cuplul de inițiere din paragraf.',['factorul tisular','sistem extrinsec']),
];
