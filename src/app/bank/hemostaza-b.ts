import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-26;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hemostaza',4,pdfOffset,`hemostaza-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const HEMOSTAZA_B=[
q(8,['Tulburările preexistente ale hemostazei trebuie suspectate atunci când:',
 ['Există episoade anterioare de sângerare sau hemoragia anormală se instalează în primele 30 de minute ale intervenției','Sângerarea apare doar după a treia zi, fără istoric hemoragic','Coagulograma preoperatorie este normală, deci defectul congenital este exclus','Hemoragia difuză după bypass cardiopulmonar exclude o tulburare preexistentă','Timpul de sângerare normal infirmă orice defect plachetar dobândit'],'A',39,'Tulburări preexistente ale hemostazei',
 'Recunoașterea ferestrei de 30 de minute și a istoricului hemoragic ca indicii de coagulopatie preexistentă.',
 ['Textul leagă antecedentele hemoragice și sângerarea din primele 30 de minute de o tulburare preexistentă.','Sângerarea tardivă (3–5 zile) evocă deficitul de factor XIII, nu coagulopatia preexistentă tipică.','Coagulograma poate fi normală la majoritatea pacienților; istoricul rămâne esențial.','Bypass-ul, chirurgia aortică și transplantul hepatic sunt operații cu pierderi mari, nu exclud un defect preexistent.','Timpul de sângerare este mai puțin utilizat; funcția plachetară integrală îl înlocuiește.']],
 8,'Confundă fereastra de 30 de minute cu sângerarea tardivă de factor XIII de două pagini mai jos.',['primele 30 de','tulburări preexistente']),

q(9,['Comparând datele epidemiologice din Tabelul 4-2:',
 ['Hemofilia A are o incidență de 25 la 100.000 de locuitori în SUA','Boala von Willebrand afectează circa 1% din populația SUA','În hemofilia A moleculele de factor VIII sunt prezente, dar activitatea este redusă sau absentă','Incidența hemofiliei A este 1% din populație, identică bolii von Willebrand','Boala von Willebrand nu reduce activitatea factorului VIII'],'ABC',39,'Tabelul 4-2 — Hemofilia A versus boala von Willebrand',
 'Contrastarea incidenței (25/100.000 versus 1%) și a prezenței moleculelor de factor VIII în hemofilia A.',
 ['Cifra 25 la 100.000 este tabelată.','Proporția de 1% pentru vWD este tabelată.','Moleculele de factor VIII prezente, cu activitate redusă/absentă, definesc hemofilia A.','1% este prevalența vWD, nu a hemofiliei A.','vWD reduce atât activitatea factorului VIII, cât și pe cea a vWF.']],
 8,'Permutează 25/100.000 cu 1% și neagă prezența moleculelor de FVIII din același tabel.',['25 la 100.000','1% din populaţia']),

q(10,['Hemoragia masivă, în definițiile și predictorii din capitol, include:',
 ['Înlocuirea întregului volum circulator în 24 de ore sau a >50% în 4 ore','O rată a sângerării >150 mL/minut cu instabilitate hemodinamică','Predictorii din camera de gardă: TAS ≤90 mm Hg, FC ≥120/min, FAST pozitivă, plagă penetrantă','CAT este prezentă la internarea a circa 25% dintre traumatismele majore și asociază mortalitate de 4 ori mai mare','CAT rezultă din consumul exagerat de factori circulanți, independent de perfuzia tisulară'],'ABCD',40,'Hemoragia masivă — Definiții și CAT',
 'Completarea definiției (volum, 50%/4 h, 150 mL/min) cu predictorii de cameră și epidemiologia CAT.',
 ['Criteriile de înlocuire a volumului sunt enumerate pe lângă pragurile de unități.','Rata >150 mL/min cu instabilitate este o variantă de definiție.','Cei patru predictori de cameră de gardă sunt listați.','Prevalența de 25% și mortalitatea ×4 sunt explicite.','CAT rezultă din perfuzia tisulară inadecvată, nu din consumul exagerat.']],
 8,'Adaugă praguri (150 mL/min, 50%/4 h) ușor de omis pe lângă 10 U/24 h, cu inversarea mecanismului CAT.',['> 150 mL/minut','aproximativ 25%']),

q(11,['Adjuvanții protocoalelor de transfuzie masivă se caracterizează prin:',
 ['TXA este recomandat condiționat în primele 3 ore de la leziune, la traume severe cu hemoragie masivă','rFVIIa poate reduce necesarul transfuzional, dar fără beneficiu semnificativ de mortalitate','50% din sângerările postoperatorii sunt cauzate de hemostaza necorespunzătoare intraoperatorie','TXA se administrează după 12 ore, când fibrinoliza primară s-a epuizat','rFVIIa înlocuiește raportul 1:1:1 ca strategie de primă linie'],'ABC',41,'RCL — TXA, rFVIIa și hemoragia postoperatorie',
 'Diferențierea ferestrei de 3 ore a TXA de absența beneficiului de mortalitate al rFVIIa și de cauza tehnică a jumătății de sângerări.',
 ['Fereastra de 3 ore și indicația condiționată sunt explicite.','Reducerea transfuziilor fără impact pe mortalitate este citată.','Proporția de 50% prin hemostază necorespunzătoare este enunțată.','Textul cere administrarea în primele 3 ore, nu după 12.','Raportul 1:1:1 rămâne standardul PTM; rFVIIa este adjuvant.']],
 8,'Mută TXA după 12 ore și promovează rFVIIa ca substitut al 1:1:1, două erori de protocol.',['primele 3 ore','50% din sângerările']),

q(12,['Deficitul dobândit de factor XIII se recunoaște prin:',
 ['Sângerare postoperatorie întârziată, apărută la 3–5 zile după intervenție, confirmată prin dozarea factorului XIII','Hemoragie difuză în primele 30 de minute, cu aPTT izolat prelungit','Hematurie și oligurie sub anestezie, ca în reacția hemolitică','Necroză cutanată la inițierea warfarinei, ca în deficitul de proteină C','Răspuns prompt la vitamina K, identic deficitului de factori II, VII, IX și X'],'A',41,'Hemoragii postoperatorii — Factorul XIII',
 'Separarea ferestrei 3–5 zile a deficitului de FXIII de sângerarea precoce și de deficitul K-dependent.',
 ['Textul plasează sângerarea la 3–5 zile și cere evaluarea factorului XIII.','Primele 30 de minute evocă tulburarea preexistentă, nu FXIII.','Hemoglobinuria/oliguria țin de CID post-transfuzie incompatibilă.','Necroza cutanată ține de warfarină în deficitul de proteină C.','FXIII nu este K-dependent; vitamina K corectează II, VII, IX și X.']],
 8,'Confundă fereastra 3–5 zile a FXIII cu sângerarea din primele 30 de minute și cu deficitul K-dependent.',['factor Xlll','3-5 zile']),

q(13,['În stările de hipercoagulabilitate, potrivit Tabelului 4-5 și textului:',
 ['Cauza frecventă de tromboză venoasă este factorul V Leiden; sindromul antifosfolipidic este cauza frecventă arterială','La deficitul de proteină C, warfarina fără suprapunere prelungită cu heparină poate produce necroză cutanată indusă de Coumadin','Factorul V Leiden este cauza frecventă a trombozei arteriale, iar sindromul antifosfolipidic a TEV','Heparina 5.000 UI subcutanat compromite hemostaza chirurgicală și este evitată perioperator','Antecedentele familiale nu ghidează evaluarea factorilor ereditari de hipercoagulabilitate'],'AB',42,'Hipercoagulabilitate — Tabelul 4-5 și warfarina',
 'Contrastarea sediului (V Leiden venos versus antifosfolipidic arterial) cu riscul de necroză Coumadin.',
 ['Tabelul plasează V Leiden la TEV și sindromul antifosfolipidic la tromboza arterială.','Necroza cutanată fără overlapping heparinic este explicită.','Atribuirea este inversată față de tabel.','Heparina 5.000 UI s.c. asigură protecție fără a compromite hemostaza.','Istoricul familial ghidează evaluarea factorilor ereditari.']],
 8,'Inversează V Leiden și sindromul antifosfolipidic pe coloanele arterial/venos ale aceluiași tabel.',['FactorV Leiden','necroză cutanată']),

q(14,['Transfuzia de masă eritrocitară, în parametrii din capitol:',
 ['Pungile de MER se conservă la 1–6°C, cu durată de viață de aproximativ 42 de zile','O unitate conține circa 200 mL eritrocite și 30 mL plasmă, într-un volum total de 310 mL, hematocrit ≈57%','La un adult de 70 kg, o unitate crește hematocritul cu 3% și hemoglobina cu 1 g/dL','Incompatibilitățile ABO sunt cele mai frecvente cauze ale reacțiilor transfuzionale fatale','Sângele integral este indicația de primă intenție la anemia cronică izolată, fără sângerare'],'ABCD',43,'Transfuzia de eritrocite',
 'Aplicarea cifrelor de conservare (42 zile, 200/30/310 mL, +3%/+1 g/dL) și a gravității ABO.',
 ['Temperatura 1–6°C și durata 42 de zile sunt citate.','Compoziția 200/30/310 mL și Ht 57% sunt explicite.','Creșterea de 3% Ht și 1 g/dL Hb la 70 kg este așteptarea tipică.','ABO este cauza principală a reacțiilor fatale.','Sângele integral nu are indicații ferme, exceptând volumul masiv sau indisponibilitatea componentelor.']],
 8,'Patru cifre de produs (temperatură, volum, ΔHt, ΔHb) ușor de permutat, plus mitul sângelui integral.',['42 de zile','1 g/dL']),

q(15,['Reacțiile imunologice transfuzionale se caracterizează prin:',
 ['Reacțiile febrile sunt cele mai frecvente, de obicei prin anticorpi antileucocitari, cu febră, frisoane și tahicardie','Reacția hemolitică acută poate debuta după doar 50 mL de sânge incompatibil ABO, cu dureri lombare, hemoglobinurie și hipotensiune','Reacțiile febrile sunt cele mai rare și se tratează prin continuarea transfuziei cu viteză crescută','Hemoliza acută apare doar după 2–3 săptămâni, identic bolii grefă-contra-gazdă','Manitolul și furosemidul sunt contraindicate, diureza trebuind suprimată în hemoliză'],'AB',45,'Complicații imunologice — Febrile și hemolitice',
 'Diferențierea reacției febrile (cea mai frecventă, antileucocitară) de hemoliza ABO precoce (50 mL).',
 ['Predominanța reacțiilor febrile și mecanismul antileucocitar sunt explicite.','Pragul de 50 mL și semnele (lombare, hemoglobinurie, hipotensiune) sunt descrise.','Febrilele sunt cele mai frecvente; transfuzia se oprește.','Debutul la săptămâni descrie GVHD, nu hemoliza acută.','Unii clinicieni recomandă manitol și/sau furosemid pentru a menține diureza.']],
 8,'Inversează frecvența febrilelor și mută hemoliza acută în fereastra GVHD de săptămâni.',['50 mL de sânge','Reacţiile feb1ile'],[44]),
];
