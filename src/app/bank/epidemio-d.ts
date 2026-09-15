import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('epidemio',15,pdfOffset,`epidemio-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const EPIDEMIO_D=[
q(20,['Rata de fatalitate a cazurilor se definește ca:',
 ['Procentul de persoane cu o anumită boală care decedează într-o anumită perioadă, adică decese în interval raportate la numărul de cazuri de boală din acel interval','Numărul de cazuri noi dintr-o perioadă, raportat la populația totală la risc','Numărul de persoane cu afecțiunea într-o perioadă, raportat la populația totală','1 / reducerea absolută a riscului','Sensibilitatea împărțită la (1 − specificitate)'],'A',334,'Biostatistică — Rata de fatalitate',
 'Diferențierea ratei de fatalitate (decese/cazuri) de incidență, prevalență, NNT și rata de probabilitate pozitivă.',
 ['Formula decese peste cazuri de boală în aceeași perioadă este explicită.','Aceasta este incidența.','Aceasta este prevalența.','Aceasta este formula NNT.','Aceasta este rata de probabilitate pozitivă.']],
 8,'Toate distractoarele sunt indicatori reali din același capitol, cu formule alăturate.',['Rata de fatalitate','cazuri de boală']),

q(21,['Cerințele unui studiu științific, conform textului introductiv:',
 ['Subiecții trebuie să fie reprezentativi pentru populația vizată și suficient de numeroși pentru semnificație statistică','Consimțământul informat este necesar, cu excepția cazurilor special aprobate de IRB (de exemplu pacienți cu traumatisme)','Erorile de investigație și observaționale pot fi evitate printr-un studiu dublu-orb; interesele pacientului au prioritate față de cele ale studiului','Studiul transversal determină incidența și este standardul de aur pentru testarea medicamentelor','Meta-analiza elimină factorii limitativi din studiile originale'],'ABC',333,'Studiile științifice — Condiții de validitate',
 'Asamblarea reprezentativității, a excepției IRB și a dublu-orbului ca protecție față de erorile de investigație/observație.',
 ['Reprezentativitatea și dimensiunea eșantionului sunt punctele 1-2.','Excepția IRB pentru traumatisme este explicită.','Nota leagă dublu-orbul de erorile de investigație/observație; prioritatea interesului pacientului este punctul 5.','Incidența și standardul de aur aparțin cohortelor, respectiv trialului randomizat.','Tabelul precizează că meta-analiza nu poate elimina limitările studiilor originale.']],
 8,'Distractorii atribuie transversalului aurul RCT și neagă limita explicită a meta-analizei.',['consimţământul informat','dublu-orb']),

q(22,['Eroarea de memorie și auto-selecția, conform tabelului 15-2:',
 ['Eroarea de memorie: confuzia cu experiențe anterioare; pacienții cu experiențe negative își amintesc mai degrabă detaliile negative','Auto-selecția: pacienții cu un anumit istoric medical sunt mai predispuși să participe la un studiu legat de boala lor, deci nu sunt reprezentativi și introduc variabile de confuzie','Eroarea de memorie este identică erorii de durată, care omite cazurile lent progresive','Auto-selecția înseamnă interpretarea subiectivă a datelor de către investigator','Variabilele de confuzie afectează doar grupul experimental, nu și martorii'],'AB',334,'Studiile științifice — Memorie și auto-selecție',
 'Separarea bias-ului de memorie (detalii negative) de auto-selecție (ne-reprezentativitate și confuzie).',
 ['Descrierea și consecința (detalii negative) sunt din tabel.','Predispoziția de a participa și introducerea confuziei sunt explicite.','Eroarea de durată detectează cazuri lente și omite cazurile rapide, opusul enunțului.','Interpretarea subiectivă de către investigator este eroarea de investigație.','Textul definește confuzia ca factori care afectează atât grupurile experimentale, cât și pe cele de control.']],
 8,'Distractorii confundă memory bias cu length-time și mută eroarea de investigație pe auto-selecție.',['De memorie','Auto-selecţia']),

q(23,['Specificitatea, rezultatele fals-pozitive și reducerea absolută a riscului:',
 ['Specificitatea este probabilitatea ca testul să fie negativ la cei fără boală, adică D / (B + D)','Rezultatele fals-pozitive se aproximează prin (1 − specificitate); testele de confirmare acceptabile au de obicei specificitatea peste 85%','Reducerea absolută a riscului este rata bolii în grupul martor minus rata bolii în grupul de intervenție','Specificitatea este A / (A + C), identică sensibilității','RAR este 1 / NNT, nu diferența dintre ratele martor și intervenție'],'ABC',335,'Biostatistică — Specificitate și RAR',
 'Aplicarea formulei D/(B+D), a aproximării FP și a diferenței de rate care definește RAR.',
 ['Definiția și formula specificității sunt explicite.','(1 − specificitate) și pragul >85% pentru confirmare sunt citate.','Formula RAR = rată martor − rată intervenție este din text.','A/(A+C) este sensibilitatea, nu specificitatea.','NNT = 1/RAR; RAR este diferența de rate, nu inversul NNT.']],
 8,'Distractorii permută formula sensibilității pe specificitate și inversează relația NNT–RAR.',['Specificitatea','Reducerea absolută a riscului'],[336]),

q(24,['Consimțământul informat, ordinul DNR și decesul asistat medical:',
 ['Consimțământul cere indicații, riscuri, beneficii, alternative și riscurile refuzului; în urgență există consimțământ implicit, fără acord parental pentru minori','DNR este o directivă anticipată care poate refuza terapiile non-paliative sau poate limita doar ventilația, RCP, tuburile de alimentare ori antibioticele','Sinuciderea asistată de medic înseamnă furnizarea unui mijloc prin care pacientul își încheie viața; eutanasia este administrarea activă de către medic a unui agent letal','Un pacient competent se poate răzgândi în orice moment cu privire la acceptarea terapiei','Absența activității pe EEG definește singură moartea cerebrală'],'ABCD',337,'Etică — Consimțământ, DNR, deces asistat',
 'Asamblarea conținutului consimțământului, a flexibilității DNR, a distincției PAS versus eutanasie și a dreptului de a se răzgândi.',
 ['Elementele consimțământului și excepția de urgență sunt de pe pagina 337.','Limitarea selectivă a terapiilor din DNR este de pe 338.','Definițiile PAS versus eutanasie sunt explicite.','Nota precizează că un pacient competent se poate răzgândi în orice moment.','Nota precizează că absența activității pe EEG nu definește moartea cerebrală.']],
 8,'Distractorul transformă EEG-ul izoelectric în criteriu unic, contrar notei.',['Consimţământul informat','Sinuciderea asistată de medic'],[338]),
];
