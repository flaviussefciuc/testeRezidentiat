import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-26;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hemostaza',4,pdfOffset,`hemostaza-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const HEMOSTAZA_C=[
q(16,['Identificați afirmația corectă privind indicația transfuziei de masă eritrocitară:',
 ['Anemia izolată nu este, în majoritatea populației, o indicație de transfuzie; simptomele asociate anemiei și nevoile fiziologice individuale ghidează decizia, transfuzia fiind un transplant tisular','Orice hemoglobină sub 12 g/dL la adultul stabil impune o unitate de MER de principiu','Sângele integral este indicația de primă intenție în anemia cronică izolată, fără sângerare','Decizia de transfuzie ignoră comorbiditățile cardiace, pulmonare sau renale','Eritrocitele deplasmatizate sunt rezervate hemoragiei masive, nu reacțiilor febrile anterioare'],'A',43,'Transfuzia de eritrocite — Anemia izolată nu este indicație',
 'Recunoașterea faptului că anemia izolată nu dictează transfuzia, aceasta fiind un transplant tisular individualizat.',
 ['Textul precizează explicit că anemia izolată nu este o indicație și că transfuzia este un transplant tisular.','Un prag neselectiv de 12 g/dL nu figurează; decizia este multifactorială.','Sângele integral nu are indicații ferme, exceptând volumul masiv sau indisponibilitatea componentelor.','Comorbiditățile cardiace, pulmonare și renale sunt printre factorii listați.','Deplasmatizate/deleucocitate sunt pentru hipersensibilitate, reacții febrile sau transplantați.']],
 8,'Transformă anemia izolată într-o indicație neselectivă și promovează sângele integral, contrar paragrafului despre transplantul tisular.',['anemia izolată','transplant tisular']),

q(17,['Conform Tabelului 4-4, monitorizarea anticoagulantelor include:',
 ['Heparina nefracționată (inhibare Xa și trombină) se urmărește prin aPTT sau activitatea anti-Xa','HGMM, apixaban, edoxaban, rivaroxaban și fondaparina (inhibare Xa) se urmăresc prin activitatea anti-Xa','Warfarina (factori inactivi II, VII, IX, X — „1972”) se urmărește prin PT/INR; argatroban, dabigatran și bivalirudina prin aPTT/TT','Warfarina se monitorizează prin anti-Xa, identic HGMM','Heparina nefracționată se urmărește doar prin PT, fără aPTT'],'ABC',40,'Tabelul 4-4 — Mecanism și teste de monitorizare',
 'Diferențierea aPTT/anti-Xa (HNF), anti-Xa (HGMM și Xa-inhibitori) și PT/INR (warfarină) de aPTT/TT (DTI).',
 ['Rândul HNF: aPTT sau anti-Xa este tabelat.','Rândul inhibitorilor de Xa, inclusiv fondaparina, cere anti-Xa.','Mnemotehnica 1972 și PT/INR pentru warfarină, plus aPTT/TT pentru DTI, sunt tabelate.','Anti-Xa aparține HGMM/Xa-inhibitorilor, nu warfarinei.','HNF se urmărește prin aPTT sau anti-Xa, nu prin PT.']],
 8,'Permutează PT/INR al warfarinei cu anti-Xa al HGMM, două coloane alăturate din același tabel.',['fondaparină (Arixtra)','1972']),

q(18,['Diagnosticul și substituția în CID perioperatorie se caracterizează prin:',
 ['aPTT și PT prelungite, hipofibrinogenemie, trombocitopenie, produși de degradare a fibrinei și D-dimeri pozitivi','Cel mai important aspect al tratamentului este eliminarea factorilor etiologici (de exemplu tratarea septicemiei)','Crioprecipitatul este cea mai bună metodă de compensare a unui deficit important de fibrinogen','PPC este utilă pentru suplinirea altor deficite identificate, cu prudență dacă supraîncărcarea volemică este o problemă','Vitamina K izolată corectează CID, crioprecipitatul fiind inutil'],'ABCD',41,'CID — Probe de laborator și crioprecipitat',
 'Aplicarea panelului de laborator al CID și a crioprecipitatului ca sursă de fibrinogen, plus tratarea cauzei.',
 ['Cele cinci probe (aPTT, PT, fibrinogen, trombocite, FDP/D-dimeri) sunt enumerate.','Eliminarea cauzei (septicemie) este descrisă ca cel mai important aspect.','Crioprecipitatul ca cea mai bună metodă pentru fibrinogen este explicit.','Textul menționează PPC pentru celelalte deficite, cu atenție la supraîncărcarea volemică.','Vitamina K corectează factorii II, VII, IX, X; crioprecipitatul este metoda citată pentru fibrinogen.']],
 8,'Inversează D-dimerii/fibrinogenul și înlocuiește crioprecipitatul cu vitamina K, două erori de substituție din același paragraf.',['hipofibrinogenemie','Crioprecipitatul']),

q(19,['Fibrinoliza primară, spre deosebire de cea secundară, se recunoaște prin:',
 ['Apare după terapie cu tPA, după chirurgie prostatică (organ bogat în urokinază) sau în insuficiență hepatică severă; t½ al agenților litici este de minute, sângerarea oprindu-se rapid la întrerupere','EACA poate fi folosit dacă fibrinoliza primară devine severă, dar blochează cascada fibrinolitică și poate predispone la tromboză','Este răspunsul uzual la CID și se remite doar după corectarea coagulării, fără legătură cu prostata','tPA prelungește sângerarea zile întregi după oprire, t½ fiind de 48 de ore','EACA este inofensiv trombotic și se dă de primă intenție în orice CID'],'AB',42,'Fibrinoliza primară — Urokinază prostatică și EACA',
 'Contrastarea fibrinolizei primare (tPA, prostată, t½ scurt, EACA cu risc trombotic) de fibrinoliza secundară din CID.',
 ['Cauzele (tPA, prostată/urokinază, ficat) și t½ de minute sunt explicite.','EACA ca terapie de rezervă, cu risc trombotic, este enunțat.','Răspunsul la CID definește fibrinoliza secundară, nu pe cea primară.','Textul precizează t½ de minute, nu 48 de ore.','EACA se folosește cu atenție, nu neselectiv în CID.']],
 8,'Confundă fibrinoliza primară (prostată, t½ minute) cu cea secundară din CID și ignoră riscul trombotic al EACA.',['urokinază','timpul de înjumătăţire']),

q(20,['Hemostaza la gravida chirurgicală se caracterizează prin:',
 ['Creșterea volumului circulant cu anemie relativă și niveluri crescute de factor VIII, fibrinogen și alți factori','Tromboza și embolia pulmonară sunt principalele cauze de deces; riscul este maxim în trimestrul al treilea și după naștere','HGMM și heparina nefracționată reprezintă tratamentul anticoagulant electiv la gravide','Warfarina este anticoagulantul de primă intenție pe tot parcursul sarcinii','Riscul trombotic este maxim în primul trimestru și dispare imediat după naștere'],'ABC',42,'Cazuri particulare — Gravida: FVIII, trimestrul III, heparină',
 'Recunoașterea stării procoagulante (FVIII, fibrinogen), a vârfului de risc din trimestrul III/postpartum și a heparinei ca electiv.',
 ['Creșterea FVIII, fibrinogenului și anemia relativă sunt explicite.','EP/tromboza ca principale cauze de deces și vârful din trimestrul III/postpartum sunt citate.','HGMM și HNF ca tratament electiv sunt enunțate.','Warfarina nu este listată ca electivă în sarcină; heparinele sunt.','Textul plasează maximul în trimestrul III și după naștere, nu în primul trimestru.']],
 8,'Mută vârful trombotic în primul trimestru și promovează warfarina în locul heparinei, două erori obstetricale din același paragraf.',['factor VIII, fibrinogen','al treilea trimestru']),

q(21,['Coagulopatia din disfuncția hepatică, potrivit capitolului, se caracterizează prin:',
 ['INR monitorizează funcția de sinteză hepatică; bilirubina, amoniemia și transaminazele nu sunt măsurători utile ale coagulopatiei','Pacienții hepatici pot prezenta hemoragie, hipercoagulabilitate sau ambele simultan, prin dezechilibru dublu al proceselor anti- și procoagulante','Transaminazele și amoniemia cuantifică precis deficitul de factori, INR-ul fiind superfluu','Hipercoagulabilitatea este exclusă la cirotic, sângerarea fiind singura manifestare','Dializa hepatică corectează complet coagulopatia, analog dializei renale'],'AB',42,'Cazuri particulare — Ficat: INR versus transaminaze',
 'Diferențierea INR-ului ca marker de sinteză de markerii non-hemostatici (bilirubină, amoniu, transaminaze) și recunoașterea paradoxului hemoragie/tromboză.',
 ['INR ca monitor al sintezei și inutilitatea bilirubinei/amoniemiei/transaminazelor sunt explicite.','Paradoxul hemoragie plus hipercoagulabilitate este enunțat.','Textul neagă utilitatea transaminazelor/amoniemiei pentru coagulopatie.','Hipercoagulabilitatea este descrisă ca posibilă concomitent.','Dializa hepatică nu figurează ca corecție; paragraful următor privește dializa renală și trombocitele.']],
 8,'Înlocuiește INR-ul cu transaminaze/amoniemie și neagă hipercoagulabilitatea paradoxală a ciroticului.',['Măsurarea INR','amoniemiei']),

q(22,['Complicațiile metabolice ale transfuziei masive și triada letală includ:',
 ['Cele mai frecvente complicații metabolice sunt hipocalcemia, hiperkaliemia, hipokaliemia și hipotermia','Hipotermia este observată la 50% dintre pacienții cu traumatisme la prezentare','Acidoza este definită ca pH <7,35; serul fiziologic are pH 5,5 și contribuie la coagulopatia de diluție','Coagulopatia la traumatizați asociază o creștere de 4 ori a mortalității','Hipotermia lipsește la prezentare, iar cristaloidele au pH 7,40, fără efect asupra coagulării'],'ABCD',44,'Triada letală — Hipotermie 50%, pH 7,35, cristaloid 5,5',
 'Integrarea complicațiilor metabolice, a prevalenței hipotermiei de 50%, a pragului pH <7,35 și a pH-ului 5,5 al serului fiziologic.',
 ['Cele patru tulburări metabolice sunt enumerate.','Cifra de 50% la prezentare este explicită.','pH <7,35 și pH 5,5 al serului fiziologic sunt citate.','Mortalitatea ×4 a coagulopatiei este enunțată.','Hipotermia este frecventă la prezentare; cristaloidele au pH scăzut.']],
 8,'Neagă hipotermia de 50% și atribuie serului fiziologic pH 7,40, două cifre din același paragraf de triadă letală.',['50% dintre pacienţii','pH <7,35']),

q(23,['Leziunea pulmonară acută asociată transfuziei (LPAT) survine:',
 ['La circa 1 din 5.000 de transfuzii, mai frecvent după produse cu plasmă (PPC, trombocite); edemul apare de obicei în 1–2 ore, până la 6 ore, cu formă întârziată până la 72 de ore','La 1 din 50 de unități MER, doar după masă eritrocitară deleucocitată, fără plasmă','Doar după 2–3 săptămâni, identic bolii grefă-contra-gazdă','Prin hemoliză ABO după 50 mL, cu hemoglobinurie, fără edem pulmonar','Prin supraîncărcare volemică cardiogenă izolată, tratată prin creșterea vitezei de transfuzie'],'A',45,'Complicații pulmonare — LPAT 1/5.000 și fereastra 1–6 ore',
 'Fixarea incidenței 1/5.000, a predilecției pentru plasmă și a ferestrelor 1–2 / 6 / 72 de ore, distinct de GVHD, hemoliză și TACO.',
 ['Incidența 1/5.000, predilecția pentru PPC/trombocite și ferestrele temporale sunt explicite.','LPAT este mai frecventă după plasmă, nu după MER deleucocitată izolată.','Debutul la săptămâni descrie GVHD, nu LPAT.','Hemoliza ABO cu hemoglobinurie este reacția hemolitică acută.','Edemul LPAT este noncardiogen; creșterea vitezei agravează, nu tratează.']],
 8,'Permutează 1/5.000 și fereastra 1–6 ore cu GVHD-ul de săptămâni sau cu hemoliza de 50 mL, trei complicații din același capitol.',['5.000 de transfuzii','1-2 ore']),
];
