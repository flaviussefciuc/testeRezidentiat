import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-182;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('ati',10,pdfOffset,`ati-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const ATI_B=[
q(23,['Conform Cadranului 10.12, pacienții cu risc perioperator de insuficiență multiplă de organ includ:',
 ['Vârstnicii și cei cu comorbidități, în special cu rezervă cardiorespiratorie funcțională limitată','Pacienții cu traumatisme în două cavități corporale care necesită transfuzii multiple','Cei supuși unei disecții extensive de țesuturi (esofagectomie, pancreatectomie, anevrism aortic)','Chirurgia de urgență pentru afecțiuni intra-abdominale sau intratoracice foarte grave (peritonită fecaloidă, perforație esofagiană)','Adulții tineri sănătoși, operați electiv pentru hernie inghinală, ca grupul cu cel mai mare risc citat'],'ABCD',224,'Cadranul 10.12 — Risc perioperator de MODS',
 'Reținerea celor patru grupuri (vârstă/comorbiditate, politraumă transfuzată, disecție extensivă, urgență cavită) distinct de chirurgia electivă minoră.',
 ['Vârsta și rezerva cardiorespiratorie deschid cadranul.','Politrauma biconpartimentală cu transfuzii este al doilea rând.','Esofagectomia, pancreatectomia și anevrismul aortic exemplifică disecția extensivă.','Peritonita fecaloidă și perforația esofagiană sunt urgențele citate.','Hernia electivă la tânărul sănătos nu figurează ca grup de risc.']],
 8,'Patru rânduri reale ale cadranului; distractorul inversează ierarhia de risc către chirurgia electivă minoră.',['insuficienţă multiplă de organ','peritonite fecaloide']),

q(24,['Identificați afirmația corectă referitoare la nitroglicerină în terapia vasodilatatoare:',
 ['În doze mici este predominant venodilatator; pe măsură ce doza crește, determină și dilatație arterială, scăzând astfel atât presarcina cât și postsarcina; reduce rezistența vasculară pulmonară, efect exploatabil în debitul scăzut secundar hipertensiunii pulmonare','Este un dilatător arterial pur încă de la dozele mici, fără efect venos','Nu influențează rezistența vasculară pulmonară, fiind evitată în hipertensiunea pulmonară','Înlocuiește contrapulsația cu balon intra-aortic ca suport mecanic de primă linie','Are risc de intoxicație cu cianură la perfuzii scurte, spre deosebire de nitroprusiat'],'A',224,'Terapia vasodilatatoare — Nitroglicerina',
 'Recunoașterea venodilatației de doză mică, a dilatației arteriale de doză crescută și a efectului pe rezistența pulmonară.',
 ['Secvența venos→arterial, presarcină+postsarcină și RVP sunt din paragraf.','La doze mici predomină venodilatația, nu dilatația arterială pură.','Reducerea RVP este tocmai efectul exploatat.','BCPIA rămâne suportul mecanic cel mai frecvent; NTG este vasodilatator.','Intoxicația cu cianură este atribuită nitroprusiatului, nu NTG.']],
 8,'Distractorii inversează venos versus arterial, mută cianura de pe nitroprusiat pe NTG și înlocuiesc BCPIA.',['venodilatator','rezistenţa vasculară pulmonară']),

q(25,['Ventilația mecanică controlată (VMC) se deosebește după variabila presetată:',
 ['În ventilația cu volum controlat, volumul curent și frecvența sunt presetate; presiunea căilor aeriene variază cu reglajul și cu mecanica pulmonară (rezistență, complianță)','În ventilația cu presiune controlată, presiunea inspiratorie și frecvența sunt presetate, iar volumul curent variază cu mecanica pulmonară','În volumul controlat, presiunea este fixă, iar volumul curent oscilează liber cu complianța','În presiunea controlată, volumul curent și presiunea sunt ambele fixe, independent de mecanică','VMC nu are variantă de volum sau de presiune, fiind identică CPAP'],'AB',229,'Ventilație mecanică controlată',
 'Contrastarea variabilei fixe (Vt versus presiune inspiratorie) și a celei care variază cu mecanica pulmonară.',
 ['Vt și frecvența presetate, presiunea variabilă, definesc volumul controlat.','Presiunea și frecvența presetate, Vt variabil, definesc presiunea controlată.','În volumul controlat presiunea variază, nu este fixă.','În presiunea controlată Vt variază cu mecanica.','VMC are tocmai aceste două tipuri.']],
 8,'Distractorii inversează care variabilă este presetată și care urmează mecanica pulmonară.',['volum controlat','presiune controlată']),

q(26,['Presiunea pozitivă la sfârșitul expirului (PEEP) se caracterizează prin:',
 ['Re-expandează unitățile insuficient ventilate și redistribuie lichidul din alveole către interstițiul perivascular, reducând șuntul și crescând PaO2','Creșterea presiunii intratoracice medii poate împiedica reîntoarcerea venoasă, crește rezistența vasculară pulmonară și reduce debitul cardiac','Nivele scăzute (5-8 cmH2O) sunt folosite la majoritatea ventilaților pentru a menține volumul pulmonar, precum și în atelectazia bazală','PEEP scade PaO2 prin creșterea șuntului și crește întoarcerea venoasă','Nivelele uzuale sunt 20-30 cmH2O la toți pacienții, fără efect asupra debitului cardiac'],'ABC',229,'Presiunea pozitivă la sfârșitul expirului',
 'Integrarea beneficiului pe șunt/PaO2 cu costul de întoarcere venoasă/debit și cu intervalul uzual 5-8 cmH2O.',
 ['Re-expansarea, redistribuția lichidului și creșterea PaO2 sunt efectele pulmonare.','Triada întoarcere venoasă↓ / RVP↑ / debit↓ este costul hemodinamic.','5-8 cmH2O este intervalul uzual.','PEEP reduce șuntul și crește PaO2, dar poate scădea debitul.','20-30 cmH2O este presiunea medie citată la HFO, nu PEEP-ul uzual.']],
 8,'Distractorii inversează efectul pe șunt și atribuie PEEP-ului uzual presiunile 20-30 cmH2O ale oscilației de înaltă frecvență.',['5-8 cmH20','reîntoarcerea venoasă']),

q(27,['Reducerea pneumoniei asociate ventilatorului (VAP) include, potrivit capitolului:',
 ['Scurgerea secrețiilor orofaringiene infectate dincolo de balonul canulei este considerată în mare măsură responsabilă','Multe secții folosesc canule cu porturi de aspirație subglotică, pentru a minimiza riscul','Riscul poate fi redus prin nursing la 45° și prin decontaminare orofaringiană','Tratamentul se face cu un antibiotic cu spectru larg, modificabil după izolarea microorganismului cauzal','Poziția declivă 0° și evitarea aspirației subglotice reduc VAP, colonizarea orofaringelui fiind protectivă'],'ABCD',229,'Pneumonia asociată ventilatorului',
 'Asocierea scurgerii pe lângă balon, a aspirației subglotice, a poziției la 45° și a decontaminării orofaringiene.',
 ['Scurgerea dincolo de balon este mecanismul presupus.','Porturile subglotice sunt măsura de dispozitiv.','45° și decontaminarea orofaringiană sunt măsurile de nursing.','Antibioticul cu spectru larg, apoi de-escaladarea, este tratamentul.','Poziția 45°, nu 0°, și aspirația subglotică reduc riscul.']],
 8,'Distractorul inversează poziția 45° și transformă colonizarea orofaringelui din factor de risc în protecție.',['aspiraţie subglotică','poziţie la 45°']),

q(28,['Ventilația protectivă pulmonară, în parametrii din capitol, presupune:',
 ['Volume curente limitate la 4-8 ml/kg greutate corporală ideală (ideal 6 ml/kg)','Presiuni de platou (Pplat) care să nu depășească 30 cmH2O; hipercapnia permisivă este comună și acceptabilă, țintind evitarea acidozei severe (pH >7,2)','Volume curente de 12-15 ml/kg, Pplat 40-45 cmH2O, hipercapnia fiind inacceptabilă','PEEP-ul este evitat, volumul alveolar menținându-se doar prin hiperventilație','Metoda este rezervată HFO, fiind contraindicată în ARDS'],'AB',230,'Ventilația protectivă pulmonară',
 'Reținerea Vt 4-8 (ideal 6) ml/kg, a Pplat ≤30 cmH2O și a hipercapniei permisive cu pH >7,2.',
 ['Intervalul 4-8 ml/kg și idealul 6 ml/kg sunt cifrele de volum.','Pplat 30 cmH2O și pH >7,2 cu hipercapnie permisivă completează protocolul.','12-15 ml/kg și Pplat 40 sunt tocmai supradistensia evitată.','Volumul alveolar se menține cu PEEP.','Textul cere folosirea la aproape toți ventilații, inclusiv ARDS.']],
 8,'Distractorii reînvie Vt 12-15 ml/kg și Pplat 40 cmH2O, parametrii pe care ventilația protectivă tocmai îi interzice.',['4-8 ml/kg','30 cmH20']),

q(29,['Ventilația cu oscilație de înaltă frecvență (HFO) la adult, potrivit evidenței citate:',
 ['Nu oferă beneficiu asupra mortalității; un trial sugerează chiar mortalitate crescută','Reduce mortalitatea în toate studiile la adult, înlocuind ventilația protectivă','Este superioară ECMO ca primă linie în hipoxemia ușoară','Folosește volume curente de 12 ml/kg, fără PEEP','Este identică SIMV, cu frecvențe de 8-12/min'],'A',230,'Oscilația de înaltă frecvență',
 'Recunoașterea absenței beneficiului de mortalitate (și a semnalului de harm) al HFO la adult.',
 ['Absența beneficiului și trialul cu mortalitate crescută sunt concluzia.','Textul infirmă beneficiul de mortalitate.','ECMO rămâne o tehnică extracorporeală distinctă, pentru hipoxemia refractară.','HFO oscilează la 4-15 Hz într-un circuit CPAP, nu cu Vt 12 ml/kg.','SIMV este o tehnică de sevraj, nu HFO.']],
 8,'Distractorii reînvie optimismul de mortalitate și confundă HFO cu Vt mare, SIMV sau ECMO.',['mortalitate crescută','4-15 Hz']),

q(30,['Complicațiile imediate ale intubației traheale, în Cadranul 10.14, includ:',
 ['Canula în esofag — hipoxie și distensie abdominală; detectată prin absența curbelor de capnografie; necesită îndepărtare imediată, ventilație pe mască cu rezervor și reinserție','Canula într-o bronhie principală (de obicei dreapta) — se evită prin verificarea distensiei ambilor plămâni și radiografie toracică pentru poziție','Traumatism al căii aeriene superioare — leziuni ale buzelor, dinților, gingiilor, traheei','Canula esofagiană se confirmă prin capnografie alveolară normală și se lasă pe loc dacă SpO2 este păstrată','Intubația selectivă dreaptă este obiectivul, radiografia fiind superfluă'],'ABC',228,'Cadranul 10.14 — Complicațiile intubației',
 'Recunoașterea triadei esofag (fără capnografie) / bronhie dreaptă (auscultație+Rx) / traumatism local, și a conduitei de retragere imediată.',
 ['Absența capnografiei și secvența mască-reinserție definesc canula esofagiană.','Bronhia dreaptă, auscultația bilaterală și Rx sunt al doilea rând.','Leziunile buzelor/dinților/gingiilor/traheei sunt traumatismul imediat.','Capnografia absentă, nu normală, semnalează esofagul; canula se îndepărtează.','Intubația selectivă dreaptă este complicația, nu obiectivul.']],
 8,'Distractorii transformă absența capnografiei într-un semn de reușită și fac din intubația selectivă dreaptă un obiectiv.',['absenţa curbelor de capnografie','bronhie principală']),
];
