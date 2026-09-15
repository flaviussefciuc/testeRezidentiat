import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('obstetrica',13,pdfOffset,`obstetrica-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const OBSTETRICA_C=[
q(45,['Analizele de screening prenatal, conform tabelului 13-3:',
 ['Vizita inițială include HLG, grup sangvin și Rh, citologie Pap, screening pentru gonoree/chlamydia, analize urinare, RPR sau VDRL, titrarea anticorpilor pentru rubeolă și varicelă, AgHBs și screening HIV cu acordul matern','Cvadruplul test se efectuează la 16-18 săptămâni, pentru trisomiile 21 și 18 și defectele de tub neural','Datarea ultrasonografică a sarcinii și evaluarea anomaliilor fetale majore sunt programate la 18-20 săptămâni','Screening-ul pentru streptococul de grup B se face la vizita inițială, odată cu AgHBs','Testul de încărcare orală cu glucoză, cu glicemie la 1 oră, se programează la 16-18 săptămâni'],'ABC',298,'Îngrijirea prenatală — Calendarul analizelor',
 'Plasarea cvadruplului, a ecografiei morfologice și a screeningului GBS pe ferestrele gestaționale din tabel.',
 ['Tabelul 13-3 enumeră aceste analize la vizita inițială.','Cvadruplul este plasat la 16-18 săptămâni.','Ecografia de datare și anomalii majore este la 18-20 săptămâni.','Screening-ul GBS este programat la 32-37 săptămâni.','Testul de încărcare la 1 oră este la 24-28 săptămâni.']],
 8,'Distractorii mută GBS pe vizita inițială și testul de glucoză pe fereastra cvadruplului.',['16-18 săptămâni','streptococul de grup B']),

q(46,['Identificați afirmația corectă referitoare la amniocenteză:',
 ['Constă în aspirație transabdominală a lichidului amniotic după 16 săptămâni, pentru α-fetoproteină amniotică și cariotip, cu risc suplimentar de 0,5% de avort spontan','Se efectuează la 9-12 săptămâni, prin aspirație transcervicală a vilozităților','Este testul non-invaziv cu cea mai mică rată de rezultate fals-pozitive','Colectează sânge din vena ombilicală după 18 săptămâni','Înlocuiește cvadruplul ca screening de rutină la vizita inițială'],'A',298,'Îngrijirea prenatală — Amniocenteza',
 'Recunoașterea ferestrei după 16 săptămâni, a țintelor (AFP, cariotip) și a riscului suplimentar de 0,5%.',
 ['Descrierea, fereastra, țintele și riscul de 0,5% sunt din tabelul 13-4.','Fereastra 9-12 săptămâni definește biopsia de vilozități coriale.','Cea mai mică rată de fals-pozitive aparține testului complet integrat.','Sângele ombilical după 18 săptămâni definește PPSO.','Cvadruplul rămâne screeningul de rutină la 16-18 săptămâni.']],
 8,'Toate distractoarele sunt rânduri reale din același tabel 13-4, permutate pe amniocenteză.',['după 16 săptămâni','0,5% de avort']),

q(47,['Biopsia de vilozități coriale:',
 ['Constă în aspirație transabdominală sau transcervicală a țesutului corionic vilozitar la 9-12 săptămâni de gestație','Este indicată pentru detectarea precoce a anomaliilor cromozomiale la paciente cu risc crescut (vârstă înaintată, naștere anterioară de feți cu defecte genetice)','Măsoară α-fetoproteina amniotică după 16 săptămâni','Colectează sânge din vena ombilicală pentru izoimunizare Rh','Se efectuează de rutină la toate gravidele la 24-28 de săptămâni'],'AB',298,'Îngrijirea prenatală — Biopsia de vilozități coriale',
 'Separarea ferestrei 9–12 săptămâni a CVS de amniocenteză și de PPSO.',
 ['Aspirația transabdominală sau transcervicală la 9-12 săptămâni este explicită.','Indicația de detecție precoce la risc crescut este din tabel.','AFP amniotică după 16 săptămâni aparține amniocentezei.','Sângele ombilical definește PPSO.','24-28 de săptămâni este fereastra testului de glucoză.']],
 8,'Distractorii aplică ferestrele amniocentezei, PPSO și screeningului DZG asupra CVS.',['9-12 săptămâni','vilozităţi coriale']),

q(48,['Testul complet integrat și prelevarea percutană de sânge ombilical:',
 ['Testul integrat combină măsurarea ultrasonografică a translucenței nuchale și PAPP-A în primul trimestru cu screening-ul cvadruplu în al doilea trimestru','Este descris ca având cea mai mică rată a rezultatelor fals-pozitive dintre testele non-invazive','PPSO colectează sânge din vena ombilicală după 18 săptămâni, pentru defecte cromozomiale, infecție fetală și izoimunizare Rh','PAPP-A se dozează în trimestrul al doilea, odată cu inhibina A','PPSO se efectuează la 9-12 săptămâni, în locul biopsiei de vilozități'],'ABC',298,'Îngrijirea prenatală — Test integrat și PPSO',
 'Corelarea componenților testului integrat cu fereastra PPSO după 18 săptămâni.',
 ['Componenții T1 (TN, PAPP-A) și T2 (cvadruplu) sunt din tabel.','Cea mai mică rată de fals-pozitive pentru testele non-invazive este explicită.','Fereastra după 18 săptămâni și țintele PPSO sunt citate.','PAPP-A aparține primului trimestru.','9-12 săptămâni este fereastra CVS, nu a PPSO.']],
 8,'Distractorii inversează trimestrul PAPP-A și substituie PPSO pe fereastra CVS.',['Test complet integrat','după 18 săptămâni']),

q(49,['Creșterea ponderală și nutrienții citați în sarcină includ:',
 ['Necesarul de calciu este 1.000-1.300 mg/zi, cu o creștere de 50%','Necesarul de proteine este 60 g/zi, cu o creștere de 30%','Ținta ponderală este 12-18 kg la IMC sub 19,8','Ținta ponderală este 6-11 kg la IMC peste 26','Ținta ponderală este 12-18 kg la IMC între 19,8 și 26'],'ABCD',297,'Îngrijirea prenatală — Nutriție și creștere ponderală',
 'Aplicarea dozelor de calciu și proteine și a țintelor ponderale stratificate după IMC.',
 ['Doza și creșterea de 50% a calciului sunt din tabelul 13-2.','Cei 60 g/zi (+30%) de proteine sunt expliciți.','Intervalul 12-18 kg pentru IMC <19,8 este citat.','Intervalul 6-11 kg pentru IMC >26 este citat.','Pentru IMC 19,8-26 ținta este 11-15 kg, nu 12-18 kg.']],
 8,'Distractorul mută intervalul 12-18 kg pe categoria IMC 19,8-26, unde textul dă 11-15 kg.',['1.000-1.300 mg/zi','60 g/zi']),

q(50,['Conform notei, grupul cu risc de nutriție precară în sarcină este reprezentat de:',
 ['Adolescente, femei cu statut socioeconomic scăzut, diete restrictive, subponderale, fumătoare, alcoolice sau consumatoare de droguri','Doar gravidele cu IMC peste 26, fără alți factori','Gravidele care au făcut deja screening cvadruplu normal','Pacientele cu prezentație craniană după 37 de săptămâni','Femeile care alăptează, independent de aportul din sarcină'],'A',297,'Îngrijirea prenatală — Riscul nutrițional',
 'Identificarea grupurilor de risc nutrițional enumerate în nota „De reținut”.',
 ['Nota enumeră exact aceste categorii.','IMC >26 are altă țintă ponderală, nu definește singur riscul de nutriție precară.','Cvadruplul normal nu exclude riscul nutrițional.','Prezentația nu este criteriu nutrițional.','Alăptarea este discutată la lăuzie, nu în această notă.']],
 8,'Distractorii substituie grupurile din notă cu entități obstetricale reale, dar din alte secțiuni.',['nutriţie precară','adolescente']),

q(51,['În diabetul zaharat gestațional, țintele calorice citate după IMC sunt:',
 ['40 kcal/kg/zi la IMC sub 22','30 kcal/kg/zi la IMC între 22 și 27','12-15 kcal/kg/zi la IMC peste 29','40 kcal/kg/zi la IMC peste 29, identic femeilor subponderale','Dieta se concentrează într-o singură masă vespertină, fără gustări'],'ABC',299,'Complicații medicale — Dieta în DZG',
 'Memorarea treptelor calorice pe IMC, distinct de inversarea treptei pentru obezitate.',
 ['Cei 40 kcal/kg/zi la IMC <22 sunt expliciți.','Cei 30 kcal/kg/zi la IMC 22-27 sunt citați.','Intervalul 12-15 kcal/kg/zi la IMC >29 este din text.','La IMC >29 țintele sunt 12-15, nu 40 kcal/kg/zi.','Textul cere trei mese și două-patru gustări, cu nutrienți distribuiți uniform.']],
 8,'Distractorii aplică treapta calorică a IMC scăzut asupra obezității și comprimă mesele.',['40 kcal/kg/zi','12-15 kcal/kg/zi']),

q(52,['Hyperemesis gravidarum:',
 ['Constă în greață și vărsături severe, care afectează 1% dintre gravide','Poate fi complicat de dezechilibre hidro-electrolitice, scădere în greutate și cetonurie','Se tratează prin spitalizare, administrare de fluide și antiemetice','Este identic grețurilor matinale care se ameliorează invariabil până la săptămâna 8','Se tratează de primă intenție cu fluorochinolone, ca ITU din sarcină'],'ABC',302,'Complicații medicale — Hyperemesis gravidarum',
 'Recunoașterea pragului de 1%, a complicațiilor metabolice și a tratamentului spitalicesc.',
 ['Definiția și cifra de 1% sunt din nota „De reținut”.','Cele trei complicații sunt enumerate.','Spitalizarea, fluidele și antiemeticele sunt tratamentul citat.','Greața matinală obișnuită se ameliorează de obicei până la trimestrul II, nu este hyperemesis.','Fluorochinolonele sunt interzise în ITU din sarcină, nu tratează hyperemesis.']],
 8,'Distractorii confundă hyperemesis-ul cu greața fiziologică și importă un antibiotic teratogen.',['Hyperemesis gravidarum','cetonurie']),

q(53,['Warfarina și fluorochinolonele în sarcină:',
 ['Warfarina are efecte teratogene și nu trebuie utilizată în timpul sarcinii, dar prezintă siguranță în timpul alăptării','Fluorochinolonele nu trebuie utilizate pentru tratamentul ITU din cauza efectelor teratogene','Warfarina înlocuiește heparina ca anticoagulant de primă intenție în trimestrul I','Fluorochinolonele sunt antibioticele de elecție ale ITU din sarcină, înaintea amoxicilinei','Warfarina este contraindicată și la alăptare, identic trimestrului I'],'AB',302,'Complicații medicale — Teratogeni medicamentoși',
 'Aplicarea interdicției warfarinei în sarcină (cu siguranță la alăptare) și a fluorochinolonelor în ITU.',
 ['Nota despre warfarină este explicită, inclusiv siguranța la alăptare.','Nota despre fluorochinolone în ITU este explicită.','În sarcină se folosește heparina/HGMM, nu warfarina.','ITU se tratează cu amoxicilină, nitrofurantoină sau cefalexin.','Textul precizează siguranța warfarinei la alăptare.']],
 8,'Distractorii inversează locul warfarinei (sarcină versus alăptare) și pun fluorochinolona ca tratament de elecție.',['Warfarina','Fluorochinolonele']),

q(54,['Tratamentul astmului preexistent în sarcină:',
 ['Forma ușor intermitentă se tratează cu β-agoniști cu durată scurtă (de exemplu albuterol) la nevoie','Forma ușor persistentă asociază un corticosteroid inhalator în doze mici','Forma moderat persistentă se tratează cu corticosteroid inhalator în doză medie sau cu doze mici plus un β-agonist cu durată lungă (de exemplu salmeterol)','Forma sever persistentă se tratează cu corticosteroid inhalator în doze mari plus un β-agonist cu durată lungă','Forma severă se tratează doar cu teofilină orală, fără corticoid inhalator'],'ABCD',302,'Complicații medicale — Astmul matern',
 'Ierarhizarea treptelor de tratament ale astmului, de la intermitent la sever persistent.',
 ['Albuterolul la nevoie pentru forma intermitentă este explicit.','Corticoidul inhalator în doze mici este treapta ușor persistentă.','Doza medie sau asocierea cu salmeterol definește forma moderată.','Dozele mari plus LABA definesc forma severă.','Teofilina nu este treapta citată pentru forma severă.']],
 8,'Distractorul înlocuiește treapta severă (CSI doze mari + LABA) cu un bronhodilatator necitate.',['albuterol','salmeterol']),

q(55,['Tromboza venoasă profundă maternă:',
 ['Riscul crește prin stază venoasă și prin creșterea relativă a factorilor de coagulare circulanți','La diagnostic se folosește heparină IV pentru a menține PTI la dublul valorii normale, sau HGMM cu antifactor Xa 0,5-1,2 UI/mL la 4 ore după injectare','Anticoagulantele se continuă postpartum 6 săptămâni (warfarină sau enoxaparină)','Warfarina este anticoagulantul de primă intenție încă din trimestrul I','Diagnosticul se bazează doar pe edemul gambier, fără ultrasonografie Doppler'],'ABC',302,'Complicații medicale — TVP maternă',
 'Corelarea hipercoagulabilității de sarcină cu țintele de heparină/HGMM și cu durata postpartum de 6 săptămâni.',
 ['Mecanismul stază plus factori de coagulare este explicit.','PTT dublu sau anti-Xa 0,5-1,2 UI/mL sunt țintele citate.','Cele 6 săptămâni postpartum cu warfarină sau enoxaparină sunt din text.','Warfarina este teratogenă în sarcină; heparina/HGMM sunt de primă intenție.','Edemul este frecvent și fără TVP; US și Doppler sunt mijloacele sigure.']],
 8,'Distractorii reintroduc warfarina în trimestrul I și transformă edemul fiziologic în criteriu diagnostic unic.',['enoxaparină','6 săptămâni']),

q(56,['Tratamentul citat al infecțiilor urinare materne necomplicate este:',
 ['Amoxicilină, nitrofurantoină sau cefalexin, 3 până la 7 zile','Fluorochinolone 14 zile, ca în pielonefrita netratată a adultului non-gravid','Warfarină orală, pentru a preveni TVP asociată','Doar hidratare, fără antibiotic, deoarece ITU este fiziologică','Metotrexat în doză unică, ca în ectopica neruptă'],'A',302,'Complicații medicale — ITU maternă',
 'Identificarea celor trei antibiotice permise și a duratei de 3–7 zile.',
 ['Cele trei antibiotice și durata 3-7 zile sunt explicite.','Fluorochinolonele sunt interzise ca teratogene.','Warfarina nu tratează ITU.','ITU poate fi simptomatică sau asimptomatică, dar se tratează.','Metotrexatul aparține ectopicei, nu ITU.']],
 8,'Distractorii sunt scheme reale din același capitol (fluorochinolone interzise, warfarină, metotrexat), aplicate greșit ITU.',['nitrofurantoină','cefalexin']),

q(57,['Consumul de cocaină în sarcină asociază, conform tabelului 13-6:',
 ['La mamă: aritmie, infarct miocardic, hemoragie subarahnoidiană, convulsii, accident vascular cerebral și dezlipirea prematură a placentei','La făt: dezlipire de placentă, RCIU, prematuritate, anomalii faciale, dezvoltare intelectuală întârziată și deces fetal','Sindrom alcoolic fetal, cu retard mental și neuropatie senzorială-motorie','Cancer vaginal și de col ulterior, ca dietilstilbestrolul','Anomalia Ebstein, ca litiul'],'AB',303,'Teratogeni — Cocaina',
 'Separarea complicațiilor materno-fetale ale cocainei de cele ale etanolului, DES și litiului.',
 ['Lista maternă din tabel include evenimentele vasculare și abruptio.','Lista fetală include abruptio, RCIU, prematuritate, anomalii faciale și deces.','Sindromul alcoolic fetal aparține etanolului.','Adenocarcinomul vaginal/cervical ulterior aparține DES.','Anomalia Ebstein aparține litiului.']],
 8,'Fiecare distractor este un risc teratogen real din tabelele 13-6 și 13-7, atribuit cocainei.',['Cocaină','Dezlipirea prematură']),

q(58,['Sindromul alcoolic fetal, citat la consumul de etanol, include:',
 ['Retard mental, RCIU, neuropatie senzorială și motorie și anomalii faciale, plus avort spontan și deces fetal intrauterin','Anomalia Ebstein și diabet insipid nefrogen','Kernicter prin sulfonamide','Modificări de culoare dentară, ca tetraciclina','Anomalii de cartilaj, ca fluorochinolonele'],'A',303,'Teratogeni — Etanolul',
 'Identificarea constellationii sindromului alcoolic fetal, distinct de alte malformații tabelate.',
 ['Tabelul 13-6 descrie exact această constelație la etanol.','Ebstein și diabetul insipid nefrogen țin de litiu.','Kernicterul este al sulfonamidelor.','Colorarea dentară este a tetraciclinei.','Anomaliile de cartilaj sunt ale fluorochinolonelor.']],
 8,'Distractorii sunt malformații reale din tabelul 13-7, ușor de mutat pe etanol.',['Sindromul alcoolic fetal','anomalii faciale']),

q(59,['Medicamentele teratogene din tabelul 13-7 asociază corect:',
 ['Litiul cu anomalia Ebstein','Acidul valproic cu defecte de tub neural în circa 1% din sarcini','Dietilstilbestrolul cu cancer vaginal și de col uterin ulterior (adenocarcinom)','Tetraciclina cu anomalii ale scheletului, ale membrelor și modificări de culoare dentară','IECA cu anomalia Ebstein, nu cu anomalii renale'],'ABCD',303,'Teratogeni — Medicamente uzuale',
 'Asocierea fiecărui medicament cu malformația sa specifică din tabel.',
 ['Anomalia Ebstein este rândul litiului.','Defectele de tub neural (~1%) sunt ale valproatului.','Adenocarcinomul vaginal/cervical ulterior este al DES.','Schelet, membre și dinți sunt ale tetraciclinei.','IECA asociază anomalii renale și scăderea osificării craniului, nu Ebstein.']],
 8,'Distractorul permută Ebstein de pe litiu pe IECA, unde tabelul pune rinichiul și craniul.',['Anomalia Ebstein','Acid valproic']),

q(60,['Toxoplasmoza congenitală:',
 ['Poate produce hidrocefalie, calcificări intracraniene, corioretinită, microcefalie, avort spontan și convulsii','Diagnosticul poate folosi PCR din lichidul amniotic pentru Toxoplasma gondii sau screening-ul anticorpilor serici','Tratamentul include pirimetamină, sulfadiazină și acid folinic; mama evită grădinăritul, carnea nepreparată, laptele nepasteurizat și litierele de pisici','Nașterea prin cezariană pentru leziuni active este tratamentul de primă intenție, ca în herpes','Screening-ul antigenului după 34 de săptămâni definește diagnosticul, ca la streptococul de grup B'],'ABC',304,'Infecții congenitale — Toxoplasmoza',
 'Recunoașterea tetradei clasice, a PCR amniotic și a triadei terapeutice pirimetamină–sulfadiazină–folinic.',
 ['Efectele fetale din tabel includ hidrocefalia, calcificările și corioretinita.','PCR amniotic și serologia sunt mijloacele citate.','Schema și măsurile de evitare sunt explicite.','Cezariana pentru leziuni active aparține herpesului.','Antigenul după 34 de săptămâni aparține streptococului de grup B.']],
 8,'Distractorii importă tratamentul HSV și fereastra GBS asupra toxoplasmozei.',['corioretinită','Pirimetamină']),

q(61,['În rubeola congenitală, textul precizează că:',
 ['Mama trebuie imunizată înainte de a încerca să rămână însărcinată; nu există tratament dacă infecția se dezvoltă în sarcină, iar imunoglobulina rubeolei nu are beneficiu dovedit','Penicilina după desensibilizare este tratamentul de elecție, ca în sifilis','AZT reduce semnificativ transmiterea verticală, ca în HIV','Ganciclovirul reduce efectele la nou-născut, ca în CMV','β-lactaminele IV în travaliu sunt profilaxia, ca la streptococul de grup B'],'A',304,'Infecții congenitale — Rubeola',
 'Identificarea strategiei preconcepționale și a absenței tratamentului/Ig în rubeola de sarcină.',
 ['Imunizarea preconcepțională, absența tratamentului și lipsa beneficiului Ig sunt din tabel.','Penicilina este tratamentul sifilisului.','AZT aparține HIV.','Ganciclovirul aparține CMV neonatal.','β-lactaminele IV în travaliu aparțin GBS.']],
 8,'Fiecare distractor este tratamentul real al altei infecții din același tabel 13-8.',['Niciun tratament','imunoglobulinei rubeolei']),

q(62,['Selectați enunțurile adevărate despre infecțiile congenitale din tabelul 13-8:',
 ['Sifilisul se diagnostichează prenatal precoce prin RPR sau VDRL, cu confirmare FTA-ABS, și se tratează cu penicilină (desensibilizare dacă alergie)','Herpesul simplex impune naștere prin cezariană în cazul leziunilor active sau al unui focar primar; aciclovirul poate fi benefic la nou-născuți','Streptococul de grup B se depistează prin antigen după 34 de săptămâni; în travaliu se folosesc β-lactamine sau clindamicină IV','Parvovirusul B19 se tratează cu penicilină, identic sifilisului','Toxoplasmoza se previne prin vaccin viu atenuat administrat în trimestrul I'],'ABC',304,'Infecții congenitale — Sifilis, herpes, GBS',
 'Corelarea diagnosticului și tratamentului sifilisului, HSV și GBS, fără a muta schemele între rânduri.',
 ['RPR/VDRL, FTA-ABS și penicilina sunt rândul sifilisului.','Cezariana pentru leziuni active și aciclovirul neonatal sunt ale HSV.','Antigenul după 34 de săptămâni și β-lactaminele/clindamicina sunt ale GBS.','Parvovirusul se monitorizează prin PPSO și transfuzie, nu cu penicilină.','Vaccinurile vii (rubeolă, varicelă) sunt contraindicate în sarcină; toxoplasma nu are un astfel de vaccin citat.']],
 8,'Distractorii aplică penicilina sifilisului pe parvovirus și vaccinul viu pe toxoplasmă.',['FTA-ABS','34 de săptămâni']),

q(63,['Parvovirusul B19 în sarcină:',
 ['Poate produce scăderea producției eritrocitare, anemie hemolitică și hidrops fetal','Monitorizarea hemoglobinei fetale prin PPSO și transfuzia intrauterină sunt indicate în anemia severă','Determină triadă hidrocefalie–calcificări–corioretinită, ca toxoplasma','Se tratează cu pirimetamină, sulfadiazină și acid folinic','Screening-ul AgHBs matern este testul diagnostic de elecție'],'AB',304,'Infecții congenitale — Parvovirus B19',
 'Recunoașterea efectului hematologic (hidrops) și a rolului PPSO/transfuziei, distinct de toxoplasmă și VHB.',
 ['Cele trei efecte hematologice sunt din tabel.','PPSO și transfuzia intrauterină sunt tratamentul citat.','Triada hidrocefalie–calcificări–corioretinită este a toxoplasmozei.','Pirimetamina–sulfadiazina–folinicul tratează toxoplasmoza.','AgHBs este screeningul hepatitei B.']],
 8,'Distractorii mută triada și schema toxoplasmozei, plus AgHBs, pe parvovirus.',['hidrops fetal','PPSO']),

q(64,['Lungimea colului uterin măsurată ecografic se asociază cu:',
 ['Risc scăzut de naștere înainte de termen dacă este peste 35 mm și risc crescut de naștere prematură dacă este sub 15 mm','Diagnosticul de travaliu instalat, înlocuind contracțiile','Indicație absolută de cezariană, independent de dilatație','Maturitate pulmonară fetală, identic raportului L:S peste 2','Prezentație craniană confirmată, în locul manevrelor Leopold'],'A',308,'Complicații obstetricale — Lungimea colului',
 'Aplicarea pragurilor 35 mm (risc scăzut) și 15 mm (risc crescut), fără a confunda ecografia cu diagnosticul de travaliu.',
 ['Nota dă exact aceste două praguri și precizează că ecografia nu pune diagnosticul de travaliu.','Textul spune explicit că ecografia nu diagnostichează travaliul.','Lungimea colului nu este indicație de cezariană.','L:S >2 cu fosfatidilglicerol măsoară maturitatea pulmonară.','Prezentația se confirmă prin Leopold și US, nu prin lungimea colului.']],
 8,'Distractorii atribuie lungimii de col roluri reale ale travaliului, cezarienei, L:S și Leopold.',['>35 mm','<15 mm']),

q(65,['Dacă ruptura prematură de membrane survine sub 32 de săptămâni, textul recomandă:',
 ['Corticosteroizi pentru grăbirea maturării pulmonare fetale','Antibioticoterapie profilactică pentru streptococul de grup B','Sulfat de magneziu pentru neuroprotecție','Inducerea imediată a nașterii, fără corticosteroizi, ca după săptămâna 34','Tact vaginal repetat pentru a urmări dilatația zilnic'],'ABC',308,'Complicații obstetricale — PROM sub 32 de săptămâni',
 'Recunoașterea triadei corticoid–antibiotic–MgSO4 sub 32 de săptămâni, distinct de inducția după 34.',
 ['Corticosteroizii pentru maturare sunt expliciți.','Antibioticele profilactice anti-GBS sunt citate.','MgSO4 pentru neuroprotecție este citat.','Inducția imediată fără corticoid este strategia după 34 de săptămâni.','Tactul vaginal se evită, pentru a nu introduce germeni.']],
 8,'Distractorii aplică conduita de după 34 de săptămâni și tactul interzis asupra PROM precoce.',['<32 de săptămâni','neuroprotecţie']),

q(66,['În travaliul prematur sub 34 de săptămâni se recomandă, printre altele:',
 ['Terapie tocolitică cu MgSO4, terbutalină, indometacin sau nifedipină, pentru 48 de ore','Glucocorticoizi (betametazonă sau dexametazonă) pentru 48 de ore, pentru maturarea plămânilor fetali','Tocoliza și glucocorticoizii ca beneficiu dovedit după 34 de săptămâni','Inducție de rutină cu misoprostol, ca în sarcina depășită','Masaj uterin și metilergometrină, ca în atonia postpartum'],'AB',308,'Complicații obstetricale — Travaliul prematur',
 'Aplicarea ferestrei de 48 de ore a tocolizei și a corticoidului sub 34 de săptămâni.',
 ['Agenții tocolitici și durata de 48 de ore sunt explicite.','Betametazona/dexametazona 48 de ore sunt citate.','Textul precizează absența beneficiului dovedit după 34 de săptămâni.','Misoprostolul este agent de inducție, nu de tocoliză.','Masajul și metilergometrina țin de hemoragia postpartum.']],
 8,'Distractorii mută tocoliza după 34 de săptămâni și importă inducția ori uterotonicele de lăuzie.',['tocolitică','betametazonă']),

q(67,['Sarcina gemelară și testul non-stress:',
 ['Gemenii conjuncți apar doar în sarcina multiplă monozigotică','Data estimată a nașterii în sarcina gemelară este, în medie, la 36 de săptămâni','Un test non-stress reactiv are cel puțin două accelerații de peste 15 bpm, cu durată peste 15 secunde, la fiecare 20 de minute','Frecvența cardiacă fetală normală este 80-100 bpm, identică bradicardiei de scalp','Nașterea vaginală este interzisă dacă ambii feți sunt în prezentație craniană'],'ABC',310,'Sarcina multiplă — Gemeni și testul non-stress',
 'Corelarea notelor despre gemeni cu criteriile de reactivitate ale testului non-stress.',
 ['Nota limitează gemenii conjuncți la monozigoți.','Media de 36 de săptămâni este explicită.','Criteriul 2×(>15 bpm, >15 s)/20 min definește testul reactiv.','Frecvența normală citată este 120-160 bpm.','Textul permite nașterea vaginală dacă ambii sunt cranieni.']],
 8,'Distractorii coboară FCF pe domeniul bradicardic și interzic calea vaginală cranio-craniană, pe care textul o permite.',['36 săptămâni','120-160 bpm']),

q(68,['O gravidă cu gemeni, primul făt cranian și al doilea pelvian:',
 ['Nașterea se poate încerca pe cale vaginală','Asocierile pelviană-craniană sau pelviană-pelviană necesită operație cezariană','Nașterea vaginală este permisă doar dacă ambii sunt pelvieni','Inducția cu oxitocină este contraindicată în sarcina gemelară craniană-craniană','Testul non-stress reactiv cere o singură accelerație de 5 bpm'],'AB',310,'Sarcina multiplă — Calea nașterii',
 'Aplicarea regulii de cale a nașterii după combinația de prezentații.',
 ['Textul permite tentativa vaginală în combinația craniană-pelviană.','Cezariana pentru pelviană-craniană sau pelviană-pelviană este explicită.','Pelvian-pelvian impune cezariană, nu vaginal.','Craniene-craniană poate naște vaginal; inducția nu este interzisă global.','Reactivitatea cere două accelerații de peste 15 bpm.']],
 8,'Distractorii inversează combinațiile care permit nașterea vaginală și alterează criteriul NST.',['pe cale vaginală','120-160 bpm']),

q(69,['Tipurile de incizie uterină la operația cezariană:',
 ['Incizia verticală (clasică sau verticală joasă) se folosește în prezentație transversală, când adeziunile sau fibroamele blochează segmentul inferior, dacă urmează histerectomie, în cancer de col sau în nașterea post-mortem','Incizia transversală joasă, la nivelul segmentului inferior, are risc redus de ruptură uterină, sângerare, aderențe intestinale sau infecție și este preferată','După o incizie transversală, nașterea vaginală ulterioară poate fi realizată','După o incizie verticală, nașterea ulterioară trebuie să fie tot prin cezariană, din cauza riscului de ruptură uterină','Incizia transversală joasă este evitată, fiind rezervată doar nașterii post-mortem'],'ABCD',314,'Travaliu — Operația cezariană: tipuri de incizie',
 'Diferențierea indicațiilor inciziei verticale de avantajele inciziei transversale joase și de consecințele asupra nașterilor viitoare.',
 ['Indicațiile inciziei verticale sunt enumerate.','Avantajele și preferința transversalei joase sunt explicite.','VBAC este permisă doar după incizie transversală.','Cezariana iterativă după incizie verticală este impusă de riscul de ruptură.','Transversala joasă este tocmai incizia preferată, nu cea evitată.']],
 8,'Distractorul inversează ierarhia: textul preferă transversala joasă, nu o rezervă post-mortem.',['Transversală joasă','ruptură uterină']),

q(70,['Indicațiile operației cezariene, conform textului, includ:',
 ['Materne: eclampsie, operații uterine sau cezariană în antecedente, boli cardiace, obstrucția canalului de naștere, deces matern, cancer de col, herpes genital activ, HIV','Fetale: suferință fetală acută, distocii de prezentație, prolaps de cordon, făt macrosom','Combinate: eșec de progres al travaliului, placenta previa, dezlipire prematură de placentă, disproporție cefalo-pelvică','Riscul de moarte maternă este similar între cezariana electivă și nașterea vaginală, dar cezariana de urgență are risc mai mare','Indicația fetală unică este prezentația craniană occipito-anterioară, care impune cezariană de principiu'],'ABCD',314,'Travaliu — Indicațiile cezarienei',
 'Recunoașterea listelor maternă, fetală și combinată, plus nota despre mortalitatea electivă versus de urgență.',
 ['Lista maternă este explicită.','Lista fetală este explicită.','Lista combinată este explicită.','Nota compară mortalitatea electivă cu vaginala și urgența.','Prezentația craniană este eutocică; nu impune cezariană.']],
 8,'Distractorul transformă prezentația normală (craniană) în indicație de cezariană.',['herpes genital activ','de urgentă']),

q(71,['Laptele matern, conform notelor de pe aceeași pagină:',
 ['Este considerat nutrientul ideal, deoarece conține imunoglobuline de tip IgA, acoperă necesarul calitativ și cantitativ, nu costă și crește atașamentul mamă-copil','Colostrul (laptele timpuriu) este bogat în proteine, lipide și minerale și conține IgA','După o săptămână postpartum, laptele conține proteine, lipide, apă și lactoză','Colostrul este format doar din lactoză, fără IgA','Laptele matern este contraindicat după cezariana electivă, din cauza mortalității materne identice cu nașterea vaginală'],'ABC',314,'Lăuzia — Laptele matern',
 'Diferențierea colostrului (proteine, lipide, minerale, IgA) de laptele de după o săptămână (plus apă și lactoză).',
 ['Nota despre IgA, necesarul, cost și atașament este explicită.','Compoziția colostrului este din a doua notă.','Compoziția după o săptămână este explicită.','Colostrul conține IgA, nu doar lactoză.','Cezariana electivă nu contraindică alăptarea.']],
 8,'Distractorii golesc colostrul de IgA și contraindică alăptarea după o cezariană electivă.',['Laptele matern','lgA']),

q(72,['Versiunea cefalică externă în prezentația pelviană se poate efectua în săptămâna:',
 ['37 de gestație, cu eficacitate de până la 75%','28 de gestație, când pelviana este încă prezentă în 25% din cazuri','32 de gestație, odată cu screening-ul GBS','20 de gestație, odată cu măsurarea fundului uterin','12 de gestație, odată cu biopsia de vilozități'],'A',314,'Travaliu — Prezentația pelviană',
 'Memorarea săptămânii 37 și a eficacității de până la 75% a versiunii externe.',
 ['Textul plasează manevra în săptămâna 37, cu eficacitate de până la 75%.','La 28 de săptămâni pelviana este încă frecventă, dar versiunea nu este citată atunci.','32-37 de săptămâni este fereastra GBS, nu a versiunii.','Săptămâna 20 este a fundului uterin, nu a versiunii.','Săptămâna 12 este a CVS.']],
 8,'Distractorii sunt săptămâni reale din calendarul obstetric, mutate pe versiunea externă.',['versiunea cefalică externă','săptămâna 37']),

q(73,['În lăuzia fiziologică, textul descrie:',
 ['Scorul Apgar se calculează la 1 și la 5 minute; 7+ la 1 minut și 9+ la 5 minute se asociază cu un prognostic bun','Lohiile sunt roșii în primele zile, apoi se deschid la culoare, devenind albe în circa 10 zile postpartum','La mamele care nu alăptează, menstruația apare la 6-8 săptămâni postpartum','Ovulația și menstruația pot lipsi câteva luni la mamele care alăptează, cu eficiență contraceptivă de 98% în primele 6 luni dacă alăptarea este constantă','Scorul Apgar de 2 la 1 minut, cu culoare albastră-palidă și absența respirațiilor, definește prognosticul bun'],'ABCD',315,'Lăuzia — Apgar și modificări materne',
 'Corelarea pragurilor Apgar cu evoluția lohiilor, revenirea menstruației și lactația ca metodă contraceptivă.',
 ['Pragurile 7+ și 9+ sunt din text, lângă tabelul Apgar.','Evoluția lohiilor roșu–alb în ~10 zile este explicită.','Fereastra 6-8 săptămâni la nealăptare este citată.','Cei 98% în 6 luni la alăptare constantă sunt citați.','Culoarea albastră-palidă și absența respirației cotate 0 nu definesc prognostic bun.']],
 8,'Distractorul ia rândul de 0 puncte din tabelul Apgar și îl prezintă ca prognostic bun.',['Scorul Apgar','lohiile']),

q(74,['Profilul biofizic fetal:',
 ['Se efectuează după un test non-stress non-reactiv','Fiecare componentă primește 2 puncte sau 0, fără cotă intermediară de 1 punct; un scor 8-10 sugerează risc minim de asfixie','Indicele de lichid amniotic cotat cu 2 puncte este peste 25 cm, pragul hidramniosului','Un scor 10 impune naștere imediată, ca decelerațiile tardive recurente','Componenta respiratorie cere cel puțin 10 minute de respirații continue'],'AB',311,'Travaliu — Profilul biofizic',
 'Aplicarea indicației după NST non-reactiv, a cotării 2-sau-0 și a pragului 8-10.',
 ['Indicația după NST non-reactiv este explicită.','Regula 2 sau 0 și intervalul 8-10 sunt citate.','ILA cotat cu 2 puncte este între 5 și 23 cm, nu pragul de hidramnios.','Scorul 8-10 sugerează risc minim, nu naștere imediată.','Componenta respiratorie cere un episod de 20 de secunde într-un interval de 30 de minute.']],
 8,'Distractorii înlocuiesc pragul ILA 5–23 cm cu hidramniosul și transformă scorul bun în indicație de naștere.',['profilul biofizic','8 şi 10']),
];
