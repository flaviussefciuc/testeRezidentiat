import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=219?p-83:p<=225?p-85:p-87;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('colon',15,pdfOffset,`colon-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const COLON_D=[
q(74,['Colonul, ca organ anatomic, se caracterizează prin:',
 ['Începe la joncțiunea ileocecală și măsoară aproximativ 150 cm','Cecul, ascendentul și porțiunea proximală a transversului se dezvoltă din mezenteron','Treimea distală a transversului, descendentul, sigmoidul și rectul se dezvoltă din metenteron','Colonul are vilozități identice jejunului, cu absorbție superioară intestinului subțire','Cecul și sigmoidul au același diametru mediu, de 10 cm'],'ABC',216,'Anatomie — Lungime și origine embriologică',
 'Reținerea celor 150 cm și a împărțirii mezenteron/metenteron, față de absența vilozităților.',
 ['Lungimea de aproximativ 150 cm este explicită.','Originea din mezenteron a cecului–transvers proximal este citată.','Originea din metenteron a transversului distal–rect este descrisă.','Diferența histologică majoră este absența vilozităților.','Cecul are 7,5 cm, sigmoidul 2,5 cm, nu 10 cm.']],
 8,'Inventă vilozități colice și egalează diametrele 7,5 versus 2,5 cm.',['aproximativ 150 cm','mezenteron']),

q(75,['Diametrul mediu al cecului, potrivit textului, este de:',
 ['7,5 cm, în timp ce sigmoidul are 2,5 cm','2,5 cm, identic sigmoidului','12–18 cm, identic lungimii rectului','2,5–5 cm, identic canalului anal','150 cm, confuzie cu lungimea colonului'],'A',216,'Anatomie — Calibru cec versus sigmoid',
 'Contrastul 7,5 cm (cec) versus 2,5 cm (sigmoid), două calibre din aceeași propoziție.',
 ['Perechea 7,5 / 2,5 cm este explicită.','2,5 cm este calibrul sigmoidului, nu al cecului.','12–18 cm este lungimea rectului.','2,5–5 cm este lungimea canalului anal.','150 cm este lungimea colonului, nu un diametru.']],
 8,'Permutează 7,5 cm cu 2,5 cm, 12–18 cm și 150 cm, patru măsurători din anatomia colică.',['7,5 cm','2,5 cm']),

q(76,['Față de intestinul subțire, colonul se deosebește macroscopic prin:',
 ['Calibru, grad de fixare, apendici epiploici, tenii și haustră','Absența apendicilor epiploici la cec, apendice cecal și rect','Teniile lipsesc pe colon, fiind prezente doar pe jejun','Vilozități mai înalte decât jejunul, deci absorbție calorică predominant colică','Apendicii epiploici sunt prezenți și pe rect, ca reper de rezecție'],'AB',216,'Anatomie — Cinci deosebiri',
 'Aplicarea pentadei calibru–fixare–epiploici–tenii–haustră și a absenței epiploicilor pe cec/rect.',
 ['Cele cinci puncte de deosebire sunt enumerate.','Absența epiploicilor pe cec, apendice și rect este explicită.','Teniile pornesc de la baza apendicelui și se etalează pe rect, nu lipsesc.','Colonul nu are vilozități.','Rectul nu are apendici epiploici.']],
 8,'Pune epiploici pe rect și vilozități pe colon, inversând două semne de recunoaștere intraoperatorie.',['apendici epiploici','absenţa vilozităţilor']),

q(77,['Mobilizarea și raporturile colonului includ:',
 ['Ascendentul și descendentul sunt retroperitoneale, acoperite anterior de peritoneu','Transversul este cea mai mobilă parte, suspendat între flexurile hepatică și splenică','Marele epiploon este atașat de partea antimezostenică a transversului','Sigmoidul este retroperitoneal fix, iar transversul este imobil','Flexura hepatică plutește liber, fără raport cu lobul hepatic drept'],'ABC',216,'Anatomie — Peritoneu și mobilitate',
 'Contrastul retroperitoneal (ascendent/descendent) versus transversul mobil cu mare epiploon.',
 ['Statutul retroperitoneal al ascendentului este explicit.','Transversul ca cea mai mobilă parte este citat.','Atașarea marelui epiploon este descrisă.','Sigmoidul este intraperitoneal mobil; descendentul e cel fix.','Flexura hepatică este o porțiune fixă sub fața inferioară a lobului drept.']],
 8,'Inversează statutul peritoneal sigmoid versus descendent, o capcană de abord chirurgical.',['cea mai mobilă','Marele epiploon'],[217]),

q(78,['Fibrele simpatice preganglionare, teritoriul vag versus S2–S4 și motilitatea după secțiune medulară:',
 ['Fibrele simpatice preganglionare străbat lanțurile latero-vertebrale; stimularea simpatică inhibă activitatea musculară colică','Parasimpaticul până la jumătatea transversului vine pe vag; distal, din rădăcinile S2–S4','Cel mai important control pare mediat de reflexele regionale din plexurile submucoase','Pacienții cu secțiune de măduvă continuă să aibă motilitate intestinală relativ normală','Simpaticul stimulează peristaltismul, iar secțiunea medulară anulează orice motilitate colică'],'ABCD',217,'Inervație — Simpatic, vag, S2–S4',
 'Aplicarea inhibiției simpatice, a teritoriului vag versus S2–S4 și a motilității persistente după secțiune medulară.',
 ['Inhibiția simpatică este explicită.','Teritoriile vag și S2–S4 sunt citate.','Plexurile submucoase ca control principal sunt descrise.','Motilitatea după secțiune medulară este menționată.','Simpaticul inhibă, nu stimulează; motilitatea nu dispare după secțiune.']],
 8,'Inversează efectul simpaticului și declară colonul inert după leziune medulară.',['nervul vag','S2 la S4']),

q(79,['Lungimea rectului, valvele Houston și planul Waldeyer–Denonvilliers se descriu astfel:',
 ['Lungime aproximativ 12–18 cm, de la joncțiunea rectosigmoidiană până la inelul anorectal (puborectal)','Trei pliuri submusculare, valvele rectale (Houston)','Cele două treimi superioare sunt acoperite anterior de peritoneu; treimea inferioară este complet extraperitoneală','Posterior, de la S4, fascia Waldeyer se prelungește anterior în fascia Denonvilliers','Treimea inferioară este intraperitoneală, Waldeyer lipsind, mezorectul fiind un mezenter adevărat'],'ABCD',218,'Rect — Houston, Waldeyer, Denonvilliers',
 'Maparea 12–18 cm, a valvelor Houston și a planului Waldeyer–Denonvilliers, față de mezenterul „adevărat”.',
 ['Lungimea 12–18 cm este explicită.','Valvele Houston sunt citate.','Acoperirea peritoneală 2/3 versus 1/3 extra este descrisă.','Waldeyer și Denonvilliers sunt menționate.','Treimea inferioară este extraperitoneală; mezorectul este un termen impropriu.']],
 8,'Declară treimea inferioară intraperitoneală și mezorectul mezenter adevărat, contrar frazei explicite.',['12- I 8 cm','fascia lui Waldeyer']),

q(80,['Drenajul venos și limfatic al rectului orientează metastazele astfel:',
 ['Vena hemoroidală superioară și limfaticele drenează în teritoriul mezenteric inferior, deci în sistemul port; vena hemoroidală mijlocie și limfaticele iliace interne drenează în circulația sistemică','Întreg rectul drenează doar în portă, deci metastazele pulmonare sunt imposibile','Hemoroidala superioară se varsă în cava, fără ganglion mezenteric inferior','Denonvilliers înlocuiește drenajul venos, metastazele ținând doar de vagin/prostată','Limfaticele rectale ocolesc atât porta cât și iliacii interni'],'A',218,'Rect — Drenaj port versus sistemic',
 'Recunoașterea celor două căi (port via IM versus sistemic via iliaci interni) pentru metastazele rectale.',
 ['Cele două căi sunt explicite.','Textul subliniază tocmai dubla cale, relevantă pentru metastaze.','Hemoroidala superioară merge spre mezenterici inferiori și portă.','Fascia Denonvilliers este plan de disecție, nu substitut de drenaj.','Ambele stații ganglionare sunt descrise.']],
 8,'Anulează calea sistemică, deși pagina o leagă explicit de metastaze.',['sistemul portal','iliaci interni']),

q(81,['Linia dințată marchează schimbări de inervație și drenaj astfel:',
 ['Deasupra: mucoasa nu are sensibilitate, inervație simpatică și parasimpatică; sub: inervație somatică, deci sensibilitate','Plexul hemoroidal intern (deasupra) drenează în hemoroidala mijlocie și inferioară; limfaticele, în ganglioni mezenterici inferiori și iliaci interni','Plexul extern și limfaticele de sub linie drenează în hemoroidala inferioară, respectiv ganglionii inghinali superficiali','Imediat proximal sunt coloanele Morgagni; în medie 6 glande se evacuează în fiecare criptă','Sub linie mucoasa este insensibilă, iar limfaticele ocolesc inghinalii'],'ABCD',219,'Anus — Linia dințată',
 'Maparea autonom versus somatic și a stațiilor IM/iliaci versus inghinali, plus cele ~6 glande criptice.',
 ['Schimbarea de sensibilitate este explicită.','Drenajul de deasupra este citat.','Drenajul de sub linie spre inghinali este descris.','Coloanele Morgagni și media de 6 glande sunt menționate.','Sub linie există sensibilitate somatică; inghinalii sunt stația limfatică.']],
 8,'Inversează sensibilitatea deasupra/sub linie și scoate inghinalii din drenajul distal.',['linia dinţată','inghinali superficiali']),

q(82,['Motilitatea colică și ritmul defecației se caracterizează prin:',
 ['Undele lente sunt contracții bidirecționale segmentare de frecvență joasă, pentru amestecare','Contracțiile globale, propulsive, încep în transvers după trezire și după ingestie, asociate nevoii de a defeca','Frecvența normală variază de la 8 la 72 de ore, cu o medie de o dată pe zi','Defecația normală cere scaun la fiecare 2 ore, altfel se definește ocluzie','Undele lente sunt unicele contracții, globalele lipsind după mese'],'ABC',219,'Fiziologie — Motilitate și defecație',
 'Separarea undelor lente (amestec) de contracțiile globale postprandiale/la trezire și a intervalului 8–72 de ore.',
 ['Descrierea undelor lente este explicită.','Originile și asocierea cu defecația ale contracțiilor globale sunt citate.','Intervalul 8–72 de ore și media zilnică sunt descrise.','2 ore nu este ritmul citat.','Ambele tipuri de contracție sunt enumerate.']],
 8,'Comprimă ritmul la 2 ore și anulează contracțiile globale postprandiale.',['8 ore la 72 de ore','Contracţiile globale']),

q(83,['Diverticuloza, ca descoperire endoscopică, se caracterizează prin:',
 ['Este cea mai frecventă descoperire endoscopică','Studiile populaționale au incriminat dieta săracă în fibre din Europa de Vest și SUA','Cea mai frecventă localizare este sigmoidul, dar pot exista și pe dreapta sau pandiverticuloză','Rămâne o boală strict vestică, incidența globală fiind în scădere','Diverticulii congenitali (adevărați) predomină pe stânga la occidentali'],'ABC',222,'Diverticuloză — Epidemiologie și dietă',
 'Reținerea statutului de cea mai frecventă descoperire endoscopică și a dietei sărace în fibre, față de geografia „strict vestică”.',
 ['Statutul de cea mai frecventă descoperire este explicit.','Dieta săracă în fibre este citată.','Predilecția sigmoidiană cu excepțiile dreapta/pandiverticuloză este descrisă.','Date recente indică incidență în creștere la nivelul întregului glob.','Diverticulii adevărați sunt mai frecvenți pe dreapta și la asiatici.']],
 8,'Declară boala „strict vestică în scădere”, contrar frazei despre creșterea globală.',['cea mai frecventă descoperire','săracă în fibre']),

q(84,['Hipersensibilitatea viscerală din BDSN, fără inflamație macroscopică, se tratează prin:',
 ['Hipersensibilitate viscerală fără inflamație macroscopică; tratamentul include creșterea fibrelor alimentare','Febră, leucocitoză și abces pericolic, identică diverticulitei complicate','Mucoasă endoscopică ulcerată, ca în colita ulcerativă','Indicație de Hartmann de principiu după primul episod','Pneumaturie, ca echivalent de fistulă colovezicală'],'A',222,'BDSN — Hipersensibilitate și fibre',
 'Recunoașterea BDSN ca simptome fără inflamație, tratată prin fibre, nu prin chirurgie de urgență.',
 ['Hipersensibilitatea și fibrele sunt explicite.','Febra/leucocitoza lipsesc în BDSN.','Endoscopia nu identifică modificări mucoase în afara diverticulilor.','Hartmann ține de perforația liberă.','Pneumaturia orientează spre fistulă, nu spre BDSN.']],
 8,'Conflatează BDSN cu diverticulita complicată și cu fistula, trei entități distinse pe pagină.',['hipersensibilitatea viscerală','suplimente cu fibre'],[223]),

q(85,['Fistula diverticulară se recunoaște clinic prin:',
 ['Pneumaturie sau infecții urinare repetate (colovezicală); materii fecale pe vagin (colovaginală)','Supurație de perete urmată de evacuare cutanată de puroi, apoi fecale (colocutană)','Aer în vezică după cistoscopie recentă, suficient pentru diagnosticul de fistulă','Traiectul fistulos este vizibil imagistic în marea majoritate a cazurilor','Diagnosticul nu cere CT sau colonoscopie, mucoasa neputând ascunde alte leziuni'],'AB',223,'Fistule diverticulare — Semne clinice',
 'Aplicarea triadului pneumaturie/fecalurie/fecaloid vaginal, față de falsa pozitivate a aerului post-instrumentare.',
 ['Semnele colovezicale și colovaginale sunt explicite.','Secvența colocutană este citată.','Aerul vezical susține diagnosticul în absența instrumentării recente.','În majoritatea cazurilor traiectul nu este identificat.','Protocolul include CT și colonoscopie pentru a exclude alte leziuni mucoase.']],
 8,'Transformă aerul post-cistoscopie în criteriu de fistulă, exact precauția textului.',['Pneumaturie','materii fecale prin vagin']),

q(86,['După două atacuri de diverticulită spitalizată, strategia actuală se caracterizează prin:',
 ['Clasic se considera sigmoidectomie, boala fiind localizată la sigmoid în 95% dintre cazuri','Episodul inițial este de obicei cel mai sever; abordarea necomplicată se individualizează','Un episod la 3 ani poate rămâne conservator; episoade numeroase într-un an orientează spre rezecție electivă după discuție de risc-beneficiu','Sigmoidectomia se impune uniform după două atacuri, episodul următor fiind cel mai grav','95% dintre rezecții vizează colonul drept, sigmoidul fiind rar interesat'],'ABC',224,'Diverticulită — Individualizare după recurențe',
 'Contrastul vechii reguli „două atacuri = rezecție” cu individualizarea, pe fondul cifrei de 95% sigmoid.',
 ['Cifra de 95% și vechea regulă sunt explicite.','Severitatea episodului index și individualizarea sunt citate.','Exemplul 3 ani versus numeroase/an este descris.','Abordarea actuală nu mai impune rezecția uniformă; episodul index e cel mai sever.','95% este localizarea sigmoidiană, nu dreaptă.']],
 8,'Restaurează regula „două atacuri = operație” și mută cei 95% pe colonul drept.',['95% dintre cazuri','fiecare 3 ani']),

q(87,['Abcesul diverticular mic, adiacent colonului sau în mezocolon, se poate trata inițial prin:',
 ['Repaus intestinal și antibiotice IV','Drenaj percutan de principiu, ca la abcesele >5 cm','Hartmann de urgență, identic perforației libere','Stent endoscopic, ca în ocluzia neoplastică fără peritonită','Observație fără antibiotice, mucoasa fiind sterilă'],'A',224,'Diverticulită — Abces mic versus >5 cm',
 'Diferențierea abcesului mic (repaus + IV) de pragul >5 cm care cere drenaj percutan.',
 ['Răspunsul la repaus intestinal și antibiotice IV este explicit.','Percutanul este rezervat abceselor >5 cm.','Hartmann ține de perforație liberă/obstrucție.','Stentul ține de ocluzia neoplastică fără peritonită.','Antibioticele IV fac parte din tratamentul inițial.']],
 8,'Aplică drenajul percutan (>5 cm) pe abcesul mic, amestecând două rânduri din același paragraf.',['de mici dimensilmi','antibiotice IV']),

q(88,['Când colonoscopia identifică sângerare activă dintr-un diverticul, hemostaza poate include:',
 ['Clipuri','Electrocoagulare','Injectare de adrenalină','Doar vasopresină angiografică, colonoscopia fiind pur diagnostică','Rezecție de principiu înaintea oricărei tentative endoscopice'],'ABC',225,'Hemoragia diverticulară — Hemostază endoscopică',
 'Recunoașterea trio-ului clip–electrocoagulare–adrenalină ca gest endoscopic, distinct de temporizarea angiografică.',
 ['Clipurile sunt enumerate.','Electrocoagularea este citată.','Injectarea de adrenalină este descrisă.','Colonoscopia este diagnostică și terapeutică; vasopresina urmează dacă endoscopia eșuează.','Invazivul urmează persistenței hemoragiei, nu precede endoscopia.']],
 8,'Anulează rolul terapeutic al colonoscopiei, deși pagina o numește cea mai folosită metodă diagnostică și terapeutică.',['clipurilor','injectare de adrenalină']),

q(89,['Colita ulcerativă și boala Crohn se deosebesc, dincolo de distribuție, prin:',
 ['CU interesează mucoasa și submucoasa, doar colonul și rectul','Crohn este transmurală, de la cavitatea bucală până la anus','Macroscopic, Crohn: rect adesea indemn, leziuni discontinue, ulcerații aftoase și liniare','Vârsta de debut e bimodală: circa două treimi în decadele 2–3, o treime în decada 5','CU este transmurală de la gură la anus, Crohn fiind strict rectală, fără ileon'],'ABCD',225,'BII — Perete, distribuție, vârstă',
 'Contrastul mucos (CU) versus transmural (Crohn) și bimodalul 2/3 + 1/3, față de inversarea teritoriilor.',
 ['Limitele de perete și organ ale CU sunt explicite.','Caracterul transmural gură–anus al Crohn este citat.','Semnele macroscopice de skip/rect indemn sunt descrise.','Distribuția bimodală este menționată.','Direcția CU versus Crohn este inversă.']],
 8,'Inversează adâncimea și teritoriul CU versus Crohn, două definiții din același paragraf.',['mucoasa şi submucoasa','distribuţie bimodală']),

q(90,['Conform Tabelului 15-2, aspectul macroscopic și microscopic CU versus Crohn include:',
 ['CU: friabilitate, sângerare, exudate granulare, pseudopolipi, ulcere izolate; microscopic inflamație muco-submucoasă și abcese criptice, fibroză rară','Crohn: ulcerații liniare, fisuri transversale, aspect de pietre de pavaj, îngroșare, stricturi; microscopic inflamație transmurală, granuloame, fibroză','Radiologic, CU dă țeavă de plumb concentrică, Crohn semnul corzii pe intestinul subțire','Crohn dă țeavă de plumb, CU semnul corzii pe ileon','Abcesele criptice definesc Crohn, granuloamele fiind tipice CU'],'ABC',228,'Tabelul 15-2 — Histologie și radiologie',
 'Maparea pietrelor de pavaj/granuloame (Crohn) versus pseudopolipi/abcese criptice (CU) și a semnelor radiologice.',
 ['Lista macroscopică și microscopică CU este din tabel.','Lista Crohn, inclusiv pietrele de pavaj, este citată.','Țeava de plumb versus semnul corzii sunt din tabel.','Direcția radiologică este inversă.','Abcesele criptice țin de CU, granuloamele de Crohn.']],
 8,'Inversează țeava de plumb cu semnul corzii și granuloamele cu abcesele criptice.',['pietre de pavaj','abcese criptice']),

q(91,['Conform Tabelului 15-2, evoluția naturală și perforația deosebesc CU de Crohn astfel:',
 ['CU: exacerbări cu reactivări violente; perforație liberă neobișnuită; megacolon frecvent','Crohn: evoluție cronică indolentă; perforație localizată frecventă; megacolon rar','CU are fistulă perianală frecventă și stenoze tipice','Megacolonul este rar în CU și frecvent în Crohn','Perforația liberă este regula Crohn, CU neperforând'],'AB',228,'Tabelul 15-2 — Evoluție și perforație',
 'Contrastul reactivărilor violente/megacolon (CU) versus perforația localizată (Crohn).',
 ['Evoluția violentă, perforația liberă neobișnuită și megacolonul frecvent sunt din tabel.','Indolența, perforația localizată și megacolonul rar sunt citate.','Fistula perianală este rară în CU și frecventă în Crohn; stenozele sunt neobișnuite în CU.','Megacolonul este frecvent în CU.','Perforația liberă este neobișnuită în CU; Crohn perforază localizat.']],
 8,'Inversează megacolonul și tipul de perforație, două rânduri adiacente din tabel.',['reactivări violente','localizată, frecventă']),

q(92,['Ocluzia completă a colonului, spre deosebire de cea parțială, se recunoaște prin:',
 ['Constipație severă și absența tranzitului pentru gaze sau materii fecale timp de mai multe ore','La tușeu, evaluarea conținutului ampulei (gaze, fecale sau colabare), consistența scaunului și formațiuni','Chirurgia este indicată aproape constant în ocluzia completă; parțiala poate fi decompresată cu SNG, NPO și fluide IV','Ocluzia completă se tratează doar prin clismă baritată, fără evaluare chirurgicală','Ampula plină de fecale moi exclude obstacolul distal și face imaginea inutilă'],'ABC',229,'Ocluzia completă versus parțială',
 'Aplicarea ferestrei de ore fără gaze/scaun și a decompresiei medicale rezervate formei parțiale.',
 ['Criteriul de ore fără tranzit este explicit.','Elementele tușeului sunt enumerate.','Chirurgia aproape constantă în completa versus decompresia parțialei sunt descrise.','Bariul se evită la suspiciune de obstacol/perforație; completa are indicație chirurgicală.','Tușeul orientează, nu anulează imagistica.']],
 8,'Tratează ocluzia completă cu bariu și declară ampula plină „liniștitoare”.',['mai multe ore','ocluzie completă']),

q(93,['Dacă se suspectează ocluzie colonică completă, substanța de contrast orală hidrosolubilă se folosește judicios din cauza riscului de:',
 ['Sindrom de aspirație și pneumonie','Perforație iatrogenă prin bariu, contrastul hidrosolubil fiind inert','Ischemie mezenterică prin hiperosmolaritate, identică Ogilvie','Fistulă anastomotică tardivă','Ileus biliar, analog calculului'],'A',229,'Ocluzia — Contrast oral',
 'Reținerea riscului de aspirație/pneumonie al contrastului oral în ocluzia completă.',
 ['Sindromul de aspirație și pneumonia sunt explicite.','Bariul, nu hidrosolubilul, este interzis la perforație; aici riscul citat este aspirația.','Ogilvie nu este mecanismul acestui avertisment.','Fistula anastomotică ține de rezecția joasă, nu de contrastul oral.','Ileusul biliar nu figurează aici.']],
 8,'Înlocuiește aspirația cu perforația baritată, două riscuri de contrast din același paragraf.',['sindromului de aspiraţie','pneumoniei']),

q(94,['Cancerul rectal T3/T4 sau N+ se gestionează, după stadializare, astfel:',
 ['Se începe cu chimio-radioterapie neoadjuvantă, pentru a reduce tumora și recurența locală','După 6 săptămâni de radiochimioterapie urmează 8–12 săptămâni de recuperare, în care tumora continuă să regreseze, apoi chirurgia','Rezecția anterioară joasă păstrează 1 cm distal și TME; anastomoza joasă e protejată de stomă proximală temporară','Invazia sfincterului indică rezecție abdomino-perineală și colostomie sigmoidiană definitivă','Stadiul T3 se operează imediat, neoadjuvanța fiind rezervată polipilor pediculați'],'ABCD',234,'Rect — Neoadjuvant 6 + 8–12 săptămâni',
 'Aplicarea ferestrelor 6 săptămâni de CRT și 8–12 săptămâni de așteptare, plus TME și stoma de protecție.',
 ['Indicația neoadjuvantă T3/T4 sau N+ este explicită.','Cele două ferestre temporale sunt citate.','Marginea de 1 cm, TME și stoma sunt descrise.','APR la invazia sfincterului este menționată.','Neoadjuvanța, nu operația imediată, este etapa inițială a T3/T4–N+.']],
 8,'Sare peste fereastra 8–12 săptămâni și operează T3-ul de urgență.',['6 săptămâni','8-12 săptămâni']),

q(95,['Chirurgia minim invazivă în cancerul colorectal, potrivit textului, se caracterizează prin:',
 ['Rezecția cancerelor de colon se poate face laparoscopic, cu număr acceptabil de ganglioni, de obicei printr-o mică incizie pentru extracție și anastomoză','Pentru tumorile rectale, sunt necesare studii suplimentare privind siguranța și rezultatele oncologice','Laparoscopia rectală are evidență identică colonului și înlocuiește TME-ul deschis','Stoma de protecție este inutilă după LAR laparoscopică','Numărul de ganglioni laparoscopic este inacceptabil, deci metoda e abandonată'],'AB',234,'Tehnică — Laparoscopie colon versus rect',
 'Separarea evidenței acceptate pentru colon de prudența explicită privind rectul.',
 ['Siguranța și ganglionii acceptabili la colon sunt explicite.','Nevoia de studii suplimentare pentru rect este citată.','Textul nu echivalează rectul cu colonul.','Riscul de fistulă după LAR rămâne, stoma de protecție fiind descrisă.','Studiile arată un număr acceptabil de ganglioni.']],
 8,'Extinde evidența laparoscopică a colonului la rect, exact limita pe care textul o subliniază.',['minim invazivă','tumorilor rectale']),

q(96,['Evaluarea hemoroizilor interni simptomatici include:',
 ['Sângerare cu sânge roșu proaspăt, nedureroasă, după ștergere sau picături în vas; cantitatea rareori cauzează anemie','Gradul I nu prolabează și cere anuscop pentru vizualizare; examinarea pe vas cu efort precizează gradul de prolaps','Timpul petrecut pe toaletă și efortul de evacuare sunt comportamente modificabile','Sângerarea internă este intens dureroasă, anodermul de deasupra liniei pectinee fiind bogat inervat','Hemoroizii asimptomatici se operează din considerente estetice'],'ABC',236,'Hemoroizi — Clinic și gradul I',
 'Recunoașterea rectoragiei nedureroase și a anuscopiei pentru gradul I, față de inervația dureroasă a internilor.',
 ['Caracterul nedureros și raritatea anemiei sunt explicite.','Anuscopul pentru gradul I și examenul pe vas sunt citate.','Timpul pe toaletă ca țintă modificabilă este descris.','Mucoasa de deasupra liniei pectinee nu are receptori de durere.','Asimptomaticii nu necesită tratament estetic.']],
 8,'Atribuie internilor durerea anodermului, inversând caracterul nedureros al rectoragiei.',['anuscopul','sânge roşu proaspăt']),

q(97,['Hemoroidul extern trombozat se prezintă clinic, potrivit textului, ca:',
 ['Masă în tensiune, dură și sensibilă, albastru-violacee, la marginea anală, cu durere acută','Plică tegumentară nedureroasă, identică mariscăi santinelă a fisurii cronice','Sângerare nedureroasă în vas, fără masă palpatioară','Prolaps reductibil spontan, identic gradului II intern','Ulcerare longitudinală de la linia dințată la margine, identică fisurii'],'A',236,'Hemoroizi externi — Tromboză',
 'Reținerea masei albastre-violacee tense de la marginea anală, distinct de fisură și de rectoragia internă.',
 ['Descrierea albastru-violacee, dură și sensibilă este explicită.','Marisca santinelă ține de fisura cronică.','Sângerarea nedureroasă descrie internii.','Prolapsul reductibil spontan este gradul II intern.','Soluția de continuitate longitudinală este fisura.']],
 8,'Conflatează tromboza externă cu fisura și cu internul de grad II, trei vecini anorectali.',['albastră-violacee','marginii anale']),

q(98,['Tratamentul hemoroizilor de grad I, dincolo de formatorii de scaun, poate include:',
 ['Agenți topici sau, dacă sângerează, scleroterapie ori coagulare cu infraroșu','Ligatura cu benzi elastice, fezabilă și pentru gradul I','Hemoroidectomie de principiu, ca la gradul IV ireductibil','Seton tăietor, ca în fistula transsfincteriană','SIL stângă, durerea fiind interpretată ca fisură'],'AB',236,'Hemoroizi — Gradul I, scleroterapie și IR',
 'Aplicarea scleroterapiei/infraroșului și a ligaturii și pentru gradul I, față de hemoroidectomia de grad IV.',
 ['Topicele, scleroterapia și infraroșul sunt explicite.','Ligatura pentru gradele I, II și o parte din III este citată.','Hemoroidectomia ține de gradul IV și de mixtele III cu componentă externă.','Setonul ține de fistulă.','SIL ține de fisura cronică.']],
 8,'Mută hemoroidectomia pe gradul I, inversând treptele tabelului de tratament.',['scleroterapie','coagulare cu infraroşu'],[237]),

q(99,['Când fistula perianală asociază un abces, conduita descrisă include:',
 ['Fistulotomie și plasarea unui fir seton pentru controlul sepsisului, urmate de o procedură secundară definitivă','Rata de vindecare variază între 62–100%, după tipul procedurii secundare','Alternativ, setonul lăsat cu ligatură progresivă realizează sfincterotomie graduală','Fistulotomia în abcesul acut înlocuiește drenajul, setonul fiind contraindicat','Vindecarea după seton este sub 10%, incontinența fiind regula în studiile recente'],'ABC',238,'Fistulă — Seton și sepsis',
 'Aplicarea setonului ca control al sepsisului (62–100% după procedura secundară), față de incontinența „de regulă”.',
 ['Cuplul fistulotomie + seton apoi procedură secundară este explicit.','Intervalul 62–100% este citat.','Ligatura progresivă ca sfincterotomie graduală este descrisă.','În abces, drenajul/setonul controlează sepsisul; fistulotomia izolată nu înlocuiește acest pas.','Studiile recente raportează rate de incontinență asemănătoare altor tratamente, nu regula; 62–100% nu este <10%.']],
 8,'Prăbușește succesul setonului sub 10% și transformă incontinența în regulă, contrar studiilor recente citate.',['62-100%','fir seton']),

q(100,['În fisura anală, explorarea digestivă se alege astfel:',
 ['Colonoscopia este necesară la pacienții cu durere și hematochezie; este recomandată după 30 de ani, mai ales cu antecedente familiale de CCR sau simptome abdominale','La tineri, sigmoidoscopia flexibilă; dacă se suspectează Crohn, colonoscopie completă cu biopsii de ileon terminal','Antibioticele se dau de rutină, chiar fără infecție obiectivată','Colonoscopia se evită după 30 de ani, fisura excluzând neoplazia','Tuşeul rectal înlocuiește inspecția, chiar când diagnosticul e clar'],'AB',238,'Fisură — Colonoscopie după 30 de ani',
 'Aplicarea pragului de 30 de ani pentru colonoscopie și a ileoscopiei când se suspectează Crohn.',
 ['Indicația după 30 de ani și contextul familial/abdominal sunt explicite.','Sigmoidoscopia la tineri și ileoscopia pentru Crohn sunt citate.','Antibioticele nu sunt indicate decât dacă o infecție concomitentă este obiectivată.','După 30 de ani colonoscopia este recomandată, nu evitată.','Tuşeul este necesar doar dacă diagnosticul e neclar; inspecția cu depărtarea feselor e primul gest.']],
 8,'Anulează colonoscopia după 30 de ani, exact pragul anti-CCR al paginii.',['peste 30 de ani','ileonulw']),

q(101,['Infecția HPV anorectală, dincolo de subtipurile 16/18, se caracterizează prin:',
 ['Este ITS-ul cel mai des întâlnit în SUA; aproape toate femeile și toți bărbații vor avea infecția în viață, vectorul principal fiind persoana asimptomatică','Simptomele (condiloame) pot apărea la câțiva ani, deci sursa e greu de identificat','Excizia, crioterapia, podofilina, imiquimodul și fulgurația tratează leziunile externe mici, fără a eradica infecția; vindecarea chirurgicală 60–90%','Leziunile HIV-pozitive, recurente, plate sau suspecte se examinează histologic pentru displazie','Tratamentul local eradică HPV, biopsia fiind inutilă la HIV-pozitivi'],'ABCD',239,'HPV — Epidemiologie și distrucție locală',
 'Combinarea ubicuității infecției cu rata 60–90% a distrucției locale, care nu eradică virusul.',
 ['Ubicuitatea și vectorul asimptomatic sunt explicite.','Fereastra de ani până la simptome este citată.','Metodele locale, non-eradicarea și 60–90% sunt descrise.','Indicația histologică la HIV/recurente/plate este menționată.','Procedurile nu asigură eradicarea; histologia este cerută la leziunile suspecte.']],
 8,'Transformă distrucția locală în eradicare virală și anulează histologia la HIV.',['60-90%','imiquimod'],[240]),

q(102,['Infecția anorectală cu virus herpes simplex se caracterizează prin:',
 ['Seroprevalență de 20% în populația generală; transmitere prin contact direct, seroconversie după câteva săptămâni','Clinic: prodrom sistemic (febră, cefalee, mialgii), apoi durere, tenesme, scurgeri, prurit; vezicule care ulcerează și confluează, cu vindecare spontană','Tratamentul: analgezice orale, băi calde; aciclovir oral scurtează simptomele, IV la formele severe care nu tolerează oralul','Diagnosticul e de obicei clinic, confirmat prin culturi din ulcerații, tampoane rectale sau biopsii','Aciclovirul este inutil, veziculele impun APR înaintea oricărei antivirale'],'ABCD',240,'HSV anorectal — 20% și aciclovir',
 'Aplicarea seroprevalenței de 20% și a aciclovirului oral versus IV, față de APR ca „tratament”.',
 ['Cifra de 20% și calea de transmitere sunt explicite.','Prodromul și evoluția veziculelor sunt citate.','Analgezia, băile și aciclovirul oral/IV sunt descrise.','Metodele de confirmare sunt enumerate.','Aciclovirul scurtează simptomele; APR nu figurează ca gest herpetic.']],
 8,'Înlocuiește aciclovirul cu APR, o confuzie cu CCS-ul de pe aceeași pagină.',['seroprevalenţă de 20%','aciclovir']),

q(103,['Vascularizația arterială a canalului anal și a sfincterului este asigurată de:',
 ['Artera hemoroidală inferioară, din artera rușinoasă internă, ram al iliacei interne','Artera colică mijlocie, din AMS, identică transversului','Artera gastrică stângă, din trunchiul celiac','Artera pancreaticoduodenală inferioară, din AMS','Artera hemoroidală superioară singură, fără contribuție rușinoasă'],'A',219,'Anus — Artera hemoroidală inferioară',
 'Reținerea lanțului hemoroidală inferioară ← rușinoasă internă ← iliacă internă, distinct de hemoroidala superioară din AMI.',
 ['Lanțul anatomic este explicit.','Colica mijlocie vascularizează transversul, nu canalul anal.','Gastrica stângă nu este pedicul anal.','Pancreaticoduodenala inferioară ține de pancreas.','Hemoroidala superioară vascularizează rectul, nu este unica sursă a canalului.']],
 8,'Mută pediculul anal pe colica mijlocie sau pe gastrica stângă, două artere din vecinătatea capitolului.',['hemoroidală inferioară','ruşinoasă internă']),
];
