import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-327;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('orl',27,pdfOffset,`orl-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ORL_B=[
q(41,['Hipoacuzia de conducere se deosebește de cea neurosenzorială prin:',
 ['Pacientul descrie cel mai frecvent o „ureche înfundată”, prin pierderea amplificării sunetului','Poate rezulta din patologii ale conductului auditiv extern, ale membranei timpanice, ale urechii medii sau ale lanțului osicular','Hipoacuzia unilaterală orientează spre o cauză locală și impune evaluarea atentă a asimetriei pentru a exclude un proces neoplazic','Pacientul cu hipoacuzie neurosenzorială bilaterală aude mai bine în zgomot decât în liniște','Hipoacuzia de conducere este produsă de presbiacuzie, ototoxicitate sau neurinom de acustic'],'ABC',553,'Evaluare — Hipoacuzie de conducere versus neurosenzorială',
 'Contrastarea senzației de ureche înfundată și a sediilor de transmisie cu alerta de neoplasm în hipoacuzia asimetrică.',
 ['Senzația de ureche înfundată este caracterizarea explicită a hipoacuziei de conducere.','Cele patru sedii ale căii de transmisie sunt enumerate.','Unilateralitatea ca indiciu de cauză locală și de neoplasm este enunțată.','Pacienții cu SNHL bilaterală au dificultăți tocmai când este mult zgomot.','Presbiacuzia, ototoxicitatea și neurinomul figurează la hipoacuzia neurosenzorială, nu de conducere.']],
 8,'Mută presbiacuzia și neurinomul pe calea de transmisie și inversează relația SNHL–zgomot.',['ureche înfundată','Hipoacuzia de conducere']),

q(42,['Timpanograma plată, fără eficiență maximă în nicio poziție a membranei, sugerează:',
 ['Lichid în urechea medie (efuziune), perforația membranei timpanice sau obstrucția conductului auditiv extern','Presiune negativă izolată în urechea medie, cu maxim doar la deplasarea membranei spre exterior','Auz normal, cu maxim fără manipularea presiunii','Otoscleroză cu fixarea piciorului scăriței, fără lichid','Hipoacuzie neurosenzorială profundă, peste 90 dB'],'A',555,'Timpanometria — Curba plată',
 'Interpretarea curbei plate ca efuziune, perforație sau obstrucție de conduct, distinctă de presiunea negativă (curba C) și de curba normală A.',
 ['Textul leagă timpanograma plată de lichid, perforație sau obstrucție de conduct.','Maximul doar la deplasarea spre exterior descrie presiunea negativă (curba C).','Eficiența maximă fără manipulare este curba A normală.','Otoscleroza nu este interpretarea curbei plate din figură.','Pragul peste 90 dB definește hipoacuzia profundă audiometrică, nu timpanograma.']],
 8,'Permutează curbele A, B (plată) și C din aceeași figură de timpanometrie.',['timpanogramă plată','efuziune']),

q(43,['Otalgia agravată de masticație, cu istoric de traumă a ATM sau de intervenții dentare recente, orientează spre:',
 ['Afectarea structurilor miofasciale ale articulației temporo-mandibulare','Otita externă necrotizantă cu Pseudomonas, la diabetic','Colesteatomul cu osteonecroză enzimatică a oscioarelor','Paralizia Bell confirmată prin PCR pentru HSV','Glomus tympanicum cu masă pulsatilă în spatele timpanului'],'A',555,'Otalgia — Cauze non-otogenice și ATM',
 'Recunoașterea otalgiei reflectate de ATM/dentare, față de cauzele otogenice din același capitol.',
 ['Textul leagă otalgia la masticație, trauma ATM și stomatologia recentă de structurile miofasciale ale ATM.','Otita externă necrotizantă este o cauză otogenică la diabetic, nu patternul de masticație.','Colesteatomul se recunoaște otoscopic, nu prin durere la mestecat izolată.','Paralizia Bell este o neuropatie facială, nu otalgia de ATM.','Glomusul produce tinitus pulsatil și masă eritematoasă, nu otalgie de masticație.']],
 8,'Înlocuiește ATM-ul (cauză non-otogenică din tabel) cu otita necrotizantă, colesteatomul sau glomusul.',['otalgie','temporo-mandibulare']),

q(44,['Tinitusul pulsatil se deosebește de tinitusul continuu prin:',
 ['Este, de obicei, de natură vasculară','Tinitusul continuu de leziune cohleară variază ca intensitate cu zgomotul de fundal sau cu momentul zilei','Există medicamente cu eficiență demonstrată care îl suprimă în câteva zile','Tinitusul bilateral implică, de regulă, doar un neurinom de acustic unilateral','Tinitusul unilateral exclude patologia de cohlee sau de nerv'],'AB',555,'Tinitusul — Pulsatil versus continuu',
 'Separarea originii vasculare a tinitusului pulsatil de sunetul continuu cohlear, cu recunoașterea absenței unui tratament medicamentos dovedit.',
 ['Textul atribuie tinitusul pulsatil unei origini vasculare.','Variația intensității cu zgomotul și cu ora zilei este descrisă pentru leziunea cohleară.','Textul precizează că nu există medicamente cu eficiență dovedită.','Neurinomul este o cauză unilaterală; tinitusul bilateral poate fi toxicitate sistemică sau leziune binaurală.','Tinitusul unilateral implică patologie nervoasă sau cohleară, nu o exclude.']],
 8,'Inventă un tratament medicamentos eficient și inversează lateralitatea (neurinom unilateral versus tinitus bilateral).',['Tinitusul pulsatil','sunet continuu']),

q(45,['Rinoreea purulentă unilaterală sau epistaxisul la un copil sau la un pacient psihiatric trebuie să ridice suspiciunea de:',
 ['Corp străin intranazal','Polipoză nazală bilaterală de complex ostio-meatal','Rinită alergică mediată de IgE, cu teste cutanate pozitive','Atrezie coanală bilaterală de nou-născut','Osteom fronto-etmoidal asimptomatic'],'A',563,'Epistaxisul și rinoreea — Corp străin',
 'Recunoașterea corpului străin ca explicație a rinoreei purulente unilaterale la copil sau pacient psihiatric.',
 ['Textul cere suspiciunea de corp străin în rinoree purulentă unilaterală sau epistaxis la pediatrici sau psihiatrici.','Polipii sunt rar unilaterali; forma bilaterală nu explică rinoreea purulentă unilaterală.','Rinita alergică produce secreții subțiri albicioase, de obicei bilaterale.','Atrezia bilaterală este urgență neonatală de cale aeriană, nu rinoree purulentă la copilul mare.','Osteomul asimptomatic se monitorizează, nu produce rinoree purulentă unilaterală.']],
 8,'Înlocuiește corpul străin cu polipoza bilaterală sau rinita alergică, două cauze de secreție din același capitol.',['corpi stră','epistaxis']),

q(46,['Secrețiile nazale și sindromul picăturii postnazale:',
 ['Secrețiile transparente, unilaterale, pot apărea în fistula de LCR și impun recoltarea și analiza secreției','Sindromul picăturii postnazale poate determina disfagie, exacerbarea astmului, odinofagie sau disfonie','Secrețiile purulente, urât mirositoare, indică o infecție bacteriană','Secrețiile subțiri translucid-albicioase sunt tipice doar infecției fungice invazive cu Mucor','Absența secrețiilor la examenul nazal exclude diagnosticul de rinosinuzită'],'ABC',563,'Rinoreea — Fistula de LCR și picătura postnazală',
 'Recunoașterea secreției clare unilaterale ca alertă de LCR și a simptomelor picăturii postnazale, versus falsa excludere prin nas „uscat”.',
 ['Secreția transparentă unilaterală ca fistula de LCR, cu indicație de analiză, este explicită.','Lista de simptome ale picăturii postnazale este enumerată.','Secrețiile purulente fetide indică infecție bacteriană.','Secrețiile subțiri albicioase sunt frecvente în rinite alergice, vasomotorii sau virale, nu în mucormicoză.','Textul precizează că absența secrețiilor nu exclude diagnosticul.']],
 8,'Atribuie secreția albicioasă mucormicozei și tratează nasul uscat ca excludere de sinuzită.',['picăturii postnazale','Secreţiile transparente']),

q(47,['Telangiectazia ereditară hemoragică, cauză de epistaxis recurent, se caracterizează prin:',
 ['Transmitere autozomal dominantă, cu malformații arterio-venoase la mucoasa aerodigestivă','Fragilitate vasculară a mucoasei nazale, cu hemoragii nazale recurente','Transmitere recesivă legată de X, similară deficitului de G6PD','Lipsa oricărei malformații vasculare, sângerarea fiind doar traumatică digitală','Răspuns durabil la o singură cauterizare, fără recidivă'],'AB',563,'Epistaxisul — Telangiectazia ereditară hemoragică',
 'Recunoașterea transmiterii autozomal dominante și a MAV-urilor mucoasei aerodigestive ca substrat al epistaxisului recidivant.',
 ['Transmiterea AD și MAV-urile mucoasei aerodigestive sunt explicite.','Fragilitatea vasculară cu hemoragii recurente este descrisă.','Modelul nu este recesiv legat de X.','Malformațiile arterio-venoase sunt substratul, nu doar trauma digitală.','Epistaxisul este recurent prin însăși natura bolii.']],
 8,'Schimbă transmiterea AD cu X-linkatul G6PD și reduce boala la o cauză traumatică unică.',['Telangiectazia ereditară','autozomal dominantă']),

q(48,['În sinuzita cronică, măsurile care facilitează clearance-ul mucociliar și ventilația includ:',
 ['Sprayuri intranazale steroidiene topice, ca adiție importantă la antibiotic prin efect antiinflamator asupra ostiumului','Sprayuri nazale saline, expectorante, oprirea fumatului și creșterea aportului de fluide','Chirurgia concentrată pe complexul ostio-meatal, pentru restabilirea ventilației și a drenajului','Corticoterapia sistemică prelungită ca unică măsură, fără topițe sau igienă nazală','Abandonarea complexului ostio-meatal ca țintă chirurgicală, drenajul făcându-se doar prin meatul inferior'],'ABC',566,'Sinuzita cronică — Ostium, steroizi topici și chirurgie',
 'Integrarea steroizilor topici, a măsurilor de clearance și a rolului de pivot al complexului ostio-meatal în chirurgia sinuzitei cronice.',
 ['Rolul antiinflamator al spray-urilor steroidiene asupra ostiumului este explicit.','Salina, expectorantele, oprirea fumatului și fluidele sunt enumerate.','Chirurgia se concentrează pe complexul ostio-meatal.','Steroizii sistemici prelungiți nu înlocuiesc topițele și igiena.','Complexul ostio-meatal rămâne pivotul, nu meatul inferior.']],
 8,'Anulează pivotul ostio-meatal și înlocuiește steroizii topici cu o cură sistemică unică.',['complexului ostio-meatal','Spray-urile']),

q(49,['Cea mai des întâlnită tumoră ce implică sinusurile paranazale este:',
 ['Osteomul, adesea în regiunea fronto-etmoidală, frecvent descoperit accidental','Papilomul invertit, cu degenerare în 10–15%','Angiofibromul juvenil al adolescentului masculin','Neuroblastomul olfactiv (estezioneuroblastomul)','Rabdomiosarcomul de musculatură striată'],'A',566,'Neoplazii rinosinusale — Osteomul',
 'Identificarea osteomului ca tumora sinusală cea mai frecventă, distinctă de papilomul invertit, angiofibrom și tumorile maligne rare.',
 ['Textul numește osteomul cea mai des întâlnită tumoră a sinusurilor paranazale, fronto-etmoidală, adesea accidentală.','Papilomul invertit este invaziv local, cu 10–15% degenerare, nu cea mai frecventă.','Angiofibromul este tumora adolescentului masculin, nu cea mai frecventă.','Estezioneuroblastomul este o malignitate rară neuroectodermală.','Rabdomiosarcomul este o tumoră rară a musculaturii.']],
 8,'Înlocuiește osteomul (cea mai frecventă, adesea incidentală) cu papilomul invertit sau angiofibromul, mai „celebre” dar mai rare.',['Osteomul','sinusurile paranazale']),

q(50,['Disfagia și odinofagia orientează astfel:',
 ['Disfagia doar pentru solide sau progresivă (solide apoi lichide) orientează către un obstacol mecanic','Odinofagia cronică asociată acestui tip de disfagie poate indica o malignitate și impune laringoscopie și esofagoscopie, eventual biopsie','Senzația de înecare, mai ales cu lichide, sugerează lipsă de control a bolului în tulburări neurologice','Disfagia doar pentru lichide, cu sparing al solidelor, este semnul clasic al cancerului esofagian stenozant','Globus-ul asociază constant un deficit neurologic obiectiv, fără rol pentru reflux sau picătura postnazală'],'ABC',568,'Disfagia — Obstacol mecanic versus neurologic',
 'Separarea disfagiei pentru solide (mecanică, alertă oncologică) de înecarea cu lichide (neurologică) și de globus-ul iritativ.',
 ['Patternul solide/progresiv ca obstacol mecanic este explicit.','Odinofagia cronică ca indiciu de malignitate, cu endoscopie, este enunțată.','Înecarea cu lichide ca semn neurologic este descrisă.','Cancerul stenozant debutază la solide, nu la lichide.','Examenul în globus este adesea nesemnificativ; refluxul, picătura postnazală și iritanții trebuie considerați.']],
 8,'Inversează solide versus lichide între obstacolul mecanic și deficitul neurologic.',['Odinofagia cronică','obstacol mecanic']),

q(51,['Ingestia de caustice la nivelul cavității orale și al esofagului:',
 ['Alcalinele provoacă necroză de lichefiere, de obicei cu leziuni mai severe esofagiene','Acizii au ca efect necroza de coagulare','Severitatea leziunilor externe și orofaringiene poate să nu se coreleze cu extensia leziunilor esofagiene sau gastrice','Un aspect oral benign exclude leziunile distale severe','Alcalinele produc doar necroză de coagulare superficială, fără risc de perforație'],'ABC',568,'Ingestia de caustice — Lichefiere versus coagulare',
 'Contrastarea necrozei de lichefiere (alcaline, esofag) cu cea de coagulare (acizi) și recunoașterea discordanței oral–distal.',
 ['Necroza de lichefiere a alcalinelor, mai severă esofagian, este explicită.','Necroza de coagulare a acizilor este enunțată.','Lipsa de corelație oral–distal este subliniată.','Un aspect oral aparent benign poate masca leziuni distale severe.','Alcalinele lichidă, nu coagulează; perforația este un risc.']],
 8,'Oglindește lichefierea alcalină cu coagularea acidă și tratează gura „curată” ca excludere a leziunii esofagiene.',['necroză de lichefiere','necroza de coagulare']),

q(52,['Cea mai des întâlnită infecție fungică a cavității orale este:',
 ['Candidoza cauzată de Candida albicans','Mucormicoza (Rhizopus) invazivă de sinus','Aspergiloza rinosinusală la imunocompetent','Actinomicoza cervicală cu granulații sulfurate','Blastomicoza laringiană'],'A',568,'Stomatita fungică — Candida albicans',
 'Identificarea candidozei orale ca infecție fungică dominantă, distinctă de fungii rinosinusali oportuniști.',
 ['Textul numește candidoza prin Candida albicans cea mai des întâlnită infecție fungică orală.','Mucor/Rhizopus sunt cauze de infecție rinosinusală fulminantă la imunocompromis.','Aspergillus figurează alături de Phycomycetes la sinusuri, nu ca prima infecție orală.','Actinomicoza nu este infecția fungică orală dominantă din acest paragraf.','Blastomicoza laringiană nu este citată ca cea mai frecventă.']],
 8,'Înlocuiește Candida orală cu Mucor sau Aspergillus, agenții infecțiilor rinosinusale din capitol.',['Candida albicans','cea mai des întâlnită infecţie fungică']),

q(53,['Cadrul cartilaginos al laringelui cuprinde:',
 ['Nouă structuri cartilaginoase, dintre care trei nepereche și trei pereche','Nepereche: epiglota, tiroidul și cricoidul','Pereche: aritenoidele, corniculatele și cuneiformele','Cricoidul, singurul inel cartilaginos complet, are formă de inel cu pecete localizată posterior','Cartilajul tiroid este singurul inel complet, în formă de pecete posterior'],'ABCD',570,'Laringele — Anatomie cartilaginoasă',
 'Recunoașterea celor 9 cartilaje (3+3) și a identității cricoidului ca singurul inel complet, în formă de pecete posterior.',
 ['Cadrul de nouă structuri, trei nepereche și trei pereche, este explicit.','Cele trei nepereche sunt enumerate.','Cele trei pereche sunt enumerate.','Cricoidul este singurul inel complet, cu pecetea posterior.','Tiroidul este în formă de scut; inelul complet este cricoidul.']],
 8,'Oglindește inelul complet (cricoid) cu scutul tiroidian, lângă lista de 3+3 cartilaje.',['nouă structuri','cricoid']),

q(54,['Mușchiul crico-aritenoidian posterior se caracterizează prin:',
 ['Rotește aritenoidul către lateral, deschizând (abducție) corzile vocale pentru respirație','Restul mușchilor intrinseci închid (adducție) corzile pentru fonație, tuse și deglutiție','Mușchii extrinseci ascensionează și tensionează laringele ca pe un întreg','Este singurul adductor, inervat de nervul laringeu superior prin membrana tirohioidiană','Abducția este asigurată de crico-tiroidian, ramură a recurentului'],'ABC',570,'Laringele — Mușchi intrinseci și extrinseci',
 'Identificarea crico-aritenoidianului posterior ca unicul abductor, versus adducția celorlalți intrinseci și rolul extrinsecilor.',
 ['Rotația laterală și abducția pentru respirație sunt explicite.','Ceilalți intrinseci adductează pentru fonație, tuse și deglutiție.','Extrinsecii mobilizează laringele ca întreg.','Posteriorul este abductor, nu adductor; laringele superior inervează crico-tiroidianul.','Crico-tiroidianul este inervat de laringele superior, nu este abductorul principal.']],
 8,'Inversează abducția unică a posteriorului cu adducția și atribuie greșit inervația laringelui superior.',['crico-a','abducţie']),

q(55,['Hemoptizia, în semiologia ORL, poate indica:',
 ['O leziune hemoragică a tractului aero-digestiv superior, inclusiv sânge nazal drenat posterior și aspirat','Doar patologia pulmonară, sursele supra-glotice fiind excluse prin definiție','Otimpanul intact, fără a necesita inspectarea nasului sau a faringelui','Fixarea piciorului scăriței, ca în otoscleroză','Stridorul inspirator al laringomalaciei, fără sângerare'],'A',572,'Hemoptizia — Sursă aero-digestivă superioară',
 'Recunoașterea posibilității ca „hemoptizia” să fie sânge aspirat din nas sau din tractul aero-digestiv superior.',
 ['Textul cere excluderea aspirației sângelui dintr-o sursă aero-digestivă superioară, precum hemoragia nazală drenată posterior.','Semiologia clasică pulmonară nu exclude sursele superioare.','Nasul și faringele trebuie inspectate.','Otoscleroza produce hipoacuzie de transmisie, nu hemoptizie.','Laringomalacia produce stridor inspirator, nu hemoptizie.']],
 8,'Tratează hemoptizia ca semn strict pulmonar, ignorând drenajul posterior al epistaxisului din același capitol.',['Hemoptizia','aero-digestiv superior']),

q(56,['Stenoza traheală și subglotică postintubație:',
 ['Cea mai frecventă leziune internă este intubația prelungită; presiunea balonașului poate provoca ischemie și leziuni mucoase','Modificările cicatriciale pot apărea în zile până la luni de la detubare, pe măsură ce cicatricea se contractă','Segmentele mai scurte de 1 cm pot fi rezolvate prin excizii laser endoscopice și dilatații; mitomicina C topică a dat rezultate promițătoare','Stenoza scurtă impune de principiu rezecție segmentară cu anastomoză, laserul fiind inutil','Mitomicina C stimulează fibroblastele și este contraindicată după dilatație'],'ABC',574,'Stenoza subglotică și traheală postintubație',
 'Legarea ischemiei de balonaș, a ferestrei zile–luni și a laserului plus mitomicină pentru stenozele <1 cm.',
 ['Mecanismul intubație prelungită–presiune–ischemie este explicit.','Apariția în zile până la luni, prin contracția cicatricei, este descrisă.','Pragul sub 1 cm pentru laser/dilatații și mitomicina C sunt citate.','Rezecția cu anastomoză este, de regulă, necesară; stenoza scurtă poate fi endoscopică.','Mitomicina C este un inhibitor de activitate fibroblastică, nu un stimulator.']],
 8,'Inversează pragul de 1 cm (laser versus rezecție) și transformă inhibitorul fibroblastelor într-un stimulator.',['mitomicină C','intubaţia prelungită']),

q(57,['Adenita cervicală supurată la copil, fără ameliorare în 24–48 de ore de antibioterapie, impune:',
 ['Incizia și drenajul colecției','Observație încă 2 săptămâni, fluctuenta fiind suficientă','Doar vaccin pneumococic, fără drenaj','Operația Sistrunk, ca în chistul tireoglos','Embolizarea arterei maxilare interne, ca în epistaxisul posterior'],'A',580,'Adenita cervicală — Drenajul supurației',
 'Recunoașterea ferestrei 24–48 de ore către incizie și drenaj când antibioterapia eșuează la copilul cu adenită supurată.',
 ['Textul cere incizie și drenaj dacă supurația se superficializează sau nu se ameliorează în 24–48 de ore.','Așteptarea prelungită nu este strategia descrisă.','Vaccinul nu drenează un abces format.','Sistrunk este operația chistului tireoglos, nu a adenitei.','Embolizarea maxilarei interne privește epistaxisul posterior.']],
 8,'Înlocuiește drenajul adenitei cu Sistrunk sau embolizarea maxilarei, două gesturi din același capitol de cap și gât.',['24--48 de ore','drenajul']),

q(58,['Boala ghearelor de pisică (adenită granulomatoasă):',
 ['Este cauzată de zgârietura de feline sau canide; lanțul ganglionar ipsilateral se tumefiază și este sensibil','Manifestările sistemice inițiale includ subfebră, stare generală alterată și mialgii','Adenopatia se poate remite spontan; tratamentul este suportiv, iar antibioticele cu spectru Gram-negativ pot scurta evoluția','Diagnosticul se bazează pe serologia Epstein-Barr, identică mononucleozei','Excizia tuturor nodulilor este primul gest, înaintea oricărei observații'],'ABC',580,'Adenita granulomatoasă — Boala ghearelor de pisică',
 'Recunoașterea zgârieturii felină/canină, a tabloului sistemic blând și a tratamentului suportiv, versus falsa echivalare cu EBV.',
 ['Mecanismul zgârieturii și adenopatia ipsilaterală sensibilă sunt explicite.','Subfebră, alterare și mialgii sunt enumerate.','Remisia spontană, tratamentul suportiv și scurtarea cu antibiotice Gram-negative sunt descrise.','Serologia EBV ține de mononucleoză, listată alături de Bartonella, nu este testul bolii ghearelor.','Excizia (sau puncția) este rezervată supurației, nu este primul gest.']],
 8,'Confundă Bartonella cu EBV și pune excizia înaintea evoluției suportive.',['ghearelor de pisică','subfebră']),

q(59,['Chistul dermoid cervical se deosebește de chistul de canal tireoglos prin:',
 ['Nu își modifică poziția odată cu deglutiția, nefiind atașat de osul hioid','Este adesea situat superficial de musculatura prelaringiană','Apare, de regulă, în primele două decade, ca formațiune moale, nedureroasă, mediană','Ascensionează la protruzia limbii, fiind legat de foramen cecum','Se tratează prin operația Sistrunk, cu rezecția corpului hioidului'],'ABC',581,'Chistul dermoid versus canalul tireoglos',
 'Contrastarea imobilității la deglutiție și a sediului superficial prelaringian cu mobilitatea tireoglosului legat de hioid.',
 ['Lipsa deplasării cu deglutiția, prin absența atașării de hioid, este explicită.','Sediul superficial de musculatura prelaringiană este enunțat.','Vârsta (primele două decade) și caracterul moale median nedureros sunt descrise.','Ascensionarea la protruzia limbii definește chistul tireoglos, nu dermoidul.','Sistrunk este tratamentul anomaliei tireoglose; dermoidul se excizează complet.']],
 8,'Atribuie dermoidului semnul limbii și operația Sistrunk, discriminatorii clasice ale canalului tireoglos.',['Chisturile dermoide','osul hioid']),

q(60,['Higromul chistic și hemangiomul congenital cervical:',
 ['Higroamele sunt malformații limfatice cavernoase, cel mai frecvent în triunghiul cervical posterior, identificate la naștere sau în primii doi ani','IRM este necesar înaintea exciziei, pentru delimitare și pentru a exclude extensia toracică','Majoritatea hemangioamelor scad spontan până la vârsta de 5 ani, deci tratamentul conservator este justificat','Hemangioamele subglotice pot fi tratate prin excizii laser cu CO2 endoscopice sau prin administrare de β-blocante','Higromul este bine încapsulat și se excizează ușor, fără risc asupra nervilor sau vaselor'],'ABCD',582,'Higromul chistic și hemangiomul congenital',
 'Recunoașterea predilecției pentru triunghiul posterior, a IRM preoperator și a regresiei hemangiomului până la 5 ani, cu alerta de hemangiom subglotic.',
 ['Localizarea posterioară, vârsta și natura limfatică cavernosă sunt explicite.','Necesitatea IRM pentru extensia toracică este enunțată.','Regresia până la 5 ani și conservatorismul sunt descrise.','Laserul CO2 endoscopic și β-blocantele sunt citate pentru hemangiomul subglotic.','Higroamele sunt neîncapsulate, dezorganizate și înglobează nervi și vase, făcând excizia dificilă.']],
 8,'Descrie higromul ca leziune încapsulată ușor de scos și uită laserul/β-blocantul din hemangiomul subglotic.',['Higroamele chistice','5 ani']),
];
