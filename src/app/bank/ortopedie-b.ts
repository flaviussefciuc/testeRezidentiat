import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p===605?p-327:p===606?p-329:p-328;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('ortopedie',28,pdfOffset,`ortopedie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ORTOPEDIE_B=[
q(51,['Vindecarea unei fracturi este evidență radiologic atunci când:',
 ['Se observă trabecule osoase distincte care traversează sediul fracturii','Dispare doar durerea de palpare, fără nicio modificare pe radiografie','Apar linii Looser pe colul femural și ramurile pubiene','Calusul moale ocupă intervalul imediat post-traumatic, concomitent cu hematomul','Scintigrafia cu technetiu este negativă, ca în mielomul multiplu'],'A',593,'Vindecarea osoasă — Criterii clinice și radiologice',
 'Diferențierea criteriului radiologic (trabecule care traversează focarul) de semnele clinice și de entități metabolice sau tumorale din același capitol.',
 ['Textul precizează că vindecarea radiologică este evidentă când trabeculele osoase distincte traversează sediul fracturii.','Dispariția durerii și a mișcării în focar sunt criterii clinice, nu radiologice izolate.','Zona Looser caracterizează osteomalacia, nu consolidarea unei fracturi.','Calusul moale nu coincide cu hematomul imediat.','Scintigrafia negativă în mielom nu este criteriul de vindecare a fracturii.']],
 8,'Înlocuiește trabeculele care traversează focarul cu linii Looser sau cu calusul moale din tabelul de vindecare.',['trabecule','Clinic, vindecarea']),

q(52,['Restabilirea funcției după o fractură se caracterizează prin:',
 ['Imobilizarea membrului în poziție funcțională, pentru a evita redoarea periarticulară și intra-articulară','Inițierea exercițiilor izometrice ale mușchilor imobilizați, pentru a evita atrofia','Încurajarea, de la debut, a mișcării articulațiilor adiacente care nu sunt imobilizate','Imobilizarea prelungită a tuturor articulațiilor adiacente, până la consolidarea radiologică completă','Exercițiile excesive accelerează consolidarea și previn eșecul implantului'],'ABC',592,'Principii de tratament — Recuperarea după fractură',
 'Aplicarea poziției funcționale, a izometriei și a mobilizării articulațiilor libere, față de recuperarea agresivă care întârzie vindecarea.',
 ['Textul cere imobilizarea în poziție funcțională pentru a evita redoarea.','Exercițiile izometrice sunt inițiate pentru a evita atrofia musculară.','Mișcarea articulațiilor neimobilizate este încurajată de la debut.','Doar articulațiile cuprinse de imobilizare sunt limitate; cele adiacente libere se mobilizează.','Exercițiile excesive pot întârzia vindecarea, rupe implantul și pierde reducerea.']],
 8,'Transformă recuperarea progresivă într-o imobilizare globală sau într-un antrenament excesiv, două erori din același paragraf.',['poziţie funcţională','Exerciţiile izometrice'],[593]),

q(53,['Identificați afirmația corectă referitoare la evaluarea vasculară după o luxație:',
 ['O leziune arterială limitată la intima poate produce un tromb progresiv, deci evaluarea neurovasculară seriată este esențială după reducere','Pulsul simetric exclude leziunea de intimă și face inutil indexul gleznă-braț','Reducerea se amână până la arteriografie, chiar când tegumentul gleznei este compromis','Leziunile vasculare produc ocluzie acută vizibilă imediat, fără tromboză întârziată pe intimă','Radiografia post-reducere este superfluă dacă reducerea clinică „a reușit”'],'A',595,'Subluxația și luxația — Evaluare neurovasculară',
 'Recunoașterea trombozei întârziate pe leziune de intimă și a necesității evaluării seriate, inclusiv prin index gleznă-braț.',
 ['Textul descrie trombul progresiv pe leziune de intimă și cere evaluare neurovasculară seriată după reducere.','Pulsul asimetric, Doppler-ul sau indexul gleznă-braț justifică evaluare vasculară amănunțită.','Dacă tegumentul este compromis sau statusul neurovascular este îndoielnic, reducerea se face de urgență.','Nu toate leziunile vasculare produc ocluzie acută.','Radiografia post-reducere verifică alinierea și exclude o fractură asociată.']],
 8,'Tratează pulsul păstrat ca excludere a leziunii de intimă, ignorând tromboza întârziată descrisă în text.',['evaluarea neurovasculară seriată','index gleznă-braţ']),

q(54,['Sindromul de compartiment de efort la alergător:',
 ['La alergătorii competitivi, durerea provine adesea din compartimentul posterior profund (tibial posterior, flexori, flexor lung al halucelui)','Diagnosticul se bazează pe măsurători obiective ale presiunii; după efort, presiunile scad lent, cu revenire întârziată','Durerea de efort a alergătorului este, de regulă, din compartimentul palmar al mâinii','Presiunile revin instantaneu la normal, identic individului asimptomatic, deci măsurătoarea este inutilă','Fasciotomia este contraindicată după eșecul ortezelor și al modificării antrenamentului'],'AB',604,'Sindromul de compartiment de exerciții',
 'Diferențierea sediului posterior profund la alergătorul competitiv de recuperarea lentă a presiunii, față de fasciotomia rezervată eșecului conservator.',
 ['Textul plasează durerea alergătorului competitiv în compartimentul posterior profund.','Măsurătoarea de presiune și revenirea întârziată definesc diagnosticul.','Compartimentul palmar nu este sediul descris; la majoritatea, durerea e în compartimentul anterior al gambei.','La simptomatici revenirea este lentă, nu instantanee.','După eșecul măsurilor conservatoare, fasciotomia poate trata cu succes afecțiunea.']],
 8,'Mută durerea alergătorului din posteriorul profund în palmar și anulează indicația de fasciotomie după eșec conservator.',['compattiment de exerci','fasciotomie']),

q(55,['Entorsele laterale ale gleznei:',
 ['Ligamentul talofibular anterior este primul lezat în inversiune exagerată','Tratamentul include gheață, drenaj postural, bandaj compresiv și mobilizare precoce','Exercițiile de propriocepție sunt o componentă importantă a recuperării, deoarece terminațiile proprioceptive sunt lezate','Repararea chirurgicală primară este regula, deoarece majoritatea entorselor lasă instabilitate reziduală marcată','Ligamentul deltoid este lezat mai frecvent decât cele laterale, maleola peronieră fiind scurtă'],'ABC',604,'Entorsele de gleznă — Ligamente laterale',
 'Recunoașterea ordinii ATFL-calcaneofibular, a tratamentului funcțional și a propriocepției, versus falsa predominanță a deltoidului.',
 ['Textul identifică talofibularul anterior ca primul ligament lezat în inversiune.','Gheața, drenajul postural, bandajul și mobilizarea precoce sunt enumerate.','Propriocepția lezată explică recidivele și impune exerciții specifice.','Reparația primară este rar indicată; rezultatele reconstrucției tardive sunt similare.','Maleola peronieră mai lungă protejează de eversiune; deltoidul este mai rar afectat.']],
 8,'Inversează frecvența deltoid versus laterale și promovează chirurgia primară pe care textul o rezervă excepțiilor.',['talofibular anterior','propriocepţie']),

q(56,['Entorsa articulației metatarsofalangiene a halucelui (turf toe), netratată, este considerată cauză a:',
 ['Hallux rigidus, cu artrită a MTF și pierderea extensiei','Degetului Mallet, prin avulsia extensorului de la falanga distală','Fracturii boxerului a metacarpianului V','Miozitei osificante a cvadricepsului','Spondilolizei de pars interarticularis'],'A',610,'Leziuni sportive — Turf toe și hallux rigidus',
 'Legarea entorsei MTF a halucelui netratate de hallux rigidus, distinct de Mallet, boxer și miozita osificantă din aceeași secțiune.',
 ['Textul leagă entorsa MTF netratată de artrita MTF a halucelui și de pierderea extensiei (hallux rigidus).','Degetul Mallet este ruptura extensorului de la IFD.','Fractura boxerului privește metacarpianul V.','Miozita osificantă urmează contuziei de cvadriceps.','Spondiloliza este o fractură de pars, nu o sechelă de turf toe.']],
 8,'Așază hallux rigidus lângă Mallet, boxer și miozită, trei leziuni învecinate din capitolul de sport.',['hallux rigidus','metatarsofalangiene']),

q(57,['Miozita osificantă traumatică:',
 ['Reprezintă os depus în mușchi după contuzie, adesea în cvadriceps','Simptomele includ sensibilitate musculară profundă și pierderea mișcării în articulația adiacentă','Leziunea este autolimitată și poate fi diminuată de AINS','Excizia înainte de 18 luni se asociază cu o rată ridicată de recidivă','Forma sistemică apare doar la sportivul sănătos, nu după paralizie traumatică sau arsuri extinse'],'ABCD',610,'Miozita osificantă traumatică',
 'Recunoașterea metaplaziei din cvadriceps, a rolului AINS și a ferestrei de 18 luni înaintea exciziei, versus forma sistemică din paralizie/arsuri.',
 ['Definiția prin os intramusuclar post-contuzie, adesea în cvadriceps, este explicită.','Sensibilitatea profundă și redoarea articulației adiacente sunt descrise.','Caracterul autolimitat și AINS sunt enunțate.','Rezecția precoce (înainte de 18 luni) are rată înaltă de recidivă.','Forma sistemică apare la pacienții cu paralizie traumatică sau arsuri extinse.']],
 8,'Inversează fereastra de 18 luni a exciziei și atribuie forma sistemică sportivului sănătos, nu paraliziei sau arsurilor.',['miozită osificantă','18 luni']),

q(58,['La naștere, anteversia femurală este de aproximativ:',
 ['40°','10–15°','7° de valgus scheletal','20° de genu varum','0°, colul fiind retrovertit'],'A',610,'Torsiunea membrului inferior — Anteversia femurală',
 'Memorarea anteversiei de circa 40° la naștere, distinctă de 10–15° a adultului și de unghiurile genu varum/valgum.',
 ['Textul precizează că la naștere anteversia femurală este de aproximativ 40°.','10–15° descrie orientarea anterioară a colului privit de-a lungul diafizei la adult.','7° de valgus este aliniamentul adult după vârsta de 3 ani.','20° sau mai mult este genu varum fiziologic al sugarului.','Colul nu este retrovertit la 0° la naștere.']],
 8,'Permutează 40° de la naștere cu 10–15° ale adultului și cu unghiurile varus/valgus din pagina următoare.',['40°','anteversia femurală'],[611]),

q(59,['Genu varum și genu valgum fiziologice ale copilului:',
 ['Sugarii au genu varum fiziologic, cu unghi tibio-femural de 20° sau mai mult','La circa 18 luni, unghiul se corectează pe măsură ce femurul și tibia devin coliniare','După vârsta de 3 ani, aliniamentul adult normal este de 7° de valgus scheletal','Genu varum persistent peste 2 ani nu justifică nicio evaluare radiologică','Malaliniamentul persistă la majoritatea copiilor și impune osteotomie înainte de mers'],'ABC',611,'Diformități angulare — Genu varum și genu valgum',
 'Aplicarea progresiei 20° varum → colinearitate la 18 luni → 7° valgus după 3 ani.',
 ['Varumul fiziologic de 20° sau mai mult la sugari este explicit.','Corecția la circa 18 luni, cu femur și tibie coliniare, este enunțată.','Aliniamentul adult de 7° valgus după 3 ani este citat.','Dacă genu varum persistă peste 2 ani, evaluarea radiologică poate fi justificată.','Pentru majoritatea copiilor aceste condiții sunt spectrul dezvoltării normale, rar chirurgicale.']],
 8,'Oglindește vârstele 18 luni și 3 ani și transformă o variantă de creștere în indicație precoce de osteotomie.',['18 luni','7']),

q(60,['Piciorul plat și piciorul scobit la copil:',
 ['În piciorul plat flexibil, arcul longitudinal lipsește în ortostatism, dar reapare fără sprijin','Piciorul plat rigid, cu mișcare pasivă limitată, poate fi cauzat de o unire congenitală a oaselor tarsiene','Pes cavus cu degete în gheară este consecința neuropatiilor periferice, cum ar fi Charcot-Marie-Tooth','Piciorul plat flexibil este, de regulă, o indicație de artrodeză tarsiană înainte de vârsta de 2 ani','Pes cavus este varianta fiziologică a sugarului, analog genu varum de 20°'],'ABC',611,'Piciorul plat flexibil, coaliția tarsiană și pes cavus',
 'Diferențierea platului flexibil (laxitate, arc care reapare) de coaliția tarsiană rigidă și de pes cavus din CMT.',
 ['Absența arcului în sprijin și reapariția fără încărcare definesc forma flexibilă.','Unirea congenitală tarsiană explică platul rigid.','Pes cavus cu degete în gheară este legat de CMT și alte neuropatii.','Platului flexibil îi lipsește, de obicei, simptomatologia; nu se artrodezează de principiu la 2 ani.','Pes cavus nu este aliniamentul fiziologic al sugarului.']],
 8,'Transformă platul flexibil asimptomatic în indicație de artrodeză și mută pes cavus pe locul varumului fiziologic.',['Charcot-Marie-Tooth','Piciorul plat'],[613]),

q(61,['Piciorul strâmb congenital persistând după seria de corecții se tratează prin:',
 ['Eliberarea chirurgicală posteromedială a structurilor dense de țesut moale de la picior și gleznă','Ham Pavlik cu șoldurile în flexie și abducție, ca în displazia de șold','Observație până la adolescență, similar genu valgum fiziologic','Epifiziodeză contralaterală, ca în scurtarea peste 2 cm','Fasciotomie de compartiment anterior al gambei'],'A',615,'Piciorul strâmb — Tratament după eșecul gipsurilor',
 'Recunoașterea eliberării posteromediale după eșecul imobilizărilor ghipsate succesive, distinctă de Pavlik și de epifiziodeză.',
 ['Textul recomandă eliberarea chirurgicală posteromedială când piciorul strâmb persistă după seria de corecții.','Hamul Pavlik este tratamentul displaziei de șold, nu al piciorului strâmb.','Piciorul strâmb persistent nu se lasă pe seama remodelării adolescente.','Epifiziodeza contralaterală corectează inegalitatea de lungime, nu equinovarusul.','Fasciotomia privește sindromul de compartiment, nu piciorul strâmb.']],
 8,'Înlocuiește eliberarea posteromedială cu hamul Pavlik, două manevre pediatrice din același capitol.',['picior strâmb','posteromedial']),

q(62,['Scolioza flexibilă se deosebește de cea structurală prin:',
 ['Forma flexibilă poate fi datorată posturii deficitare, spasmului de lângă un disc herniat sau compensării unui picior scurtat','Forma structurală asociază o diformitate vertebrală rotativă, necorectabilă prin schimbarea posturii','Asimetria cutiei toracice se observă cel mai bine când pacientul se apleacă înainte','Scolioza decompensată, cu trunchiul necentrat pe pelvis, asociază un grad mai mic de durere de spate','Forma idiopatică a adolescentului este dureroasă de la debut și predomină la băieți'],'ABC',615,'Scolioza — Flexibilă versus structurală',
 'Contrastarea cauzei posturale/compensatorii a formei flexibile cu rotația vertebrală fixă și cu testul de aplecare înainte.',
 ['Cele trei cauze ale formei flexibile sunt enumerate.','Rotația vertebrală necorectabilă definește forma structurală.','Aplecarea înainte evidențiază asimetria toracică.','Scolioza decompensată se asociază cu un grad mai mare, nu mai mic, de durere.','Idiopatica adolescentului este nedureroasă progresivă și predomină la fete (9:1).']],
 8,'Inversează legătura decompensare–durere și reia sex-ratio-ul 9:1 deja folosit, dar pe axa dureroasă/nedureroasă.',['Scolioza','apleacă înainte']),

q(63,['Un tânăr cu gonartroză medială simptomatică și genunchi în varus. Osteotomia tibială urmărește:',
 ['Transformarea alinierii în valgus, transferând încărcarea spre cartilajul sănătos','Conversia imediată în artrodeză, contraindicată la tinerii activi','Artroplastia totală ca primă intenție la tânărul foarte activ','Meniscectomia totală, care previne artroza tibiofemurală','Fasciotomia compartimentului posterior profund'],'A',620,'Osteoartroza genunchiului — Osteotomia tibială',
 'Identificarea osteotomiei tibiale varus→valgus ca realiniere către cartilajul lateral sănătos la tânărul cu gonartroză medială.',
 ['Textul descrie transformarea genunchiului în varus cu artroză medială într-unul în valgus prin osteotomie tibială.','Artrodeza este durabilă la tineri activi cu o articulație izolată, nu este scopul osteotomiei de realiniere.','Artroplastia totală se rezervă artrozei avansate și stilului relativ sedentar.','Meniscectomia totală duce la artroză, nu o previne.','Fasciotomia nu realiniază un genunchi varus artrozic.']],
 8,'Confundă osteotomia de realiniere cu artrodeza sau cu proteza totală, trei trepte terapeutice din același paragraf.',['osteotomie tibială','gonartroză']),

q(64,['Selectați enunțurile adevărate despre artroplastia și artrodeza genunchiului:',
 ['Artroplastia parțială reface unul dintre compartimentele medial, lateral sau patelofemural, cu ligamente încrucișate intacte','Artroplastia totală reduce durerea în mai mult de 90% din cazuri și se rezervă artrozei avansate cu stil relativ sedentar','Artrodeza convertește articulația dureroasă mobilă într-una stabilă, fixă, lipsită de durere, indicată tinerilor foarte activi cu interesare izolată','Artrodeza articulațiilor mari este de elecție în artrita inflamatorie sistemică, multiplă','Uzura, slăbirea și infecția implantului nu figurează printre complicațiile artroplastiei'],'ABC',620,'Artroplastia parțială, totală și artrodeza',
 'Ierarhizarea unicompartimental versus total (90%) versus artrodeză la tânărul activ, cu recunoașterea contraindicației artrodezei în AR sistemică.',
 ['Condițiile (un compartiment, LIA/LIP intacte, mobilități funcționale) sunt explicite.','Rata de peste 90% și rezervarea pentru stil sedentar sunt citate.','Definiția și indicația artrodezei la tânărul activ cu o articulație izolată sunt enunțate.','Artrodeza articulațiilor mari este contraindicată în artrita inflamatorie sistemică multiplă.','Uzura, slăbirea, infecția, osteoporoza locală și fracturile periprotetice sunt enumerate.']],
 8,'Extinde artrodeza la AR sistemică multiplă și neagă complicațiile protezei, două capcane de indicație.',['mai mult de 90%','Artrodeza']),

q(65,['Artrita reumatoidă, dincolo de distrucția articulară, se caracterizează prin:',
 ['Pannus sinovial care deteriorează cartilajul, după infiltrare cu macrofage și limfocite','Manifestări extraarticulare: vasculită, neuropatie, irită, limfadenopatie, splenomegalie și poliserozită','Semne radiologice precoce de tumefacție a părților moi și osteoporoză periarticulară','Osteofite hipertrofice abundente, identice osteoartrozei','Factorul reumatoid, când este prezent, exclude boala, fiind specific populației generale'],'ABC',620,'Artrita reumatoidă — Pannus și extraarticular',
 'Recunoașterea pannusului, a listei extraarticulare și a osteoporozei periarticulare precoce, versus osteofitele rare în AR.',
 ['Formarea pannusului după infiltrarea sinovialei este descrisă.','Lista extraarticulară este enumerată explicit.','Tumefacția părților moi și osteoporoza periarticulară sunt semnele radiologice precoce.','Osteofitele hipertrofice sunt rare în AR, spre deosebire de osteoartroză.','RF este prezent la 80% dintre pacienți și la 1–5% din populație; nu exclude boala.']],
 8,'Atribuie AR osteofitele OA și inversează valoarea factorului reumatoid (80% versus 1–5%).',['poliserozită','osteoporoza peria'],[619]),

q(66,['Rădăcina L5, în hernia de disc lombară, se recunoaște prin:',
 ['Hipoestezie pe piciorul dorsal și haluce, cu hipotonie a extensorului lung al halucelui','Diminuarea reflexului rotulian și slăbiciune a cvadricepsului','Diminuarea reflexului achilean și hipotonie a flexorilor degetelor și gleznei','Hipoestezie pe fața medială a piciorului și gleznei, ca în L4','Hiperreflexie cu clonus și semn Babinski, ca în mielopatia cervicală'],'A',624,'Hernia de disc lombară — Tabelul 28-4, rădăcina L5',
 'Maparea L5 (haluce, ELH, fără reflex constant) față de L4 (rotulian) și S1 (achilean).',
 ['Tabelul atribuie L5 hipoestezia dorsală/haluce și hipotonie ELH; reflexul tibial posterior există doar la 20% din populație.','Cvadricepsul și rotulianul definesc L4.','Flexorii, evertorii și achileanul definesc S1.','Fața medială a piciorului și gleznei este teritoriul L4.','Hiperreflexia și Babinski țin de mielopatia cervicală, nu de radiculopatia L5.']],
 8,'Permutează triada L4–L5–S1 din tabelul 28-4, confuzia clasică de reflex rotulian versus achilean versus ELH.',['Rădăcina nervoasă L5','extensor lung al halucelui']),

q(67,['Stenoza de canal lombar și claudicația neurogenică:',
 ['Durerea debutează după ortostatism sau mers prelungit și se ameliorează în șezut sau decubit','Se deosebește de claudicația vasculară, care dispare după un repaus scurt','Afectează de regulă populația peste 65 de ani, cu patologie degenerativă discală extinsă','Dispare caracteristic după câțiva pași pe loc, identic claudicației vasculare, fără a necesita schimbarea posturii','Mielografia cu contrast în spațiul epidural este investigația de primă intenție, înaintea IRM'],'ABC',625,'Stenoza spinală — Claudicație neurogenică',
 'Contrastarea ameliorării în flexie/șezut a claudicației neurogene de dispariția rapidă în repaus a celei vasculare, la vârstnicul >65 de ani.',
 ['Patternul ortostatism/mers și ameliorarea în șezut sau decubit este explicit.','Deosebirea de claudicația vasculară (repaos scurt) este enunțată.','Vârsta peste 65 de ani este citată.','Schimbarea posturii (așezare), nu pauza scurtă în picioare, ameliorează claudicația neurogenică.','IRM (și CT) delimitează leziunea; mielografia este rară, dacă IRM nu se poate efectua.']],
 8,'Egalizează greșit claudicația neurogenică cu cea vasculară și pune mielografia înaintea IRM.',['claudicaţie neurogenică','peste 65 de ani']),

q(68,['Hernia de disc cervicală:',
 ['Cele mai frecvente rupturi sunt la C5–C6 și C6–C7, unde flexia-extensia este cea mai amplă','Rădăcinile C6 și C7 sunt cel mai adesea afectate','Decompresia de urgență este indicată dacă există semne de mielopatie (hiperreflexie, slăbiciune ipsilaterală, amorțeli contralaterale, Babinski sau Hoffmann)','Rădăcina C5 este sediul cel mai frecvent, reflexul tricipital fiind primul atins','Tracțiunea craniană este contraindicată, sporind presiunea pe rădăcină'],'ABC',626,'Discul cervical — C5–C6, C6–C7 și mielopatie',
 'Fixarea etajelor C5–C6/C6–C7 și a semnelor de tract lung ca indicație de decompresie de urgență.',
 ['Predominanța C5–C6 și C6–C7 este explicită.','Afectarea C6 și C7 este enunțată.','Lista de semne de mielopatie ca indicație de urgență este citată.','C5 (deltoid, biceps, rotulian? bicipital) nu este etajul cel mai frecvent; tricipitalul este C7.','Tracțiunea craniană poate atenua presiunea pe rădăcină.']],
 8,'Mută predominanța de la C6/C7 la C5 și transformă tracțiunea (utilă) într-o contraindicație.',['C5-C6','Hoffmann']),

q(69,['Precizați enunțul corect privind coloana cervicală în poliartrita reumatoidă:',
 ['Radiografii laterale în flexie-extensie trebuie făcute oricărui pacient reumatoid supus intubării pentru anestezie generală','Implicarea neurologicǎ corelează liniar cu gradul de subluxație, deci filmele sunt inutile dacă nu există deficit','Stabilizarea prin fuziune este inutilă chiar când deficitul neurologic este cauzat de instabilitatea cervicală','Impactarea occipito-atlanto-axială protejează măduva, odontoidul rămânând sub foramen magnum','Subluxația subaxială nu poate fi demonstrată pe incidența laterală'],'A',627,'Artrita reumatoidă a coloanei cervicale — Intubație',
 'Recunoașterea filmelor laterale în flexie-extensie înaintea intubării, independent de corelația imperfectă cu deficitul neurologic.',
 ['Textul cere radiografii laterale în flexie-extensie înaintea intubării la pacientul reumatoid.','Implicarea neurologicǎ nu corelează neapărat cu gradul de subluxație.','Când deficitul este cauzat de instabilitate, tratamentul de elecție este fuziunea.','Impactarea occipito-atlanto-axială împinge odontoidul în foramen magnum și poate comprima măduva.','Instabilitatea subaxială se dovedește clinic radiologic, mai ales pe laterala cu înclinare sau deplasare AP.']],
 8,'Anulează filmele pre-intubație pe motivul falsei corelații deficit–subluxație, o capcană de anestezie.',['intubării','subluxaţie']),

q(70,['Osul normal, ca material bifazic, se caracterizează prin:',
 ['Mineralul (hidroxiapatită) se opune forțelor de compresiune','Matricea organică, în principal colagen de tip I, asigură rezistența la îndoire și răsucire','Osul normal este alcătuit în proporție de 70% mineral și 30% matrice organică','Raportul este 30% mineral și 70% osteoid, ca în osteomalacie','Colagenul de tip II al cartilajului articular este principala matrice a osului cortical'],'ABC',627,'Osul — Compoziție minerală și organică',
 'Fixarea raportului 70/30 și a rolurilor compresiune versus torsiune, distinct de osteoidul nemineralizat al osteomalaciei.',
 ['Rolul mineralului împotriva compresiunii este explicit.','Rolul colagenului de tip I împotriva îndoirii și răsucirii este descris.','Proporția 70% mineral / 30% organică este citată.','Raportul inversat descrie o confuzie cu osteomalacia, nu osul normal.','Matricea osoasă este colagen de tip I, nu tip II.']],
 8,'Oglindește 70/30 și schimbă colagenul I cu II, două near-miss-uri de compoziție.',['70%','matricea organică']),

q(71,['Zona Looser, bandă de rarefiere caracteristică osteomalaciei, se observă cel mai frecvent la:',
 ['Colul femural sau ramurile pubiene','Metafiza distală a radiusului, ca în Colles','Scafoidul, în tabachera anatomică','Pars interarticularis L5, ca în spondiloliză','Platoul tibial, ca în fractura impactată'],'A',628,'Osteomalacia — Zona Looser',
 'Localizarea liniei Looser ca fractură de stres în curs de vindecare la col femural sau ramuri pubiene.',
 ['Textul plasează zona Looser cel mai frecvent la colul femural sau ramurile pubiene.','Colles este o primă manifestare a osteoporozei, nu sediul clasic Looser.','Scafoidul este vulnerabil la osteonecroză, nu este exemplul Looser.','Spondiloliza este o altă fractură de stres, a pars-ului, nu Looser.','Platoul tibial nu este sediul citat al benzii de rarefiere.']],
 8,'Mută linia Looser pe sediile Colles, scafoid sau pars, toate fracturi de stres din același capitol.',['zonă Looser','colului femural']),

q(72,['Hiperparatiroidismul se recunoaște prin:',
 ['Forma primară se datorează unui adenom sau hiperplaziei paratiroidiene; forma secundară, insuficienței renale cronice cu retenție de fosfați','Radiografic apar rarefiere difuză și leziuni osteolitice corticale diseminate (osteită fibroasă chistică)','Hormonul scade calciul plasmatic și crește fosfatul, analog calcitoninei','Forma primară este cauzată de deficitul dietetic de vitamina D, ca rahitismul','Zona Looser este patognomonică hiperparatiroidismului, nu osteomalaciei'],'AB',628,'Hiperparatiroidismul — Osteită fibroasă chistică',
 'Contrastarea cauzei (adenom versus IRC) și a osteitei fibroase chistice de liniile Looser ale osteomalaciei.',
 ['Cauzele primară (adenom/hiperplazie) și secundară (IRC, fosfați) sunt explicite.','Rarefierea difuză și osteita fibroasă chistică sunt descrise.','PTH crește calciul plasmatic și scade fosfatul, nu invers.','Deficitul de vitamină D definește rahitismul/osteomalacia, nu hiperPTH primar.','Zona Looser este caracteristică osteomalaciei.']],
 8,'Inversează efectul PTH asupra Ca/P și mută liniile Looser din osteomalacie în hiperparatiroidism.',['osteită fibroasă chistică','Hiperparatiroidismul']),

q(73,['Boala Paget a osului:',
 ['Zonele implicate sunt bogat vascularizate și pot produce șunturi arterio-venoase cu insuficiență cardiacă secundară','Fosfataza alcalină secretată de osteoblaste poate fi semnificativ crescută','În sub 1% din cazuri, celulele osteoformatoare degenerează în osteosarcom','Tratamentul cu calcitonină sau bifosfonați este rezervat durerii refractare, hipercalcemiei maligne, insuficienței cardiace sau suferinței neurologice','Majoritatea cazurilor sunt simptomatice de la debut și impun osteosinteză profilactică a pelvisului'],'ABCD',629,'Boala Paget — Vascularizație, FA și malignizare',
 'Integrarea șunturilor AV, a FA înalte, a riscului <1% de osteosarcom și a indicațiilor de calcitonină/bifosfonat.',
 ['Șunturile AV și insuficiența cardiacă sunt explicite.','Creșterea fosfatazei alcaline este citată.','Pragul sub 1% de transformare în osteosarcom este enunțat.','Lista indicațiilor medicale este enumerată.','Majoritatea cazurilor sunt asimptomatice, descoperite accidental pe radiografii de bazin.']],
 8,'Transformă descoperirea accidentală pelvină într-o indicație de osteosinteză și umflă rata de sarcom peste 1%.',['calcitonină','Paget']),

q(74,['Metastazele osoase se caracterizează prin:',
 ['Tumorile primare de sân, prostată, plămân, rinichi și tiroidă metastazează des la os','Se localizează preferențial în oasele hematopoietice, bogat vascularizate: coloană, coaste, craniu, bazin și metafizele oaselor lungi','Sunt frecvente la pacienții peste 50 de ani, pe când tumorile musculoscheletale primare sunt rare','Sunt rare după 50 de ani, predominând osteosarcomul metafizar al adolescentului','Scintigrafia osoasă este constant negativă, ca în mielomul multiplu'],'ABC',629,'Neoplasmele osului — Metastaze versus tumori primare',
 'Recunoașterea celor cinci primitive clasice și a predilecției pentru osul hematopoietic al adultului peste 50 de ani.',
 ['Cele cinci origini sunt enumerate explicit.','Lista sediilor hematopoietice este citată.','Frecvența metastazelor după 50 de ani, față de raritatea primarelor, este enunțată.','Osteosarcomul bimodal al tânărului nu înlocuiește metastazele vârstnicului.','Scintigrafia negativă este tipică mielomului, nu metastazelor în general.']],
 8,'Înlocuiește metastazele vârstnicului cu osteosarcomul adolescentului și aplică greșit scintigrafia negativă a mielomului.',['50 de ani','rinichilor'],[630]),

q(75,['Ligamentul colateral ulnar al articulației metacarpofalangiene a policelui (degetul schiorului) este esențial pentru:',
 ['Opoziția policelui; lezarea îl face instabil și slăbește prinderea','Flexia plantară a gleznei, testată prin Thompson','Extensia interfalangiană distală, ca în degetul Mallet','Stabilitatea anterioară a talusului, ca în testul sertarului de gleznă','Abducția halucelui în turf toe'],'A',608,'Degetul schiorului — Ligamentul colateral ulnar',
 'Identificarea UCL al MTF a policelui ca stabilizer al opoziției și al prinderii, distinct de Mallet, Thompson și sertarul de gleznă.',
 ['Textul subliniază că ligamentul colateral ulnar al MTF a policelui este esențial pentru opoziție; lezarea slăbește prinderea.','Thompson testează tendonul Ahilean.','Mallet este avulsia extensorului de la IFD.','Sertarul anterior de gleznă testează ATFL și calcaneofibularul.','Turf toe este entorsa MTF a halucelui, nu UCL al policelui.']],
 8,'Mută UCL-ul policelui pe Ahile, Mallet sau ATFL, trei teste de stabilitate din paginile învecinate.',['degetul schiorului','Ligamentul colateral ulnar']),
];
