import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Sinopsis de medicină, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p-195;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('dermato',9,pdfOffset,`dermato-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Sinopsis',EDITION);

export const DERMATO_D=[
q(33,['Tratamentul impetigo, dincolo de aspectul crustelor de culoarea mierii:',
 ['Agentul cel mai frecvent este Staphylococcus aureus; infecția este contagioasă și întâlnită mai ales la copii','Cazurile localizate se tratează cu antibiotice topice (mupirocin)','Formele severe sau focarele epidemice primesc dicloxacilină sau cefalexină orală','Agentul cel mai frecvent este streptococul de grup A, ca în celulită','Tratamentul de elecție este debridarea chirurgicală urgentă, ca în fasceita necrozantă'],'ABC',197,'Infecții — Impetigo: etiologie și tratament',
 'Asocierea S. aureus pediatric cu mupirocinul topic și cu dicloxacilina/cefalexina orală.',
 ['S. aureus, contagiozitatea și predilecția pediatrică sunt explicite.','Mupirocinul topic este tratamentul formelor localizate.','Dicloxacilina sau cefalexina orală sunt rezervate formelor severe/epidemice.','Streptococul de grup A este agentul celulitei.','Debridarea urgentă definește fasceita necrozantă.']],
 8,'Distractorii aplică etiologia celulitei și tratamentul fasceitei pe impetigo.',['mupirocin','dicloxacilină']),

q(34,['Acneea vulgară la adult și treptele terapeutice de linia a doua:',
 ['Este inflamația foliculilor piloși și a glandelor sebacee, asociată cu Propionibacterium acnes, androgeni și obstrucție foliculară','Benzoil-peroxidul topic are proprietăți antimicrobiene și se asociază adesea cu un retinoid topic și un antibiotic','Contraceptivele orale pot fi utile la femeile care nu răspund la treptele precedente','Corticosteroizii și excesul de androgeni sunt cauze frecvente ale acneei la adulți','Există o asociere demonstrată cu anumite alimente, iar săpunurile modifică major evoluția'],'ABCD',198,'Infecții — Acneea: linia a doua și adultul',
 'Completarea schemei (P. acnes, benzoil-peroxid, COC) cu notele despre acneea adultului (steroizi, androgeni).',
 ['P. acnes, androgenii și obstrucția foliculară sunt din definiție.','Benzoil-peroxidul ca linia a doua în combinație este explicit.','COC la non-respondere sunt citate.','Nota leagă steroizii și excesul androgenic de acneea adultului.','Textul neagă asocierea cu alimentele și atribuie săpunurilor un efect redus.']],
 8,'Distractorul reintroduce alimentele și săpunurile, pe care notele le infirmă explicit.',['Benzoil-peroxidul','exces de androgeni']),

q(35,['Evoluția naturală a infecției cu HSV și antiviralele citate:',
 ['Boala este incurabilă; aciclovirul, famciclovirul sau valaciclovirul scurtează recurențele și pot reduce frecvența lor, intermitent sau continuu (supresiv)','Transmiterea perinatală poate provoca boală diseminată cu afectare neurologic severă; la imunosupresați poate da encefalită, pneumonie și hepatită','Aciclovirul vindecă definitiv infecția, eliminând virusul din ganglionii neuro-senzitivi','HSV-1 afectează în principal genitalia, iar HSV-2 cavitatea orală','Materialul genetic viral nu persistă după infecția primară'],'AB',198,'Infecții — HSV: antivirale și complicații',
 'Sublierea incurabilității, a triadei aciclovir/famciclovir/valaciclovir și a complicațiilor neonatale/imunosupresate.',
 ['Incurabilitatea și cele trei antivirale, episodice sau supresive, sunt explicite.','Diseminarea neonatală neurologică și triadă encefalită-pneumonie-hepatită la imunosupresați sunt citate.','Textul precizează că boala este incurabilă.','HSV-1 este oral, HSV-2 genital.','Genomul persistă în ganglionii neuro-senzitivi.']],
 8,'Distractorii inversează tropismul HSV-1/2 și pretind eradicare, contrazicând persistenta ganglionară.',['famciclovirul','valaciclovirul']),

q(36,['Verucile vulgare și molluscum contagiosum:',
 ['Verucile sunt tumori epiteliale benigne determinate de HPV; îndepărtarea se face adesea prin crioterapie sau acid salicilic topic','Molluscum este o infecție cu poxvirus, mai frecventă la copii și imunosupresați, cu papule lucioase ombilicate','Histologia molluscum (Giemsa, Wright) arată corpi de incluziune voluminoși; boala este frecvent autolimitată','Verucile sunt produse de Sarcoptes scabiei, cu prurit după baie fierbinte','Molluscum se tratează cu permetrină sau ivermectină, identic scabiei'],'ABC',200,'Infecții — HPV și poxvirus',
 'Separarea HPV (crioterapie, salicilic) de poxvirusul molluscum (Giemsa, autolimitat) de scabie.',
 ['HPV, crioterapia și acidul salicilic sunt explicite.','Poxvirusul, copiii/imunosupresații și ombilicarea sunt citate.','Corpii de incluziune Giemsa/Wright și caracterul autolimitat sunt din text.','Sarcoptes și pruritul post-baie definesc scabia.','Permetrina și ivermectina sunt ale scabiei, nu ale molluscum (laser/crio/chimic).']],
 8,'Distractorii aplică etiologia și tratamentul scabiei pe veruci și molluscum.',['acid salicilic','poxvirus']),

q(37,['Tinea corporis, cruris, pedis, unguium sau capitis, față de tinea versicolor, se caracterizează prin:',
 ['Plăci pruriginoase scuamoase eritematoase, cu margine activă și atenuare centrală; agenți Microsporum, Trichophyton sau Epidermophyton; KOH arată hife; antifungic topic săptămâni, oral în rezistență','Macule culoarea somonului pe torace, cu aspect de spaghete și chifteluțe la KOH','Plăci cu pustule periferice în pliuri, cu pseudohife, identic intertrigo candidozic','Papule lucioase ombilicate, identic molluscum','Cruste gălbui-aurii peri-orificiale, identic impetigo'],'A',200,'Infecții — Tinea non-furfur',
 'Recunoașterea marginii active, a celor trei dermatofiți și a hifelor KOH, distinct de Malassezia, Candida și molluscum.',
 ['Descrierea, agenții, hifele și treapta topic-apoi-oral sunt din tabelul 9-2.','Somonul și spaghetele-chifteluțe definesc tinea versicolor.','Pustulele din pliuri cu pseudohife definesc intertrigo candidozic.','Ombilicarea este a molluscum.','Crustele de culoarea mierii sunt ale impetigo.']],
 8,'Toate distractoarele sunt rânduri reale din tabelele/figurile de infecții vecine.',['margine activă','Epidermophyton']),

q(38,['Psoriazisul, dincolo de semnul Auspitz:',
 ['Poate asocia pitting unghial și desprinderea lamei unghiale de pat','Biopsia arată îngroșarea epidermului, absența stratului granulos și celule nucleate în stratul cornos','Fototerapia, metotrexatul și ciclosporina pot fi folosite în boala severă; 10-20% dintre pacienți au și artrită psoriazică','Leziunile tipice sunt pe flexoare la adult, identic dermatitei atopice','Cradle cap și Malassezia definesc entitatea, ca dermatita seboreică'],'ABC',203,'Afecțiuni inflamatorii — Psoriazis: unghii și tratament',
 'Completarea cu pitting, histologia (fără granulos) și treapta sistemică, plus rata de 10–20% a artritei.',
 ['Pitting-ul și onicoliza sunt explicite.','Triada histologică este citată.','Fototerapia/MTX/ciclosporina și cei 10-20% sunt din text și notă.','Flexoarele la adult definesc dermatita atopică; psoriazisul este pe extensie.','Cradle cap și Malassezia definesc seboreica.']],
 8,'Distractorii importă topografia eczemei și eponimul seboreicei pe psoriazis.',['pitting unghia','10-20% din pacienţii']),

q(39,['Eritemul nodos, dincolo de nodulii pretibiali și de VSH:',
 ['Este o reacție imunologică de tip întârziat la infecții, boli autoimune de țesut conjunctiv, boli inflamatorii intestinale sau medicamente','Tratamentul include AINS și iodură de potasiu; boala este autolimitată','Placa heraldică și distribuția în brad de Crăciun sunt caracteristice','Semnul Nikolsky pozitiv și acantoliza definesc entitatea, ca pemfigusul','Necroliza peste 30% BSA impune secția de arși, ca TEN'],'AB',204,'Afecțiuni inflamatorii — Eritem nodos: cauze și tratament',
 'Maparea triggerelor de hipersensibilitate întârziată și a dualității AINS plus iodură de potasiu.',
 ['Cauzele infecțioase, autoimune, IBD și medicamentoase sunt explicite.','AINS, iodura de potasiu și caracterul autolimitat sunt citate.','Placa heraldică și bradul definesc pitiriazisul rozat.','Nikolsky și acantoliza definesc pemfigusul vulgar.','Pragul de 30% BSA definește TEN.']],
 8,'Distractorii importă semnele pitiriazisului, pemfigusului și TEN pe eritemul nodos.',['iodură de potasiu','tip întârziat']),

q(40,['Tratamentul keratozei actinice, după confirmarea că este precanceroasă, este:',
 ['5-fluorouracil topic sau imiquimod, ori crioterapie; biopsia este necesară pentru a exclude carcinomul scuamocelular','Incizie și drenaj cu cotrimoxazol, ca în abcesul MRSA','Permetrină sau ivermectină, ca în scabie','Mupirocin topic, ca în impetigo','Flebotomie periodică, ca în porfiria cutanată tardivă'],'A',206,'Neoplasme — Keratoza actinică: tratament',
 'Recunoașterea triadei 5-FU/imiquimod/crioterapie și a indicației de biopsie pentru a exclude SCC.',
 ['Cele trei metode și indicația de biopsie sunt explicite.','Incizia și cotrimoxazolul sunt ale abcesului.','Permetrina/ivermectina sunt ale scabiei.','Mupirocinul este al impetigo.','Flebotomia este a porfiriei cutanate tardive.']],
 8,'Toate distractoarele sunt tratamente reale din capitol, mutate pe keratoza actinică.',['imiquimod','5-Auorouracil']),

q(41,['Pemfigusul vulgar și pemfigoidul bulos, dincolo de antigen și de Nikolsky:',
 ['Pemfigusul se tratează cu corticosteroizi, azatioprină sau ciclofosfamidă; netratat asociază sepsis și mortalitate crescută','Pemfigoidul are imunofluorescență cu anticorpi anti-membrană bazală și se tratează cu corticosteroizi orali/topici sau azatioprină','Pemfigusul afectează de obicei vârsta mijlocie sau vârstnicii; pemfigoidul majoritar pacienți peste 65 de ani','În pemfigoid, imunofluorescența arată anticorpi anti-epidermici, identic pemfigusului','Azatioprina este contraindicată în ambele, fiind rezervată porfiriei'],'ABC',205,'Afecțiuni buloase — Tratament și imunofluorescență',
 'Completarea cu schemele (steroizi/aza/ciclofosfamidă versus steroizi/aza) și cu ținta IF (epiderm versus membrană bazală).',
 ['Schema pemfigusului și complicația sepsis/mortalitate sunt explicite.','IF anti-membrană bazală și schema pemfigoidului sunt de pe pagina de continuare.','Vârstele (mijlocie/vârstnici versus >65) sunt citate.','Anticorpii anti-epidermici sunt ai pemfigusului, nu ai pemfigoidului.','Azatioprina este tratament în ambele, nu al porfiriei (flebotomie/clorochină).']],
 8,'Distractorii inversează ținta imunofluorescenței și mută azatioprina pe porfirie.',['ciclofosfamidă','anti-membrană bazală'],[206]),

q(42,['Tipul acral lentiginos de melanom și marginile de excizie citate:',
 ['Tipul acral lentiginos afectează palmele, tălpile și patul unghial','Marginea este 0,5 cm dacă leziunea este in situ, 1 cm dacă grosimea este sub 2 mm și 2 cm dacă grosimea este peste 2 mm','Metastazele cele mai frecvente sunt în plămân, creier și tract gastrointestinal','Biopsia excizională evidențiază melanocite atipice și posibil invazia în derm','Marginea unică recomandată este 3 cm, independent de grosime'],'ABCD',208,'Neoplasme — Melanom acral și margini',
 'Maparea topografiei acrale și a treptei 0,5 / 1 / 2 cm de margine, plus organele de metastază și biopsia excizională.',
 ['Palmele, tălpile și patul unghial definesc tipul acral lentiginos.','Cele trei praguri de margine sunt explicite.','Plămânul, creierul și tubul digestiv sunt organele citate.','Biopsia excizională cu melanocite atipice este din text.','Nu există o margine unică de 3 cm; treptele depind de grosime.']],
 8,'Distractorul inventează o margine unică de 3 cm, contrar treptei 0,5 / 1 / 2 cm.',['patul unghia','0,5 cm margine']),
];
