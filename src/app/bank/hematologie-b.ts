import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=336?p-275:p-289;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hematologie',16,pdfOffset,`hematologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HEMATOLOGIE_B=[
q(35,['Anemia, în definiția și clasificarea introductivă după VEM:',
 ['Este definită de scăderea hemoglobinei sub nivelul de referință pentru vârsta și sexul individului','Anemiile sunt descrise obișnuit ca hipocrome microcitare (VEM scăzut), normocrome normocitare (VEM normal) sau macrocitare (VEM crescut)','Unele tipuri de anemie pot fi încadrate în mai multe categorii, deși există o justificare biologică a clasificării','Anemia se definește prin hematocrit crescut, independent de vârstă și sex','Toate anemiile se încadrează într-o singură categorie VEM, fără suprapuneri'],'ABC',327,'Anemia: introducere — Definiție și clasificare',
 'Aplicarea definiției raportate la vârstă/sex și a celor trei categorii VEM, cu admiterea suprapunerilor.',
 ['Definiția prin hemoglobină sub referința de vârstă și sex este cea de deschidere.','Cele trei categorii după VEM sunt enumerate explicit.','Posibilitatea încadrării în mai multe categorii este precizată.','Hematocritul crescut descrie policitemia, nu anemia.','Textul admite încadrări multiple.']],
 8,'Distractorii înlocuiesc hemoglobina scăzută cu hematocrit crescut și neagă suprapunerile pe care textul le admite.',['vârsta şi sexul','VEM-ul'],[328]),

q(36,['Durata de viață a eritrocitului matur, în Figura 16.5, este de aproximativ:',
 ['120 de zile','40 de zile','7 zile','365 de zile','12 ore'],'A',327,'Producția și distrucția eritrocitelor — Figura 16.5',
 'Reținerea duratei de 120 de zile a eritrocitului matur.',
 ['120 de zile este cifra din figură.','40 de zile este prea scurtă pentru hematia normală.','7 zile este apropiat reticulocitului, nu eritrocitului matur.','Un an depășește durata citată.','12 ore nu este durata de viață a hematiei.']],
 8,'Distractorii reciclează intervale hematologice plauzibile (reticulocit, săptămâni) în locul celor 120 de zile din figură.',['120 zile','Eritrocit matur']),

q(37,['Semnele specifice observate în anumite tipuri de anemie includ:',
 ['Koilonichia — unghii concave, în anemia feriprivă de lungă durată','Icterul — în anemia hemolitică; deformări osoase — în talasemia majoră; ulcere la membrele inferioare — în siclemie','Paloarea, tahicardia, suflul sistolic și insuficiența cardiacă ca semne generale','Koilonichia este semnul siclemiei, icterul fiind rezervat carenței marțiale','Deformările osoase definesc anemia feriprivă, nu talasemia'],'ABC',327,'Anemia — Semne',
 'Asocierea koilonichie–feriprivă, icter–hemoliză, oase–talasemie și ulcere–siclemie, distinct de semnele generale.',
 ['Koilonichia feriprivă este primul semn specific citat.','Cele trei perechi hemoliză/talasemie/siclemie completează lista.','Paloarea, tahicardia, suflul și ICC sunt semnele generale enumerate.','Perechile sunt inversate.','Deformările osoase aparțin talasemiei majore.']],
 8,'Distractorii permută semnele specifice (koilonichie, oase, ulcere) între feriprivă, talasemie și siclemie.',['koilonichia','talasemia majoră']),

q(38,['O hemoglobină scăzută se evaluează, potrivit capitolului, împreună cu:',
 ['Indicii eritrocitari, numărul leucocitelor și al trombocitelor','Numărul reticulocitelor, care indică activitatea măduvei','Frotiul de sânge periferic, morfologia anormală putând indica diagnosticul','Doar VEM-ul izolat, celelalte linii fiind superflue','Reticulocitele, care măsoară depozitele de fier, nu activitatea medulară'],'ABC',328,'Investigații — Sângele periferic',
 'Reținerea pachetului minim (indici, leucocite, trombocite, reticulocite, frotiu), nu a unui indice izolat.',
 ['Indicii și celelalte două linii sunt cerute explicit.','Reticulocitele ca marker de activitate medulară sunt enunțate.','Frotiul pentru morfologie completează lista.','Textul cere pachetul, nu VEM-ul singur.','Reticulocitele indică activitatea măduvei, nu depozitele de fier.']],
 8,'Distractorii reduc pachetul la VEM izolat și mută reticulocitul pe teritoriul feritinei.',['indicii eritrocitari','numărul reticulocitelor']),

q(39,['Dismorfismul eritrocitar pe frotiu, în exemplul din capitol, poate apărea:',
 ['Când se observă două populații de celule roșii','De exemplu în „deficiențe duble”, cum este deficitul combinat de fier și folat în boala celiacă, sau după tratament cu preparate hematinice la anemici','Doar în policitemia vera, ca semn patognomonic','Când există o singură populație uniform microcitară','Frotiul normal exclude orice deficit combinat'],'AB',328,'Frotiul periferic — Dismorfism eritrocitar',
 'Recunoașterea celor două populații ca marker al deficitului combinat fier–folat sau al răspunsului la hematinice.',
 ['Definiția prin două populații este cea din text.','Celiacă și tratamentul hematinic sunt exemplele date.','Policitemia vera nu este exemplul de dismorfism citat.','O singură populație nu este dismorfism.','Dismorfismul tocmai semnalează deficite combinate.']],
 8,'Distractorii mută dismorfismul pe policitemie și neagă exemplul fier–folat din boala celiacă.',['dismorfism eritrocitar','deficienţe duble']),

q(40,['Cauzele anemiei aplastice, conform Cadranului 16.7, includ:',
 ['Forma moștenită (anemia Fanconi) și forma idiopatică dobândită (circa 67% din cazuri)','Produse chimice (benzen, toluen, adeziv) și radiații ionizante','Medicamente: chimioterapice, cloramfenicol, săruri de aur, penicilamină, fenitoină, carbamazepină, carbimazol, azatioprină','Infecții virale (hepatită, EBV, HIV, eritrovirus) și tuberculoza','Deficitul de fier ca mecanism primar al pancitopeniei hipocelulare'],'ABCD',336,'Cadranul 16.7 — Cauzele anemiei aplastice',
 'Reținerea predominanței idiopatice (67%) și a listelor toxică/medicamentoasă/infecțioasă, distinct de carența marțială.',
 ['Fanconi și 67% idiopatic sunt rândurile primare.','Benzenul/toluenul/adezivul și iradierea sunt secundare chimice/fizice.','Lista de medicamente este cea din cadran.','Virusurile citate și tuberculoza încheie etiologiile infecțioase.','Carența marțială produce microcitoză, nu aplazie hipocelulară.']],
 8,'Distractorul reintroduce carența marțială, în timp ce cadranul listează Fanconi, idiopatic 67% și toxice.',['67% din cazuri','cloramfenicol']),

q(41,['Anemia hemolitică dobândită se clasifică etiologic în:',
 ['Cauze imune: autoanticorpi, anticorpi induși de medicamente și aloanticorpi','Cauze non-imune: defecte membranare dobândite (HPN), factori mecanici (proteze, microangiopatie) și patologii sistemice (renale, hepatice)','Cauze variate: toxine (arsenic, Clostridium perfringens), malarie, hipersplenism, arsuri extinse și hemoliză oxidativă (dapsonă, sulfasalazină, clorat de sodiu)','Doar deficitul de B12, ca unică cauză dobândită de hemoliză','Hemoliza dobândită exclude cauzele mecanice și toxice'],'ABC',351,'Anemia hemolitică dobândită — Etiologie',
 'Separarea celor trei pachete (imun, non-imun, variat toxic/infecțios) de cauzele megaloblastice.',
 ['Cele trei categorii imune sunt lista de deschidere.','HPN, protezele/microangiopatia și bolile de sistem sunt non-imunele citate.','Toxinele, malaria, hipersplenismul, arsurile și Heinz-urile medicamentoase sunt cauzele variate.','B12 produce megaloblastoză, nu este clasificată aici ca hemoliză dobândită.','Cauzele mecanice și toxice sunt explicit incluse.']],
 8,'Distractorii reintroduc B12 și exclud mecanicul/toxicul, cele două pachete din aceeași listă.',['autoanticorpi','Clostridium perfringens']),

q(42,['Testele antiglobulinice (Coombs), în Figura 16.26, se deosebesc prin:',
 ['Testul direct evidențiază eritrocitele pacientului sensibilizate in vivo prin IgG (AHAI, reacții transfuzionale, BHNN, hemoliză post-medicament)','Testul indirect evidențiază eritrocitele normale sensibilizate in vitro de aloanticorpi iregulari din ser, util la depistarea anticorpilor neregulați și la proba de compatibilitate','Testul direct folosește eritrocite normale incubate cu serul pacientului, iar indirectul detectează sensibilizarea in vivo','Coombs indirect este rezervat doar policitemiei, nu probei de compatibilitate','Anti-globulina umană nu produce aglutinare vizibilă'],'AB',351,'Figura 16.26 — Testele antiglobulinice (Coombs)',
 'Contrastarea sensibilizării in vivo (direct) de cea in vitro pe eritrocite normale (indirect, compatibilitate).',
 ['Lista AHAI/transfuzie/BHNN/medicament este a testului direct.','Aloanticorpii in vitro și proba de compatibilitate definesc indirectul.','Sensurile in vivo/in vitro sunt inversate.','Indirectul este tocmai al compatibilității.','Anti-globulina formează punți și aglutinare vizibilă.']],
 8,'Distractorii inversează in vivo versus in vitro, distincția centrală a figurii Coombs.',['Testul antiglobulinic direct','proba de compatibilitate']),

q(43,['Distrugerea imună a eritrocitelor, după izotip, se caracterizează prin:',
 ['IgG, de cele mai multe ori fără activarea complementului, produce hemoliză extravasculară: fagocitoză splenică prin receptori Fc sau sferocite după fagocitoză parțială','IgM care activează parțial complementul determină aderarea la receptorii C3b ai macrofagelor, mai ales hepatice, mecanism ineficient; celulele sunt eliberate cu C3d la suprafață','IgM fără afinitate pentru complement sunt rare și au efect scăzut sau deloc asupra supraviețuirii eritrocitelor','IgG produce hemoliză intravasculară hepatică, splina neparticipând','IgM fără complement este mecanismul cel mai eficient de hemoliză splenică'],'ABC',352,'Distrugerea imună a eritrocitelor',
 'Separarea căii Fc splenice a IgG de aderarea C3b hepatică ineficientă a IgM, cu C3d rezidual.',
 ['Fagocitoza splenică Fc și sferocitele sunt ale IgG.','Calea C3b hepatică ineficientă și C3d sunt ale IgM parțial activator.','IgM fără complement are efect scăzut.','IgG este extravascular splenic, nu intravascular hepatic.','IgM fără complement este tocmai calea ineficientă.']],
 8,'Distractorii mută IgG pe calea hepatică intravasculară și transformă IgM fără complement în mecanismul cel mai eficient.',['receptorii Fc','C3d']),

q(44,['Boala cronică a hemaglutinării la rece (CHAD) se caracterizează prin:',
 ['Apariție de obicei la vârstnici, cu debut gradual, prin aglutinine IgM monoclonale la rece','Acrocianoză similară Raynaud după expunere la frig, prin autoaglutinare','Titrul aglutininelor la rece peste 1:512 și Coombs pozitiv doar pentru C3d; specificitate de obicei pentru antigenul I, ocazional i','Predominanța IgG la 37°C, cu Coombs pozitiv doar pentru IgG, ca în forma la cald','Răspuns constant la prednison 1 mg/kg, splenectomia fiind de primă intenție'],'ABC',353,'Boala cronică a hemaglutinării la rece',
 'Recunoașterea fenotipului vârstnic monoclonal IgM, a titrului >1:512, a C3d și a antigenului I, distinct de forma la cald.',
 ['Vârsta, debutul gradual și IgM monoclonal sunt din deschidere.','Acrocianoza de tip Raynaud după frig este tabloul clinic.','1:512, C3d și antigenul I (sau i) sunt investigațiile.','IgG la 37°C este forma la cald.','Steroizii și splenectomia sunt descrise ca de obicei ineficiente.']],
 8,'Distractorii aplică izotipul, Coombs-ul și prednisonul formei la cald asupra CHAD, unde textul cere IgM/C3d și eșecul steroizilor.',['1:512','antigenul I']),

q(45,['Tratamentul AHAI la rece, potrivit capitolului, include:',
 ['Evitarea expunerii la frig','Steroizii, alchilanții și splenectomia sunt de obicei ineficiente','Rituximabul (anti-CD20) s-a dovedit eficient în unele cazuri','Dacă este nevoie de transfuzie, pacientul trebuie să se afle într-un spațiu cald; compatibilitatea poate fi dificilă din cauza aglutininelor','Splenectomia și prednisonul sunt de primă intenție, ca în forma la cald'],'ABCD',353,'AHAI la rece — Tratament',
 'Contrastarea evită-frigul / rituximab / transfuzie la cald de ineficiența steroizilor, alchilanților și splenectomiei.',
 ['Evitarea frigului este prima măsură.','Ineficiența steroizi/alchilanți/splenectomie este explicită.','Rituximabul este excepția citată.','Spațiul cald și dificultatea compatibilității completează conduita transfuzională.','Aceste măsuri sunt ale formei la cald, nu ale celei la rece.']],
 8,'Distractorul transplantează prednisonul și splenectomia formei la cald asupra formei la rece, unde textul le numește ineficiente.',['expunerea la frig','Rituximab']),

q(46,['Hemoglobinuria paroxistică la rece (PCH) se caracterizează prin:',
 ['Afecțiune rară asociată infecțiilor comune ale copilului (pojar, oreion, varicelă)','Anticorpi IgG bifazici, cu afinitate pentru complement și specificitate pentru antigenul P','Testul Donath–Landsteiner: incubare la 4°C apoi încălzire la 37°C; hemoliza este autolimitantă','Anticorpi IgM monoclonali anti-I, ca în CHAD a vârstnicului','Splenectomia de primă intenție, hemoliza fiind cronică și progresivă'],'ABC',353,'Hemoglobinuria paroxistică la rece',
 'Separarea PCH (IgG bifazic anti-P, Donath–Landsteiner, copil post-infecțios) de CHAD (IgM anti-I).',
 ['Contextul pediatric post-pojar/oreion/varicelă este etiologia citată.','IgG bifazic, complementul și antigenul P sunt serologia.','Protocolul 4°C→37°C poartă numele Donath–Landsteiner.','IgM anti-I este al CHAD, nu al PCH.','Hemoliza este autolimitantă; splenectomia nu este conduita descrisă.']],
 8,'Distractorii aplică serologia CHAD (IgM anti-I) și splenectomia asupra PCH pediatrică Donath–Landsteiner.',['Donath-Landsteiner','antigenul eritrocitar P']),

q(47,['Identificați afirmația corectă referitoare la anemia hemolitică imună iatrogenă:',
 ['Testarea uzuală a anticorpilor eritrocitari cu afinitate pentru medicament nu se face, iar reintroducerea medicației pentru a proba cauzalitatea nu se recomandă; diagnosticul cere asociere temporală, DAT pozitiv și remisiune după oprire','Reintroducerea de rutină a medicamentului este necesară pentru a confirma diagnosticul','Testul antiglobulinic direct este superfluu, asocierea temporală fiind suficientă','Remisiunea după oprire infirmă cauzalitatea, motiv pentru care medicamentul se reia imediat','Anticorpii față de medicament se dozează uzual înaintea oricărui DAT'],'A',353,'Anemia hemolitică imună iatrogenă',
 'Recunoașterea interdicției de reintroducere și a absenței testării uzuale a anticorpilor medicamentoși, plus triada temporalitate–DAT–remisiune.',
 ['Cele două interdicții și triada diagnostică sunt din paragraf.','Reintroducerea nu se recomandă.','DAT pozitiv face parte din confirmare.','Remisiunea după oprire susține, nu infirmă, cauzalitatea.','Testarea anticorpilor medicamentoși nu se face uzual.']],
 8,'Distractorii transformă cele două interdicții (reintroducere, testare uzuală) în criterii obligatorii de diagnostic.',['asociere temporală','întreruperea tratamentului']),

q(48,['Printre cauzele variate de hemoliză dobândită non-autoimună se numără:',
 ['Arsurile extinse, care denaturează proteinele membranare și scurtează supraviețuirea eritrocitară','Dapsona și sulfasalazina, care produc hemoliză oxidativă cu corpi Heinz','Cloratul de sodiu (erbicid), care poate cauza hemoliză oxidativă severă urmată de insuficiență renală acută','Koilonichia feriprivă ca mecanism de hemoliză intravasculară','Deficitul de folat ca unică toxină membranară'],'ABC',351,'Cauze variate de hemoliză dobândită',
 'Recunoașterea arsurilor, a Heinz-urilor (dapsonă/sulfasalazină) și a cloratului cu IRA, distinct de carențele megaloblastice/marțiale.',
 ['Denaturarea membranară din arsuri este exemplul dat.','Dapsona/sulfasalazina și corpii Heinz sunt perechea citată.','Cloratul urmat de IRA încheie lista chimică.','Koilonichia este semn de feriprivă, nu mecanism hemolitic.','Folatul nu este toxină membranară în această listă.']],
 8,'Distractorii reintroduc semne de carență (koilonichie, folat) într-o listă de hemolize toxice/oxidative.',['corpi Heinz','cloratul de sodiu']),

q(49,['Eculizumabul în hemoglobinuria paroxistică nocturnă:',
 ['Este un anticorp monoclonal recombinant care împiedică clivarea C5, prevenind formarea complexului de atac al membranei','Se administrează intravenos la fiecare 7 zile în primele 5 săptămâni, apoi la fiecare două săptămâni','Reduce hemoliza intravasculară, hemoglobinuria și necesarul transfuzional și scade riscul trombotic','Vaccinarea anti-Neisseria meningitidis se recomandă cu două săptămâni înaintea inițierii, infecția meningococică fiind riscul blocării complete a complementului','Reactivează măduva aplazică, înlocuind transplantul la vârstnici'],'ABCD',355,'HPN — Tratament cu eculizumab',
 'Integrarea țintei C5, a schemei 7 zile/5 săptămâni apoi la 14 zile, a beneficiului trombotic și a vaccinării meningococice cu 2 săptămâni înainte.',
 ['Blocarea C5 și a MAC este mecanismul.','Schema 7 zile apoi 14 zile este cea din text.','Reducerea hemolizei/transfuziei și a trombozei este beneficiul citat.','Vaccinul meningococic cu 2 săptămâni înainte este precauția.','Textul precizează că eculizumabul nu determină reactivarea medulară.']],
 8,'Distractorul atribuie eculizumabului reactivarea medulară, pe care textul o neagă explicit, păstrând totodată schema C5 și vaccinul.',['clivarea C5','N. meningitidis']),
];
