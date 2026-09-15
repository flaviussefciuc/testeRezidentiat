import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-88;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('biliar',16,pdfOffset,`biliar-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const BILIAR_B=[
q(7,['Anatomia extrahepatică relevantă chirurgical include:',
 ['Colecistul are circa 10 × 5 cm, conține circa 50 mL de bilă destins și este format din fund, corp și col','Canalul cistic prezintă valvele spiralate Heister; în ligamentul hepatoduodenal, CBP e la dreapta, artera hepatică proprie la stânga, vena portă posterior','Triunghiul Calot este delimitat superior de marginea inferioară a ficatului, medial de hepaticul comun, lateral de cistic','Artera cistică se desprinde din artera hepatică stângă, în afara triunghiului Calot','Sfincterul Oddi lipsește, fluxul biliar fiind nereglementat la ampula Vater'],'ABC',242,'Anatomie — Calot, Heister, triadă portală',
 'Recunoașterea dimensiunilor colecistului, a triadei din ligamentul hepatoduodenal și a limitelor Calot.',
 ['Dimensiunile 10 × 5 cm, 50 mL și cele trei porțiuni sunt explicite.','Heister și ordinea CBP–arteră–portă sunt citate.','Cele trei limite ale Calot sunt enumerate.','Artera cistică se desprinde din hepatică dreaptă, în Calot.','Sfincterul Oddi manșonează canalul comun la ampula Vater.']],
 8,'Mută cistica pe hepatică stângă și anulează Oddi, două repere din același paragraf.',['triunghiul Calot','valvele spiralate']),

q(8,['Epidemiologia litiazei biliare:',
 ['Aproximativ 15% dintre adulți au calculi; femeile sunt afectate de circa 3 ori mai frecvent decât bărbații','Nativii americani: peste 50% dintre bărbați și 80% dintre femei au calculi micști până la 60 de ani','Obezitatea, multiparitatea, estrogenii, scăderea ponderală rapidă, NPT prelungită și Crohn-ul ileal predispun la calculi','Pacienții cu boli hemolitice și ciroză alcoolică sunt predispuși la calculi pigmentari','Calculii pigmentari sunt tipici obezității, nu hemolizei sau cirozei'],'ABCD',242,'Epidemiologia calculilor biliari',
 'Aplicarea prevalenței de 15%, a raportului 3:1, a predilecției la nativi și a pigmentarilor din hemoliză/ciroză.',
 ['15% și raportul de circa 3 ori sunt explicite.','Cifrele 50%/80% la nativi până la 60 de ani sunt citate.','Lista de factori (obezitate, paritate, NPT, Crohn) este enumerată.','Hemoliza și ciroza alcoolică predispun la pigmentari.','Obezitatea predispune la calculi de colesterol, nu pigmentari.']],
 8,'Anulează predilecția de sex și mută pigmentarii de pe hemoliză pe obezitate.',['15% dintre adulţi','de circa 3 ori']),

q(9,['Tipurile de calculi biliari se caracterizează prin:',
 ['Calculii micști (colesterol, acizi biliari, lecitină) reprezintă circa 75% în emisfera vestică','Calculii pigmentari negri ≈20%, se formează în bila sterilă din colecist, asociați hemolizei și cirozei','Calculii pigmentari bruni apar în bila infectată, primitiv în căi, sunt moi și adesea radioopaci','Calculii micști sunt 20%, pigmentarii negri 75%','Sludge-ul biliar nu conține cristale de colesterol și nu precede calculii'],'ABC',243,'Patogenia litiazei — Micști, pigmentari, sludge',
 'Contrastarea 75% micști / 20% negri / bruni infecțioși și a sludge-ului ca precursor.',
 ['Proporția de circa 75% micști este explicită.','20%, bila sterilă, hemoliza/ciroza definesc negrii.','Brunii infecțioși, moi, radioopaci, primitivi în căi sunt descriși.','Cifrele 75% și 20% sunt inversate.','Sludge-ul conține mucoproteine, cristale de colesterol și bilirubinat de calciu și poate precede calculii.']],
 8,'Inversează 75% micști cu 20% pigmentari negri, două procente din același paragraf.',['circa 75%','aproximativ 20%']),

q(10,['Colica biliară se deosebește de colecistita acută prin:',
 ['Durere viscerală surdă, 1–4 ore, prin contracție contra unui calcul impactat în cistic, fără inflamație sau infecție','Pacientul cu colică este neliniștit; cel cu colecistită tinde să nu se miște, orice mișcare accentuând durerea somatică','Colecistita menține durerea peste 3–4 ore, zile, cu febră posibilă; febra înaltă evocă gangrenă sau angiocolită','Febra înaltă este markerul colicii necomplicate, fără inflamație','Colica asociază apărare și decompresie pozitivă încă din primul episod, identic peritonitei'],'ABC',244,'Colică versus colecistită',
 'Contrastarea duratei 1–4 ore (viscerală, fără inflamație) cu durerea >3–4 ore, somatică, febrilă a colecistitei.',
 ['Mecanismul și fereastra 1–4 ore fără inflamație sunt explicite.','Contrastul neliniștit versus imobil este citat.','Durata prelungită, febra și semnificația febrei înalte sunt descrise.','Febra însoțește colecistita/angiocolita, nu colica.','Apărarea și decompresia apar când inflamația atinge peritoneul parietal, în colecistită.']],
 8,'Atribuie febra înaltă colicii necomplicate și peritonismul primului episod de colică.',['1-4 ore','3-4 ore']),

q(11,['Probele hepatice în obstacolul extrahepatic se caracterizează prin:',
 ['Crește bilirubina conjugată (directă); FA și GGT cresc mai mult decât AST/ALT, inversul sugerând hepatită','FA este sintetizată de epiteliul căilor; izoforma hepatobiliară rezistă la temperaturi ridicate, spre deosebire de cea osoasă','În obstacol incomplet, FA poate fi crescută cu bilirubină serică normală','În obstacol, urobilinogenul urinar crește, bilirubina conjugată fiind absentă din urină','INR-ul scade în icterul obstructiv, vitamina K absorbindu-se mai bine'],'ABC',244,'Analize de laborator — Colestază versus hepatită',
 'Aplicarea ierarhiei FA/GGT > transaminaze, a stabilității termice a FA hepatice și a FA crescute cu bilirubină normală în obstacol incomplet.',
 ['Bilirubina directă și ierarhia FA/GGT versus AST/ALT sunt explicite.','Originea epitelială și distincția termică față de FA osoasă sunt citate.','Obstacolul incomplet cu FA crescută și bilirubină normală este descris.','Obstacolul reduce urobilinogenul urinar; bilirubina conjugată apare în urină.','INR-ul crește prin malabsorbția vitaminei K.']],
 8,'Inversează urobilinogenul/bilirubina urinară și direcția INR-ului din icterul obstructiv.',['gama-glutamil transferazei','Fosfataza alcalină']),

q(12,['Radiografia abdominală simplă în patologia biliară poate arăta:',
 ['Aer în calea biliară, prin fistulă bilio-digestivă sau comunicare iatrogenă','Aer în lumenul sau peretele vezicii, în colecistita acută emfizematoasă','Doar 10–15% dintre calculii veziculari sunt suficient de calcificați pentru a fi radioopaci','Aproximativ 80% dintre calculi sunt radioopaci, aerobilia fiind imposibilă','Colecistita emfizematoasă nu produce aer parietal, CT-ul fiind superfluu'],'ABC',245,'Radiografia abdominală simplă',
 'Recunoașterea aerobiliei, a aerului parietal emfizematos și a radioopacității de 10–15%.',
 ['Aerobilia prin fistulă sau anastomoză este citată.','Aerul luminal/parietal definește forma emfizematoasă.','10–15% radioopaci sunt cifra explicită.','Doar 10–15%, nu 80%, sunt radioopaci.','Emfizematoasa se vede tocmai prin aer parietal.']],
 8,'Ridică radioopacitatea de la 10–15% la 80% și neagă aerobilia, două semne din același paragraf.',['10-15%','colecistitei acute emfizematoase']),

q(13,['MRCP în patologia biliară:',
 ['Selectează imaginile de rezonanță ale arborelui biliar și ale ductelor pancreatice, utilă pentru calculii de CBP și alte anomalii','Este de obicei metoda inițială înainte de PTC sau ERCP; avantajele sunt absența invazivității și a iradierii','Înlocuiește ecografia ca investigație de primă intenție în colica biliară necomplicată','Implică iradiere similară CT-ului și este mai invazivă decât ERCP','Nu vizualizează CBP, fiind rezervată doar chisturilor renale'],'AB',245,'MRCP',
 'Poziționarea MRCP ca metodă neinvazivă, neiradiantă, de obicei preliminară ERCP/PTC, nu ca prim test în colică.',
 ['Utilitatea pentru CBP și anomalii este explicită.','Rolul preliminar și absența iradierii/invazivității sunt citate.','Ecografia rămâne explorarea inițială de elecție în colică.','MRCP nu iradiază și nu este mai invazivă decât ERCP.','MRCP este utilă tocmai pentru CBP.']],
 8,'Pune MRCP înaintea ecografiei în colică și îi atribuie iradiere, două erori de ierarhie imagistică.',['MRCP','nu implică utilizarea radiaţiilor']),

q(14,['Tratamentul colicii biliare simptomatice include:',
 ['Colecistectomia laparoscopică electivă la majoritatea pacienților cu litiază simptomatică','Dizolvarea (acid ursodeoxicolic ≥6 luni, până la 1 an) este o opțiune la circa 15% care nu tolerează sau refuză operația','Rata de dizolvare este 90% sub 5 mm și 60% sub 10 mm, dar recurența este 50% la 5 ani de la întrerupere','Ursodeoxicolicul dizolvă 90% din calculii de 3 cm în 2 săptămâni, fără recurență','ESWL este prima linie la toți pacienții tineri, fără risc de pancreatită'],'ABC',249,'Colica biliară — Tratament',
 'Contrastarea colecistectomiei laparoscopice ca standard cu limitele dizolvării (15%, recurență 50%/5 ani).',
 ['Laparoscopia electivă este indicația la majoritate.','Opțiunea de dizolvare la 15% este citată.','Cifrele 90%/60% și recurența 50% la 5 ani sunt explicite.','5 mm, nu 3 cm, și durata de luni, nu 2 săptămâni; recurența există.','ESWL are utilizare limitată prin risc de pancreatită și calculi noi.']],
 8,'Supraestimează dizolvarea (3 cm în 2 săptămâni) și reabilitează ESWL ca primă linie.',['Acidul ursodeoxicolic','recurenţă de 50%']),

q(15,['Sindromul Mirizzi constă în:',
 ['Un calcul mare din veziculă care comprimă canalul hepatic comun, producând icter obstructiv','O fistulă colecisto-colică cu aerobilie, fără obstacol pe hepaticul comun','Impactarea ileală a unui calcul, identică ileusului biliar','O tumoră Klatskin perihilară, fără calcul vezicular','O colică de 1–4 ore fără icter și fără obstacol'],'A',249,'Sindromul Mirizzi',
 'Diferențierea compresiei hepaticului comun de către un calcul vezicular mare de ileus, Klatskin și colică.',
 ['Definiția (calcul vezicular mare, compresie de hepatic comun, icter) este explicită.','Fistula colecisto-enterică descrie ileusul biliar, nu Mirizzi.','Impactarea ileală este ileusul biliar.','Klatskin este colangiocarcinom perihilar.','Colica nu produce icter prin compresie de hepatic comun.']],
 8,'Confundă Mirizzi cu ileusul biliar și cu tumora Klatskin, trei cauze de icter din același capitol.',['Sindromul Mirizzi','canalul hepatic comun']),

q(16,['Colangita acută supurată, în conduita de urgență:',
 ['Tratamentul inițial: reechilibrare, UTI, hemoculturi, antibiotice cu spectru pe Gram-negative; coagulopatia se corectează cu vitamina K sau PPC înaintea gestului invaziv','Peste 70% răspund; după recuperare se face colecistectomie; non-responderii cer decompresie urgentă (ERCP, tub transhepatic sau chirurgie deschisă)','ERCP cu sfincterotomie extrage calculii din CBP cu succes >90% și complicații circa 5–10%','Decompresia se amână 6 săptămâni la toți, antibioticele fiind suficiente în șoc','Succesul ERCP este sub 20%, sfincterotomia fiind abandonată'],'ABC',249,'Colangita supurată — Decompresie',
 'Aplicarea algoritmului reechilibrare → 70% răspuns → colecistectomie versus decompresie urgentă, plus performanța ERCP.',
 ['Resuscitarea, UTI, spectrul Gram-negativ și corectarea coagulării sunt explicite.','70%, colecistectomia ulterioară și căile de decompresie sunt citate.','Succesul >90% și complicațiile 5–10% sunt de pe pagina următoare.','Decompresia nu se amână în non-responderi.','Succesul ERCP este >90%, nu sub 20%.']],
 8,'Amână decompresia la non-responderi și coboară succesul ERCP de la >90% sub 20%.',['Peste 70%','>90%'],[250]),

q(17,['Identificați afirmația corectă privind cancerul veziculei biliare:',
 ['Diagnosticul preoperator corect se stabilește în doar 10% din cazuri; adenocarcinomul mucinos incipient, limitat la perete, descoperit după colecistectomie laparoscopică, are supraviețuire la 5 ani până la 80% cu colecistectomie și margini negative (inclusiv cisticul)','Diagnosticul preoperator este corect în 90% din cazuri, colecistectomia laparoscopică fiind inutilă','Supraviețuirea la 5 ani a formelor incipiente este <5%, identică tumorilor avansate','Vezicula de porțelan nu are corelat imagistic, CT-ul fiind superfluu','Limfadenectomia de hil este standardizată identic altor viscere, mezenterul fiind mobil'],'A',252,'Cancerul veziculei biliare',
 'Contrastarea diagnosticului preoperator de 10% cu supraviețuirea de 80% a formelor incipiente incidente.',
 ['10% diagnostic preoperator și 80% la 5 ani după colecistectomie cu margini negative sunt explicite.','10%, nu 90%, este cifra de diagnostic preoperator.','<5% la 5 ani descrie tumorile avansate, nu incipientele.','Calcificările difuze de veziculă de porțelan sunt un aspect ecografic sugestiv.','Limfadenectomiei de hil îi lipsește standardizarea.']],
 8,'Permutează 10% (diagnostic preoperator) cu 80% (supraviețuire incipientă) și cu <5% (avansat).',['l 0% din cazuri','până la 80%'],[253]),

q(18,['Colangiocarcinomul extrahepatic se caracterizează prin:',
 ['Reprezintă cancerul de căi; extrahepaticul este de departe cel mai frecvent: 50% perihilar, 40% distal, intrahepaticul doar 10%','Apare egal la ambele sexe, la 50–70 de ani; riscul e crescut în CSP (asociată CU), chisturi de coledoc, Opisthorchis/Clonorchis','Icterul este progresiv, spre deosebire de icterul fluctuant al litiazei de CBP; angiocolita este rară','Intrahepaticul reprezintă 80%, perihilarul fiind excepțional','Icterul fluctuează identic coledocolitiazei, angiocolita fiind regula de prezentare'],'ABC',253,'Colangiocarcinomul — Clasificare și risc',
 'Aplicarea distribuției 50/40/10 și a contrastului icter progresiv versus fluctuant litiazic.',
 ['Distribuția 50% perihilar / 40% distal / 10% intrahepatic este explicită.','Sexul egal, vârsta 50–70 și lista de risc (CSP, chisturi, trematode) sunt citate.','Icterul progresiv versus fluctuant și raritatea angiocolitei sunt descrise.','Intrahepaticul este 10%, nu 80%.','Icterul nu fluctuează ca litiaza; angiocolita este rară.']],
 8,'Inversează 10% intrahepatic cu 80% și confundă icterul progresiv cu cel fluctuant litiazic.',['50% din cazuri','40% din cazuri']),

q(19,['Tumorile Klatskin (perihilare) și leziunile distale de CBP:',
 ['Klatskin se tratează prin rezecție și hepatico-jejunoanastomoză Roux-en-Y, adesea cu rezecție hepatică; supraviețuirea la 5 ani după rezecția treimii medii ≈10%','Leziunile distale rezecabile cer operație Whipple; supraviețuirea la 5 ani ≈12–25%','Prognosticul global la 5 ani este doar 5–10%; chirurgia este unicul tratament curativ','Stentarea înlocuiește Whipple ca tratament curativ al leziunilor distale rezecabile','Rezecția intrahepatică obține margini negative la peste 90% dintre pacienți'],'ABC',253,'Klatskin și Whipple',
 'Diferențierea reconstrucției Roux pentru Klatskin de Whipple pentru distale, cu cifrele de supraviețuire 10% versus 12–25%.',
 ['Rezecția plus Roux și cifra ≈10% sunt explicite.','Whipple și intervalul 12–25% sunt citate.','5–10% global și unicitatea chirurgiei curative sunt enunțate.','Stentul este paliativ, nu curativ, pentru distalele nerezecabile.','Marginile negative intrahepatice se obțin la <30%.']],
 8,'Confundă Whipple cu stentul palativ și supraestimează marginile intrahepatice de la <30% la 90%.',['tumori Klatskin','operaţia Whipple']),

q(20,['Chisturile coledociene congenitale:',
 ['Sunt mai frecvente la femei (raport 4:1) și la populația asiatică','Se recomandă rezecția pentru simptome și pentru riscul de colangiocarcinom, de 20–30 de ori mai mare decât în populația generală','După rezecție se face hepatico-jejunoanastomoză Roux-en-Y; urmărirea continuă este importantă (stenoze, neoplazie)','Raportul este 1:4 în favoarea bărbaților, rezecția fiind evitată din cauza riscului oncologic nul','Anastomoza Roux este contraindicată, chistul lăsându-se pe loc'],'ABC',254,'Chisturile coledociene',
 'Aplicarea predilecției feminine 4:1, a riscului oncologic ×20–30 și a reconstrucției Roux.',
 ['Raportul 4:1 și predilecția asiatică sunt explicite.','Rezecția și riscul ×20–30 sunt citate.','Roux-en-Y și urmărirea pentru stenoze/neoplazie sunt descrise.','Raportul este 4:1 femei, nu invers; riscul oncologic justifică rezecția.','Anastomoza Roux restabilește fluxul după rezecție.']],
 8,'Inversează raportul 4:1 și anulează indicația oncologică de rezecție.',['4: 1','20-30 de ori'],[253]),

q(21,['Leziunile iatrogene de cale biliară se caracterizează prin:',
 ['Aproximativ 75% apar după colecistectomie simplă, cu secțiune a căii și a vascularizației lângă ficat','Incidența după laparoscopie (0,4–0,6%) este circa 4 ori mai mare decât după tehnica deschisă și e mai mare în colecistita acută decât în electiv','Canalele accesorii <3 mm care drenează o porțiune mică pot fi ligaturate; altfel se convertește și se repară','Leziunea <50% din circumferință, fără devascularizare, poate fi reparată primar, cu tub T decompresiv','Orice leziune <50% cere Whipple de principiu, ligatura canalelor accesorii fiind interzisă'],'ABCD',254,'Leziuni iatrogene de cale biliară',
 'Aplicarea cifrelor 75% / 0,4–0,6% (×4) și a pragului de 50% circumferință pentru reparația primară versus Roux.',
 ['75% după colecistectomie simplă este explicit.','0,4–0,6% și factorul ×4, plus riscul din acut, sunt citate.','Regula <3 mm pentru ligatură este enunțată.','Pragul <50% cu tub T este descris.','<50% fără devascularizare se repară primar, nu prin Whipple.']],
 8,'Permutează pragul de 50% circumferință cu indicația de Whipple și ignoră regula celor 3 mm.',['0,4-0,6%','<50% din circumferinţa']),

q(22,['Scurgerea biliară postoperatorie precoce:',
 ['Se manifestă prin durere, icter, bilă pe dren sau plagă, abdomen acut sau sepsis; US/CT caută bilomul','Scurgerea minoră dintr-un canal accesoriu poate avea doar drenaj percutan; scurgerea din cistic se stentază prin ERCP','Reconstrucția unei leziuni majore se amână până la cartografierea anatomiei, remisia sepsisului și scăderea inflamației de fistulă','Reconstrucția majoră se face imediat, în sepsis, fără imagistică','Bilomul se ignoră, ERCP fiind contraindicat în scurgerea din cistic'],'ABC',254,'Fistula biliară precoce',
 'Diferențierea drenajului percutan (accesoriu) / stent ERCP (cistic) de amânarea reconstrucției majore.',
 ['Tabloul clinic și bilomul imagistic sunt explicite.','Cele două conduite (percutan versus stent) sunt distinse.','Amânarea reconstrucției majore până la controlul sepsisului este cerută.','Reconstrucția imediată în sepsis este descurajată.','Bilomul se caută imagistic; ERCP stentază cisticul.']],
 8,'Forțează reconstrucția majoră în sepsis și contraindică ERCP-ul, inversul algoritmului din paragraf.',['colecţie intra-abdominală de bilă','stent prin ERCP']),

q(23,['Strictura biliară tardivă nediagnosticată poate duce la:',
 ['Icter obstructiv și angiocolită recurentă; netratată, la ciroză biliară și hipertensiune portală','Diagnostic confirmat prin MRC, ERCP sau PTC; angiocolita se tratează cu antibiotice, iar strictura prin derivație proximală pe ansă jejunală','Este o entitate benignă, fără risc de ciroză, imagistica fiind superfluă','Hipertensiunea portală exclude orice derivație biliară','PTC nu are rol, doar radiografia simplă confirmând strictura'],'AB',254,'Stricturi biliare tardive',
 'Recunoașterea secvenței angiocolită recurentă → ciroză biliară/HTP și a derivației pe ansă jejunală.',
 ['Icterul, angiocolita recurentă și evoluția spre ciroză/HTP sunt explicite.','MRC/ERCP/PTC și derivația jejunală sunt descrise.','Netratarea duce la ciroză, deci nu este benignă.','HTP este o consecință, nu o contraindicație absolută enunțată.','PTC este una dintre metodele de confirmare.']],
 8,'Anulează evoluția spre ciroză biliară, miza clinică a stricturii nediagnosticate.',['ciroză biliară','hipertensiune portală']),

q(24,['În colecistita acută, examenul clinic relevă frecvent:',
 ['Semnul Murphy (oprirea respirației la palpare profundă în HD, peritoneul veziculei fiind inflamat)','Masă sensibilă în HD, reprezentând vezicula inflamată, când inflamația este avansată','Apărare localizată și sensibilitate la decompresie, odată ce inflamația atinge peritoneul parietal','Semnul Courvoisier (veziculă destinsă nedureroasă cu icter) ca echivalent al Murphy','Abdomen perfect suplu, fără sensibilitate între crize, identic colicii reminse, chiar în plină inflamație'],'ABC',244,'Colecistita acută — Semne fizice',
 'Ierarhia Murphy → masă sensibilă → peritonism local, distinctă de Courvoisier.',
 ['Definiția Murphy este explicită.','Masa sensibilă din HD este descrisă.','Apărarea și decompresia apar la extinderea parietală.','Courvoisier este veziculă destinsă nedureroasă cu icter, nu echivalent Murphy.','Abdomenul suplul între crize descrie colica, nu colecistita acută.']],
 8,'Egalizează Murphy cu Courvoisier, două semne din același paragraf, ușor de superpus.',['semnul Murphy','masă sensibilă']),

q(25,['Care dintre următoarele afirmații despre CT în patologia biliară sunt adevărate?',
 ['Nu este investigația de elecție pentru litiază, din cauza sensibilității reduse, costului și iradierii, față de ecografie','Poate fi util în afecțiuni biliare acute severe, pentru a exclude alte obstacole sau un diagnostic alternativ','Colangiografia CT poate relua detalii anatomice; CT-ul poate ghida drenajul percutan sau puncția-biopsie','CT-ul înlocuiește ecografia ca prim test în colica necomplicată, fără iradiere','Sensibilitatea CT pentru calculii veziculari depășește 95%, identic ecografiei'],'ABC',245,'Tomografia computerizată',
 'Poziționarea CT ca instrument de urgență/anatomie/intervenție, nu ca prim test de litiază.',
 ['Inferioritatea față de eco pentru litiază este explicită.','Rolul în cazurile acute severe este citat.','Colangio-CT și ghidajul percutan sunt menționate.','Ecografia rămâne primul test; CT iradiază.','95% este performanța ecografiei, nu a CT-ului.']],
 8,'Pune CT înaintea ecografiei în colică și îi atribuie sensibilitatea de 95% a ultrasunetelor.',['Tomografia computerizată','sensibilităţii reduse']),

q(26,['Calculii pigmentari bruni se deosebesc de cei negri prin faptul că:',
 ['Apar în context de infecție a bilei, primitiv în căile biliare, și sunt moi','Negrii (≈20%) se formează în bila sterilă din colecist, asociați hemolizei și cirozei','Brunii conțin adesea suficient calciu cât să fie radioopaci','Brunii sunt 75% din calculi și se formează doar în colecistul steril','Negrii apar primitiv în căi infectate, fiind moi și radiotransparenți'],'ABC',243,'Calculi pigmentari negri versus bruni',
 'Contrastarea mediului steril/colecist/hemoliză (negri) cu bila infectată/căi/moi (bruni).',
 ['Infecția, originea primitivă în căi și consistența moale definesc brunii.','20%, bila sterilă și hemoliza/ciroza definesc negrii.','Radioopacitatea prin calciu este atribuită pigmentarilor, în special relevanți la bruni.','75% sunt micștii, nu brunii; brunii nu sunt din colecist steril.','Atributele sunt inversate față de text.']],
 8,'Inversează sediul (colecist steril versus căi infectate) între negri și bruni.',['Calculii pigmentari bruni','Calculii pigmentari negri']),
];
