import {rewriter} from './rewrite-author';
import {RETIRED_EPIDEMIO} from './retired/epidemio';

// Rewritten after the 2026-09-24 cue audit (Sinopsis, cap. 15, p. 333–338).
const q=rewriter(RETIRED_EPIDEMIO,(p:number)=>p-222,{shuffle:true,salt:'12'});

export const EPIDEMIO_V2=[
q('epidemio-adv-001',['Studiile caz-control:',
 ['compară retrospectiv bolnavii cu martori sănătoși','permit calcularea raportului cotelor','pot analiza boli rare într-o perioadă scurtă','permit determinarea incidenței bolii','sunt standardul de aur pentru testarea medicamentelor'],'ABC',333,'Tabelul 15-1',
 'Recunoașterea caracteristicilor studiilor caz-control.',
 ['Compară retrospectiv bolnavii cu martorii sănătoși.','Concluzia lor este raportul cotelor.','Pot analiza boli rare sau cronice într-o perioadă scurtă.','Incidența nu poate fi determinată.','Standardul de aur este trialul clinic randomizat.']],
 [8,'Distractorii preiau trăsături ale altor tipuri de studii.'],['Raportul cotelor','retrospectivă']),

q('epidemio-adv-002',['Studiile de cohortă:',
 ['permit calcularea riscului relativ','pot fi prospective sau retrospective','sunt rapide și puțin costisitoare','se potrivesc bine bolilor rare','evaluează un număr mare de persoane la un singur moment'],'AB',333,'Tabelul 15-1',
 'Recunoașterea caracteristicilor studiilor de cohortă.',
 ['Concluzia lor este riscul relativ.','Pot fi prospective sau retrospective.','Nu: sunt consumatoare de resurse financiare și de timp.','Bolile rare sunt dificil de studiat.','Descrie studiul transversal.']],
 [8,'Distractorii preiau trăsături ale altor studii.'],['Risc relativ','prospective']),

q('epidemio-adv-013',['Trialul clinic randomizat:',
 ['compară retrospectiv tratamentul cu placebo și terapiile existente','alocă randomizat pacienții','este standardul de aur pentru testarea medicamentelor','permite estimarea prevalenței după expunere','nu poate controla factorii de confuzie'],'BC',333,'Tabelul 15-1',
 'Recunoașterea caracteristicilor trialului clinic randomizat.',
 ['Nu: comparația cu placebo și terapiile existente este prospectivă.','Alocarea este randomizată, dublu-orb.','Este standardul de aur pentru testarea medicamentelor.','Descrie studiul transversal.','Poate fi controlat pentru mai mulți factori de confuzie.']],
 [8,'Distractorii contrazic avantajele trialului.'],['Standard de aur','randomizat']),

q('epidemio-adv-016',['Conform Tabelului 15-1:',
 ['studiul transversal estimează prevalența bolii','meta-analiza combină mai multe studii','seria de cazuri nu poate testa ipoteze','meta-analiza elimină limitele studiilor originale','studiul transversal determină incidența bolii'],'ABC',333,'Tabelul 15-1',
 'Diferențierea tipurilor de studii.',
 ['Studiul transversal evaluează expunerea și prevalența.','Meta-analiza combină mai multe studii.','Seria de cazuri nu poate fi folosită pentru testarea ipotezelor.','Meta-analiza nu poate elimina factorii limitativi.','Studiul transversal evaluează prevalența.']],
 [8,'Distractorii supraestimează meta-analiza și studiul transversal.'],['Meta-analiza','Seria de cazuri']),

q('epidemio-adv-021',['Cerințele unui studiu științific:',
 ['subiecții trebuie să fie reprezentativi pentru populație','consimțământul poate lipsi în cazuri aprobate de IRB','interesele pacientului au prioritate față de studiu','studiul dublu-orb evită erorile de investigație','grupurile martor sunt opționale în studiile de eficacitate'],'ABCD',333,'Studiile științifice — Cerințe',
 'Aplicarea cerințelor etice și metodologice ale studiilor.',
 ['Subiecții trebuie să fie reprezentativi.','IRB poate aproba excepții (ex. pacienți cu traumatisme).','Interesele pacientului au prioritate.','Dublu-orbul evită erorile de investigație și observaționale.','Grupurile martor trebuie incluse.']],
 [8,'Singurul distractor contrazice cerința grupului martor.'],['reprezentativi','IRB'],[334]),

q('epidemio-adv-003',['Eroarea de perioadă de latență în screening constă în:',
 ['diagnosticul precoce fără efect asupra supraviețuirii','detectarea preferențială a cazurilor lent progresive','repartizarea nerandomizată a subiecților','publicarea preferențială a studiilor pozitive','participarea preferențială a pacienților cu istoric de boală'],'A',334,'Tabelul 15-2',
 'Recunoașterea erorii de perioadă de latență.',
 ['Diagnosticul precoce dă falsa impresie a creșterii supraviețuirii.','Descrie eroarea de durată.','Descrie eroarea de înrolare.','Descrie eroarea de publicare.','Descrie auto-selecția.']],
 [8,'Distractorii sunt celelalte erori din tabel.'],['Perioada de latenţă','supravieţuire']),

q('epidemio-adv-017',['Conform Tabelului 15-2:',
 ['eroarea de durată exagerează eficacitatea screeningului','eroarea de publicare poate exclude din meta-analize studiile negative','eroarea de memorie favorizează reamintirea detaliilor negative','auto-selecția face subiecții nereprezentativi','eroarea de investigație constă în repartizarea nerandomizată'],'ABCD',334,'Tabelul 15-2',
 'Aplicarea consecințelor erorilor din studiile clinice.',
 ['Eroarea de durată exagerează eficacitatea screeningului.','Meta-analiza poate să nu includă studiile care susțin ipoteza nulă.','Pacienții cu experiențe negative își amintesc detaliile negative.','Auto-selecția introduce variabile de confuzie.','Repartizarea nerandomizată este eroarea de înrolare.']],
 [8,'Singurul distractor confundă tipurile de erori.'],['Eficacitatea screeningului','Auto-selecţia']),

q('epidemio-adv-012',['Ratele de morbiditate:',
 ['incidența raportează cazurile noi la populația la risc','prevalența raportează cazurile noi la populația totală','rata de fatalitate raportează decesele la numărul de cazuri','incidența raportează cazurile existente la populația totală','rata de fatalitate raportează decesele la populația totală'],'AC',334,'Biostatistică — Rate de morbiditate',
 'Diferențierea incidenței, prevalenței și ratei de fatalitate.',
 ['Incidența: cazuri noi / populația totală la risc.','Nu: prevalența raportează cazurile existente la populația totală.','Fatalitatea: decese / numărul de cazuri din perioadă.','Descrie prevalența.','Numitorul este numărul de cazuri.']],
 [8,'Distractorii permută numărătorul și numitorul.'],['populaţia totală la risc','Rata de fatalitate']),

q('epidemio-adv-004',['Riscul relativ:',
 ['se determină prin studii de cohortă','peste 1 sugerează o relație pozitivă','egal cu 1 sugerează o relație negativă','se determină prin studii caz-control','sub 1 sugerează o relație pozitivă'],'AB',335,'Riscul bolii — Riscul relativ',
 'Interpretarea riscului relativ.',
 ['Riscul relativ se determină prin studii de cohortă.','RR >1 sugerează o relație pozitivă.','Nu: RR = 1 nu sugerează nicio relație.','Caz-controlul oferă raportul cotelor.','RR <1 sugerează o relație negativă.']],
 [8,'Distractorii confundă tipul de studiu și semnul relației.'],['studii de cohortă','nicio relaţie']),

q('epidemio-adv-018',['Raportul cotelor și riscul atribuibil:',
 ['raportul cotelor se determină prin studii caz-control','raportul cotelor estimează riscul relativ la prevalență scăzută','riscul atribuibil este diferența ratelor între expuși și neexpuși','raportul cotelor estimează riscul relativ la prevalență ridicată','riscul atribuibil este inversul reducerii absolute a riscului'],'ABC',335,'Riscul bolii — OR și RA',
 'Aplicarea raportului cotelor și a riscului atribuibil.',
 ['OR se determină prin studii caz-control.','OR estimează RR dacă prevalența este scăzută.','RA = rata la expuși − rata la neexpuși.','Estimarea este bună la prevalență scăzută.','Inversul RAR este NNT.']],
 [8,'Distractorii inversează condiția și confundă NNT.'],['caz- control','prevalenţa este scăzută']),

q('epidemio-adv-005',['Numărul necesar pentru tratament (NNT) se calculează ca:',
 ['1 / reducerea absolută a riscului','rata la expuși minus rata la neexpuși','rata la martori minus rata la intervenție','sensibilitatea / (1 − specificitatea)','(A + D) / (A + B + C + D)'],'A',335,'Riscul bolii — NNT',
 'Aplicarea formulei NNT.',
 ['NNT = 1/RAR.','Este riscul atribuibil.','Este reducerea absolută a riscului.','Este rata de probabilitate pozitivă.','Este acuratețea.']],
 [8,'Distractorii sunt alte formule din capitol.'],['NNT','salva un pacient']),

q('epidemio-adv-023',['Statistica testelor și a riscului:',
 ['reducerea absolută a riscului = rata la martori − rata la intervenție','specificitatea = D / (B + D)','fals-pozitivele se aproximează prin (1 − specificitatea)','specificitatea = A / (A + C)','fals-pozitivele se aproximează prin (1 − sensibilitatea)'],'ABC',335,'Biostatistică — RAR și specificitatea',
 'Aplicarea formulelor RAR și specificitate.',
 ['RAR = rata la martori − rata la intervenție.','Specificitatea = D/(B+D).','Fals-pozitivele ≈ 1 − specificitatea.','A/(A+C) este sensibilitatea.','1 − sensibilitatea aproximează fals-negativele.']],
 [8,'Distractorii permută formulele.'],['grupul martor','B+D']),

q('epidemio-adv-006',['Sensibilitatea și specificitatea:',
 ['sensibilitatea este probabilitatea unui test pozitiv la bolnavi','testele de screening acceptabile au sensibilitate peste 80%','testele de confirmare acceptabile au specificitate peste 85%','fals-negativele se aproximează prin (1 − sensibilitatea)','testele de screening acceptabile au sensibilitate sub 50%'],'ABCD',335,'Statistica testelor de diagnostic',
 'Interpretarea sensibilității și specificității.',
 ['Sensibilitatea: test pozitiv la bolnavi.','Testele de screening au de obicei sensibilitate >80%.','Testele de confirmare au de obicei specificitate >85%.','Fals-negativele ≈ 1 − sensibilitatea.','Sensibilitatea este de obicei >80%.']],
 [8,'Singurul distractor contrazice pragul de screening.'],['>80%','>85%']),

q('epidemio-adv-014',['Valoarea predictivă a unui test de screening:',
 ['prevalența ridicată crește VPP','prevalența scăzută crește VPN','VPP = A / (A + B)','prevalența ridicată crește VPN','VPP = A / (A + C)'],'ABC',336,'Statistica testelor — Valoarea predictivă',
 'Aplicarea relației dintre prevalență și valorile predictive.',
 ['Prevalența ridicată se asociază cu VPP ridicată.','Prevalența scăzută se asociază cu VPN ridicată.','VPP = A/(A+B).','Prevalența scăzută crește VPN.','A/(A+C) este sensibilitatea.']],
 [8,'Distractorii inversează relația și formula.'],['valoare predictivă pozitivă ridicată','predictivă negativă ridicată']),

q('epidemio-adv-019',['Ratele de probabilitate și acuratețea:',
 ['RPP = sensibilitatea / (1 − specificitatea)','RPN = (1 − sensibilitatea) / specificitatea','ratele de probabilitate elimină dependența de prevalență','acuratețea = (A + D) / (A + B + C + D)','ratele depind de prevalența bolii, ca valoarea predictivă'],'ABCD',336,'Statistica testelor — Ratele de probabilitate',
 'Aplicarea formulelor ratelor de probabilitate și acurateței.',
 ['RPP = sensibilitate/(1 − specificitate).','RPN = (1 − sensibilitate)/specificitate.','Ratele elimină dependența de prevalență.','Acuratețea ia în calcul doar rezultatele reale.','Ratele nu depind de prevalență.']],
 [8,'Singurul distractor contrazice avantajul ratelor.'],['elimină dependenţa','Acurateţea']),

q('epidemio-adv-007',['Erorile statistice și semnificația:',
 ['eroarea de tip I respinge ipoteza nulă adevărată','eroarea de tip II nu respinge ipoteza nulă falsă','valoarea p este șansa unei erori de tip I','riscul erorilor scade odată cu creșterea eșantionului','studiile cu putere insuficientă favorizează erorile de tip I'],'ABCD',336,'Tipuri de erori și semnificația statistică',
 'Aplicarea conceptelor de eroare de tip I/II și putere.',
 ['Tipul I: ipoteza nulă respinsă deși este adevărată.','Tipul II: ipoteza nulă nerespinsă deși este falsă.','Valoarea p este șansa unei erori de tip I.','Eșantionul mai mare crește puterea.','Puterea insuficientă produce erori de tip II.']],
 [8,'Singurul distractor inversează tipul erorii.'],['Eroarea de tip I','putere insuficientă']),

q('epidemio-adv-008',['Confidențialitatea medicală nu este obligatorie când pacientul:',
 ['are o boală raportabilă legal','are tendințe suicidale sau criminale','a suferit o rană penetrantă prin agresiune','este adolescent și cere tratament pentru o BTS','are familia care cere informații fără acordul său'],'ABC',337,'Etică — Confidențialitatea',
 'Recunoașterea excepțiilor de la confidențialitate.',
 ['Bolile raportabile legal sunt o excepție.','Tendințele suicidale sau criminale sunt o excepție.','Rana penetrantă prin atac este o excepție.','Confidențialitatea se păstrează pentru BTS la adolescenți.','Nu este o excepție.']],
 [8,'Distractorii sunt situații în care confidențialitatea se păstrează.'],['raportabilă','rană penetrantă']),

q('epidemio-adv-009',['Pentru a fi considerat competent, un pacient trebuie:',
 ['să nu aibă psihoză sau intoxicație curentă','să își înțeleagă situația medicală','să decidă în acord cu recomandarea medicului','să aibă acordul familiei','să nu își schimbe decizia după acceptarea terapiei'],'AB',337,'Etică — Competența',
 'Aplicarea criteriilor de competență.',
 ['Nu trebuie să aibă psihoză sau intoxicație curentă.','Trebuie să își înțeleagă situația.','Nu: trebuie să decidă în acord cu valorile sale anterioare.','Acordul familiei nu este criteriu.','Pacientul competent se poate răzgândi oricând.']],
 [8,'Distractorii nu sunt criterii de competență.'],['psihoză','valorile sale anterioare']),

q('epidemio-adv-024',['Consimțământul și deciziile de la sfârșitul vieții:',
 ['consimțământul implicit se aplică în urgență','ordinul DNR poate limita doar anumite terapii','pacientul competent se poate răzgândi oricând','familia poate cere medicului ascunderea diagnosticului','consimțământul părinților este necesar în urgență la minori'],'ABC',337,'Etică — Consimțământul și DNR',
 'Aplicarea regulilor de consimțământ și DNR.',
 ['În urgență se aplică consimțământul implicit.','DNR poate limita ventilația, RCP, sondele sau antibioticele.','Pacientul competent se poate răzgândi oricând.','Medicii trebuie să refuze, cu excepția unui prejudiciu semnificativ.','În urgență nu este necesar.']],
 [8,'Distractorii contrazic dreptul la informare și urgența.'],['consimţământul implicit','răzgândească'],[338]),

q('epidemio-adv-010',['Criteriile morții cerebrale includ:',
 ['absența ireversibilă a activității întregului creier peste 6 ore','absența reflexelor de trunchi cerebral','apneea la decuplarea de ventilator','absența hipotermiei și intoxicației','absența activității EEG, ca singur criteriu'],'ABCD',338,'Etică — Moartea',
 'Aplicarea criteriilor morții cerebrale.',
 ['Absența ireversibilă a activității creierului, >6 ore.','Reflexele de trunchi cerebral sunt absente.','Apneea la decuplare este criteriu.','Hipotermia și intoxicația trebuie excluse.','EEG singur nu definește moartea cerebrală.']],
 [8,'Singurul distractor supraestimează EEG.'],['>6 ore','hipercarbică']),

q('epidemio-adv-011',['Eutanasia este:',
 ['administrarea activă de către medic a unui agent letal','furnizarea de către medic a unui mijloc de sinucidere asistată','retragerea suportului vital la cererea pacientului','emiterea unui ordin de neresuscitare','neinițierea terapiilor iraționale'],'A',338,'Etică — Decesul asistat medical',
 'Diferențierea eutanasiei de alte decizii de final de viață.',
 ['Eutanasia este administrarea activă a unui agent letal.','Descrie sinuciderea asistată.','Pacienții competenți o pot cere oricând.','Descrie DNR.','Medicii nu sunt obligați să furnizeze terapii iraționale.']],
 [8,'Distractorii sunt alte decizii de sfârșit de viață.'],['Eutanasia','agent letal']),
];
