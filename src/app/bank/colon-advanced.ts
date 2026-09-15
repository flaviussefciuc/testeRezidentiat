import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=219?p-83:p<=225?p-85:p-87;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('colon',15,pdfOffset,`colon-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const COLON_ADVANCED=[
q(1,['Vascularizația precară a colonului, cu risc ischemic crescut, este descrisă la nivelul:',
 ['Unghiului splenic, unde se întâlnesc sursele arterei mezenterice superioare și inferioare','Unghiului hepatic, unde teniile converg pentru a forma rectul','Colonului sigmoid, deoarece este retroperitoneal și fix','Cecului, dependent doar de artera mezenterică inferioară','Rectosigmoidului, unde arcada marginală începe de la arterele sigmoidiene'],'A',217,'Anatomie — Vascularizația colonului',
 'Recunoașterea unghiului splenic ca zonă de graniță vasculară între AMS și AMI.',
 ['Textul identifică unghiul splenic, unde se întâlnesc cele două surse de aport, ca zonă cu vascularizație relativ scăzută și risc ischemic.','Teniile converg la joncțiunea rectosigmoidiană, nu la unghiul hepatic.','Colonul sigmoid este intraperitoneal și mobil, spre deosebire de descendentul retroperitoneal.','Cecul și colonul ascendent sunt vascularizate de ramuri ale AMS, nu ale AMI.','Arcada marginală începe de la ramurile arterei colice drepte și se termină cu ramurile sigmoidiene.']],
 8,'Distractorii mută granița AMS/AMI și inversează statutul peritoneal al sigmoidului.',['unghiului splenic','Arcada arterială']),

q(2,['Diverticuloza colică se caracterizează prin:',
 ['În Statele Unite, o treime dintre adulții sub 50 de ani și peste două treimi dintre cei peste 80 de ani prezintă diverticuli','Majoritatea pacienților (80%) rămân asimptomatici întreaga viață','Cea mai frecventă localizare a bolii diverticulare este colonul sigmoid','Diverticulii congenitali (adevărați) sunt mai frecvenți pe partea stângă la populația vestică','Diverticulii dobândiți (falși) implică hernierea tuturor straturilor peretelui colic'],'ABC',222,'Afecțiuni benigne colonice — Diverticuloza',
 'Aplicarea prevalenței pe vârste, a ratei de asimptomatici și a distincției diverticul adevărat versus fals.',
 ['Prevalența de o treime sub 50 de ani și peste două treimi peste 80 de ani este citată.','Proporția de 80% asimptomatici este explicită.','Sigmoidul este descris ca localizarea cea mai frecventă.','Diverticulii adevărați sunt mai frecvenți pe partea dreaptă și la populația asiatică.','Diverticulii falși sunt hernia de mucoasă și submucoasă prin defecte musculare, nu a tuturor straturilor.']],
 8,'Inversează geografia diverticulului congenital și conținutul parietal al diverticulului dobândit.',['o treime dintre adulţii','peste două treimi']),

q(3,['Fistula colo-vezicală din diverticulită:',
 ['Este cea mai frecventă complicație fistulară provocată de diverticulită','Este mai frecventă la bărbați decât la femeile fără histerectomie, uterul acționând ca barieră','Prezența de aer în vezică după o instrumentare recentă confirmă fistula','Femeile cu histerectomie în antecedente nu dezvoltă fistule colo-vaginale','Traiectul fistulos este identificat imagistic în majoritatea cazurilor'],'AB',223,'Diverticulita — Complicații fistulare',
 'Recunoașterea fistulei colo-vezicale ca cea mai frecventă complicație fistulară și a rolului uterului ca barieră.',
 ['Textul o numește cea mai frecventă complicație fistulară a diverticulitei.','Predominanța la bărbați și rolul uterului ca barieră sunt explicite.','Aerul în vezică susține diagnosticul în absența unei instrumentări recente, nu după aceasta.','După histerectomie pot apărea fistule colo-vezicale sau colo-vaginale.','În majoritatea cazurilor traiectul nu este identificat, diagnosticul rămânând clinic.']],
 8,'Convertește o precauție (aer vezical post-instrumentare) într-un criteriu fals pozitiv și neagă fistulele post-histerectomie.',['Fistula colo-vezicală','fistulară provocată'],[224]),

q(4,['Indicațiile și strategia terapeutică în diverticulita complicată includ:',
 ['În 85% dintre cazuri, tratamentul diverticulitei acute este inițial medical','Abcesele de mari dimensiuni (>5 cm) se tratează prin drenaj percutan, repaus intestinal și antibioterapie intravenoasă','Aproximativ 40% dintre pacienții neoperați după un abces mare vor dezvolta un abces recurent','Perforația liberă intraperitoneală se tratează de obicei prin operație Hartmann','După două atacuri severe, sigmoidectomia este impusă uniform, episodul ulterior fiind cel mai grav'],'ABCD',224,'Tratamentul diverticulitei',
 'Aplicarea pragului de 5 cm pentru drenajul percutan, a ratei de recurență de 40% și a operației Hartmann, față de individualizarea după două atacuri.',
 ['Proporția de 85% tratament medical inițial este citată.','Pragul >5 cm și drenajul percutan sunt tabelate în text.','Rata de recurență de 40% la neoperați este explicită.','Hartmann (sigmoidectomie, colostomie terminală, bont rectal) este descris ca cea mai frecventă urgență.','Episodul inițial este de obicei cel mai sever; abordarea actuală este individualizată, nu uniformă după două atacuri.']],
 8,'Păstrează patru praguri operaționale și inversează evoluția naturală (episodul index ca cel mai sever).',['ln 85% dintre','>5 cm']),

q(5,['În hemoragia diverticulară sunt adevărate următoarele:',
 ['Hemoragia masivă necesită transfuzia a mai mult de 4 unități de sânge în 24 de ore pentru menținerea echilibrului hemodinamic','Arteriografia mezenterică detectează o pierdere de sânge de cel puțin 0,5 mL/minut','Injectarea de vasopresină oprește hemoragia în 80% dintre cazuri, dar peste 50% dintre pacienți vor resângera','Embolizarea transarterială cu spirale este lipsită de risc de ischemie colonică','Imagistica nucleară este mai puțin sensibilă decât colonoscopia și angiografia'],'ABC',225,'Hemoragia diverticulară',
 'Aplicarea definiției hemoragiei masive, a pragului angiografic de 0,5 mL/min și a rolului temporizator al vasopresinei.',
 ['Definiția de peste 4 unități/24 de ore este explicită.','Pragul de 0,5 mL/minut pentru arteriografie este citat.','Oprirea în 80% și resângerarea la peste 50% sunt descrise, vasopresina fiind o măsură de temporizare.','Embolizarea cu spirale asociază un risc de 6–22% de ischemie și infarct colonic.','Imagistica nucleară este mai sensibilă decât colonoscopia și angiografia.']],
 8,'Combină trei praguri cantitative cu inversarea sensibilității scintigrafiei și a riscului embolizării.',['0,5 mL/minut','4 unităţi de sânge']),

q(6,['Ocluzia intestinului gros la adult se caracterizează prin:',
 ['Cauzele cele mai frecvente sunt cancerul de colon sau rect, boala diverticulară și volvulusul de colon','Ocluzia prin bride, frecventă la intestinul subțire, este extrem de rară la nivelul colonului','Valvula ileocecală competentă, întâlnită la circa 75% dintre pacienți, creează o ansă închisă între valvă și obstacolul distal','Dacă valvula ileocecală este incompetentă, semnele sunt practic identice cu cele ale ocluziei intestinului subțire','Volvulusul colonic rezultă din torsiunea unui segment în jurul axului său antiperistaltic, nu mezenteric'],'ABCD',228,'Ocluzia intestinului gros',
 'Diferențierea cauzelor de ocluzie colonică de bridele intestinului subțire și recunoașterea ansei închise prin valva ileocecală competentă.',
 ['Triada etiologică cancer–diverticul–volvulus este enumerată explicit.','Raritatea bridelor la colon, spre deosebire de intestinul subțire, este subliniată.','Competența la aproximativ 75% și formarea ansei închise sunt descrise.','Identitatea semnelor cu OIS când valva este incompetentă este explicită.','Volvulusul este torsiunea în jurul axului mezenteric, nu antiperistaltic.']],
 8,'Testează competența valvei ileocecale (75%) și mută axul volvulusului, pe contrastul bride versus cauze colonice.',['aproximativ 75%','ansă închisă']),

q(7,['În pseudo-ocluzia acută a colonului (sindromul Ogilvie), ischemia sau perforația sunt sugerate de diametrul cecului peste:',
 ['12 cm','6 cm','8 cm','9 cm','15 cm'],'A',230,'Pseudo-ocluzia acută a colonului',
 'Recunoașterea pragului de 12 cm al cecului ca marker de ischemie sau perforație în sindromul Ogilvie.',
 ['Textul citează febra, leucocitoza semnificativă și diametrul cecului >12 cm ca factori ce pot indica ischemia sau perforația.','6 cm nu este pragul descris pentru cec în POAC.','8 cm nu figurează ca prag de ischemie/perforație.','9 cm nu este pragul citat.','15 cm depășește pragul textual de 12 cm și nu este valoarea folosită pentru decizie.']],
 8,'Prag numeric ușor de confuzat cu alte diametre de viscer dilatat din același capitol.',['> 12 cm','sindrom Ogilvie']),

q(8,['Screeningul și epidemiologia cancerului colorectal:',
 ['HNPCC (sindromul Lynch) reprezintă 5% dintre cancerele de colon, cu predilecție pentru colonul drept la 30–40 de ani','Tumorile sincrone se dezvoltă la 5% dintre pacienți, iar cele metacrone la 3–5%','Incidența maximă este la 70 de ani, iar 90% dintre cancerele colorectale se dezvoltă după 50 de ani','Persoanele cu risc mediu încep screeningul la 30 de ani, cu colonoscopie anuală','Sindromul PAF este responsabil de 10% din cancerele colorectale'],'ABC',232,'Cancerul colorectal — Screening și epidemiologie',
 'Diferențierea HNPCC de PAF și aplicarea vârstelor de screening și a ratelor de tumori sincrone/metacrone.',
 ['Proporția de 5%, localizarea dreaptă și vârsta 30–40 de ani sunt explicite.','Ratele 5% sincrone și 3–5% metacrone sunt citate.','Vârful la 70 de ani și 90% după 50 de ani sunt menționate.','Risc mediu: screening de la 50 de ani; colonoscopia la fiecare 10 ani, nu anual de la 30.','PAF este responsabil de 1% din cancerele colorectale, nu de 10%.']],
 8,'Deplasează vârsta de screening și umflă ponderea PAF, pe lângă cifrele HNPCC/sincrone ușor de amestecat.',['5% dintre cancerele de colon','90% dintre'],[231]),
];
