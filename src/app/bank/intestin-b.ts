import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p<=199?p-78:p-82;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('intestin',14,pdfOffset,`intestin-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const INTESTIN_B=[
q(7,['Identificați afirmația corectă referitoare la ocluzia intestinală cu buclă închisă:',
 ['Este o obstrucție completă, cu o porțiune obstruată atât proximal cât și distal, cu risc crescut de strangulare și viză chirurgicală imediată','Este o ocluzie parțială, cu șansă de rezolvare conservatoare de 80%, identică aderențelor','Permite prelungirea tratamentului non-chirurgical 72 de ore, infarctul fiind exclus','Se produce doar prin strictură Crohn, mezenterul rămânând indemn','Definește ileusul paralitic, fără punct de obstacol mecanic'],'A',193,'OIS — Buclă închisă',
 'Recunoașterea buclei închise ca ocluzie completă bidirecțională, cu strangulare iminentă, distinctă de OIS parțială aderențială.',
 ['Definiția (proximal + distal) și viza imediată sunt explicite.','Rezolvarea de ~80% ține de OIS parțială aderențială, nu de bucla închisă.','Textul cere chirurgie imediată, nu o fereastră de 72 de ore.','Strictura Crohn nu compromite mezenterul; bucla închisă da.','Ileusul paralitic nu are obstacol mecanic.']],
 8,'Confundă bucla închisă cu OIS parțială aderențială (80%) sau cu ileusul, două entități din același capitol.',['buclă închisă','strangulare']),

q(8,['Aderențele postoperatorii, ca substrat de OIS, se caracterizează prin:',
 ['Sunt prezente la cel puțin două treimi dintre pacienții după o laparotomie abdominală','Depășesc 90% după două sau mai multe intervenții abdominale','Ulterior, 3–9% dintre operați pot prezenta simptome de OIS','Se formează doar după procedee laparoscopice, procedeele deschise fiind scutite','Dispar complet după o singură laparotomie, fără risc ulterior de OIS'],'ABC',193,'OIS — Aderențe postoperatorii',
 'Aplicarea treptelor ≥2/3 după o operație, >90% după două și 3–9% simptomatici, față de reducerea laparoscopică deja tratată în itemul 2.',
 ['Pragul de cel puțin două treimi este explicit.','Pragul de peste 90% este citat.','Intervalul 3–9% este descris.','Laparoscopia produce ~80% mai puține aderențe, nu invers.','Aderențele persistă și pot cauza OIS ulterior.']],
 8,'Permutează ≥2/3, >90% și 3–9% între numărul de operații și simptomatologie.',['două treimi','3-9%']),

q(9,['Carcinomatoza peritoneală ca o cauză extrinsecă de OIS:',
 ['Se asociază, de regulă, cancerului ovarian sau de colon, prin compresie multifocală a lumenului','Tratamentul paliativ pentru ameliorarea obstrucției rămâne indicat, chiar dacă procesul poate fi incurabil','Impune rezecție oncologică radicală de principiu, cu vindecare în 90% la 5 ani','Este cea mai frecventă cauză de OIS în țările industrializate, înaintea aderențelor','Se tratează identic herniei Richter, lumenul rămânând permeabil mezenteric'],'AB',194,'OIS — Carcinomatoză',
 'Recunoașterea paliației chiar în boala incurabilă multifocală (ovar/colon), față de aderențe ca etiologie dominantă.',
 ['Originea ovariană/colică și caracterul multifocal sunt explicite.','Indicația paliativă este citată.','Vindecarea radicală 90% contrazice incurabilitatea descrisă.','Aderențele, nu carcinomatoza, domină în țările industrializate.','Hernia Richter este altă entitate, cu lumen parțial permeabil.']],
 8,'Pune carcinomatoza în locul aderențelor ca etiologie dominantă și anulează paliația.',['cancerului ovarian','tratamentul paliativ']),

q(10,['În sindromul arterei mezenterice superioare, porțiunea duodenală comprimată după o scădere ponderală rapidă este:',
 ['A treia porțiune, prin închiderea acută a unghiului aorto-mezenteric','Prima porțiune (bulbul), identic ulcerului duodenal posterior','A patra porțiune, la ligamentul Treitz, fără modificare de unghi','Cecul, prin valva ileocecală incompetentă','Rectul, prin sindromul de arteră rectală superioară'],'A',194,'SAMS — Localizare',
 'Fixarea compresiei pe D3 după slăbire rapidă, față de distractorul D1 din itemul 2.',
 ['D3 și unghiul AMS–aortă sunt explicite.','Bulbul (D1) este alt etaj, al ulcerului posterior.','Treitz marchează D4, nu punctul SAMS.','Cecul nu este sediul descris.','Nu există „sindrom de arteră rectală superioară” în acest context.']],
 8,'Mută compresia de pe D3 pe D1 sau Treitz, două reperuri duodenale vecine.',['a treia porţiune','scăderi ponderale rapide']),

q(11,['Stricturile benigne ale intestinului subțire recunosc ca etiologii:',
 ['Boala Crohn, cea mai frecventă cauză benignă','Enterita postradioterapie','Ulcerele din utilizarea cronică de AINS și stricturile anastomotice după rezecție','Adenocarcinomul, GIST-ul și limfomul, clasificate ca stricturi benigne','Volvulusul pe ax mezenteric, fără îngroșare parietală'],'ABC',194,'OIS — Stricturi benigne',
 'Separarea cauzelor benigne (Crohn, iradiere, AINS, anastomoză) de neoplaziile care dau stricturi maligne.',
 ['Crohn ca cea mai frecventă cauză benignă este explicit.','Enterita postradioterapie este citată.','AINS și stricturile anastomotice sunt enumerate.','Adenocarcinomul/GIST/limfomul sunt cauze maligne.','Volvulusul este cauză extrinsecă, nu strictură parietală.']],
 8,'Trece neoplaziile (adeno/GIST/limfom) în categoria benignă, inversând clasificarea din același paragraf.',['boala Crohn','antiinflamatoare nesteroidiene']),

q(12,['Volvulusul intestinului subțire se caracterizează prin:',
 ['Răsucire de obicei în jurul axului mezenteric, cu formare de ansă închisă și risc mare de strangulare, deci atenție imediată','Este o strictură Crohn fără compromiterea mezenterului, strangularea fiind improbabilă','Se reduce conservator 80%, identic OIS parțiale aderențiale','Apare doar după SAMS, prin creștere ponderală rapidă','Definește hernia Richter, cu lumen permeabil mezenteric'],'A',194,'OIS — Volvulus',
 'Maparea răsucirii pe ax mezenteric pe bucla închisă cu strangulare, distinctă de strictură și de Richter.',
 ['Axul mezenteric, ansa închisă și riscul mare sunt explicite.','La stricturi mezenterul nu e compromis.','80% ține de OIS parțială aderențială.','SAMS urmează scăderii, nu creșterii ponderale.','Hernia Richter nu este un volvulus.']],
 8,'Confundă volvulusul mezenteric cu strictura (fără strangulare) sau cu Richter.',['axului mezenteric','risc mare de strangulare']),

q(13,['În chirurgia bolii Crohn a intestinului subțire sunt adevărate următoarele:',
 ['Rezecția este limitată până la intestin sănătos; nu sunt necesare margini normale microscopic','În stricturi fibrotice cronice, stricturoplastia ameliorează obstrucția și minimizează rezecția','Apendicectomia profilactică se face dacă inserția cecală nu e bolnavă, pentru a evita confuzia diagnostică ulterioară','Ca regulă, 100 cm de intestin restant permit aport oral, VIC intactă influențând absorbția','Rezecția agresivă cu margini microscopice negative este de principiu, pentru a elimina recidiva'],'ABCD',204,'Crohn — Principii chirurgicale',
 'Aplicarea rezecției limitate (fără margini microscopice), a stricturoplastiei, a apendicectomiei condiționate și a pragului de 100 cm.',
 ['Rezecția limitată și absența cerinței microscopice sunt explicite.','Stricturoplastia este citată.','Condiția cecală a apendicectomiei este descrisă.','Pragul de 100 cm și rolul VIC sunt menționate.','Rezecția excesiv de agresivă predispone la intestin scurt.']],
 8,'Inversează regula „fără margini microscopice” și ignoră pragul de 100 cm.',['margini normale microscopic','I 00 cm']),

q(14,['Stomele temporare în chirurgia Crohn sunt luate în considerare în:',
 ['Peritonită avansată','Pacienți sub imunosupresie, cu complicații septice','Boală limitată, fără peritonită, ca gest de principiu la fiecare rezecție','Apendicectomia profilactică pe cec bolnav, pentru a preveni fistula','Screeningul PAF duodenal, stoma înlocuind endoscopia'],'AB',204,'Crohn — Stome temporare',
 'Rezervarea stomei pentru peritonită avansată sau imunosupresie septicată, nu ca rutină a rezecției limitate.',
 ['Peritonita avansată este explicită.','Imunosupresia cu sepsis este citată.','Anastomoza primară este de obicei posibilă.','Apendicectomia pe cec bolnav riscă fistula, deci se evită.','PAF duodenal ține de alt capitol.']],
 8,'Transformă stoma din excepție (peritonită/imunosupresie) în gest de principiu.',['peritonită avansată','imunosupresiv']),

q(15,['Șansa de rezolvare conservatoare a unei OIS parțiale sau de grad redus, după chirurgie abdominală anterioară și fără hernie palpabilă, este de aproximativ:',
 ['80%','10%, identic mortalității din OIS necomplicată','25%, identic mortalității din strangulare','50%, identic aderențelor după o singură laparotomie','2%, identic carcinoizilor <1 cm'],'A',199,'OIS parțială aderențială — Rezolvare',
 'Izolarea cifrei de ~80% pentru OIS parțială aderențială, față de mortalitățile <1% / >25% din același capitol.',
 ['Aproximativ 80% este explicit.','<1%, nu 10%, este mortalitatea OIS necomplicate.','>25% este mortalitatea din strangulare/perforație.','≥2/3, nu 50%, este prevalența aderențelor.','2% este rata de metastaze a carcinoizilor <1 cm.']],
 8,'Permutează 80% (rezolvare) cu <1%/25% (mortalitate) și cu 2% (carcinoid).',['aproximativ 80%','cauză aderenţială']),

q(16,['Ileusul paralitic (adinamic) se deosebește de OIS mecanică prin:',
 ['Cauze: narcotice, repaus, traumatisme, hipotiroidism, deficite de K/Ca/Mg/fosfat, anestezie, psihotrope, inflamație/sepsis','Radiografiile arată dilatare difuză a intestinului subțire și a colonului, fără zonă de tranziție','Aerul din sigmoidul distal și rect ajută diferențierea de obstrucția mecanică','Există o zonă de tranziție CT clară, identică OIS mecanice','Standardul de aur este doar arteriografia mezenterică, fără radiografii simple'],'ABC',197,'Diagnostic diferențial — Ileus',
 'Contrastul radiologic (dilatare difuză, fără zonă de tranziție, aer rectal) față de OIS cu punct de obstacol.',
 ['Lista de cauze, inclusiv narcoticele și electroliții, este explicită.','Absența zonei de tranziție este citată.','Figura 14-4 menționează aerul din sigmoid/rect.','Zona de tranziție definește OIS mecanică.','Arteriografia este etalonul IMA, nu al ileusului.']],
 8,'Atribuie ileusului zona de tranziție a OIS sau arteriografia din ischemia mezenterică.',['Ileusul paralitic','Narcoticele'],[198]),

q(17,['Studiile randomizate recente privind OIS evidențiază rezoluție mai rapidă și rată chirurgicală mai mică odată cu:',
 ['Administrarea orală de substanță de contrast hidrosolubilă','Nissen 360° de principiu','Embolectomie AMS la toți pacienții cu aderențe','SIL stângă, etiologia fiind o fisură','Manometrie anorectală ca prim gest'],'A',198,'OIS — Contrast hidrosolubil oral',
 'Recunoașterea contrastului hidrosolubil oral ca măsură care contestă dogma NPO plus sondă nazogastrică.',
 ['Administrarea orală de contrast hidrosolubil este explicită.','Nissen este antireflux esofagian.','Embolectomia ține de embolia AMS.','SIL este pentru fisură anală.','Manometria anală nu evaluează OIS.']],
 8,'Înlocuiește contrastul hidrosolubil cu gesturi din esofag, ischemie sau proctologie.',['contrast hidrosolubile oral','sondei nazogastrice']),

q(18,['Ocluzia precoce postoperatorie se gestionează astfel:',
 ['Temporizare, majoritatea rezolvându-se în 2 săptămâni, pe măsură ce aderențele acute și edemul se ameliorează','Reintervenția după prima săptămână poate fi periculoasă prin aderențe acute, cu leziuni seroase și enterotomii','Laparotomie de principiu în ziua 1, aderențele acute fiind ignorabile','Gastrografinul e contraindicat, dogma NPO rămânând absolută','Hernia internă post-bypass se tratează conservator 2 săptămâni'],'AB',199,'OIS precoce postoperatorie',
 'Aplicarea ferestrei de ~2 săptămâni și a pericolului reintervenției după prima săptămână.',
 ['Rezolvarea în 2 săptămâni este explicită.','Riscul reintervenției după prima săptămână este citat.','Chirurgia de ziua 1 nu este regula descrisă.','Contrastul hidrosolubil contestă dogma NPO.','Herniile interne post-bypass cer chirurgie promptă.']],
 8,'Inversează temporizarea de 2 săptămâni cu laparotomia de ziua 1 și cu hernia internă post-bypass.',['2 săptămâni','prima săptămână']),

q(19,['Mortalitatea și prevenția aderențelor după laparotomie pentru OIS includ:',
 ['Mortalitate <1% în OIS necomplicată','Peste 25% când s-a produs strangulare sau perforație','Bariera hialuronat de sodiu + carboximetilceluloză reduce aderențele, dar studiile prospective nu au arătat scăderea OIS recurente','Rezecția extinsă poate duce la sindrom de intestin scurt, cu nevoie de suport parenteral de lungă durată','Dispozitivele barieră scad dovedit incidența ocluziei recurente, justificând utilizarea de rutină'],'ABCD',199,'OIS — Mortalitate și bariere',
 'Cântărirea <1% versus >25% și a limitei barierelor (reduc aderențe, nu OIS recurentă), plus riscul de intestin scurt după rezecție extinsă.',
 ['Pragul <1% este explicit.','Pragul de peste 25% este citat.','Eficacitatea pe aderențe fără scăderea OIS recurente este descrisă.','Sindromul de intestin scurt după rezecție extinsă este menționat.','Utilizarea de rutină nu este justificată de evidențe suficiente.']],
 8,'Inversează mortalitățile <1% și >25% și declară barierele eficace pe OIS recurentă.',['<I%','25%']),

q(20,['Regula lui 2 a diverticulului Meckel include:',
 ['Prezent la ~2% din populație, de 2 ori mai frecvent la bărbați, cu 2 tipuri de mucoasă, de obicei la maxim 60 cm de valva ileocecală','Prezent la 50% din populație, identic mucoasei gastrice ectopice, la 2 cm de Treitz','Localizat pe marea curbură gastrică, ca un diverticul de pulsiune','Este o hernie Richter, cu lumen permeabil mezenteric','Apare doar după 80 de ani, simptomele crescând cu vârsta'],'A',209,'Diverticul Meckel — Regula lui 2',
 'Reținerea cvartetului 2%/2× bărbați/2 mucoase/60 cm de VIC, față de declinul simptomelor cu vârsta.',
 ['Cele patru elemente ale regulii sunt explicite.','50% este ponderea mucoasei gastrice ectopice, nu prevalența.','Meckel este pe ileonul antimezenteric, nu pe stomac.','Richter este altă hernie.','Simptomele scad cu vârsta, nu cresc.']],
 8,'Permutează 2% (prevalență) cu 50% (mucoasă gastrică) și mută Meckel pe stomac.',['regula lui 2','2% din populaţie']),

q(21,['Diverticulul Meckel se caracterizează prin:',
 ['Mucoasa ectopică cea mai frecventă este gastrică (~50%); acidul poate ulcera ileonul adiacent și produce hemoragie','Hemoragia (sânge roșu/maroniu, nedureroasă) e cea mai frecventă sub 2 ani; scintigrafia cu 99mTc-pertehnetat diagnostichează ~90%','Hernia Littre este încarcerarea diverticulului într-o hernie inghinală, femurală sau ombilicală','Mucoasa ectopică dominantă este colonică (90%), scintigrafia fiind inutilă la copii','Rezecția incidentală la vârstnici este de principiu, riscul simptomatic crescând cu vârsta'],'ABC',209,'Meckel — Mucoasă, sângerare, Littre',
 'Împerecherea mucoasei gastrice 50% cu scintigrafia 90% la <2 ani și cu hernia Littre.',
 ['Ponderea de 50% a mucoasei gastrice este explicită.','Tabloul hemoragic pediatric și 90% sunt citate.','Hernia Littre și sediile sunt descrise.','Colonica nu e mucoasa dominantă; scintigrafia e utilă.','Beneficiul rezecției incidentale scade cu vârsta.']],
 8,'Inversează mucoasa gastrică 50% cu o pretinsă predominantă colonică și anulează scintigrafia.',['50%','techneţiu-99m'],[210]),

q(22,['Sindromul de intestin scurt la adult este definit prin existența a:',
 ['<180 cm de intestin subțire; NPT e deseori necesară la <60 cm cu colon și VIC competente sau la <100 cm fără colon/VIC','<25 cm, identic lungimii duodenului, fără rol al colonului','<2 cm, pragul carcinoidului apendicular','>300 cm, lungimea normală fiind considerată intestin scurt','Orice rezecție ileală de 10 cm, B12 rămânând intactă'],'A',211,'Sindrom de intestin scurt',
 'Aplicarea pragului de definiție <180 cm și a ferestrelor NPT (<60 cm cu colon/VIC vs <100 cm fără).',
 ['Definiția <180 cm și cele două praguri NPT sunt explicite.','25 cm este lungimea duodenului, nu definiția.','2 cm este pragul carcinoidului apendicular.','Textul definește prin deficit de lungime, nu prin exces.','Pierderea ileonului terminal pierde permanent B12 și sărurile biliare.']],
 8,'Permutează <180/<60/<100 cm cu lungimea duodenului (25 cm) sau pragul carcinoid (2 cm).',['<I 80 cm','<60 cm']),

q(23,['Obstrucția lumenului în apendicita acută este produsă de:',
 ['Hiperplazie limfoidă, observată la 60% dintre pacienți, cea mai frecventă etiologie','Fecaliți, evidențiați histologic la 35%','Perforație transmurală în până la 20% dintre cazuri, ca evoluție a ischemiei și infecției','Tumori apendiculare, ca etiologie dominantă (90%)','Omentul bine dezvoltat al sugarului, care previne peritonita difuză'],'ABC',211,'Apendicită — Fiziopatologie',
 'Ierarhia 60% hiperplazie / 35% fecalit / până la 20% perforație, față de omentul nedezvoltat al copilului mic.',
 ['60% hiperplazie ca etiologie dominantă este explicită.','35% fecaliți sunt citați.','Până la 20% perforație este descrisă.','Tumorile nu sunt etiologia dominantă a obstrucției acute.','Copiii mici nu au oment bine dezvoltat, deci peritonita difuză e mai frecventă.']],
 8,'Inversează 60/35/20% și atribuie sugarului un oment protector, contrar textului.',['60%','35%']),

q(24,['Selectați enunțurile adevărate despre apendicita acută, în afara semnelor Rovsing și psoas:',
 ['Punctul McBurney este la o treime din distanța de la spina iliacă antero-superioară până la ombilic','Semnul obturatorului (rotația pasivă a șoldului drept flectat) sugerează inflamație lângă obturatorul intern, în pelvis','Managementul non-operator cu antibiotice evită apendicectomia la 70–90%; 10% recidivează rapid și alți 20% în primul an','Pacienții cu fecaliți, vârstnicii și bolnavii cronici sunt candidați ideali de tratament non-operator','Apendicectomia incidentală a demonstrat un beneficiu major, rămânând practica standard'],'ABC',211,'Apendicită — McBurney, obturator, non-operator',
 'Completarea semnelor (McBurney, obturator) și a ratelor 70–90%/10%/20% ale tratamentului non-operator, față de itemul 5 (Rovsing/psoas).',
 ['Definiția punctului McBurney este explicită.','Semnul obturatorului este citat.','Cifrele 70–90%, 10% și 20% sunt descrise.','Fecaliții, vârsta și cronicitatea exclud varianta non-operatorie.','Apendicectomia incidentală a căzut în dizgrație, cu beneficiu minim.']],
 8,'Extinde non-operatorul la fecalit/vârstnic și supraestimează apendicectomia incidentală.',['McBumey','70-90%'],[212,213]),

q(25,['Pentru un carcinoid apendicular cu diametrul sub 2 cm, tratamentul adecvat este:',
 ['Apendicectomie simplă','Hemicolectomie dreaptă de principiu, metastazele fiind frecvente sub acest prag','Esofagectomie Ivor Lewis','Nissen 360°','Doar octreotid, fără rezecție'],'A',214,'Carcinoid apendicular <2 cm',
 'Completarea itemului 6: sub 2 cm se rezolvă prin apendicectomie simplă, hemicolectomia rămânând pentru >2 cm.',
 ['Textul rezervă apendicectomia simplă leziunilor <2 cm.','Hemicolectomia este pentru >2 cm.','Ivor Lewis este esofagian.','Nissen este antireflux.','Octreotidul ține de sindromul carcinoid metastatic, nu înlocuiește rezecția leziunii mici.']],
 8,'Inversează pragul de 2 cm, punând hemicolectomia pe leziunea mică.',['apendicectomie simplă','>2 cm'],[213]),

q(26,['Mucocelele și adenocarcinomul apendicular se caracterizează prin:',
 ['Mucocelele pot fi legate de un carcinom de bază, care constituie <1% dintre afecțiunile apendicelui','Perforatele (și unele fără perforație francă) se asociază cu pseudomixom peritoneal („burtă de jeleu”)','Rata de vindecare a adenocarcinomului apendicular este 50–60% la 5 ani','Vindecarea adenocarcinomului este 90–95% la 5 ani, mucocelul neavând legătură cu carcinomul','Pseudomixomul apare doar după rezecția oncologică a leziunilor neperforate'],'ABC',214,'Mucocel, pseudomixom, adenocarcinom',
 'Aplicarea <1% (carcinom de bază), a „burții de jeleu” și a 50–60% la 5 ani, față de 90–95% din distractorul itemului 6.',
 ['Pragul <1% este explicit.','Pseudomixomul și burta de jeleu sunt citate.','50–60% la 5 ani este descris.','90–95% supraestimează vindecarea.','Pseudomixomul se leagă de perforate și de unele fără perforație francă.']],
 8,'Umflă vindecarea la 90–95% și rupe legătura mucocel–carcinom de bază.',['<l %','50-60%']),

q(27,['Rotirea mezenterului observată pe CT ca „semn al vârtejului” este foarte sugestivă pentru:',
 ['Volvulus, ocluzie cu buclă închisă și hernie internă','Ulcer duodenal necomplicat','Diverticul Meckel asimptomatic la vârstnic','Polip hiperplastic gastric de 3 mm','Fisură anală cronică'],'A',196,'OIS — Semnul vârtejului',
 'Recunoașterea vârtejului CT ca marker de volvulus/buclă închisă/hernie internă, nu de patologie gastro-anală.',
 ['Cele trei entități asociate vârtejului sunt explicite.','Ulcerul duodenal nu rotește mezenterul.','Meckel-ul asimptomatic nu produce vârtej.','Polipul gastric nu este o urgență mezenterică.','Fisura anală este o entitate perineală.']],
 8,'Înlocuiește vârtejul mezenteric cu diagnostice din stomac sau proctologie.',['semnul vâ1tejului','volvulus']),

q(28,['După reechilibrare, tratamentul ischemiei mezenterice acute include:',
 ['Embolia AMS: embolectomie prin laparotomie, arteriotomie și cateter cu balon','Tromboza AMS: bypass sau stent endovascular, vasul fiind îngustat cronic aterosclerotic','Tromboza VMS: heparină IV ca primă linie; laparotomie/laparoscopie dacă se suspicionează necroza','Ischemia non-ocluzivă: vasopresoare α-adrenergice și digoxină pentru a crește spasmul splanhnic','Arteriografia a fost abandonată, diagnosticul punându-se doar clinic'],'ABC',205,'IMA — Tratament specific',
 'Maparea embolectomie / bypass-stent / heparină pe cele trei ocluzii, față de evitarea vasopresoarelor α în forma non-ocluzivă.',
 ['Embolectomia cu cateter-balon este explicită.','Bypass-ul sau stentul sunt citate.','Heparina ca primă linie în VMS este descrisă.','Vasopresoarele α și digoxina trebuie evitate în IMNO.','Arteriografia rămâne standardul de aur; CT-ul e first-line.']],
 8,'Prescrie vasopresoare α în IMNO, inversând tocmai evitarea spasmului suplimentar.',['Embolectomia imediată','heparină intravenoasă']),

q(29,['Durerea clasică din ischemia mezenterică acută se caracterizează prin:',
 ['Debut brusc, severă, cu examen abdominal precoce neconcludent — „durere disproporționată la examenul fizic”','Durere de cadran inferior drept, cu semn psoas pozitiv, identică apendicitei retrocecale','Crampe postprandiale ameliorate de vărsătura „ulei de motor”, identică ansei aferente','Durere ovulatorie (Mittelschmerz), fără factori de risc vasculari','Absența durerii, diagnosticul punându-se doar pe manometrie'],'A',205,'IMA — Tablou clinic',
 'Izolarea durerii disproporționate față de palparea precoce săracă, cauza întârzierii diagnostice.',
 ['Discordanța durere severă / examen sărac este explicită.','Psoasul ține de apendicita retrocecală.','Ansa aferentă este un sindrom postgastrectomie.','Mittelschmerz este din diagnosticul diferențial al apendicitei.','Durerea este cardinală, nu absentă.']],
 8,'Permutează durerea disproporționată IMA cu psoas, ansă aferentă sau Mittelschmerz.',['durere disproporţionată','examenul fizic']),

q(30,['Evaluarea endoscopică a intestinului subțire include:',
 ['Endoscopia cu capsulă: pacientul înghite o capsulă care transmite două imagini pe secundă; nu permite biopsii sau gesturi terapeutice','Enteroscopia cu balon dublu pliază intestinul „în acordeon” și vizualizează până la două treimi din intestinul subțire','Capsula permite biopsie și polipectomie, înlocuind enteroscopia','Standardul de aur rămâne doar clisma baritată gastrică','Limfoamele intestinale se diagnostichează prin manometrie anorectală'],'AB',206,'Tumori — Capsulă și balon dublu',
 'Contrastul capsulă (2 imagini/s, fără biopsie) versus balon dublu (până la 2/3, cu acces anterograd/retrograd).',
 ['Cele două imagini pe secundă și limita de biopsie sunt explicite.','Plierea în acordeon și cele două treimi sunt citate.','Incapacitatea de biopsie/terapie este dezavantajul major al capsulei.','Clisma baritată gastrică nu e etalonul tumorilor de intestin subțire.','Manometria anală nu diagnostichează limfomul.']],
 8,'Atribuie capsulei gesturi terapeutice pe care textul le neagă explicit.',['două imagini pe secundă','balon dublu']),

q(31,['Tumorile carcinoide ale intestinului subțire se caracterizează prin:',
 ['Origine în celulele Kulchitsky ale criptelor Lieberkühn; metastaze la 2% dacă primarul <1 cm și la 90% dacă >2 cm','40–50% din carcinoidele GI pornesc din apendice; intestinul subțire e a doua localizare, mai ales ileonul, multicentric la până la 30%','Ocluzia e cea mai frecventă prezentare, prin reacție desmoplastică mezenterică, nu prin dimensiunea primarului','Pentru tumorile de ileon este recomandată hemicolectomia dreaptă','Sindromul carcinoid dintr-un primar ileal apare fără metastaze hepatice, ficatul neepurând serotonina portală'],'ABCD',207,'Carcinoid — Biologie și prezentare',
 'Aplicarea pragurilor 2%/90% după mărime, a ponderii apendice/ileon, a desmoplaziei și a hemicolectomiei pentru ileon, față de fiziologia portală a sindromului.',
 ['Originea Kulchitsky și pragurile 2%/90% sunt explicite.','40–50%, locul 2 și 30% multicentric sunt citate.','Desmoplazia mezenterică ca mecanism obstructiv este descrisă.','Hemicolectomia dreaptă pentru ileon este menționată.','Ficatul epurează serotonina portală; sindromul cere metastaze hepatice sau primar extra-portal.']],
 8,'Anulează necesitatea metastazelor hepatice pentru sindromul carcinoid ileal, inversând epurarea portală.',['<l cm','>2 cm']),
];
