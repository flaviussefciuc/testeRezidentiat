import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-55;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('infectii-chir',8,pdfOffset,`infectii-chir-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const INFECTII_CHIR_ADVANCED=[
q(1,['Alegeți afirmațiile corecte referitoare la factorii care cresc incidența infecțiilor chirurgicale:',
 ['Factorii locali includ hematomul de plagă, țesutul necrotic, corpul străin, obezitatea și contaminarea','Factorii sistemici includ vârsta înaintată, șocul, diabetul, malnutriția, alcoolismul și corticoterapia','Hematoamele constituie un mediu bogat în fier care potențează multiplicarea bacteriană','Oxigenarea ineficientă la nivelul zonei contaminate scade riscul de infecție, prin inhibarea bacteriilor anaerobe','Țesuturile devitalizate nu favorizează dezvoltarea bacteriană, deoarece lipsa celulelor de apărare este compensată de inflamație'],'ABC',75,'Patogenia infecțiilor — Factorii de risc',
 'Diferențierea factorilor locali de cei sistemici și a rolului hematomului și al țesutului devitalizat ca mediu de proliferare.',
 ['Lista factorilor locali este tabelată explicit.','Lista factorilor sistemici este tabelată explicit.','Mediul bogat în fier al hematomului este descris.','Oxigenarea ineficientă crește, nu scade, riscul de infecție.','Țesuturile devitalizate sunt un mediu propice prin absența celulelor de apărare.']],
 8,'Inversează două relații patogenice (oxigenare și țesut devitalizat) pe fondul listelor tabelate.',['Hematom de plagă','Tesut necrotic']),

q(2,['Sunt adevărate următoarele afirmații despre antibioterapia profilactică perioperatorie:',
 ['Doza preoperatorie se administrează, de regulă, cu o oră înainte de incizie, pentru a asigura concentrația tisulară maximă','Fluorochinolonele și vancomicina necesită administrare pe 1–2 ore, deci se încep cu 120 de minute înainte de incizie','Antibioticele sistemice administrate după contaminarea plăgii rămân la fel de eficiente în stoparea procesului infecțios ca cele preoperatorii','Cazurile curate, cu risc redus de contaminare, necesită în toate situațiile antibioterapie profilactică, indiferent de materialele folosite','Dozele suplimentare intraoperatorii nu sunt necesare, indiferent de durata intervenției sau de pierderile de sânge'],'AB',76,'Antibioterapie perioperatorie',
 'Aplicarea timing-ului corect al profilaxiei (inclusiv excepțiile vanco/FQ) față de administrarea tardivă sau profilaxia neselectivă.',
 ['Administrarea cu o oră înainte de incizie este regula generală.','Excepția de 120 de minute pentru FQ și vancomicină este explicită.','Textul precizează că antibioticele după contaminare nu sunt eficiente în stoparea procesului.','Cazurile curate nu necesită profilaxie, cu excepția materialelor protetice.','Doze suplimentare sunt necesare dacă durata depășește 2× t½ sau există pierderi excesive de sânge.']],
 8,'Inversează timing-ul relativ la contaminare și generalizează greșit profilaxia la toate cazurile curate.',['cu o oră înainte','120 de minute']),

q(3,['Conform clasificării plăgilor chirurgicale după nivelul de contaminare, sunt corecte afirmațiile:',
 ['Plăgile curate au o frecvență a infecției de aproximativ 3% și sursa tipică este flora Gram-pozitivă din sala de operație, echipă sau tegument','Plăgile curat-contaminate au o frecvență a infecției de 5–15% și implică colonizarea endogenă a pacientului','Plăgile contaminate au o frecvență a infecției de 15–40% și reflectă contaminare macroscopică, de exemplu cu conținut digestiv','Plăgile curate au o frecvență a infecției de 15–40%, similară plăgilor contaminate','Rezecția electivă de colon este un exemplu tipic de plagă curată, fără colonizare endogenă'],'ABC',77,'Clasificarea plăgilor chirurgicale după nivelul de contaminare',
 'Aplicarea frecvențelor de infecție și a exemplelor tipice pe clasele curat / curat-contaminat / contaminat.',
 ['3% și flora Gram-pozitivă pentru plăgile curate sunt tabelate.','5–15% și colonizarea endogenă definesc curat-contaminatul.','15–40% și contaminarea macroscopică definesc contaminatul.','15–40% aparține clasei contaminate, nu celei curate.','Rezecția electivă de colon este exemplu de plagă curat-contaminată.']],
 8,'Distractorii deplasează pragurile procentuale între clase și reclasifică greșit rezecția de colon.',['3%','5-15%']),

q(4,['Indicați afirmațiile corecte despre selecția antibioterapiei profilactice în funcție de tipul intervenției:',
 ['Cazurile curate cu risc redus de contaminare nu necesită, de regulă, antibioterapie profilactică','Profilaxia este indicată când se folosesc materiale protetice (mese, dispozitive ortopedice, grefe vasculare sintetice)','Chirurgia tubului digestiv inferior necesită adăugarea acoperirii anaerobilor, pe lângă acoperirea Gram-pozitivă și Gram-negativă','Chirurgia digestivă superioară necesită acoperire doar a anaerobilor, fără acoperire Gram-negativă','Riscul de infecție a plăgii în cazurile curat-contaminate este identic cu cel din cazurile curate'],'ABC',76,'Antibioterapie perioperatorie — Selecția după tipul intervenției',
 'Diferențierea necesității de profilaxie în cazurile curate versus cu material protetic și a spectrului necesar pe etaje digestive.',
 ['Absența profilaxiei de rutină în cazurile curate este explicită.','Excepția materialelor protetice este menționată.','Acoperirea anaerobilor în chirurgia digestivă inferioară este cerută.','Digestivul superior necesită acoperire Gram-pozitivă și Gram-negativă, nu doar anaerobi.','Riscul în curat-contaminat este de trei ori mai mare decât în curat.']],
 8,'Inversează spectrul pentru etajul digestiv superior și anulează diferența de risc curat vs curat-contaminat.',['materiale protetice','anaerobilor']),

q(5,['Care dintre următoarele afirmații despre infecțiile piciorului la pacientul diabetic sunt adevărate?',
 ['Rezultă frecvent din neuropatie, deformări osoase consecutive și degenerare vasculară, cu ulcerații ischemice și de presiune','Ulcerele plantare la nivelul capetelor metatarsienelor sunt tipice pentru ulcerațiile de presiune','În toate cazurile de celulită dorsală se impune căutarea unei surse plantare','Infecțiile piciorului diabetic sunt tipic monomicrobiene, cauzate doar de stafilococ auriu','Osteomielita piciorului diabetic apare numai când plaga prezintă semne evidente de infecție activă'],'ABC',82,'Infecții ale piciorului — Pacientul diabetic',
 'Recunoașterea mecanismelor ulcerației diabetice și a necesității de a căuta sursa plantară în celulita dorsală.',
 ['Triada neuropatie–deformare–degenerare vasculară este descrisă.','Ulcerele plantare la capetele metatarsienelor sunt tipice.','Căutarea sursei plantare în celulita dorsală este o regulă explicită.','Infecțiile sunt de natură polimicrobiană, inclusiv Pseudomonas.','Osteomielita poate fi prezentă chiar fără semne de infecție activă a plăgii.']],
 8,'Inversează natura polimicrobiană și legătura osteomielită–aspectul plăgii, două erori clinice frecvente.',['capetelor metatarsienelor','surse plantare']),

q(6,['Sunt adevărate următoarele afirmații despre ulcerul gastroduodenal perforat:',
 ['Aproximativ 80% dintre pacienți au pneumoperitoneu la radiografia toracică simplă în ortostatism','Toți pacienții cu ulcer perforat trebuie testați pentru Helicobacter pylori','Perforația la pacienții cu aclorhidrie (endogenă sau indusă medicamentos) necesită terapie antifungică empirică','Antibioterapia perioperatorie pe aerobi și anaerobi este rezervată doar perforațiilor vechi de peste 72 de ore','CT-ul este mai puțin sensibil decât radiografia simplă în detectarea pneumoperitoneului'],'ABC',83,'Peritonita — Ulcer gastroduodenal perforat',
 'Aplicarea sensibilității imagistice, a testării H. pylori și a indicației antifungice în aclorhidrie.',
 ['80% cu pneumoperitoneu pe Rx în ortostatism este cifra citată.','Testarea H. pylori este obligatoriu menționată pentru toți.','Terapia antifungică empirică în aclorhidrie este o precizare importantă.','Antibioterapia pe aerobi/anaerobi este indicată pentru perforațiile acute <24 h; prelungirea e pentru peritonită purulentă/abces.','CT-ul este mai sensibil decât radiografia simplă.']],
 8,'Inversează timing-ul antibioterapiei și relația de sensibilitate CT versus radiografie.',['80%','Helicobacter']),

q(7,['Alegeți afirmațiile corecte privind perforația apendiculară și perforația colonică:',
 ['În absența intervenției, perforația apendiculară poate apărea în termen de 24 de ore de la debutul simptomelor','Antibioterapia în apendicită trebuie îndreptată atât împotriva aerobilor enterici (E. coli), cât și a anaerobilor (Bacteroides fragilis)','Perforația colonică cu peritonită difuză creează, de regulă, cel mai virulent tip de peritonită, din cauza concentrației mari de floră aerobă și anaerobă','Perforațiile colonului se tratează, de regulă, doar cu antibiotice, fără rezecție sau deviere a tranzitului','O perforație apendiculară limitată, cu abces periapendiceal, produce în mod tipic peritonită generalizată tip „abdomen de lemn”'],'ABC',83,'Peritonita — Apendicita și perforația colonică',
 'Diferențierea peritonitei localizate de cea difuză și a virulenței particulare a perforației colonice.',
 ['Fereastra de 24 de ore până la perforație este menționată.','Acoperirea E. coli și B. fragilis este explicită.','Virulența maximă a perforației colonice este afirmată.','Managementul perforației colonice necesită, de regulă, rezecție și deviere a tranzitului.','Abcesul periapendiceal poate induce doar durere și apărare în fosa iliacă dreaptă, nu peritonită generalizată.']],
 8,'Extinde greșit tabloul localizat la peritonită generalizată și omită necesitatea rezecției în perforația colonică.',['24 de ore','Bacteroides'],[84]),
];
