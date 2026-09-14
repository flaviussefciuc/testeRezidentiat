import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('dermato',9,pdfOffset,`dermato-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const DERMATO_ADVANCED=[
q(1,['Celulita se caracterizează prin:',
 ['Este determinată cel mai frecvent de streptococul de grup A','Culturile bacteriene cutanate și din plagă sunt rareori utile, deoarece conțin frecvent floră comensală sau sunt fals negative','Tratamentul constă în cefalosporine orale sau β-lactamine rezistente la penicilinază, timp de 10–14 zile','Rata de recurență este sub 5%','Agentul etiologic cel mai frecvent este Staphylococcus aureus meticilino-rezistent'],'ABC',196,'Infecții — Celulita',
 'Recunoașterea etiologiei, a valorii limitate a culturilor și a duratei tratamentului în celulită.',
 ['Streptococul de grup A este agentul cel mai frecvent citat.','Nota „De reținut” precizează utilitatea redusă a culturilor.','Schema de 10–14 zile cu cefalosporine orale sau β-lactamine rezistente la penicilinază este explicită.','Rata de recurență citată este de 20–50%, nu sub 5%.','MRSA este agentul tipic al abceselor cutanate, nu al celulitei.']],
 8,'Distractorii confundă etiologia celulitei cu cea a abceselor și subestimează drastic rata reală de recurență.',['streptococul de grup A','20-50%']),

q(2,['Fasceita necrozantă:',
 ['Este o infecție polimicrobiană rapid progresivă a planurilor fasciale','Durerea este intensă, disproporționată față de semnele examenului obiectiv','Aerul subcutanat nu poate fi detectat prin radiografie sau tomografie computerizată','Mortalitatea este sub 5%','Tratamentul de elecție este antibioterapia orală, fără debridare chirurgicală'],'AB',197,'Infecții — Fasceita necrozantă',
 'Recunoașterea tabloului clinic caracteristic al fasceitei necrozante și a gravității ei.',
 ['Definiția din text: infecție polimicrobiană rapid progresivă la nivelul planurilor fasciale.','Durerea disproporționată față de examenul obiectiv este semnul de alarmă descris.','Textul precizează că RX sau CT pot detecta acumularea de aer subcutanat.','Mortalitatea citată este ridicată, de 25%.','Tratamentul constă în debridare chirurgicală rapidă, incizie, drenaj și antibiotice IV cu spectru larg.']],
 8,'Distractorii minimizează gravitatea (mortalitate, tratament) și neagă un element imagistic explicit.',['disproporționată','25% din pacienți']),

q(3,['Aspectul caracteristic al leziunilor din impetigo este reprezentat de:',
 ['Cruste gălbui-aurii, de culoarea mierii, în jurul suprafețelor muco-cutanate','Papule lucioase, nedureroase, cu zonă centrală ombilicată','Plăci eritematoase cu scuame argintii pe suprafețele de extensie','Șanțuri în stratul superficial al epidermului, cu papule în vecinătate','Papulă perlată cu telangiectazii și ulcerație centrală'],'A',197,'Infecții — Impetigo',
 'Identificarea aspectului lezional patognomonic al impetigoului față de alte dermatoze frecvente.',
 ['Crustele de culoarea mierii în jurul suprafețelor muco-cutanate sunt descrierea din text pentru impetigo.','Papulele ombilicate lucioase definesc molluscum contagiosum.','Plăcile cu scuame argintii pe extensie caracterizează psoriazisul.','Șanțurile acariene cu papule sunt caracteristice scabiei.','Papula perlată cu telangiectazii și ulcerație centrală descrie carcinomul bazocelular.']],
 8,'Toate distractoarele sunt descrieri lezionale reale din capitol, atribuite altor afecțiuni.',['culoarea mierii','Impetigo']),

q(4,['Tratamentul acneei vulgare:',
 ['Retinoizii topici sunt recomandați ca primă linie de tratament','Isotretinoinul oral necesită monitorizarea enzimelor hepatice și testarea lunară a hCG','Femeile trebuie să aibă cel puțin două teste de sarcină negative înainte de începerea isotretinoinului oral','Săpunurile au un efect major asupra evoluției afecțiunii','Există o asociere demonstrată între acnee și consumul anumitor alimente'],'ABC',198,'Infecții — Acneea vulgară',
 'Ierarhizarea corectă a liniilor de tratament în acnee și cunoașterea precauțiilor legate de isotretinoin.',
 ['Retinoizii topici sunt explicit prima linie.','Monitorizarea hepatică și testarea lunară a hCG sunt cerute pentru isotretinoin.','Nota „Pasul următor” cere două teste de sarcină negative înainte de inițiere.','Textul precizează că săpunurile au efect redus.','Nota „De reținut” afirmă că nu există o asociere demonstrată cu alimentele.']],
 8,'Distractorii reiau două mituri populare pe care textul le infirmă explicit.',['prima linie de tratament','două teste de sarcină negative']),

q(5,['Infecția cu virusul herpes simplex:',
 ['HSV-1 determină în principal afectare orală, iar HSV-2 afectare genitală','După infecția primară, materialul genetic viral rămâne în ganglionii neuro-senzitivi','Aciclovirul vindecă definitiv boala','Infecția primară prezintă de obicei simptomatologie mai severă, cu manifestări generale asemănătoare gripei','Transmiterea de la mama infectată la nou-născut este lipsită de consecințe neurologice'],'ABD',198,'Infecții — Infecția cu virusul herpes simplex',
 'Diferențierea celor două tipuri de HSV, înțelegerea latenței și a limitelor tratamentului antiviral.',
 ['Distribuția orală (HSV-1) și genitală (HSV-2) este explicită.','Persistența în ganglionii neuro-senzitivi explică reactivările.','Boala este incurabilă; aciclovirul doar scurtează și rărește recurențele.','Infecția primară este descrisă ca mai severă, cu manifestări pseudo-gripale.','Transmiterea la nou-născut poate produce boală diseminată cu afectare neurologică severă.']],
 8,'Distractorii exagerează eficacitatea antiviralelor și neagă o complicație neonatală gravă.',['incurabilă','ganglionii neuro-senzitivi']),

q(6,['Care dintre următoarele afirmații privind infecția cu virusul varicelo-zosterian sunt adevărate?',
 ['În varicelă, simptomele apar la 2 săptămâni după infecție, iar cefaleea, mialgiile și febra preced leziunile cu mai puțin de 3 zile','În zona zoster, leziunile sunt limitate la unul sau cel mult câteva dermatoame','Afectarea mai multor dermatoame distincte semnifică boală diseminată','Leziunile de varicelă rămân infecțioase și după acoperirea cu cruste','Nevralgia postherpetică este o complicație a varicelei primare, nu a zonei zoster'],'ABC',199,'Infecții — Varicela și Herpes zoster',
 'Compararea infecției primare cu cea recurentă cu VZV: incubație, distribuție și complicații.',
 ['Tabelul 9-1 indică debutul la 2 săptămâni și prodromul sub 3 zile.','Limitarea la unul sau câteva dermatoame definește zona zoster.','Textul precizează că afectarea mai multor dermatoame distincte semnifică diseminare.','Leziunile sunt infecțioase până când se acoperă de cruste, nu și după.','Nevralgia postherpetică este complicația zonei zoster.']],
 8,'Distractorii inversează relația contagiozitate–cruste și atribuie greșit nevralgia postherpetică infecției primare.',['dermatoame','Nevralgia postherpetică']),

q(7,['Scabia:',
 ['Este produsă de acarianul Sarcoptes scabiei','Pruritul se agravează după o baie fierbinte','Localizarea cea mai frecventă a leziunilor este scalpul','Tratamentul constă în permetrină cremă sau ivermectină orală','Hainele și lenjeria de pat nu necesită spălare, parazitul neputând supraviețui în afara gazdei'],'ABD',200,'Infecții — Scabia',
 'Recunoașterea agentului, a caracterului pruritului, a localizării și a măsurilor terapeutice în scabie.',
 ['Agentul etiologic este Sarcoptes scabiei.','Agravarea pruritului după baie fierbinte este descrisă explicit.','Localizarea cea mai frecventă este la spațiile interdigitale de la mâini și picioare.','Permetrina cremă sau ivermectina orală sunt tratamentele citate.','Textul cere spălarea hainelor, prosoapelor și lenjeriei în apă fierbinte.']],
 8,'Distractorii mută localizarea tipică și neagă o măsură igienică esențială.',['Sarcoptes scabiei','baie fierbinte']),

q(8,['Aspectul de „spaghete și chiftelute” la preparatul pe lamă cu KOH este caracteristic pentru:',
 ['Tinea versicolor (Malassezia furfur)','Tinea corporis (Trichophyton)','Intertrigo candidozic','Scabie','Molluscum contagiosum'],'A',200,'Infecții — Infecții fungice cutanate',
 'Asocierea aspectului microscopic cu agentul fungic corespunzător.',
 ['Hifele scurte și sporii cu aspect de „spaghete și chiftelute” caracterizează Malassezia furfur.','În tinea corporis preparatul cu KOH arată hife, fără spori în acest aranjament.','În intertrigo candidozic preparatul cu KOH arată pseudohife.','Scabia se diagnostichează prin identificarea paraziților și ouălor la raclare.','Molluscum contagiosum arată corpi de incluziune la colorațiile Giemsa și Wright.']],
 8,'Distractorii sunt afecțiuni cu aspecte microscopice distincte din același capitol.',['spaghete și chiftelute','Malassezia furfur']),

q(9,['Eritemul polimorf:',
 ['Penicilinele, sulfonamidele, AINS, contraceptivele orale și antiepilepticele sunt medicamente frecvent asociate','HSV și Mycoplasma pneumoniae sunt cauze infecțioase frecvente','Leziunile în țintă au un centru eritematos înconjurat de un inel interior palid și un inel exterior eritematos','Biopsia cutanată arată acantoliză cu membrană bazală intactă','Reacția de hipersensibilitate de tip I stă la baza majorității dermatitelor alergice de contact'],'ABC',202,'Afecțiuni inflamatorii — Eritemul polimorf',
 'Recunoașterea cauzelor medicamentoase și infecțioase și a leziunii în țintă din eritemul polimorf.',
 ['Lista medicamentelor asociate este redată în nota „De reținut”.','HSV și Mycoplasma pneumoniae sunt citate ca cauze infecțioase frecvente.','Descrierea leziunii în țintă corespunde textului.','Acantoliza cu membrană bazală intactă caracterizează pemfigusul vulgar.','Majoritatea dermatitelor alergice de contact sunt reacții de tip IV, mediate de limfocite.']],
 8,'Distractorii importă histologia pemfigusului și inversează tipul de hipersensibilitate din dermatita de contact.',['leziuni în țintă','Mycoplasma pneumoniae'],[201]),

q(10,['Sindromul Stevens-Johnson și necroliza epidermică toxică:',
 ['Sindromul Stevens-Johnson afectează mucoasele, cu plăci care interesează sub 10% din suprafața corporală','Necroliza epidermică toxică afectează peste 30% din suprafața corporală, cu necroza întregii grosimi a epidermului','Semnul Nikolsky este pozitiv în sindromul Stevens-Johnson','Tratamentul se face frecvent în secțiile de arși, cu hidratare IV și imunoglobuline IV','În necroliza epidermică toxică se constată leucocitoză și creșterea hemoglobinei'],'ABCD',202,'Afecțiuni inflamatorii — Sindromul Stevens-Johnson și necroliza epidermică toxică',
 'Diferențierea celor două entități după extinderea afectării cutanate și cunoașterea abordării terapeutice.',
 ['Pragul sub 10% BSA și afectarea mucoaselor definesc SJS.','Pragul peste 30% BSA și necroza epidermului definesc TEN.','Semnul Nikolsky pozitiv este descris în SJS.','Tratamentul în secțiile de arși cu hidratare și imunoglobuline IV este explicit.','În TEN scad leucocitele, hemoglobina și hematocritul.']],
 8,'Distractorul inversează sensul modificărilor hematologice din TEN.',['<10% din suprafața corporală','>30% din suprafața corporală'],[203]),

q(11,['Semnul Auspitz din psoriazis constă în:',
 ['Sângerarea ușoară a plăcii la îndepărtarea scuamei','Decolarea epidermului în lambouri la frecare ușoară','Depresiuni punctiforme ale lamei unghiale','Apariția unei leziuni unice, rotunde, cu câteva zile înaintea erupției generalizate','Distribuția leziunilor în formă de brad de Crăciun'],'A',203,'Afecțiuni inflamatorii — Psoriazis',
 'Identificarea corectă a semnului Auspitz și diferențierea de alte semne clinice dermatologice.',
 ['Textul definește semnul Auspitz ca sângerare ușoară la îndepărtarea scuamei.','Decolarea epidermului la frecare ușoară este semnul Nikolsky.','Depresiunile punctiforme unghiale reprezintă pitting-ul unghial, un alt semn din psoriazis.','Leziunea unică precursoare este placa heraldică din pitiriazisul rozat.','Distribuția în brad de Crăciun caracterizează pitiriazisul rozat.']],
 8,'Distractorii includ două semne reale din psoriazis (pitting) și din alte dermatoze, cerând precizie terminologică.',['semnul Auspitz','scuame argintii']),

q(12,['Care dintre următoarele afirmații diferențiază corect pemfigusul vulgar de pemfigoidul bulos?',
 ['În pemfigusul vulgar autoanticorpii sunt îndreptați împotriva moleculelor de adeziune din epiderm, iar în pemfigoidul bulos împotriva membranei bazale','Semnul Nikolsky este pozitiv în pemfigusul vulgar și negativ în pemfigoidul bulos','Pemfigoidul bulos afectează majoritar pacienți cu vârsta peste 65 de ani','Biopsia în pemfigusul vulgar arată acantoliză cu membrană bazală intactă','În pemfigoidul bulos, imunofluorescența evidențiază anticorpi anti-epidermici'],'ABCD',205,'Afecțiuni buloase — Pemfigus vulgar și pemfigoid bulos',
 'Compararea țintelor autoimune, a semnului Nikolsky și a histologiei în cele două afecțiuni buloase.',
 ['Țintele autoimune sunt descrise distinct pentru fiecare boală.','Nikolsky pozitiv în pemfigus și negativ în pemfigoid este explicit.','Majoritatea pacienților cu pemfigoid au peste 65 de ani.','Acantoliza cu membrană bazală intactă este histologia pemfigusului.','În pemfigoid, imunofluorescența evidențiază anticorpi anti-membrană bazală.']],
 8,'Distractorul inversează ținta imunofluorescenței între cele două boli, o confuzie frecventă.',['acantoliza','semnul Nikolsky'],[206]),

q(13,['Porfiria cutanată tardivă:',
 ['Este determinată de deficitul de uroporfirinogen-decarboxilază hepatică','Alcoolismul, hepatita C, supraîncărcarea cu fier și tratamentele cu estrogeni sunt factori de risc','Hiperpigmentarea și hipertricoza sunt absente','Tratamentul include flebotomia periodică și doze mici de clorochină sau hidroxiclorochină','Suplimentele de fier sunt recomandate pentru corectarea anemiei asociate'],'ABD',206,'Afecțiuni buloase — Porfiria cutanată tardivă',
 'Recunoașterea defectului enzimatic, a factorilor de risc și a principiilor terapeutice în porfiria cutanată tardivă.',
 ['Deficitul de uroporfirinogen-decarboxilază hepatică este cauza citată.','Lista factorilor de risc este redată explicit.','Textul descrie piele hiperpigmentată și hipertricoză.','Flebotomia periodică și doza mică de clorochină/hidroxiclorochină sunt tratamentele citate.','Suplimentele de fier sunt factori declanșatori de evitat.']],
 8,'Distractorii neagă semne cutanate descrise și recomandă un factor declanșator ca tratament.',['uroporfirinogen-decarboxilazei','flebotomie periodică']),

q(14,['Alegeți afirmațiile corecte referitoare la cancerele cutanate non-melanocitare:',
 ['Carcinomul bazocelular este cel mai frecvent tip de cancer de piele','Riscul de transformare a keratozei actinice în carcinom scuamocelular este de aproximativ 10% pe an','Carcinomul scuamocelular metastazează în 5–10% din cazuri','Biopsia carcinomului bazocelular evidențiază celule bazale bazofile dispuse în palisade','Carcinomul bazocelular metastazează frecvent și precoce'],'ACD',207,'Neoplasme — Carcinom scuamocelular și bazocelular',
 'Ierarhizarea frecvenței și a potențialului metastatic al cancerelor cutanate non-melanocitare.',
 ['Nota „De reținut” afirmă că bazocelularul este cel mai frecvent cancer de piele.','Riscul citat este de 0,1% pe an, nu 10%.','Rata de metastazare de 5–10% este explicită pentru scuamocelular.','Palisadele bazofile sunt histologia bazocelularului.','Bazocelularul metastazează rar.']],
 8,'Distractorii exagerează cu două ordine de mărime riscul keratozei actinice și potențialul metastatic al bazocelularului.',['cel mai frecvent tip de cancer de piele','palisade'],[206]),

q(15,['Marginea de excizie chirurgicală recomandată pentru un melanom in situ este de:',
 ['0,5 cm','1 cm','2 cm','3 cm','Nu este necesară o margine de siguranță'],'A',208,'Neoplasme — Melanom',
 'Aplicarea marginilor de excizie în funcție de grosimea melanomului.',
 ['Textul recomandă 0,5 cm pentru melanomul in situ.','Marginea de 1 cm se recomandă pentru grosime sub 2 mm.','Marginea de 2 cm se recomandă pentru grosime peste 2 mm.','Nu există o recomandare de 3 cm în text.','Excizia cu margine de siguranță este tratamentul de bază.']],
 8,'Distractorii sunt marginile reale pentru alte stadii de grosime, cerând memorarea precisă a pragurilor.',['0,5 cm margine','2 cm margine']),

q(16,['Referitor la melanom sunt adevărate următoarele:',
 ['Cel mai important factor de prognostic este grosimea tumorii','Tipul extensiv în suprafață este cel mai frecvent','Biopsia shave este metoda recomandată pentru leziunile melanocitare suspecte','Tipul nodular crește doar vertical și devine rapid invaziv','Tipul lentigo malign rămâne mult timp în stadiu in situ înainte de creșterea verticală'],'ABDE',208,'Neoplasme — Melanom',
 'Recunoașterea factorului prognostic major, a tipurilor de melanom și a metodei corecte de biopsie.',
 ['Grosimea tumorii este citată ca cel mai important factor prognostic.','Extensiv în suprafață este descris ca tipul cel mai frecvent.','Biopsia shave nu trebuie folosită pentru leziuni melanocitare suspecte.','Descrierea tipului nodular corespunde textului.','Descrierea tipului lentigo malign corespunde textului.']],
 8,'Distractorul recomandă exact metoda de biopsie pe care textul o interzice.',['grosimea tumorii','Biopsia shave'],[207]),

q(17,['Grefa de piele despicată (split skin):',
 ['Este compusă din epiderm și o parte din derm','Locurile donatoare uzuale sunt abdomenul, coapsele și fesele','Se recoltează tipic de deasupra urechilor pentru defectele feței','Nu se contractă în timp','Conține epiderm și tot dermul'],'AB',209,'Chirurgie plastică — Grefe și lambouri',
 'Diferențierea grefei despicate de grefa cu grosime completă după compoziție, loc donator și comportament.',
 ['Compoziția din epiderm și parte din derm este definiția grefei despicate.','Abdomenul, coapsele și fesele sunt locurile donatoare citate.','Recoltarea de deasupra urechilor pentru față este specifică grefei cu grosime completă.','Textul precizează că grefa despicată se contractă în timp.','Epidermul plus tot dermul definesc grefa cu grosime completă.']],
 8,'Distractorii importă caracteristicile grefei cu grosime completă, cele două tipuri fiind ușor de confundat.',['split skin','se contractă în timp']),
];
