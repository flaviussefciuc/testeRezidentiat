import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-55;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('infectii-chir',8,pdfOffset,`infectii-chir-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const INFECTII_CHIR_B=[
q(16,['Plăgile „murdare” și durata antibioterapiei perioperatorii:',
 ['Plăgile murdare, cu contaminare sau infecție stabilită, au riscul cel mai mare de infecție, ajungând la aproximativ 50%; antibioticele pot fi considerate terapeutice','În majoritatea cazurilor, antibioterapia perioperatorie se continuă postoperator mai puțin de 24 de ore; prelungirea crește rezistența fără a reduce IPC','Riscul de infecție al plăgilor murdare este identic cu al plăgilor curate (circa 3%)','Antibioterapia profilactică se prelungește 7 zile în toate intervențiile elective curate','Prelungirea peste 24 de ore scade rezistența bacteriană și este standardul în hernia inghinală'],'AB',76,'Antibioterapie perioperatorie — Plăgi murdare și durată',
 'Aplicarea riscului de 50% al plăgilor murdare și a limitei de 24 de ore a profilaxiei.',
 ['Pragul de circa 50% și caracterul terapeutic (nu doar profilactic) sunt explicite.','Limita <24 de ore și efectul de rezistență al prelungirii sunt citate.','3% aparține plăgilor curate, nu celor murdare.','Cazurile curate nu cer profilaxie de 7 zile.','Prelungirea crește rezistența; hernia curată nu o justifică.']],
 8,'Permutează 50% (murdar) cu 3% (curat) și inversează regula celor 24 de ore.',['aproximativ 50%','mult de 24 de ore'],[77]),

q(17,['Conform Tabelului 8-2, selecția profilaxiei în chirurgia electivă include:',
 ['Chirurgia cardiacă sau vasculară: cefazolină sau cefuroxim; la alergie la β-lactamine, clindamicină sau vancomicină','Chirurgia colorectală: cefazolină plus metronidazol, cefoxitin, cefotetan, ampicilină-sulbactam, ceftriaxonă plus metronidazol sau ertapenem','Chirurgia gastroduodenală: cefazolină ca agent recomandat','Chirurgia colorectală se acoperă doar cu cefazolină, fără anaerobi','În alergia la β-lactamine, chirurgia cardiacă primește ertapenem ca substitut de primă linie'],'ABC',76,'Tabelul 8-2 — Selecția antibioticelor profilactice',
 'Diferențierea spectrului cardiac/vascular (cefazolină/cefuroxim) de acoperirea anaerobă colorectală.',
 ['Cefazolina/cefuroximul și alternativa clinda/vanco sunt tabelate.','Lista colorectală include combinațiile cu metronidazol și ertapenemul.','Cefazolina este agentul recomandat gastroduodenal.','Colorectala cere acoperire anaerobă, nu cefazolină izolată.','Ertapenemul figurează la colorectal, nu ca substitut cardiac.']],
 8,'Omită anaerobii de la colorectal și mută ertapenemul pe chirurgia cardiacă, două rânduri alăturate.',['Cefazolină, cefuroxim','Cefazolină + metronidazol']),

q(18,['În anumite intervenții, durata profilaxiei se poate extinde astfel:',
 ['În chirurgia cardiacă, utilizarea antibioterapiei poate fi extinsă la 48 de ore','Până la 30% dintre pacienții cu infecții de cateter au tratament antimicrobian inadecvat, cu mortalitate de două ori mai mare','În chirurgia cardiacă, profilaxia se oprește la incizie, 48 de ore fiind dăunătoare','Infecțiile de cateter au acoperire empirică adecvată în 95% din cazuri, mortalitatea fiind independentă de spectru','48 de ore este durata standard a profilaxiei în hernia inghinală curată'],'AB',77,'Durata profilaxiei și antibioterapia empirică nosocomială',
 'Recunoașterea excepției de 48 de ore în chirurgia cardiacă și a impactului de mortalitate al acoperirii inadecvate de cateter.',
 ['Extinderea la 48 de ore în chirurgia cardiacă este explicită.','Cifrele 30% inadecvat și mortalitate ×2 sunt citate.','48 de ore este excepția permisă, nu o durată dăunătoare în sine.','Inadecvarea empirică este frecventă (30%), cu impact de mortalitate.','Hernia curată nu justifică 48 de ore.']],
 8,'Generalizează excepția cardiacă de 48 de ore asupra chirurgiei curate și neagă impactul acoperirii de cateter.',['48 de ore','30% din pacienţii']),

q(19,['Conform Tabelului 8-5 și textului despre INTM:',
 ['Celulita este tipic streptococică, cu eritem difuz cald, tratată cu antibiotice sistemice și îngrijirea locală a plăgii','Hidrosadenita supurativă implică glandele sudoripare apocrine, de obicei axilar și inghinal; zonele mari cer excizie largă și grefă','Gangrena Fournier este eponimul INTM al organelor genitale și perineului, de obicei polimicrobiană','Limfangita este clostridiană, cu crepitații și indicație de amputație de primă intenție','Hidrosadenita se tratează doar cu oxigen hiperbar, fără incizie'],'ABC',80,'Tabelul 8-5 — Infecții ale țesuturilor moi',
 'Diferențierea celulitei streptococice, a hidrosadenitei apocrine și a gangrenei Fournier perineale.',
 ['Etiologia streptococică și conduita celulitei sunt tabelate.','Localizarea apocrină axilară/inghinală și excizia largă sunt explicite.','Definiția Fournier (genital/perineu, polimicrobian) este în text.','Limfangita este streptococică, cu striuri limfatice, nu clostridiană.','Hidrosadenita cere incizie/drenaj sau excizie, nu OHB ca monoterapie.']],
 8,'Mută clostridiile pe limfangită și înlocuiește excizia hidrosadenitei cu oxigen hiperbar.',['Hidrosadenită','Gangrena Fumier'],[79]),

q(20,['Tetanosul (lockjaw) se caracterizează prin:',
 ['Incubație de 3–21 de zile, urmată de neliniște și cefalee, apoi spasme descendente care încep cu rigidizarea maseterului','Debut imediat la 30 de minute, fără prodrom, cu flaciditate generalizată','Diagnosticul se bazează pe izolarea bacteriei în 90% din cazuri, clinica fiind superfluă','Imunoglobulina tetanică acționează pe toxina deja legată de terminațiile nervoase, nu pe toxina liberă','Spasmele tonice apar după 3 săptămâni de la debutul simptomelor, fără risc de stop respirator'],'A',80,'Tetanosul — Tablou clinic',
 'Recunoașterea ferestrei de incubație 3–21 de zile și a debutului cu trismus (maseter).',
 ['Incubația 3–21 de zile, prodromul și rigidizarea maseterului sunt explicite.','Debutul nu este la 30 de minute și nu este flasc.','Bacteria este izolată doar în 30% din cazuri; diagnosticul este clinic.','IGT acționează pe toxina liberă, nu pe cea legată.','Spasmele tonice apar în 24 de ore de la debutul simptomelor și pot duce la stop respirator.']],
 8,'Permutează 3–21 de zile cu debutul imediat și inversează ținta IGT (liberă versus legată).',['3-21 de zile','mușchiului maseter'],[81]),

q(21,['Managementul tetanosului și profilaxia după plagă:',
 ['Bacteria este izolată doar în 30% din cazuri, deci diagnosticul este clinic, nu microbiologic','IGT ajută doar la eliminarea toxinei libere și se administrează intramuscular, cu infiltrație peri-lezională','Plăgile cu predispoziție (zdrobire, avulsie, arsuri, >6 ore, contaminanți) beneficiază de profilaxie conform Tabelului 8-7','IGT neutralizează toxina deja legată de nervi și face debridarea superfluă','Plăgile curate sub 6 ore, ascuțite, fără contaminanți, au aceeași predispoziție ca arsurile zdrobite'],'ABC',81,'Tetanosul — Diagnostic, IGT și Tabelul 8-6',
 'Aplicarea izolării de 30%, a țintei IGT (toxina liberă) și a criteriilor de plagă predispozantă.',
 ['Izolarea în 30% și diagnosticul clinic sunt explicite.','Acțiunea pe toxina liberă și calea IM plus infiltrația sunt descrise.','Tabelul 8-6 listează >6 ore, zdrobire, avulsie, arsuri, contaminanți.','IGT nu acționează pe toxina legată; debridarea rămâne cheia.','Plăgile curate <6 ore, ascuțite, fără contaminanți, sunt fără predispoziție.']],
 8,'Inversează ținta IGT și egalizează plăgile curate cu cele zdrobite contaminate.',['30% din cazuri','Imunoglobulina Tetanică']),

q(22,['Abcesul mamar se caracterizează prin:',
 ['Etiologie de obicei stafilococică; factorii de risc includ alăptarea, vârsta maternă >30 de ani, prima sarcină, fumatul și obezitatea','Opțiunea inițială este antibiotice antistafilococice plus 2–3 aspirații seriate la 2–3 zile; alăptarea sau pomparea continuă','Abcesul la femeia care nu alăptează trebuie să ridice suspiciunea de malignitate, cu biopsie la risc','Diagnosticul se confirmă prin examen clinic, ecografie și aspirația lichidului purulent','Alăptarea se întrerupe imediat, germenii contraindicând orice lactație'],'ABCD',81,'Abcesul mamar',
 'Aplicarea spectrului stafilococic, a aspirațiilor seriate, a semnalului de malignitate și a confirmării ecografice.',
 ['Etiologia stafilococică și lista de risc sunt explicite.','Schema 2–3 aspirații la 2–3 zile și continuarea lactației sunt cerute.','Abcesul la non-lactantă sugerează posibilă malignitate.','Examenul clinic, ecografia și aspirația confirmă diagnosticul.','Mamele care alăptează sunt încurajate să continue.']],
 8,'Transformă aspirația serială în mastectomie și oprește lactația, două erori de conduită din același paragraf.',['2-3 aspiraţii','alăptarea']),

q(23,['Infecțiile mâinii, potrivit capitolului:',
 ['Panarițiul este o infecție stafilococică a șanțului unghial proximal; drenajul simplu și pansamentele calde sunt de obicei suficiente','Tenosinovita cere deschiderea tecii pe toată lungimea, pentru a preveni necroza tendonului','Antibioterapia empirică cu spectru larg în abcesele spațiilor profunde se ajustează după antibiogramă și se continuă circa 10 zile','Panarițiul se tratează prin amputație de principiu, stafilococul fiind rară cauză','Muşcăturile umane ale mâinii au potențial infecțios neglijabil, flora orală fiind nepatogenă'],'ABC',82,'Infecțiile mâinii',
 'Diferențierea panarițiului unghial de tenosinovită și a duratei de 10 zile în spațiile palmare.',
 ['Definiția panarițiului și conduita conservatoare sunt explicite.','Deschiderea completă a tecii este cerută în tenosinovită.','Durata de 10 zile, cu de-escaladare, este citată.','Amputația nu este tratamentul panarițiului.','Muşcăturile umane au potențial infecțios ce nu trebuie subestimat.']],
 8,'Extinde amputația asupra panarițiului și minimizează mușcătura umană, două capcane de urgență.',['Panariţiul','I O zile'],[81]),

q(24,['Abcesul perirectal care se extinde deasupra planșeului pelvin poate fi fatal mai ales la:',
 ['Pacienții diabetici sau imunosupresați','Adulții tineri sănătoși, fără comorbidități','Pacienții cu hernie inghinală electivă curată','Copiii cu panarițiu unghial necomplicat','Femeile cu abces mamar stafilococic drenat prin aspirație'],'A',81,'Abcesul perirectal',
 'Recunoașterea riscului vital al extensiei pelvine la diabetic și imunosupresat.',
 ['Textul precizează că extinderea pelvină poate fi fatală mai ales la diabetici sau imunosupresați.','Tânărul sănătos nu este grupul citat cu risc maxim.','Hernia curată nu definește acest risc.','Panarițiul unghial este o infecție de mână, nu perirectală pelvină.','Abcesul mamar are alt mecanism și alt prognostic.']],
 8,'Minimizează drenajul și neagă riscul pelvin la diabetic, pe o urgență proctologică clasică.',['Abcesul perirectal','anestezie generală']),

q(25,['Selectați enunțurile adevărate despre mionecroza clostridiană:',
 ['Poate apărea încă din prima zi postoperator sau după plăgi prin puncție, cu necroză și crepitații cu avans rapid (gangrenă gazoasă)','Antibioterapia include penicilină în doze mari; clindamicina este alternativă la alergie, tigeciclina fiind o opțiune înrudită','Oxigenul hiperbar este adjuvant, nu substitut al debridării radicale','Colorația Gram din flictenă diferențiază infecția de streptococul de grup A','Penicilina este evitată, clindamicina hiperbară înlocuind debridarea'],'ABCD',80,'INTM — Mionecroza clostridiană',
 'Integrarea debutului precoce, a penicilinei în doză mare și a OHB ca adjuvant, nu substitut.',
 ['Debutul din prima zi și crepitațiile fulminante sunt descrise.','Penicilina în doze mari, clinda la alergie și tigeciclina sunt listate.','OHB sprijină, dar nu înlocuiește debridarea.','Colorația Gram din flictenă ajută diagnosticul diferențial cu SGA.','Penicilina este tratamentul; OHB nu înlocuiește chirurgia.']],
 8,'Inversează rolul penicilinei și transformă oxigenul hiperbar în substitut al debridării.',['penicilină în doze','Oxigenoterapia hiperbară']),
];
