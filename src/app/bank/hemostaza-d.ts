import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-26;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hemostaza',4,pdfOffset,`hemostaza-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const HEMOSTAZA_D=[
q(24,['Conform Tabelului 4-1, probele de laborator ale hemostazei (aPTT, PT, timp de sângerare sau funcție plachetară integrală, timp de trombină) se recoltează:',
 ['La pacienții cu tulburări de sângerare evidente sau la care hemoragia excesivă este anticipată prin natura intervenției','Ca screening neselectiv la fiecare adult asimptomatic înaintea herniei inghinale','Doar postoperator, istoricul preoperator fiind superfluu','Numai dacă PT este deja cunoscut ca prelungit, aPTT fiind inutil','Ca substitut al examenului fizic, anamneza fiind omisă'],'A',39,'Evaluarea preoperatorie — Tabelul 4-1, indicația de probe',
 'Recunoașterea indicației selective a panelului de laborator, distinctă de istoricul și examenul fizic de rutină.',
 ['Tabelul limitează probele la tulburarea evidentă sau la hemoragia anticipată prin natura operației.','Screeningul neselectiv la hernia curată nu figurează; istoricul rămâne de rutină.','Probele sunt preoperatorii, când sunt indicate.','aPTT și PT sunt listate împreună, nu condiționate una de alta.','Istoricul și examenul fizic se fac de rutină; probele nu le înlocuiesc.']],
 8,'Extinde panelul de laborator la screening neselectiv, contrar coloanei „momentul efectuării” din Tabelul 4-1.',['tulburări de sângerare','Probe de laborator']),

q(25,['Operațiile cu pierderi mari de sânge și hemostaza locală intraoperatorie includ:',
 ['Bypass cardiopulmonar, chirurgie aortică, transplant hepatic, chirurgie prostatică, șunturi portocave și traumatisme se asociază frecvent cu pierderi mari','Agenții hemostatici locali includ bureți de gelatină (Gelfoam), celuloză oxidată (Surgicel), burete de colagen, colagen microfibrilar (Avitene), trombină topică, EACA topic și aprotinin topic','Sângerarea din punctele de sutură, liniile vasculare sau disecția extinsă poate fi controlată prin acești agenți locali','Reacțiile hemolitice acute la transfuzia de sânge pot produce CID','Chirurgia prostatică și șuntul portocav sunt operații fără risc hemoragic, spre deosebire de hernia inghinală'],'ABCD',40,'Complicații intraoperatorii — Operații cu pierderi mari și agenți locali',
 'Recunoașterea listei de operații cu pierderi mari și a paletei de agenți topici (Gelfoam, Surgicel, Avitene).',
 ['Lista de operații (bypass, aortă, transplant, prostată, șunt portocav, traumă) este explicită.','Paleta de agenți locali, cu denumirile comerciale, este enumerată.','Indicația pe puncte de sutură/linii vasculare/disecție este enunțată.','Textul leagă reacția hemolitică acută de producerea CID.','Prostata și șuntul portocav sunt pe lista de pierderi mari.']],
 8,'Scoate prostata și șuntul portocav de pe lista de pierderi mari și rezervă Gelfoam/Surgicel pentru CID.',['Gelfoam','Surgicel'],[39]),

q(26,['Un pacient sub anestezie generală primește sânge incompatibil. Sunt adevărate afirmațiile:',
 ['Agitația și durerile de spate, simptome obișnuite ale incompatibilității, nu sunt evidente sub anestezie generală','Manifestarea poate fi sângerarea generalizată prin CID','Hemoglobinuria și oliguria oferă dovezi clinice suplimentare de CID','Frisonul și durerea lombară rămân evidente sub anestezie, CID fiind exclusă','Hemoglobinuria infirmă CID-ul, oliguria fiind un semn de supraîncărcare volemică izolată'],'ABC',40,'Transfuzia incompatibilă sub anestezie — CID fără simptome clasice',
 'Recunoașterea faptului că, sub AG, incompatibilitatea se demască prin sângerare difuză, hemoglobinurie și oligurie, nu prin agitație.',
 ['Textul precizează că simptomele obișnuite nu sunt evidente sub anestezie generală.','Sângerarea generalizată prin CID este manifestarea descrisă.','Hemoglobinuria și oliguria sunt probele clinice suplimentare.','Sub AG aceste simptome lipsesc; CID este tocmai consecința.','Perechea hemoglobinurie-oligurie susține, nu infirmă, CID-ul.']],
 8,'Așteaptă frisonul și durerea lombară sub anestezie și neagă CID-ul, contrar paragrafului despre transfuzia incompatibilă.',['Hemoglobinuria','oliguria']),

q(27,['Hemoragia postoperatorie după bypass sau hepatectomie se caracterizează prin:',
 ['Heparina reziduală după bypass cardiopulmonar sau chirurgie vasculară periferică poate cauza hemoragii cu debit scăzut, progresive, sau hemoragii evidente','După hepatectomie parțială extinsă, țesutul restant poate avea nevoie de 3–5 zile pentru a crește producția de factori suficient pentru hemostază','Un deficit dobândit de factori dependenți de vitamina K (II, VII, IX și X) poate apărea la pacienții hrăniți insuficient care primesc antibiotice','Deficitul de factor XIII se corectează în 3–5 zile prin heparină reziduală','Hepatectomia scurtează sinteza factorilor la sub o oră, analog fibrinolizei primare'],'ABC',41,'Hemoragii postoperatorii — Heparină reziduală și fereastra 3–5 zile hepatică',
 'Diferențierea heparinei reziduale post-bypass de fereastra de 3–5 zile a ficatului restant, versus FXIII din același interval.',
 ['Heparina reziduală ca și cauză de sângerare progresivă post-bypass/vascular este explicită.','Fereastra 3–5 zile a producției de factori după hepatectomie este citată.','Deficitul K-dependent (II, VII, IX, X) la malnutriți cu antibiotice este enunțat.','FXIII se confirmă prin dozare, nu prin heparină.','Textul cere zile, nu o oră, până la producția adecvată de factori.']],
 8,'Confundă fereastra hepatică de 3–5 zile cu heparina reziduală și cu FXIII, trei cauze din același paragraf de sângerare tardivă.',['3-5 zile','bypass']),

q(28,['Cel mai important prim pas în evaluarea riscului de TEV este istoricul. Alertează către hipercoagulabilitate:',
 ['Un episod de TEV înainte de 40 de ani sau un TEV neprovocat la orice vârstă, un episod recurent, ori tromboză cu sediu neobișnuit (ex. vene mezenterice)','Un TEV post-fractură de femur la 70 de ani, fără recurență și fără istoric familial','Un INR terapeutic sub warfarină, fără evenimente anterioare','O hernie inghinală electivă la tânărul fără antecedente','Un timp de sângerare prelungit, fără tromboză în antecedente'],'A',42,'Hipercoagulabilitate — Istoricul: <40 de ani și sediu mezenteric',
 'Recunoașterea clusterului anamnestic (TEV <40 de ani, neprovocat, recurent, mezenteric) ca semnal de hipercoagulabilitate.',
 ['Cele patru elemente — vârstă <40, neprovocat, recurență, sediu neobișnuit/mezenteric — sunt enumerate ca primul pas.','TEV-ul provocat de fractură la vârstnic, fără recurență, nu este clusterul citat.','INR-ul terapeutic nu înlocuiește anamneza de TEV.','Hernia curată fără antecedente nu alertează.','Timpul de sângerare privește hemostaza hemoragică, nu riscul trombotic.']],
 8,'Înlocuiește TEV-ul <40 de ani/mezenteric cu un eveniment provocat la vârstnic, capcana clasică a anamnezei de hipercoagulabilitate.',['40 de ani','venelor mezenterice']),

q(29,['Indicațiile transfuziei de plasmă proaspăt congelată includ:',
 ['Deficite multiple de factori (PT sau aPTT anormal crescute) cu sângerare clinică sau înaintea unei proceduri invazive','Cauze posibile: coagulopatie de diluție după transfuzie masivă, defecte congenitale de sinteză, warfarină sau heparină, afecțiuni hepatice, malnutriție','PPC este inutilă în coagulopatia de diluție, fiind rezervată anemiei cronice izolate','O unitate de PPC crește hematocritul cu 3%, identic MER','PPC înlocuiește masa trombocitară la pragul 30.000–50.000/µL'],'AB',43,'Transfuzia de PPC — PT/aPTT și procedură invazivă',
 'Aplicarea indicației pe deficite multiple cu sângerare sau gest invaziv, plus lista etiologică, versus confuzia cu MER/trombocite.',
 ['Indicația PT/aPTT crescute plus sângerare sau procedură invazivă este explicită.','Lista cauzelor (diluție, congenital, warfarină/heparină, ficat, malnutriție) este enumerată.','Diluția după transfuzie masivă este tocmai o indicație, nu o contraindicație.','Creșterea Ht cu 3% aparține MER, nu PPC.','Pragul 30.000–50.000 este al trombocitelor, nu al plasmei.']],
 8,'Atribuie PPC efectul de hematocrit al MER și pragul trombocitar, două cifre din pagini alăturate.',['Transfuzia de PPC','proceduri invazive']),

q(30,['Reacțiile febrile transfuzionale și boala grefă-contra-gazdă se caracterizează prin:',
 ['Reacțiile febrile sunt cele mai frecvente reacții imunologice, de obicei prin anticorpi antileucocitari (febră, frisoane, tahicardie); transfuzia se oprește, terapia este suportivă','GVHD apare la imunodeprimați prin leucocite donatoare, cu debut insidios la câteva săptămâni (febră, eritem, disfuncție hepatică, diaree) și se previne prin MER deleucocitată și/sau eritrocite iradiate','Reacțiile febrile sunt cele mai rare, GVHD debutând în 1–2 ore ca LPAT','Iradierea eritrocitelor precipită GVHD, anticorpii antileucocitari fiind protectori','GVHD se tratează prin creșterea vitezei de transfuzie, identic supraîncărcării volemice'],'AB',45,'Reacții imunologice — Febrile (antileucocitare) versus GVHD iradiat',
 'Contrastarea reacției febrile (cea mai frecventă, antileucocitară) de GVHD-ul tardiv prevenit prin deleucocitare/iradiere.',
 ['Frecvența maximă, anticorpii antileucocitari și conduita (oprire, suport) sunt explicite pe pagina anterioară.','Mecanismul, fereastra de săptămâni, tabloul și prevenția prin deleucocitare/iradiere sunt enunțate.','Febrilele sunt cele mai frecvente; 1–2 ore este fereastra LPAT, nu a GVHD.','Iradierea previne, nu precipită, GVHD.','Creșterea vitezei agravează supraîncărcarea, nu tratează GVHD.']],
 8,'Permutează fereastra de săptămâni a GVHD cu 1–2 ore ale LPAT și inversează rolul iradierii.',['reacţii febrile','eritrocite iradiate'],[44]),

q(31,['Reacția hemolitică acută transfuzională se caracterizează prin:',
 ['Poate debuta rapid după doar 50 mL de sânge de la donator','Transfuzia se oprește imediat; restul unității și o probă a pacientului se trimit pentru ABO/Rh, compatibilitate și culturi (diagnostic diferențial de contaminare)','Unii clinicieni recomandă manitol și/sau furosemid pentru a menține diureza; IRA severă poate necesita hemodializă','Simptomele includ senzație de cald sau rece, eritem facial, dureri precordiale și lombare; semnele: febră, hipotensiune, tahicardie, hematurie, hemoglobinurie, sângerare','Se continuă transfuzia cu viteză crescută, manitolul fiind contraindicat, pragul de 50 mL fiind inofensiv'],'ABCD',45,'Reacția hemolitică acută — 50 mL, oprire și manitol',
 'Fixarea pragului de 50 mL, a opririi imediate cu retrimitere la laborator și a manitolului/furosemidului pentru diureză.',
 ['Pragul de doar 50 mL este explicit.','Oprirea, retrimiterea pentru ABO/compatibilitate și culturile sunt listate.','Manitolul/furosemidul și hemodializa sunt enunțate.','Simptomele și semnele, inclusiv hemoglobinuria, sunt enumerate.','Textul cere oprirea imediată, nu accelerarea; 50 mL poate declanșa reacția.']],
 8,'Continuă transfuzia după 50 mL și interzice manitolul, două gesturi inversate din algoritmul hemolitic.',['50 mL de sânge','manito']),
];
