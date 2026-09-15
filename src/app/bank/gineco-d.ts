import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-222;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('gineco',12,pdfOffset,`gineco-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const GINECO_D=[
q(68,['Toate ovocitele sunt formate și parțial maturate, conform tabelului de dezvoltare, la:',
 ['20 de săptămâni de amenoree','4–8 ani, când FSH și LH sunt suprimate de GnRH','Naștere, odată cu maximul de LH','Menarha, la vârsta medie de 13 ani','Menopauză, odată cu rezistența ovariană'],'A',273,'Fiziologie — Dezvoltarea ginecologică',
 'Memorarea vârstei de 20 SA pentru completarea stocului de ovocite, distinct de supresia GnRH și de menarha.',
 ['Tabelul plasează formarea și maturarea parțială a tuturor ovocitelor la 20 SA.','Intervalul 4–8 ani are FSH/LH scăzute prin supresia GnRH, nu formarea ovocitelor.','Maximul de FSH/LH la 20 SA este fetal, nu de la naștere.','Menarha la 13 ani marchează debutul ciclurilor, nu formarea ovocitelor.','Menopauza asociază insuficiență ovariană, nu apariția ovocitelor.']],
 8,'Toate vârstele sunt rânduri reale ale aceluiași tabel; doar 20 SA asociază stocul ovocitar.',['20 SA','ovocitele']),

q(69,['În stadiul Tanner 5 al dezvoltării mamare se observă:',
 ['Sân matur, cu areola revenită la nivelul sânului și doar mamelonul proeminent','Doar mamelonul ascensionat, fără țesut mamar','Înmugurirea sânilor și reliefarea areolei, ca în stadiul 2','Creșterea secundară a mamelonului și areolei deasupra nivelului sânului, ca în stadiul 4','Păr aspru pubian, fără nicio modificare mamară'],'A',274,'Dezvoltare — Stadiile Tanner mamare',
 'Identificarea revenirea areolei la nivelul sânului ca reper al stadiului 5, distinct de 1, 2 și 4.',
 ['Sânul matur cu areola la nivelul sânului este descrierea stadiului 5.','Mamelonul izolat definește stadiul 1.','Înmugurirea și reliefarea areolei definesc stadiul 2.','Areola deasupra sânului definește stadiul 4.','Pilozitatea fără modificare mamară nu descrie stadiul 5 mamar.']],
 8,'Stadiile 1, 2 și 4 din același tabel sunt ușor de permutat cu stadiul 5.',['Sân matur','mamelonul']),

q(70,['Alegeți afirmațiile corecte referitoare la cauzele și tratamentul pubertății precoce:',
 ['Hipotiroidismul cronic, cu TSH crescut și T4/T3 scăzute, poate induce pubertate precoce','Forma din hiperplazia adrenală congenitală poate fi tratată prin substituție cortizonică','Secreția ectopică de hormoni se tratează prin localizarea și îndepărtarea sursei','LH și FSH scăzute, fără răspuns la GnRH, definesc forma centrală, nu pseudopubertatea','Analogii de GnRH sunt inutili în forma centrală, fiind rezervați doar HAC'],'ABC',275,'Dezvoltare — Pubertatea precoce',
 'Recunoașterea hipotiroidismului, a substituției cortizonice în HAC și a exciziei sursei ectopice.',
 ['Profilul TSH crescut cu T4/T3 scăzute este citat.','Substituția cortizonică în HAC este tratamentul.','Localizarea și îndepărtarea sursei ectopice sunt explicite.','LH/FSH scăzute fără răspuns la GnRH definesc pseudopubertatea, nu forma centrală.','Analogii de GnRH sunt tocmai tratamentul formei centrale.']],
 8,'Distractorii inversează criteriile de laborator central versus pseudo și neagă analogii de GnRH din forma centrală.',['hipotiroidismului','HAC'],[274]),

q(71,['Faza luteală a ciclului menstrual:',
 ['Peak-ul de LH induce ovulația, care marchează tranziția de la faza foliculară','Mucusul cervical este abundent imediat înaintea ovulației, mai consistent și transparent, indicând peak-ul de LH','Corpul galben secretă estradiol și progesteron pentru a menține endometrul','Peak-ul de FSH, nu de LH, induce ovulația','hCG are acțiune FSH-like și scade progesteronul după implantare'],'ABC',276,'Fiziologie — Faza luteală',
 'Corelarea peak-ului de LH, a mucusului periovulator și a secreției corpului galben, distinct de hCG.',
 ['Peak-ul de LH și tranziția de fază sunt explicite.','Mucusul abundent, consistent și transparent este nota periovulatorie.','Estradiolul și progesteronul corpului galben sunt citate.','Ovulația este indusă de LH, nu de FSH.','hCG are acțiune LH-like și menține progesteronul, nu îl scade.']],
 8,'Distractorii inversează LH versus FSH și atribuie hCG un efect FSH-like opus tabelului de pe pagina anterioară.',['Mucusul cervical','corpul galben'],[275]),

q(72,['Selectați enunțurile adevărate despre perimenopauză și menopauza prematură:',
 ['Menopauza prematură este mai frecventă la fumătoare','Poate urma radioterapiei, chimioterapiei, afecțiunilor autoimune sau chirurgiei abdomino-pelvine','În perimenopauză, răspunsul ovarian la FSH și LH scade, iar FSH și LH cresc, cu estrogeni fluctuanți','Complicațiile menopauzei includ osteoporoză, boală coronariană și demență','Se diagnostichează după șase luni de amenoree, identic menopauzei naturale'],'ABCD',276,'Fiziologie — Perimenopauza și menopauza prematură',
 'Corelarea factorilor de risc (fumat, RT/chimioterapie) cu profilul hormonal perimenopauzal și cu complicațiile.',
 ['Predilecția la fumătoare este explicită.','RT, chimioterapia, autoimunitatea și chirurgia sunt factorii enumerați.','Scăderea răspunsului ovarian, creșterea FSH/LH și fluctuația estrogenilor sunt din text.','Osteoporoza, boala coronariană și demența sunt complicațiile de pe pagina următoare.','Diagnosticul menopauzei este după un an de amenoree, nu după șase luni.']],
 8,'Distractorul importă pragul amenoreei secundare (6 luni) asupra menopauzei, definită prin 1 an.',['fumătoare','chimioterapie'],[277]),

q(73,['Pilulele care conțin doar progestativ:',
 ['Alterează calitatea endometrului și cresc vâscozitatea mucusului, prevenind fertilizarea și implantarea','Pot fi o opțiune la pacientele cu contraindicație pentru estrogeni și trebuie luate la aceeași oră zilnic','Se schimbă săptămânal, ca patch-ul transdermic','Conțin etinilestradiol în doze mai mici decât inelul vaginal','Eficacitatea scade la masa corporală mare prin difuzie în țesutul adipos, identic patch-ului'],'AB',277,'Contracepția — Pilulele doar cu progestativ',
 'Recunoașterea mecanismului fără estrogen și a regulii orei fixe, distinct de patch și inel.',
 ['Alterarea endometrului și a mucusului este descrierea din tabel.','Contraindicația la estrogeni și ora zilnică sunt explicite.','Schimbarea săptămânală caracterizează patch-ul.','Etinilestradiolul aparține inelului și COC.','Difuzia în țesutul adipos este nota patch-ului.']],
 8,'Distractorii atribuie POP schema săptămânală și limita ponderală ale patch-ului, de pe aceeași pagină.',['progestativ','aceeaşi oră']),

q(74,['Implanturile cu progestativ:',
 ['Sunt dispozitive subcutanate care eliberează progestative circa 3 ani, cu acțiune similară pilulelor doar cu progestativ','Eficacitatea ideală și tipică citate sunt ambele de 99%','Se lasă in situ 10 ani, ca steriletul de cupru','Se administrează din 3 în 3 luni, ca medroxiprogesteronul','Necesită înlocuire lunară, ca inelul vaginal'],'AB',277,'Contracepția — Implantul cu progestativ',
 'Memorarea duratei de circa 3 ani și a eficacității 99/99, distinct de DIU, Depo și inel.',
 ['Durata de circa 3 ani și similitudinea cu POP sunt din tabel.','Eficacitatea 99% ideală și tipică este explicită.','10 ani este durata steriletului de cupru.','Intervalul de 3 luni este al Depo-Provera.','Înlocuirea lunară este a inelului.']],
 8,'Duratele 3 ani / 10 ani / 3 luni / 1 lună din tabelele contraceptive sunt ușor de permutat.',['3 ani','Implanturi'],[278]),

q(75,['Prezervativul:',
 ['Este o barieră, cel mai frecvent din latex, lăsată pe loc până la retragere după ejaculare','Este folosit frecvent cu spermicid','Variantele din poliuretan sunt produse pentru cei cu alergie la latex','Se lasă pe loc 10 ani, ca steriletul de cupru','Are eficacitate tipică de 71%, identică spermicidului folosit singur'],'ABC',278,'Contracepția — Prezervativul',
 'Recunoașterea latexului, a asocierii cu spermicidul și a alternativei din poliuretan.',
 ['Bariera de latex până după ejaculare este explicită.','Asocierea cu spermicidul este citată.','Poliuretanul pentru alergia la latex este din tabel.','10 ani este durata steriletului de cupru.','71% este eficacitatea tipică a spermicidului folosit singur, nu a prezervativului (85% tipic).']],
 8,'Distractorii mută durata DIU și eficacitatea spermicidului asupra prezervativului, din același tabel.',['latex','poliuretan']),

q(76,['Metodele de barieră și spermicidul, altele decât prezervativul:',
 ['Diafragmele sau cupolele cervicale se folosesc cu spermicid și se lasă pe loc mai multe ore după act','Buretele contraceptiv eliberează spermicid 24 de ore și poate asocia risc crescut de șoc toxic','Spermicidul folosit singur are eficacitate tipică de 71%','Diafragmul nu asociază risc de infecție de tract urinar','Buretele are eficacitate identică abstinenței, de 100%'],'ABC',278,'Contracepția — Diafragm, burete și spermicid',
 'Corelarea diafragmului (ITU, spermicid), a buretelui (24 h, șoc toxic) și a eficacității 71% a spermicidului.',
 ['Utilizarea cu spermicid și menținerea după act sunt explicite.','Eliberarea 24 de ore și riscul de șoc toxic sunt din tabel.','71% tipic pentru spermicidul singur este citat.','Tabelul listează risc crescut de ITU la diafragm.','100% este eficacitatea abstinenței, nu a buretelui.']],
 8,'Distractorii neagă ITU-ul diafragmului și echivalează buretele cu abstinența, ambele din același tabel.',['şoc toxic','Spermicid']),

q(77,['Amenoreea primară se definește prin:',
 ['Absența menstruațiilor până la 16 ani, în prezența caracterelor sexuale secundare','Absența concomitentă a menstruațiilor și a caracterelor sexuale secundare până la 13 ani','Absența menstruațiilor timp de 6 luni la o pacientă cu cicluri anterioare','Un an de amenoree, criteriul de diagnostic al menopauzei','Declinul funcției ovariene înainte de 40 de ani, fără evaluarea Tanner'],'AB',279,'Tulburări menstruale — Amenoreea primară',
 'Separarea celor două praguri ale amenoreei primare (16 cu caractere, 13 fără) de amenoreea secundară și menopauză.',
 ['Pragul de 16 ani cu caractere secundare este explicit.','Pragul de 13 ani fără caractere secundare este citat.','6 luni sau peste 3 menstre absente definesc amenoreea secundară.','Un an de amenoree diagnostichează menopauza.','Pragul de 40 de ani definește menopauza prematură/insuficiența ovariană, nu amenoreea primară.']],
 8,'Pragurile 13/16/6 luni/1 an/40 de ani din capitol sunt ușor de permutat.',['16 ani','13 ani'],[276]),

q(78,['În amenoree, după excluderea sarcinii, textul precizează că:',
 ['Creșterea prolactinei sugerează o tumoră secretantă de prolactină, tratabilă cu agoniști dopaminergici','Sindromul Asherman se tratează prin liza aderențelor și administrare de estrogeni','Disfuncția hipotalamo-hipofizară poate fi tratată cu GnRH sau substituție cu gonadotropine','Primul pas este histerectomia, fără β-hCG','Testul la progesteron pozitiv exclude integritatea tractului genital'],'ABC',279,'Tulburări menstruale — Abordarea amenoreei',
 'Recunoașterea prolactinomului (agoniști), a Asherman (liză + estrogen) și a GnRH, cu β-hCG ca prim pas.',
 ['Prolactinomul și agoniștii dopaminergici sunt explicite.','Liza aderențelor plus estrogenii sunt tratamentul Asherman.','GnRH sau gonadotropinele sunt citate pentru disfuncția hipotalamo-hipofizară.','Primul pas este testul de sarcină, nu histerectomia.','Prezența menstruației după progesteron denotă integritatea tractului, nu o exclude.']],
 8,'Distractorii sar la histerectomie fără β-hCG și inversează interpretarea testului la progesteron.',['Asherman','prolactină'],[280]),

q(79,['Care dintre următoarele afirmații diferențiază corect dismenoreea primară de cea secundară?',
 ['În forma primară, simptomele apar la începutul menstruației și dispar în câteva zile','În forma secundară, simptomele încep de obicei la mijlocul ciclului anterior și se accentuează până la sfârșitul menstruației','Forma primară începe la mijlocul ciclului și persistă tot intervalul intermenstrual','Mittelschmerz este sinonimul dismenoreei primare','Forma secundară nu are cauze pelvine, spre deosebire de forma primară'],'AB',280,'Tulburări menstruale — Dismenoreea',
 'Contrastarea debutului odată cu menstruația (primară) versus debutul de la mijlocul ciclului (secundară).',
 ['Debutul la începutul menstruației și dispariția în câteva zile definesc forma primară.','Debutul de la mijlocul ciclului, cu accentuare până la sfârșit, definește forma secundară.','Intervalul intermenstrual prelungit nu este descrierea formei primare.','Mittelschmerz este durerea ovulatorie, nu dismenoreea.','Cauzele pelvine (endometrioză, BIP, fibroame, chiste, adenomioză) definesc forma secundară.']],
 8,'Distractorii inversează calendarul celor două forme și confundă dismenoreea cu mittelschmerz.',['dismenoreei primare','dismenoreei'],[281]),

q(80,['Infecția vaginală cu Trichomonas:',
 ['Asociază inflamație vaginală și cervicală, cu peteșii cervicale','Secreția este urât mirositoare, spumoasă, verzuie, iar frotiul salin arată Trichomonas mobil','pH-ul vaginal este peste 4,5, iar tratamentul este metronidazol, inclusiv la partener','pH-ul rămâne între 3,5 și 4,5, cu pseudohife la KOH, ca în candidoză','Partenerul nu necesită tratament, identic infecției cu Gardnerella'],'ABC',282,'Infecții — Trichomoniaza',
 'Recunoașterea peteșiilor, a secreției spumoase verzui și a tratamentului partenerului, distinct de candidoză și vaginoză.',
 ['Inflamația cu peteșii cervicale este din tabel.','Secreția spumoasă verzuie și parazitul mobil sunt explicite.','pH-ul crescut și metronidazolul la ambii parteneri sunt citate.','pH normal și pseudohife definesc candidoza.','Partenerul trebuie tratat în trichomoniază; ne-tratamentul partenerului este al Gardnerella.']],
 8,'Distractorii importă pH-ul candidozei și regula partenerului din vaginoză asupra trichomoniazei.',['Trichomonas','Metronidazol'],[283]),

q(81,['Lactobacilii pe frotiul vaginal:',
 ['Reprezintă flora microbiană vaginală normală, a căror prezență nu este sugestivă pentru infecție','Sunt patognomonici pentru vaginoza cu Gardnerella','Identifică Trichomonas mobil pe frotiul salin','Apar ca pseudohife la preparatul KOH','Impun metronidazol de primă intenție, ca în trichomoniază'],'A',282,'Infecții — Flora vaginală',
 'Interpretarea lactobacililor ca floră normală, nu ca marker de vaginită.',
 ['Nota identifică lactobacilii drept floră normală, nesugestivă pentru infecție.','Gardnerella se recunoaște prin celule clue, nu prin lactobacili.','Trichomonas mobil este protozoarul, nu un lactobacil.','Pseudohifele definesc Candida.','Metronidazolul tratează Gardnerella/Trichomonas, nu flora normală.']],
 8,'Toate distractoarele sunt elemente reale ale tabelului de vaginite, atribuite greșit lactobacililor.',['Lactobacilii','flora microbiană']),

q(82,['Limfogranulomatoza inghinală:',
 ['Este cauzată de serotipurile L1, L2 sau L3 ale Chlamydia trachomatis, diferite de cele ale cervicitei','După circa o lună se dezvoltă adenopatii inghinale semnificative, mai frecvent la bărbați','Agentul este Klebsiella granulomatis, cu corpi Donovan pe colorația Giemsa','Ulcerația este dureroasă, cu bază cenușie, ca în șancrul moale','Tratamentul de fond este ceftriaxona, ca în șancrul moale'],'AB',286,'Infecții — Limfogranulomatoza inghinală',
 'Asocierea serotipurilor L1–L3 cu adenopatia tardivă, distinct de granulomul inghinal și de șancrul moale.',
 ['Serotipurile L1–L3, diferite de cervicită, sunt explicite.','Adenopatia la o lună, mai ales la bărbați, este tabloul.','Klebsiella și corpii Donovan definesc granulomul inghinal.','Ulcerația dureroasă cenușie este a șancrului moale.','Ceftriaxona tratează șancrul moale; LGV se tratează cu tetraciclină, eritromicină sau doxiciclină.']],
 8,'Distractorii permută agentul granulomului inghinal și tratamentul șancrului moale, alăturate în capitol.',['Limfogranulomatoza','trachomatis'],[285]),

q(83,['Granulomul inghinal:',
 ['Este cauzat de Klebsiella granulomatis','Ulcerația nedureroasă are aspect de „carne roșie de vită” și margini neregulate','Colorația Giemsa evidențiază corpi Donovan','Agentul este Haemophilus ducreyi, cu streptobacili gram-negativi','Serotipurile L1–L3 ale Chlamydia definesc entitatea, nu cervicita'],'ABC',286,'Infecții — Granulomul inghinal',
 'Recunoașterea Klebsiellei, a aspectului de carne roșie și a corpilor Donovan, distinct de LGV și șancrul moale.',
 ['Klebsiella granulomatis este agentul citat.','Carnea roșie de vită și marginile neregulate sunt tabloul.','Corpii Donovan pe Giemsa sunt laboratorul.','Haemophilus ducreyi produce șancrul moale.','L1–L3 definesc limfogranulomatoza, nu granulomul inghinal.']],
 8,'Distractorii sunt agenții celorlalte ulcerații genitale din aceleași două pagini.',['Donovan','carne roşie']),

q(84,['Indicațiile biopsiei de endometru includ:',
 ['Metroragia în postmenopauză','Metroragia disfuncțională peste 45 de ani','Metroragia disfuncțională sub 45 de ani, în condițiile expunerii la estrogen nebalansat cu progesteron','HNPCC și celule glandulare atipice pe frotiul Papanicolau','Vaginita atrofică, care explică 80% din metroragiile de climax, face biopsia superfluă'],'ABCD',286,'Neoplasme — Biopsia endometrială',
 'Aplicarea listei de indicații (postmenopauză, >45 ani, estrogen nebalansat, HNPCC, AGC), în ciuda frecvenței vaginitei atrofice.',
 ['Metroragia de postmenopauză este prima indicație.','Pragul de 45 de ani este explicit.','Estrogenul nebalansat sub 45 de ani este citat.','HNPCC și celulele glandulare atipice completează lista.','Deși vaginita atrofică e cea mai frecventă cauză, textul cere totuși excluderea cancerului prin biopsie.']],
 8,'Distractorul transformă ponderea de 80% a vaginitei atrofice într-o scutire de biopsie, pe care nota o neagă.',['HNPCC','biopsiei de endometru']),

q(85,['Cea mai frecventă cauză de metroragie în postmenopauză, reprezentând circa 80% din cazuri, este:',
 ['Vaginita atrofică','Carcinomul endometrial metastatic','Sarcina molară','Fibromul uterin în creștere, după menopauză','Granulomul inghinal'],'A',286,'Neoplasme — Metroragia de postmenopauză',
 'Identificarea vaginitei atrofice ca etiologia cea mai frecventă, fără a confunda frecvența cu dispensarea de biopsie.',
 ['Nota cuantifică vaginita atrofică la 80% din metroragiile de climax.','Cancerul trebuie exclus, dar nu este cauza cea mai frecventă.','Sarcina molară nu este etiologia citată a metroragiei de postmenopauză.','Fibromul nu continuă să crească după menopauză.','Granulomul inghinal este o ulcerație infecțioasă, nu cauza de 80%.']],
 8,'Distractorii sunt patologii reale din aceeași pagină (endometru, fibrom, granulom), atribuite greșit ponderii de 80%.',['80% cazuri','vaginita atrofică']),

q(86,['Chistadenomul ovarian mucinos sau seros:',
 ['Poate semăna histologic cu epiteliul endometrial sau tubar și poate forma calcificări (corpi psammoma)','Poate deveni extrem de mare, cu masă palpabilă inclusiv transabdominal','Tratamentul este anexectomie unilaterală; histerectomia totală cu anexectomie bilaterală se discută la menopauză','Regresează constant în primele 2 săptămâni ale ciclului, ca chistul folicular','Este de origine germinală și conține păr, dinți și glande sebacee'],'ABC',288,'Neoplasme — Chistadenomul ovarian',
 'Recunoașterea corpilor psammoma, a dimensiunilor extreme și a anexectomiei, distinct de chistul folicular și dermoid.',
 ['Originea epitelială, conținutul seros/mucinos și corpii psammoma sunt din tabel.','Dimensiunea extremă și palparea transabdominală sunt explicite.','Anexectomia unilaterală și HTAB la menopauză sunt tratamentul.','Regresia menstruală caracterizează chistul folicular.','Părul, dinții și sebumul definesc teratomul dermoid.']],
 8,'Distractorii atribuie chistadenomului evoluția chistului folicular și histologia dermoizilor, din același tabel.',['psammoma','Anexectomie']),

q(87,['În tumorile ovariene epiteliale maligne se recomandă:',
 ['Histerectomie totală abdominală, biopsii peritoneale pelvine și apendicectomie, cu chimioterapie adjuvantă frecventă','Citoreducție tumorală cu rezecția intestinelor, ficatului, omentului, splinei și ganglionilor în boala metastatică','Ooforectomie unilaterală pentru tumorile detectate precoce, dacă se dorește conservarea fertilității','Doar supraveghere, ca în chisturile funcționale, fără chirurgie','CA-125 are sensibilitate de screening la toate femeile fertile, înlocuind imagistica'],'ABC',289,'Neoplasme — Cancerul ovarian epitelial',
 'Ierarhizarea HTAB plus apendicectomie, a citoreducției și a conservării de fertilitate, distinct de chistul funcțional.',
 ['HTAB, biopsiile peritoneale și apendicectomia sunt explicite.','Citoreducția viscerelor citate este tratamentul bolii extinse.','Ooforectomia unilaterală precoce pentru fertilitate este permisă.','Supravegherea este a chisturilor funcționale, nu a cancerului epitelial.','CA-125 este nuanțat ca util în postmenopauză, nu ca screening universal.']],
 8,'Distractorii aplică supravegherea chistului funcțional și supraestimează CA-125 ca screening.',['apendicectomie','Citoreducţia']),

q(88,['Selectați enunțurile adevărate despre lichenul plan și vestibulodinie:',
 ['Lichenul plan produce leziuni lucioase, reticulare, eritematoase, cu ulcerații, iar vaginul se poate oblitera','Vestibulodinia se limitează la vestibulul vulvar; durerea la atingere sau penetrare se tratează cu antidepresive triciclice','Lichenul plan nu afectează vaginul, identic lichenului scleros','Vestibulodinia se tratează cu clobetasol, ca lichenul scleros','Diagnosticul lichenului plan se pune pe celule clue, fără examen clinic'],'AB',289,'Afecțiuni vulvare — Lichen plan și vestibulodinie',
 'Contrastarea obliterării vaginale din lichenul plan cu vestibulodinia tratată prin triciclice.',
 ['Leziunile lucioase reticulare și obliterarea vaginală sunt tabloul lichenului plan.','Limitarea la vestibul și triciclicele sunt explicite.','Textul precizează că vaginul se poate oblitera în lichenul plan; absența afectării vaginale este a lichenului scleros.','Clobetasolul este al lichenului scleros, nu al vestibulodiniei.','Celulele clue definesc vaginoza, nu lichenul plan.']],
 8,'Distractorii importă absența afectării vaginale și clobetasolul lichenului scleros, definite pe aceeași pagină.',['Lichenul plan','Vestibulodinia']),

q(89,['Abcesul mamar:',
 ['Este cauzat de Staphylococcus aureus sau streptococ în infecțiile superficiale și de anaerobi în cele subareolare','Majoritatea sunt legate de alăptare și sunt mai frecvente la fumătoare','Tratamentul include antibiotice, incizie și drenaj ale maselor fluctuante, cu continuarea alăptării','Se tratează prin tumorectomie plus iradiere, ca CDIS','Este adenocarcinomul cu celule clare legat de dietilstilbestrol'],'ABC',290,'Afecțiunile sânului — Abcesul mamar',
 'Corelarea etiologiei (S. aureus versus anaerobi), a alăptării/fumatului și a continuării lactației după drenaj.',
 ['S. aureus/streptococul superficial și anaerobii subareolari sunt explicite.','Alăptarea și fumatul sunt factorii citați.','Antibioticele, drenajul și continuarea alăptării sunt tratamentul.','Tumorectomia plus iradiere este a CDIS.','DES se asociază cu adenocarcinomul vaginal cu celule clare.']],
 8,'Distractorii mută conduita CDIS și etiologia DES asupra unei infecții lactaționale.',['alăptare','incizia şi drenajul']),

q(90,['Boala Paget a sânului:',
 ['Celulele maligne adenocarcinomatoase infiltrează epiteliul mamelonar și areolar și marchează de regulă un carcinom ductal din profunzime','Se prezintă ca leziune descuamativă, eczematoasă sau ulcerativă a mamelonului și areolei','Este cea mai frecventă tumoră mamară benignă la femei sub 30 de ani','Secreția mamelonară sanguinolentă fără masă definește papilomul, deci Paget nu asociază leziune mamelonară','Nu are substrat carcinomatos profund, fiind o dermatită izolată'],'AB',291,'Afecțiunile sânului — Boala Paget',
 'Recunoașterea eczemei mamelonare ca marker al carcinomului ductal profund, distinct de fibroadenom și papilom.',
 ['Infiltrația epiteliului mamelonar/areolar și legătura cu carcinomul ductal sunt din tabel.','Aspectul descuamativ-eczematos este tabloul clinic.','Tumora benignă mobilă sub 30 de ani este fibroadenomul.','Paget este tocmai leziunea mamelonară; secreția izolată sugerează papilomul.','Textul o descrie ca marker al unui carcinom din profunzime, nu ca dermatită izolată.']],
 8,'Distractorii confundă Paget cu fibroadenomul și cu papilomul intraductal, definite pe aceleași pagini.',['Paget','mamelonului'],[290]),

q(91,['Carcinomul mamar după originea histologică:',
 ['Forma ductală reprezintă circa 80% din cazuri și are agresivitate crescută','Forma lobulară reprezintă circa 20% din cazuri, cu agresivitate redusă și detecție mai dificilă','Carcinomul ductal invaziv este cea mai frecventă formă invazivă, circa 80% din cazurile invazive','Forma lobulară reprezintă 80% din cazuri, identic carcinomului de col scuamos','Unu la sută dintre cancerele mamare apar la bărbați'],'ABCE',291,'Afecțiunile sânului — Histologia cancerului mamar',
 'Ierarhizarea 80% ductal versus 20% lobular, a predominanței formei invazive ductale și a ponderii de 1% la bărbați.',
 ['Ponderea 80% și agresivitatea formei ductale sunt explicite.','20%, agresivitatea redusă și detecția dificilă definesc forma lobulară.','Tabelul identifică carcinomul ductal invaziv drept cea mai frecventă formă invazivă (80%).','80% scuamos este histologia cancerului de col, nu originea lobulară.','Nota cuantifică 1% dintre cancerele mamare la bărbați.']],
 8,'Distractorul permută 80% de la col asupra originii lobulare, restul fiind cifre alăturate ușor de inversat.',['80% din cazuri)','1% dintre cancerele']),

q(92,['Conduita față de o tumoră mamară palpabilă la femeia sub 30 de ani include:',
 ['Ecografie țintită, eventual plus mamografie diagnostică','Aspirație și monitorizare la 2–4 luni pentru chistele simple','Biopsie țintită ghidată imagistic pentru chistele complexe sau tumorile solide','Doar încurajare și reevaluare după 1–2 cicluri, ca la adolescente, fără imagistică','Mamografie de screening de primă intenție, fără ecografie, identic femeii peste 30 de ani'],'ABC',290,'Afecțiunile sânului — Algoritmul tumorii palpabile',
 'Aplicarea ecografiei ca prim pas sub 30 de ani și a distincției chist simplu versus complex/solid.',
 ['Ecografia țintită ± mamografia diagnostică este conduita sub 30 de ani.','Aspirația și reevaluarea la 2–4 luni sunt ale chistului simplu.','Biopsia ghidată este a chistelor complexe sau a maselor solide.','Doar reevaluarea după 1–2 cicluri este rezervată adolescentelor.','Sub 30 de ani ecografia precede; mamografia ± ecografia este algoritmul peste 30 de ani.']],
 8,'Vârstele adolescentă / <30 / >30 din același tabel sunt ușor de permutat între observație, ecografie și mamografie.',['Vârsta <30 ani','Ecografie'],[291]),
];
