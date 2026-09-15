import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-55;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('infectii-chir',8,pdfOffset,`infectii-chir-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const INFECTII_CHIR_C=[
q(26,['Dozele suplimentare intraoperatorii de antibiotic profilactic și riscul relativ de IPC:',
 ['Doze suplimentare sunt necesare dacă durata intervenției depășește de două ori timpul de înjumătățire al antibioticului sau dacă există pierderi excesive de sânge','Riscul de IPC în cazurile curat-contaminate este de trei ori mai mare decât în cazurile curate','Riscul general de infecție pentru cazurile contaminate crește de 5–10 ori față de cazurile curate','Doza unică preoperatorie acoperă orice durată, redosarea fiind superfluă după 4 ore','Cazurile contaminate au același risc ca hernia inghinală curată (circa 3%)'],'ABC',76,'Antibioterapie perioperatorie — Redosare și risc relativ',
 'Aplicarea regulii de redosare (2× t½ sau hemoragie) și a multiplicatorilor 3× (curat-contaminat) și 5–10× (contaminat).',
 ['Cele două indicații de redosare intraoperatorie sunt explicite.','Multiplicatorul de trei ori pentru curat-contaminat este citat.','Intervalul 5–10 ori pentru contaminat versus curat este enunțat.','Textul cere doze suplimentare când durata depășește 2× t½, nu o doză unică nelimitată.','3% este frecvența plăgilor curate, nu a celor contaminate.']],
 8,'Anulează redosarea după 2× t½ și egalizează contaminatul cu 3% al plăgii curate, două praguri din același paragraf.',['de două ori timpul','5-10 ori']),

q(27,['Conform Tabelului 8-3, frecvența infecției în plăgile murdare (infecție stabilită) este de:',
 ['40–50%','circa 3%','5–15%','15–40%','sub 1%, identică herniei inghinale'],'A',77,'Tabelul 8-3 — Plăgi murdare 40–50%',
 'Diferențierea intervalului 40–50% al plăgii murdare de 3% (curat), 5–15% (curat-contaminat) și 15–40% (contaminat).',
 ['Tabelul plasează frecvența murdară la 40–50%, cu exemple de drenaj de abces intraabdominal și rezecție de intestin infarctat.','3% aparține plăgilor curate.','5–15% definește curat-contaminatul.','15–40% este intervalul contaminatului macroscopic.','Sub 1% nu figurează; hernia curată este exemplul de 3%.']],
 8,'Permutează cele patru trepte procentuale ale Tabelului 8-3, ușor de oglindit între rânduri alăturate.',['40-50','intestinului infarctat']),

q(28,['Controlul sursei prin reintervenție în abcesul intra-abdominal este necesar atunci când există:',
 ['O sursă de contaminare continuă (perforație, scurgere anastomotică sau fistulă)','Țesut devitalizat care necesită debridare, eșuarea drenării percutanate sau progresie spre peritonită generalizată','Doar febră izolată, cu colecție bine drenată percutan și fără scurgere','Ileus rezolvat și culturi sterile, fără colecție organizată','Leucocitoză în scădere după 4 zile de STOP-IT, fără contaminare persistentă'],'AB',78,'Infecții intra-abdominale — Indicațiile reintervenției',
 'Recunoașterea celor patru indicații de reintervenție versus succesul drenajului percutan al abcesului localizat.',
 ['Contaminarea continuă (perforație/scurgere/fistulă) este prima indicație enumerată.','Debridarea, eșecul percutan și progresia la peritonită generalizată completează lista.','Colecția localizată drenată percutan este metoda de elecție, nu reintervenția de principiu.','Ileusul rezolvat fără colecție nu cere reintervenție.','STOP-IT privește durata antibioticelor după controlul sursei, nu indicația de reintervenție.']],
 8,'Transformă drenajul percutan de elecție într-o laparotomie neselectivă și confundă STOP-IT cu indicația operatorie.',['eşuarea drenării','peritonită generalizată']),

q(29,['Pachetul de prevenție a pneumoniei asociate ventilatorului include:',
 ['Reducerea sedării cu întrerupere zilnică și evaluarea zilnică a disponibilității pentru detubare, cu încercări de respirație spontană','Mobilizare precoce și tub endotraheal cu dispozitiv de aspirație subglotică','Ridicarea toracelui prin poziționarea patului la 30–45°','Schimbarea circuitului ventilatorului numai când este vizibil murdar sau defect','Schimbarea zilnică de principiu a circuitului și menținerea patului în clinostatism strict'],'ABCD',79,'PAV — Pachetul de prevenție 30–45°',
 'Aplicarea celor șase măsuri (sedare, SBT, mobilizare, aspirație subglotică, 30–45°, circuit neschimbat) versus clinostatismul și schimbul zilnic de circuit.',
 ['Întreruperea zilnică a sedării și SBT sunt punctele (1) și (2).','Mobilizarea precoce și aspirația subglotică sunt punctele (3) și (4).','Unghiul 30–45° este punctul (5).','Schimbarea circuitului doar dacă e murdar/defect este punctul (6).','Textul cere 30–45° și schimbarea selectivă a circuitului, nu clinostatism și schimb zilnic.']],
 8,'Inversează unghiul patului și regula circuitului, două elemente consecutive din lista numerotată de prevenție.',['30-45°','aspiraţie subglotic']),

q(30,['Identificați afirmația corectă privind infecțiile de tract urinar postoperatorii:',
 ['Diagnosticul clasic se stabilește prin cultură cantitativă de peste 100.000 de organisme/mL; bacteriuria de sondă nu este, de obicei, sursa febrei, iar bacteriemia urinară este neobișnuită fără obstrucție','Orice cultură pozitivă pe sondă impune atribuirea febrei tractului urinar, fără a căuta alte surse','Cateterul endovezical nu influențează riscul de ITU, durata menținerii fiind indiferentă','Bacteriemia cu punct de plecare urinar este regula la pacientul cu sondă, chiar fără obstrucție','Pragul diagnostic este 1.000 de organisme/mL, identic periajului bronșic protejat din PAV'],'A',79,'ITU asociate cateterului — 100.000/mL și febra',
 'Contrastarea pragului de 100.000/mL și a faptului că bacteriuria de sondă nu explică febra, față de atribuirea neselectivă a febrei la ITU.',
 ['Pragul >100.000/mL, caracterul neseptic al bacteriuriei de sondă și raritatea bacteriemiei fără obstrucție sunt explicite.','Textul cere căutarea altor surse de febră chiar și cu culturi urinare pozitive.','Prezența cateterului este cel mai mare factor de risc; durata menținerii contează.','Bacteriemia sistemică din tractul urinar este descrisă ca neobișnuită fără obstrucție.','1.000 CFU/mL este pragul periajului bronșic protejat, nu al urinii.']],
 8,'Atribuie febra postoperatorie bacteriuriei de sondă și permută 100.000 cu pragul 10³ al PAV.',['100.000','cateter endo-vezical']),

q(31,['Infecțiile tractului biliar se caracterizează prin:',
 ['Bacteriile cel mai frecvent implicate sunt Escherichia coli, Klebsiella spp. și Enterococcus spp.; anaerobii sunt rar întâlniți','La pacienții cu anastomoză bilio-enterală, probabilitatea de contaminare cu anaerobi este crescută','Colecistita acută debutează cu obstrucția canalului cistic prin material litiazic','Anaerobii predomină în colecistita simplă, E. coli fiind absent','Obstrucția canalului cistic nu joacă rol, colecistita fiind o bacteriemie hematogenă izolată'],'ABC',82,'Infecțiile tractului biliar — Floră și colecistită',
 'Recunoașterea triadei E. coli–Klebsiella–Enterococcus, a anaerobilor la anastomoza bilio-enterală și a obstrucției cistice.',
 ['Cei trei patogeni și raritatea anaerobilor sunt explicite.','Excepția anastomozei bilio-enterale este citată.','Obstrucția cistică litiazică este debutul descris al colecistitei acute.','Anaerobii sunt rari în absența anastomozei; E. coli este primul listat.','Mecanismul este obstrucție cistică plus proliferare în spațiu închis, nu bacteriemie hematogenă izolată.']],
 8,'Pune anaerobii ca floră dominantă a colecistitei simple și anulează obstrucția cistică, două erori de etiopatogenie.',['Escherichia coli','anastomoză bilio-enterală']),

q(32,['Comparând peritonita primară cu cea secundară:',
 ['Peritonita primară este, de obicei, monomicrobiană și mai frecventă la alcoolicii cu ascită și la imunocompromiși, fără întreruperea continuității tractului GI','Peritonita secundară urmează contaminării din tractul GI perforat sau prin catetere de dializă peritoneală și este, de obicei, polimicrobiană','Peritonita primară este polimicrobiană prin perforație colonică, iar cea secundară este monomicrobiană la cirotic','Dializa peritoneală nu este o cale de peritonită secundară','Apărarea de tip „abdomen de lemn” exclude peritonita generalizată'],'AB',82,'Peritonita acută — Primară versus secundară',
 'Contrastarea monomicrobianului (ascită, imunocompromis) de polimicrobianul prin perforație GI sau cateter de DP.',
 ['Definiția peritonitei primare (monomicrobiană, ascită, imunocompromis) este explicită.','Originea prin perforație sau cateter de DP și caracterul polimicrobian sunt enunțate.','Atribuțiile sunt inversate față de text.','Cateterele de dializă peritoneală sunt o cauză citată de peritonită secundară.','„Abdomenul de lemn” este tocmai caracteristic peritonitei generalizate, pe pagina următoare.']],
 8,'Oglindește mono- versus polimicrobian între primară și secundară și uită cateterul de dializă peritoneală.',['monomicrobiană','polinucrobiană'],[83]),

q(33,['Muşcăturile mâinii se caracterizează prin:',
 ['Muşcăturile umane sunt singurele leziuni penetrante ale mâinii care nu se închid primar','Flora orală umană include Eikenella corrodens, care poate produce supurații de-a lungul tecilor tendinoase','Muşcăturile de câine sau pisică implică cel mai uzual specii aerobe precum Pasteurella','Muşcăturile umane se suturează primar, flora orală fiind nepatogenă','Pasteurella este patogenul tipic al mușcăturii umane, Eikenella aparținând flora canină'],'ABC',82,'Infecțiile mâinii — Muşcături umane versus animale',
 'Diferențierea interdicției de închidere primară și a Eikenella (uman) de Pasteurella (câine/pisică).',
 ['Regula de a nu închide primar mușcătura umană este explicită.','Eikenella corrodens și distrucția tecilor sunt citate.','Pasteurella ca agent uzual al mușcăturilor animale este enunțată.','Textul cere opusul: mușcătura umană nu se închide primar.','Atribuirea Eikenella/Pasteurella este inversată.']],
 8,'Suturează primar mușcătura umană și permută Eikenella cu Pasteurella, două capcane de urgență din același paragraf.',['Eikenella corrodens','Pasteurella']),

q(34,['Conform Tabelului 8-7, profilaxia tetanosului la adultul 19–64 de ani include:',
 ['Istoric necunoscut sau <3 doze, plagă curată minoră: Tdap/Td da, IGT nu','Istoric necunoscut sau <3 doze, celelalte plăgi: Tdap/Td da și IGT da','≥3 doze, plagă curată minoră: fără rapel, exceptând dacă au trecut >10 ani de la ultima doză de TT','≥3 doze, celelalte plăgi: fără IGT; rapel dacă au trecut >5 ani de la ultima doză de TT','La ≥3 doze, IGT se administrează de principiu și în plaga curată minoră, rapelul fiind superfluu'],'ABCD',81,'Tabelul 8-7 — Profilaxia tetanosului după numărul de doze',
 'Aplicarea matricei Tdap/IGT: <3 doze (IGT doar la plăgile ne-curate) versus ≥3 doze (rapel la >10 ani curat, >5 ani celelalte).',
 ['Prima linie a tabelului: vaccin da, IGT nu în plaga curată.','Aceeași linie, coloana „toate celelalte”: vaccin și IGT.','Nota de subsol: rapel dacă >10 ani de la TT în plaga curată.','Nota: rapel dacă >5 ani în celelalte plăgi, fără IGT.','La ≥3 doze IGT nu se dă; rapelul rămâne condiționat de interval.']],
 8,'Dă IGT neselectiv după ≥3 doze și confundă ferestrele >10 ani (curat) cu >5 ani (plagă predispozantă).',['> 10 ani','> 5 ani']),

q(35,['Conform Tabelului 8-5, furunculul/carbunculul și limfangita se recunosc prin:',
 ['Furunculul/carbunculul: stafilococ, indurație localizată cu drenaj purulent; tratament prin incizie și drenaj plus antibiotice sistemice','Limfangita: streptococ, striuri de inflamație de-a lungul canalelor limfatice; îngrijire locală, antibiotice, îndepărtarea corpului străin și ridicarea extremității','Furunculul este clostridian, cu crepitații, și cere amputație de primă intenție','Limfangita se tratează doar prin oxigen hiperbar, fără antibiotice','Ambele sunt INTM polimicrobiene ale perineului, identice gangrenei Fournier'],'AB',80,'Tabelul 8-5 — Furuncul/carbuncul versus limfangită',
 'Diferențierea stafilococului localizat (I&D) de streptococul cu striuri limfatice și elevarea extremității, versus INTM/Fournier.',
 ['Etiologia stafilococică, aspectul localizat și I&D sunt tabelate.','Etiologia streptococică, striurile limfatice, corpul străin și elevarea sunt tabelate.','Crepitațiile și amputația țin de rândul gangrenă/INTM, nu de furuncul.','Limfangita primește antibiotice sistemice și îngrijire locală, nu OHB ca monoterapie.','Fournier este eponimul INTM genital/perineal, nu al furunculului sau limfangitei.']],
 8,'Mută clostridiile și Fournier pe furuncul/limfangită, două rânduri alăturate din același tabel.',['Furuncul','Limfangită']),
];
