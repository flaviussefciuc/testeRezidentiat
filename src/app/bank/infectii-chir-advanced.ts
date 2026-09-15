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

q(3,['Conform clasificării plăgilor chirurgicale după nivelul de contaminare:',
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

q(8,['Prevenția infecțiilor de plagă chirurgicală (IPC) include:',
 ['Duș cu săpun sau soluții antiseptice cu o seară înaintea intervenției','Părul corporal trebuie tuns și nu ras, imediat înaintea intervenției','Pregătirea tegumentelor include un agent antiseptic pe bază de alcool','Părul trebuie ras din timp, cu 24 de ore înainte, pentru a reduce flora','Durata intervenției, temperatura corporală și controlul glicemiei nu influențează rata IPC'],'ABC',75,'Prevenția infecțiilor chirurgicale — Pregătirea mecanică',
 'Aplicarea măsurilor de pregătire a câmpului (duș, tuns nu ras, antiseptic alcoolic) versus miturile despre rasul precoce.',
 ['Dușul cu săpun sau antiseptic cu o seară înainte este cerut explicit.','Tunsul, nu rasul, imediat înaintea intervenției, previne iritațiile care constituie porți de intrare.','Agentul antiseptic pe bază de alcool este precizat pentru reducerea florei endogene.','Rasul este descurajat tocmai pentru că irită tegumentul; îndepărtarea se face imediat preoperator, nu cu 24 de ore înainte.','Reducerea duratei, normotermia și controlul glicemiei scad semnificativ rata IPC.']],
 8,'Inversează regula tuns versus ras și anulează rolul duratei, temperaturii și glicemiei, trei măsuri din același paragraf.',['tuns şi nu ras','cu o seară înainte'],[76]),

q(9,['Se estimează că proporția pacienților spitalizați care vor dobândi cel puțin o infecție nosocomială în timpul internării este de:',
 ['5%','1%','20%','50%','80%'],'A',77,'Clasificarea după modul de dobândire — Infecțiile nosocomiale',
 'Recunoașterea incidenței de 5% a infecției nosocomiale, distinctă de alte procente din capitol (IPC 20%, PAV 22%).',
 ['Textul estimează că 5% dintre pacienții spitalizați vor dobândi cel puțin o infecție nosocomială.','1% subestimează incidența citată.','20% este ponderea IPC din infecțiile dobândite în spital, nu incidența nosocomială la internați.','50% corespunde riscului de infecție al plăgilor murdare, nu incidenței nosocomiale globale.','80% nu figurează ca incidență a infecțiilor nosocomiale.']],
 8,'Permută 5% (incidența nosocomială) cu 20% (ponderea IPC) și 50% (plăgi murdare) din același capitol.',['5% dinh','Infecţia nosocomială']),

q(10,['Febra postoperatorie:',
 ['Creșterea precoce a temperaturii este, de obicei, rezultatul atelectaziei pulmonare','Conform celor 6 „W”, „Wind” (vânt) corespunde zilelor 1–2, iar „Wound” (plagă) zilelor 3–5','Tratamentul cu antibiotice trebuie inițiat numai când a fost identificată o sursă infecțioasă specifică','Febra medicamentoasă este cauza cea mai frecventă și trebuie invocată înaintea oricărei alte etiologii','Infecțiile profunde și abcesele sunt identificate, de regulă, în primele 24 de ore'],'ABC',77,'Febra postoperatorie — Cei 6 W',
 'Aplicarea cronologiei celor 6 W și a principiului de a nu începe antibiotice fără sursă identificată.',
 ['Atelectazia este cauza uzuală a creșterii precoce de temperatură.','Tabelul plasează Wind la zilele 1–2 și Wound la zilele 3–5.','Antibioticele se inițiază doar după identificarea unei surse infecțioase specifice.','Febra medicamentoasă este rară și se ia în calcul doar după excluderea celorlalte cauze.','Abcesele sunt identificate de obicei cu întârziere (zilele 7–10 în schema celor 6 W).']],
 8,'Permutează ferestrele temporale ale celor 6 W și transformă febra medicamentoasă din diagnostic de excludere în cauză de primă intenție.',['atelectaziei','Cei 6']),

q(11,['Infecțiile locului operator și intra-abdominale postoperatorii:',
 ['IPC superficială implică tegumentele și țesuturile subcutanate și este cel mai frecvent tip','IPC profunde se extind la mușchi și fascii și pot duce la necroză fascială și dehiscență','Drenajul percutan ghidat ecografic sau CT este metoda de elecție pentru abcesele intra-abdominale localizate','După controlul sursei, studiul STOP-IT a arătat evoluție similară cu antibiotice 4 zile versus o cură mai lungă','Infecțiile intra-abdominale sunt, de regulă, monomicrobiene, iar acoperirea anaerobă nu se ia în calcul'],'ABCD',78,'Infecțiile plăgii chirurgicale și infecțiile intra-abdominale',
 'Diferențierea IPC superficiale de cele profunde și aplicarea drenajului percutan plus duratei scurte STOP-IT după controlul sursei.',
 ['IPC superficială (tegument și subcutis) este descrisă ca cel mai frecvent tip.','Extinderea la mușchi/fascii cu risc de necroză fascială și dehiscență este explicită.','Drenajul percutan ghidat este metoda de elecție pentru abcesele localizate.','Studiul STOP-IT arată evoluție similară la 4 zile versus o durată mai lungă.','Infecțiile intra-abdominale sunt de obicei polimicrobiene, iar acoperirea anaerobă trebuie luată în considerare.']],
 8,'Inversează natura polimicrobiană a infecțiilor intra-abdominale, pe fondul duratei STOP-IT de 4 zile, ușor de uitat.',['STOP-IT','cel mai frecvent tip']),

q(12,['Efuziunile pleurale exudative de cauză inflamatorie se caracterizează prin:',
 ['pH sub 7,2, glucoză sub 60 mg/dL și/sau LDH peste de trei ori nivelul seric','La o treime dintre pacienții cu empiem, microorganismele nu sunt identificate în lichid','pH peste 7,5 și glucoză peste 150 mg/dL definesc empiemul','Colorația Gram este pozitivă la toți pacienții cu empiem','Drenajul pleural este inutil, toracocenteza diagnostică fiind suficientă în toate cazurile'],'AB',78,'Empiemul',
 'Recunoașterea criteriilor biochimice ale efuziunii inflamatorii (pH, glucoză, LDH) și a faptului că o treime din empieme rămân fără germene identificat.',
 ['Pragurile pH <7,2, glucoză <60 mg/dL și LDH >3× seric sunt tabelate pentru efuziunile exudative inflamatorii.','Absența microorganismelor la o treime dintre pacienții cu empiem este explicită.','Valorile citate pentru empiem sunt pH scăzut și glucoză scăzută, nu crescute.','Colorația Gram sau culturile pot fi pozitive, dar lipsa germenului nu exclude empiemul.','La simptomatici sau la revărsate exsudative, drenajul adecvat al spațiului pleural este necesar.']],
 8,'Inversează pragurile de pH și glucoză și transformă negativitatea culturii într-o excludere a empiemului.',['pH <7,2','o treime din']),

q(13,['Pneumonia asociată ventilatorului (PAV):',
 ['PAV și pneumonia asociată spitalizării reprezintă împreună 22% din infecțiile dobândite în spital','Aproximativ 10% dintre pacienții ventilați mecanic sunt diagnosticați cu PAV','Tratamentul cu antibiotice specifice timp de 7 zile este suficient pentru majoritatea pacienților cu PAV','Pacienții spitalizați sub 5 zile au risc înalt pentru germeni multi-rezistenți, similar celor cu ARDS','O cultură endotraheală negativă are valoare predictivă negativă redusă, fără utilitate'],'ABC',79,'Pneumonia asociată spitalizării și ventilației mecanice',
 'Aplicarea ponderii de 22%, a incidenței de 10% la ventilați și a duratei de 7 zile, versus stratificarea riscului de rezistență după 5 zile.',
 ['Cele 22% din infecțiile nosocomiale (cele mai frecvente) sunt citate.','Incidența de circa 10% la pacienții ventilați este explicită.','Durata de 7 zile este considerată suficientă pentru majoritatea pacienților cu PAV.','Spitalizarea sub 5 zile marchează risc scăzut pentru germeni rezistenți; riscul înalt apare peste 5 zile, la imunocompromiși sau în ARDS.','O cultură din aspiratul endotraheal negativă are valoare predictivă negativă foarte puternică.']],
 8,'Inversează pragul de 5 zile pentru germeni rezistenți și anulează VPN-ul culturii endotraheale negative.',['22%','7 zile']),

q(14,['Infecțiile necrozante de țesuturi moi (INTM):',
 ['Cel mai caracteristic simptom precoce este durerea disproporționată față de aspectul leziunii','Emfizemul țesuturilor moi este detectat doar la 39% dintre pacienți, iar absența acestuia nu exclude INTM','Emfizemul radiologic este prezent la peste 90% dintre pacienți și este necesar pentru diagnostic','Celulita streptococică necomplicată, care dispare la digitopresiune, impune debridare radicală de urgență','Oxigenoterapia hiperbară înlocuiește debridarea chirurgicală în mionecroza clostridiană'],'AB',79,'Infecții ale pielii și țesuturilor moi — INTM',
 'Recunoașterea durerii disproporționate ca semn precoce și a sensibilității scăzute (39%) a emfizemului radiologic.',
 ['Durerea disproporționată față de aspect este descrisă ca cel mai caracteristic simptom.','Emfizemul este detectat doar la 39%, iar absența nu exclude INTM.','39%, nu 90%, este cifra de detecție a emfizemului; absența nu exclude diagnosticul.','Celulita obișnuită (eritem care dispare la digitopresiune) se tratează cu penicilină, nu prin debridare radicală.','Oxigenul hiperbar este adjuvant, nu substitut pentru debridarea chirurgicală agresivă.']],
 8,'Transformă un semn tardiv inconstant (emfizemul) în criteriu de diagnostic necesar și confundă celulita cu INTM.',['durerea disprop','edemul ce depăşeşte'],[80]),

q(15,['Triada Charcot din angiocolită constă în:',
 ['Febră fulminantă, durere în hipocondrul drept și icter','Hipotensiune, alterarea stării mentale și anurie, fără icter','Tuse, durere toracică și hemoptiză','Diaree, tenesme și rectoragie','Durere lombară, hematurie și febră, fără icter'],'A',82,'Infecțiile tractului biliar — Angiocolita',
 'Diferențierea triadei Charcot de pentada Reynolds și de triade din alte aparate.',
 ['Textul definește triada Charcot ca febră fulminantă, durere în hipocondrul drept și icter.','Hipotensiunea și alterarea stării mentale completează pentada Reynolds, care include și icterul, nu îl exclude.','Tusea, durerea toracică și hemoptizia evocă patologia respiratorie, nu angiocolita.','Diareea, tenesmele și rectoragia țin de patologia colorectală.','Durerea lombară cu hematurie sugerează o cauză urologică, nu biliară.']],
 8,'Confundă triada Charcot cu pentada Reynolds, două liste din același paragraf, ușor de superpus.',['pentada Reynold','hipocondrul drept']),
];
