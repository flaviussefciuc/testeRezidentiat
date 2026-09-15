import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('hta',31,-855,`hta-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const HTA_B=[
q(20,['Valorile prag de diagnostic ale hipertensiunii, în Figura 31.2, sunt:',
 ['Sub 80 de ani: >140 sau >90 mmHg la cabinet, ori >135 sau >85 mmHg în ambulator sau la domiciliu','Peste 80 de ani: >160 sau >90 mmHg la cabinet, ori >150 sau >85 mmHg în ambulator sau la domiciliu','În Regatul Unit, țintele sunt <140/90 mmHg sub 80 de ani și <150/90 mmHg peste 80 de ani','Determinarea la cabinet este metoda cea mai validată; studiile cu antihipertensive au folosit-o pentru includere și titrarea către ținte','Pragurile sunt identice sub și peste 80 de ani: >180/110 mmHg atât la cabinet cât și acasă'],'ABCD',1135,'Figura 31.2 — Valori prag și ținte',
 'Aplicarea pragurilor distincte sub/peste 80 de ani, a țintelor NICE 140/90 versus 150/90 și a validării măsurătorii de cabinet.',
 ['Perechea 140/90 cabinet și 135/85 extra-cabinet este a adulților sub 80 de ani.','160/90 cabinet și 150/85 extra-cabinet sunt ale celor peste 80 de ani.','Țintele UK 140/90 și 150/90 completează figura.','Validarea cabinetului pentru trialuri este din același paragraf de măsurare.','Pragurile diferă după vârstă; 180/110 nu este pragul de diagnostic din figură.']],
 8,'Distractorul unifică pragurile celor două vârste la 180/110, anulând distincția centrală a figurii.',['>140 sau >90','>160 sau >90']),

q(21,['Trendul internațional al țintelor tensionale, față de practica din Regatul Unit, este descris astfel:',
 ['Trendul internațional este să se atingă valori <130/80 mmHg la toți pacienții, dacă sunt tolerate','În Regatul Unit, țintele rămân <140/90 mmHg sub 80 de ani și <150/90 mmHg peste 80 de ani','NICE a adoptat deja <120/70 mmHg ca țintă unică, abandonând pragul de 80 de ani','Trendul internațional cere >160/90 mmHg ca țintă, nu ca prag de diagnostic','Țintele UK și cele internaționale sunt identice: 180/110 mmHg'],'AB',1135,'Figura 31.2 — Ținte UK versus internaționale',
 'Contrastarea țintei internaționale <130/80 (dacă e tolerată) de țintele NICE diferențiate după 80 de ani.',
 ['<130/80 la toți, dacă e tolerată, este trendul internațional din figură.','Cele două ținte UK pe vârstă sunt alăturate.','NICE păstrează 140/90 și 150/90, nu 120/70.','160/90 este prag de diagnostic peste 80 de ani, nu țintă.','180/110 nu figurează ca țintă.']],
 8,'Distractorii confundă pragul de diagnostic 160/90 cu ținta și atribuie NICE o țintă 120/70 pe care figura o rezervă trendului intern <130/80.',['<130/80','<150/90']),

q(22,['De la anii 1990, pragul de diagnostic și conduita după gradul hipertensiunii includ:',
 ['Pragul general acceptat a fost TA de cabinet >140 mmHg sistolică sau >90 mmHg diastolică (oricare este depășită prima)','Tratamentul a fost rezervat în mare parte hipertensiunii de gradul 2, unde dovezile pentru reducerea farmacologică sunt solide','În gradul 1, s-a insistat pe stilul de viață, cu tratament imediat doar la risc CV total >1%/an sau la leziuni de organ țintă; medicația se recomandă dacă TA nu se normalizează după 3-12 luni de măsuri tolerate','Gradul 1 se tratează imediat farmacologic, stilul de viață fiind inutil','Pragul de diagnostic din 1990 a fost 180/110 mmHg, 140/90 fiind abandonat'],'ABC',1138,'Valori de referință și ținte — Prag și grade',
 'Separarea diagnosticului 140/90 de rezerva farmacologică a gradului 2 și de fereastra 3-12 luni a gradului 1.',
 ['140 sau 90, oricare prima, este pragul din 1990.','Rezervarea tratamentului pentru gradul 2 este explicită.','Riscul >1%/an, leziunile țintă și 3-12 luni sunt conduita gradului 1.','Textul rezervă imediatul farmacologic gradului 2 și grupurilor cu risc/leziuni.','140/90 este tocmai pragul acceptat din 1990.']],
 8,'Distractorii inversează gradul 1 versus 2 și mută pragul de diagnostic de la 140/90 la 180/110.',['140 mmHg','3-12 luni']),

q(23,['Identificați afirmația corectă referitoare la studiul SPRINT și la ghidurile NICE, potrivit capitolului:',
 ['SPRINT și meta-analizele au sugerat un beneficiu semnificativ al ghidării către <130/80 mmHg la toți pacienții; acest aspect este reflectat în cele mai multe ghiduri internaționale, dar nu încă în cele NICE din Marea Britanie','NICE a fost primul ghid care a impus <130/80 mmHg, SPRINT infirând această țintă','SPRINT a vizat 150/90 mmHg la tineri, NICE cerând <120/70 mmHg','Ținta <130/80 mmHg este contraindicată de toate ghidurile internaționale','NICE și SPRINT recomandă identic 180/110 mmHg'],'A',1138,'SPRINT versus NICE',
 'Recunoașterea decalajului: evidența SPRINT pentru <130/80 adoptată internațional, încă nepreluată de NICE.',
 ['Contrastul internațional versus NICE este fraza din paragraf.','Relația este inversată: internaționalele au preluat, NICE încă nu.','SPRINT susține <130/80, nu 150/90 la tineri.','Majoritatea ghidurilor internaționale reflectă <130/80.','180/110 nu este ținta niciuneia.']],
 8,'Distractorii inversează cine a adoptat <130/80 (internaționale versus NICE) după SPRINT.',['SPRINT','130/80 mmHg']),

q(24,['La persoanele peste 80 de ani, ghidurile citate recomandă:',
 ['Mai puține dovezi pentru tratamentul hipertensiunii ușoare; cele mai multe ghiduri tratează doar hipertensiunea moderată (gradul 2)','Unele ghiduri (ex. NICE) sugerează o țintă mai laxă de cabinet, 150/90 mmHg, peste 80 de ani','ESC/ESH tind să reducă TA de cabinet sub 130/80 mmHg la vârstnicii cu status biologic adecvat, dacă este tolerată; vârsta nu trebuie folosită ca substitut al fragilității','Toți octogenarii, inclusiv cei fragili cu risc de căderi, au țintă unică 110/60 mmHg','NICE impune <130/80 mmHg peste 80 de ani, ESC cerând 150/90 mmHg'],'ABC',1138,'Hipertensiunea la peste 80 de ani',
 'Contrastarea țintei NICE 150/90 la octogenari de tendința ESC/ESH <130/80 la vâstnicul fit, fără a substitui vârsta fragilității.',
 ['Limitarea la gradul 2 este prima frază.','150/90 NICE este ținta laxă citată.','ESC/ESH <130/80 dacă e tolerată și avertismentul despre fragilitate încheie paragraful.','Fragilitatea și riscul de căderi cer prudență, nu 110/60 de rutină.','Sensurile NICE versus ESC sunt inversate.']],
 8,'Distractorii inversează NICE 150/90 și ESC 130/80 și impun 110/60 fragilului, contrar avertismentului despre căderi.',['150/90 mmHg','peste 80 de ani']),

q(25,['Substanțele frecvent implicate în creșterea tensiunii arteriale, enumerate în capitol, includ:',
 ['Alcoolul, drogurile stimulante recreaționale, pilulele contraceptive orale și AINS','Corticosteroizii, inhibitorii de calcineurină, inhibitorii VEGF și unele antidepresive (ex. venlafaxină)','Statinele și ezetimibul, ca antihipertensive de primă linie','IECA și ARA, care cresc TA prin retenție de sare','Amlodipina, care produce HTA de novo prin vasoconstricție'],'AB',1138,'Medicamente și droguri care cresc TA',
 'Recunoașterea listei (alcool, OCP, AINS, steroizi, calcineurină, VEGF, venlafaxină), distinct de antihipertensivele și hipolipemiantele din același capitol.',
 ['Alcoolul, stimulentele, OCP și AINS deschid lista.','Corticosteroizii, calcineurina, VEGF și venlafaxina o închid.','Statinele țin de riscul CV, nu de creșterea TA.','IECA/ARA scad TA.','Amlodipina este antihipertensiv (edem, nu HTA de novo).']],
 8,'Distractorii plasează IECA, amlodipina și statinele pe lista de substanțe care cresc TA.',['venlafaxină','inhibitorii de calcineurină']),

q(26,['Primul studiu Veterans Administration Cooperation, citat în capitol, a randomizat:',
 ['Pacienți cu TA diastolică 115-129 mmHg către tratament activ versus placebo; după standardele moderne aceasta ar fi hipertensiune severă, dar a demonstrat beneficiul scăderii TA','Pacienți cu TA 120/70 mmHg, fără a găsi vreun beneficiu','Doar octogenari cu 150/90 mmHg, anticipând NICE','Hipertensiune de halat alb, fără braț placebo','Diastolică 70-80 mmHg, considerată deja urgență hipertensivă'],'A',1138,'Veterans Administration Cooperation',
 'Reținerea ferestrei diastolice 115-129 mmHg ca hipertensiune severă după standarde moderne, totuși prima demonstrație de beneficiu.',
 ['115-129 mmHg diastolic, activ versus placebo și calificarea de severă modernă sunt din paragraf.','120/70 nu a fost populația Veterans.','Studiul nu este un trial NICE la octogenari.','Nu este un studiu de halat alb.','70-80 mmHg diastolic nu este pragul Veterans.']],
 8,'Distractorii mută populația Veterans de la 115-129 mmHg diastolic la praguri moderne de diagnostic sau de urgență.',['115-129 mmHg','Veterans Administration']),

q(27,['În pofida instrumentelor și tratamentelor disponibile, controlul tensional:',
 ['Are o rată de sub 50% sub valorile țintă, în majoritatea populațiilor','Rămâne în centrul preocupărilor locale, naționale și internaționale','Depășește 95% în majoritatea populațiilor, problema fiind rezolvată','Este relevant doar în urgențele hipertensive, nu în ambulator','Nu constituie o preocupare de sănătate publică, costurile fiind neglijabile'],'AB',1134,'Introducere — Controlul tensional',
 'Reținerea ratei de control sub 50% ca problemă persistentă de sănătate publică.',
 ['Sub 50% este cifra din paragraf.','Centrul preocupărilor pe trei niveluri este explicit.','Textul spune sub 50%, nu peste 95%.','Majoritatea cazurilor sunt tratate în ambulator.','Costurile anuale depășesc 1 miliard de lire în UK.']],
 8,'Distractorii transformă eșecul de control sub 50% într-un succes de 95% sau într-o problemă doar de urgență.',['sub 50%','valorilor ţintă']),

q(28,['Hipertensiunea ca boală a îmbătrânirii, în datele de deschidere:',
 ['Este rară la copii și adolescenți','Diagnosticarea sub 30 de ani necesită o evaluare atentă a posibilelor cauze secundare','Costurile anuale ale tratamentului depășesc 1 miliard de lire în Marea Britanie','Majoritatea cazurilor sunt tratate în ambulator, serviciile de specialitate fiind rezervate cauzelor secundare sau fenotipurilor problematice','Este boala dominantă a copilului mic, cauzele secundare fiind rare sub 30 de ani'],'ABCD',1134,'Introducere — Vârstă și costuri',
 'Asocierea rarității pediatrice, a alarmei sub 30 de ani, a costului >1 miliard £ și a predominanței ambulatorii.',
 ['Raritatea la copii/adolescenți este enunțată.','Evaluarea secundară sub 30 de ani este cerută.','1 miliard de lire este cifra UK.','Ambulatorul ca loc principal și specialitatea pentru secundare/fenotipuri sunt din același paragraf.','Relația vârstă–cauze secundare este inversată.']],
 8,'Distractorul inversează alarma de cauză secundară sub 30 de ani, în timp ce celelalte opțiuni cer vârstă, cost și locul de tratament.',['sub 30 de ani','1 miliard']),

q(29,['În Cadranul 31.2, asocierile clinic–paraclinic ale unor cauze vasculare și endocrine includ:',
 ['Coarctația de aortă — diferență de puls sau de TA între membrele superioare sau între superioare și inferioare; angiografie RMN/CT a întregii aorte','Stenoza de arteră renală — deteriorare bruscă a funcției renale după IECA/ARA și edem pulmonar acut cu funcție cardiacă normală; angiografie renală','Feocromocitomul — palpitații, transpirații, pusee, paloare, anxietate; metanefrine plasmatice, apoi localizare MIBG/RMN după alfa-blocadă adecvată','Coarctația se confirmă prin metanefrine plasmatice, feocromocitomul prin diferența de puls braț-picior','Stenoza de arteră renală se tratează prin suprarenalectomie laparoscopică, ca hiperaldosteronismul unilateral'],'ABC',1139,'Cadranul 31.2 — Cauze secundare',
 'Perecherea semnelor (diferență de puls, IRA post-IECA, triadă pheo) cu testele specifice (angio aortă/renală, metanefrine), fără a amesteca rândurile.',
 ['Diferența de puls/TA și angio aortei sunt ale coarctației.','IRA post-IECA, edemul flash și angio renală sunt ale stenozei.','Clinica, metanefrinele, MIBG și alfa-blocada sunt ale feocromocitomului.','Testele sunt inversate între coarctație și pheo.','Suprarenalectomia aparține aldosteronomului, nu stenozei renale.']],
 8,'Distractorii permută metanefrinele, diferența de puls și suprarenalectomia între trei rânduri vecine ale aceluiași cadran.',['Coarctaţie de aortă','Metanefrine plasmatice']),
];
