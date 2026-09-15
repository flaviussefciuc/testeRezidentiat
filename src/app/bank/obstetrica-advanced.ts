import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('obstetrica',13,pdfOffset,`obstetrica-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const OBSTETRICA_ADVANCED=[
q(1,['Vârsta gestațională și data nașterii:',
 ['Vârsta gestațională este cu 2 săptămâni mai mare decât vârsta embrionară','Regula lui Naegele estimează nașterea prin DUM + 7 zile − 3 luni + 1 an','Vârsta gestațională se calculează de la momentul fertilizării','Dezvoltarea de la fertilizare până la maturitatea fetală durează aproximativ 42 de săptămâni','Regula lui Naegele adaugă 14 zile și 3 luni la data ultimei menstruații'],'AB',295,'Fiziologia sarcinii — Vârsta gestațională',
 'Aplicarea diferenței de 14 zile dintre vârsta gestațională și cea embrionară și a regulii lui Naegele.',
 ['Textul precizează că vârsta gestațională este cu 2 săptămâni mai mare decât cea embrionară.','Formula DUM + 7 zile − 3 luni + 1 an este explicită.','Calculul pornește de la data ultimei menstruații, nu de la fertilizare.','Durata citată până la maturitatea fetală este de aproximativ 38 de săptămâni de la fertilizare.','Formula este inversată față de regula lui Naegele.']],
 8,'Distractorii mută originea calculului pe fertilizare și alterează atât durata, cât și semnele din formula lui Naegele.',['Regula lui Naegele','2 săptămâni mai mare']),

q(2,['Modificările cardiovasculare și respiratorii normale din sarcină includ:',
 ['Debitul cardiac crește cu 40%','Tensiunea arterială sistolică și diastolică scad ușor','PCO2 scade până la aproximativ 30 mm Hg, realizând o alcaloză respiratorie cronică','Hematocritul crește, deoarece volumul sanguin scade','TSH-ul liber și T4 liber cresc marcat peste intervalul de referință'],'ABC',296,'Fiziologia sarcinii — Modificări materne',
 'Recunoașterea hipervolemiei, a scăderii tensionale fiziologice și a alcalozei respiratorii de sarcină.',
 ['Creșterea debitului cardiac cu 40% este din Tabelul 13-1.','Scăderea ușoară a TAS și TAD este explicită.','PCO2 ~30 mm Hg cu alcaloză respiratorie cronică este citată.','Hematocritul scade prin diluție, deși producția de eritrocite crește.','T4 total crește prin TBG, dar T4 liber este neschimbat, iar TSH scade doar ușor, rămânând în limite normale.']],
 8,'Distractorii inversează diluția hematocritului și confundă T4 total cu T4 liber.',['Debitul cardiac creşte cu 40%','alcaloză respiratorie']),

q(3,['Aportul caloric zilnic recomandat în timpul sarcinii este de aproximativ:',
 ['2.500 kcal','1.500 kcal','3.500 kcal','2.000 kcal fără supliment de folat','4.000 kcal la toate gravidele, independent de IMC'],'A',296,'Îngrijirea prenatală — Nutriția',
 'Memorarea țintei calorice citate pentru sarcină.',
 ['Nota „De reținut” indică aproximativ 2.500 kcal/zi.','1.500 kcal este insuficient față de ținta din text.','3.500 kcal depășește valoarea citată și ar crește riscul de macrosomie.','Textul cere și supliment de folat, nu doar un aport caloric redus.','Creșterea ponderală se nuanțează după IMC, nu prin 4.000 kcal uniforme.']],
 8,'Distractorii sunt ținte calorice plauzibile, deplasate față de valoarea unică din notă.',['2.500 kcal','Cerinţele nutriţionale']),

q(4,['Suplimentele și markerii de screening prenatal:',
 ['Necesarul de folat este 0,4–0,8 mg/zi, început cu 4 săptămâni preconcepțional, pentru prevenirea defectelor de tub neural','Necesarul de fier este 30 mg/zi','α-fetoproteina serică maternă este validă în fereastra 16–18 săptămâni; valorile crescute asociază defecte de tub neural, iar cele scăzute trisomiile 21 și 18','Folatul se începe abia după săptămâna 20, deoarece nu influențează închiderea tubului neural','Valorile crescute de α-fetoproteină asociază trisomia 21, iar valorile scăzute defectele de tub neural'],'ABC',297,'Îngrijirea prenatală — Nutriție și screening',
 'Corelarea dozelor de folat și fier cu interpretarea α-fetoproteinei materne.',
 ['Doza și momentul preconcepțional al folatului sunt din Tabelul 13-2.','Cei 30 mg/zi de fier (creștere cu 100%) sunt expliciți.','Fereastra 16–18 săptămâni și semnul AFP crescut/scăzut sunt din nota „De reținut”.','Folatul trebuie început preconcepțional, nu după săptămâna 20.','Direcția AFP este inversată: crescut = defecte de tub neural; scăzut = trisomii.']],
 8,'Distractorii inversează atât momentul folatului, cât și semnificația AFP crescut versus scăzut.',['0,4-0,8 mg/zi','16-18 săptămâni'],[296]),

q(5,['Diabetul zaharat gestațional:',
 ['Este o intoleranță la glucoză cu debut după 24 de săptămâni de gestație','Screening-ul se face de obicei între 24 și 28 de săptămâni, mai devreme dacă există factori de risc','Apare cel mai frecvent în primul trimestru și exclude diabetul preexistent','Insulina se indică pentru a menține glicemia a jeun sub 90 mg/dL când dieta eșuează','Diagnosticul se pune doar pe hemoglobina glicată, fără test de toleranță'],'ABD',299,'Complicații medicale — Diabetul gestațional',
 'Plasarea debutului după 24 de săptămâni și a țintelor de insulină, distinct de diabetul pregestational.',
 ['Definiția cu debut după 24 de săptămâni este explicită.','Intervalul 24–28 de săptămâni, cu screening mai precoce la risc, este citat.','Textul plasează DZG în trimestrele doi sau trei; debutul precoce sugerează diabet non-gestațional.','Ținta a jeun <90 mg/dL (și postprandial <120 mg/dL la 1 oră) este explicită.','Diagnosticul folosește glicemia a jeun >126 mg/dL sau testul de toleranță, nu HbA1c ca test unic.']],
 8,'Distractorii mută debutul în trimestrul I, unde textul suspicionează tocmai diabetul preexistent.',['după 24 de săptămâni','24-28 săptămâni']),

q(6,['Preeclampsia:',
 ['Se dezvoltă după 20 de săptămâni de gestație, cu hipertensiune și proteinurie sau leziuni de organ țintă','Criteriul tensional cere valori ≥140/90 mm Hg la două măsurători la cel puțin 4 ore distanță','Nașterea este singurul remediu definitiv','Inhibitorii enzimei de conversie sunt antihipertensivele de primă linie în sarcină','Proteinuria diagnostică este sub 30 mg/24 ore'],'ABC',301,'Complicații medicale — Preeclampsia',
 'Aplicarea pragului de 20 de săptămâni, a criteriului 140/90 și a nașterii ca tratament definitiv.',
 ['Definiția după 20 de săptămâni este pe pagina anterioară, iar nota reafirmă nașterea ca remediu.','Cele două măsurători la ≥4 ore sunt explicite.','Nota „De reținut” identifică nașterea ca singurul remediu definitiv.','IECA și BRA sunt teratogene și se evită în sarcină.','Pragul de proteinurie citat este ≥300 mg/24 ore sau raport proteine:creatinină >0,3.']],
 8,'Distractorii recomandă exact clasa teratogenă interzisă și subestimează pragul de proteinurie.',['Singurul remediu definitiv','IECA'],[300]),

q(7,['Eclampsia și sindromul HELLP:',
 ['Cefaleea, scotoamele și durerea din etajul abdominal superior preced frecvent convulsiile','Sulfatul de magneziu se continuă 48 de ore după naștere, deoarece 25% din convulsii apar în primele 24 de ore postpartum','HELLP asociază hemoliză, enzime hepatice crescute și trombocitopenie','Diazepamul este ineficace asupra convulsiilor din sarcină','HELLP are mortalitate maternă neglijabilă și prognostic fetal excelent'],'ABC',301,'Complicații medicale — Eclampsia',
 'Recunoașterea pródromului eclamptic, a ferestrei postpartum de convulsii și a triadei HELLP.',
 ['Prodromul cefalee–scotoame–durere abdominală superioară este explicit.','Continuarea MgSO4 48 de ore și cifra de 25% sunt citate.','Triada hemoliză–enzime hepatice–trombocitopenie este redată în notă.','Diazepamul poate opri convulsiile, cu eficiență de 80%.','HELLP are prognostic fetal prost și mortalitate maternă de 1%.']],
 8,'Distractorii neagă rolul diazepamului, citat cu eficiență 80%, și minimizează gravitatea HELLP.',['25% din convulsii','Low Platelets']),

q(8,['Sarcina ectopică:',
 ['Implantarea este cel mai frecvent în ampula trompei uterine','Forma neruptă sub 6 săptămâni poate fi tratată cu metotrexat','Localizarea cea mai frecventă este ovariană, nu tubară','β-hCG-ul din sarcina intrauterină se înjumătățește la fiecare 48 de ore','Metotrexatul este tratamentul de elecție al formei rupte cu hipotensiune'],'AB',305,'Complicații obstetricale — Sarcina ectopică',
 'Corelarea sediului ampullar cu indicația de metotrexat versus chirurgie de urgență.',
 ['Ampula (95%) este sediul cel mai frecvent.','Metotrexatul este rezervat formei nerupte sub 6 săptămâni.','Ovarul, colul și cavitatea abdominală sunt localizări posibile, dar nu cele mai frecvente.','În sarcina intrauterine, β-hCG se dublează la 48 de ore, nu se înjumătățește.','Forma ruptă instabilă necesită chirurgie de urgență, nu metotrexat.']],
 8,'Distractorii inversează cinetică β-hCG și aplică metotrexatul tocmai formei rupte.',['ampula trompei uterine','metotrexat']),

q(9,['Indexul lichidului amniotic care definește oligoamniosul este:',
 ['Sub 5 cm','Peste 25 cm','Între 8 și 18 cm','Peste 8 cm într-un singur buzunar, cu index total normal','Sub 15 cm, dar cu un cadran de 4 cm'],'A',307,'Complicații obstetricale — Oligoamnios',
 'Memorarea pragurilor ILA care separă oligoamniosul de hidramnios.',
 ['Oligoamniosul este definit prin ILA <5 cm, fără cadran peste 2 cm.','ILA >25 cm definește hidramniosul.','Intervalul 8–18 cm nu este pragul de oligoamnios.','Buzunarul de cel puțin 8 cm aparține criteriilor de hidramnios.','Pragul citat este <5 cm, nu <15 cm.']],
 8,'Distractorii sunt pragurile reale de hidramnios sau valori intermediare, ușor de inversat.',['indexul lichidului amniotic <5 cm','>25 cm']),

q(10,['Ruptura prematură de membrane:',
 ['Examinarea microscopică arată „semnul ferigii” dacă este lichid amniotic','Hârtia de nitrazină virează în albastru în prezența lichidului amniotic','Raportul lecitină/sfingomielină peste 2, cu fosfatidilglicerol prezent, sugerează maturitate pulmonară','Tactul vaginal se repetă frecvent pentru a urmări dilatația','După 34 de săptămâni se evită antibioticele și se prelungește sarcina până la 40 de săptămâni'],'ABC',308,'Complicații obstetricale — PROM',
 'Recunoașterea testelor de confirmare a lichidului amniotic și a pragului de maturitate pulmonară.',
 ['Semnul ferigii este explicit.','Virajul nitrazinei în albastru este citat.','L:S >2 cu FG prezent sugerează maturitate pulmonară.','Tactul vaginal se evită din cauza riscului de a introduce germeni.','După 34 de săptămâni se administrează antibiotice și se induce nașterea.']],
 8,'Distractorii recomandă tactul vaginal, pe care textul îl interzice, și amână inducția după 34 de săptămâni.',['semnul ferigii','L:S >2']),

q(11,['Sângerarea vaginală din trimestrul al treilea:',
 ['Placenta praevia produce sângerare nedureroasă','Abruptio placentae produce sângerare însoțită de durere și tonus uterin crescut','Nu se efectuează tact vaginal până când nu este exclusă placenta praevia','Placenta praevia produce sângerare dureroasă, iar abruptio este nedureroasă','Nașterea vaginală este calea de elecție în placenta praevia centrală'],'ABC',309,'Complicații obstetricale — Placenta praevia și abruptio',
 'Diferențierea sângerării nedureroase de cea dureroasă și evitarea tactului vaginal.',
 ['Sângerarea nedureroasă din trimestrul III definește placenta praevia.','Durerea, hipertonia și hipotensiunea definesc abruptio.','Nota interzice examinarea vaginală până la excluderea praeviei.','Direcția durere/fără durere este inversată.','Nașterea în praevia se face prin cezariană; vaginal doar în forma jos inserată.']],
 8,'Distractorii inversează caracterul dureros al sângerării și recomandă naștere vaginală în praevia centrală.',['sângerare vaginală nedureroasă','dezlipirea prematură'],[310]),

q(12,['Decelerațiile frecvenței cardiace fetale:',
 ['Cele precoce coincid cu contracția și reflectă compresia capului, fără a fi semn de suferință','Cele tardive încep după contracție și sugerează insuficiență uteroplacentară','Cele variabile au debut, durată și amplitudine variabile și reflectă compresia cordonului','Cele precoce impun naștere imediată, fiind semn de hipoxie','Cele tardive se tratează doar prin schimbarea poziției mamei, ca în compresia de cordon'],'ABC',311,'Travaliu — Monitorizarea fetală',
 'Asocierea fiecărui tip de decelerație cu mecanismul și cu urgența obstetricală.',
 ['Tabelul 13-10 leagă decelerațiile precoce de compresia capului, fără suferință.','Tardivele reflectă insuficiență uteroplacentară și pot indica hipoxie.','Variabilele corespund compresiei de cordon.','Nașterea imediată este rezervată tardivelor recurente sau hipoxiei, nu preocelor.','Schimbarea poziției este tratamentul variabilelor, nu al tardivelor.']],
 8,'Distractorii aplică urgența tardivelor asupra preocelor și tratamentul variabilelor asupra tardivelor.',['Compresia capului fetal','Compresia cordonului ombilical']),

q(13,['Hemoragia postpartum:',
 ['Pragul anormal este peste 500 mL/24 ore după naștere vaginală sau peste 1.000 mL/24 ore după cezariană','Cauza cea mai frecventă este atonia uterină','Masajul uterin și oxitocina cresc tonusul; metilergometrina este contraindicată în hipertensiune, iar carboprostul în astm','Resturile placentare se evacuează prin dilatare și chiuretaj','Tratamentul de primă intenție este histerectomia, înaintea uterotonicelor'],'ABCD',315,'Lauzia — Hemoragia postpartum',
 'Aplicarea pragurilor de sânge, a atoniei ca etiologie principală și a contraindicațiilor uterotonicelor.',
 ['Cei 500 mL, respectiv 1.000 mL, sunt pragurile din text.','Atonia este cauza majorității cazurilor.','Oxitocina, metilergometrina (evitată în HTA) și carboprostul (evitat în astm) sunt citați.','D&C elimină resturile placentare.','Histerectomia este rezervată cazurilor severe sau refractare, după uterotonice.']],
 8,'Distractorul sare la histerectomie, omițând masajul și uterotonicele care sunt prima linie.',['>500 mL/24 ore','atoniei uterine']),

q(14,['Mola hidatiformă:',
 ['Forma completă are genotip 46XX sau 46XY, cu ambele seturi cromozomiale paterne','Forma incompletă este 69XXY, 69XXX sau 69XYY și poate asocia un făt anormal','Ecografia arată aspect de „furtună de zăpadă”','β-hCG este mai mare decât cel așteptat pentru vârsta gestațională','Diagnosticul de elecție este metotrexatul, fără evacuare uterină'],'ABCD',316,'Boala trofoblastică — Mola hidatiformă',
 'Diferențierea molei complete de cea incompletă și recunoașterea imaginii de furtună de zăpadă.',
 ['Cariotipul 46XX/46XY paternal definește mola completă.','Triploidia 69 cu făt anormal definește forma incompletă.','Aspectul de furtună de zăpadă este explicit.','β-hCG disproporționat de mare este citat.','Tratamentul este D&C, cu supravegherea β-hCG, nu metotrexat ca primă linie a molei.']],
 8,'Distractorul aplică chimioterapia coriocarcinomului asupra molei, a cărei evacuare este D&C.',['furtună de zăpadă','46 XX']),
];
