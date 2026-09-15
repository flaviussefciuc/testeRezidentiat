import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('obstetrica',13,pdfOffset,`obstetrica-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const OBSTETRICA_D=[
q(75,['Teratogenii și producția de β-hCG în sarcina timpurie:',
 ['În primele 2 săptămâni de gestație, teratogenii fie ucid fătul, fie nu au niciun efect','Între 2 și 12 săptămâni, teratogenii pot determina organogeneză anormală','Placenta precoce se formează din celulele trofoblastice și produce β-hCG','Cronologia din figura 13-1 este raportată la vârsta gestațională, nu la cea embrionară','β-hCG este secretat de decidua maternală, nu de trofoblast'],'ABC',295,'Fiziologia sarcinii — Teratogeni și trofoblast',
 'Separarea ferestrelor teratogene (0–2 versus 2–12 săptămâni) de originea trofoblastică a β-hCG.',
 ['Nota precizează că în primele 2 săptămâni teratogenii ucid fătul sau nu au efect.','Organogeneza anormală între 2 și 12 săptămâni este explicită.','Figura leagă formarea placentei precoce de trofoblast și de producția de β-hCG.','Textul precizează că datele figurii sunt în funcție de vârsta embrionară, nu gestațională.','Producția de β-hCG este atribuită celulelor trofoblastice, nu deciduei.']],
 8,'Distractorii inversează vârsta embrionară/gestațională și mută secreția de β-hCG de pe trofoblast.',['organogeneză anormală','trofoblastice']),

q(76,['Creșterea debitului cardiac în sarcină, conform tabelului 13-1, se realizează prin:',
 ['Creșterea volumului-bătaie cu 10-30% și a alurii ventriculare cu 12-18 bpm','Scăderea volumului-bătaie cu 40%, compensată de tahicardie de 40 bpm','Doar prin creșterea hematocritului, fără modificare de volum-bătaie','Scăderea alurii ventriculare la 40-50 bpm, cu volum-bătaie neschimbat','Creșterea tensiunii arteriale sistolice, fără modificare de debit'],'A',296,'Fiziologia sarcinii — Debitul cardiac',
 'Descompunerea creșterii de 40% a debitului în componenții volum-bătaie și alură ventriculară.',
 ['Tabelul atribuie creșterea de 40% a debitului creșterii VB 10-30% și AV 12-18 bpm.','Volumul-bătaie crește, nu scade cu 40%.','Hematocritul scade prin diluție, iar debitul nu depinde de această cale.','Alura crește cu 12-18 bpm, nu scade.','TAS și TAD scad ușor; debitul nu crește prin hipertensiune.']],
 8,'Distractorii inversează direcția VB/AV sau substituie diluția hematocritului mecanismului citat.',['10-30%','12-18 bpm']),

q(77,['Modificările respiratorii normale din sarcină includ:',
 ['Consumul total de oxigen al corpului crește cu 20%','Volumul respirator curent crește cu 40%, odată cu creșterea frecvenței sub acțiunea progesteronului','Uterul ascensionează diafragma și scade volumul rezidual, capacitatea reziduală funcțională și volumul expirator de rezervă','Volumul rezidual și capacitatea reziduală funcțională cresc prin coborârea diafragmei','Progesteronul inhibă centrul respirator și scade volumul curent'],'ABC',296,'Fiziologia sarcinii — Modificări respiratorii',
 'Corelarea creșterii VO2 și a volumului curent cu scăderea volumelor reziduale prin ascensionarea diafragmei.',
 ['Creșterea consumului de O2 cu 20% este din tabel.','Creșterea volumului curent cu 40% sub progesteron este explicită.','Ascensionarea diafragmei cu scăderea VR, CRF și VER este citată.','Volumele reziduale scad, nu cresc.','Progesteronul stimulează centrul respirator, nu îl inhibă.']],
 8,'Distractorii inversează direcția volumelor reziduale și a efectului progesteronului pe centrul respirator.',['creşte cu 20%','Volumul respirator curent']),

q(78,['Modificările tiroidiene fiziologice din sarcină, conform tabelului 13-1:',
 ['Cresc globulina de legare a tiroxinei (TBG) și T4 total, dar T4 liber rămâne neschimbat','TSH scade ușor în sarcina incipientă, rămânând însă în limite normale','T4 liber se dublează, iar TSH este suprimat sub intervalul de referință','TBG scade, ceea ce reduce T4 total sub valorile din afara sarcinii','Hipercoagulabilitatea este cauzată de scăderea TBG'],'AB',296,'Fiziologia sarcinii — Axul tiroidian',
 'Separarea creșterii T4 total mediată de TBG de stabilitatea T4 liber și de TSH-ul încă normal.',
 ['Creșterea TBG și a T4 total cu T4 liber neschimbat este explicită.','Scăderea ușoară a TSH, încă în limite normale, este citată.','T4 liber nu se dublează.','TBG crește, nu scade.','Hipercoagulabilitatea este un rând hematologic separat, nu un efect al TBG.']],
 8,'Distractorii confundă T4 total cu T4 liber și atribuie hipercoagulabilitatea axului tiroidian.',['TBG','TSH scade uşor']),

q(79,['Precizia datării ultrasonografice a sarcinii:',
 ['În săptămânile 7-14, lungimea cranio-caudală estimează vârsta gestațională cu ±3-5 zile','În trimestrul al doilea, circumferința abdominală, diametrul biparietal, lungimea femurului și circumferința craniană dau o precizie de ±1-2 săptămâni','După 20 de săptămâni, înălțimea fundului uterin are precizie de ±3 săptămâni; fibroamele uterine și obezitatea maternă afectează măsurătoarea','Lungimea cranio-caudală din primul trimestru are precizie de ±3 săptămâni, identică fundului uterin','După 20 de săptămâni, precizia fundului uterin este de ±3-5 zile'],'ABC',296,'Evaluarea vârstei gestaționale — Precizia metodelor',
 'Ierarhizarea ferestrelor de precizie: zile în T1, 1–2 săptămâni în T2, ±3 săptămâni după 20 de săptămâni.',
 ['Acuratețea ±3-5 zile la 7-14 săptămâni este explicită.','Cei patru biomarkeri și precizia ±1-2 săptămâni sunt din text.','Precizia ±3 săptămâni a fundului uterin și interferența fibroamelor/obezității sunt citate.','±3 săptămâni aparține fundului uterin după 20 de săptămâni, nu cranio-caudalei.','Fereastra de zile aparține primului trimestru, nu măsurătorii după 20 de săptămâni.']],
 8,'Distractorii permută plafoanele de precizie între trimestrul I și măsurătoarea fundului uterin.',['±3-5 zile','±1-2']),

q(80,['Doza de folat citată pentru prevenția defectelor de tub neural este:',
 ['0,4-0,8 mg/zi, începută cu 4 săptămâni preconcepțional','30 mg/zi, identică suplimentului de fier','1.000-1.300 mg/zi, ca necesarul de calciu','60 g/zi, ca necesarul proteic','12-15 kcal/kg/zi, ca dieta DZG la IMC peste 29'],'A',297,'Îngrijirea prenatală — Folatul',
 'Recunoașterea ferestrei preconcepționale de 4 săptămâni și a intervalului 0,4–0,8 mg/zi.',
 ['Tabelul 13-2 plasează folatul la 0,4-0,8 mg/zi, început cu 4 săptămâni preconcepțional.','30 mg/zi este doza de fier.','1.000-1.300 mg/zi este calciul.','60 g/zi sunt proteinele.','12-15 kcal/kg/zi este ținta calorică DZG la IMC >29.']],
 8,'Toate distractoarele sunt doze reale din tabelele de nutriție/DZG, mutate pe folat.',['0,4-0,8 mg/zi','4 săptămâni']),

q(81,['Limitările alimentare și consecințele creșterii ponderale necorespunzătoare în sarcină:',
 ['Consumul de pește (contaminare cu metil-mercur) și de cofeină (risc de avort spontan) ar trebui limitat','Creșterea ponderală insuficientă poate determina RCIU și naștere prematură, iar cea exagerată diabet gestațional, macrosomie și cezariană','Peștele este încurajat nelimitat, deoarece metil-mercurul nu traversează placenta','Creșterea ponderală insuficientă previne macrosomia și nu are efect asupra prematurității','Cofeina reduce riscul de avort, identic folatului'],'AB',297,'Îngrijirea prenatală — Pește, cofeină, greutate',
 'Asocierea metil-mercurului și a cofeinei cu vectorii RCIU/prematur versus DZG/macrosomie/cezariană.',
 ['Limitarea peștelui (metil-mercur) și a cofeinei (avort) este explicită.','Cele două direcții ale creșterii ponderale necorespunzătoare sunt citate.','Metil-mercurul este motivul limitării, nu un argument pentru consum nelimitat.','Insuficiența ponderală crește RCIU și prematuritatea, nu protejează de macrosomie.','Cofeina crește riscul de avort, nu îl reduce.']],
 8,'Distractorii inversează direcția riscurilor de avort și de creștere ponderală.',['metil-mercur','avort spontan']),

q(82,['La fiecare vizită prenatală, textul precizează evaluarea:',
 ['Greutății materne, pentru a monitoriza creșterea ponderală','Analizelor urinare, pentru a detecta ITU și diabetul zaharat gestațional','Tensiunii arteriale, înălțimii fundului uterin și bătăilor cordului fetal','Manevrelor Leopold, rezervate trimestrului întâi pentru datarea cranio-caudală','Cvadruplului test, repetat lunar până la termen'],'ABC',297,'Îngrijirea prenatală — Conținutul vizitei',
 'Recunoașterea pachetului de monitorizare de rutină, distinct de Leopold (trimestrul III) și de cvadruplu.',
 ['Greutatea maternă este enumerată la fiecare vizită.','Analizele urinare pentru ITU și DZG sunt explicite.','TA, fundul uterin și BCF completează lista.','Leopold se efectuează în trimestrul al treilea, nu în primul.','Cvadruplul este plasat la 16-18 săptămâni, nu lunar.']],
 8,'Distractorii mută Leopold pe trimestrul I și cvadruplul pe un calendar lunar.',['fiecare vizită','Manevrele Leopold']),

q(83,['Nivelul α-fetoproteinei serice materne:',
 ['Testul este valabil numai în fereastra 16-18 săptămâni de gestație','Nivelurile ridicate se asociază cu defecte de tub neural, defecte ale peretelui abdominal și gestații multiple','Nivelurile scăzute se asociază cu risc crescut pentru trisomiile 21 și 18','Nivelurile ridicate definesc trisomia 21, iar cele scăzute defectele de tub neural','Testul rămâne valid și în primul trimestru, identic PAPP-A'],'ABC',297,'Îngrijirea prenatală — AFP serică maternă',
 'Aplicarea ferestrei 16–18 săptămâni și a direcției AFP (crescut = NTD/perete/multipli; scăzut = T21/T18).',
 ['Valabilitatea strictă în fereastra 16-18 săptămâni este din notă.','Asocierile nivelurilor ridicate sunt enumerate.','Asocierile nivelurilor scăzute cu T21 și T18 sunt explicite.','Direcția markerului este inversată.','PAPP-A aparține primului trimestru; AFP-ul citat nu este valid atunci.']],
 8,'Distractorii inversează semnul AFP și mută testul pe fereastra PAPP-A.',['16-18 săptămâni','trisomiile 21 şi 18']),

q(84,['Identificați afirmația corectă referitoare la testul complet integrat:',
 ['Nu este efectuat de rutină, deoarece rezultatele anormale din primul trimestru duc frecvent la abandonarea testelor din trimestrul al doilea și la un test invaziv','Înlocuiește cvadruplul la toate gravidele la vizita inițială','Se efectuează după 18 săptămâni, identic PPSO','Are cea mai mare rată de fals-pozitive dintre testele non-invazive','Este rezervat doar screeningului pentru streptococul de grup B'],'A',297,'Îngrijirea prenatală — Limita testului integrat',
 'Motivul pentru care testul cel mai sensibil nu este de rutină: rezultatul T1 anormal grăbește testarea invazivă.',
 ['Nota explică abandonarea testelor din T2 în favoarea unui test invaziv.','Cvadruplul rămâne screeningul de rutină la 16-18 săptămâni.','PPSO este după 18 săptămâni, pentru sânge ombilical.','Textul îl descrie cu cea mai mică rată de fals-pozitive.','GBS se scriează la 32-37 săptămâni, nu prin test integrat.']],
 8,'Distractorii permută cvadruplul, PPSO și GBS pe testul integrat și inversează rata de fals-pozitive.',['nu este efectuat de','test mai invaziv']),

q(85,['La screeningul cvadruplu și la testul integrat, trisomia 21 se asociază cu:',
 ['PAPP-A scăzută și translucență nuchală crescută în primul trimestru','AFP și estriol (uE3) scăzute în trimestrul al doilea','hCG și inhibina A crescute în trimestrul al doilea','AFP și inhibina A crescute, cu hCG scăzut, identic defectelor de tub neural','PAPP-A crescută și translucență nuchală scăzută'],'ABC',299,'Screening genetic — Patternul trisomiei 21',
 'Citirea rândului Down din tabelul 13-5: PAPP-A↓ TN↑, apoi AFP↓ uE3↓ hCG↑ InhA↑.',
 ['PAPP-A scăzută și TN crescută sunt din coloanele de trimestru I.','AFP și uE3 scăzute sunt din coloanele de trimestru II.','hCG și inhibina A crescute completează patternul Down.','AFP crescută ține de defectele de tub neural, nu de T21.','Direcția PAPP-A/TN este inversată.']],
 8,'Distractorii aplică patternul NTD și inversează săgețile PAPP-A/TN din același tabel.',['PAPP-A','lnhibina A']),

q(86,['Când dieta și efortul nu controlează diabetul zaharat gestațional, textul precizează:',
 ['Insulina se administrează pentru a menține glicemia a jeun sub 90 mg/dL și pe cea postprandială la 1 oră sub 120 mg/dL','Metforminul și glibenclamidul sunt de asemenea utilizați','Ținta a jeun este sub 180 mg/dL, identică pragului de 1 oră al testului de 3 ore','Insulina este contraindicată, fiind înlocuită de warfarină','Cesariana este interzisă la feții macrosomi'],'AB',299,'Complicații medicale — Ținte glicemice în DZG',
 'Aplicarea pragurilor <90 / <120 mg/dL și recunoașterea metforminului și glibenclamidului ca alternative.',
 ['Țintele a jeun <90 și postprandial 1 oră <120 sunt explicite.','Metforminul și glibenclamidul sunt citați.','180 mg/dL este pragul de 1 oră al testului de 3 ore, nu ținta terapeutică.','Warfarina este teratogenă; insulina este tratamentul farmacologic.','Cesariana poate fi indicată tocmai pentru macrosomi.']],
 8,'Distractorii mută pragul diagnostic de 180 mg/dL pe ținta terapeutică și interzic insulina.',['<90 mg/dL','glibenclamid']),

q(87,['Complicațiile fetale ale diabetului zaharat pregestațional includ:',
 ['Defecte cardiace, în special transpoziția marilor vase și tetralogia Fallot','Agenezie de sacru și agenezie renală','Polihidramnios, macrosomie, RCIU și deces fetal intrauterin','Triada hidrocefalie–calcificări–corioretinită, ca în toxoplasmoză','Kernicter prin sulfonamide, ca teratogenul din tabelul 13-7'],'ABC',300,'Complicații medicale — DZ pregestațional fetal',
 'Recunoașterea malformațiilor specifice (TGA, Fallot, agenezie sacrală/renală) distincte de TORCH și de teratogeni.',
 ['Transpoziția marilor vase și tetralogia Fallot sunt enumerate.','Agenezia de sacru și cea renală sunt citate.','Polihidramniosul, macrosomia, RCIU și decesul fetal completează lista.','Triada citată aparține toxoplasmozei congenitale.','Kernicterul este efectul sulfonamidelor, nu al DZ pregestațional.']],
 8,'Distractorii importă triada TORCH și teratogenul sulfonamidic pe lista de malformații diabetice.',['transpoziţia marilor vase','agenezie de sacru']),

q(88,['Criteriile de laborator și tensionale ale preeclampsiei, după 20 de săptămâni:',
 ['Apare la circa 5% din sarcini, ca HTA indusă de sarcină cu proteinurie și/sau leziuni de organ-țintă','Proteinuria este 2+ pe bandeletă, peste 300 mg/24 ore sau raport proteine:creatinină peste 0,3','Tensiunea ≥140/90 mm Hg la o pacientă anterior normotensivă cere două măsurători la cel puțin 4 ore distanță','Formele severe asociază TAS peste 160 sau TAD peste 110, trombocite sub 100.000, creatinină peste 1,1 și creștere de transaminaze','Diagnosticul se pune înainte de 12 săptămâni, identic ferestrei de organogeneză teratogenă'],'ABCD',300,'Complicații medicale — Criteriile preeclampsiei',
 'Asamblarea prevalenței de 5%, a pragurilor de proteinurie și a regulii celor două măsurători la 4 ore.',
 ['Prevalența de 5% după 20 de săptămâni este explicită.','Cele trei definiții ale proteinuriei sunt din laborator.','Regula ≥140/90 cu două măsurători la ≥4 ore este citată.','Pragurile de severitate TAS/TAD, trombocite, creatinină și transaminaze sunt enumerate.','Fereastra de 12 săptămâni aparține organogenezei, nu preeclampsiei (după 20 de săptămâni).']],
 8,'Distractorul mută diagnosticul pe fereastra teratogenă de 12 săptămâni, restul fiind praguri reale alăturate.',['după 20 de săptămâni','>300 mg proteine'],[301]),

q(89,['Eclampsia și sindromul HELLP, dincolo de definițiile deja folosite în bancă:',
 ['HELLP are prognostic fetal prost și mortalitate maternă de 1%','După naștere se continuă MgSO4 și antihipertensivele 48 de ore, deoarece 25% din convulsii apar în primele 24 de ore postpartum','IECA și BRA nu se folosesc pentru stabilizarea tensională, din cauza riscului teratogen','Diazepamul vindecă eclampsia fără naștere, identic epilepsiei preexistente','HELLP are mortalitate maternă de 25%, identică ratei convulsiilor postpartum'],'ABC',301,'Complicații medicale — HELLP și convulsii postpartum',
 'Separarea mortalității HELLP de 1% de fereastra de 48 de ore a MgSO4 și de interdicția IECA/BRA.',
 ['Mortalitatea maternă de 1% și prognosticul fetal prost sunt din notă.','Cei 25% în primele 24 de ore și continuarea 48 de ore sunt explicite.','Interdicția IECA/BRA pentru efect teratogen este citată.','Nașterea rămâne soluția definitivă; diazepamul oprește criza, nu înlocuiește nașterea.','1% este mortalitatea HELLP; 25% este rata convulsiilor precoce postpartum.']],
 8,'Distractorii permută 1% cu 25% și transformă diazepamul în tratament definitiv, ca în epilepsie.',['mortalitate maternă 1%','25% din convulsii']),

q(90,['Greața și vărsăturile din primul trimestru (greața matinală):',
 ['Sunt determinate cel mai probabil de creșterea hCG sau de dezechilibrul dintre progesteron și estrogen','Apar de obicei în primul trimestru și se ameliorează după 16 săptămâni; hidratarea, evitarea meselor copioase și antiacidele postprandial pot ajuta','Sunt identice hyperemesis gravidarum, care afectează majoritatea gravidelor','Se tratează de primă intenție cu fluorochinolone, ca ITU','Impun internare, fluide IV și antiemetice de la primul episod, identic hyperemesis'],'AB',302,'Complicații medicale — Greața matinală',
 'Diferențierea grețurilor fiziologice (hCG, ameliorare după 16 săptămâni) de hyperemesis-ul de 1%.',
 ['Mecanismul hCG sau dezechilibrul progesteron-estrogen este explicit.','Ameliorarea după 16 săptămâni și măsurile igieno-dietetice sunt citate.','Hyperemesis afectează 1% și este o entitate separată.','Fluorochinolonele sunt interzise pentru ITU, nu tratamentul grețurilor.','Internarea cu fluide și antiemetice definește hyperemesis, nu greața obișnuită.']],
 8,'Distractorii aplică tratamentul și prevalența hyperemesis pe greața matinală fiziologică.',['după 16 săptămâni','progesteron şi estrogen']),

q(91,['Medicamentele teratogene din tabelul 13-7, altele decât cele deja folosite în bancă, asociază corect:',
 ['Aminoglicozidele cu leziuni de nerv cranian VIII, anomalii ale scheletului și defecte renale','Sulfonamidele cu kernicter (encefalopatie bilirubinică)','Talidomidele cu anomalii ale membrelor','Litiul cu kernicter, nu cu anomalia Ebstein','Tetraciclina cu anomalia Ebstein, nu cu colorarea dentară'],'ABC',303,'Teratogeni — Aminoglicozide, sulfonamide, talidomidă',
 'Maparea a trei rânduri nefolosite din tabelul 13-7, distincte de litiu, valproat, DES și tetraciclină.',
 ['Leziunile de NC VIII, scheletul și rinichiul sunt ale aminoglicozidelor.','Kernicterul este al sulfonamidelor.','Anomaliile de membre sunt ale talidomidelor.','Litiul asociază anomalia Ebstein, nu kernicterul.','Tetraciclina asociază colorare dentară și anomalii de schelet/membre, nu Ebstein.']],
 8,'Distractorii permută Ebstein și kernicterul între litiu, sulfonamide și tetraciclină.',['nervul cranian','Kernicter']),

q(92,['Tutunul și opioidele în sarcină, conform tabelului 13-6:',
 ['Tutunul asociază la mamă dezlipire de placentă, placenta previa și ruptură prematură de membrane, iar la făt avort, prematuritate, RCIU, deces fetal și infecții respiratorii neonatale','Opioidele asociază la mamă infecție de la ace, sevraj narcotic și PROM, iar la făt prematuritate, RCIU, aspirație de meconiu, infecții neonatale și sevraj (poate fi fatal)','Tutunul produce anomalia Ebstein, ca litiul','Opioidele produc cancer vaginal ulterior, ca dietilstilbestrolul','Marijuana asociază la mamă infarct miocardic și hemoragie subarahnoidiană, ca cocaina'],'AB',303,'Teratogeni — Tutun și opioide',
 'Separarea clusterelor tutun (previa/PROM) și opioid (meconiu/sevraj neonatal) de rândurile litiu, DES și cocaină.',
 ['Rândul tutunului din tabel include previa, PROM și infecțiile respiratorii neonatale.','Rândul opioidelor include meconiul și sevrajul neonatal potențial fatal.','Anomalia Ebstein aparține litiului.','Cancerul vaginal/col ulterior aparține DES.','Infarctul și hemoragia subarahnoidiană aparțin cocainei, nu marijuana (riscuri materne minime).']],
 8,'Distractorii mută Ebstein, DES și clusterul cocainei pe tutun, opioide și marijuana.',['placenta previa','aspiraţie de meconiu']),

q(93,['Infecțiile congenitale din tabelul 13-8, altele decât toxoplasma, rubeola, sifilisul, herpesul, GBS și parvovirusul:',
 ['Rujeola: risc de deces neonatal de 20% la nașterea la termen și 55% la cea prematură, dacă apare transmiterea; imunoglobuline materne în infecție, vaccinul viu fiind contraindicat în sarcină','HIV: transmitere in utero cu risc de 5%; AZT reduce transmiterea verticală; se evită efavirenz, didanozină, stavudină și nevirapină','Virusul varicelozosterian: imunoglobulina pentru varicelă la mama neimunizată în primele 96 de ore de la expunere','Hepatita B: vaccinare maternă; vaccinarea nou-născutului și imunoglobulina la scurt timp după naștere','Gonoreea/chlamydia se tratează cu penicilină după desensibilizare, identic sifilisului'],'ABCD',304,'Infecții congenitale — Rujeolă, HIV, VZV, VHB',
 'Extragerea ratelor de deces din rujeolă, a riscului HIV de 5% și a ferestrei de 96 de ore a Ig VZV.',
 ['Ratele 20%/55% și interdicția vaccinului viu sunt din rândul rujeolei.','Riscul de 5% in utero, AZT și lista de antivirale de evitat sunt explicite.','Fereastra de 96 de ore a imunoglobulinei VZV este citată.','Vaccinul și imunoglobulina neonatală anti-VHB sunt din tabel.','Eritromicina, nu penicilina, este tratamentul gonoreei/chlamydiei.']],
 8,'Distractorul aplică penicilina sifilisului pe gonoree/chlamydia, celelalte fiind rânduri reale nefolosite.',['20% în cazul','primele 96 de ore']),

q(94,['Pragurile β-hCG la care ultrasonografia trebuie să vizualizeze o sarcină sunt:',
 ['Circa 6.500 mUI/mL transabdominal și 1.500 mUI/mL transvaginal','1.500 mUI/mL transabdominal și 6.500 mUI/mL transvaginal','90 mg/dL transabdominal, identic țintei a jeun din DZG','300 mg/24 ore, identic proteinuriei din preeclampsie','35 mm, identic lungimii de col cu risc scăzut de prematuritate'],'A',305,'Sarcina ectopică — Praguri US și β-hCG',
 'Memorarea celor două praguri de vizualizare: 6.500 transabdominal versus 1.500 transvaginal.',
 ['Textul atribuie 6.500 transabdominal și 1.500 transvaginal.','Valorile sunt permutare.','90 mg/dL este ținta glicemică a jeun din DZG.','300 mg/24 ore este pragul de proteinurie.','35 mm este lungimea de col cu risc scăzut.']],
 8,'Distractorii permută cele două praguri US sau importă 90, 300 și 35 din capitolele vecine.',['6.500 mUI/mL','1.500 mUI/mL']),

q(95,['Sarcina oprită în evoluție, conform tabelului 13-9:',
 ['Orificiul cervical este închis, iar conținutul uterin nu este eliminat','Ultrasonografia detectează un făt intrauterin neviabil','Tratamentul este expectativă, misoprostol sau D&C, plus imunoglobulină anti-D','Colul este dilatat, cu făt viabil, identic iminenței de avort','Repausul la pat este suficient, identic amenințării de avort cu făt viabil'],'ABC',306,'Avortul spontan — Sarcina oprită în evoluție',
 'Separarea sarcinii oprite (col închis, făt neviabil, D&C/misoprostol) de amenințare și de iminență.',
 ['Colul închis și conținutul neeliminat sunt din tabel.','Fătul neviabil la US definește entitatea.','Expectativa, misoprostolul, D&C și anti-D sunt tratamentul.','Colul deschis cu făt viabil definește iminența.','Repausul la pat este al amenințării, unde fătul este viabil.']],
 8,'Distractorii aplică tratamentul amenințării și semnele iminenței pe sarcina oprită.',['Sarcină oprită în evoluţie','imunoglobulină anti D']),

q(96,['Restricția de creștere simetrică versus asimetrică:',
 ['Forma simetrică reprezintă circa 20% din cazuri, apare devreme și asociază scădere globală; cauze frecvente sunt infecțiile congenitale, anomaliile cromozomiale și drogurile materne','Forma asimetrică reprezintă circa 80%, apare tardiv, reduce abdomenul păstrând craniul și membrele, prin sarcină multiplă, stare maternă precară sau insuficiență uteroplacentară','Rapoartele circumferință craniană/abdominală și femur/abdomen sunt crescute în forma asimetrică și normale în cea simetrică','Forma simetrică este 80% și apare tardiv prin insuficiență uteroplacentară','Forma asimetrică este 20% și se datorează trisomiilor din primul trimestru'],'ABC',306,'RCIU — Tipuri simetric și asimetric',
 'Aplicarea ratelor 20/80, a momentului (devreme versus tardiv) și a rapoartelor CC/CA și FL/CA.',
 ['Cei 20%, debutul precoce și cauzele infecțioase/cromozomiale/droguri sunt explicite.','Cei 80%, debutul tardiv și cauzele uteroplacentare sunt citate.','Creșterea rapoartelor în forma asimetrică este din pagina de continuare.','80% tardiv este asimetrică, nu simetrică.','20% precoce prin trisomii este simetrică, nu asimetrică.']],
 8,'Distractorii inversează procentele 20/80 și cauzele precoce versus tardive.',['20% dintre cazuri','80% dintre cazuri'],[307]),

q(97,['Oligoamniosul, în funcție de trimestru și de cadranele de lichid:',
 ['În primul trimestru urmează frecvent avortul spontan; în al doilea poate fi determinat de anomalii renale fetale','Indexul sub 5 cm se însoțește de absența oricărui cadran cu înălțime peste 2 cm','În trimestrul al treilea cauza tipică este atrezia esofagiană, ca în hidramnios','Tratamentul sub 32 de săptămâni este amnioreducția plus indometacin, identic hidramniosului','Un buzunar de cel puțin 8 cm confirmă diagnosticul'],'AB',307,'Complicații obstetricale — Oligoamnios pe trimestre',
 'Separarea semnificației pe trimestre și a regulii „niciun cadran >2 cm” de pragurile hidramniosului.',
 ['Avortul din T1 și anomaliile renale din T2 sunt explicite.','Regula fără cadran >2 cm completează ILA <5 cm.','Atrezia esofagiană produce hidramnios prin ingurgitare insuficientă, nu oligoamnios.','Amnioreducția cu indometacin este a hidramniosului <32 săptămâni.','Buzunarul de 8 cm definește hidramniosul, nu oligoamniosul.']],
 8,'Distractorii aplică mecanismul și pragurile hidramniosului pe oligoamnios.',['avortul spontan','2 cm înălţime']),

q(98,['Tratamentul hidramniosului în funcție de vârsta gestațională:',
 ['Sarcinile sub 32 de săptămâni pot primi amnioreducție și indometacin în doze crescute treptat','Sarcinile peste 32 de săptămâni pot fi supuse doar amnioreducției','Un „buzunar” de cel puțin 8 cm susține diagnosticul, alături de ILA peste 25 cm','Indometacinul este rezerva după 34 de săptămâni, identic tocolizei fără beneficiu','Amnioreducția evită recumularea lichidului, care nu se mai reface'],'ABC',307,'Complicații obstetricale — Hidramnios: tratament',
 'Maparea pragului de 32 de săptămâni (indometacin versus doar amnioreducție) și a buzunarului de 8 cm.',
 ['Amnioreducția plus indometacin sub 32 de săptămâni este explicită.','Peste 32 de săptămâni rămâne doar amnioreducția.','Buzunarul de cel puțin 8 cm este criteriul US alternativ.','După 34 de săptămâni textul neagă beneficiul tocolizei în travaliul prematur, nu mută indometacinul pe hidramnios.','Nota precizează că lichidul se reacumulează de cele mai multe ori după amnioreducție.']],
 8,'Distractorii mută indometacinul după 34 de săptămâni și neagă recumularea explicită a lichidului.',['<32 săptămâni','cel puţin 8 cm']),

q(99,['Diagnosticul de laborator al PROM și conduita după 34 de săptămâni:',
 ['Examinarea microscopică arată „semnul ferigii” dacă lichidul amniotic este prezent','Hârtia de nitrazină virează în albastru în prezența lichidului amniotic','După săptămâna 34 se administrează antibiotic și se induce nașterea','Raportul lecitină:sfingomielină peste 2, cu fosfatidilglicerol prezent, sugerează maturitate pulmonară','Tactul vaginal repetat este metoda de elecție pentru a confirma PROM'],'ABCD',308,'Complicații obstetricale — PROM: ferigă și nitrazină',
 'Asamblarea ferigii, a nitrazinei albastre, a inducției după 34 de săptămâni și a pragului L:S >2.',
 ['Semnul ferigii este explicit.','Virajul nitrazinei în albastru este citat.','Conduita după 34 de săptămâni (antibiotic plus inducție) este din text.','L:S >2 cu fosfatidilglicerol definește maturitatea pulmonară.','Nota interzice tactul vaginal în PROM, din cauza riscului de a introduce germeni.']],
 8,'Distractorul încalcă interdicția tactului vaginal, restul fiind teste și praguri reale de pe aceeași pagină.',['semnul ferigii','L:S >2']),

q(100,['Nașterea în placenta previa, în funcție de tip:',
 ['Nașterea spontană poate fi realizată doar în cazul placentei jos inserate; celelalte tipuri se nasc prin cezariană','Placenta previa completă se naște vaginal, deoarece nu atinge orificiul intern','Tocoliza este interzisă la feții prematuri cu sângerare minimă','Tactul vaginal este manevra de primă intenție în sângerarea nedureroasă din trimestrul III','Imunoglobulina anti-D este inutilă la mamele Rh-negative cu sângerare'],'A',309,'Placenta previa — Calea nașterii',
 'Recunoașterea excepției jos-inserate, singura care permite nașterea vaginală.',
 ['Textul rezervă nașterea spontană placentei jos inserate; restul merg la cezariană.','Completa acoperă orificiul intern și se naște prin cezariană.','Tocoliza poate amâna nașterea la prematuri cu sângerare ușoară.','Tactul vaginal nu se practică până la excluderea previei.','Anti-D se administrează mamelor Rh-negative la orice sângerare din trimestrul III.']],
 8,'Distractorii inversează calea nașterii completei și interzic tocoliza, tactul evitat și anti-D.',['jos inserată','operaţie cezariană']),

q(101,['Dezlipirea de placentă și sindromul transfuzor-transfuzat:',
 ['Moartea fetală in utero survine în 20% din cazurile de dezlipire; ultrasonografia vizualizează separarea doar inconsecvent','Dacă cordoanele ombilicale ale feților sunt conectate, poate apărea sindromul transfuzor-transfuzat, cu hipoperfuzia unuia dintre feți','Sângerarea din dezlipire este nedureroasă, identică previei','Moartea fetală în dezlipire este rară, sub 1%, identică decesului matern din previa','Sindromul transfuzor-transfuzat apare doar la gemenii dizigoți cu cavități amniotice separate'],'AB',310,'Hemoragia din T3 — Abruptio și TTTS',
 'Aplicarea ratei de 20% de deces fetal din abruptio și a condiției de cordoane conectate pentru TTTS.',
 ['Cei 20% și vizualizarea inconsecventă sunt explicite.','Conectarea cordoanelor și hipoperfuzia sunt din notă.','Sângerarea din abruptio este dureroasă; cea din previa este nedureroasă.','1% este decesul matern din previa, nu decesul fetal din abruptio.','TTTS ține de sarcina monozigotică cu cordoane conectate, nu de dizigoții cu cavități separate.']],
 8,'Distractorii permută caracterul dureros, rata de 1% a previei și dizigocitatea pe abruptio/TTTS.',['20% din cazuri','transfuzor-transfuzat']),

q(102,['Componentele ultrasonografice ale profilului biofizic, fiecare cotată cu 2 sau 0 puncte:',
 ['Indicele de lichid amniotic între 5 și 23 cm','Cel puțin un episod de respirații ritmice de 20 de secunde într-un interval de 30 de minute','Cel puțin două episoade de mișcări fetale discrete în 30 de minute și un episod de extensie cu revenire în flexie','ILA peste 25 cm, pragul hidramniosului, pentru 2 puncte','Zece minute de respirații continue, fără cotă pentru tonus'],'ABC',311,'Travaliu — Criteriile de 2 puncte ale BPP',
 'Memorarea pragurilor ILA 5–23 cm, a respirației de 20 de secunde și a celor două mișcări plus tonus.',
 ['ILA 5-23 cm primește 2 puncte.','Episodul respirator de 20 de secunde în 30 de minute este explicit.','Cele două mișcări și extensia cu revenire în flexie completează cotarea.','ILA >25 cm este hidramniosul, nu cota de 2 puncte.','Textul cere 20 de secunde, nu 10 minute, și cotează și tonusul.']],
 8,'Distractorii înlocuiesc ILA 5–23 cm cu hidramniosul și 20 de secunde cu 10 minute.',['5 şi 23 cm','20 secunde']),

q(103,['În faza activă a primului stadiu al travaliului, ritmul de dilatație citat este:',
 ['Circa 1,2 cm/oră la nulipare și 1,5 cm/oră la multipare, de la 6 cm până la circa 10 cm','Circa 3 cm/oră la nulipare, de la 0 la 3 cm, identic fazei pasive','30 de minute la nulipare pentru tot stadiul 1, identic delivrenței','Sub 3 ore la nulipare pentru stadiul 2, fără analgezie epidurală','1 oră pentru stadiul 4, identic observării postpartum'],'A',313,'Travaliu — Ritmul fazei active',
 'Aplicarea pragului de 6 cm și a vitezelor 1,2 versus 1,5 cm/oră din tabelul stadiilor.',
 ['Tabelul 13-11 plasează faza activă de la 6 la 10 cm, cu 1,2 cm/h la nulipare și 1,5 cm/h la multipare.','Faza pasivă merge până la 6 cm, nu cu 3 cm/oră de la 0.','30 de minute este durata stadiului 3 (delivrența).','Sub 3 ore (nulipare) este stadiul 2, nu faza activă.','1 oră este stadiul 4 postpartum.']],
 8,'Distractorii sunt duratele reale ale stadiilor 2–4, mutate pe ritmul de dilatație al fazei active.',['1,2 cm/h','1,5 cm/h']),

q(104,['Agenții uterotonici din hemoragia postpartum, dincolo de oxitocină și masaj:',
 ['Metilergometrina este contraindicată în hipertensiune arterială','Carboprostul este contraindicat în astmul bronșic','Resturile placentare sunt cauza celor mai abundente pierderi; D&C le poate elimina','Pragul de hemoragie este 200 mL după naștere vaginală, identic ILA din oligoamnios','Carboprostul este de elecție în astm, iar metilergometrina în criza hipertensivă'],'ABC',315,'Hemoragia postpartum — Uterotonice',
 'Maparea contraindicațiilor (metilergometrină–HTA, carboprost–astm) și a resturilor placentare ca sursă a celor mai mari pierderi.',
 ['Contraindicația în HTA este explicită.','Contraindicația în astm este citată.','Nota atribuie resturilor cele mai abundente pierderi; D&C este tratamentul.','Pragurile sunt >500 mL vaginal și >1.000 mL după cezariană, nu 200 mL.','Direcția contraindicațiilor este inversată.']],
 8,'Distractorii inversează contraindicațiile și înlocuiesc pragul de 500/1.000 mL cu 200 mL.',['metilergometrina','carboprostul']),
];
