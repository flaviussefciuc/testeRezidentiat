import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-1059;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hiv',37,pdfOffset,`hiv-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HIV_C=[
q(46,['De la descrierea SIDA (1981) și a HIV (1983), estimările globale citate în text sunt:',
 ['peste 78 de milioane de persoane infectate de-a lungul timpului','39 de milioane de decese','36,9 milioane de oameni care trăiesc cu HIV la cea mai recentă estimare','21,7 milioane de persoane infectate vreodată, fără decese înregistrate','sub 10 milioane de persoane care trăiesc cu HIV'],'ABC',1425,'HIV — Epidemiologie globală: bilanț istoric',
 'Reținerea trio-ului 78 milioane infectați / 39 milioane decese / 36,9 milioane trăiesc cu HIV, distinct de 21,7 milioane aflați sub ARV de pe pagina următoare.',
 ['Textul estimează peste 78 de milioane de persoane infectate.','39 de milioane de decese sunt citate.','36,9 milioane trăiesc cu HIV la cea mai recentă estimare.','21,7 milioane este numărul celor cu acces la ARV, nu totalul infectați vreodată.','Textul plasează prevalența globală la 36,9 milioane, nu sub 10.']],
 8,'Permutează 21,7 milioane (ARV) peste bilanțul istoric 78/39/36,9, trei cifre de pe aceeași deschidere de capitol.',['78 de milioane','36,9 milioane'],[1426]),

q(47,['Africa subsahariană în epidemia HIV, conform textului:',
 ['Africa de Sud și de Est adăpostește 6,2% din populația globului, dar peste jumătate din populația lumii diagnosticată cu HIV','În fiecare an se înregistrează aici 43% din cazurile noi de HIV','Swaziland are cea mai mare prevalență mondială, 27,2% dintre adulții 15-49 de ani','Calea predominantă de transmitere în regiune este prin consum de droguri injectabile, nu contact heterosexual','Prevalența este identică la femeile tinere și la bărbați'],'ABC',1426,'HIV — Epidemiologie: Africa subsahariană',
 'Cuantificarea disproporției 6,2% populație versus >50% din cazuri și 43% din incidente, plus prevalența 27,2% din Swaziland.',
 ['Disproporția 6,2% versus peste jumătate din diagnostice este explicită.','43% din cazurile noi anuale sunt citate.','27,2% la adulții 15-49 din Swaziland este cifra din text.','Calea predominantă este contactul heterosexual.','Infecția este aproape de două ori mai frecventă la femeile tinere (3,2%) decât la bărbați (1,6%).']],
 8,'Înlocuiește calea heterosexuală cu drogurile injectabile și anulează gradientul pe sexe, pe fondul a trei procente reale.',['6,2% din populaţia','27,2% dintre adulţii']),

q(48,['În Africa subsahariană, prevalența HIV la femeile tinere comparativ cu bărbații este, conform textului:',
 ['Aproape dublă: medie 3,2% versus 1,6%','Identică, 1,6% în ambele sexe','Mai mică la femei (0,8%) decât la bărbați (3,2%)','Limitată la femeile peste 50 de ani','Corelată doar cu transmiterea verticală, nu cu contactul heterosexual'],'A',1426,'HIV — Epidemiologie: gradientul pe sexe în Africa',
 'Reținerea prevalențelor 3,2% la femeile tinere versus 1,6% la bărbați, pe fondul transmiterii heterosexuale predominante.',
 ['Textul precizează aproape dublu: 3,2% versus 1,6%.','Valorile nu sunt identice.','Direcția gradientului este inversată în această opțiune.','Textul vizează femeile tinere, nu grupa peste 50 de ani.','Explicațiile sunt complexe, dar calea predominantă este contactul heterosexual.']],
 8,'Permutează 3,2% și 1,6% între sexe și mută gradientul pe grupe de vârstă din alte paragrafe epidemiologice.',['3,2%','1,6%']),

q(49,['Conform ghidurilor britanice de testare HIV (Cadranul 37.9), testarea universală a tuturor pacienților se recomandă în:',
 ['Clinicile de ginecologie sau de boli cu transmitere sexuală','Servicii de consultații prenatale și secții unde se practică întreruperi de sarcină','Centre pentru persoanele dependente de droguri','Servicii de îngrijire pentru tuberculoză, hepatită B și C și limfom','Cabinete de medicină de familie din zone cu prevalență sub 0,1 la 1000, fără alți factori de risc'],'ABCD',1427,'HIV — Indicațiile testării: servicii cu testare universală',
 'Recunoașterea setărilor de testare universală (BTS, prenatal, droguri, TB/VHB/VHC/limfom) versus pragul de prevalență înaltă din asistența primară.',
 ['Clinicile de ginecologie/BTS sunt listate.','Prenatalul și întreruperile de sarcină sunt listate.','Centrele pentru dependenți de droguri sunt listate.','TB, hepatite B/C și limfomul sunt listate.','În asistența primară testarea universală vizează zonele cu prevalență înaltă (≥2/1000), nu pe cele cu prevalență foarte mică.']],
 8,'Mută pragul de 2/1000 al asistenței primare spre o prevalență neglijabilă, pe fondul unei liste reale de servicii universale.',['Clinicile de ginecologie','prevalenţă înaltă']),

q(50,['La expunerea inițială, infecția HIV permanentă se stabilește, de obicei, prin:',
 ['Transportul virusului de către celulele dendritice de pe mucoase spre ganglionii limfatici regionali, de către un „virus fondator" (founder virus)','Infecția directă a miocitelor scheletice, fără pasaj ganglionar','Integrarea în genomul eritrocitelor mature, care nu au nucleu','Colonizarea keratinocitelor, fără celule dendritice','Replicare limitată la nivelul trombocitelor circulante'],'A',1429,'HIV — Patogenie: virusul fondator și celulele dendritice',
 'Recunoașterea traseului mucoasă → celule dendritice → ganglion regional, cu un virus fondator care stabilește infecția permanentă.',
 ['Textul descrie transportul de către celulele dendritice spre ganglionii regionali, de obicei de către un virus fondator.','Miocitele scheletice nu sunt poarta citată.','Eritrocitele mature nu au nucleu și nu sunt ținta de integrare descrisă.','Celulele dendritice, nu keratinocitele ca atare, transportă virusul.','Trombocitele nu sunt rezervorul de stabilire a infecției permanente.']],
 8,'Înlocuiește traseul dendritice–ganglion cu ținte celulare absente din paragraf (miocit, eritrocit, trombocit).',['virus fondator','celulele dendritice']),

q(51,['Răspunsul imun al gazdei în infecția HIV include:',
 ['Producția de virus de către celulele infectate durează aproximativ 2 zile și este probabil limitată de moartea celulei','Celulele NK sunt implicate, deși mutațiile de scăpare ale populației virale le compromit efectele antivirale','Anticorpii neutralizanți apar la aproximativ 12 săptămâni de la infecție','Anticorpii neutralizanți apar în primele 48 de ore și sterilizează mucusul','Celulele NK elimină invariabil virusul fondator înainte de integrare'],'ABC',1429,'HIV — Patogenie: cinetică celulară, NK și anticorpi',
 'Corelarea duratei de 2 zile a producției virale cu limitele NK (mutații de scăpare) și cu apariția anticorpilor neutralizanți la 12 săptămâni.',
 ['Durata de aproximativ 2 zile este explicită.','Rolul NK și mutațiile de scăpare sunt citate.','Cele 12 săptămâni până la anticorpii neutralizanți sunt din text.','48 de ore nu este intervalul citat; 12 săptămâni este.','Textul nu atribuie NK sterilizarea virusului fondator.']],
 8,'Mută anticorpii de la 12 săptămâni la 48 de ore (fereastra infecției acute) și supraestimează NK.',['aproximativ 2 zile','12 săptămâni']),

q(52,['Sistemele de clasificare OMS și CDC ale infecției HIV:',
 ['Sunt cele mai des utilizate; aplicabilitatea principală este monitorizarea și supravegherea populației, mai degrabă decât asistența clinică de rutină','Clasificarea CDC (stadiile 0-3) combină serologie HIV pozitivă, numărul de CD4 și condițiile care definesc SIDA','Înlocuiesc viremia și CD4 în decizia de inițiere a ARV la fiecare vizită','Stadiul CDC 0 înseamnă SIDA cu CD4 sub 50/mm³','Sistemul OMS exclude testul de anticorpi anti-HIV'],'AB',1430,'HIV — Clasificarea OMS și CDC',
 'Recunoașterea rolului de supraveghere (nu de rutină clinică) și a componentelor stadiilor CDC 0-3.',
 ['Textul plasează aplicabilitatea principală la supravegherea populației.','Combinația serologie–CD4–condiții SIDA pentru CDC 0-3 este explicită.','Textul le delimitează de asistența clinică de rutină.','Stadiile 0-3 combină laborator și clinic, nu definesc stadiul 0 ca SIDA cu CD4<50.','Sistemul OMS include un test de anticorpi anti-HIV pozitiv.']],
 8,'Transformă instrumentele de supraveghere în criterii de prescriere ARV și inversează conținutul stadiului 0.',['Centrului pentru controlul bolilor','stadiile 0-3']),

q(53,['Complexul demenței asociate SIDA (ADC) și polineuropatia senzitivă:',
 ['ADC variază de la pierderi ușoare de memorie până la deficit cognitiv sever, tulburări de personalitate și lentoare psihomotorie','Histologic, la nivelul măduvei se poate observa mielopatie vacuolară; CT arată atrofie cerebrală, iar RMN leziuni T2 hiperintense în substanța albă','LCR este de obicei normal, deși poate exista o creștere a proteinelor','Polineuropatia senzitivă apare în stadii avansate, predominant la membrele inferioare, cu durere intensă la picioare în formele severe','EEG este patognomonic, cu complexe periodice trifazice specifice ADC'],'ABCD',1431,'HIV — ADC, mielopatie vacuolară și polineuropatie',
 'Recunoașterea spectrului ADC, a mielopatiei vacuolare și a LCR-ului adesea normal, plus polineuropatia dureroasă de picioare.',
 ['Spectrul de la memorie ușoară la deficit sever este explicit.','Mielopatia vacuolară, atrofia CT și leziunile T2 sunt citate.','LCR de obicei normal, posibil proteine crescute, este din text.','Predominanța la membrele inferioare și durerea de picioare sunt descrise.','EEG evidențiază modificări nespecifice de encefalopatie, nu complexe patognomonice.']],
 8,'Atribuie EEG-ului un pattern patognomonic pe care textul îl califică nespecific, pe fondul unor semne imagistice reale.',['mielopatiei vacuolare','Polineuropatia senzitivă']),

q(54,['Leucoplazia păroasă orală, semn de imunosupresie asociat EBV, apare intermitent:',
 ['pe marginile laterale ale limbii sau pe mucoasa bucală, ca zone albicioase, reliefate','doar pe palatul dur, ca peteșii','ca ulcerații aftoase pe pilierii amigdalieni','ca depozit detersabil pe fața dorsală a limbii, ca în candidoză','ca leziuni violacee conjunctivale, ca în sarcomul Kaposi'],'A',1447,'HIV — Leucoplazia păroasă orală (EBV)',
 'Localizarea leucoplaziei păroase pe marginile laterale ale limbii, distinct de candidoză, afte și Kaposi.',
 ['Textul plasează leziunile intermitent pe marginile laterale ale limbii sau mucoasa bucală, albicioase și reliefate.','Palatul cu peteșii nu este descrierea citată.','Ulcerațiile aftoase sunt o altă manifestare mucoasă.','Candidoza este detersabilă; leucoplazia păroasă este reliefată, produsă de EBV.','Leziunile violacee conjunctivale țin de sarcomul Kaposi.']],
 8,'Permutează trei leziuni orale/oculare reale din capitol (afte, candidoză, Kaposi) peste localizarea laterală a leucoplaziei păroase.',['Leucoplazia paroasa','marginile laterale ale limbii']),

q(55,['Complicațiile digestive și renale netratate ale HIV includ:',
 ['Enteropatia HIV cu grade variabile de atrofie a vilozităților, asociată diareei cronice fără alt patogen identificat','Hipoclorhidria, cu consecințe asupra absorbției medicamentelor și asupra dezvoltării excesive a bacteriilor intestinale','Tenofovirul asociat cu sindromul Fanconi','HIVAN ca glomeruloscleroză rapidă predominantă la femeile caucaziene tinere, fără legătură cu heroina','Celulele limfoide rectale fără rol de rezervor în contactul anal'],'ABC',1432,'HIV — Enteropatie, hipoclorhidrie și tenofovir/Fanconi',
 'Recunoașterea atrofiei vilozitare, a hipoclorhidriei și a Fanconi prin tenofovir, distinct de epidemiologia HIVAN (bărbați de rasă neagră, heroină).',
 ['Enteropatia cu atrofie vilozitară este explicită.','Hipoclorhidria și consecințele ei sunt citate.','Asocierea tenofovir–Fanconi este menționată.','HIVAN este cel mai frecvent la bărbații de rasă neagră și poate fi exacerbată de heroină.','Textul descrie tesutul limfoid rectal ca țintă și rezervor.']],
 8,'Inversează profilul HIVAN (rasă, sex, heroină) și neagă rezervorul rectal, ambele pe aceeași pagină.',['sindromul Fanconi','Hipoclorhidria']),

q(56,['Pneumopatia interstițială limfoidă (LIP) în infecția HIV:',
 ['A fost descrisă frecvent la copiii cu HIV, dar este rar întâlnită la adulți','Infiltratul alveolar conține limfocite, plasmocite și limfoblaști; virusul Epstein-Barr poate fi decelat','Este forma tipică de pneumonie a adultului cu CD4 peste 500/mm³','Se datorează Pneumocystis, cu aspect de sticlă mată ca în PCP','Răspunde doar la co-trimoxazol, EBV nefiind implicat'],'AB',1432,'HIV — Pneumopatia interstițială limfoidă',
 'Recunoașterea LIP ca entitate pediatrică, cu infiltrat linfo-plasmocitar și posibil EBV, rară la adult.',
 ['Predominanța pediatrică și raritatea la adulți sunt explicite.','Compoziția infiltratului și EBV sunt citate.','Nu este pneumonia tipică a adultului cu CD4 păstrat.','Pneumocystis și sticla mată țin de PCP, nu de definiția LIP.','Textul leagă LIP de infiltrat linfo-plasmocitar și EBV, nu de co-trimoxazol ca unica terapie.']],
 8,'Confundă LIP-ul pediatric cu PCP-ul adultului (sticlă mată, co-trimoxazol) de pe paginile de infecții oportuniste.',['limfoida {LIP)','Virusul Epstein-Barr']),

q(57,['Consecințele clinice ale afectării imune prin HIV depind de:',
 ['Expunerea de-a lungul vieții; multe episoade sunt reactivări ale unei infecții latente, iar factorii geografici determină flora','Virulența microorganismului: M. tuberculosis, Candida și virusurile herpetice dau manifestări și la imunodepresie ușoară','Gradul de imunodepresie: la CD4 sub 100/mm³ pot apărea infecții diseminate cu agenți de virulență scăzută, precum MAI și Cryptosporidium','Pentru infecțiile cu virulență scăzută de acest tip este indicat tratament profilactic','Microorganismele puțin virulente produc boală încă din stadiile incipiente, înaintea TB și a candidozei'],'ABCD',1433,'HIV — Factorii care modulează expresia clinică',
 'Ierarhizarea expunerii, virulenței (TB/Candida/herpes devreme) și a pragului CD4<100 pentru MAI/Cryptosporidium, cu indicație de profilaxie.',
 ['Expunerea, reactivarea și geografia sunt primul factor.','Virulența înaltă a TB, Candida și herpes la imunodepresie ușoară este explicită.','Pragul CD4<100 pentru MAI și Cryptosporidium este citat.','Profilaxia pentru acest tip de infecții este indicată.','Textul inversează: puțin virulentele apar tardiv, la imunosupresie severă.']],
 8,'Inversează calendarul virulenței (precoce versus tardiv) pe fondul pragului CD4<100 real.',['CD4 <100/mm3','Cryptosporidium']),

q(58,['Persoanele nou diagnosticate cu HIV ar trebui evaluate de un medic specialist în termen de:',
 ['șase luni, dacă sunt asimptomatice','două săptămâni de la diagnostic, sau mai rapid dacă sunt simptomatice ori au alte afecțiuni acute','un an, până la prima determinare de viremie','24 de ore, doar dacă CD4 este deja sub 50/mm³','trei ani, cât latența clinică medie'],'B',1434,'HIV — Evaluarea inițială: intervalul până la specialist',
 'Reținerea ferestrei de două săptămâni (mai rapid dacă simptomatic) pentru transferul către serviciul specializat.',
 ['Șase luni depășește intervalul citat.','Textul cere evaluare de specialist în două săptămâni, sau mai rapid dacă simptomatic/acut.','Un an nu este intervalul din paragraf.','Textul nu limitează urgența la CD4<50.','Trei ani nu este fereastra de evaluare inițială.']],
 8,'Toate intervalele apar în capitol (latență, monitorizare); doar două săptămâni este cel al evaluării inițiale.',['două săptămâni','nou diagnosticati']),

q(59,['Genotiparea virală și monitorizarea înainte de ARV:',
 ['Analiza genotipului este recomandată pentru toți nou-diagnosticații; proba cea mai adecvată este cea recoltată cât mai aproape de diagnostic','Rezultatele ghidează terapia ARV, putându-se identifica tulpini rezistente de novo','Pacienții care nu inițiază ARV sunt monitorizați de 2-4 ori pe an, sau la intervale mai mari dacă CD4 este crescut','Genotiparea se amână până după eșecul primei linii, proba de diagnostic fiind inutilă','Pacienții fără ARV nu mai necesită nicio vizită până la un eveniment definitoriu SIDA'],'ABC',1434,'HIV — Genotip la diagnostic și monitorizarea pre-ARV',
 'Aplicarea genotipării la toți nou-diagnosticații (probă precoce) și a ritmului 2-4 vizite/an la cei care amână ARV.',
 ['Recomandarea universală și proba cât mai aproape de diagnostic sunt explicite.','Ghidarea ARV și tulpinile rezistente de novo sunt citate.','Ritmul 2-4 ori pe an (sau mai rar la CD4 crescut) este din text.','Textul cere genotiparea la diagnostic, nu după eșec.','Monitorizarea rămâne necesară pentru rata de progresie și opțiunile de tratament.']],
 8,'Amână genotipul până după eșec, opusul recomandării de probă la diagnostic.',['genotipului viral','2-4 ori pe an']),

q(60,['Atazanavirul, dintre inhibitorii de protează, se caracterizează prin:',
 ['Creșterea nivelului plasmatic al bilirubinei neconjugate, putând produce icter','Absența oricărui efect digestiv sau lipidic, spre deosebire de darunavir','Inhibarea selectivă a integrazei, nu a proteazei','Administrarea fără boosting, ritonavirul fiind contraindicat','Lipsa activității ca agent de primă linie'],'A',1438,'HIV — Atazanavir: hiperbilirubinemie neconjugată',
 'Recunoașterea icterului prin bilirubină neconjugată ca particularitate a atazanavirului, distinct de mecanismul INSTI.',
 ['Textul precizează creșterea bilirubinei neconjugate și posibilitatea icterului.','Atazanavirul poate produce tulburări gastro-intestinale și ale metabolismului lipidic, ca și darunavirul.','Inhibarea integrazei este a INSTI, nu a atazanavirului.','Atazanavirul boostat este frecvent folosit ca agent de primă linie.','Textul îl plasează, împreună cu darunavirul boostat, ca agent de linia întâi.']],
 8,'Confundă atazanavirul cu un INSTI și neagă boosting-ul/linia întâi, pe fondul icterului real prin bilirubină neconjugată.',['bilirubinei neconjugate','Atazanavirul']),

q(61,['Potențarea („boosting") inhibitorilor de protează cu doze mici de ritonavir sau cobicistat:',
 ['Blochează metabolizarea via citocrom P450, crescând timpul de înjumătățire și concentrațiile plasmatice, cu mai puține pastile','Crește eficacitatea și reduce riscul de rezistență','Dezavantajele includ polipragmazia, alte interacțiuni și risc crescut de tulburări lipidice, în particular trigliceride','Unii IP au fost asociați cu afectarea coagulării la pacienții cu hemofilie','Boosting-ul scade concentrațiile de IP și crește riscul de rezistență, de aceea se evită la naivi'],'ABCD',1438,'HIV — Boosting-ul inhibitorilor de protează',
 'Echilibrarea câștigului farmacocinetic al boosting-ului (T1/2, pastile, rezistență) cu polipragmazia, interacțiunile, trigliceridele și hemofilia.',
 ['Mecanismul P450 și creșterea T1/2/concentrațiilor sunt explicite.','Eficacitatea sporită și rezistența redusă sunt citate.','Dezavantajele, inclusiv trigliceridele, sunt enumerate.','Asocierea cu coagularea la hemofilici este menționată.','Boosting-ul crește, nu scade, concentrațiile de IP.']],
 8,'Inversează direcția boosting-ului (scade concentrațiile) deși restul listei reproduce avantajele reale din paragraf.',['boosting','trigliceride']),

q(62,['Întreruperea unui ARV cu timp de înjumătățire lung poate determina o coadă subterapeutică („subtherapeutic drug tail") care:',
 ['Favorizează apariția tulpinilor rezistente','Sterilizează rezervoarele și previne arhivarea mutațiilor','Este indiferentă, varianta sălbatică nemaiputând reveni','Impune genotipare doar la 6 luni după oprire, nu sub tratament','Este un avantaj al INNRT, motiv pentru oprirea lor bruscă'],'A',1439,'HIV — Rezistență: coada subterapeutică',
 'Recunoașterea „drug tail” de după oprirea unui ARV cu T1/2 lung ca fereastră de selecție a rezistenței.',
 ['Textul leagă coada subterapeutică de apariția tulpinilor rezistente.','Arhivarea mutațiilor este descrisă separat; coada nu sterilizează rezervoarele.','Varianta sălbatică redevine dominantă în absența presiunii, dar coada selectează rezistență.','Genotiparea se face pe probe sub tratament.','INNRT au barieră genetică joasă; oprirea bruscă nu este un avantaj.']],
 8,'Transformă coada subterapeutică într-un beneficiu, opusul selecției de rezistență descrise în cadran.',['subtherapeutic drug tail','timp de înjumătăţire lung']),

q(63,['Eșecul virusologic, definit prin două determinări succesive ale viremiei peste 400 copii/ml după supresie anterioară:',
 ['Necesită investigații suplimentare, inclusiv genotipare virală','Noul regim trebuie bazat pe cel puțin doi agenți noi la care virusul este sensibil','Dacă opțiunea adecvată este disponibilă, se inițiază cât mai curând posibil','Se așteaptă scăderea spontană a viremiei 6 luni, fără genotip','Noul regim poate conține un singur agent activ, restul fiind reciclați indiferent de rezistență'],'ABC',1440,'HIV — Eșec virusologic: pragul 400 copii/ml',
 'Aplicarea definiției (două viremii >400) și a regulii a cel puțin doi agenți noi activi, inițiați fără întârziere.',
 ['Investigațiile și genotiparea sunt cerute.','Cel puțin doi agenți noi sensibili sunt explicit.','Inițierea cât mai curând este citată.','Așteptarea 6 luni contrazice urgența schimbării.','Un singur agent activ nu îndeplinește regula celor doi agenți noi.']],
 8,'Înlocuiește regula celor doi agenți noi cu expectativă sau reciclară, pe fondul pragului 400 copii/ml ușor de confundat cu 50 sau 200.',['peste 400 copii/ml','cel puţin doi agenţi noi']),

q(64,['Metabolismul osos la pacientul cu HIV:',
 ['Scăderea densității osoase s-a observat odată cu inițierea ARV, mai ales pe regimuri cu tenofovir; TAF pare să aibă toxicitate osoasă mai redusă','Evaluarea riscului de fractură prin scorul FRAX se face de rutină la toți peste 50 de ani, la femeile la menopauză sau în prezența altor factori de risc','Tenofovirul DF protejează masa osoasă, TAF fiind mai toxic','FRAX este rezervat copiilor cu LIP, nu adulților','Fracturile de fragilitate nu au fost raportate la pacienții cu HIV'],'AB',1441,'HIV — Densitate osoasă, tenofovir/TAF și FRAX',
 'Corelarea scăderii DMO la inițierea tenofovirului (TAF mai blând) cu FRAX de rutină după 50 de ani/menopauză.',
 ['Efectul tenofovirului și profilul mai bun al TAF sunt explicite.','FRAX la >50 ani, menopauză sau alți factori de risc este citat.','Direcția toxicității este inversată.','FRAX vizează adulții la risc, nu copiii cu LIP.','Textul raportează DMO scăzută și fracturi de fragilitate.']],
 8,'Inversează toxicitatea osoasă TDF versus TAF și mută FRAX pe seama LIP pediatric.',['Tenofovir alafenamida','scorul FRAX']),

q(65,['Inițierea ARV în infecția acută HIV și prevenirea IRIS:',
 ['ARV trebuie inițiat imediat la toți cei care se prezintă cu infecție acută HIV','În acest stadiu diversitatea virală este redusă, iar capacitatea imunologică este încă păstrată','Pentru a evita IRIS în TB și criptococoză, tratamentul specific se dă câteva săptămâni (în medie 4) înaintea ARV','IRIS apare de obicei la cei cu imunodepresie importantă la inițierea ARV','Infecția acută contraindică ARV până la 6 luni, pentru a nu arhiva rezistență'],'ABCD',1441,'HIV — Infecția acută și fereastra IRIS de 4 săptămâni',
 'Contrastarea inițierii imediate în infecția acută (diversitate redusă) cu amânarea medie de 4 săptămâni în TB/criptococoză pentru IRIS.',
 ['Inițierea imediată în infecția acută este explicită.','Diversitatea redusă și capacitatea imună păstrată sunt citate.','Fereastra medie de 4 săptămâni pentru TB/Cryptococcus este din text.','Contextul de imunodepresie importantă al IRIS este descris.','Textul cere ARV imediat în infecția acută, nu amânare 6 luni.']],
 8,'Importă fereastra de 6 luni a primoinfecției ca interdicție ARV, opusul inițierii imediate din acest paragraf.',['infectie acuta HIV','în medie 4 săptămâni'],[1440]),

q(66,['Factorii asociați cu prognostic nefavorabil în meningita criptococică la pacientul cu HIV sunt:',
 ['Număr mare de fungi în LCR, număr mic de leucocite în LCR și alterarea stării de conștiență la prezentare','Titrul de antigen care se negativează rapid sub tratament','Redoarea de ceafă marcată, ca semn de inflamație viguroasă protectoare','Absența antigenului criptococic din LCR','Culturile negative din sânge, care exclud diseminarea'],'A',1444,'HIV — Criptococoză: markeri de prognostic',
 'Reținerea triadei de prognostic nefavorabil (fungi mulți, leucocite puține, conștiență alterată), distinct de antigenul care de obicei nu se negativează.',
 ['Cei trei factori sunt enumerați explicit.','Titrul scade semnificativ, dar de obicei nu se negativează; nu este markerul de prognostic citat.','Redoarea poate lipsi prin răspuns inflamator anormal.','Antigenul din LCR poate fi pozitiv în titruri variabile.','Criptococii pot fi identificați și în culturi din sânge; negativul nu este criteriul de prognostic.']],
 8,'Înlocuiește triada de prognostic cu negativarea antigenului, pe care textul o descrie ca rară.',['număr mare de fungi','alterarea stării de constienta']),

q(67,['În pneumonia cu Pneumocystis, dincolo de co-trimoxazol:',
 ['Atovaquona sau clindamicină plus primachină pot fi alternative','În cazurile severe, corticoterapia sistemică reduce mortalitatea; hipoxia severă poate necesita CPAP sau ventilație, iar evoluția se poate complica cu pneumotorax','Pentamidina în aerosoli protejează doar plămânii, penetrează ineficient lobii superiori, iar recurențele pot fi atipice sau extrapulmonare','Corticoterapia este indicată și în formele ușoare orale','ARV se amână până după un an de profilaxie secundară'],'ABC',1444,'HIV — PCP: alternative, steroizi, pneumotorax și pentamidină',
 'Poziționarea atovaquonei/clinda-primachinei, a steroizilor doar în formele severe (risc de pneumotorax) și a limitelor pentamidinei inhalatorii.',
 ['Cele două alternative sunt citate.','Steroizii în sever, CPAP/ventilație și pneumotoraxul sunt descrise.','Limitele pentamidinei (lobi superiori, forme atipice/extrapulmonare) sunt explicite.','În formele ușoare orale corticoterapia nu este indicată.','ARV trebuie inițiat cât mai precoce la netratați.']],
 8,'Extinde steroizii la forma ușoară și amână ARV, opusul textului, pe fondul pneumotoraxului și pentamidinei reale.',['pneumotoraxului','lobilor superiori']),

q(68,['Leishmanioza la pacientul cu HIV care a călătorit în zone endemice:',
 ['Simptomele sunt frecvent nespecifice (febră, alterarea stării generale, diaree, scădere ponderală); splenomegalia, anemia și trombocitopenia sunt importante','Amastigotele se vizualizează în biopsia de măduvă sau aspiratul splenic; serologia nu este fiabilă în acest context','Tratamentul de elecție este co-trimoxazolul, ca în PCP','Serologia este standardul de aur, biopsia de măduvă fiind superfluă','Zonele endemice se limitează la Scandinavia, fără Mediterană'],'AB',1445,'HIV — Leishmanioza viscerală',
 'Recunoașterea tabloului spleno-anemic, a vizualizării amastigotelor și a infiabilității serologiei, cu amfotericină liposomală ca tratament.',
 ['Tabloul nespecific și triada splenomegalie–anemie–trombocitopenie sunt explicite.','Amastigotele în măduvă/splină și infiabilitatea serologiei sunt citate.','Tratamentul se face cu amfotericină liposomală, nu cu co-trimoxazol.','Serologia nu este fiabilă; biopsia/aspiratul sunt metodele citate.','Zonele citate sunt America de Sud, Africa tropicală și o mare parte din Mediterană.']],
 8,'Înlocuiește amfotericina cu co-trimoxazolul PCP și declară serologia standard de aur, opusul infiabilității din text.',['Amastigotele','amfotericina liposomala']),

q(69,['Co-infecția HIV/VHC, dincolo de DAA 12 săptămâni:',
 ['Dacă tratamentul VHC este planificat, ARV se inițiază preferabil cu 4-6 săptămâni înaintea DAA','Cei care temporizează tratamentul VHC trebuie să facă cel puțin anual elastografie hepatică sau altă monitorizare non-invazivă','Incidența hepatitei C acute a crescut la BSB; dacă la 4 săptămâni de la diagnosticul acut viremia VHC nu a scăzut cu 2 log10, se încep DAA','Răspunsul imun la VHC protejează de reinfecție, care este rară după clearance','ARV se evită până după vindecarea VHC, pentru a nu crește hepatotoxicitatea'],'ABC',1446,'HIV — Co-infecția VHC: fereastra 4-6 săptămâni și hepatita C acută',
 'Aplicarea inițierii ARV cu 4-6 săptămâni înaintea DAA, a elastografiei anuale și a regulii de 2 log10 la 4 săptămâni în hepatita C acută.',
 ['Fereastra 4-6 săptămâni este explicită.','Elastografia anuală la cei care temporizează este citată.','Regula BSB / 4 săptămâni / 2 log10 este din text.','Răspunsul imun nu protejează împotriva reinfecției; ratele de reinfecție sunt crescute.','Toți co-infectații trebuie să primească ARV; temporizarea ARV până după VHC este opusul recomandării.']],
 8,'Neagă reinfecția și inversează ordinea ARV–DAA, două capcane de pe aceeași pagină.',['4-6 săptămâni','elastografie hepatica']),

q(70,['Infecția genitală/orală cu HSV la pacientul cu HIV imunodeprimat se manifestă, mai degrabă, prin leziuni:',
 ['veziculoase clasice, ca la imunocompetent, cu eliminare virală scurtă','ulcerative, nu veziculoase, cu eliminare virală prelungită','violacee conjunctivale, ca în sarcomul Kaposi','albicioase reliefate pe marginea limbii, ca leucoplazia păroasă','în sticlă mată pulmonară, ca în PCP'],'B',1447,'HIV — HSV: ulcerativ versus veziculos',
 'Recunoașterea pattern-ului ulcerativ (nu veziculos) și a shedding-ului prelungit al HSV la imunodeprimat.',
 ['Pattern-ul veziculos scurt este al imunocompetentului.','Textul precizează leziuni mai degrabă ulcerative decât veziculoase, cu eliminare virală prelungită.','Violaceul conjunctival este Kaposi.','Zonele albicioase laterale sunt leucoplazia păroasă EBV.','Sticla mată este PCP.']],
 8,'Permutează patru morphologii reale din capitol (vezicule, Kaposi, leucoplazie, sticlă mată) peste HSV-ul ulcerativ.',['ulcerativ decat veziculos','Eliminarea virala a HSV']),

q(71,['Infecțiile cu VZV, EBV și HPV la pacientul cu HIV:',
 ['Herpesul zoster tinde să fie mai agresiv și mai lung; poate cuprinde mai multe dermatoame; tulpinile rezistente la aciclovir (de obicei mutații de timidin-kinază) pot răspunde la foscarnet','EBV se asociază frecvent cu limfomul primar cerebral și limfoamele non-Hodgkin; titruri înalte în secrețiile orofaringiene','HPV se asociază cu progresie mai rapidă a neoplaziei intraepiteliale anale și cervicale, spre carcinom scuamos de col sau rect','Vaccinarea HPV ar trebui recomandată','Zosterul nu apare decât la CD4 sub 50/mm³, iar HPV nu influențează neoplazia cervicală'],'ABCD',1447,'HIV — VZV (foscarnet), EBV oncogen și HPV anogenital',
 'Corelarea zosterului multidermatomal rezistent (timidin-kinază, foscarnet) cu EBV oncogen și cu accelerarea CIN/AIN prin HPV.',
 ['Agresivitatea, mai multe dermatoame, mutațiile TK și foscarnetul sunt explicite.','Asocierea EBV–limfom și titrurile orofaringiene sunt citate.','Progresia CIN/AIN spre carcinom scuamos este descrisă.','Vaccinarea HPV este recomandată.','Zosterul poate apărea în orice stadiu; HPV accelerează neoplazia cervicală/anală.']],
 8,'Restrânge zosterul la CD4<50 (pragul retinitei CMV) și neagă legătura HPV–CIN, ambele de pe pagini vecine.',['timidin-kinaza','foscarnet']),

q(72,['Interacțiunea rifampicină–inhibitori de protează, dincolo de inducția P450 care scade IP:',
 ['Unii IP blochează citocromul P450, crescând concentrația de rifampicină până la niveluri toxice, cu uveită și efecte hepatotoxice','INNRT interacționează de asemenea cu rifampicina, făcând necesară modificarea dozelor','Rifampicina crește concentrația tuturor IP până la toxicitate, fără risc de rezistență','Uveita este un efect al co-trimoxazolului, nu al toxicității rifampicinei','INNRT nu au nicio interacțiune cu rifampicina'],'AB',1448,'HIV/TB — Rifampicina, uveita și INNRT',
 'Recunoașterea dublei interacțiuni: IP care cresc rifampicina (uveită, hepatotoxicitate) și INNRT care cer ajustare de doză.',
 ['Blocarea P450 de către unii IP, toxicitatea rifampicinei, uveita și hepatotoxicitatea sunt explicite.','Interacțiunea INNRT–rifampicină cu modificarea dozelor este citată.','Rifampicina reduce, nu crește, concentrația de IP.','Uveita este legată de toxicitatea rifampicinei în această interacțiune.','Textul afirmă că INNRT interacționează, necessitând modificarea dozelor.']],
 8,'Inversează direcția rifampicină→IP (crește versus scade) și mută uveita pe seama co-trimoxazolului.',['uveita','citocromului P450']),

q(73,['Sarcomul Kaposi epidemic, dincolo de asocierea cu HHV-8:',
 ['Se manifestă mai agresiv decât forma endemică a neinfectaților HIV; incidența a scăzut după ARV','Este o tumoră multicentrică din celule fusiforme și endoteliale care formează fante cu eritrocite captive, de unde nuanța violacee','Poate apărea în jurul ochilor, în special la conjunctivă, cu edem periorbital; radioterapia locală poate ajuta leziunile cutanate și ganglionare','Forma viscerală are prognostic mai bun decât cea cutanată, fiind mai radiosensibilă','ARV nu influențează regresia leziunilor'],'ABC',1449,'HIV — Sarcomul Kaposi: histologie și afectare oculară',
 'Corelarea agresivității epidemice, a histologiei (fante cu eritrocite) și a localizării conjunctivale, cu prognosticul mai rezervat al formei viscerale.',
 ['Agresivitatea față de forma endemică și scăderea incidenței după ARV sunt explicite.','Celulele fusiforme, fantele și nuanța violacee sunt descrise.','Localizarea perioculară/conjunctivală și radioterapia locală sunt citate.','SK visceral are prognostic mai rezervat decât cel cutanat.','ARV favorizează regresia leziunilor.']],
 8,'Inversează prognosticul visceral versus cutanat și neagă regresia sub ARV, două afirmații din același paragraf.',['celule fusiforme','edem periorbital']),

q(74,['Circumcizia bărbaților heterosexuali neinfectați, în studiile africane citate, a redus transmiterea de la femei la bărbați cu cel puțin 50%. La femeile HIV-negative, la 2 ani după circumcizia partenerilor HIV-pozitivi, s-a observat:',
 ['o reducere identică, de cel puțin 50%','o reducere mai modestă a incidenței HIV','o creștere a incidenței, prin riscul compensator','eliminarea completă a transmiterii, ca în U=U','absența oricărui efect măsurabil'],'B',1450,'HIV — Circumcizia: efectul asupra partenerei',
 'Diferențierea reducerii de cel puțin 50% (femeie→bărbat) de reducerea mai modestă a incidenței la partenerele HIV-negative la 2 ani.',
 ['50% este reducerea la bărbatul circumcis, nu la parteneră.','Textul precizează o reducere mai modestă a incidenței la femeile HIV-negative, la 2 ani.','Nu este descrisă o creștere prin risc compensator.','U=U ține de viremia nedetectabilă sub ARV, nu de circumcizie.','Un efect modest este totuși raportat.']],
 8,'Egalizează efectul asupra partenerei cu cei 50% ai bărbatului circumcis, deși textul îl califică mai modest, la 2 ani.',['reducere mai modestă','2 ani de la circumcizia']),

q(75,['Dincolo de PrEP și U=U, textul leagă menținerea HIV ca prioritate de:',
 ['Înțelegerea și schimbarea comportamentală, dificile mai ales unde sexualitatea, HIV și SIDA sunt tabu','Stigmatizare, sărăcie, legislație punitivă, inechitate socială și războaie, care pot contribui la răspândire','Voință politică, care nu este evidentă în toate contextele, pentru ca progresul să fie susținut','Un vaccin deja disponibil, care a înlăturat nevoia voinței politice','Notificarea partenerilor ca gest lipsit de orice controversă, superfluu dacă există testare confidențială'],'ABC',1450,'HIV — Determinanți structurali și voință politică',
 'Recunoașterea obstacolelor tabu/stigmat/sărăcie/legi punitive și a nevoii de voință politică, cu nuanța controverselor notificării partenerilor.',
 ['Dificultatea schimbării comportamentale în domenii tabu este explicită.','Lista stigmat–sărăcie–legi–inechitate–războaie este citată.','Voința politică, nu mereu evidentă, este cerută pentru susținerea progresului.','Textul descrie dezvoltarea vaccinului ca îngreunată, nu ca un produs care înlocuiește politica.','Notificarea partenerilor este utilă, dar pot apărea controverse.']],
 8,'Declară vaccinul disponibil și notificarea necontroversată, două afirmații pe care textul le nuanțează opus.',['legislatia punitiva','vointa politica']),
];
