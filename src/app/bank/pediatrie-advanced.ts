import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('pediatrie',10,pdfOffset,`pediatrie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const PEDIATRIE_ADVANCED=[
q(1,['Semnul auscultator caracteristic defectului septal atrial este:',
 ['Dedublarea largă și fixă a zgomotului Z2','Suflu pansistolic la marginea inferioară stângă a sternului','Suflu continuu „de tunel” în spațiul intercostal II','Z2 pulmonar accentuat, fără dedublare fixă','Z2 unic asociat cu suflu sistolic de ejecție'],'A',213,'Cardiologie pediatrică — Defectul septal atrial',
 'Diferențierea auscultatorie a DSA de DSV, PCA și tetralogia Fallot.',
 ['Textul descrie la DSA un Z2 larg dedublat fix.','Suflul pansistolic la marginea inferioară stângă a sternului caracterizează DSV.','Suflul continuu „de tunel” este descris în PCA.','Z2 pulmonar accentuat, fără dedublare fixă, este citat la DSV.','Z2 unic cu suflu sistolic de ejecție este descris în tetralogia Fallot.']],
 8,'Distractorii sunt sufluri și zgomote reale din defecte congenitale învecinate din același capitol.',['Z2 larg dedublat fix','deviaţie axială dreaptă'],[212,214]),

q(2,['Circulația fetală și adaptarea neonatală se caracterizează prin:',
 ['Arterele ombilicale duc sângele neoxigenat la placentă','Venele ombilicale duc sângele oxigenat de la placentă către sistemul portal','Scăderea prostaglandinei E2 duce la închiderea canalului arterial','Arterele ombilicale duc sângele oxigenat de la placentă','Creșterea presiunii în atriul drept închide foramen ovale'],'ABC',212,'Cardiologie pediatrică — Circulația fetală',
 'Recunoașterea direcției fluxurilor ombilicale și a mecanismelor de închidere a șunturilor fetale.',
 ['Textul precizează că arterele ombilicale transportă sânge neoxigenat spre placentă.','Venele ombilicale aduc sânge oxigenat de la placentă la sistemul portal.','Scăderea PGE2 este mecanismul citat al închiderii canalului arterial.','Direcția este inversată față de descrierea din text.','Închiderea foramenului ovale urmează scăderii presiunilor în VCI și în atriul drept, nu creșterii lor.']],
 8,'Distractorii inversează oxigenarea sângelui ombilical și sensul modificării de presiune care închide foramen ovale.',['prostaglandină E2','foramenului ovale']),

q(3,['Persistența canalului arterial:',
 ['Realizează un șunt stânga-dreapta, de la aortă la artera pulmonară','Indometacinul induce închiderea canalului','Prostaglandina E induce închiderea canalului','Este mai frecventă la sexul masculin','Șuntul este dreapta-stânga, de la artera pulmonară la aortă'],'AB',214,'Cardiologie pediatrică — Persistența canalului arterial',
 'Corelarea direcției șuntului cu tratamentul care închide, respectiv menține, canalul arterial.',
 ['Șuntul stânga-dreapta aortă–pulmonară este explicit.','Indometacinul este agentul care induce închiderea.','Prostaglandina E menține canalul deschis, fiind folosită în transpoziție.','Textul citează predominanța la sexul feminin.','Direcția șuntului este inversată față de text.']],
 8,'Distractorii inversează efectul indometacin versus prostaglandina E și sexul de predilecție.',['indometacinul induce','suflu continuu']),

q(4,['Epiglotita:',
 ['În trecut era cauzată cel mai frecvent de Haemophilus influenzae tip b','Radiografia poate evidenția semnul degetului mare','Examinarea gâtului se face de rutină în cabinet, înainte de asigurarea căii aeriene','Antibioterapia citată este ceftriaxona timp de 7 până la 10 zile','Cazurile ușoare se tratează cu epinefrină în aerosoli, ca în laringotraheită'],'ABD',217,'Probleme pulmonare — Epiglotita',
 'Recunoașterea etiologiei, a semnului radiologic și a conduitei de urgență în epiglotită.',
 ['Textul identifică Hib ca agentul istoric principal.','Semnul degetului mare este descris pe radiografia laterală.','Examinarea gâtului se face doar într-o unitate unde intubația promptă este posibilă.','Durata de 7–10 zile cu ceftriaxonă este explicită.','Epinefrina în aerosoli este tratamentul crupului sever, nu al epiglotitei.']],
 8,'Distractorii aplică conduita din crup și neagă precauția de a nu examina gâtul fără cale aeriană asigurată.',['semnul degetului mare','ceftriaxonă'],[216]),

q(5,['Bronșiolita:',
 ['Este cauzată în majoritatea cazurilor de virusul sincițial respirator','Bronhodilatatoarele inhalatorii și glucocorticoizii sistemici sunt indicați de rutină','Apare de obicei iarna și primăvara, la copiii sub 2 ani','Radiografia toracică este necesară pentru diagnostic','Agentul etiologic tipic este Bordetella pertussis'],'AC',217,'Probleme pulmonare — Bronșiolita',
 'Identificarea etiologiei VSR și a tratamentului suportiv, fără bronhodilatatoare de rutină.',
 ['VSR este agentul majorității cazurilor.','Textul precizează că bronhodilatatoarele și glucocorticoizii sistemici nu sunt indicați.','Sezonalitatea iarnă–primăvară și vârsta sub 2 ani sunt explicite.','Radiografia nu este necesară pentru diagnostic.','Bordetella pertussis produce tusea convulsivă, nu bronșiolita.']],
 8,'Distractorii recomandă tocmai medicația pe care textul o exclude și confundă etiologia cu pertussisul.',['virusul sinciţial respirator','nu sunt indicaţi']),

q(6,['Manifestarea care poate fi unică a pertussisului la sugar este:',
 ['Apneea','Sunetul inspirator „convulsiv” din faza paroxistică','Emeza care urmează crizei de tuse','Limfocitoza marcată','Febra înaltă cu stridor și hipersalivație'],'A',217,'Probleme pulmonare — Pertussis',
 'Recunoașterea prezentării atipice a tusei convulsive la sugar.',
 ['Nota „De reținut” precizează că apneea poate fi singura manifestare la sugar.','Sunetul convulsiv este tipic fazei paroxistice, nu forma unică la sugar.','Emeza aparține fazei paroxistice clasice.','Limfocitoza este un element de laborator nespecific.','Febra înaltă cu stridor și hipersalivație descrie epiglotita.']],
 8,'Distractorii sunt elemente reale ale pertussisului clasic sau ale epiglotitei, nu prezentarea unică a sugarului.',['Apneea poate fi','tuse convulsivă']),

q(7,['Sindromul de detresă respiratorie a nou-născutului:',
 ['Rezultă din deficitul de surfactant prin imaturitate pulmonară','Radiografia arată atelectazie bilaterală cu aspect de sticlă mată','Corticosteroizii administrați mamei înainte de naștere grăbesc maturarea pulmonară','Intubația traheală pentru aspirarea secrețiilor rămâne recomandată la sugarii cu aspirație de meconiu','Raportul lecitină/sfingomielină sub 2 definește maturitatea pulmonară'],'ABC',218,'Probleme pulmonare — Sindromul de detresă respiratorie',
 'Recunoașterea mecanismului, a imaginii radiologice și a rolului corticosteroizilor antenatali.',
 ['Deficitul de surfactant la prematuri este cauza citată.','Aspectul de sticlă mată cu volume pulmonare scăzute este explicit.','Administrarea antenatală de corticosteroizi este tratamentul care grăbește maturarea.','În aspirația de meconiu intubația pentru aspirație nu mai este recomandată.','Maturitatea este sugerată de raport L:S peste 2, nu sub 2.']],
 8,'Distractorii importă o manevră abandonată din aspirația de meconiu și inversează pragul L:S.',['corticosteroizi mamei','substituţie a surfactantului'],[217]),

q(8,['Invaginația intestinală:',
 ['Este cea mai frecventă cauză de obstrucție intestinală în primii 2 ani de viață','Scaunul poate avea aspect de jeleu de coacăze','Ecografia este investigația de primă linie','Clisma cu aer contrast poate reduce defectul','Segmentul telescopat este situat cel mai frecvent distal de valva ileocecală'],'ABCD',220,'Tulburări gastro-intestinale — Invaginația',
 'Recunoașterea tabloului clinic, a imagisticii de primă linie și a reducerii neschirurgiale.',
 ['Nota „De reținut” o identifică drept cea mai frecventă obstrucție în primii 2 ani.','Scaunul cu mucus și sânge, aspect de jeleu de coacăze, este descris.','Ecografia este citată ca investigație de primă linie.','Clisma baritată cu aer contrast poate reduce defectul.','Textul localizează invaginația cel mai frecvent proximal de valva ileocecală.']],
 8,'Distractorul inversează raportul anatomic față de valva ileocecală, restul opțiunilor fiind fapte alăturate ușor de amestecat cu volvulusul.',['jeleu de coacăze','prima linie']),

q(9,['Diverticulul Meckel și urgențele chirurgicale neonatale:',
 ['Regula celor 2 include predilecția de 2 ori mai mare la băieți și localizarea la circa 60 cm de valva ileocecală','Există două tipuri de țesut ectopic, gastric și pancreatic, iar leziunea este găsită la 2% din populație','Nou-născutul cu vărsături bilioase necesită consult chirurgical de urgență pentru suspiciunea de malrotație cu volvulus','Diverticulul Meckel este de 20 de ori mai frecvent la fete și se găsește la 20% din populație','Vărsăturile bilioase la nou-născut se tratează întâi conservator, volvulusul fiind o diagnostic de excludere tardivă'],'ABC',221,'Tulburări gastro-intestinale — Diverticulul Meckel',
 'Aplicarea regulii celor 2 și recunoașterea vărsăturilor bilioase ca urgență chirurgicală.',
 ['Predilecția masculină dublă și distanța de 60 cm sunt din nota „De reținut”.','Cele două tipuri de țesut ectopic și prevalența de 2% sunt explicite.','Consultul chirurgical de urgență pentru vărsături bilioase este cerut explicit.','Cifrele 20/20 inversează atât sexul, cât și prevalența.','Textul cere consult chirurgical până la proba contrarie, nu expectativă prelungită.']],
 8,'Distractorii exagerează cu un ordin de mărime prevalența și amână o urgență pe care textul o tratează ca volvulus până la proba contrarie.',['Regula celor 2','vărsături bilioase']),

q(10,['Petele Koplik sunt caracteristice pentru:',
 ['Rujeolă (pojar)','Rubeolă (pojarul german)','Eritemul infecțios (a cincea boală)','Pertussis','Epiglotită'],'A',242,'Infecții — Rujeola',
 'Asocierea leziunilor enantematoase patognomonice cu exantemul corespunzător.',
 ['Petele Koplik, albe-albăstrui pe mucoasa jugală în dreptul molarului 2, definesc rujeola.','Rubeola asociază petele Forchheimer pe palatul moale.','Eritemul infecțios produce rash-ul de „obraji pălmuiți” prin Parvovirus B19.','Pertussisul nu are enantem de tip Koplik.','Epiglotita se manifestă prin disfagie, hipersalivație și stridor, nu prin pete Koplik.']],
 8,'Distractorii sunt enanteme sau exanteme reale din același subcapitol de boli eruptive.',['pete Koplik','mucoasa jugală']),

q(11,['Convulsiile febrile:',
 ['Apar la copii între 6 și 60 de luni, asociate cu febră, în absența infecției SNC','Forma simplă este generalizată, durează sub 15 minute și nu se repetă de mai mult de un episod în 24 de ore','Antipireticele scad riscul ulterior de convulsii febrile','EEG-ul nu este necesar de rutină în convulsiile febrile simple','Acidul acetilsalicilic se evită ca antipiretic la copii mici din cauza riscului de sindrom Reye'],'ABDE',225,'Probleme neurologice — Convulsiile febrile',
 'Definirea convulsiilor febrile simple și recunoașterea limitelor antipirezelor și ale EEG-ului.',
 ['Intervalul 6–60 de luni și absența infecției SNC sunt criteriile din text.','Cele trei trăsături ale formei simple sunt enumerate explicit.','Nota „De reținut” precizează că antipireticele nu scad riscul de convulsii febrile.','EEG-ul nu este necesar de rutină și este de obicei normal.','Evitarea ASA din cauza sindromului Reye este indicată în „Pasul următor”.']],
 8,'Distractorul atribuie antipireticelor un efect preventiv pe care textul îl neagă explicit.',['nu scad riscul','sindrom Reye'],[224]),

q(12,['Botulismul infantil:',
 ['Mierea este contraindicată la copiii sub 1 an din cauza riscului de botulism','Tratamentul include imunoglobulină botulinică intravenos','Toxina produce o blocadă colinergică postsinaptică','Antibioticele sunt prima linie, înaintea suportului respirator','Colonizarea cu Clostridium botulinum se produce în tractul respirator, nu în tractul digestiv'],'AB',227,'Probleme neurologice — Botulismul infantil',
 'Corelarea sursei (miere), a sediului colonizării și a tratamentului specific.',
 ['Nota „De reținut” contraindică mierea sub 1 an.','Imunoglobulina botulinică IV este tratamentul citat.','Blocada este presinaptică, nu postsinaptică.','Prioritare sunt protejarea căilor aeriene și imunoglobulina, nu antibioticele ca primă linie.','Colonizarea este gastrointestinală, cu producție in vivo de toxină.']],
 8,'Distractorii mută sinapsa, organul colonizat și ierarhia terapeutică.',['Mierea la copiii sub 1 an','Imunoglobulină botulinică']),

q(13,['Care dintre următoarele afirmații diferențiază corect șoldul septic de sinovita tranzitorie?',
 ['În șoldul septic, Staphylococcus aureus este cel mai frecvent microorganism la toate vârstele','Lichidul sinovial din șoldul septic depășește 50.000/mm³, cu VSH și PCR crescute','Sinovita tranzitorie are de obicei leucocite, VSH și PCR normale și este precedată de o viroză','Șoldul septic se tratează conservator cu AINS, ca sinovita tranzitorie','Sinovita tranzitorie impune consult ortopedic de urgență și aspirație articulară imediată'],'ABC',231,'Ortopedie pediatrică — Șoldul septic',
 'Separarea urgenței septice de entitatea benignă postvirală după markeri, lichid sinovial și conduită.',
 ['Predominanța stafilococului auriu este explicită.','Pragul de 50.000/mm³ și markerii inflamați definesc septicul.','Laboratorul normal sau aproape normal și prodromul viral definesc sinovita tranzitorie.','Tratamentul conservator cu AINS este al sinovitei tranzitorii, nu al septicului.','Consultul ortopedic de urgență și aspirația sunt ale șoldului septic.']],
 8,'Distractorii inversează conduita de urgență între cele două entități care se prezintă ambele cu șold flectat și rotat extern.',['50.000/mm3','Stafilococul auriu'],[230]),

q(14,['Vaccinările de rutină în copilărie:',
 ['Vaccinurile vii (varicelă, ROR, rotavirus, polio oral) sunt contraindicate la imunocompromiși','Prezența febrei sau a unei patologii ușoare nu reprezintă contraindicație absolută','La prematur, schema se calculează după vârsta gestațională corectată, nu după cea cronologică','Istoricul de imunodeficiență combinată severă și invaginația anterioară contraindică vaccinul rotavirus','Vaccinul Hib nu se administrează copiilor asplenici, din cauza riscului scăzut după 5 ani'],'ABD',233,'Monitorizarea sănătății — Vaccinări',
 'Aplicarea contraindicațiilor reale ale vaccinurilor vii și ale rotavirusului, distinct de miturile despre febră și prematuritate.',
 ['Contraindicația vaccinurilor vii la imunocompromiși este explicită.','Febra și bolile ușoare nu sunt contraindicații absolute.','La prematur se folosește vârsta cronologică, nu cea gestațională.','IDCS și invaginația anterioară sunt contraindicații pentru rotavirus.','Copiii asplenici trebuie să primească Hib și vaccin pneumococic, independent de vârstă.']],
 8,'Distractorii inversează regula vârstei la prematuri și excepția asplenicilor de la pragul de 5 ani al Hib.',['vaccinurile vii','invaginaţie anterioară']),
];
