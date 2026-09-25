import {rewriter} from './rewrite-author';
import {RETIRED_HEMOSTAZA} from './retired/hemostaza';

// Rewritten after the 2026-09-24 cue audit: options are short continuations of the
// stem (exam-copy format), distractors are near-miss facts from the same pages.
const q=rewriter(RETIRED_HEMOSTAZA,(p:number)=>p-26);

export const HEMOSTAZA_V2=[
q('hemostaza-adv-001',['Hemofilia A se caracterizează prin:',
 ['sângerări articulare și intramusculare','transmitere autosomal-dominantă','funcție trombocitară normală','aPTT prelungit și PT normal','activitate redusă a factorului von Willebrand'],'ACD',39,'Tabelul 4-2 — Tulburări congenitale ale hemostazei',
 'Separarea profilului hemofiliei A de cel al bolii von Willebrand.',
 ['Tabelul 4-2: sângerarea din hemofilia A este articulară și intramusculară.','Transmiterea autosomal-dominantă aparține bolii von Willebrand; hemofilia A este X-linkată.','Funcția trombocitară este normală în hemofilia A și anormală în boala von Willebrand.','Ambele boli au aPTT prelungit și PT normal.','Activitatea redusă a factorului von Willebrand definește boala von Willebrand.']],
 [8,'Distractorii mută trăsături reale ale bolii von Willebrand pe hemofilia A.'],['Autosomal-dominantă','intramuscular']),

q('hemostaza-adv-002',['Printre cauzele tulburărilor dobândite ale hemostazei (Tabelul 4-3) se numără:',
 ['mutația 20210 a protrombinei','bolile hepatice avansate','suplimentele din plante','hiperhomocisteinemia','deficitul congenital de factor VIII'],'BC',40,'Tabelul 4-3 — Cauze ale tulburărilor dobândite ale hemostazei',
 'Separarea cauzelor dobândite de hemoragie de defectele congenitale și de stările protrombotice.',
 ['Mutația protrombinei figurează la stările de hipercoagulabilitate (Tabelul 4-5).','Bolile hepatice avansate sunt prima cauză din Tabelul 4-3.','Medicația fără prescripție, de exemplu suplimentele din plante, este listată.','Hiperhomocisteinemia este o cauză de tromboză, nu de sângerare.','Deficitul de factor VIII este congenital (hemofilia A, Tabelul 4-2).']],
 [8,'Alternativele sunt entități reale din capitol, dar din tabelele congenitale sau protrombotice.'],['Boli hepatice avansate','suplimente din plante']),

q('hemostaza-adv-003',['În protocoalele de transfuzie masivă din resuscitarea de control lezional:',
 ['raportul plasmă:trombocite:MER este 1:1:1','calciul se administrează la fiecare 10 unități de MER','factorul VIIa recombinant scade semnificativ mortalitatea','calciul se administrează la fiecare 2 unități de MER','trombelastografia poate ghida resuscitarea'],'ADE',41,'Resuscitarea de control lezional — Protocoalele de transfuzie masivă',
 'Aplicarea raportului 1:1:1, a ritmului de administrare a calciului și a rolului adjuvanților.',
 ['Raportul optim plasmă:trombocite:MER este 1:1:1.','Zece unități definesc hemoragia masivă; calciul se dă la fiecare 2 unități.','rFVIIa poate reduce transfuziile, fără beneficiu semnificativ asupra mortalității.','Calciu suplimentar trebuie administrat la fiecare 2 unități de MER.','Trombelastografia este adjuvantul care ghidează resuscitarea.']],
 [8,'Confundă pragul de 10 unități al definiției cu ritmul calciului și efectul rFVIIa asupra transfuziilor cu cel asupra mortalității.'],['fiecare 2 unităţi de MER','trombelastografia'],[40]),

q('hemostaza-adv-004',['Chirurgia de control lezional presupune:',
 ['reconstrucția anatomică definitivă din primul timp','o intervenție inițială abreviată','oprirea sângerării și a contaminării bacteriene','resuscitare volemică agresivă precoce cu cristaloide','proceduri definitive după stabilizarea în terapie intensivă'],'BCE',41,'Resuscitarea de control lezional — Chirurgia de control lezional',
 'Recunoașterea etapelor chirurgiei de control lezional și a principiilor RCL asociate.',
 ['Reconstrucția definitivă este amânată până după stabilizare.','Intervenția inițială este abreviată.','Scopul ei este oprirea sângerării și a contaminării bacteriene în desfășurare.','RCL întârzie resuscitarea volemică agresivă și limitează cristaloidele (hipotensiune permisivă).','Procedurile definitive urmează după resuscitare și stabilizare în terapie intensivă.']],
 [8,'Distractorii inversează ordinea etapelor și principiul hipotensiunii permisive.'],['intervenţie iniţială abreviată','hipotensiune permisivă']),

q('hemostaza-adv-005',['Transfuzia de masă trombocitară:',
 ['este indicată în sângerări asociate disfuncției plachetare','crește trombocitele cu 50.000–100.000/µL după 6 unități','crește trombocitele cu 50.000–100.000/µL după o unitate','folosește suspensii lipsite complet de plasmă','are un efect dependent de greutatea pacientului'],'ABE',44,'Transfuzia de masă trombocitară',
 'Aplicarea indicației și a răspunsului cantitativ așteptat după transfuzia de trombocite.',
 ['Indicația include sângerarea cu trombocitopenie relativă prin disfuncție plachetară.','La o transfuzie obișnuită de 6 unități se așteaptă o creștere cu 50.000–100.000/µL.','Creșterea de 50.000–100.000/µL corespunde a 6 unități, nu uneia.','Suspensiile conțin o cantitate de plasmă și câteva eritrocite sau leucocite.','Efectul depinde și de greutatea pacientului și de numărul de concentrate.']],
 [8,'Aceeași valoare numerică apare cu două doze diferite; se cere asocierea exactă.'],['50.000-100.000','greutatea pacientului']),

q('hemostaza-adv-006',['Referitor la triada letală a pacientului traumatizat:',
 ['hipotermia este definită de o temperatură centrală <35°C','acidoza este definită de un pH <7,20','hipotermia este prezentă la 10% dintre pacienți la prezentare','hipotermia exclude prezența unor semne vitale normale','hipotermia inhibă factorii de coagulare'],'AE',44,'Tulburări metabolice — Triada letală',
 'Fixarea definițiilor componentelor triadei letale și a efectelor hipotermiei.',
 ['Hipotermia este definită ca temperatură centrală <35°C.','Acidoza este definită prin pH <7,35.','Nu: hipotermia este observată la 50% dintre pacienți la prezentare.','Hipotermia poate fi prezentă la un pacient cu semne vitale normale.','Hipotermia alterează funcția trombocitară și inhibă factorii de coagulare.']],
 [8,'Pragurile de pH și temperatură sunt apropiate; distractorul clinic inversează o afirmație explicită.'],['semne vitale','50% dintre pacienţii']),

q('hemostaza-adv-007',['Leziunea pulmonară acută asociată transfuziei (LPAT) se caracterizează prin:',
 ['edem pulmonar cardiogen prin supraîncărcare volemică','debut tipic la câteva săptămâni după transfuzie','edem pulmonar noncardiogen după transfuzie','hemoliză intravasculară prin incompatibilitate ABO','incidență de circa 1 la 50.000 de transfuzii'],'C',45,'Complicații pulmonare — LPAT',
 'Diferențierea LPAT de supraîncărcarea volemică, de GVHD și de reacția hemolitică.',
 ['Edemul din LPAT este noncardiogen; supraîncărcarea volemică este o complicație separată.','Debutul la săptămâni caracterizează boala grefă contra gazdă.','LPAT este definită de edemul pulmonar noncardiogen apărut după transfuzie.','Hemoliza ABO definește reacția hemolitică acută.','Incidența LPAT este de 1 la 5.000 de transfuzii.']],
 [8,'Fiecare distractor descrie o altă complicație transfuzională reală sau o incidență deplasată cu un ordin de mărime.'],['noncardiogen','5.000 de transfuzii']),

q('hemostaza-adv-008',['Tulburările preexistente ale hemostazei trebuie suspectate când hemoragia anormală apare:',
 ['la 3–5 zile postoperator','în primele 30 de minute ale intervenției','după primele 24 de ore postoperator','după transfuzia a peste 10 unități MER','la 1–2 ore după începerea transfuziei'],'B',39,'Cauze de hemoragii chirurgicale excesive — Tulburări preexistente',
 'Recunoașterea ferestrei de 30 de minute ca indiciu de coagulopatie preexistentă.',
 ['Sângerarea la 3–5 zile evocă deficitul de factor XIII.','Textul: hemoragia anormală în primele 30 de minute ale intervenției sugerează o tulburare preexistentă.','Sângerarea tardivă nu este criteriul citat pentru tulburarea preexistentă.','Zece unități de MER definesc hemoragia masivă, nu o coagulopatie preexistentă.','Intervalul de 1–2 ore este fereastra de debut a LPAT.']],
 [8,'Toate variantele sunt intervale temporale reale din capitol, legate de alte entități.'],['primele 30 de','Tulburări preexistente']),

q('hemostaza-adv-009',['Conform datelor din Tabelul 4-2 privind tulburările congenitale ale hemostazei:',
 ['hemofilia A are o incidență de 25 la 100.000 de locuitori','boala von Willebrand afectează circa 1% din populație','hemofilia A afectează circa 1% din populație','în boala von Willebrand activitatea factorului VIII este redusă','în hemofilia A moleculele de factor VIII lipsesc complet'],'ABD',39,'Tabelul 4-2 — Tulburări congenitale ale hemostazei',
 'Contrastarea incidenței și a fiziopatologiei hemofiliei A cu boala von Willebrand.',
 ['Incidența hemofiliei A: 25 la 100.000 de locuitori în SUA.','Boala von Willebrand: 1% din populația SUA.','Proporția de 1% aparține bolii von Willebrand.','În boala von Willebrand sunt reduse activitatea factorului VIII și cea a factorului von Willebrand.','În hemofilia A moleculele de factor VIII sunt prezente, cu activitate redusă sau absentă.']],
 [8,'Cifrele celor două boli sunt permutate, iar distractorul fiziopatologic confundă activitatea cu prezența moleculei.'],['25 la 100.000','din populaţia']),

q('hemostaza-adv-010',['Hemoragia masivă poate fi definită prin:',
 ['transfuzia a cel puțin 10 unități de MER în 24 de ore','înlocuirea întregului volum circulant în 4 ore','înlocuirea a >50% din volumul circulant în 24 de ore','o rată a sângerării >150 mL/minut cu instabilitate hemodinamică','transfuzia a cel puțin 4 unități de MER în 24 de ore'],'AD',40,'Hemoragia masivă — Definiții',
 'Aplicarea exactă a pragurilor care definesc hemoragia masivă.',
 ['Pragul de cel puțin 10 unități de MER în 24 de ore este citat.','Înlocuirea întregului volum circulant este raportată la 24 de ore, nu la 4 ore.','Înlocuirea a >50% din volum este raportată la 4 ore, nu la 24 de ore.','Rata >150 mL/minut cu instabilitate hemodinamică este o definiție citată.','Patru unități sunt raportate la o oră, nu la 24 de ore.']],
 [8,'Distractorii păstrează valorile corecte, dar schimbă intervalul de timp asociat.'],['150 mL/minut','întregului volum circulator']),

q('hemostaza-adv-011',['Acidul tranexamic (TXA):',
 ['inhibă competitiv activarea plasminogenului la plasmină','este recomandat condiționat în primele 3 ore de la leziune','favorizează coagularea prin activarea factorului VII','este indicat la hemofilici pentru extracții dentare','este recomandat după 12 ore de la leziune'],'ABD',41,'Resuscitarea de control lezional — Adjuvanții PTM',
 'Recunoașterea mecanismului, a ferestrei terapeutice și a indicațiilor TXA.',
 ['TXA inhibă competitiv activarea plasminogenului la plasmină (efect antifibrinolitic).','TXA este recomandat condiționat când este utilizat în primele 3 ore de la leziune.','Favorizarea coagulării este efectul rFVIIa, alt adjuvant PTM.','TXA este indicat în sângerările la extracții dentare la hemofilici.','Profilul favorabil este descris pentru administrarea în primele 3 ore.']],
 [8,'Confundă mecanismul TXA cu al rFVIIa și fereastra de 3 ore cu o administrare tardivă.'],['plasminogenului la plasmină','extracţii dentare']),

q('hemostaza-adv-012',['Deficitul de factor XIII, cauză de hemoragie postoperatorie, se caracterizează prin:',
 ['sângerare întârziată, la 3–5 zile după intervenție','sângerare în primele 30 de minute ale intervenției','corectare prin vitamina K administrată postoperator','hemoragii cu debit scăzut după bypass cardiopulmonar','diagnostic prin prelungirea izolată a PT'],'A',41,'Hemoragii postoperatorii — Deficitul de factor XIII',
 'Separarea deficitului de factor XIII de alte cauze de hemoragie postoperatorie.',
 ['Sângerarea apare la 3–5 zile după intervenție.','Primele 30 de minute sugerează o tulburare preexistentă a hemostazei.','Vitamina K previne deficitul factorilor II, VII, IX și X, nu al factorului XIII.','Hemoragiile cu debit scăzut după bypass sunt atribuite heparinei reziduale.','Diagnosticul se confirmă prin evaluarea factorului XIII.']],
 [8,'Fiecare distractor este o cauză reală de sângerare postoperatorie din același paragraf.'],['3-5 zile după intervenţie','postoperatorii întârziate']),

q('hemostaza-adv-013',['Conform Tabelului 4-5, sunt cauze de tromboză venoasă:',
 ['factorul V Leiden','activitatea crescută a PAI-1','deficitul de proteină S','deficitul de factor XII','deficitul de tPA'],'ACD',42,'Tabelul 4-5 — Stările de hipercoagulabilitate după sediul trombozei',
 'Separarea cauzelor de tromboză venoasă de cele de tromboză arterială din Tabelul 4-5.',
 ['Factorul V Leiden este cauza venoasă frecventă.','Activitatea crescută a PAI-1 este o cauză rară de tromboză arterială.','Deficitul de proteină S figurează în coloana trombozei venoase.','Deficitul de factor XII figurează în coloana trombozei venoase.','Deficitul de tPA figurează în coloana trombozei arteriale.']],
 [8,'Distractorii sunt defecte ale fibrinolizei listate în coloana arterială a aceluiași tabel.'],['FactorV Leiden','Deficit de factor XII']),

q('hemostaza-adv-014',['O unitate tipică de masă eritrocitară:',
 ['conține circa 200 mL de plasmă','se conservă la temperatura de 1–6°C','crește hemoglobina cu 3 g/dL','are un hematocrit de aproximativ 57%','se păstrează aproximativ 21 de zile'],'BD',43,'Transfuzia de eritrocite',
 'Fixarea parametrilor de conservare și a efectului unei unități de MER.',
 ['O unitate conține circa 200 mL de eritrocite și 30 mL de plasmă.','Pungile de MER sunt conservate la 1–6°C.','Creșterea așteptată este de 3% pentru hematocrit și 1 g/dL pentru hemoglobină.','Hematocritul unei unități tipice este de aproximativ 57%.','Durata de viață a eritrocitelor conservate este de aproximativ 42 de zile.']],
 [8,'Distractorii inversează volumele eritrocite/plasmă și unitățile de creștere Ht/Hb.'],['conservate la','30 mL de plasmă']),

q('hemostaza-adv-015',['Reacțiile febrile transfuzionale:',
 ['sunt cele mai frecvente reacții imunologice de transfuzie','apar de obicei prin anticorpi antileucocitari','impun continuarea transfuziei sub antipiretice','pot fi prevenite prin masă eritrocitară iradiată','apar de obicei prin incompatibilitate ABO'],'AB',44,'Reacții imunologice de transfuzie — Reacțiile febrile',
 'Recunoașterea frecvenței, mecanismului și conduitei în reacțiile febrile.',
 ['Reacțiile febrile sunt cele mai frecvente reacții imunologice de transfuzie.','Ele apar de obicei ca urmare a anticorpilor antileucocitari.','Transfuzia trebuie oprită; antipireticele se dau preventiv, înaintea transfuziei.','Nu: deleucocitarea previne reacția febrilă; iradierea previne boala grefă contra gazdă.','Incompatibilitatea ABO este mecanismul reacției hemolitice acute.']],
 [8,'Distractorii preiau mecanismul reacției hemolitice și rolul preventiv al antipireticelor.'],['cele mai frecvente reacţii imunologice','Transfuzia trebuie oprită'],[45]),

q('hemostaza-adv-016',['Conform capitolului, decizia de transfuzie de masă eritrocitară:',
 ['se bazează pe un prag unic de hemoglobină','este individualizată după nevoile fiziologice','este indicată de anemia izolată la majoritatea pacienților','nu ține cont de caracterul acut sau cronic al anemiei','se face preferențial cu sânge integral în anemia cronică'],'B',43,'Transfuzia de eritrocite — Factori ce indică necesitatea transfuziei',
 'Recunoașterea deciziei multifactoriale și individualizate de transfuzie.',
 ['Decizia este multifactorială, nu un prag unic.','Decizia se ia pe baza nevoilor fiziologice individuale și a circumstanțelor clinice.','Anemia izolată nu este o indicație de transfuzie la majoritatea populației.','Gradul și caracterul acut sau cronic al anemiei sunt factori listați.','Sângele integral nu are indicații ferme în afara volumului important sau a indisponibilității componentelor.']],
 [8,'Distractorii contrazic câte un factor enumerat explicit în capitol.'],['anemia izolată','transplant tisular']),

q('hemostaza-adv-017',['Conform Tabelului 4-4, activitatea anti-Xa este testul de monitorizare pentru:',
 ['warfarina (Coumadin)','heparina cu greutate moleculară mică','rivaroxabanul (Xarelto)','dabigatranul (Pradaxa)','heparina nefracționată'],'BCE',40,'Tabelul 4-4 — Mecanisme de acțiune și teste de monitorizare',
 'Asocierea anticoagulantelor cu testul de monitorizare din Tabelul 4-4.',
 ['Warfarina se monitorizează prin PT/INR.','HGMM (inhibare Xa) se monitorizează prin activitatea anti-Xa.','Rivaroxabanul este inhibitor de Xa, monitorizat prin anti-Xa.','Dabigatranul inhibă trombina și se monitorizează prin aPTT/TT.','Heparina nefracționată se monitorizează prin aPTT sau activitatea anti-Xa.']],
 [8,'Distractorii sunt anticoagulante din rândurile vecine ale aceluiași tabel.'],['Activitatea anti-Xa','rivaroxaban (Xarelto)']),

q('hemostaza-adv-018',['În coagularea intravasculară diseminată (CID) postoperatorie:',
 ['aPTT și PT sunt prelungite','fibrinogenul este crescut ca reactant de fază acută','crioprecipitatul corectează cel mai bine deficitul de fibrinogen','tratamentul principal este eliminarea factorului etiologic','plasma proaspăt congelată se dă cu prudență la risc de supraîncărcare volemică'],'ACDE',41,'Coagulare intravasculară diseminată',
 'Aplicarea profilului de laborator și a principiilor de substituție în CID.',
 ['aPTT și PT prelungite sunt primele probe listate.','CID produce hipofibrinogenemie.','Crioprecipitatul este cea mai bună metodă de compensare a deficitului de fibrinogen.','Cel mai important aspect al tratamentului este eliminarea factorilor etiologici.','PPC este utilă pentru alte deficite, cu atenție dacă supraîncărcarea volemică este o problemă.']],
 [8,'Singurul distractor inversează direcția fibrinogenului; restul cer recunoașterea ierarhiei terapeutice.'],['hipofibrinogenemie','Crioprecipitatul']),

q('hemostaza-adv-019',['Fibrinoliza primară:',
 ['este cel mai frecvent un răspuns la CID','apare după terapia cu activator tisular al plasminogenului','se remite lent, agenții litici având timp de înjumătățire de zile','apare în chirurgia prostatei, organ bogat în urokinază','poate fi tratată cu EACA, fără risc trombotic'],'BD',42,'Tulburări de sângerare cauzate de creșterea fibrinolizei',
 'Contrastarea fibrinolizei primare cu fibrinoliza secundară din CID.',
 ['Răspunsul la CID definește fibrinoliza secundară.','Fibrinoliza primară apare obișnuit după terapia fibrinolitică cu activator tisular al plasminogenului.','Timpul de înjumătățire al agenților litici este de minute; sângerarea se oprește rapid.','Prostata este un organ bogat în urokinază.','Nu: EACA se folosește în forma severă, cu atenție la riscul trombotic.']],
 [8,'Distractorii transferă trăsături ale fibrinolizei secundare și inversează cinetica agenților litici.'],['urokinază','evenimente trombotice'],[41]),

q('hemostaza-adv-020',['La femeia gravidă, conform capitolului:',
 ['nivelurile factorului VIII și fibrinogenului sunt crescute','riscul trombotic este maxim în primul trimestru de sarcină','tromboza și embolia pulmonară sunt principalele cauze de deces','heparinele reprezintă tratamentul anticoagulant electiv','există o anemie relativă prin creșterea volumului sanguin'],'ACDE',43,'Cazuri particulare — Sarcina',
 'Recunoașterea statusului procoagulant al sarcinii și a anticoagulării elective.',
 ['Nivelurile factorului VIII, fibrinogenului și ale altor factori sunt crescute.','Riscul este maxim în trimestrul al treilea și după naștere.','Tromboza și embolia pulmonară sunt principalele cauze de deces la gravide.','HGMM și heparina nefracționată sunt tratamentul anticoagulant electiv.','Creșterea volumului sanguin circulant se asociază cu o anemie relativă.']],
 [8,'Singurul distractor deplasează vârful de risc trombotic din trimestrul al treilea.'],['al treilea trimestru','anticoagulant electiv']),

q('hemostaza-adv-021',['La pacienții cu afecțiuni hepatice sau renale, conform capitolului:',
 ['transaminazele sunt utile pentru aprecierea coagulopatiei','INR monitorizează funcția de sinteză hepatică','hemoragia și hipercoagulabilitatea pot coexista','dializa corectează parțial problemele hemoragice','dializa crește riscul de evenimente trombotice'],'BCDE',43,'Cazuri particulare — Afecțiuni hepatice și renale',
 'Interpretarea coagulopatiei hepatice și a efectelor duble ale dializei.',
 ['Bilirubina, amoniemia și transaminazele nu sunt măsurători utile ale coagulopatiei.','Măsurarea INR monitorizează funcția de sinteză hepatică.','Dezechilibrul dublu permite hemoragie, hipercoagulabilitate sau ambele simultan.','Dializa poate ajuta la corectarea problemelor, dar nu le poate elimina.','Contactul trombocitelor cu suprafețele sintetice crește riscul trombotic.']],
 [8,'Cere recunoașterea paradoxurilor explicite: hemoragie plus tromboză și dializa cu efect dublu.'],['Măsurarea INR','dezechilibru dublu']),

q('hemostaza-adv-022',['Complicațiile metabolice cele mai frecvente ale transfuziei unor cantități mari de produse sanguine sunt:',
 ['hipocalcemia','hipernatremia','hipokaliemia','hipotermia','hiperkaliemia'],'ACDE',44,'Complicații ale transfuziei — Tulburări metabolice',
 'Recunoașterea celor patru complicații metabolice frecvente ale transfuziei masive.',
 ['Hipocalcemia este listată.','Hipernatremia nu figurează printre complicațiile frecvente.','Hipokaliemia este listată.','Hipotermia este listată.','Hiperkaliemia este listată, alături de hipokaliemie.']],
 [8,'Prezența ambelor direcții ale kaliemiei face ca eliminarea prin „contradicție” să nu funcționeze.'],['hipocalcemia, hiperkaliemia']),

q('hemostaza-adv-023',['Debutul edemului pulmonar din leziunea pulmonară acută asociată transfuziei apare de regulă:',
 ['la 3–5 zile după transfuzie','după administrarea a 50 mL de sânge','la câteva săptămâni după transfuzie','în primele 1–2 ore de la transfuzie','la peste 72 de ore după transfuzie'],'D',45,'Complicații pulmonare — LPAT',
 'Fixarea ferestrei temporale a LPAT față de alte reacții transfuzionale.',
 ['Intervalul de 3–5 zile aparține sângerării prin deficit de factor XIII.','Pragul de 50 mL este al reacției hemolitice acute.','Debutul la săptămâni este al bolii grefă contra gazdă.','Debutul este, în general, în primele 1–2 ore; poate apărea până la 6 ore.','Forma întârziată apare până la 72 de ore, nu după.']],
 [8,'Toate intervalele provin din capitol; 72 de ore este limita formei întârziate, nu debutul tipic.'],['1-2 ore','72 de ore']),

q('hemostaza-adv-024',['Conform Tabelului 4-1, probele de laborator pentru hemostază (aPTT, PT, timp de trombină) se efectuează preoperator:',
 ['la toți pacienții, ca evaluare de rutină','înaintea oricărei intervenții sub anestezie generală','la pacienții cu antecedente de tromboză venoasă','la pacienții peste 65 de ani','la pacienții cu tulburări de sângerare evidente'],'E',39,'Tabelul 4-1 — Evaluarea preoperatorie',
 'Recunoașterea indicației selective a probelor de laborator, față de istoricul și examenul fizic de rutină.',
 ['Istoricul și examenul fizic sunt de rutină la toți pacienții; probele nu.','Anestezia generală nu este criteriul din tabel.','Antecedentele trombotice țin de evaluarea hipercoagulabilității.','Vârsta nu este criteriu în Tabelul 4-1.','Probele sunt indicate la tulburări de sângerare evidente sau hemoragie anticipată prin natura intervenției.']],
 [8,'Distractorul de rutină este corect pentru istoric și examen fizic, dar nu pentru probe.'],['sângerare evidente','Momentul efectuării']),

q('hemostaza-adv-025',['Agenții hemostatici locali utilizați intraoperator includ:',
 ['fondaparina (Arixtra) aplicată topic','celuloza oxidată (Surgicel)','colagenul microfibrilar (Avitene)','acidul ε-aminocaproic topic','bivalirudina (Angiomax)'],'BCD',40,'Complicații intraoperatorii — Agenți hemostatici locali',
 'Recunoașterea agenților hemostatici locali față de anticoagulantele sistemice cu denumire comercială.',
 ['Fondaparina este un inhibitor direct al factorului Xa.','Celuloza oxidată (Surgicel) este listată.','Colagenul microfibrilar (Avitene, Hemoten) este listat.','EACA topic este listat printre agenții locali.','Bivalirudina este un inhibitor direct al trombinei.']],
 [8,'Toate variantele au denumiri comerciale din aceeași pagină; distractorii sunt anticoagulante.'],['Surgicel','Avitene'],[]),

q('hemostaza-adv-026',['Transfuzia de sânge incompatibil la un pacient aflat sub anestezie generală:',
 ['poate fi recunoscută abia prin sângerare generalizată','se manifestă tipic prin agitație și dureri de spate','produce hemoglobinurie și oligurie, sugestive pentru CID','determină tipic edem pulmonar noncardiogen','se recunoaște precoce prin urticarie și eritem'],'AC',40,'Complicații intraoperatorii — Transfuzia incompatibilă',
 'Recunoașterea manifestărilor transfuziei incompatibile mascate de anestezia generală.',
 ['Poate să nu producă alte manifestări până la sângerarea generalizată prin CID.','Agitația și durerile de spate nu sunt evidente sub anestezie generală.','Hemoglobinuria și oliguria oferă dovezi clinice suplimentare ale CID.','Edemul pulmonar noncardiogen definește LPAT.','Urticaria și eritemul descriu reacțiile minore (Tabelul 4-6).']],
 [8,'Distractorii sunt manifestările altor reacții transfuzionale sau simptome mascate de anestezie.'],['Hemoglobinuria şi oliguria','anestezie generală']),

q('hemostaza-adv-027',['Hemoragia postoperatorie:',
 ['după hepatectomie extinsă poate necesita 3–5 zile de corecție','se datorează în 50% din cazuri hemostazei intraoperatorii deficitare','poate fi produsă de heparina reziduală după bypass cardiopulmonar','prin deficit de factor XIII apare în primele 30 de minute','poate apărea prin deficit de factori K-dependenți la malnutriți'],'ABCE',41,'Hemoragii postoperatorii',
 'Diferențierea cauzelor de hemoragie postoperatorie și a ferestrelor lor temporale.',
 ['Ficatul restant poate avea nevoie de 3–5 zile pentru a produce suficienți factori.','50% din sângerările postoperatorii sunt cauzate de hemostaza necorespunzătoare intraoperatorie.','Heparina reziduală după bypass sau chirurgie vasculară periferică poate cauza hemoragii.','Deficitul de factor XIII produce sângerare întârziată, la 3–5 zile.','Deficitul de factori II, VII, IX, X apare la pacienții hrăniți insuficient care primesc antibiotice.']],
 [8,'Distractorii plasează cauze reale în ferestre temporale greșite.'],['50% din sângerările','hrăniţi insuficient']),

q('hemostaza-adv-028',['În evaluarea riscului de TEV, sugerează o stare de hipercoagulabilitate subiacentă:',
 ['un TEV provocat de o fractură la 70 de ani','un timp de sângerare prelungit','un episod de TEV neprovocat, la orice vârstă','o tromboză venoasă la un pacient imobilizat postoperator','un prim episod de TEV provocat, după 60 de ani'],'C',42,'Stările de hipercoagulabilitate — Istoricul medical',
 'Recunoașterea elementelor anamnestice care sugerează hipercoagulabilitate.',
 ['TEV provocat la vârstnic nu este un criteriu citat.','Timpul de sângerare privește riscul hemoragic, nu trombotic.','Textul: TEV neprovocat la orice vârstă, TEV sub 40 de ani, recurent sau cu sediu neobișnuit.','Imobilizarea este un factor provocator, nu un indiciu de trombofilie subiacentă.','Vârsta relevantă din text este sub 40 de ani, pentru orice episod.']],
 [8,'Toate variantele trombotice sunt plauzibile; doar una corespunde criteriilor anamnestice explicite.'],['venelor mezenterice','40 de ani']),

q('hemostaza-adv-029',['Transfuzia de plasmă proaspăt congelată este indicată în:',
 ['anemia cronică izolată, fără sângerare activă','deficite multiple de factori cu sângerare manifestă','coagulopatia de diluție după transfuzie masivă, cu sângerare','deficite multiple de factori înaintea unei proceduri invazive','trombocitopenia sub 30.000/µL fără deficit de factori'],'BCD',43,'Transfuzia de plasmă proaspăt congelată',
 'Aplicarea indicațiilor PPC față de indicațiile MER și ale masei trombocitare.',
 ['Anemia fără sângerare nu este o indicație de PPC.','Deficitele multiple de factori cu sângerare manifestă sunt indicație.','Coagulopatia de diluție este o cauză citată a deficitelor de factori.','Deficitele multiple înaintea unei proceduri invazive sunt indicație.','Trombocitopenia izolată se corectează cu masă trombocitară.']],
 [8,'Distractorii sunt indicațiile altor componente sanguine.'],['proceduri invazive','coagulopatiei de diluţie']),

q('hemostaza-adv-030',['Boala grefă contra gazdă posttransfuzională:',
 ['apare la pacienți imunosupresați','debutează frecvent insidios, la câteva săptămâni','este produsă de leucocitele donatorului','se previne prin eritrocite iradiate','se manifestă prin edem pulmonar noncardiogen'],'ABCD',45,'Reacții imunologice — Boala grefă contra gazdă',
 'Recunoașterea mecanismului, a debutului și a prevenției GVHD posttransfuzionale.',
 ['GVHD apare când pacienții imunosupresați primesc leucocite ale donatorului.','Debutul este frecvent insidios, la câteva săptămâni.','Leucocitele donatorului inițiază răspunsul imun împotriva gazdei.','Prevenția se face cu concentrat eritrocitar deleucocitat și/sau eritrocite iradiate.','Edemul pulmonar noncardiogen definește LPAT.']],
 [8,'Singurul distractor este tabloul unei alte complicații imunologice; restul cer recunoașterea întregului profil.'],['eritrocite iradiate','câteva săptămâni']),

q('hemostaza-adv-031',['Reacția hemolitică acută transfuzională:',
 ['poate debuta după administrarea a doar 50 mL de sânge','se previne prin iradierea eritrocitelor','se datorează cel mai frecvent unei erori de identificare ABO','impune oprirea imediată a transfuziei','poate beneficia de manitol sau furosemid'],'ACDE',45,'Reacții imunologice — Reacția hemolitică acută',
 'Recunoașterea mecanismului, a pragului de volum și a conduitei în reacția hemolitică acută.',
 ['Poate debuta rapid după administrarea a doar 50 mL de sânge.','Iradierea previne boala grefă contra gazdă.','Majoritatea reacțiilor apar prin eroare de scriere a grupului și transfuzie ABO incompatibilă.','Transfuzia trebuie oprită imediat.','Unii clinicieni recomandă manitol și/sau furosemid pentru menținerea diurezei.']],
 [8,'Distractorii inversează o măsură terapeutică și transferă prevenția GVHD.'],['50 mL de sânge','manito']),
];
