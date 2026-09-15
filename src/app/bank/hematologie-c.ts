import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=336?p-275:p-289;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hematologie',16,pdfOffset,`hematologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HEMATOLOGIE_C=[
q(50,['Aportul și absorbția fierului din dieta obișnuită din Marea Britanie, în datele capitolului, sunt:',
 ['Dieta zilnică obișnuită conține 15-20 mg de fier, din care, în mod normal, se absoarbe doar 10%','Absorbția poate fi crescută la 20-30% în deficiența de fier și sarcină','Majoritatea fierului din organism este sub forma ferică insolubilă (Fe3+), cu biodisponibilitate slabă; fierul feros (Fe2+) este absorbit mai ușor','Dieta zilnică furnizează 150-200 mg, absorbiți în totalitate ca Fe3+','Absorbția scade sub 1% în sarcină, forma ferică fiind cea mai bine absorbită'],'ABC',329,'Anemia microcitară — Aportul dietetic',
 'Reținerea cifrelor 15-20 mg / 10% / 20-30% și a biodisponibilității Fe2+ versus Fe3+.',
 ['Cifrele 15-20 mg și 10% sunt cele de deschidere.','Creșterea la 20-30% în carență și sarcină este explicită.','Predominanța Fe3+ insolubil și absorbția superioară a Fe2+ sunt din același paragraf.','150-200 mg este un ordin de mărime prea mare; absorbția totală ca Fe3+ contrazice textul.','În sarcină absorbția crește, iar Fe2+ este forma mai bine absorbită.']],
 8,'Distractorii umflă de zece ori aportul zilnic și inversează Fe2+ versus Fe3+.',['15-20 mg de fier','Fierul feros (Fe2+)']),

q(51,['Factorii care influențează absorbția fierului, conform Cadranului 16.3 și textului adiacent, includ:',
 ['Fierul heminic este absorbit mai bine decât fierul non-heminic; fierul feros este absorbit mai bine decât fierul feric','Aciditatea gastrică ajută la păstrarea fierului în stare feroasă și solubilă în intestinul superior','Absorbția este crescută la depozite scăzute și la activitate eritropoietică crescută (sângerare, hemoliză, altitudine mare) și scăzută în supraîncărcare, cu excepția hemocromatozei ereditare','Filatul sau fosfatul cresc absorbția prin formarea de complexe solubile','HCP1, transportorul de hem, este exprimat predominant în ileonul terminal, nu în duoden'],'ABC',329,'Cadranul 16.3 — Absorbția fierului',
 'Integrarea heminic/feros, a acidității gastrice și a reglatorilor de depozit/eritropoieză, distinct de fitat și de sediul HCP1.',
 ['Cele două ierarhii heminic>non-heminic și feros>feric deschid cadranul.','Rolul acidității gastrice este un rând separat.','Creșterea la depozite/eritropoieză și excepția hemocromatozei închid lista.','Fitatul/fosfatul formează complexe insolubile și scad absorbția.','HCP1 este foarte bine exprimat în duoden.']],
 8,'Distractorii inversează efectul fitatului și mută HCP1 de pe duoden pe ileon.',['Fierul heminic','HCP1'],[330]),

q(52,['Hepcidina, în reglarea absorbției fierului, se caracterizează prin:',
 ['Este o peptidă de 25 de aminoacizi sintetizată în ficat','Se leagă de feroportină, provocând internalizarea și degradarea ei, deci scăderea efluxului de fier în plasmă','Valorile crescute (inflamație, IL-6) limitează absorbția; nivelurile scăzute (anemie, depozite scăzute, hipoxie) o stimulează','Eritroferonul, produs de eritroblaste, scade hepcidina și crește feroportina în eritropoieza ineficientă (ex. talasemie)','Hepcidina este un hormon duodenal de 150 de aminoacizi care activează feroportina în inflamație'],'ABCD',330,'Hepcidina și feroportina',
 'Asocierea peptidei hepatice de 25 AA, a internalizării feroportinei, a IL-6 și a eritroferonului.',
 ['Originea hepatică și lungimea de 25 AA sunt definiția.','Internalizarea feroportinei este mecanismul.','Perechea IL-6 versus anemie/hipoxie este direcția de reglare.','Eritroferonul explică supraabsorbția din talasemie.','Hepcidina este hepatică, de 25 AA, și distruge feroportina, nu o activează.']],
 8,'Patru fapte din același paragraf; distractorul mută hepcidina în duoden și inversează efectul pe feroportină.',['25 aminoacizi','eritroferon']),

q(53,['Transportul fierului în plasmă, potrivit capitolului, se recunoaște prin:',
 ['Nivelul normal al fierului seric este de aproximativ 13-32 µmol/L, cu ritm diurn (mai crescut dimineața); valoarea este de mică utilitate clinică pentru depozite','Fierul este transportat legat de transferină; fiecare moleculă leagă doi atomi de fier feric și este saturată în mod normal în proporție de o treime','Fierul seric este markerul de elecție al depozitelor, transferina legând un singur atom de Fe2+ la saturație 90%','Cea mai mare parte a fierului de pe transferină provine din absorbția intestinală imediată, nu din reciclarerea macrofagică','La adultul bărbat se reciclează 2 mg/zi, fără participarea sistemului reticuloendotelial'],'AB',330,'Transportul în sânge',
 'Separarea ferestrei 13-32 µmol/L și a saturației de o treime de supraestimarea valorii fierului seric.',
 ['Intervalul, ritmul diurn și utilitatea redusă sunt din deschidere.','Doi atomi de Fe3+ și saturația de o treime definesc transferina.','Textul spune că fierul seric are mică utilitate; saturația uzuală este o treime, nu 90%.','Cea mai mare parte provine din macrofagele SRE, nu din intestin.','La bărbatul adult se reciclează 20 mg/zi din descompunerea hematiilor.']],
 8,'Distractorii inversează originea fierului de pe transferină (intestin versus SRE) și înlocuiesc 20 mg cu 2 mg.',['13-32','o treime']),

q(54,['Diagnosticul de laborator al carenței marțiale, în investigațiile din capitol, include:',
 ['Eritrocite microcitare (VEM <80 fL) și hipocrome (HEM <27 pg), cu poikilocitoză și anizocitoză','Saturația transferinei scade în mod regulat sub 19% în deficitul de fier; fierul seric nu ajută la evaluarea clinică a statusului marțial','Feritina serică: 30-300 µg/L la bărbați și 15-200 µg/L la femei; feritina scăzută confirmă deficitul simplu, dar ca proteină de fază acută poate fi normală sau ușor crescută în inflamație','VEM >96 fL și HEM >40 pg definesc carența marțială','Saturația transferinei peste 80% este criteriul de deficit, feritina fiind independentă de inflamație'],'ABC',331,'Investigații — Deficitul de fier',
 'Reținerea VEM <80 / HEM <27, a pragului de saturație <19% și a feritinei ca reactant de fază acută.',
 ['Pragurile microcitoză/hipocromie și variațiile de formă/mărime sunt din frotiu.','<19% este cifra cadranului; fierul seric este de mică utilitate.','Intervalele pe sexe și limita feritinei de fază acută sunt explicitate.','VEM >96 fL descrie macrocitoza, nu microcitoza feriprivă.','Pragul de deficit este sub 19%, nu peste 80%; feritina crește în inflamație.']],
 8,'Distractorii aplică pragurile de macrocitoză și de saturație înaltă asupra carenței marțiale.',['VEM <80 fl','sub 19%']),

q(55,['Identificați afirmația corectă referitoare la receptorii solubili ai transferinei în evaluarea depozitelor de fier:',
 ['Numărul de receptori eliberați în ser de eritroblaști crește în deficitul de fier; rezultatele sunt comparabile cu aspiratul medular și pot distinge carența de anemia din boli cronice, dar analiza nu este de obicei disponibilă în practica de rutină','Scad specific în anemia din boli cronice și înlocuiesc feritina ca test de primă linie în toate cabinetele','Rămân neschimbați în carența marțială, fiind utili doar în hemocromatoză','Sunt identici CTLF-ului, crescând în inflamație similar feritinei','Punția medulară este superfluă în toate cazurile, receptorii fiind disponibili universal'],'A',331,'Receptori solubili ai transferinei',
 'Recunoașterea creșterii în carență, a echivalenței cu aspiratul și a indisponibilității de rutină.',
 ['Creșterea, comparația cu aspiratul, distincția de anemia inflamatorie și limita de disponibilitate sunt din paragraf.','În anemia din boli cronice receptorii sunt normali, nu scăzuți specific; testul nu este de primă linie universală.','Cresc, nu rămân neschimbați, în deficitul de fier.','Cadranul 16.4 îi arată crescuți în carență și normali în anemia inflamatorie, opus feritinei de fază acută.','Textul spune că de obicei nu este disponibilă în practica de rutină.']],
 8,'Distractorii inversează direcția markerului și îl transformă într-un test universal de primă linie.',['receptori ai transferinei','puncţii medulare']),

q(56,['Tratamentul oral al deficitului de fier, în detaliile de protocol, include:',
 ['Hemoglobina crește cu aproximativ 10 g/L pe săptămână, în absența altor factori (ex. sângerare persistentă)','Cel mai eficient preparat este sulfatul feros; un comprimat de 200 mg furnizează 60 mg de fier elementar','Optimizarea absorbției: suc de portocale (vitamina C reduce Fe3+ la Fe2+); taninurile din ceai inhibă absorbția și trebuie evitate; durata poate ajunge la 6 luni','Doza standard de 200 mg × 3/zi nu asociază reacții digestive, complianța fiind aproape completă','Răspunsul hematologic la fierul parenteral este mai rapid decât la cel oral, depozitele reîncărcându-se mai lent'],'ABC',332,'Tratament — Fier oral',
 'Reținerea ritmului 10 g/L/săptămână, a sulfatului feros 200/60 mg și a ferestrei vitamina C versus ceai, pe 6 luni.',
 ['10 g/L pe săptămână este ritmul citat.','Sulfatul feros 200 mg = 60 mg elementar este preparatul de referință.','Sucul de portocale, taninurile și cele 6 luni completează protocolul.','Efectele digestive sunt extrem de frecvente, iar complianța este redusă.','Depozitele se reîncarcă mai repede parenteral, dar răspunsul hematologic nu este mai rapid.']],
 8,'Distractorii neagă reacțiile digestive și inversează viteza hematologică parenteral versus oral.',['10 g/L pe săptămână','sulfatul feros']),

q(57,['Anemia din bolile cronice, în mecanismul și profilul de laborator din capitol, se caracterizează prin:',
 ['Scăderea eliberării fierului din depozitele medulare, răspuns inadecvat al eritropoietinei și scurtarea supraviețuirii hematiilor; hepcidina crescută (IL-6) sechestrează fierul','Fier seric și CTLF scăzute, feritină normală sau crescută, receptori solubili ai transferinei normali; pacienții nu răspund la fier oral','Fier seric crescut, CTLF crescută, feritină scăzută, ca în carența marțială simplă','Răspuns prompt la sulfat feros oral, hepcidina fiind scăzută în inflamație','Colorația medulară arată absența completă a fierului, identic carenței marțiale'],'AB',332,'Anemia din bolile cronice',
 'Contrastarea triadei hepcidină/EPO/supraviețuire și a profilului CTLF↓/feritină N-↑ de carența marțială.',
 ['Cele trei mecanisme plus IL-6/hepcidină sunt din paragraf.','Profilul de laborator și absența răspunsului oral sunt din închidere.','Acesta este profilul carenței marțiale, nu al anemiei inflamatorii.','Hepcidina crește în inflamație; răspunsul oral lipsește.','Fierul este prezent în frotiul medular, dar absent din eritroblaști.']],
 8,'Distractorii aplică profilul feripriv (CTLF↑, feritină↓, răspuns oral) asupra anemiei inflamatorii.',['hepcidinei','CTLF']),

q(58,['Anemia megaloblastică, în investigațiile de deschidere, se recunoaște prin:',
 ['VEM de cele mai multe ori peste 96 fL, exceptând coexistența unei microcitoze, când poate exista dismorfism cu VEM mediu normal','Frotiul: macro-ovalocite și neutrofile hipersegmentate (șase sau mai mulți lobi)','LDH de obicei crescută, uneori extrem, reflectând eritropoieza ineficientă; în forme severe pot apărea leucopenie și trombocitopenie','Mecanismul comun B12/folat: blocarea metilării deoxiuridil-monofosfatului la deoxitimidil-monofosfat','VEM sub 80 fL cu neutrofile binucleate, LDH scăzută și eritropoieză eficientă'],'ABCD',333,'Anemia megaloblastică — Investigații',
 'Integrarea VEM >96 fL, a hipersegmentării cu ≥6 lobi, a LDH și a blocului dUMP→dTMP.',
 ['Pragul 96 fL și excepția dismorfismului sunt din listă.','Macro-ovalocitele și cei ≥6 lobi sunt descrierea frotiului.','LDH și citopeniile completează gravitatea.','Blocul de metilare este baza biochimică.','VEM <80 fL este al microcitozei; LDH este crescută, nu scăzută.']],
 8,'Distractorul aplică pragul de microcitoză și inversează LDH-ul asupra megaloblastozei.',['peste 96 fL','şase sau mai mulţi lobi']),

q(59,['Absorbția și transportul vitaminei B12, în detaliile din capitol, includ:',
 ['După eliberarea din alimente și de pe liantul R (prin enzime pancreatice), B12 se leagă de factorul intrinsc (glicoproteină 45 kDa a celulelor parietale) și este transportată la cubilină, pe mucoasa ileală','Transportul ulterior se face prin transcobalamina II (holotranscobalamină, „B12 activă”); totuși, 70-90% din B12 plasmatică este legată de TCI','Aproximativ 1% din doza orală se absoarbe pasiv, fără factor intrinsc','Factorul intrinsc este secretat de ileon, cubilina fiind un receptor gastric','TCI este singurul transportor esențial, holotranscobalamina fiind forma inactivă'],'ABC',334,'Vitamina B12 — Absorbție și transport',
 'Secvența liant R → FI 45 kDa → cubilină ileală → TCII, cu predominanța cantitativă a TCI (70-90%).',
 ['Secvența pancreatică, FI 45 kDa și cubilina ileală sunt din paragraf.','TCII ca formă activă și 70-90% pe TCI sunt explicitate.','Absorbția pasivă de 1% este cifra de închidere.','FI este gastric parietal; cubilina este ileală.','TCII este transportorul esențial, deși cantitativ minor; holotranscobalamina este forma activă.']],
 8,'Distractorii inversează sediul FI/cubilină (gastric versus ileal) și rolul TCI versus TCII.',['cubilina','holotranscobalamină']),

q(60,['Anemia pernicioasă, în datele serologice și de risc din capitol, se caracterizează prin:',
 ['Anticorpi anti-celulă parietală la 90% dintre pacienți (dar și la 10% dintre indivizii normali); anticorpii anti-factor intrinsc, deși prezenți doar la 50%, sunt specifici diagnosticului','Asociere cu boli autoimune (tiroidă, Addison, vitiligo); circa 50% au anticorpi antitiroidieni; incidența carcinomului gastric este 1-3%','Este rară la vârstnici (1 din 80 000 peste 60 de ani), predominantă la bărbați, fără asociere autoimună','Anticorpii anti-FI sunt prezenți la 90% și nespecifici, cei anti-parietali fiind patognomonici la 10%','Carcinomul gastric este absent, riscul fiind identic populației generale'],'AB',334,'Anemia pernicioasă — Patogeneză',
 'Contrastarea sensibilității 90% a anti-parietalilor de specificitatea anti-FI de 50%, plus riscul gastric 1-3%.',
 ['Perechea 90%/10% versus 50% specifici este din paragraf.','Asocierile autoimune, 50% antitiroidieni și 1-3% cancer gastric completează riscul.','Textul dă 1 din 8 000 peste 60 de ani și predominanță feminină.','Sensibilitatea și specificitatea celor doi anticorpi sunt inversate.','Incidența gastrică este mai mare (1-3%) decât în populația generală.']],
 8,'Distractorii inversează 90% versus 50% între anti-parietal și anti-FI și anulează riscul de carcinom gastric.',['90% dintre pacienţii','1-3%']),

q(61,['Pragul de folat seric care indică deficitul, potrivit investigațiilor bioumorale, este:',
 ['Sub 3 µg/L (7 nmol/L)','Sub 150 µg/L la nivel seric, identic folatului eritrocitar','Peste 30 µg/L, ca marker de supraîncărcare','Identic pragului de B12 (160 ng/L)','Folatul seric nu se dozează, fiind înlocuit de MMA'],'A',335,'Deficitul de folat — Investigații',
 'Reținerea pragului seric <3 µg/L (7 nmol/L), distinct de folatul eritrocitar <150 µg/L.',
 ['<3 µg/L (7 nmol/L) este cifra de deficit seric.','150 µg/L (340 nmol/L) este pragul din hematie, nu din ser.','Peste 30 µg/L nu este pragul de deficit.','160 ng/L este limita inferioară a B12, nu a folatului.','Folatul seric este de obicei suficient pentru diagnostic; MMA ține de B12.']],
 8,'Distractorii mută pragul eritrocitar 150 µg/L sau pe cel de B12 asupra folatului seric.',['sub 3 µg/L','7 nmol/L']),

q(62,['Tratamentul deficitului de vitamină B12 cu hidroxicobalamină, în schema din capitol, include:',
 ['1 000 µg intramuscular, cu un maxim de 5-6 mg în 2 săptămâni, apoi 1 000 µg la fiecare 3 luni, pe viață','Reticulocitoză la circa 2-3 zile, maxim la 5-7 zile; ameliorare clinică posibilă în 48 de ore','Polineuropatia se poate ameliora în 6-12 luni, dar afectarea îndelungată a măduvei este ireversibilă; pot apărea hipokaliemie și deficit de fier în primele săptămâni','Doza unică orală de 50 µg înlocuiește schema intramusculară la toți pacienții cu AP','Reticulocitoza lipsește, neuropatia rezolvându-se în 48 de ore, fără risc de hipokaliemie'],'ABC',336,'Tratamentul deficitului de vitamină B12',
 'Reținerea schemei 1 000 µg / 5-6 mg / 3 luni și a cineticii reticulocitare 2-3 apoi 5-7 zile.',
 ['Dozele și ritmul pe viață sunt protocolul.','Cinetica 48 ore / 2-3 zile / 5-7 zile este din supraveghere.','Fereastra 6-12 luni, ireversibilitatea medulară și hipokaliemia/fierul completează.','Schema IM pe viață este cea detaliată; 50 µg oral nu o înlocuiește în AP.','Reticulocitoza este așteptată; 48 de ore nu vindecă neuropatia.']],
 8,'Distractorii comprimă schema IM la 50 µg oral și mută rezoluția neuropatiei la 48 de ore.',['Hidroxicobalamina','5-7 zile']),

q(63,['Hemoglobinuria paroxistică nocturnă, în mecanismul molecular, se caracterizează prin:',
 ['Mutații PIG-A X-linkate, cu sinteză defectuoasă a ancorei GPI','Absența CD55 (DAF) și CD59 (MIRL), care degradează complementul la C3 și C5','Hemoliză intravasculară, tromboză venoasă (Budd-Chiari, vene cerebrale/mezenterice) și hemoglobinurie, adesea precipitată de infecții, fier sau chirurgie','Flow-citometrie cu anti-CD55/CD59; măduva poate fi hipoplazică sau aplazică, în ciuda hemolizei','Defect al spectrinei, cu sferocitoză ereditară și complement intact'],'ABCD',354,'HPN — Mecanism și clinică',
 'Asocierea PIG-A/GPI, a CD55/CD59, a triadei hemoliză-tromboză-hemoglobinurie și a flow-citometriei.',
 ['PIG-A X-linkat și GPI sunt defectul primar.','CD55 și CD59 lipsesc de pe membrană.','Triada clinică și precipitanții sunt din tabloul clinic.','Flow-citometria și hipoplazia medulară sunt investigațiile.','Spectrina ține de sferocitoza ereditară, nu de HPN.']],
 8,'Distractorul mută defectul pe spectrină, în timp ce celelalte opțiuni cer simultan PIG-A, CD55/59 și siturile atipice de tromboză.',['PIG-A','CD59'],[355]),

q(64,['Cauzele anemiei hemolitice mecanice, enumerate în capitol, includ:',
 ['Valve cardiace artificiale disfuncționale','Hemoglobinuria de maraton, prin distrugere eritrocitară la nivelul membrelor inferioare asociată alergării','Anemia hemolitică microangiopatică (MAHA) din hipertensiune malignă, eclampsie, SUH, PTT, vasculită sau CID','Deficitul de G6PD ca leziune mecanică de valvă','Koilonichia feriprivă ca fragmentare intravasculară de maraton'],'ABC',355,'Anemia hemolitică mecanică',
 'Recunoașterea triadei valvă / maraton / MAHA, distinct de enzimopatii și de semnele feriprive.',
 ['Valvele disfuncționale deschid lista.','Hemoglobinuria de maraton este al doilea exemplu.','Lista MAHA (malignă, eclampsie, SUH, PTT, vasculită, CID) o închide.','G6PD este enzimopatie, nu traumă mecanică.','Koilonichia este semn de carență marțială, nu mecanism de fragmentare.']],
 8,'Distractorii reintroduc G6PD și koilonichia într-o listă de hemolize prin traumă fizică.',['hemoglobinurie de maraton','microangiopatică']),
];
