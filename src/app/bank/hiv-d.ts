import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p-1059;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hiv',37,pdfOffset,`hiv-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HIV_D=[
q(76,['Impactul epidemiologic global al HIV, dincolo de bilanțul 78/39/36,9 milioane, include:',
 ['Din 2001, numărul de cazuri noi a scăzut la nivel global cu 38%','HIV este principala cauză de invaliditate la persoanele de 30-45 de ani','HIV este principala cauză de deces la femeile de 15-49 de ani','Rata de infecție scade uniform în Europa de Est și Asia Centrală','ARV-ul eficient crește transmiterea, fără efect asupra incidenței'],'ABC',1426,'HIV — Incidență −38% și impact pe grupe de vârstă',
 'Reținerea scăderii de 38% din 2001 și a primatului de invaliditate (30-45 ani) și mortalitate (femei 15-49), versus creșterile din Europa de Est.',
 ['Scăderea globală de 38% a cazurilor noi din 2001 este explicită.','Invaliditatea dominantă la 30-45 de ani este citată.','Decesul dominant la femeile 15-49 este citat.','Rata continuă să crească în Europa de Est și părți din Asia Centrală.','ARV-ul eficient reduce transmiterea.']],
 8,'Inversează direcția incidenței în Europa de Est și neagă efectul ARV asupra transmiterii, pe fondul a trei cifre reale.',['38%','30 şi 45 de ani']),

q(77,['În Marea Britanie, în 2017, cascadele de îngrijire citate sunt:',
 ['101.600 de persoane trăiau cu HIV; 92% își cunoșteau diagnosticul, 98% dintre diagnosticați erau pe ARV, 97% dintre aceștia cu supresie virală','4363 de cazuri noi diagnosticate','O treime dintre cei care trăiesc cu HIV au peste 50 de ani, iar 30% sunt femei','Sub 10.000 trăiau cu HIV, fără supresie virală','Toți diagnosticații erau femei sub 25 de ani'],'ABC',1426,'HIV — Marea Britanie 2017: 101.600 și cascada 92/98/97',
 'Trio-ul prevalență 101.600 / 4363 noi / cascada 92-98-97, plus îmbătrânirea (1/3 peste 50) și 30% femei.',
 ['101.600, 92%, 98% și 97% sunt din text.','4363 cazuri noi în 2017.','O treime peste 50 de ani și 30% femei.','Prevalența nu este sub 10.000.','30% femei și îmbătrânirea contrazic „toți femei sub 25”.']],
 8,'Subestimează prevalența britanică și anulează cascada 92/98/97, trei ordine de mărime de pe aceeași pagină.',['101.600 de persoane','97% aveau supresie virală']),

q(78,['Diagnosticul tardiv și comorbiditățile în Marea Britanie/Europa:',
 ['Diagnosticul tardiv (CD4 <350/ml în primele 3 luni) a scăzut de la 52% (2004) la 43% (2017), dar rămâne ridicat','75% dintre cei care trăiesc cu HIV au cel puțin încă o afecțiune cronică (sănătate mentală, HTA, lipide, diabet)','În Europa, în 2017, principalele cauze de internare au inclus afecțiuni respiratorii, psihiatrice, cardiovasculare, renale și neurologice','Bolile definitorii SIDA au înlocuit comorbiditățile netransmisibile unde ARV este accesibil','Fragilitatea apare doar după 80 de ani, identic populației neinfectate'],'ABC',1426,'HIV — Diagnostic tardiv 43% și comorbidități 75%',
 'Perechea 52%→43% CD4<350 și 75% cu o comorbiditate cronică, plus cauzele de internare europene.',
 ['52% (2004) la 43% (2017) pentru CD4 <350.','75% au cel puțin o afecțiune cronică.','Cauzele de internare europene sunt enumerate.','Unde ARV este accesibil, bolile SIDA au fost înlocuite de afecțiuni netransmisibile.','Fragilitatea și dizabilitățile apar la persoane mai tinere decât la neinfectați.']],
 8,'Inversează substituția SIDA→netransmisibile și mută fragilitatea la octogenari, contrar textului despre îmbătrânire precoce.',['43% în 2017','75% dintre cei']),

q(79,['Transmiterea verticală a HIV, dincolo de alăptarea deja menționată ca factor:',
 ['Fără intervenție, studiile europene sugerează că 15% dintre nou-născuții din mame HIV-pozitive pot dobândi HIV','Au fost raportate rate de până la 40% în Africa și SUA','În Marea Britanie, riscul de transmitere verticală este de 1:1000','90% din infecțiile materno-fetale globale se înregistrează în țările cu nivel de trai scăzut, prin lipsa accesului la intervenții','În era pre-ARV, alăptarea reducea riscul la jumătate, in-utero fiind calea unică'],'ABCD',1427,'HIV — Transmitere verticală: 15%, 40%, 1:1000, 90%',
 'Ponderile 15% (Europa fără intervenție), până la 40% (Africa/SUA), 1:1000 (UK) și 90% din MTCT în țări sărace.',
 ['15% fără intervenție în studiile europene.','Până la 40% în Africa și SUA.','1:1000 în Marea Britanie.','90% din MTCT în țări cu nivel scăzut.','Alăptarea dubla riscul pre-ARV; majoritatea infecțiilor sunt perinatale, nu doar in-utero.']],
 8,'Inversează efectul alăptării pre-ARV și uită că 90% din MTCT ține de accesul la intervenții.',['15% dintre nou-născuţii','1:1000']),

q(80,['Riscul citat pentru cadrul medical după o singură înțepătură cu ac contaminat HIV este de aproximativ:',
 ['0,3%, date obținute înainte de utilizarea pe scară largă a ARV care reduce viremia','30%, identic transmiterii verticale fără intervenție','0% dacă insectele vectoare sunt absente','10%, identic riscului prin contact social','50%, ca în studiile de circumcizie'],'A',1428,'HIV — Expunere ocupațională: 0,3%',
 'Reținerea riscului 0,3% per înțepătură, nuanțat de era pre-ARV eficient.',
 ['Textul: risc de aproximativ 0,3% după o singură înțepătură, date pre-ARV pe scară largă.','30% este ordinul transmiterii verticale fără intervenție, nu al înțepăturii.','Absența transmiterii prin insecte nu anulează riscul ocupațional.','Nu există dovadă de transmitere prin contact social.','50% este reducerea prin circumcizie, nu riscul per înțepătură.']],
 8,'Permutează 0,3% (înțepătură) cu 15-40% (vertical) sau 50% (circumcizie), toate din capitolul de transmitere.',['0,3%','înţepături cu un ac']),

q(81,['HIV-2 și grupurile de HIV-1, conform textului:',
 ['HIV-2 este limitat aproape în întregime la Africa de Vest (și Europa, mai ales Franța și Portugalia), cu doar 40% omologie structurală cu HIV-1 și evoluție mai lentă','Multe ARV folosite în HIV-1 sunt ineficiente în HIV-2','Grupul M reprezintă 98% din infecțiile globale; în Europa/America de Nord/Australia predomină subtipul B, în Africa Centrală/subsahariană subtipul C','HIV-2 este identic structural cu HIV-1 și răspunde la aceleași ARV','Grupul M acoperă sub 5% din infecții, subtipul B fiind absent în Europa'],'ABC',1428,'HIV — HIV-2 (40% omologie) și grupul M 98%',
 'Omologia 40%, ineficiența multor ARV, ponderea 98% a grupului M și clivajul B versus C.',
 ['Africa de Vest, 40% omologie, evoluție mai lentă.','Multe ARV anti-HIV-1 sunt ineficiente pe HIV-2.','Grup M 98%; B în Occident, C în Africa.','Omologia este 40%, nu identitate; ARV-urile diferă.','Grupul M este 98%, nu sub 5%; B predomină în Europa.']],
 8,'Atribuie HIV-2 același spectru ARV și inversează 98% (grup M) cu o pondere marginală.',['40% omologie structurală','98% din infecţiile']),

q(82,['Turnover-ul viral și răspunsul umoral precoce:',
 ['Timpul de înjumătățire al virusului în circulație este de aproximativ 6 ore','Pentru nivelurile de viremie observate trebuie eliberate și eliminate zilnic 10⁸-10⁹ particule','Anticorpii neutralizanți apar la aproximativ 12 săptămâni de la infecție','Producția de virus de către celula infectată durează aproximativ 2 săptămâni, fără moarte celulară','Anticorpii neutralizanți sunt prezenți din prima zi, fără fereastră de 12 săptămâni'],'ABC',1429,'HIV — T1/2 6 ore, 10⁸-10⁹ particule/zi, Ac la 12 săptămâni',
 'Trio-ul cinetic 6 ore / 10⁸-10⁹ zilnic / 2 zile de producție (nu 2 săptămâni) și fereastra de 12 săptămâni a Ac neutralizanți.',
 ['T1/2 ≈ 6 ore în circulație.','10⁸-10⁹ particule eliberate și eliminate zilnic.','Ac neutralizing la ~12 săptămâni.','Producția durează aproximativ 2 zile, limitată de moartea celulei.','Anticorpii nu sunt prezenți din prima zi.']],
 8,'Umflă producția celulară de la 2 zile la 2 săptămâni și anulează fereastra de 12 săptămâni a Ac.',['6 ore','12 săptămâni de la infecţie']),

q(83,['Primoinfecția HIV, ca fereastră de 6 luni, se caracterizează prin:',
 ['Primele 2-4 săptămâni pot fi silențioase clinic și serologic; după 3-6 săptămâni poate apărea o boală virală autolimitată de până la 3 săptămâni, confundabilă cu mononucleoza','Seroconversia este imediată în prima oră, fără fereastră silențioasă','Boala acută durează 12 luni, fără recuperare','Limfocitele CD4 cresc masiv, raportul CD4:CD8 rămânând normal','ARN-ul viral plasmatic este absent, p24 fiind nedetectabil'],'A',1430,'HIV — Infecția acută: 2-4 săptămâni silențioase, 3-6 săptămâni boală',
 'Calendarul 2-4 săptămâni silențioase, 3-6 săptămâni debut, durată până la 3 săptămâni, versus markerii p24/ARN prezenți.',
 ['Textul descrie fereastra silențioasă 2-4 săptămâni, apoi boala la 3-6 săptămâni, până la 3 săptămâni.','Nu există seroconversie în prima oră.','Recuperarea este de obicei completă, durata nu este 12 luni.','CD4 pot fi scăzute, raportul CD4:CD8 inversat.','ARN-ul este crescut, p24 poate fi detectat.']],
 8,'Comprimă fereastra silențioasă la o oră și inversează CD4/ARN, calendarul clasic al primoinfecției.',['2-4 săptămâni','3-6 săptămâni']),

q(84,['NAAT, setpoint-ul și elite controllers:',
 ['NAAT pentru ARN-HIV poate diagnostica cu 7 zile înaintea antigenului p24 și cu 12 zile înaintea unui test de anticorpi cu sensibilitate crescută','Elite controllers, subgrup al long-term non-progressors, mențin viremie sub 2000 copii/ml sau nedetectabilă, fără ARV','După ~6 luni de la seroconversie se stabilește un setpoint viral; >100.000 copii/ml asociază risc de 10 ori mai mare de progresie spre SIDA în 5 ani versus <10.000','NAAT este inferior p24 cu 7 zile, anticorpii precedând ARN-ul','Elite controllers au viremie persistentă peste 100.000 fără ARV'],'ABC',1430,'HIV — NAAT −7/−12 zile, elite <2000, setpoint 6 luni',
 'Fereastra NAAT (7 și 12 zile), pragul elite <2000 și gradientul prognostic 100.000 versus 10.000 la 5 ani.',
 ['7 zile înainte de p24, 12 zile înainte de Ac.','Elite: <2000 sau nedetectabil fără ARV.','Setpoint la ~6 luni; 10× risc dacă >100.000 versus <10.000.','NAAT precede p24 și Ac, nu invers.','Elite-ii au viremie joasă, nu >100.000.']],
 8,'Inversează ordinea NAAT–p24–Ac și confundă elite-ii cu viremia de prognostic nefavorabil.',['7 zile înaintea','2.000 copii/ml'],[1434]),

q(85,['Complicațiile renale și cardiovasculare netratate, dincolo de HIVAN deja descrisă ca entitate:',
 ['HIVAN este cel mai frecventă la bărbații de rasă neagră și poate fi exacerbată de heroină; este o glomeruloscleroză focală segmentară cu tubulopatie prin infectare tubulară directă','Pacienții cu HIV au risc de două ori mai mare de afecțiuni cardiovasculare; HDL-ul netrataților este mai mic decât la neinfectați','HIVAN predomină la femeile caucaziene și este o nefropatie diabetică tipică','Riscul cardiovascular este înjumătățit față de populația generală, HDL-ul fiind crescut','Tenofovirul nu are toxicitate renală, sindromul Fanconi fiind exclus'],'AB',1432,'HIV — HIVAN (FSGS, rasă neagră) și risc CV dublu',
 'Profilul HIVAN (bărbat negru, heroină, FSGS) și dublarea riscului CV cu HDL scăzut la netratați.',
 ['Rasă neagră, heroină, FSGS și tubulopatie directă.','Risc CV ×2; HDL mai mic la netratați.','Nu predomină la femei caucaziene.','Riscul CV este dublu, nu înjumătățit.','Tenofovirul este asociat cu sindromul Fanconi.']],
 8,'Inversează terenul HIVAN și direcția riscului CV/HDL, două paragrafe consecutive de complicații de organ.',['rasă neagră','de două ori mai mare']),

q(86,['Cel mai sensibil test de ARN-HIV citat detectează până la:',
 ['20 copii de ARN viral/ml','2000 copii/ml, pragul elite controllers','100.000 copii/ml, setpoint-ul de prognostic','10 copii/ml doar din salivă','0 copii, testele fiind calitative'],'A',1434,'HIV — Sensibilitatea viremiei: 20 copii/ml',
 'Pragul analitic 20 copii/ml, distinct de 2000 (elite) și 100.000 (prognostic).',
 ['Textul: cel mai sensibil test detectează până la 20 copii/ml.','2000 este pragul elite, nu sensibilitatea testului.','100.000 este pragul de prognostic la 5 ani.','Nu este un test salivar de 10 copii.','Rezultatele sunt în copii/ml sau log, nu doar calitative.']],
 8,'Permutează 20 (limită analitică), 2000 (elite) și 100.000 (setpoint), trei praguri de viremie.',['20 copii','ARN viral/ ml']),

q(87,['Monitorizarea viremiei după inițierea ARV și artefactele tranzitorii:',
 ['Încărcătura virală începe să scadă la 4 săptămâni și atinge scăderea maximă în săptămânile 10-12','Creșteri tranzitorii pot urma imunizărilor (gripă, pneumococ) sau infecțiilor intercurente (TBC); viremia nu se evaluează la mai puțin de o lună de la aceste evenimente','După stabilizare virusologică și CD4 >350/mm³ sub ARV, CD4 se monitorizează aproximativ o dată pe an','Viremia trebuie măsurată în ziua vaccinării antigripale, pentru a prinde nadirul','CD4 se oprește definitiv după prima lună de ARV, indiferent de valoare'],'ABC',1434,'HIV — Cinetica VL 4/10-12 săptămâni și fereastra post-vaccin',
 'Calendarul 4 apoi 10-12 săptămâni, interdicția de a doza VL <1 lună post-vaccin/TBC și ritmul anual al CD4 după 350.',
 ['Scădere de la 4 săptămâni, maxim 10-12.','Nu se dozează VL sub o lună de la vaccin/infecție.','CD4 anual după stabilizare și >350.','Vaccinarea produce creșteri tranzitorii, nu nadir.','CD4 anual continuă după stabilizare, nu se oprește la o lună.']],
 8,'Dozează viremia în ziua vaccinului — tocmai artefactul pe care textul îl evită prin fereastra de o lună.',['4 săptămâni','săptămânile 10-12']),

q(88,['Conform Cadranului 37.16, particularitățile de clasă ale ARV includ:',
 ['Abacavirul se asociază cu hipersensibilitate la HLA-B*5701; abacavir+lamivudină doar dacă viremia la start este <100.000 copii/ml','Nevirapina poate da hepatotoxicitate severă la CD4 >250/mm³ la femei sau >400/mm³ la bărbați','Maraviroc este eficient doar fără tropism CXCR4; se leagă de celula gazdă, nu de ținta virală','Enfuvirtide se administrează subcutanat de două ori pe zi, la pacienții fără alte opțiuni','Rilpivirina se folosește indiferent de viremie, iar raltegravirul se dă o dată pe lună'],'ABCD',1436,'ARV — HLA-B*5701, nevirapină/CD4, maraviroc, enfuvirtide',
 'Patru constrângeri de clasă: HLA-B*5701/<100.000, pragurile CD4 ale nevirapinei, tropismul CCR5 și enfuvirtide s.c. ×2.',
 ['HLA-B*5701 și pragul <100.000 pentru ABC/3TC.','Nevirapină: >250 femei, >400 bărbați.','Maraviroc: fără CXCR4, leagă gazda.','Enfuvirtide s.c. ×2, ultima linie.','Rilpivirina doar dacă VL <100.000; raltegravirul se administrează de 2 ori pe zi.']],
 8,'Anulează pragurile <100.000 și CD4 ale nevirapinei, patru note de subsol din același cadran de clase.',['HlA-8*5701','>250 celule/mm3 la femei']),

q(89,['Rezistența ARV, dincolo de „drug tail" deja descris:',
 ['O singură mutație punctiformă poate da rezistență înaltă în clasa INNRT, pe când INRT și IP cer acumularea mai multor mutații','Prevalența rezistenței transmise în infecția primară este 2-20%; la cronici netratați, mutațiile primare 3-10%','Sunătoarea și rifampicina induc P450 și pot scădea nivelurile unor ARV; INSTI pot fi reduse de antiacide','INNRT au barieră genetică înaltă, o mutație fiind insuficientă','Genotiparea de rezistență se face după oprirea ARV, tulpina sălbatică fiind inutilă de evitat'],'ABC',1439,'Rezistență — INNRT o mutație, 2-20% primar, sunătoare',
 'Bariera joasă INNRT, intervalele 2-20% / 3-10% și inductorii (sunătoare, rifampicină, antiacide vs INSTI).',
 ['INNRT: o mutație; INRT/IP: mai multe.','2-20% în primară; 3-10% la cronici netratați.','Sunătoare/rifampicină pe P450; antiacide pe INSTI.','INNRT au barieră joasă, nu înaltă.','Genotiparea la eșec se face sub ARV, altfel revine wild-type.']],
 8,'Inversează bariera INNRT și cere genotiparea după oprire, două capcane din Cadranul 37.20.',['2 şi 20%','3 şi 10%']),

q(90,['O gravidă cu HIV, dincolo de cezariana deja nuanțată:',
 ['Rata de transmitere în UK este 1% pentru toate femeile diagnosticate înainte de naștere și 0,1% dacă ARV cu viremie sub 50 copii/ml','Nou-născutul primește zidovudină sirop 4 săptămâni; mama continuă ARV','Dacă refuză ARV pentru propria sănătate, inițierea pentru făt este la începutul trimestrului II dacă VL >30.000 copii/ml, sau mai devreme dacă >100.000','Alăptarea este impusă, riscul rămânând 40% sub ARV','Zidovudina la nou-născut se omite dacă mama are VL >100.000'],'ABC',1441,'Sarcina — Transmitere 1%/0,1%, AZT 4 săptămâni, praguri 30.000/100.000',
 'Perechea 1% versus 0,1% (VL<50), siropul AZT 4 săptămâni și pragurile 30.000/100.000 pentru startul tardiv.',
 ['1% toate diagnosticate antenatal; 0,1% dacă VL <50.','AZT sirop 4 săptămâni la nou-născut.','T2 dacă VL >30.000; mai devreme dacă >100.000.','Mamele sunt sfătuite să nu alăpteze, deși riscul sub ARV eficient este extrem de scăzut.','AZT neonatal se dă 4 săptămâni, nu se omite la viremie înaltă.']],
 8,'Inversează pragurile 30.000/100.000 și impune alăptarea, contrar paragrafului de obstetrică britanică.',['0,1%','30.000 de copii/ml']),

q(91,['Meningita criptococică, dincolo de factorii de prognostic deja citați:',
 ['Tratament inițial: amfotericină B liposomală 4,0 mg/kg/zi i.v., cu sau fără flucitozină','După 2 săptămâni i.v., se continuă fluconazol până la 8 săptămâni','ARV se inițiază la aproximativ 4 săptămâni, pentru a reduce IRIS; întreținere cu fluconazol până la 1 an, VL nedetectabilă și CD4 constant >100/mm³','Corticoterapia este de primă linie, amfotericina fiind evitată','ARV se pornește în aceeași zi cu amfotericina, fără fluconazol de întreținere'],'ABC',1444,'Criptococ — Amfotericină 4 mg/kg, fluconazol 8 săptămâni, ARV la 4 săptămâni',
 'Doza 4,0 mg/kg, secvența 2 apoi 8 săptămâni și fereastra ARV de ~4 săptămâni până la CD4>100 un an.',
 ['Amfotericină liposomală 4,0 mg/kg/zi ± flucitozină.','Fluconazol după 2 săptămâni, până la 8.','ARV la ~4 săptămâni; fluconazol până la 1 an și CD4>100.','Nu se recomandă corticoterapia.','ARV-ul precoce crește riscul de IRIS; întreținerea cu fluconazol este cerută.']],
 8,'Pornește ARV în ziua 0 și adaugă steroizi, tocmai ce textul evită în criptococoză.',['4,0 mg/kg/zi','peste 100/mm3']),

q(92,['Profilaxia secundară a pneumoniei cu Pneumocystis, dincolo de co-trimoxazolul acut:',
 ['Indicație la CD4 sub 200/mm³; standard co-trimoxazol 960 mg de trei ori pe săptămână','Pentamidina în aerosoli protejează doar plămânii, penetrează slab lobii superiori; recurențele pot fi atipice sau extrapulmonare','Profilaxia se oprește la orice CD4, pentamidina acoperind și extrapulmonarul','C. krusei este sensibilă la fluconazol, fiind de elecție în PCP','Atovaquona înlocuiește CPAP-ul în hipoxie severă'],'AB',1444,'PCP — Co-trimoxazol 960 mg ×3/săptămână și limitele pentamidinei',
 'Pragul CD4<200, doza 960 mg de 3 ori/săptămână și eșecul pentamidinei pe lobi superiori/extrapulmonar.',
 ['CD4<200; co-trimoxazol 960 mg ×3/săptămână.','Pentamidina: doar pulmonar, slab superior, recurențe atipice.','Nu se oprește la orice CD4; pentamidina nu acoperă extrapulmonarul.','C. krusei este rezistentă la fluconazol (candidoză, nu PCP).','Hipoxia severă cere CPAP/ventilație, nu înlocuire cu atovaquonă.']],
 8,'Extinde pentamidina la extrapulmonar și mută C. krusei în PCP, două confuzii de pe aceeași pagină de OI fungice.',['960 mg','Pentamidina']),

q(93,['Tratamentul de elecție al aspergilozei la pacientul cu HIV, când există factori favorizanți (neutropenie, steroizi, patologie pulmonară), este:',
 ['Voriconazol, alternative amfotericină B liposomală 3 mg/kg i.v. zilnic sau caspofungină','Co-trimoxazol 960 mg ×3/săptămână, ca în PCP','Fluconazol, C. krusei fiind sensibilă','Pirimetamină de încărcare, ca în toxoplasmoză','Nicio antifungică, ARV-ul fiind suficient fără factori de risc'],'A',1444,'HIV — Aspergiloza: voriconazol',
 'Voriconazolul ca elecție, cu amfotericină 3 mg/kg sau caspofungină ca alternative, nu schemele de PCP/Candida/Toxo.',
 ['Textul: elecție voriconazol; alternative amfotericină 3 mg/kg sau caspofungină.','Co-trimoxazolul 960 este profilaxia PCP.','Fluconazolul nu este elecția; C. krusei e rezistentă la fluconazol.','Pirimetamina ține de toxoplasmoză.','Aspergiloza este rară fără factori favorizanți, dar tratamentul citat este voriconazolul.']],
 8,'Înlocuiește voriconazolul cu co-trimoxazol, fluconazol sau pirimetamină, trei OI de pe aceeași pagină.',['voriconazol','3 mg/kg i.v.']),

q(94,['Retinita CMV la pacientul cu HIV:',
 ['Poate apărea la CD4 <50/mm³; netratată distruge retina; aspect de „felie de pizza" (hemoragii și exsudate perivasculare)','Tratament cât mai curând: valganciclovir 900 mg ×2/zi p.o., sau ganciclovir 5 mg/kg ×2/zi, sau foscarnet 90 mg/kg ×2/zi i.v., ≥3 săptămâni sau până la remisie','Ganciclovirul poate mielosupresa, foscarnetul este nefrotoxic','CMV-boala apare tipic la CD4 >500, fără risc de cecitate','Valganciclovirul de întreținere este mai eficace decât ganciclovirul i.v.'],'ABC',1446,'CMV — Retinită CD4<50, felie de pizza, valganciclovir 900×2',
 'Pragul CD4<50, dozele 900/5/90 și toxicitățile ganciclovir versus foscarnet.',
 ['CD4<50; felie de pizza; distrugere retinină netratată.','Valganciclovir 900×2, ganciclovir 5×2, foscarnet 90×2, ≥3 săptămâni.','Mielosupresie vs nefrotoxicitate.','Boala CMV este la CD4 constant <100, retinita <50.','Valganciclovirul oral de întreținere are eficacitate mai scăzută decât ganciclovirul i.v.']],
 8,'Mută retinita la CD4>500 și inversează ierarhia valganciclovir versus ganciclovir i.v.',['900 mg x 2/zi','felie de pizza']),

q(95,['Colita și poliradiculopatia CMV:',
 ['Colita: durere abdominală (inclusiv fosa iliacă stângă), diaree cu sânge; histologic incluziuni citoplasmatice „ochi de bufniță"; ganciclovir 5 mg/kg ×2/zi i.v. 14-28 de zile','Poliradiculopatia lombo-sacrată: slăbiciune și tulburări sfincteriene; în LCR leucocite aproape în totalitate neutrofile','Colita se tratează doar cu fluconazol, incluziunile fiind absente','LCR-ul din poliradiculopatie este acellular, fără neutrofile','Întreținerea CMV rămâne necesară chiar după reconstituirea imună prin ARV'],'AB',1446,'CMV — Ochi de bufniță și LCR neutrofilic în poliradiculopatie',
 'Perechea histologică „ochi de bufniță" + 14-28 zile și paradoxul neutrofilelor din LCR-ul poliradiculopatiei.',
 ['Tablou de colită, ochi de bufniță, ganciclovir 14-28 zile.','LCR aproape exclusiv neutrofilic în poliradiculopatie.','Fluconazolul nu este tratamentul colitei CMV.','Leucocitele LCR sunt aproape toate neutrofile.','Întreținerea nu mai e necesară după ameliorarea imună prin ARV.']],
 8,'Înlocuiește ganciclovirul cu fluconazol și neagă neutrofilele din LCR, două detalii CMV de pe aceeași pagină.',['ochi de bufniţă','14-28 de zile']),

q(96,['Leucoencefalopatia multifocală progresivă (PML) prin virus JC:',
 ['Infectează oligodendrocitele; leziuni de obicei multiple, limitate la substanța albă, fără captare de contrast și fără efect de masă','RMN T2 hiperintens; PCR JC în LCR plus imagistică sunt de regulă suficiente, biopsia nemaifiind necesară','Nu există tratament specific; ARV eficient este singura intervenție care poate da remisie clinică și radiologică','Leziunile captează contrast și au efect de masă, ca abcesul toxoplasma','Ganciclovirul i.v. vindecă PML, ARV-ul fiind inutil'],'ABC',1447,'PML — JC, T2 fără contrast/masă, doar ARV',
 'Profilul imagistic (fără contrast, fără masă) și absența terapiei specifice în afara ARV.',
 ['Oligodendrocite; albă; fără contrast, fără masă.','T2 hiperintens; PCR+IRM, fără biopsie.','Doar ARV-ul poate induce remisie.','Absența captării și a masei deosebește de toxoplasma.','Nu există tratament specific anti-JC; ganciclovirul ține de CMV.']],
 8,'Atribuie PML-ului inelul și masa toxoplasmei și înlocuiește ARV-ul cu ganciclovir, două OI cerebrale vecine.',['nu captează','virusului JC']),

q(97,['Tuberculoza la pacientul cu HIV, tipar în funcție de imunitate:',
 ['La status imunologic relativ bun, tabloul este similar pacientului fără HIV','În stadii avansate, manifestările sunt atipice, adesea extrapulmonare (ganglioni, măduvă, ficat), cu posibilă bacteriemie','Examenul microscopic din spută poate fi negativ chiar în infecția pulmonară; culturile sunt cel mai bun instrument','IDR la tuberculină este mereu interpretabilă, independent de CD4','Formele extrapulmonare cer o durată mai scurtă decât la neinfectați'],'ABC',1447,'TB-HIV — Tablou similar versus extrapulmonar atipic',
 'Gradientul imun: similar HIV-negativ versus extrapulmonar/bacteriemie, plus sputa negativă și culturile.',
 ['Imunitate relativ bună: tablou similar.','Avansat: atipic, extrapulmonar, bacteriemie.','Spută negativă posibilă; culturi cele mai bune.','IDR poate fi neinterpretabilă la imunodepresie severă.','Durata poate fi mai lungă, mai ales extrapulmonar.']],
 8,'Face IDR-ul infailibil și scurtează extrapulmonarul, inversând nuanțele de diagnostic TB-HIV.',['extrapulmonară','culturile reprezintă']),

q(98,['Extinderea testării HIV în Marea Britanie, 2017, dincolo de PrEP:',
 ['Aproximativ 8% dintre pacienții cu HIV erau nediagnosticați','43% dintre nou-diagnosticați au fost tardivi (CD4 <350/mm³)','23% au avut CD4 <200/mm³ la diagnostic','Testarea se recomandă noilor înregistrați în asistența primară și urgențelor unde seroprevalența depășește 2/1000','Nediagnosticații erau 0%, toți având CD4 >500'],'ABCD',1449,'Prevenție — 8% nediagnosticați, 23% CD4<200, prag 2/1000',
 'Trio-ul 8% / 43% / 23% și pragul de seroprevalență 2/1000 pentru testarea în urgență/primar.',
 ['8% nediagnosticați.','43% tardivi CD4<350.','23% CD4<200.','Testare la noi înregistrați și în urgență dacă >2/1000.','Textul citează 8% nediagnosticați și 23% cu CD4<200, nu zero.']],
 8,'Anulează 8% și 23% în favoarea unui screening inutil, trei procente din același bilanț 2017.',['8% din pacienţii','2/1.000']),

q(99,['Testele HIV de la domiciliu sau point-of-care, conform textului:',
 ['Datorită unei rate semnificative de rezultate fals pozitive, toate testele reactive trebuie urmate de serologie de confirmare și programare rapidă la specialist','Înlocuiesc serologia, fals-pozitivele fiind absente','Se interpretează doar din salivă, fără confirmare','Sunt interzise legislativ în Marea Britanie','Rezultatul telefonic înlocuiește evaluarea specialistului'],'A',1449,'Testare — Fals-pozitive la domiciliu și confirmare serologică',
 'Obligația confirmării serologice după un test reactiv de domiciliu/POC, din cauza fals-pozitivelor.',
 ['Textul: rată semnificativă de fals-pozitive; confirmare serologică și programare rapidă.','Nu înlocuiesc serologia.','Există teste din sânge sau salivă; confirmarea rămâne.','Modificările legislative au permis vânzarea truselor.','Specialistul rămâne necesar dacă infecția este confirmată.']],
 8,'Tratează testul de domiciliu ca diagnostic definitiv, tocmai capcana fals-pozitivului semnalată în text.',['fals pozitive','point-of-care']),

q(100,['PrEP și mesajul U=U, dincolo de circumcizia deja citată:',
 ['PrEP cu tenofovir-emtricitabină (TDF-FTC) oral, zilnic sau înainte de expunere, reduce riscul cu până la 90% dacă este luată constant, la BSB și heterosexuali','Studiile Partner 1 și 2 au raportat transmisie zero de la partenerul cu ARV și viremie nedetectabilă','Mesajul U=U (undetectable = untransmittable) evidențiază beneficiile testării și ale ARV','PrEP este ineficace sub 10% și se evită la heterosexuali','Partner 1/2 au arătat transmisie de 50%, identic circumciziei'],'ABC',1450,'Prevenție — PrEP TDF-FTC până la 90% și U=U',
 'Reducerea până la 90% a PrEP și transmisia zero din Partner, distinse de 50% al circumciziei.',
 ['TDF-FTC zilnic sau event-driven, până la 90%.','Partner 1 și 2: transmisie zero dacă nedetectabil.','U=U leagă testarea de ARV.','Textul: eficientă și la heterosexuali, până la 90%.','50% este reducerea prin circumcizie, nu rata de transmisie Partner.']],
 8,'Permutează 90% (PrEP) cu 50% (circumcizie) și neagă transmisia zero U=U.',['până la 90%','nedetectabil = netransmisibil']),

q(101,['Nu există nicio dovadă că HIV s-ar răspândi prin:',
 ['Contact social sau domestic ori insecte care se hrănesc cu sânge, cum ar fi țânțarii și tăunii','Acele contaminate ale consumatorilor de droguri i.v.','Sânge netestat și factori de coagulare înainte de 1985','Transmitere perinatală și alăptare','Contact heterosexual în Africa subsahariană'],'A',1428,'HIV — Absența transmiterii sociale și vectoriale',
 'Negarea explicită a contactului social/domestic și a vectorilor hematofagi, versus căile reale.',
 ['Textul neagă transmiterea socială/domestică și prin țânțari/tăuni.','Acele i.v. sunt o cale principală.','Transfuzia pre-1985 este recunoscută.','Calea verticală este reală.','Contactul heterosexual predomină în Africa.']],
 8,'Singura cale pe care textul o neagă (social/insecte) versus patru căi afirmate pe aceleași pagini de transmitere.',['ţânţarii şi tăunii','contact social sau domestic']),

q(102,['Pătrunderea HIV în limfocitul T CD4, conform figurii de replicare:',
 ['gp120 se leagă de CD4 și de co-receptorii CCR5 sau CXCR4; gp41 mediază fuziunea cu membrana','Revers-transcrierea produce ADN din ARN; ADN-ul se integrează în genomul gazdei','p24 (capsidă) poate monitoriza infecția; p17 este proteina-matrice','gp120 se leagă doar de CCR4, fără CD4, fuziunea fiind independentă de gp41','Integrarea este evitată, virusul rămânând epicitoplasmatic, fără revers-transcriptază'],'ABC',1428,'HIV — gp120/CCR5/CXCR4, gp41, p24/p17',
 'Cuplarea gp120–CD4–CCR5/CXCR4, fuziunea gp41 și markerii p24/p17.',
 ['Atașare gp120+CD4+CCR5/CXCR4; fuziune gp41.','RT apoi integrare.','p24 monitorizare; p17 matrice.','CCR5 sau CXCR4, nu „doar CCR4”; CD4 este receptorul.','Revers-transcriptaza și integrarea definesc retrovirusul.']],
 8,'Anulează CD4/gp41 și RT, adică tocmai schema din Fig. 37.10-37.11.',['CCR5 şi CXCR4','gp41'],[1429]),

q(103,['Profilaxia post-expunere (PEP):',
 ['Personalul cu expunere ocupațională și persoanele expuse sexual trebuie să primească PEP','Studiile pe animale susțin tripla terapie ca PEP, dar nu există studii prospective care să arate cea mai bună opțiune; fiecare situație se evaluează individual','PEP înlocuiește PrEP-ul zilnic la toți BSB, fără evaluarea riscului','PEP se administrează doar după 6 luni de la expunere, fereastra fiind depășită','Tripla terapie ca PEP este contraindicată, fiind rezervată primoinfecției'],'AB',1441,'PEP — Ocupațională și sexuală, triplă terapie fără studiu prospectiv',
 'Indicația dublă (ocupațional + sexual) și absența studiului prospectiv, cu tripla terapie susținută de modele animale.',
 ['Ocupațional și sexual: PEP.','Animale: triplă terapie; fără prospectiv uman definitiv.','PEP nu înlocuiește PrEP-ul ca strategie populațională.','Fereastra este imediată după expunere, nu la 6 luni.','Tripla este tocmai opțiunea susținută de modele.']],
 8,'Amână PEP-ul 6 luni și îl confundă cu PrEP/primoinfecția, trei ferestre distincte din capitol.',['Profilaxia post-expunere','triplei terapii']),

q(104,['Hepatita C acută la pacientul cu HIV, dincolo de DAA 12 săptămâni deja citate:',
 ['Ghidurile UK: dacă la 4 săptămâni de la diagnosticul infecției acute nu scade viremia VHC cu 2 log10, se începe DAA','Răspunsul imun nu protejează împotriva reinfecției; recăderea se tratează ca VHC cronică, reinfecția ca hepatită acută C','ARV-ul se amână 12 luni după DAA, elastografia fiind inutilă','Clearance-ul spontan conferă imunitate sterilizantă, fără reinfecție','DAA se evită la co-infectați, fiind rezervate monoinfecției VHC'],'AB',1446,'HIV/VHC acut — 2 log la 4 săptămâni și reinfecție versus recădere',
 'Regula 2 log10/4 săptămâni și distincția recădere (cronic) versus reinfecție (acut).',
 ['Fără scădere 2 log la 4 săptămâni → DAA.','Fără protecție la reinfecție; recădere=cronic, reinfecție=acut.','ARV se inițiază de preferință 4-6 săptămâni înainte de DAA; elastografie anuală dacă se temporizează.','Reinfecțiile sunt raportate după clearance spontan sau terapeutic.','Opțiunile DAA sunt similare monoinfecției, cu aviz de expert pentru interacțiuni.']],
 8,'Transformă absența imunității post-VHC în protecție sterilizantă și amână ARV-ul un an.',['4 săptămâni','reinfecţiei']),

q(105,['Sarcomul Kaposi epidemic și limfoamele, dincolo de HHV-8 deja asociat:',
 ['SK viscerale (ganglioni, plămâni, tract GI) au prognostic mai rezervat decât cele limitate la tegument; ARV favorizează regresia, radioterapia locală ajută cutanat/ganglionar, chimioterapia e pentru forme agresive','Limfoamele sunt frecvent NHL cu celulă mare B, extra-ganglionare (creier, plămân, GI), adesea EBV cu EBNA 1-6','Citologia cervicală anuală se recomandă femeilor cu HIV pentru modificări pre-neoplazice HPV','SK cutanat are prognostic mai grav decât cel visceral, ARV-ul fiind inutil','Limfoamele sunt indolente, fără sindroame B, EBV fiind absent'],'ABC',1449,'Neoplazii — SK visceral versus cutanat și NHL/EBV',
 'Gradientul prognostic visceral>cutanat, profilul NHL extra-ganglionar EBV și citologia cervicală anuală.',
 ['Visceral mai rezervat; ARV, RT locală, CT sistemică.','NHL B mare, extra-ganglionar, EBV/EBNA.','Citologie cervicală anuală.','Textul: visceral mai rezervat; ARV induce regresia.','Limfoamele sunt agresive, adesea cu sindroame B și EBV.']],
 8,'Inversează prognosticul SK visceral/cutanat și face limfomul indolent, două neoplazii de pe aceeași deschidere.',['prognostic mai rezervat','citologiei cervicale']),
];
