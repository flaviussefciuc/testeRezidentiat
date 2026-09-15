import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=219?p-83:p<=225?p-85:p-87;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('colon',15,pdfOffset,`colon-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const COLON_C=[
q(44,['Colonul, rectul și anusul, ca organe, se caracterizează prin:',
 ['Nu sunt biologic esențiale; teoretic se poate trăi o viață normală fără colon, rect și anus','Deși colonul are un rol mai puțin important în nutriție decât intestinul subțire, afecțiunile colorectale sunt, de departe, mai frecvente','Anusul, canalul anal și sfincterele sunt esențiale pentru continență și viața socială','Absența colonului face imposibilă homeostazia hidrică, deci colectomia totală este incompatibilă cu viața','Intestinul subțire este biologic superfluu, spre deosebire de colon'],'ABC',216,'Anatomie — Importanță biologică',
 'Recunoașterea că cele trei segmente nu sunt esențiale pentru supraviețuire, deși continența anală este socialmente critică.',
 ['Textul precizează că organele nu sunt biologic esențiale.','Paradoxul „mai puțin important în nutriție, dar boli mai frecvente” este explicit.','Rolul continenței pentru viața socială este citat.','Excizia colonului și rectului nu afectează nutriția normală (pagina de fiziologie); viața fără colon este posibilă.','Intestinul subțire, nu colonul, este esențial nutrițional.']],
 8,'Inversează esențialitatea colon versus intestin subțire, pe un enunț contraintuitiv din deschiderea capitolului.',['nu sunt biologic esenţiale','viaţă socială normală'],[219]),

q(45,['Vascularizația și drenajul colonului includ:',
 ['Ascendentul și două treimi proximale ale transversului sunt vascularizate de ramuri ale arterei mezenterice superioare','Treimea distală a transversului, descendentul și sigmoidul sunt vascularizate de ramuri ale arterei mezenterice inferioare','Vena mezenterică inferioară se varsă în vena splenică, care se unește cu vena mezenterică superioară pentru a forma vena portă','Arcada marginală începe de la arterele sigmoidiene și se termină la colica dreaptă','Drenajul limfatic este independent de arterele colice, ganglionii pericolici lipsind'],'ABC',217,'Anatomie — Vascularizație și limfatice',
 'Maparea teritoriilor AMS versus AMI și a confluenței IMV–splenică–portă.',
 ['Teritoriul AMS este explicit.','Teritoriul AMI este citat.','Lanțul IMV → splenică → portă este descris.','Arcada marginală începe de la ramurile colicei drepte și se termină cu ramurile sigmoidiene.','Limfaticele se realizează paralel cu circulația arterială, de la ganglionii pericolici până la plexul periaortic.']],
 8,'Inversează originea arcadei marginale și desparte limfaticele de arterele pe care textul le leagă.',['arterei mezenterice superioare','vena splenică']),

q(46,['Complexul sfincterian anal se caracterizează prin:',
 ['Sfincterul intern este o continuare a stratului muscular neted circular al rectului și este controlat involuntar','Sfincterul extern este o continuare a mușchiului ridicător anal și este parțial sub control voluntar','Canalul anal măsoară 12–18 cm, identic rectului','Sfincterul intern este striat, iar cel extern este neted circular','Controlul intern este pur voluntar, fără componentă involuntară'],'AB',219,'Anatomie — Sfincterele anale',
 'Diferențierea intern (neted, involuntar) versus extern (striat, parțial voluntar), față de lungimea canalului 2,5–5 cm.',
 ['Continuitatea cu circularul rectal și controlul involuntar sunt explicite.','Continuitatea cu ridicătorul anal și controlul parțial voluntar sunt citate.','Canalul anal are 2,5–5 cm; 12–18 cm este lungimea rectului.','Internul este neted, externul striat eliptic.','Internul este controlat involuntar.']],
 8,'Permutează lungimea canalului cu cea a rectului și inversează tipul de mușchi intern/extern.',['sfincter anal intern','ridicător anal']),

q(47,['Absorbția colică a apei și electroliților include:',
 ['Din intestinul subțire se evacuează în cec 1–2 L de chim în fiecare zi','Până la 90% din apa chimului este absorbită, cu evacuarea zilnică a <200 mL de lichid în scaunul solid','Nouăzeci la sută din sodiul conținutului ileal este absorbit activ la schimb cu secreția de potasiu','Absorbția clorului este 75% pasivă (gradient Na) și 25% prin antiport clor-bicarbonat','Apa nu se absoarbe în cec, colonul fiind doar un rezervor, fără schimb ionic'],'ABCD',219,'Fiziologie — Apă și electroliți',
 'Aplicarea fluxului 1–2 L, a retenției <200 mL și a cuplurilor Na/K și Cl/HCO3.',
 ['Volumul 1–2 L/zi este explicit.','90% din apă și <200 mL în scaun sunt citate.','Schimbul activ Na contra K (90%) este descris.','Raportul 75%/25% pasiv versus antiport Cl-HCO3 este enumerat.','Cecul, ascendentul și transversul reglează cea mai mare parte a absorbției de sodiu și apă.']],
 8,'Anulează absorbția ionică, deși pagina detaliază trei mecanisme cantitative ușor de inversat.',['1-2 L de chim','<200 mL de lichid']),

q(48,['Flora și gazele colonice se caracterizează prin:',
 ['Există peste 400 de tipuri de bacterii, cele mai multe anaerobe; Bacteroides fragilis este cel mai comun bacil Gram-negativ anaerob','Fermentația produce aproximativ 800–900 mL de gaz zilnic, eliminat în mare parte prin flatulență','În compoziția gazului, azotul reprezintă circa 70%, provenit din aerul înghițit','Flora colonică este lipsită de enterococi și Clostridium','Excizia colonului și rectului anulează orice posibilitate de nutriție normală'],'ABC',219,'Fiziologie — Floră și fermentație',
 'Reținerea celor 400 de specii, a B. fragilis și a volumului 800–900 mL cu 70% azot.',
 ['Cifra de peste 400 de tipuri și B. fragilis sunt explicite.','Volumul 800–900 mL este citat.','Ponderea de 70% azot din aer înghițit este menționată.','Flora este bogată în enterococi și specii de Clostridium.','Excizia colonului și rectului nu afectează nutriția normală.']],
 8,'Scoate enterococii/Clostridium din floră și declară colectomia incompatibilă cu nutriția.',['peste 400 de tipuri','800-900 mL de gaz']),

q(49,['Identificați afirmația corectă referitoare la funcția digestivă a colonului:',
 ['Reprezintă doar o mică parte din digestia și absorbția totală; excizia chirurgicală a întregului colon și a rectului nu afectează capacitatea de a menține o nutriție normală','Este principala cale de absorbție a proteinelor, colectomia totală producând malnutriție severă','Vilozitățile colice, identice jejunului, asigură 90% din absorbția calorică','Fermentația colonică înlocuiește complet intestinul subțire după rezecții scurte','Gazele colonice sunt 70% oxigen, nu azot'],'A',219,'Fiziologie — Rol nutritiv',
 'Recunoașterea că colectomia totală lasă nutriția intactă, digestia colonică fiind minoră.',
 ['Enunțul despre micul rol digestiv și nutriția după excizie este explicit.','Proteinele se absorb predominant în intestinul subțire; textul neagă impactul nutritiv al colectomiei.','Colonul nu are vilozități.','Fermentația ajută amidonuri/proteine rezistente, nu înlocuiește intestinul subțire.','Azotul, nu oxigenul, este 70% din gaz.']],
 8,'Transformă colectomia într-o catastrofă nutritivă, contrar frazei explicite din text.',['nutriţie n01mală','Funcţia digestivă']),

q(50,['Patogeneza diverticulului dobândit și a diverticulitei include:',
 ['Diverticulii falși sunt hernia mucoasei și submucoasei prin defecte musculare, la locurile unde vasele penetrează peretele','Inflamația este inițiată de obstrucția coletului diverticular de către un coprolit, cu micro- sau macroperforație','Diverticulii adevărați herniează doar mucoasa, fiind tipici sigmoidului vestic','Obstrucția coletului nu joacă niciun rol, diverticulita fiind o ischemie de unghi hepatic','Vasele nu traversează peretele colic, deci herniația nu are puncte de minimă rezistență'],'AB',222,'Diverticuloza — Herniere și coprolit',
 'Legarea herniei false de punctele de penetrare vasculară și a diverticulitei de obstrucția coprolitică a coletului.',
 ['Hernia mucoasă/submucoasă la locul vaselor este explicită.','Obstrucția coletului de coprolit este mecanismul citat.','Diverticulii adevărați herniează toate straturile și sunt mai frecvenți pe dreapta/Asia.','Unghiul hepatic nu este mecanismul diverticulitei.','Textul identifică tocmai zonele de penetrare vasculară ca puncte slabe.']],
 8,'Inversează conținutul parietal al diverticulului adevărat versus fals și mută ischemia pe unghiul hepatic.',['vasele de sânge','un coprolit'],[223]),

q(51,['După un episod de diverticulită tratată medical sunt adevărate următoarele:',
 ['Este necesară o examinare colonoscopică ulterioară pentru a exclude leziuni mucoase, inclusiv neoplazice sau colită','Antibioticele IV, când spitalizarea e necesară, acoperă Gram-negative coliforme și anaerobi, în particular B. fragilis, 5–7 zile','Boala diverticulară simptomatică necomplicată (BDSN) nu asociază febră și leucocitoză, mucoasa endoscopică fiind nemodificată în afara diverticulilor','Colonoscopia de control este inutilă, mucoasa neputând ascunde neoplazii','BDSN se definește prin abces pericolic și peritonită generalizată'],'ABC',224,'Diverticulită — Antibiotice și colonoscopie de control',
 'Aplicarea ferestrei 5–7 zile și a colonoscopiei post-episod, plus absența febrei în BDSN.',
 ['Colonoscopia ulterioară pentru a exclude neoplazia/colita este explicită.','Spectrul (coliforme + B. fragilis) și durata 5–7 zile sunt citate.','Absența febrei/leucocitozei și a modificărilor mucoasei în BDSN este descrisă.','Scopul colonoscopiei este tocmai excluderea altor leziuni mucoase.','BDSN este simptomatică fără inflamație macroscopică, nu abces/peritonită.']],
 8,'Anulează colonoscopia de control, capcana clasică de a rata un cancer sub masca diverticulitei.',['5-7 zile','B. Fragilis'],[223]),

q(52,['Tratamentul fistulelor diverticulare, în afara diagnosticului, include:',
 ['Pentru fistulele colovezicale: sutură primară a vezicii și rezecție sigmoidiană cu anastomoză','Pentru fistulele colovaginale: desființarea fistulei cu rezecție sigmoidiană și anastomoză; orificiul vaginal se închide per secundam','Majoritatea acestor fistule se operează în urgență, manifestările fiind grav septicemice','Hartmann este regula în fistula colovezicală electivă, anastomoza fiind evitată','Orificiul vaginal se suturează în trei straturi, vindecarea per secundam fiind contraindicată'],'AB',224,'Fistule diverticulare — Tehnică chirurgicală',
 'Recunoașterea rezecției-anastomoză elective și a vindecării vaginale per secundam, față de Hartmann-ul de urgență.',
 ['Sutura vezicală plus rezecție-anastomoză este explicită.','Desființarea, rezecția și vindecarea vaginală per secundam sunt citate.','Majoritatea se operează elective, manifestările fiind rareori grave.','Hartmann ține de perforația liberă/obstrucție, nu de fistula electivă.','Textul lasă orificiul vaginal să se închidă per secundam.']],
 8,'Forțează Hartmann-ul pe fistula electivă, inversând caracterul rar grav al acestor fistule.',['sutura primară a vezicii','per secundam']),

q(53,['Hemoragia digestivă inferioară de cauză diverticulară se caracterizează epidemiologic prin:',
 ['Aproximativ 70% dintre hemoragiile tubului digestiv inferior sunt cauzate de diverticuloză','Sângerarea este simptomul inițial la 5–10% dintre pacienții cu boală diverticulară','Într-un sfert dintre hemoragiile diverticulare, sângerarea este masivă','Sonda nazogastrică se aspiră până la evidențierea bilei, pentru a exclude o sursă superioară','Diverticuloza explică sub 5% din hemoragiile inferioare, sângerarea fiind tot timpul dureroasă'],'ABCD',225,'Hemoragia diverticulară — Epidemiologie și triaj',
 'Aplicarea ponderii de 70%, a debutului ca prim simptom (5–10%) și a aspiratului biliar pe SNG.',
 ['Cifra de aproximativ 70% este explicită.','Intervalul 5–10% ca simptom inițial este citat.','Un sfert masive este menționat.','Aspirarea până la bilă pentru excluderea HDS este descrisă.','70%, nu sub 5%; sângerarea rectală diverticulară este nedureroasă.']],
 8,'Reduce ponderea de 70% la 5% și adaugă durerea, două capcane de triaj al HDI.',['Aproximativ 70%','5-10% dintre toţi'],[224]),

q(54,['După oprirea angiografică a hemoragiei diverticulare cu vasopresină, rezecția colică se programează, când pacientul e mai stabil, la un interval de:',
 ['8–12 ore','24–48 de ore, identic exciziei hemoroidului extern trombozat','5–7 zile, ca durata antibioticelor IV din diverticulită','2–3 săptămâni, ca fereastra necrectomiei pancreatice','Imediat, înaintea oricărei resuscitări'],'A',225,'Hemoragia diverticulară — Timing după vasopresină',
 'Reținerea ferestrei 8–12 ore de temporizare după vasopresină, distinct de alte intervale din capitol.',
 ['Intervalul 8–12 ore după stabilizare este explicit.','24–48 de ore ține de hemoroidul extern trombozat, nu de această temporizare.','5–7 zile este durata antibioticelor în diverticulita spitalizată.','2–3 săptămâni nu figurează aici.','Vasopresina permite resuscitarea înaintea rezecției, nu operația imediată.']],
 8,'Permutează 8–12 ore cu ferestre din hemoroid, diverticulită sau necroză pancreatică.',['8-12 ore','injectarea de vasopresină']),

q(55,['Epidemiologia colitei ulcerative, potrivit textului, include:',
 ['Raportul femei:bărbați este 5:4','Incidența anuală în țările vestice este de 10/100.000 locuitori','Aproximativ 20% dintre pacienți au antecedente familiale de CU','Histopatologic, rectul este afectat în >90% dintre cazuri, cu extensie proximală variabilă','Boala este neobișnuită în comunitățile evreiești și tipică la amerindieni'],'ABCD',225,'Colita ulcerativă — Epidemiologie',
 'Reținerea raportului 5:4, a incidenței 10/100.000, a agregării familiale 20% și a interesării rectale >90%.',
 ['Raportul 5:4 este explicit.','Cifra 10/100.000 este citată.','Proporția de 20% cu antecedente familiale este menționată.','Afectarea rectală >90% este din paragraf.','Incidența este crescută în anumite comunități evreiești și neobișnuită la afro-americani și amerindieni.']],
 8,'Inversează geografia etnică (evrei versus amerindieni) pe fondul a trei procente memorabile.',['5:4','l 0/100.000']),

q(56,['Distribuția bolii Crohn, în afara comparației cu CU, se caracterizează prin:',
 ['În aproximativ jumătate din cazuri sunt afectate intestinul subțire și gros, de obicei lângă valva ileocecală','Alte 25% interesează fie doar intestinul subțire, fie doar intestinul gros','În aproximativ 10% există doar interesare perianală','Localizarea gastrică și duodenală este atipică, circa 2% dintre cazuri','90% dintre cazuri sunt strict perianale, fără ileon sau colon'],'ABCD',225,'Boala Crohn — Distribuție anatomică',
 'Maparea 50%/25%/10%/2% pe segmentele digestive, față de transformarea perianalului în regula de 90%.',
 ['Proporția de jumătate ileocolic este explicită.','Cei 25% mono-organ (doar IS sau doar IG) sunt citați.','Cei 10% doar perianali sunt menționați.','Cei 2% gastroduodenali sunt descriși ca atipici.','Majoritatea cu interesare perianală au și intestin subțire și gros; 90% nu este cifra perianal-izolată.']],
 8,'Umflă localizarea perianală izolată de la 10% la 90%, o confuzie cu interesarea rectală din CU.',['aproximativ 2%','I 0% dintre cazu1']),

q(57,['Conform Tabelului 15-2, deosebirile de evoluție și tratament CU versus Crohn includ:',
 ['Tratamentul chirurgical al CU este curativ, al Crohn paliativ; recurența lipsește în CU și este frecventă în Crohn','Răspunsul medical inițial este ridicat (>80%) în CU și mai puțin predictibil în Crohn','Radiologic, CU dă semnul corzii pe intestinul subțire, iar Crohn aspect de țeavă de plumb concentrică','Fistula perianală este frecventă în CU și rară în Crohn','Megacolonul este rar în CU și frecvent în Crohn'],'AB',228,'Tabelul 15-2 — Tratament și evoluție',
 'Aplicarea caracterului curativ al chirurgiei în CU versus paliativ în Crohn și a răspunsului medical >80%.',
 ['Curativ versus paliativ și recurența sunt din tabel.','Răspunsul >80% versus mai puțin predictibil este citat.','Țeava de plumb este CU; semnul corzii (intestin subțire) este Crohn.','Fistula perianală este rară în CU și frecventă în Crohn.','Megacolonul este frecvent în CU și rar în Crohn.']],
 8,'Inversează semnele radiologice țeavă de plumb versus coardă și ierarhia fistulei/megacolonului.',['>80%','Tratament chirurgical']),

q(58,['Imagistica ocluziei și volvulusului colonic include:',
 ['Volvulusul sigmoidian poate avea aspect de „boabă de cafea” sau de „tub îndoit interior” pe radiografia simplă','Clisma cu contrast hidrosolubil (ex. Gastrografin) cu capăt în „cioc de pasăre” este sugestivă pentru volvulus colonic','Bariul nu se administrează când există suspiciunea de obstrucție sau perforație a colonului','Pneumatoza parietală pe radiografie este un semn benign, fără risc de ischemie','Aerul liber subdiafragmatic exclude perforația și face CT-ul inutil'],'ABC',229,'Ocluzia intestinului gros — Semne radiologice',
 'Recunoașterea semnelor „boabă de cafea”/„cioc de pasăre” și a interdicției bariului la obstrucție/perforație.',
 ['Aspectul de boabă de cafea/tub îndoit este explicit.','Ciocul de pasăre cu Gastrografin este citat.','Interdicția bariului la suspiciune de obstacol/perforație este enunțată.','Pneumatoza sugerează ischemia colonului, semn de gravitate.','Aerul liber subdiafragmatic indică perforația.']],
 8,'Transformă pneumatoza și aerul subdiafragmatic în semne de liniștire, inversând gravitatea.',['boabă de cafea','cioc de pasăre'],[228]),

q(59,['În ocluzia colonului prin cancer, fără peritonită, conduita poate include:',
 ['O procedură endoscopică cu montarea unui stent, care permite decompresia fără chirurgie de urgență și fără colostomă','Laparotomia de urgență când distensia cecului depășește 12 cm, cu sensibilitate, peritonită sau sepsis','Stentul înlocuiește rezecția electivă ulterioară la boala localizată, oncologia nemaifiind necesară','Ocluzia completă se tratează doar prin clismă baritată, fără evaluare chirurgicală','Cecul de 12 cm este pragul de externare, nu de laparotomie'],'AB',229,'Ocluzia prin cancer — Stent versus laparotomie',
 'Separarea stentului (fără peritonită) de laparotomia de urgență la cec >12 cm/peritonită.',
 ['Stentul ca decompresie fără urgență/colostomă este explicit.','Pragul de 12 cm al cecului plus peritonită/sepsis este citat.','Stentul poate fi punte spre rezecție electivă sau paliație, nu substitut oncologic al rezecției în boala localizată.','Ocluzia completă are indicație chirurgicală aproape constantă; bariul este evitat.','12 cm orientează spre laparotomie, nu spre externare.']],
 8,'Transformă stentul într-un substitut oncologic și 12 cm într-un criteriu de externare.',['montarea unui stent','depăşeşte 12 cm']),

q(60,['După detorsionarea endoscopică a volvulusului sigmoidian, fără ischemie, sunt adevărate următoarele:',
 ['Manevra este eficientă pentru 60–95% dintre pacienți','Un tub de decompresie se lasă, în general, 1–3 zile, pentru a menține detorsionarea și a permite pregătirea mecanică','Rezecția sigmoidului cu anastomoză, în internarea inițială, este cea mai eficientă împotriva recurenței','Detorsionarea endoscopică a cecului este gestul de elecție, rezecția cecală fiind evitată','Tubul de decompresie se lasă 3 săptămâni, recurența fiind rară fără rezecție'],'ABC',230,'Volvulus sigmoidian — După detorsionare',
 'Aplicarea ratei 60–95%, a tubului 1–3 zile și a rezecției în aceeași internare, față de detorsionarea cecală nerecomandată.',
 ['Intervalul 60–95% este explicit.','Durata 1–3 zile a tubului este citată.','Rezecția-anastomoză în internarea inițială este descrisă ca cea mai eficientă anti-recidivă.','Încercările de detorsionare endoscopică a cecului nu sunt, în general, recomandate.','Recurența este înaltă fără chirurgie; 3 săptămâni nu este durata tubului.']],
 8,'Extinde detorsionarea endoscopică la cec, exact manevra pe care textul o descurajează.',['60-95% dintre pacienţi','1-3 zile']),

q(61,['Tratamentul de primă linie al sindromului Ogilvie, fără ischemie sau perforație și cu cec <12 cm, include:',
 ['Corectarea electroliților, resuscitare volemică, minimizarea narcoticelor și anticolinergicelor, NPO, mobilizare, SNG și tub de gaze, cu rezoluție în 70–90%','Laxativele orale osmotice și stimulantele de peristaltică trebuie evitate, putând accentua dilatația','Neostigmina se administrează fără monitorizare, în sarcină și ischemie, ca primă linie înaintea măsurilor suportive','Laxativele osmotice sunt de primă intenție, gazele accelerând decompresia','Cecostomia este gestul inițial la cec sub 12 cm, fără încercare suportivă'],'AB',230,'Sindromul Ogilvie — Prima linie',
 'Reținerea ratei 70–90% a măsurilor suportive și a interdicției laxativelor osmotice.',
 ['Pachetul suportiv și 70–90% sunt explicite.','Evitarea laxativelor osmotice/stimulante este citată.','Neostigmina este linia a doua, cu monitorizare; este contraindicată în ischemie, perforație, sarcină.','Laxativele osmotice accentuează dilatația, deci se evită.','Chirurgia (inclusiv cecostomia) este rezervată ischemiei, perforației sau dilatației refractare.']],
 8,'Pune neostigmina și cecostomia înaintea măsurilor suportive, inversând treptele algoritmului.',['70-90% dintre cazuri','Laxativele orale']),

q(62,['În sindromul Ogilvie cu colon viabil, dar dilatat, refractar la terapia non-chirurgicală, cecostomia (inclusiv dirijată pe tub) are o rată de succes de:',
 ['95–100%','10%, identică ratei de dilatație persistentă','1–3%, identică ratei de perforație la colonoscopie','60–95%, identică detorsionării endoscopice a sigmoidului','Circa 50%, inferioară rezecției de principiu'],'A',230,'Sindromul Ogilvie — Cecostomie',
 'Reținerea ratei 95–100% a cecostomiei pe colon viabil, distinct de celelalte procente din același paragraf.',
 ['Intervalul 95–100% este explicit pentru colon viabil dilatat.','Aproximativ 10% este rata dilatației persistente refractare, nu succesul cecostomiei.','1–3% este rata de perforație a colonoscopiei în POAC.','60–95% descrie detorsionarea endoscopică a volvulusului sigmoidian.','Textul atribuie cecostomiei succes aproape complet, nu 50%.']],
 8,'Amestecă 95–100% cu 10%, 1–3% și 60–95%, toate prezente pe aceeași pagină.',['95-100% dintre pacienţi','Cecostomia']),

q(63,['În epidemiologia și prevenția cancerului colorectal sunt adevărate următoarele:',
 ['Aproximativ 6% dintre cancerele colorectale sunt cauzate de un sindrom familial cu mutație cunoscută','Sindromul PAF, prin mutația genei APC, este responsabil de 1% din cazuri','Inhibitorii de prostaglandină (aspirină, sulindac), consumați regulat, scad riscul de polipi adenomatoși și de cancer de colon','Anual sunt identificate circa 140.000–145.000 de cazuri noi, iar >55.000 de oameni mor prin această boală','PAF este responsabil de 10% din cancere, iar chimioprevenția cu carotenoizi este dovedit eficientă'],'ABCD',231,'Cancer colorectal — Familial și chimioprevenție',
 'Diferențierea PAF 1% de totalul familial 6% și recunoașterea evidenței pentru aspirină/sulindac, nu pentru carotenoizi.',
 ['Cifra de aproximativ 6% familial este explicită.','PAF/APC 1% este citat.','Aspirina și sulindacul sunt menționate cu evidență de scădere a riscului.','140.000–145.000 cazuri noi și >55.000 decese sunt din paragraf.','PAF este 1%, nu 10%; eficacitatea carotenoizilor/antioxidanților nu este dovedită.']],
 8,'Umflă PAF de la 1% la 10% și atribuie carotenoizilor o eficacitate pe care textul o neagă.',['6% din toate','genei APC'],[232]),

q(64,['Screeningul cancerului colorectal, la persoanele cu risc mediu sau ridicat, include:',
 ['De la 50 de ani, riscul mediu: colonoscopie la fiecare 10 ani sau sigmoidoscopie flexibilă la fiecare 5 ani','Colonografia CT (colonoscopie virtuală) la fiecare 5 ani este o variantă care identifică polipi și cancer','Pacienții cu BII de 10 ani sau mai mult încep colonoscopia anuală cu biopsii','Ruda de gradul I cu cancer de colon: colonoscopie cu 10 ani înainte de vârsta de diagnostic a rudei sau de la 50 de ani','Riscul mediu începe screeningul la 30 de ani, cu colonoscopie anuală, fără teste pe scaun'],'ABCD',232,'Screeningul cancerului colorectal',
 'Aplicarea vârstei 50 de ani, a intervalelor 10/5 ani și a regulii „10 ani înainte” la ruda de gradul I.',
 ['Vârsta 50 și intervalele colonoscopie 10 ani / sigmoidoscopie 5 ani sunt explicite.','Colonografia CT la 5 ani este listată.','Regula BII ≥10 ani cu colonoscopie anuală și biopsii este citată.','Fereastra de 10 ani înainte sau 50 de ani este descrisă.','Riscul mediu începe la 50 de ani, nu la 30, și colonoscopia nu este anuală.']],
 8,'Deplasează screeningul riscului mediu la 30 de ani și anual, contrar schemei din casetă.',['vârsta de 50 de ani','fiecare 1 O ani']),

q(65,['Rata de supraviețuire la 5 ani în cancerul colorectal, potrivit datelor SEER citate, este de:',
 ['65%','90%, identică ponderii cancerelor după 50 de ani','5%, identică ponderii HNPCC','1%, identică ponderii PAF','30%, identică diseminării ganglionare la diagnostic'],'A',232,'Cancer colorectal — Supraviețuire',
 'Reținerea cifrei de 65% la 5 ani, distinct de alte procente din același capitol.',
 ['Rata de 65% este explicită.','90% este ponderea cancerelor dezvoltate după 50 de ani, nu supraviețuirea.','5% este ponderea HNPCC.','1% este ponderea PAF.','30% este ponderea diseminării în ganglionii mezenterici la diagnostic.']],
 8,'Permutează 65% cu 90%/5%/1%/30%, toate cifre din capitolul de cancer colorectal.',['65%','5 ani'],[234]),

q(66,['Stadializarea adenocarcinomului colorectal, dincolo de TNM, include:',
 ['CT toracic, abdominal și pelvin, pentru a exclude metastaze; localizările comune sunt ficatul și plămânul','Dozarea CEA, utilă în urmărirea după rezecție, deși antigenul nu este specific cancerului colorectal','Cancerul rectal necesită IRM sau ecografie endorectală pentru profunzimea invaziei (T) și ganglionii','CEA pozitiv confirmă diagnosticul și înlocuiește colonoscopia','Stadializarea rectală nu cere imagistică pelvină, T3 fiind clinic evident'],'ABC',234,'Stadializare — CT, CEA, IRM rectal',
 'Separarea rolului de urmărire al CEA de lipsa specificității diagnostice și a IRM/ERUS-ului rezervat rectului.',
 ['Tripletul CT și sediile hepatic/pulmonar sunt explicite.','CEA ca marker de recurență, nespecific, este citat.','IRM sau ecografia endorectală pentru T și N rectale sunt descrise.','CEA nu este specific și nu înlocuiește colonoscopia.','Rectul cere explorare suplimentară pelvină.']],
 8,'Transformă CEA nespecific într-un test diagnostic care înlocuiește colonoscopia.',['antigenului carcinoembrionar','IRM sau ecografie endorectală']),

q(67,['Tehnica rezecției pentru cancerul de colon și rect include:',
 ['30% dintre cancerele de colon sunt diseminate în ganglionii limfatici mezenterici regionali la diagnostic, de aceea mezenterul se îndepărtează odată cu segmentul','După rezecția anterioară joasă, marginea distală de siguranță este de 1 cm, iar anastomoza este de obicei protejată prin stomă proximală temporară','Excizia incompletă a mezorectului este de principiu, grăsimea perirectală neconținând ganglioni','Stoma temporară după rezecția joasă crește recurența locală și se evită','Tumorile care invadează sfincterul se tratează prin anastomoză primară, fără colostomie definitivă'],'AB',234,'Tratamentul chirurgical — Limfadenectomie și LAR',
 'Aplicarea ponderii de 30% N+ și a marginii distale de 1 cm cu stomă de protecție după LAR.',
 ['Cifra de 30% și îndepărtarea mezenterului sunt explicite.','Marginea de 1 cm și stoma temporară de protecție sunt citate.','Excizia completă de mezorect (grăsimea cu ganglioni) este parte importantă a tehnicii.','Stoma protejează de fistula anastomotică, nu crește recurența.','Invazia sfincterului indică rezecție abdomino-perineală și colostomie sigmoidiană definitivă.']],
 8,'Anulează TME și lasă sfincterul invadat pe anastomoză primară, două erori de radicalitate.',['30% dintre cancerele','I cm, distal']),

q(68,['Chimioterapia adjuvantă în cancerul colorectal se caracterizează prin:',
 ['Stadiile I și 2 de colon se tratează corespunzător doar prin rezecție; chimioterapia este recomandată în stadiul 3 de colon și în stadiile 2 și 3 rectale','Standardul actual este 4–6 luni de 5-FU, leucovorin și oxaliplatin (FOLFOX)','Oxaliplatinul, utilizat singur, pare de două ori mai eficient decât 5-FU în reducerea recurenței la pacienții cu risc crescut','Stadiul 1 rectal impune FOLFOX de principiu, înaintea oricărei rezecții','Bevacizumabul înlocuiește chirurgia în stadiile I–II de colon'],'ABC',235,'Adjuvanța — FOLFOX',
 'Diferențierea stadiilor colon I–II (doar chirurgie) de colon III / rect II–III (chimio) și a duratei FOLFOX 4–6 luni.',
 ['Pragurile de stadiu pentru chimio sunt explicite.','Schema FOLFOX 4–6 luni este numită standard.','Dublarea eficacității oxaliplatinului față de 5-FU este citată.','Stadiul 1 rectal nu figurează ca indicație de FOLFOX preoperator de principiu; neoadjuvanța rectală vizează T3/T4 sau N+.','Agenții biologici sunt promițători mai ales în metastaze hepatice, nu substituie chirurgia stadiilor precoce.']],
 8,'Extinde FOLFOX la stadiul I rectal și înlocuiește chirurgia cu bevacizumab, contrar algoritmului pe stadii.',['4-6 luni','FOLFOX'],[234]),

q(69,['Urmărirea după rezecția cancerului colorectal include:',
 ['Cele mai multe recurențe au loc în primele 18–24 de luni','Anamneză, examen fizic și CEA la fiecare 3 luni în primii 2 ani, apoi la fiecare 6 luni următorii 3 ani; colonoscopie la 1 an și la 4 ani, apoi la fiecare 5 ani','CEA se dozează o singură dată preoperator, recurența nefiind legată de dinamica antigenului','Colonoscopia se repetă lunar în primul an, CT-ul anual fiind inutil în stadiul 3','Recidivele izolate nu se rezecă, supraviețuirea medie fiind sub o lună'],'AB',235,'Supraveghere postoperatorie',
 'Aplicarea vârfului de recurență 18–24 luni și a calendarului CEA 3/6 luni plus colonoscopie 1–4–5 ani.',
 ['Intervalul 18–24 luni este explicit.','Calendarul CEA și al colonoscopiei este enumerat.','Recidivele sunt sugerate și de creșterea progresivă a CEA, nu doar de valoarea absolută.','CT anual este pentru pacienții cu risc (stadiul 3); colonoscopia nu este lunară.','Rezecția recidivelor izolate, cu chimio și embolizare hepatică, poate duce la supraviețuire medie de 2 ani.']],
 8,'Comprimă supravegherea la un singur CEA preoperator și neagă rezecția recidivei izolate.',['18-24 luni','la I an şi la 4 ani']),

q(70,['În patologia anorectală, anamneza completă sugerează diagnosticul în:',
 ['Peste 80% dintre cazuri și ghidează examinările ulterioare','Sub 10% dintre cazuri, inspecția fiind inutilă fără IRM','Aproximativ 30%, identic diseminării ganglionare colice','5%, identic ponderii HNPCC','1%, identic ponderii PAF'],'A',235,'Patologie anorectală — Anamneză',
 'Reținerea cifrei de peste 80% pentru valoarea anamnezei, înaintea anuscopiei și a imagisticii.',
 ['Proporția de peste 80% este explicită.','Textul subliniază anamneza și examenul, nu inutilitatea inspecției.','30% ține de ganglionii mezenterici în cancerul de colon.','5% este HNPCC.','1% este PAF.']],
 8,'Permutează 80% cu procente oncologice din paginile precedente.',['mai mult de 80%','Ananu1eză completă']),

q(71,['Hemoroizii, ca structuri anatomice, se caracterizează prin:',
 ['Sunt de obicei localizați în trei poziții constante: lateral stânga, anterior dreapta și posterior dreapta','Internii au originea deasupra liniei pectinee; externii sub nivelul liniei pectinee','La tuse sau strănut, țesutul hemoroidal se umple rapid cu sânge și oferă o barieră fizică suplimentară împotriva scurgerii de gaze sau fecale','Internii sunt acoperiți de anoderm bogat inervat, deci sângerarea internă este intens dureroasă','Sarcina, ascită, hipertensiunea portală și diareea excesivă nu influențează simptomele'],'ABC',236,'Hemoroizi — Poziții și continență',
 'Maparea celor trei poziții, a liniei pectinee și a rolului de barieră la creșterea presiunii abdominale.',
 ['Cele trei poziții constante sunt enumerate.','Originea față de linia pectinee este explicită.','Umplerea la tuse/strănut ca barieră este citată.','Mucoasa de deasupra liniei pectinee nu conține receptori de durere; sângerarea internă este de obicei nedureroasă.','Sarcina, ascită, tumori, HTP și diareea excesivă pot influența dezvoltarea simptomelor.']],
 8,'Atribuie internilor inervația dureroasă a anodermului, inversând caracterul nedureros al rectoragiei interne.',['lateral stânga','liniei pectinee']),

q(72,['Clasificarea hemoroizilor interni (Tabelul 15-6) distinge:',
 ['Gradul I nu prolabează; gradul II prolabează la defecație și se reduce spontan; gradul III necesită reducere manuală; gradul IV nu se reduce','Ligatura cu benzi elastice poate fi efectuată pentru gradele I, II și o parte dintre cei de grad III','Gradul I prolabează ireductibil, impunând hemoroidectomie de principiu','Ligatura se rezervă doar gradului IV, gradele I–II neavând tratament','Hemoroizii asimptomatici se operează din considerente estetice'],'AB',236,'Hemoroizi interni — Grade și ligatură',
 'Aplicarea treptelor de prolaps I–IV și a ligaturii pentru I–II și o parte din III, față de hemoroidectomia de grad IV.',
 ['Definițiile celor patru grade sunt din tabel/text.','Ligatura pentru I, II și o parte din III este explicită.','Gradul I nu prolabează; hemoroidectomia ține de gradul IV și de mixtele III cu componentă externă.','Ligatura nu este rezervată gradului IV.','Hemoroizii asimptomatici nu necesită tratament; tratamentul estetic nu este indicat.']],
 8,'Mută hemoroidectomia pe gradul I și ligatura pe gradul IV, inversând treptele tabelului.',['grad I','Ligatura cu benzi elastice'],[237]),

q(73,['Abcesul anorectal de origine criptoglandulară, dincolo de drenaj, se caracterizează prin:',
 ['Maximul de incidență este între 20 și 40 de ani','Aproximativ o treime dintre pacienți vor fi diagnosticați cu fistulă la luni sau ani după drenajul abcesului','Incizia se efectuează cât mai aproape de marginea anală, pentru a minimiza lungimea unei potențiale fistule','Antibioticele se rezervă celulitei semnificative, semnelor sistemice sau imunosupresiei','Febra și frisoanele sunt regula, abcesele superficiale impunând IRM înaintea oricărui drenaj'],'ABCD',237,'Abces anorectal — Incidență, fistulă, antibiotice',
 'Combinarea vârfului 20–40 de ani, a ratei de o treime fistulă tardivă și a rezervei de antibiotice pentru celulită/sepsis.',
 ['Intervalul 20–40 de ani este explicit.','Proporția de aproximativ o treime este citată.','Incizia aproape de marginea anală este descrisă.','Rezerva antibioticelor pentru celulită, semne sistemice sau imunosupresie este enunțată.','Febra și frisoanele sunt rar întâlnite; abcesele superficiale nu cer imagistică de rutină.']],
 8,'Transformă febra rară în regulă și cere IRM înaintea drenajului superficial, contrar algoritmului clinic.',['2�0 ani','aproximativ o treime']),
];
