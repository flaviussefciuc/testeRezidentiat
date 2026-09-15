import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('epidemio',15,pdfOffset,`epidemio-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const EPIDEMIO_C=[
q(15,['Prevalența unei boli se definește ca:',
 ['Numărul de persoane cu o anumită afecțiune într-o perioadă dată, raportat la populația totală','Numărul de cazuri noi apărute într-o perioadă dată, raportat la populația totală la risc','Procentul de bolnavi care decedează într-o perioadă dată','1 / reducerea absolută a riscului','Sensibilitatea împărțită la (1 − specificitate)'],'A',334,'Biostatistică — Rate de morbiditate',
 'Diferențierea prevalenței (cazuri existente) de incidență, de rata de fatalitate, de NNT și de rata de probabilitate pozitivă.',
 ['Definiția cu cazurile existente peste populația totală este explicită.','Aceasta este incidența.','Aceasta este rata de fatalitate a cazurilor.','Aceasta este formula NNT.','Aceasta este rata de probabilitate pozitivă.']],
 8,'Toate distractoarele sunt indicatori reali din același capitol, cu formule alăturate.',['Prevalenţa','populaţia totală']),

q(16,['Studiul transversal și meta-analiza, conform tabelului 15-1:',
 ['Studiul transversal evaluează expunerea și prevalența bolii la un număr mare de persoane, la un singur moment','Meta-analiza combină mai multe studii care examinează o anumită boală sau expunere','Seria de cazuri poate fi ușor de realizat și generează ipoteze, dar nu poate fi folosită pentru testarea ipotezelor','Studiul transversal determină incidența și este standardul de aur pentru testarea medicamentelor','Meta-analiza elimină factorii limitativi din studiile originale'],'ABC',333,'Studiile științifice — Transversal, serie de cazuri, meta-analiză',
 'Recunoașterea designului transversal (prevalență, un moment) și a limitei meta-analizei de a nu putea elimina defectele studiilor sursă.',
 ['Evaluarea la un moment dat pentru prevalență este din tabel.','Combinarea studiilor este definiția meta-analizei.','Ușurința și incapacitatea de a testa ipoteze sunt ale seriei de cazuri.','Incidența nu se obține transversal; standardul de aur este trialul randomizat.','Tabelul precizează că meta-analiza este incapabilă să elimine factorii limitativi din studiile originale.']],
 8,'Distractorii atribuie transversalului incidența/RCT și neagă limita explicită a meta-analizei.',['Studiul transversal','Meta-analiza']),

q(17,['Eroarea de durată (length-time) în screening și eroarea de publicare:',
 ['Eroarea de durată: testul detectează mai multe cazuri lent progresive și omite cazurile rapid progresive, exagerând eficacitatea screeningului','Eroarea de publicare: studiile care arată o diferență între grupuri au o probabilitate mai mare de a fi publicate decât cele fără diferență','Eroarea de durată este identică erorii de perioadă de latență, fără efect asupra cazurilor lente','Eroarea de publicare favorizează studiile care susțin ipoteza nulă','Auto-selecția înseamnă interpretarea subiectivă a datelor de către investigator'],'AB',334,'Studiile științifice — Erori de durată și de publicare',
 'Separarea length-time bias de lead-time, de publicare și de eroarea de investigație.',
 ['Descrierea și consecința (eficacitate exagerată) sunt din tabelul 15-2.','Probabilitatea mai mare de publicare a studiilor pozitive este explicită.','Perioada de latență este un rând separat: diagnostic precoce fără câștig de supraviețuire.','Datele disponibile pentru meta-analiză pot omite tocmai studiile care susțin ipoteza nulă.','Interpretarea subiectivă de către investigator este eroarea de investigație, nu auto-selecția.']],
 8,'Distractorii confundă length-time cu lead-time și inversează direcția bias-ului de publicare.',['Durata','De publicare']),

q(18,['Raportul cotelor și riscul atribuibil:',
 ['Raportul cotelor se determină prin studii caz-control și estimează riscul relativ dacă prevalența este scăzută','Riscul atribuibil este diferența dintre rata bolii la populația expusă și rata la populația neexpusă','OR dă estimarea cea mai precisă a riscului relativ în cazurile de boli rare','Raportul cotelor se determină prin studii de cohortă, identic riscului relativ','Riscul atribuibil este 1 / reducerea absolută a riscului, identic NNT'],'ABC',335,'Biostatistică — Raportul cotelor și riscul atribuibil',
 'Corelarea OR cu studiul caz-control și cu bolile rare, plus formula diferenței a riscului atribuibil.',
 ['Nota leagă OR de caz-control și de prevalența scăzută.','Formula RA = rată expuși − rată neexpuși este explicită.','Nota precizează estimarea cea mai precisă a RR de către OR în bolile rare.','Studiile de cohortă determină riscul relativ, nu OR.','1/RAR este NNT, nu riscul atribuibil.']],
 8,'Distractorii inversează tipul de studiu al OR și substituie NNT formulei riscului atribuibil.',['Raportul cotelor','Riscul atribuibil']),

q(19,['Ratele de probabilitate și acuratețea unui test:',
 ['Rata de probabilitate pozitivă este sensibilitatea / (1 − specificitatea)','Rata de probabilitate negativă este (1 − sensibilitatea) / specificitatea','Ratele de probabilitate elimină dependența de prevalența bolii','Acuratețea este (A + D) / (A + B + C + D), luând în considerare numai rezultatele reale','Ratele de probabilitate depind de prevalență la fel ca valoarea predictivă pozitivă'],'ABCD',336,'Biostatistică — Rate de probabilitate și acuratețe',
 'Aplicarea formulelor RPP/RPN și a acurateței, plus independența likelihood ratio față de prevalență.',
 ['Formula RPP este explicită.','Formula RPN este explicită.','Textul precizează eliminarea dependenței de prevalență.','Formula acurateței cu (A+D)/total este citată.','Independența de prevalență este tocmai avantajul față de VPP.']],
 8,'Distractorul reintroduce dependența de prevalență, pe care textul o elimină explicit la likelihood ratios.',['Rata de probabilitate pozitivă','Acurateţea']),
];
