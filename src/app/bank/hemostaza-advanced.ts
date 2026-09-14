import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-26;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hemostaza',4,pdfOffset,`hemostaza-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const HEMOSTAZA_ADVANCED=[
q(1,['Care dintre următoarele afirmații despre hemofilia A și boala von Willebrand sunt adevărate?',
 ['Hemofilia A se transmite X-linkat și afectează doar pacienții de sex masculin','Boala von Willebrand se transmite autosomal-dominant și afectează ambele sexe','În hemofilia A, sângerările tipice sunt articulare și intramusculare, pe când în boala von Willebrand predomină sângerarea muco-cutanată','În ambele boli, aPTT este tipic prelungit, iar PT este normal','Funcția trombocitară este anormală în hemofilia A și normală în boala von Willebrand'],'ABCD',39,'Tulburări congenitale ale hemostazei — Hemofilia A și boala von Willebrand',
 'Diferențierea transmiterii, a localizării sângerării și a profilului de laborator dintre hemofilia A și boala von Willebrand.',
 ['Transmiterea X-linkată și afectarea doar a sexului masculin sunt explicite pentru hemofilia A.','Transmiterea autosomal-dominantă și afectarea ambelor sexe sunt explicite pentru vWD.','Localizarea articulară/intramusculară versus muco-cutanată este tabelată.','În ambele, aPTT este prelungit și PT este normal.','Funcția trombocitară este normală în hemofilia A și anormală în vWD, nu invers.']],
 8,'Distractorul final inversează profilul funcției trombocitare între cele două boli.',['X-linkat','muco-cutanat']),

q(2,['Alegeți afirmațiile corecte referitoare la tulburările dobândite ale hemostazei și la medicamentele care le induc:',
 ['Bolile hepatice avansate, terapia anticoagulantă, trombocitopenia dobândită și uremia sunt cauze dobândite enumerate','Aspirina și clopidogrelul provoacă inhibarea ireversibilă a funcției plachetare','Inhibitorii direcți ai trombinei, precum argatrobanul, sunt utilizați în special la pacienții cu trombocitopenie indusă de heparină','Warfarina acționează prin potențarea antitrombinei III, la fel ca heparina nefracționată','Medicația fără prescripție, precum suplimentele din plante, nu poate altera hemostaza'],'ABC',40,'Tulburări dobândite ale hemostazei; Anticoagulante și antiplachetare',
 'Recunoașterea cauzelor dobândite și a profilului de acțiune al aspirinei, clopidogrelului și al inhibitorilor direcți ai trombinei.',
 ['Lista cauzelor dobândite include explicit aceste entități.','Inhibarea ireversibilă plachetară de către aspirină și clopidogrel este menționată.','Argatrobanul/bivalirudina sunt indicate în special în HIT.','Warfarina este antagonist al vitaminei K; heparina acționează prin antitrombină.','Suplimentele din plante sunt listate explicit ca o cauză posibilă.']],
 8,'Distractorii confundă mecanismul warfarinei cu al heparinei și exclud greșit o cauză listată (plantele).',['inhibarea ireversibilă','trombocitopenie indusă de heparină']),

q(3,['Sunt adevărate următoarele afirmații despre hemoragia masivă și resuscitarea de control lezional:',
 ['Hemoragia masivă poate fi definită prin necesitatea a cel puțin 10 unități MER în 24 de ore sau ≥4 unități pe oră','Raportul optim plasma:trombocite:MER în protocoalele de transfuzie masivă este 1:1:1','Calciu suplimentar trebuie administrat la fiecare 2 unități de MER','Resuscitarea volemică agresivă precoce cu cristaloide este preferată față de hipotensiunea permisivă','Coagulopatia traumatică acută rezultă în principal din consumul exagerat de factori de coagulare circulanți, nu din perfuzia tisulară inadecvată'],'ABC',40,'Hemoragia masivă și resuscitarea de control lezional',
 'Aplicarea definițiilor de hemoragie masivă, a raportului 1:1:1 și a principiului hipotensiunii permisive.',
 ['Pragurile de 10 U/24 h și ≥4 U/oră sunt explicite.','Raportul 1:1:1 este standardul citat.','Calciul la fiecare 2 U MER este recomandat.','Textul promovează hipotensiunea permisivă și evitarea hemodiluției cu cristaloide.','CAT rezultă din perfuzia tisulară inadecvată, nu din consumul exagerat de factori.']],
 8,'Inversează două principii centrale ale RCL (hipotensiune permisivă și mecanismul CAT).',['1:1:1','hipotensiune permisivă'],[41]),

q(4,['Chirurgia de control lezional:',
 ['Implică o intervenție inițială abreviată menită să oprească sângerarea și contaminarea bacteriană în desfășurare','După resuscitare și stabilizare în terapie intensivă urmează proceduri definitive în serie','Este standardul actual de îngrijire pentru leziuni severe abdominale, toracice, pelvine sau ale extremităților','Scopul intervenției inițiale este reconstrucția anatomică completă într-o singură etapă','Hipotermia și hemodiluția trebuie acceptate ca inevitabile în faza inițială de resuscitare'],'ABC',41,'Chirurgia de control lezional',
 'Diferențierea intervenției abreviate de control lezional de chirurgia definitivă într-o singură etapă.',
 ['Intervenția abreviată pentru stoparea sângerării/contaminării este definiția.','Procedurile definitive urmează după stabilizare în UTI.','Standardul pentru leziuni severe multi-site este explicit.','Reconstrucția completă într-o etapă contrazice principiul abrevierei.','Strategiile RCL urmăresc evitarea hipotermiei și a hemodiluției.']],
 8,'Distractorii restabilesc greșit paradigma chirurgiei definitive imediate și acceptă complicațiile pe care RCL le evită.',['intervenție inițială abreviată','hipotermiei']),

q(5,['Indicați afirmațiile corecte privind transfuzia de masă trombocitară:',
 ['Este indicată la sângerări clinice asociate cu trombocitopenie absolută sau cu disfuncție plachetară','Pacienții cu funcție trombocitară normală sângerează de obicei abia sub 30.000–50.000 trombocite/µL','La o transfuzie obișnuită de 6 unități se așteaptă o creștere de aproximativ 50.000–100.000 trombocite/µL','Pacienții cu disfuncție trombocitară sângerează doar când numărul de trombocite scade sub 10.000/µL','Suspensiile trombocitare nu conțin plasma și nu pot conține eritrocite sau leucocite'],'ABC',44,'Transfuzia de masă trombocitară',
 'Aplicarea pragurilor de sângerare și a răspunsului cantitativ așteptat după transfuzia de trombocite.',
 ['Indicația pe sângerare plus trombocitopenie/disfuncție este explicită.','Pragul 30.000–50.000 la funcție normală este citat.','Creșterea de 50.000–100.000 după 6 unități este așteptarea tipică.','Cu disfuncție, sângerarea apare adesea la număr normal de trombocite, nu doar sub 10.000.','Suspensiile conțin o cantitate de plasma și câteva eritrocite sau leucocite.']],
 8,'Inversează relația disfuncție–prag numeric și compoziția suspensiei trombocitare.',['30.000-50.000','50.000-100.000']),

q(6,['Care dintre următoarele afirmații despre triada letală din trauma hemoragică sunt adevărate?',
 ['Triada letală constă în acidoză, hipotermie și coagulopatie','Hipotermia este definită ca temperatură centrală sub 35°C','Hipotermia alterează funcția trombocitară, inhibă factorii de coagulare și activează inadecvat cascada coagulării','Triada letală include hipernatremia ca al patrulea element constitutiv','Încălzirea fluidelor și a produselor sanguine înainte de transfuzie nu influențează temperatura corporală'],'ABC',44,'Complicații ale transfuziei — Triada letală',
 'Recunoașterea celor trei componente ale triadei letale și a efectelor hipotermiei asupra hemostazei.',
 ['Cele trei componente sunt enumerate și ilustrate.','Pragul <35°C este definiția citată.','Efectele asupra trombocitelor și a factorilor de coagulare sunt explicite.','Triada are trei elemente; hipernatremia nu face parte din ea.','Încălzirea fluidelor este o strategie importantă împotriva hipotermiei.']],
 8,'Adaugă un element fals la triadă și neagă o măsură preventivă explicită (încălzirea fluidelor).',['Triada letală','<35']),

q(7,['Care dintre următoarele caracterizează corect leziunea pulmonară acută asociată transfuziei (LPAT/TRALI)?',
 ['Edem pulmonar noncardiogen apărut după transfuzie, cel mai frecvent după produse care conțin plasmă','Edem pulmonar cardiogen prin supraîncărcare volemică izolată, fără legătură cu plasma donată','Hemoliză intravasculară imediată prin incompatibilitate ABO, cu hemoglobinurie','Boală grefă-contra-gazdă cu debut la câteva săptămâni, prin leucocite donatoare','Contaminare bacteriană a unității, tratată prin cultură și antibiotice sistemice'],'A',45,'Complicații ale transfuziei — LPAT',
 'Diferențierea LPAT de supraîncărcarea volemică, de reacția hemolitică, de GVHD și de contaminarea bacteriană.',
 ['LPAT este caracterizată ca edem pulmonar noncardiogen post-transfuzie, mai frecvent după PPC/trombocite.','Edemul cardiogen prin supraîncărcare este o entitate distinctă, nu definiția LPAT.','Hemoliza ABO descrie reacția hemolitică acută, nu LPAT.','GVHD are debut insidios la săptămâni și alt mecanism.','Contaminarea bacteriană este o complicație infecțioasă distinctă.']],
 8,'Toate opțiunile sunt complicații reale ale transfuziei din capitol; doar una corespunde definiției LPAT.',['noncardiogen','PPC']),
];
