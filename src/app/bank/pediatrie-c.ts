import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pediatrie',10,pdfOffset,`pediatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PEDIATRIE_C=[
q(55,['Alimentația solidă este introdusă, conform tabelului de vizite, la vârsta de:',
 ['4–6 luni, cu preparate fortificate cu fier, cereale, fructe piure și legume','Prima zi de viață, odată cu screeningul pentru fenilcetonurie','12 luni, odată cu laptele de vacă integral','6 ani, odată cu consilierea pentru obezitate','14 ani, odată cu screeningul pentru boli cu transmitere sexuală'],'A',234,'Monitorizarea sănătății — Vizitele de rutină',
 'Identificarea ferestrei de 4–6 luni pentru alimentele solide fortificate cu fier, distinct de laptele de vacă de la 12 luni.',
 ['Tabelul plasează alimentația solidă fortificată cu fier, cerealele, fructele piure și legumele la 4–6 luni.','Ziua 0–1 este rezervată screeningului metabolic, nu solidelor.','Laptele de vacă integral apare la vizita de 12 luni.','Consilierea pentru obezitate este a vizitei de 6 ani.','Screeningul BTS este al adolescenților de 14 ani și peste, dacă sunt sexual activi.']],
 8,'Distractorii sunt alte praguri reale din același tabel de vizite, ușor de permutat cu fereastra alimentelor solide.',['4-6 luni','fortifi-']),

q(56,['La vizita de nou-născut sau de la 1 săptămână se recomandă:',
 ['Screening pentru fenilcetonurie, hipotiroidism și boli metabolice genetice, inclusiv boala urinilor cu miros de arțar și fibroză chistică la pacienții cu risc crescut','Poziție de dormit „înapoi în pat”','Detector de fum, mobile de bebeluși și scaun de mașină','Introducerea laptelui de vacă integral încă din prima săptămână','Test Papanicolau, dacă este vorba de o fetiță'],'ABC',234,'Monitorizarea sănătății — Vizita de nou-născut',
 'Recunoașterea screeningului metabolic neonatal, a poziției de somn și a măsurilor de prevenție a accidentelor la nou-născut.',
 ['Tabelul enumeră fenilcetonuria, hipotiroidismul și bolile metabolice, inclusiv urinile cu miros de arțar și fibroza chistică la risc crescut.','Poziția „înapoi în pat” este redată la îngrijirea zilnică.','Detectorul de fum, mobilele și scaunul de mașină sunt la prevenția accidentelor.','Laptele de vacă integral este introdus la 12 luni.','Pap-testul apare abia la 12 ani, și doar în caz de activitate sexuală.']],
 8,'Distractorii mută laptele de vacă și citologia de la 12 luni/12 ani asupra vizitei neonatale.',['Fenilcetonurie',',,înapoi în']),

q(57,['Laptele de vacă integral este introdus, conform tabelului nutrițional, la vizita de:',
 ['12 luni, odată cu înțărcarea biberonului și mâncatul la masă','1 lună, odată cu suplimentarea de fluor','4 luni, odată cu alimentele solide','9 luni, odată cu antrenamentul lingurii','2 ani, odată cu evitarea gustărilor nesănătoase'],'A',234,'Monitorizarea sănătății — Nutriția la 12 luni',
 'Memorarea vârstei de 12 luni pentru laptele de vacă integral și înțărcarea biberonului.',
 ['Tabelul leagă vizita de 12 luni de înțărcarea biberonului, mâncatul la masă și laptele de vacă integral.','La 1 lună se discută suplimentarea cu fluor, nu laptele de vacă.','La 4 luni se introduc solidele, nu laptele de vacă.','La 9 luni apar fierul, mâncatul singur și lingura.','La 2 ani se evită gustările nesănătoase și se încurajează mâncatul la mese.']],
 8,'Toate vârstele sunt rânduri reale ale tabelului; doar 12 luni asociază laptele de vacă integral.',['de vacă integral','Înţărcarea biberonului']),

q(58,['Următoarele afirmații despre vizita de la 6 luni sunt adevărate:',
 ['Se începe antrenamentul de a bea cu ceașca și se oferă alimente ce se pot lua în mână','Se evită laptele și sucul la culcare','Alimentația solidă se amână până după vârsta de 2 ani','Pot apărea frica de străini și anxietatea de separare','Se efectuează Pap test de rutină la toate fetițele'],'ABD',234,'Monitorizarea sănătății — Vizita de 6 luni',
 'Corelarea tranziției la ceașcă, a interdicției laptelui/sucului la culcare și a anxietății de separare la 6 luni.',
 ['Tabelul citează antrenamentul cu ceașca, necesarul caloric crescut și alimentele luate în mână.','Evitarea laptelui și sucului la culcare este explicită.','Solidele sunt deja introduse la 4–6 luni, nu la 2 ani.','Frica de străini și anxietatea de separare sunt problemele comportamentale ale vârstei.','Pap-testul nu aparține sugarului.']],
 8,'Distractorii comprimă alimentele solide până la 2 ani și importă screeningul ginecologic al adolescentei.',['ceaşca','Frică de străini']),

q(59,['Selectați enunțurile adevărate despre screeningul din adolescență:',
 ['La 12 ani, Pap testul este prevăzut doar în caz de activitate sexuală la fete','La 14 ani și peste, fetele au Hb/Ht, iar screeningul pentru BTS se face dacă sunt sexual active','La 6 ani se discută evitarea supraponderalității și consilierea pentru prevenirea obezității','Pap testul de rutină începe la 6 ani, odată cu screeningul de plumb','Hb/Ht la fete se dozează la vizita de 1 lună, nu în adolescență'],'ABC',235,'Monitorizarea sănătății — Screeningul adolescentului',
 'Aplicarea Pap-testului condiționat de activitatea sexuală la 12 ani și a Hb/Ht plus BTS de la 14 ani.',
 ['Nota din tabel limitează Pap-testul de la 12 ani la fetele sexual active.','Rândul de 14 ani și peste include Hb/Ht la fete și screeningul BTS dacă este sexual activ.','Vizita de 6 ani vizează supraponderalitatea și prevenirea obezității.','La 6 ani se face expunere la plumb și acuitate vizuală, nu Pap.','Hb/Ht la fete este al rândului de 14 ani, nu al vizitei de 1 lună.']],
 8,'Vârstele 6/12/14 din același tabel sunt ușor de permutat între Pap, plumb și Hb/Ht.',['Pap test','screening pentru boli'],[234]),

q(60,['Programul de vaccinare al copilului include:',
 ['Contraindicațiile hepatitei B: alergie la drojdie sau anafilaxie după doza anterioară','Contraindicațiile rotavirusului: anafilaxie după doza anterioară, imunodeficiență combinată severă și istoric de invaginație','ROR este contraindicat în sarcină, la imunocompromiși, în trombocitopenie și în neoplasme hematologice sau solide','HPV se administrează în trei doze pe o perioadă de 6 luni','Vaccinul meningococic este contraindicat prin alergie la drojdie, identic cu hepatita B'],'ABCD',235,'Monitorizarea sănătății — Vaccinări 2018',
 'Recunoașterea contraindicațiilor specifice HepB, rotavirus și ROR și a schemei HPV în 3 doze.',
 ['Nota de subsol a HepB citează alergia la drojdie și anafilaxia.','Rotavirusul are IDCS și invaginația, pe lângă anafilaxie.','Lista ROR include sarcina, imunocompromiterea, trombocitopenia și neoplasmele.','HPV este administrat în trei doze pe 6 luni.','Alergia la drojdie este a HepB; MCV4 este notat pentru o posibilă asociere rară cu sindromul Guillain-Barre.']],
 8,'Distractorul mută alergia la drojdie de la HepB asupra meningococului, a cărui notă vizează Guillain-Barré.',['alergie la drojdie','HPV x 3']),

q(61,['Vaccinul meningococic (MCV4) este notat cu o posibilă asociere rară cu:',
 ['Sindromul Guillain-Barre','Invaginația intestinală','Alergia la drojdie','Alergia la neomicină','Encefalopatia post-DTP'],'A',235,'Monitorizarea sănătății — Vaccinul meningococic',
 'Asocierea rară MCV4–Guillain-Barré, distinct de contraindicațiile rotavirus, HepB, VZV și DTP.',
 ['Textul precizează posibila asociere rară cu sindromul Guillain-Barre.','Invaginația contraindică rotavirusul, nu MCV4.','Alergia la drojdie aparține HepB.','Alergia la neomicină este a vaccinului VZV.','Encefalopatia după doza anterioară contraindică DTP.']],
 8,'Toate distractoarele sunt contraindicații reale ale altor vaccinuri din același tabel de subsol.',['Guillain-Barre','MCV4']),

q(62,['În stadiul Tanner 2 al dezvoltării genitale la băieți se observă:',
 ['Creșterea testiculului și scrotului cu îngroșarea pielii','Creștere ușoară a părului fin genital și axilar','Organe genitale prepubertare, mici, fără pilozitate','Păr gros care se extinde până la regiunea mediană a coapselor','Glandul penian matur de adult, fără nicio modificare scrotală'],'AB',236,'Dezvoltare — Stadiile Tanner la băieți',
 'Identificarea creșterii testiculo-scrotale și a părului fin din Tanner 2, distinct de stadiile 1 și 5.',
 ['Tabelul descrie creșterea testiculului și scrotului cu îngroșarea pielii în stadiul 2.','Creșterea ușoară a părului fin genital și axilar este coloana de pilozitate a stadiului 2.','Organele mici fără păr definesc stadiul 1.','Extinderea până la fața medială a coapselor este stadiul 5.','Glandul și închiderea culorii scrotului aparțin stadiului 4, nu absenței modificării scrotale.']],
 8,'Distractorii sunt descrierile reale ale stadiilor 1, 4 și 5 din același tabel.',['Creşterea testiculului','părului fin']),

q(63,['Confidențialitatea medic–pacient în adolescență:',
 ['Trebuie păstrată, cu excepția problemelor amenințătoare de viață, precum ideația suicidală, ideația de omucidere sau patologiile cu risc vital','Acest drept ar trebui explicat părinților','Se anulează de rutină la orice consultație, pentru ca părinții să asculte tot interviul','Nu se aplică adolescenților, ci doar adulților peste 21 de ani','Permite omiterea screeningului pentru BTS, chiar dacă anamneza identifică factori de risc'],'AB',236,'Adolescența — Confidențialitatea',
 'Aplicarea excepțiilor vitale ale confidențialității și a obligației de a explica dreptul părinților.',
 ['Nota „De reținut” cere păstrarea confidențialității, cu excepția amenințărilor vitale enumerate.','Textul precizează că dreptul trebuie explicat părinților.','Anularea de rutină contrazice nota.','Adolescența este intervalul citat, nu un prag de 21 de ani.','Anamneza vizitelor trebuie să vizeze BTS, violența și abuzul, nu să le omită.']],
 8,'Distractorii anulează confidențialitatea sau scutesc de screeningul de risc pe care textul îl cere la vizită.',['Confidenţialitatea medic-pacient','ideaţie']),

q(64,['Debutul pubertății este descris astfel:',
 ['Începe tipic cu 12–24 de luni mai repede la sexul feminin','La fete, intervalul citat este între 9 și 10 ani, iar la băieți între 9 și 11 ani','Apariția înaintea acestor vârste este considerată pubertate precoce','La fete începe după 16 ani, identic cu amenoreea primară','La băieți stadiul Tanner 1 reprezintă deja pubertatea completă'],'ABC',236,'Adolescența — Pubertatea',
 'Memorarea avansului de 12–24 de luni la fete și a ferestrelor 9–10 versus 9–11 ani.',
 ['Avansul de 12–24 de luni la sexul feminin este explicit.','Intervalele 9–10 ani la fete și 9–11 ani la băieți sunt citate.','Debutul înaintea acestor vârste definește pubertatea precoce.','16 ani este un prag de amenoree primară, nu vârsta medie a pubertății.','Tanner 1 este prepubertar, cu organe genitale mici.']],
 8,'Distractorii confundă fereastra pubertății cu amenoreea primară și cu stadiul Tanner 1.',['12-24 luni','pubertate precoce']),

q(65,['Etapele psihosociale ale adolescenței se caracterizează prin:',
 ['Adolescența timpurie (10–13 ani) asociază gândire concretă și comportament independent precoce','Adolescența mijlocie (14–16 ani) aduce sexualitatea, dorința de independență și gândirea abstractă','Adolescența târzie (17–21 de ani) asociază autoconștientizare, relație mai deschisă cu părinții și maturitate cognitivă','Gândirea abstractă este trăsătura adolescenței timpurii, nu a celei mijlocii','Adolescența târzie se încheie la 13 ani, odată cu Tanner 2'],'ABC',236,'Adolescența — Etape psihosociale',
 'Separarea gândirii concrete (10–13 ani) de sexualitate/gândire abstractă (14–16 ani) și de maturitatea tardivă (17–21 ani).',
 ['Gândirea concretă și independența precoce definesc 10–13 ani.','Sexualitatea, conflictele cu părinții și gândirea abstractă definesc 14–16 ani.','Autoconștientizarea și maturitatea cognitivă definesc 17–21 de ani.','Gândirea abstractă este atribuită adolescenței mijlocii.','13 ani închide adolescența timpurie, nu pe cea târzie.']],
 8,'Cele trei ferestre de vârstă sunt ușor de permutat; distractorii inversează gândirea abstractă și capătul tardiv.',['gândirea concretă','abstractă']),

q(66,['Principala cauză de deces la adolescenți este, conform textului:',
 ['Accidentele','Leucemia limfoblastică acută','Sindromul de detresă respiratorie','Enterocolita necrotică','Tetralogia Fallot netratată'],'A',236,'Adolescența — Mortalitate',
 'Identificarea accidentelor ca principală cauză de deces în adolescență, deși majoritatea trec perioada fără incidente severe.',
 ['Textul precizează că accidentele reprezintă principala cauză de deces la această grupă de vârstă.','LLA este un risc al sindromului Down, nu cauza principală de deces adolescentin.','Detresa respiratorie este a prematurului.','Enterocolita necrotică este a nou-născutului prematur.','Tetralogia Fallot aparține cardiologiei congenitale, nu mortalității adolescentine citate.']],
 8,'Distractorii sunt cauze pediatrice reale de deces din capitol, dar la alte vârste.',['principala cauză de deces','accidentele']),

q(67,['Boala Pompe (glicogenoză tip II) se caracterizează prin:',
 ['Deficit de α-glucozidază lizozomală','Cardiomegalie, hipotonie și insuficiență respiratorie','Tratament prin substituție enzimatică cu alglucozidază alfa','Deficit de glucozo-6-fosfatază, cu față de păpușă și extremități subțiri','Crampe și mialgii prin deficit de fosforilază musculară, ca în McArdle'],'ABC',223,'Endocrinologie pediatrică — Boala Pompe',
 'Diferențierea Pompe (α-glucozidază, cardiomegalie, alglucozidază alfa) de von Gierke și McArdle.',
 ['Tabelul atribuie tipului II deficitul de α-glucozidază lizozomală.','Cardiomegalia, hipotonia și insuficiența respiratorie sunt caracteristicile citate.','Substituția cu alglucozidază alfa este tratamentul din tabel.','G6Paza, fața de păpușă și extremitățile subțiri definesc von Gierke.','Fosforilaza musculară cu crampe definește McArdle.']],
 8,'Distractorii sunt rândurile reale ale von Gierke și McArdle din același tabel de glicogenoze.',['Alglucosidază','Cardiomegalie']),

q(68,['O mamă Rh-negativă naște un făt Rh-pozitiv. Imunoglobulina Rho(D) (RhoGAM) se administrează, pentru a preveni aloimunizarea, în:',
 ['Primele 72 de ore de la naștere, sau oricând sângele matern și cel fetal s-ar fi putut amesteca','Doar după a doua sarcină Rh-pozitivă, când hidropsul este deja instalat','La 6 luni postpartum, odată cu vaccinul ROR','În locul transfuziei intrauterine, care este contraindicată dacă patologia se dezvoltă in utero','Numai dacă mama este Rh-pozitivă, iar fătul Rh-negativ'],'A',223,'Hematologie pediatrică — Boala hemolitică a nou-născutului',
 'Aplicarea ferestrei de 72 de ore a RhoGAM-ului după nașterea unui făt Rh-pozitiv.',
 ['Textul cere administrarea în primele 72 de ore de la naștere la feți Rh+ sau la orice amestec materno-fetal.','Anticorpii nu afectează prima interacțiune, dar hemoliza la sarcinile următoare este tocmai ceea ce RhoGAM previne.','6 luni și ROR nu sunt fereastra citată.','Transfuzia fetală intrauterină poate fi necesară dacă patologia se dezvoltă in utero.','Direcția Rh este inversată față de text.']],
 8,'Fereastra de 72 de ore este ușor de deplasat, iar distractorii inversează indicația Rh și rolul transfuziei intrauterine.',['primele 72 de','RhoGAM']),

q(69,['Anemia Diamond-Blackfan:',
 ['Este o anemie congenitală pură, prin defect al progenitorilor eritroizi','Laboratorul arată hemoglobină și hematocrit scăzute, reticulocite scăzute și VEM crescut','Tratamentul include transfuzii, corticosteroizi și transplant medular','Se prezintă cu pancitopenie, pete cafe-au-lait și rupturi cromozomiale, ca anemia Fanconi','Biopsia medulară arată hipocelularitate globală cu multiple rupturi de benzi'],'ABC',224,'Hematologie pediatrică — Anemia Diamond-Blackfan',
 'Contrastarea anemiei pure macrocitare a Diamond-Blackfan cu pancitopenia Fanconi.',
 ['Definiția de anemie congenitală pură prin defect al progenitorilor eritroizi este explicită.','Reticulocitele scăzute și VEM-ul crescut sunt laboratorul citat.','Transfuziile, corticosteroizii și transplantul sunt tratamentul.','Pancitopenia, petele cafe-au-lait și rupturile cromozomiale definesc Fanconi.','Hipocelularitatea cu rupturi de benzi este a Fanconi, nu a Diamond-Blackfan (activitate scăzută dar eritropoietină excesivă).']],
 8,'Distractorii descriu exact Fanconi, prezentat pe pagina anterioară, asupra anemiei pure eritroide.',['Anemie congenitală pură','VEM crescut'],[223]),

q(70,['Retinoblastomul:',
 ['Este cea mai frecventă tumoră intraoculară la copii','Examenul poate arăta leucocorie sau mase retiniene albe','Laboratorul citează mutația genei RB1','Originea este în creasta neurală, cu acid vanilmandelic urinar crescut','Tratamentul tumorilor mari fără potențial vizual este doar observația, fără enucleere'],'ABC',227,'Oncologie pediatrică — Retinoblastomul',
 'Recunoașterea leucocoriei, a genei RB1 și a caracterului de cea mai frecventă tumoră intraoculară.',
 ['Textul o identifică drept cea mai frecventă tumoră intraoculară pediatrică.','Leucocoria și masele retiniene albe sunt semnele oftalmologice.','Mutația RB1 (redată OCR ca RBI) este laboratorul citat.','Creasta neurală și VMA definesc neuroblastomul.','Enucleerea este efectuată tocmai pentru tumorile mari fără potențial vizual.']],
 8,'Distractorii importă markerul neuroblastomului și neagă enucleerea indicată pentru tumorile mari.',['Leucocorie','genei RBI'],[226]),

q(71,['Fractura claviculară la copil:',
 ['Este cea mai frecventă fractură la copii, inclusiv prin traumatism la naștere','La nou-născuți nu necesită tratament','La copiii mai mari se poate folosi bandajul în formă de opt','Se reduce prin supinația antebrațului și flexia cotului, ca subluxația capului radial','Este necroza avasculară a epifizei femurale între 3 și 8 ani'],'ABC',229,'Ortopedie pediatrică — Fractura claviculară',
 'Recunoașterea epidemiologiei obstetricale, a absenței tratamentului la nou-născut și a bandajului în opt.',
 ['Textul o identifică drept cea mai frecventă fractură pediatrică și la naștere.','Nou-născuții nu necesită tratament.','Bandajul în formă de opt este schema copiilor mai mari.','Supinația cu flexia cotului reduce cotul de dădacă.','NAV între 3 și 8 ani definește Legg-Calvé-Perthes.']],
 8,'Distractorii aplică manevra cotului de dădacă și definiția Perthes asupra fracturii claviculare.',['bandaj în formă de opt','cea mai frecventă fractură']),

q(72,['Rahitismul este descris ca:',
 ['Calcifiere vicioasă prin deficit de vitamină D sau de fosfat; la adulți este numit osteomalacie','Fosfataza alcalină crescută și fosforul scăzut în toate tipurile','Necroză avasculară a capului femural între 3 și 8 ani','Curbură laterală de repaus a coloanei, cu deformitate rotatorie','Subluxație a capului radial prin tragere de mână'],'AB',229,'Ortopedie pediatrică — Rahitismul',
 'Definirea rahitismului/osteomalaciei și a laboratorului comun (FA crescută, fosfor scăzut).',
 ['Definiția și echivalentul adult (osteomalacie) sunt explicite.','FA crescută și fosforul scăzut în toate tipurile sunt din laborator.','NAV 3–8 ani este Perthes.','Curbura laterală definește scolioza, de pe aceeași pagină.','Subluxația capului radial este cotul de dădacă.']],
 8,'Toate distractoarele sunt entități ortopedice de pe aceeași pagină, cu laboratoare sau mecanisme diferite.',['osteomalacie','fosfataza alcalină crescută']),

q(73,['În scolioză se recomandă:',
 ['Observare în cazul curburilor mici','Fixare pentru curburile moderate la pacienții tineri','Chirurgie pentru curburile severe sau la pacienții mai vârstnici','Ham Pavlik sub 6 luni, ca în displazia de dezvoltare a șoldului','Bandaj în formă de opt, ca în fractura claviculară'],'ABC',229,'Ortopedie pediatrică — Scolioza',
 'Ierarhizarea observație–orteză–chirurgie după mărimea curbei și vârstă.',
 ['Observarea curburilor mici este explicită.','Fixarea curburilor moderate la tineri este citată.','Chirurgia curburilor severe sau a pacienților mai vârstnici este schema.','Hamul Pavlik aparține DDH.','Bandajul în opt aparține claviculei.']],
 8,'Distractorii importă tratamentele DDH și ale fracturii claviculare, definite pe aceleași pagini.',['curburilor mici','boală pulmonară restrictivă']),

q(74,['Forma pauciarticulară a artritei juvenile idiopatice:',
 ['Interesează mai puțin de patru articulații, articulațiile mari, cu excepția șoldului','Debutează tipic la 2–3 ani','Asociază uveită sau iridociclită în 30% din cazuri','ANA este slab pozitiv','FR este constant pozitiv, iar ANA este negativ, ca în forma sistemică'],'ABCD',230,'Ortopedie pediatrică — AJI pauciarticulară',
 'Recunoașterea pragului de sub patru articulații, a uveitei de 30% și a ANA slab pozitiv.',
 ['Definirea „mai puțin de patru articulații” și excepția șoldului sunt din tabel.','Vârsta 2–3 ani este rândul de prezentare.','Cifra de 30% pentru uveită/iridociclită este explicită.','ANA slab pozitiv este laboratorul citat.','FR pozitiv la vârste mai mari aparține formei poliarticulare; forma sistemică are ANA negativi.']],
 8,'Distractorul permută serologia formei sistemice (ANA negativ) asupra pauciarticularei.',['Mai puţin de patru','30% cazuri']),

q(75,['Identificați afirmația corectă referitoare la forma sistemică a artritei juvenile idiopatice:',
 ['Laboratorul arată de obicei ANA negativi și, rar, FR pozitiv, cu leucocitoză, anemie și VSH crescut','ANA este slab pozitiv în 30% din cazuri, identic formei pauciarticulare','Interesează mai puțin de patru articulații mari, cu excepția constantă a șoldului ca în forma pauciarticulară','Debutează doar după 17 ani','Tratamentul se limitează la hamul Pavlik'],'A',230,'Ortopedie pediatrică — AJI sistemică',
 'Diferențierea serologiei formei sistemice (ANA negativ) de pauciarticulară și poliarticulară.',
 ['Tabelul citează leucocite crescute, anemie, VSH crescut, ANA negativi și rar FR pozitiv.','ANA slab pozitiv și uveita de 30% sunt ale formei pauciarticulare.','Sub patru articulații, exceptând șoldul, definește pauciarticulara.','Forma sistemică apare la orice vârstă sub 17 ani.','Pavlik este al DDH, nu al AJI (AINS, metotrexat, corticosteroizi, citotoxice).']],
 8,'Capcana este permutarea ANA slab pozitiv al pauciarticularei asupra formei sistemice, care este ANA-negativă.',['ANA negativi','Croşete febrile']),

q(76,['Reflexul tonic al gâtului (de scrimă) dispare în mod tipic la:',
 ['3 luni','6 luni','9 luni','12 luni','18 luni'],'A',233,'Monitorizarea dezvoltării — Reflexele copilăriei',
 'Memorarea dispariției la 3 luni a reflexului tonic al gâtului, distinct de pragul de îngrijorare de 6 luni.',
 ['Tabelul indică dispariția la 3 luni, ca Moro, apucarea și înrădăcinarea.','6 luni este pragul după care persistența reflexelor infantile îngrijorează, nu vârsta de dispariție a tonicului.','9 luni este un reper de dezvoltare (clește, primele cuvinte).','12 luni nu este vârsta citată pentru acest reflex.','18 luni nu apare în tabelul reflexelor pentru tonicul gâtului.']],
 8,'Toate vârstele sunt repere reale; doar 3 luni este cea din tabelul reflexului de scrimă.',['Tonic al gâtului','reflexul de']),

q(77,['Controalele de rutină în copilărie sunt programate astfel:',
 ['Vizite la 2 săptămâni după naștere și la 1 lună','Apoi la 2, 4 și 6 luni','De la 6 la 18 luni, vizite la fiecare 3 luni, apoi la 2 ani și ulterior anual','Schema de la 2 luni se calculează după vârsta gestațională corectată, nu după cea cronologică','Vaccinurile vii se administrează de predilecție copiilor cu imunodeficiență combinată severă'],'ABC',233,'Monitorizarea sănătății — Calendarul vizitelor',
 'Reținerea cadenței 2 săptămâni–1 lună, apoi 2/4/6 luni, apoi din 3 în 3 luni până la 18 luni.',
 ['Vizitele de 2 săptămâni și 1 lună sunt explicite.','Cadența 2, 4, 6 luni este citată.','Intervalul de 3 luni între 6 și 18 luni, apoi 2 ani și anual, este schema.','La prematur vaccinurile (și, implicit, calendarul) folosesc vârsta cronologică.','Vaccinurile vii sunt contraindicate la imunocompromiși.']],
 8,'Distractorii inversează regula vârstei la prematur și contraindicația vaccinurilor vii, din aceeași pagină.',['2 săptămâni după naştere','o dată la 2 luni']),

q(78,['Reperul de dezvoltare corespunzător vârstei de 2 luni include:',
 ['Zâmbet social și gângurit','Ridicarea capului la 45 de grade','Mersul bine și propoziții din 2 cuvinte','Turn din 9 cuburi și desenarea unui cerc','Omiterile și vorbirea fluentă, ca la 6 ani'],'AB',232,'Monitorizarea dezvoltării — Reperele de 2 luni',
 'Asocierea zâmbetului social, a gânguritului și a ridicării capului la 45° cu vârsta de 2 luni.',
 ['Tabelul plasează zâmbetul social și gânguritul la 2 luni.','Ridicarea capului la 45 de grade este mișcarea grosieră a vârstei.','Mersul bine și propozițiile din 2 cuvinte sunt la 18 luni.','Turnul din 9 cuburi și cercul sunt la 3 ani.','Omiterile și vorbirea fluentă sunt la 6 ani.']],
 8,'Distractorii sunt rânduri reale ale tabelului de repere, deplasate de la 18 luni, 3 ani și 6 ani.',['Zâmbet social','45']),

q(79,['Sindromul hiper-IgE (Job) se caracterizează prin:',
 ['Anomalie a chemotaxiei neutrofilelor, cu supraproducție de IgE, dermatită cronică și abcese cutanate recurente','Trăsături faciale groase și dentiție primară persistentă','IgE seric crescut, eozinofile crescute și răspuns chemotactic deficitar','Deleție 22q11.2 cu hipoplazie timică și tetanie','Granulații gigante pe frotiul periferic, cu albinism, ca în Chediak-Higashi'],'ABC',238,'Patologii imune — Sindromul Job',
 'Recunoașterea faciesului gros, a dentiției primare persistente și a IgE-ului crescut, distinct de DiGeorge și Chediak-Higashi.',
 ['Anomalia chemotaxiei, IgE-ul și abcesele sunt descrierea din tabel.','Faciesul grosolan și dentiția primară persistentă sunt stigmatele citate.','IgE-ul seric crescut, eozinofilia și chemotaxia deficitară sunt diagnosticul.','22q11.2 cu tetanie este DiGeorge.','Granulațiile gigante și albinismul definesc Chediak-Higashi.']],
 8,'Distractorii sunt rândurile învecinate din același tabel de imunodeficiențe fagocitare.',['Sindromul Job','dentiţie primară persistentă']),

q(80,['Deficitul de adeziune a leucocitelor:',
 ['Face ca neutrofilele să nu poată părăsi circulația, prin anomalii ale integrinelor (tip 1) sau E-selectinei (tip 2)','Asociază infecții bacteriene recurente și detaşare întârziată a bontului ombilical','Este o afecțiune X-linkată cu eczemă și trombocitopenie, prin gena WASP','Se tratează doar cu analogi de GnRH','Cariotipul tipic este 45XO'],'AB',238,'Patologii imune — Deficitul de adeziune leucocitară',
 'Corelarea defectului de integrine/E-selectină cu întârzierea căderii bontului ombilical.',
 ['Inabilitatea neutrofilelor de a părăsi circulația este definiția.','Infecțiile de căi aeriene/tegument și bontul ombilical întârziat sunt tabloul.','WASP, eczema și trombocitopenia definesc Wiskott-Aldrich.','Analogii de GnRH tratează pubertatea precoce, nu DAL.','45XO este sindromul Turner.']],
 8,'Nota de pe pagina următoare leagă explicit bontul ombilical întârziat de DAL; distractorii mută Wiskott și Turner.',['bontului ombilical','E-se'],[239]),

q(81,['Manifestarea patologiilor imune nu apare imediat după naștere deoarece:',
 ['Nou-născuții păstrează anticorpii materni timp de circa 3 luni','Splina fetală sintetizează IgM protector tot primul an','Vaccinurile vii induc imediat imunitate sterilizantă','Complementul este absent până la 6 ani','Limfocitele T materne circulă tot primul deceniu'],'A',239,'Patologii imune — Anticorpii materni',
 'Aplicarea ferestrei de circa 3 luni a anticorpilor materni, care maschează imunodeficiențele neonatale.',
 ['Nota „De reținut” atribuie întârzierea anticorpilor materni păstrați circa 3 luni.','Textul nu invocă IgM splenic fetal tot primul an.','Vaccinurile vii sunt contraindicate la imunodeficiențe severe, nu un substitut.','Complementul nu este descris ca absent până la 6 ani.','Nu se citează circulația limfocitelor T materne un deceniu.']],
 8,'Fereastra de 3 luni este ușor de extins la 1 an sau 6 ani, praguri reale din alte contexte pediatrice.',['timp de -3 luni','patologiilor imune']),

q(82,['Sindromul Turner:',
 ['Are cariotip 45XO sau mozaicism','Tabloul include statură mică, infertilitate, coarctație de aortă și pterygium colli','Majoritatea sarcinilor cu cariotip 45X0 se termină cu avort spontan','Este 47XXY, cu ginecomastie și atrofie testiculară','Tratamentul de fond este doar splenectomia, ca în Wiskott-Aldrich'],'ABC',239,'Patologii genetice — Sindromul Turner',
 'Recunoașterea cariotipului 45XO, a stigmantelor (coarctație, pterygium) și a ratei înalte de avort.',
 ['Cariotipul 45XO sau mozaicismul este din tabel.','Statura mică, infertilitatea, coarctația și pterygium colli sunt enumerate.','Nota precizează că majoritatea sarcinilor 45X0 se termină cu avort spontan.','47XXY (OCR 47m) cu ginecomastie este Klinefelter.','Splenectomia aparține Wiskott-Aldrich.']],
 8,'Distractorii atribuie Turner cariotipul și tratamentul Klinefelter/Wiskott, definite în tabelele învecinate.',['45XO','pterygium colii']),

q(83,['Care dintre următoarele afirmații diferențiază corect trisomia 18 de trisomia 13?',
 ['Trisomia 18 asociază malpoziție de membre, talus vertical congenital și suprapunerea degetelor la apucare','Trisomia 13 asociază cheilopalatoschizis, anomalii ale SNC, nas rotunjit și polidactilie','Ambele sunt frecvent fatale în primul an de viață','Trisomia 18 este cea mai frecventă cauză de dizabilitate intelectuală congenitală, indiferent de sex','Trisomia 13 are incidența de circa 1/700 nașteri, identică sindromului Down'],'ABC',240,'Patologii genetice — Trisomiile 18 și 13',
 'Separarea stigmantelor (degete suprapuse versus cheiloschizis/polidactilie) de epidemiologia Down.',
 ['Malpoziția, talusul vertical și suprapunerea degetelor sunt ale trisomiei 18.','Cheilopalatoschizisul, SNC, nasul rotunjit și polidactilia sunt ale trisomiei 13.','Ambele sunt notate ca frecvent fatale în primul an.','Cea mai frecventă cauză congenitală de dizabilitate intelectuală este Down.','1/700 este incidența Down; trisomia 13 este circa 1/5.000.']],
 8,'Distractorii atribuie trisomiilor 13/18 epidemiologia și cotarea de „cea mai frecventă” ale Down, din același tabel.',['suprapunerea degetelor','polidactilie']),

q(84,['Sindroamele de deleție se caracterizează prin:',
 ['Prader-Willi: deleția alelei paterne 15q11–15q13, cu hiperfagie, obezitate și hipotonie de sugar','Angelman: deleția alelei materne 15q11–15q13, cu dispoziție bună, râs neprovocat și ataxie','Williams: deleție 7q11.23, cu facies de elf și stenoză supravalvulară','Cri-du-chat: deleție 4p16, cu convulsii, fără plâns particular','Wolf-Hirschhorn: deleția întregului braț 5p, cu țipăt de pisică'],'ABC',240,'Patologii genetice — Sindroamele de deleție',
 'Corelarea imprintării 15q (patern Prader-Willi, matern Angelman) și a faciesului de elf Williams.',
 ['Hiperfagia, obezitatea și alela paternă sunt ale Prader-Willi.','Râsul neprovocat, ataxia și alela maternă sunt ale Angelman.','Faciesul de elf și stenoza supravalvulară sunt ale Williams (7q11.23).','Cri-du-chat este brațul 5p, cu plâns de pisică; 4p16 este Wolf-Hirschhorn.','Țipătul de pisică și 5p sunt ale cri-du-chat, nu ale Wolf-Hirschhorn.']],
 8,'Distractorii inversează 5p și 4p16, capcana clasică dintre cri-du-chat și Wolf-Hirschhorn.',['Hiperfagie','Facies de elf']),

q(85,['Otita medie acută:',
 ['Este cel mai frecvent motiv de administrare a antibioterapiei la copil','Diagnosticul este clinic; laboratorul nu este necesar','Amoxicilina în doză mare este prima linie','Agentul tipic este Parvovirus B19','Prima linie este nistatina topică, ca în candidoza orală'],'ABC',241,'Infecții pediatrice — Otita medie acută',
 'Recunoașterea OMA ca principal motiv de antibioterapie, a diagnosticului clinic și a amoxicilinei în doză mare.',
 ['Nota o identifică drept cel mai frecvent motiv de antibioterapie pediatrică.','Diagnosticul clinic, fără laborator, este explicit.','Amoxicilina în doză mare este prima linie; amoxicilină-clavulanat dacă este refractară.','Parvovirus B19 produce eritemul infecțios.','Nistatina nu este schema OMA.']],
 8,'Distractorii mută etiologia exantemelor și un antifungal asupra celei mai frecvente indicații de antibiotic.',['amoxicilină în doză mare','Cel mai frecvent motiv']),

q(86,['Scarlatina:',
 ['Erupția este o reacție de tip întârziat la exotoxina streptococului de grup A','Tabloul include rash cu aspect de șmirghel, limbă zmeurie și descuamări palmo-plantare','Tratamentul este ca al faringitei streptococice, cu penicilină sau amoxicilină','Complicațiile includ cardita reumatică și glomerulonefrita poststreptococică','Agentul este HHV-6, iar rash-ul apare după dispariția febrei, ca în roseolă'],'ABCD',241,'Infecții pediatrice — Scarlatina',
 'Asocierea exotoxinei streptococice cu aspectul de șmirghel și cu sechelele reumatice/renale.',
 ['Reacția întârziată la exotoxina S. pyogenes este mecanismul.','Șmirghelul, limba zmeurie și descuamările sunt tabloul.','Penicilina sau amoxicilina, ca în faringită, sunt tratamentul.','Cardita reumatică și glomerulonefrita sunt complicațiile citate.','HHV-6 și rash-ul postfebril definesc roseola, de pe aceeași pagină.']],
 8,'Distractorul atribuie scarlatinei etiologia și cronologia roseolei, definite imediat după.',['şmirghel','limbă zmeurie']),

q(87,['Un sugar are 4 zile de febră înaltă, apoi febra cedează și apare un rash maculopapular pe față, gât și trunchi. Agentul și entitatea compatibile cu textul sunt:',
 ['HHV-6 (roseola infantum, exantemul subit)','Asocierea cu convulsii febrile în faza febrilă','Tratamentul suportiv','Parvovirus B19, cu obraji pălmuiți din prima zi de febră','Streptococcus pyogenes, cu limbă zmeurie și aspect de șmirghel'],'ABC',241,'Infecții pediatrice — Roseola infantum',
 'Recunoașterea secvenței febră 3–5 zile apoi rash la defervescență, tipică roseolei cu HHV-6.',
 ['HHV-6 și denumirea de exantem subit sunt explicite.','Asocierea cu convulsiile febrile din faza febrilă este citată.','Tratamentul suportiv este schema.','Parvovirusul și obrajii pălmuiți definesc a cincea boală.','Șmirghelul și limba zmeurie definesc scarlatina.']],
 8,'Vigneta reproduce cronologia roseolei; distractorii sunt celelalte exanteme de pe aceeași pagină.',['exantemul subit','HHV-6']),

q(88,['Rubeola (pojarul german) se caracterizează prin:',
 ['Este cunoscută și ca „pojarul de trei zile”','Asociază adenopatii posterioare, cervicale și occipitale și pete Forchheimer pe palatul moale','Pete Koplik pe mucoasa jugală în dreptul molarului 2','Rash care începe pe scalp și piept, cu indicație de vitamină A','Limba zmeurie și descuamarea palmo-plantară streptococică'],'AB',242,'Infecții pediatrice — Rubeola',
 'Contrastarea adenopatiei occipitale și a petelor Forchheimer cu enantemul rujeolei și scarlatinei.',
 ['Denumirea de pojar de trei zile este explicită.','Adenopatiile posterioare/cervicale/occipitale și petele Forchheimer sunt tabloul.','Petele Koplik definesc rujeola.','Rash-ul de scalp/piept și vitamina A aparțin rujeolei.','Limba zmeurie și descuamarea definesc scarlatina.']],
 8,'Distractorii sunt enantemele și tratamentul rujeolei, alăturate pe aceeași pagină, plus scarlatina.',['pojarul de trei zile','petele Forchheimer']),

q(89,['Infecția de tract urinar la copil:',
 ['Este a doua cea mai frecventă infecție bacteriană, după otita medie','Escherichia coli este cel mai comun microorganism','Cefalosporinele sunt prima linie de tratament','Diagnosticul se pune pe petele Koplik, fără sumar de urină','Prima linie este amoxicilina în doză mare, ca în otita medie, fără urocultură'],'ABC',242,'Infecții pediatrice — Infecția de tract urinar',
 'Ierarhizarea ITU după OMA, a predominanței E. coli și a cefalosporinelor ca primă linie.',
 ['Locul doi după otita medie este explicit.','E. coli este microorganismul cel mai comun.','Cefalosporinele sunt prima linie citată.','Petele Koplik sunt ale rujeolei; laboratorul ITU este sumarul și urocultura.','Amoxicilina în doză mare este prima linie a OMA, nu schema ITU din text.']],
 8,'Distractorii aplică diagnosticul rujeolei și antibioticul OMA asupra ITU, definite pe aceleași două pagini.',['Escherichia coli','cefalosporinele sunt prima linie'],[241]),
];
