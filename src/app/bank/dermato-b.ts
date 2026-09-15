import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('dermato',9,pdfOffset,`dermato-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const DERMATO_B=[
q(18,['Abcesele cutanate:',
 ['Sunt determinate cel mai frecvent de stafilococi, de obicei MRSA','Bacteriile anaerobe sunt mai frecvent cauza abceselor lombare și perineale decât ale celor cu alte localizări','Tratamentul constă în incizie și drenaj, cu antibiotice care acoperă MRSA (de exemplu cotrimoxazol)','Agentul cel mai frecvent este streptococul de grup A, ca în celulită','Culturile sunt rareori utile, deoarece conțin doar floră comensală, identic celulitei'],'ABC',196,'Infecții — Abcese cutanate',
 'Contrastarea etiologiei MRSA și a drenajului cu celulita streptococică, plus predilecția anaerobilor perineali.',
 ['Stafilococii, de obicei MRSA, sunt agentul citat.','Nota plasează anaerobii mai frecvent în abcesele lombare și perineale.','Incizia, drenajul și cotrimoxazolul sunt tratamentul, continuat pe pagina următoare.','Streptococul de grup A este agentul celulitei.','Culturile sunt rareori utile în celulită; în abcesele complicate sau recurente se recomandă Gram și culturi.']],
 8,'Distractorii aplică etiologia și limita culturilor din celulită asupra abcesului, definite pe aceeași pagină.',['MRSA','anaerobe'],[197]),

q(19,['Gangrena uscată, spre deosebire de cea umedă, are aspect de:',
 ['Piele uscată, indurată, prin necroză progresivă din insuficiență arterială','Bule și tumefacție, prin ocluzie vasculară acută sau infecție','Cruste gălbui-aurii de culoarea mierii','Papule lucioase, nedureroase, cu ombilicare centrală','Plăci cu scuame argintii pe suprafețele de extensie'],'A',197,'Infecții — Gangrena',
 'Diferențierea aspectului uscat-indurat al ischemiei cronice de bulele gangrenei umede.',
 ['Nota descrie pielea uscată, indurată, prin insuficiență arterială.','Bulele și tumefacția definesc gangrena umedă.','Crustele de culoarea mierii sunt ale impetigoului.','Papulele ombilicate definesc molluscum.','Scuamele argintii definesc psoriazisul.']],
 8,'Nota contrastează uscat versus umed; distractorii sunt leziuni reale din același capitol.',['Gangrena uscată','Gangrena umedă']),

q(20,['Dermatita atopică (eczema):',
 ['Asociază ca factori de risc astmul, rinita alergică și istoricul familial','Leziunile de la nou-născut apar mai frecvent pe față și scalp; la adult, pe flexoare','Semnul Nikolsky pozitiv este constant, ca în pemfigusul vulgar','Leziunile tipice sunt plăci cu scuame argintii pe extensie, cu semn Auspitz','Distribuția în brad de Crăciun și placa heraldică sunt caracteristice'],'AB',203,'Afecțiuni inflamatorii — Dermatita atopică',
 'Recunoașterea terenului atopic și a topografiei vârstă-dependentă, distinct de pemfigus, psoriazis și pitiriazis.',
 ['Astmul, rinita alergică și istoricul familial sunt factorii de risc.','Fața/scalpul la nou-născut și flexoarele la adult sunt descrise.','Nikolsky pozitiv caracterizează pemfigusul, nu eczema.','Scuamele argintii și Auspitz definesc psoriazisul, pe aceeași pagină.','Bradul de Crăciun și placa heraldică definesc pitiriazisul rozat.']],
 8,'Distractorii sunt semnele psoriazisului și ale pitiriazisului rozat, definite pe aceeași pagină.',['xeroză','eczema herpeticum']),

q(21,['Pitiriazisul rozat:',
 ['Erupția începe cu placa heraldică, o leziune unică rotundă de până la 5 cm, cu câteva zile înaintea erupției generalizate','Distribuția leziunilor este caracteristică, în formă de brad de Crăciun','Boala este autolimitată; se pot folosi steroizi topici și antihistaminice','Semnul Auspitz (sângerare la îndepărtarea scuamei) este patognomonic','Necroliza întregii grosimi a epidermului, cu BSA peste 30%, definește entitatea'],'ABC',203,'Afecțiuni inflamatorii — Pitiriazis rozat',
 'Asocierea plăcii heraldice cu distribuția în brad de Crăciun și cu evoluția autolimitată.',
 ['Placa heraldică premergătoare este descrisă, completată pe pagina următoare.','Nota identifică distribuția în brad de Crăciun.','Evoluția autolimitată cu steroizi topici și antihistaminice este tratamentul.','Auspitz aparține psoriazisului.','BSA >30% cu necroză definește TEN.']],
 8,'Distractorii importă Auspitz din psoriazis și pragul TEN, entități învecinate în capitol.',['brad de Crăciun','plăcii heraldice'],[204]),

q(22,['Grefa cu grosime completă este compusă din:',
 ['Epiderm și tot dermul, recoltată tipic de deasupra urechilor pentru defectele feței','Epiderm și doar o parte din derm, de pe abdomen, coapse sau fese','Doar țesut subcutanat, fără epiderm','Cartilaj și pat unghial, ca grefa compozită','Muşchi transferat (lambou muscular), fără piele'],'A',209,'Chirurgie plastică — Grefe și lambouri',
 'Diferențierea grefei cu grosime completă de grefa despicată, de cea compozită și de lamboul muscular.',
 ['Tabelul definește grefa cu grosime completă ca epiderm plus tot dermul, cu loc donator deasupra urechilor pentru față.','Epiderm plus parte din derm, de pe abdomen/coapse/fese, este grefa despicată.','Absența epidermului nu definește această grefă.','Cartilajul și patul unghial definesc grefa compozită.','Muşchiul transferat definește lamboul muscular.']],
 8,'Toate distractoarele sunt rânduri reale din tabelul 9-3, ușor de permutat cu grefa despărțită deja din banca A.',['grosime','Deasupra urechilor']),
];
