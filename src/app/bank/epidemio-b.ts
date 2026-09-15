import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('epidemio',15,pdfOffset,`epidemio-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const EPIDEMIO_B=[
q(12,['Incidența unei boli se definește ca:',
 ['Numărul de cazuri noi apărute într-o perioadă dată, raportat la populația totală la risc','Numărul de persoane care au afecțiunea într-o perioadă dată, raportat la populația totală','Procentul de bolnavi care decedează într-o perioadă dată','1 / reducerea absolută a riscului','Sensibilitatea împărțită la (1 − specificitate)'],'A',334,'Biostatistică — Rate de morbiditate',
 'Diferențierea incidenței (cazuri noi) de prevalență, de rata de fatalitate, de NNT și de rata de probabilitate pozitivă.',
 ['Definiția cu cazuri noi peste populația la risc este explicită.','Aceasta este prevalența.','Aceasta este rata de fatalitate a cazurilor.','Aceasta este formula NNT.','Aceasta este rata de probabilitate pozitivă.']],
 8,'Toate distractoarele sunt indicatori reali din același capitol de biostatistică, cu formule alăturate.',['cazuri noi','populaţia totală la risc']),

q(13,['Trialul clinic randomizat:',
 ['Compară prospectiv tratamentul experimental cu placebo și cu terapiile existente','Este dublu-orb pentru a evita erorile și alocă randomizat pacienții','Este descris ca standardul de aur pentru testarea medicamentelor','Permite calcularea doar a raportului cotelor, nu a eficacității','Constă în examinarea unui număr mare de persoane la un singur moment, pentru prevalență'],'ABC',333,'Studiile științifice — Trialul clinic randomizat',
 'Recunoașterea designului prospectiv, randomizat, dublu-orb, ca standard de aur, distinct de caz-control și transversal.',
 ['Comparația prospectivă experimental versus placebo/terapii existente este din tabel.','Dublu-orb și alocarea randomizată sunt explicite.','Standardul de aur pentru medicamente este citat.','Raportul cotelor este concluzia studiilor caz-control.','Evaluarea la un moment dat definește studiul transversal.']],
 8,'Distractorii atribuie RCT concluzia caz-control și designul transversal din același tabel.',['Standard de aur','Dublu-orb']),

q(14,['Valoarea predictivă a unui test de screening:',
 ['Prevalența ridicată se asociază cu o valoare predictivă pozitivă ridicată','Prevalența scăzută se asociază cu o valoare predictivă negativă ridicată','VPP este probabilitatea ca un pacient cu test pozitiv să aibă boala','Prevalența ridicată scade VPP și crește VPN, independent de sensibilitate','Ratele de probabilitate depind de prevalență la fel ca VPP'],'ABC',336,'Biostatistică — Valori predictive',
 'Corelarea prevalenței înalte cu VPP înalt și a prevalenței joase cu VPN înalt, plus definiția VPP.',
 ['Nota leagă prevalența ridicată de VPP ridicată.','Prevalența scăzută se leagă de VPN ridicată.','VPP = A/(A+B) este probabilitatea bolii la testul pozitiv.','Direcția este inversată față de notă.','Textul precizează că ratele de probabilitate elimină dependența de prevalență.']],
 8,'Distractorii inversează relația prevalență–VPP/VPN și reintroduc dependența de prevalență la likelihood ratios.',['Prevalenţa ridicată','valoare predictivă pozitivă']),
];
