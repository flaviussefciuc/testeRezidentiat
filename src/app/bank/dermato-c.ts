import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('dermato',9,pdfOffset,`dermato-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const DERMATO_C=[
q(23,['Hidradenita supurativă:',
 ['Rezultă din ocluzia foliculară cronică și inflamația glandelor apocrine, cu abcese recurente în axilă, zona inghinală și perineală','Infecția cronică duce la apariția cicatricilor','Tratamentul poate necesita atât antibiotice, cât și excizie chirurgicală','Abcesul facial se poate complica cu tromboza sinusului cavernos','Agentul cel mai frecvent este streptococul de grup A, ca în celulită'],'ABCD',196,'Infecții — Hidradenita supurativă',
 'Recunoașterea topografiei apocrine, a cicatrizării și a necesității exciziei, plus complicația abcesului facial.',
 ['Ocluzia foliculară, glandele apocrine și sediile axilă–inghinal–perineu sunt explicite.','Cicatricile din infecția cronică sunt citate.','Antibioticele plus excizia sunt tratamentul.','Tromboza de sinus cavernos este complicația abcesului facial, pe aceeași pagină de continuare.','Streptococul de grup A este agentul celulitei, nu al hidradenitei/abceselor (stafilococ/MRSA).']],
 8,'Distractorul aplică etiologia celulitei pe hidradenită, definite pe pagini consecutive.',['Hidradenita supurativă','glandelor apocrine'],[197]),

q(24,['Mecanismele reacțiilor de hipersensibilitate cutanată:',
 ['Tipul I este determinat de degranularea mastocitelor; produce urticarie la scurt timp după expunere, care durează câteva ore','Tipul IV este determinat de limfocite; produce erupție morbiliformă la câteva zile după a doua expunere și stă la baza majorității dermatitelor alergice de contact','Tipul IV produce urticarie imediată prin mastocite, iar tipul I produce erupție la câteva zile','Epinefrina este contraindicată în angioedemul de căi aeriene','Corticosteroizii topici sunt inutili în cazurile ușoare'],'AB',201,'Afecțiuni inflamatorii — Hipersensibilitate cutanată',
 'Separarea degranulării mastocitare (tip I, ore) de reacția mediată de limfocite (tip IV, zile).',
 ['Mastocitele, urticaria și durata de câteva ore definesc tipul I.','Limfocitele, erupția morbiliformă după a doua expunere și dermatita de contact definesc tipul IV.','Direcția mecanismelor este inversată.','Epinefrina este indicată tocmai în angioedem/anafilaxie.','Cazurile ușoare se tratează cu corticosteroizi topici și antihistaminice.']],
 8,'Distractorii inversează tipurile I și IV și interzic epinefrina acolo unde textul o indică.',['Tip I','Tip IV']),

q(25,['Dermatita alergică de contact:',
 ['Cauze frecvente sunt plantele (iedera otrăvitoare, stejarul otrăvitor), nichelul, săpunurile și latexul','Distribuția liniară, bine definită, sugerează o cauză externă','Tratamentul începe cu îndepărtarea agentului declanșator; cazurile ușoare primesc corticosteroizi topici și antihistaminice','Placa heraldică și bradul de Crăciun sunt caracteristice','Semnul Auspitz este patognomonic'],'ABC',201,'Afecțiuni inflamatorii — Dermatita de contact',
 'Recunoașterea alergenilor citați, a distribuției liniare și a primului pas terapeutic.',
 ['Nota enumeră plantele, nichelul, săpunurile și latexul.','Pasul următor leagă forma bine definită de cauza externă.','Îndepărtarea alergenului plus topic și antihistaminic sunt tratamentul.','Placa heraldică și bradul de Crăciun definesc pitiriazisul rozat.','Auspitz aparține psoriazisului.']],
 8,'Distractorii importă semnele pitiriazisului și ale psoriazisului, entități vecine în capitol.',['nichelul','latexul']),

q(26,['Dermatita seboreică:',
 ['Este o hiperproliferare cronică a epidermului, cel mai frecvent la scalp sau față','Este cel mai frecvent întâlnită la adolescenți și sugari, asociată cu Malassezia','Cradle cap („crusta de lapte”) este numele popular al formei de pe scalpul nou-născuților','Leziunile tipice sunt plăci cu scuame argintii pe extensie, cu semn Auspitz','Distribuția în brad de Crăciun definește entitatea'],'ABC',203,'Afecțiuni inflamatorii — Dermatita seboreică',
 'Asocierea Malassezia, a topografiei scalp/față și a eponimului cradle cap, distinct de psoriazis și pitiriazis.',
 ['Hiperproliferarea la scalp sau față este definiția.','Adolescenții, sugarii și Malassezia sunt citați.','Nota identifică cradle cap-ul.','Scuamele argintii și Auspitz definesc psoriazisul, pe aceeași pagină.','Bradul de Crăciun definește pitiriazisul rozat, tot pe aceeași pagină.']],
 8,'Distractorii sunt semnele psoriazisului și ale pitiriazisului, definite pe aceeași pagină.',['Cradle cap','Malassezia']),

q(27,['Eritemul nodos:',
 ['Produce noduli eritematoși dureroși, cel mai frecvent pretibiali, prin inflamația dermului și a țesutului adipos','Laboratorul poate arăta titru pozitiv de antistreptolizină O și VSH crescut; biopsia evidențiază paniculită','Placa heraldică precede erupția cu câteva zile','Semnul Nikolsky este constant pozitiv','Necroliza peste 30% BSA definește entitatea'],'AB',204,'Afecțiuni inflamatorii — Eritemul nodos',
 'Recunoașterea nodulilor pretibiali și a paniculitei, distinct de pitiriazis, pemfigus și TEN.',
 ['Topografia pretibială și inflamația dermo-adipoasă sunt explicite.','ASO, VSH și paniculita sunt din text.','Placa heraldică aparține pitiriazisului rozat, pe aceeași pagină.','Nikolsky pozitiv caracterizează pemfigusul/SJS.','BSA >30% definește TEN.']],
 8,'Distractorii importă placa heraldică, Nikolsky și pragul TEN, entități din paginile învecinate.',['Eritem nodos','paniculită']),

q(28,['Keratoza seboreică este descrisă ca:',
 ['Tumoră benignă din keratinocite imature, hiperpigmentată, verucoasă, cu aspect „lipit pe piele”','Leziune precanceroasă care se transformă în 0,1% pe an în carcinom scuamocelular','Papulă perlată cu telangiectazii și ulcerație centrală','Placă eritematoasă care metastazează în 5–10% din cazuri','Grefă de epiderm plus tot dermul, recoltată deasupra urechilor'],'A',206,'Neoplasme — Keratoza seboreică',
 'Identificarea aspectului „lipit pe piele” al keratozei seboreice, distinct de keratoza actinică și de carcinoame.',
 ['Nota definește keratoza seboreică prin keratinocite imature și aspectul lipit pe piele.','Cei 0,1%/an definesc riscul keratozei actinice.','Papula perlată cu telangiectazii este carcinomul bazocelular.','Metastazarea 5–10% este a scuamocelularului.','Grefa cu grosime completă aparține tabelului de chirurgie plastică.']],
 8,'Toate distractoarele sunt entități reale din același capitol, ușor de permutat cu keratoza actinică.',['lipit pe piele','Keratoza seboreică']),

q(29,['Riscul anual citat de evoluție a keratozei actinice spre carcinom scuamocelular este de:',
 ['0,1% pe an, iar 60% din carcinoamele scuamocelulare se dezvoltă din keratoze actinice','10% pe an, identic ratei de metastazare a bazocelularului','50% pe an, fără legătură cu expunerea solară','0%, leziunea fiind tot timpul benignă ca keratoza seboreică','25%, mortalitatea fasceitei necrozante'],'A',206,'Neoplasme — Keratoza actinică',
 'Memorarea riscului de 0,1%/an și a ponderii de 60% a scuamocelularelor cu origine în keratoza actinică.',
 ['Cifrele 0,1%/an și 60% sunt explicite.','Bazocelularul metastazează rar; 5–10% este rata scuamocelularului.','Expunerea solară este factorul de risc principal.','Keratoza actinică este precanceroasă, spre deosebire de cea seboreică.','25% este mortalitatea fasceitei, nu riscul AK.']],
 8,'Distractorii sunt procente reale din capitol (metastaze, fasceită), mutate pe keratoza actinică.',['0,1%/an','keratoze actinice']),

q(30,['Criteriile ABCDE de monitorizare a nevilor pentru melanom includ:',
 ['Asimetrie','Borduri (margini neregulate)','Culoare variabilă','Diametru peste 6 mm și evoluție (creștere sau schimbarea aspectului)','Biopsie shave de primă intenție, pentru a măsura grosimea totală'],'ABCD',208,'Neoplasme — Criteriile ABCDE',
 'Recunoașterea celor cinci criterii și a interdicției biopsiei shave, deja nuanțate pe pagina anterioară.',
 ['Asimetria este primul criteriu.','Bordurile neregulate sunt al doilea.','Culoarea variabilă este al treilea.','Diametrul >6 mm și evoluția închid acronimul.','Nota de pe pagina anterioară interzice biopsia shave la leziuni melanocitare suspecte.']],
 8,'Distractorul recomandă exact biopsia shave pe care textul o interzice pentru melanom.',['ABCDE','>6 mm'],[207]),

q(31,['Cel mai important factor de prognostic în melanom, conform notei, este:',
 ['Grosimea tumorii; peste 0,76 mm se asociază cu risc crescut de metastazare','Numărul de telangiectazii de suprafață, ca în bazocelular','Prezența scuamelor argintii, ca în psoriazis','Diametrul sub 2 mm, care impune margine de 2 cm','Recoltarea shave, superioară biopsiei excizionale'],'A',208,'Neoplasme — Prognosticul melanomului',
 'Identificarea grosimii (pragul 0,76 mm) ca factor prognostic principal.',
 ['Nota numește grosimea cel mai important factor și dă pragul >0,76 mm.','Telangiectaziile caracterizează bazocelularul.','Scuamele argintii caracterizează psoriazisul.','Marginea de 2 cm este pentru grosime >2 mm, nu pentru diametru <2 mm.','Biopsia shave este interzisă; se face biopsie excizională.']],
 8,'Distractorii amestecă pragul prognostic 0,76 mm cu marginile de excizie și cu biopsia shave interzisă.',['>0,76 mm','grosimea tumorii']),

q(32,['Grefele, după originea țesutului, pot fi:',
 ['Autogrefe, din țesutul sănătos al aceluiași pacient','Alogrefe, de la o altă persoană donatoare, sau xenogrefe, de la un donator din specie diferită','Doar xenogrefe, deoarece autogrefa este contraindicată pe față','Identice lamboului muscular, descris ca mușchi transferat fără nicio componentă de piele','Recoltate de deasupra urechilor pentru toate tipurile, nu doar pentru defectele feței'],'AB',209,'Chirurgie plastică — Originea grefelor',
 'Diferențierea autogrefă–alogrefă–xenogrefă, distinct de locul donator al grefei cu grosime completă.',
 ['Definiția autogrefei este explicită.','Alogrefa (altă persoană) și xenogrefa (altă specie) sunt citate.','Autogrefa nu este contraindicată pe față; grefa cu grosime completă se recoltează tocmai deasupra urechilor pentru față.','Lamboul muscular poate include piele (musculocutanat) sau necesita grefă suplimentară.','Deasupra urechilor este locul uzual al grefei cu grosime completă pentru față, nu al tuturor grefelor.']],
 8,'Distractorii aplică locul donator al grefei complete și definiția lamboului muscular asupra clasificării după origine.',['autogrefe','xenogrefe']),
];
