import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=1166?p-871:p<=1176?p-876:p-897;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('gastro',32,pdfOffset,`gastro-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const GASTRO_C=[
q(43,['Agentul principal al cariilor dentare la om, cariogen numai în prezența zahărului, este:',
 ['Streptococcus mutans','Helicobacter pylori','Clostridium difficile','Enterococcus faecalis','Candida albicans'],'A',1162,'Cavitatea orală — Cariile dentare',
 'Identificarea streptococului mutans ca agent cariogen dependent de zahăr, distinct de patogenele digestive din același capitol.',
 ['Textul identifică Streptococcus mutans ca principala cauză, cariogen numai în prezența zahărului.','H. pylori colonizează epiteliul gastric, nu smalțul.','C. difficile este legat de infecțiile sub IPP, nu de carii.','Enterococul nu este agentul citat.','Candida produce candidoză orală, nu carii.']],
 8,'Toate speciile apar în capitolul de gastro; doar S. mutans este legat de carii și de zahăr.',['Streptococcus mutans','zahărului']),

q(44,['Infecția dento-alveolară și eroziunile dentare, conform textului:',
 ['Cariile pot progresa spre pulpită, necroză pulpară și abces dento-alveolar','Dacă există edem al țesuturilor moi, înaintea drenajului se prescriu antibiotice, de exemplu amoxicilină sau metronidazol','Eroziunile dentare pot rezulta din expunerea la acid, de exemplu în bulimia nervoasă, sau foarte rar în BAGE severă','Abcesul dentar se tratează doar cu IPP, drenajul fiind inutil','Eroziunile dentare sunt patognomonice pentru infecția cu H. pylori'],'ABC',1162,'Cavitatea orală — Abces dentar și eroziuni',
 'Recunoașterea schemei amoxicilină/metronidazol înaintea drenajului și a eroziunilor prin acid (bulimie, rar BAGE).',
 ['Progresia carie–pulpită–necroză–abces este explicită.','Amoxicilina sau metronidazolul înaintea drenajului, dacă există edem, sunt citate.','Bulimia și, foarte rar, BAGE severă sunt cauzele de eroziune.','Drenajul rămâne intervenția dentară; antibioticele o precedă când există edem.','H. pylori nu este cauza eroziunilor dentare.']],
 8,'Înlocuiește drenajul cu IPP și atribuie eroziunile lui H. pylori, două confuzii cu teme din același capitol.',['amoxicilina sau metronidazol','bulimia nervosa']),

q(45,['Factorii asociați refluxului gastro-esofagian, din Cadranul 32.11, includ:',
 ['Medicamente — antimuscarinice, blocante ale canalelor de calciu, nitrați','Sclerodermia (scleroza sistemică) și tratamentul pentru acalazie','Corticoterapia sistemică de scurtă durată, ca mecanism principal','Deficitul de vitamină B12 prin factor intrinsc','Colonizarea gastrică cu S. mutans'],'AB',1162,'BAGE — Factori asociați (Cadranul 32.11)',
 'Recunoașterea medicamentelor care relaxează SEI (antimuscarinice, BCC, nitrați) și a sclerodermiei/acalaziei ca asocieri, distinct de cauze orale.',
 ['Cele trei clase medicamentoase sunt listate.','Sclerodermia și tratamentul acalaziei sunt în cadran.','Corticoterapia nu figurează ca factor principal de reflux în cadran.','Deficitul de B12 este o complicație a chirurgiei gastrice, nu un factor de BAGE.','S. mutans este agentul cariilor, nu al refluxului.']],
 8,'Importă B12 și S. mutans din paragrafele de dinți/chirurgie peste lista reală de relaxante ale SEI.',['blocante ale canalelor de calciu','Sclerodermia']),

q(46,['În algoritmul endoscopic al simptomelor de reflux, conform figurii:',
 ['Esofagita erozivă reprezintă 20-30% din cazuri, cu hernie hiatală în 70% și răspuns la IPP în 90%','Endoscopia normală (NERD) reprezintă 60-70%, cu hernie hiatală în 30%','Esofagul Barrett apare la 6-12%, cu hernie hiatală în 95%','Pirozisul funcțional (stimul non-acid) are răspuns slab la IPP','Esofagita erozivă este 60-70%, iar Barrett 70%, cu răspuns nul la IPP'],'ABCD',1165,'BAGE — Erozivă versus NERD versus Barrett: ponderi',
 'Atribuirea corectă a ponderilor 20-30% eroziv, 60-70% NERD și 6-12% Barrett, plus hernia 70%/30%/95%.',
 ['20-30%, HH 70% și răspuns IPP 90% sunt din figură.','60-70% endoscopie normală și HH 30% sunt citate.','6-12% Barrett și HH 95% sunt din figură.','Răspunsul slab la IPP al pirozisului funcțional este marcat.','Cifrele 60-70% și 70% țin de NERD, respectiv de hernia din esofagita erozivă, nu de Barrett.']],
 8,'Permutează 20-30%, 60-70% și 6-12% între eroziv, NERD și Barrett, toate din aceeași figură.',['20-30%','6-12%'],[1164]),

q(47,['În criteriile Praga, dacă inserția endoscopului la joncțiunea esogastrică este 36 cm, limita circumferențială 33 cm și extensia maximă 29 cm, clasificarea este:',
 ['C3 M7','C7 M3','C36 M29','Gradul D Los Angeles','Praga A5 mm'],'A',1166,'Esofagul Barrett — Criteriile Praga C și M',
 'Aplicarea scaderilor 36−33=C3 și 36−29=M7, distinct de gradele Los Angeles și de lungimile brute de inserție.',
 ['Textul calculează explicit :36 cm−33 cm=C3 și :36 cm−29 cm=M7.','C și M sunt inversate.','36 și 29 sunt inserțiile, nu valorile C și M.','Gradul D Los Angeles este al esofagitei erozive, nu al metaplaziei.','5 mm este pragul Los Angeles A/B, nu Praga.']],
 8,'Toate numerele (36, 33, 29, 3, 7, 5 mm) apar în capitolul esofagian; doar C3 M7 este calculul Praga.',['Praga C3 şi M7','36cm - 33cm = C3']),

q(48,['Criteriile Praga și măsurarea metaplaziei columnare:',
 ['Joncțiunea esogastrică se localizează la marginea superioară a pliurilor gastrice și la orificiul sfincterian','Se face distincția între joncțiunea esogastrică și hiatusul diafragmatic, pentru a identifica o hernie hiatală','Lungimile se rotunjesc la centimetrul cel mai apropiat; insulele de tesut nu contribuie la măsurarea extensiei','C măsoară extensia maximă, iar M pe cea circumferențială','Hernia hiatală se ignoră, joncțiunea și hiatusul fiind echivalente'],'ABC',1166,'Esofagul Barrett — Praga: joncțiune versus hiatus',
 'Localizarea joncțiunii (pliuri, orificiu sfincterian), distincția de hiatus și regula de rotunjire, fără a inversa C și M.',
 ['Cele două repere ale joncțiunii sunt explicite.','Distincția joncțiune–hiatus pentru hernie este cerută.','Rotunjirea la cm și excluderea insulelor sunt notate.','C este circumferențialul, M este maximul.','Textul cere tocmai distincția de hiatus, nu echivalența.']],
 8,'Inversează C și M și anulează distincția joncțiune–hiatus, două capcane ale aceleiași figuri Praga.',['joncţiunea gastro-esofagiană','hiatusul diafragmatic']),

q(49,['Patogenia infecției cu Helicobacter pylori include:',
 ['Aderența prin molecule precum BabA, care se leagă de antigenul Lewis de pe celulele mucoasei gastrice, provocând gastrită la subiecții infectați','Ureaza convertește ureea în amoniu și clorură, cu efect citotoxic direct','H. pylori colonizează epiteliul colic, nu pe cel gastric','BabA se leagă de CEACAM6 ileal, ca E. coli din boala Crohn','Ureaza inactivează amoniul, protejând epiteliul'],'AB',1173,'Helicobacter pylori — BabA, Lewis și urează',
 'Corelarea adeziunii BabA–Lewis și a citotoxicității urează→amoniu, distinct de CEACAM6 al E. coli din Crohn.',
 ['BabA și antigenul Lewis, cu gastrită la infectați, sunt explicite.','Conversia ureei în amoniu și clorură cu efect citotoxic este citată.','H. pylori este adaptat mediului gastric și colonizează epiteliul gastric.','CEACAM6 este al E. coli ileal din Crohn, nu al BabA.','Ureaza produce amoniu citotoxic, nu îl inactivează.']],
 8,'Mută BabA pe CEACAM6-ul Crohn și inversează reacția ureazei, două molecule din același volum de gastro.',['BabA','antigenul Lewis']),

q(50,['Gastrita antrală și ulcerul duodenal în infecția cu H. pylori:',
 ['Gastrita antrală cronică determină hipergastrinemie prin eliberarea gastrinei din celulele G antrale','Creșterea ulterioară a producției de acid poate duce la ulcerații duodenale','Prevalența H. pylori la pacienții cu ulcer duodenal, în țările dezvoltate, este în scădere, între 50% și 75%','Ulcerele apar cel mai frecvent când tulpina exprimă CagA și VacA, cu sinteză mai pronunțată de IL-8','Gastrita antrală scade gastrina și previne ulcerul duodenal, CagA fiind protector'],'ABCD',1173,'Helicobacter pylori — Gastrită antrală, CagA/VacA și UD 50-75%',
 'Legarea hipergastrinemiei antrale de UD și a prevalenței 50-75%, plus CagA/VacA/IL-8 ca tulpini ulcerogene.',
 ['Hipergastrinemia din celulele G este explicită.','Creșterea acidului și ulcerațiile duodenale sunt citate.','Intervalul 50-75% în scădere este din text.','CagA, VacA și IL-8 sunt descrise.','Direcția gastrinei și rolul CagA sunt inverse.']],
 8,'Inversează gastrina (hipo versus hiper) și face din CagA un factor protector, pe fondul intervalului 50-75% real.',['CagA','50% şi 75%']),

q(51,['Sensibilitatea și specificitatea dozării antigenului fecal H. pylori, cu anticorpi monoclonali, sunt, conform textului:',
 ['90% și 83%, ca serologia IgG','90% și 96%, ca testul respirator cu 13C','97,6% și 96%','50% și 50%, inutil după eradicare','sub 70%, de aceea a fost abandonat în favoarea serologiei'],'C',1174,'Helicobacter pylori — Antigenul fecal: performanță',
 'Diferențierea perechii 97,6%/96% a antigenului fecal de 90%/83% (serologie) și 90%/96% (test respirator).',
 ['90/83 sunt valorile serologiei IgG.','90/96 sunt valorile testului 13C.','Textul indică sensibilitate 97,6% și specificitate 96% pentru antigenul fecal monoclonal.','Antigenul fecal este util și pentru monitorizarea eradicării; 50% este scăderea titrului IgG la 1 an.','Textul îl descrie ca depășind testele respiratorii, nu ca abandonat.']],
 8,'Toate perechile de sensibilitate/specificitate sunt de pe aceeași pagină; candidatul trebuie să le atribuie testului corect.',['97,6%','specificitatea de 96%']),

q(52,['Rezistența și terapia de salvare în eradicarea H. pylori:',
 ['În țările în curs de dezvoltare rezistența la metronidazol este ridicată, peste 50%, medicamentul fiind frecvent folosit pentru parazitoze','Rezistența la claritromicină s-a dublat în Europa în ultimul deceniu','Chinolonele (ciprofloxacină), furazolidona și rifabutina sunt folosite când regimurile standard au eșuat (terapie de salvare)','Rezistența la amoxicilină și tetraciclină depășește 50% în toate țările dezvoltate','Metronidazolul oral este lipsit de reacții adverse, de aceea este monoterapia de primă linie'],'ABC',1175,'Helicobacter pylori — Rezistență și terapie de salvare',
 'Cuantificarea rezistenței la metronidazol (>50% în țările în dezvoltare) și a dublării claritromicinei în Europa, plus agenții de salvare.',
 ['Peste 50% rezistență la metronidazol în țările în dezvoltare este explicit.','Dublarea rezistenței la claritromicină în Europa este citată.','Ciprofloxacină, furazolidonă și rifabutină ca salvare sunt enumerate.','Rezistența la amoxicilină este 1-2% și la tetraciclină sub 1%, exceptând țările fără prescripție.','Metronidazolul oral are reacții adverse frecvente; niciun antibiotic nu este eficient singur.']],
 8,'Atribuie amoxicilinei/tetraciclinei rata >50% a metronidazolului și transformă metronidazolul în monoterapie.',['>50%','furazolidona şi rifabutina']),

q(53,['Exemplele de regimuri de eradicare citate trebuie administrate:',
 ['Omeprazol 20 mg + claritromicină 500 mg + amoxicilină 1 g, toate de două ori pe zi, 7 sau 14 zile','Omeprazol 20 mg + metronidazol 400 mg + claritromicină 500 mg, toate de două ori pe zi, 7 sau 14 zile','Omeprazol 20 mg în monoterapie 3 zile, suficient pentru CagA-negativi','Claritromicină 500 mg o dată pe zi, 6 luni, ca în MAI','Amoxicilină 1 g fără IPP, 24 de ore'],'AB',1175,'Helicobacter pylori — Regimuri exemplificative 7 sau 14 zile',
 'Reținerea celor două triple (CLA-amox și metro-CLA) cu omeprazol 20 mg bid, 7 sau 14 zile, fără monoterapii.',
 ['Prima triple cu dozele și ritmul bid este explicită.','A doua triple (metronidazol 400 mg) este citată.','Niciun antibiotic nu este eficient singur; IPP-ul este în doză care suprimă puternic acidul.','6 luni de macrolid ține de MAI, nu de H. pylori.','24 de ore fără IPP nu este un regim citat.']],
 8,'Importă durate din infecții oportuniste (6 luni, 24 h) peste fereastra 7 sau 14 zile a eradicării.',['7 sau 14 zile','Amoxicilina 1 g']),

q(54,['Consecințele pe termen lung ale chirurgiei gastrice includ:',
 ['Sindromul dumping: greață și distensie cu transpirații, slăbiciune/lesin și palpitații după gastrectomie parțială cu gastro-jejunoanastomoză, prin evacuare rapidă și influx de lichide spre conținutul jejunal hiperton','Diareea, observată mai ales după vagotomie; episoade severe recurente la circa 1%','Carențe: fier (absorbție redusă), folat (aport deficitar), B12 (deficit de factor intrinsc) și scădere ponderală prin aport redus','Ulcerul recurent impune verificarea H. pylori și excluderea Zollinger-Ellison; un proces malign trebuie exclus','Dumping-ul se datorează vagotomiei proximale fără ocolire, nu evacuării jejunale'],'ABCD',1176,'Chirurgia gastrică — Dumping, diaree 1% și carențe',
 'Mecanismul dumping-ului (jejun hiperton, hipovolemie), ponderea diareei post-vagotomie (1%) și carențele Fe/folat/B12.',
 ['Ansamblul simptomatic și mecanismul de evacuare–influx sunt explicite.','1% după vagotomie este citat.','Cele patru consecințe nutriționale sunt enumerate.','H. pylori, Zollinger-Ellison și malignitatea în ulcerul recurent sunt cerute.','Dumping-ul este al gastrectomiei parțiale cu gastro-jejunoanastomoză, nu al vagotomiei proximale.']],
 8,'Mută dumping-ul pe vagotomia proximală, opusul textului, pe fondul procentului 1% și al carențelor reale.',['Sindromul dumping','aproximativ 1%']),

q(55,['După colectomia profilactică în polipoza adenomatoasă familială, cea mai frecventă cauză de deces este:',
 ['Adenocarcinomul din adenoamele duodenale, prezente la o treime dintre pacienți','Limfomul MALT gastric','Megacolonul toxic','Sarcomul Kaposi duodenal','Carcinomul scuamos esofagian din esofagita Los Angeles A'],'A',1198,'Tumori duodenale — PAF după colectomie',
 'Recunoașterea adenoamelor duodenale (o treime) ca principală cauză de deces după colectomia profilactică din PAF.',
 ['Textul precizează adenoame duodenale la o treime, cu evoluție spre adenocarcinom, cea mai frecventă cauză de deces după colectomie profilactică.','MALT este legat de H. pylori, nu de PAF.','Megacolonul toxic ține de colita ulcerativă severă.','Kaposi este al HIV, nu al PAF.','Los Angeles A este esofagită erozivă, nu cauza de deces din PAF.']],
 8,'Permutează cauze de deces din alte capitole gastro (MALT, megacolon, Kaposi) peste adenoamele duodenale ale PAF.',['polipoza adenomatoasa familiala','o treime dintre pacienţi']),

q(56,['Microbiota intestinală, dincolo de disbioza deja descrisă în BII:',
 ['Intestinul este colonizat cu de 10 ori mai multe organisme bacteriene decât celule gazdă, cu 300-400 de specii distincte în fiecare intestin','Numărul bacteriilor aderente de mucoasă este crescut la pacienții cu boală Crohn comparativ cu sănătoșii','Pilii de tip 1 ai E. coli aderă la CEACAM6 pe celulele epiteliale ileale în BC','Diversitatea speciilor este crescută în BII, F. prausnitzii fiind dominant în boala activă','MAP a fost confirmat prin PCR, iar trialurile anti-TB au fost eficiente'],'ABC',1199,'BII — Densitatea microbiotei, CEACAM6 și E. coli',
 'Cuantificarea 10× / 300-400 specii, a aderenței crescute în Crohn și a ligaturii pili–CEACAM6, versus disbioza (diversitate redusă) și eșecul pistei MAP.',
 ['Raportul 10 ori și 300-400 de specii sunt explicite.','Aderența crescută la mucoasă în BC este citată.','Pilii de tip 1 și CEACAM6 sunt descriși.','Constatarea cea mai frecventă este diversitatea redusă; F. prausnitzii este scăzut în boala activă.','PCR nu a confirmat MAP, iar trialurile anti-TB nu au fost eficiente.']],
 8,'Inversează diversitatea și reînvie MAP, dar păstrează cifrele 10× și 300-400 ca momeală numerică.',['300-400 specii','CEACAM6']),

q(57,['Citokinele pro-inflamatorii din BII, eliberate de celulele T efectoare, stimulează macrofagele să secrete în cantități mari:',
 ['TNF-α, IL-1 și IL-6, cu creșterea moleculelor de adeziune endoteliale intestinale și recrutarea leucocitelor','IL-10 și TGF-β ca unici mediatori, fără recrutare leucocitară','Doar interferonul gamma, fără TNF','Gastrina antrală, ca în ulcerul duodenal','Ureaza H. pylori, ca mediator al fistulelor'],'A',1200,'BII — TNF-α, IL-1, IL-6 și recrutarea leucocitară',
 'Identificarea triadei TNF-α/IL-1/IL-6 ca braț al cercului vicios de adeziune și recrutare, distinct de citokinele reglatoare.',
 ['Textul enumeră TNF-α, IL-1 și IL-6, apoi moleculele de adeziune și recrutarea.','IL-10/TGF-β nu sunt triada citată aici.','TNF este inclus explicit, nu exclus.','Gastrina ține de gastrita antrală H. pylori.','Ureaza nu este mediatorul fistulelor din acest paragraf.']],
 8,'Înlocuiește triada TNF/IL-1/IL-6 cu mediatori din ulcer sau din reglarea imună, toți plauzibili în gastro.',['TNF-a','IL-1 şi IL-6']),

q(58,['Anatomia patologică macroscopică, dincolo de skip lesions și piatra de pavaj:',
 ['BC poate fi pancolită/colită totală, uneori fără leziuni macroscopice ale intestinului subțire, și se asociază cu fisuri și fistule perianale','CU: proctită, colită stângă sau colită extensivă; unii au și ileită de reflux','Un semn precoce în BC este ulcerația aftoidă colonoscopică; în CU mucoasa este eritematoasă, friabilă, cu pseudo-polipi în formele severe','În boala colonică fulminantă, de orice tip, mucoasa este distrusă în cea mai mare parte, lăsând insule de mucoasă','În CU intestinul este îngroșat și îngustat transmural, iar aftoidele definesc proctita'],'ABCD',1200,'BII — Pancolită Crohn, ileită de reflux, aftoide și fulminant',
 'Recunoașterea pancolitei Crohn fără intestin subțire, a ileitei de reflux, a aftoidei ca semn precoce și a insulelor mucoase din fulminant.',
 ['Pancolita Crohn fără leziuni de intestin subțire și asocierile perianale sunt explicite.','Cele trei extensii CU și ileita de reflux sunt descrise.','Aftoida precoce și friabilitatea/pseudo-polipii CU sunt citate.','Insulele de mucoasă din fulminant sunt din text.','Îngroșarea/îngustarea și aftoidele țin de Crohn, nu de CU.']],
 8,'Atribuie CU trăsăturile transmurale/aftoide ale Crohn, pe fondul unor extensii reale (proctită, fulminant).',['ileita de reflux','ulceratia aftoida']),

q(59,['Asocierea HLA cu artropatia din BII, dincolo de HLA-B27 și sacroiliită, include:',
 ['HLA DRB7*0703 cu artrita pauciarticulară a articulațiilor mari în CU și BC, și HLA-B44 cu artrita simetrică a articulațiilor mici','HLA-B51, ca în boala Behçet, pentru toate artropatiile BII','HLA-B*5701, ca în hipersensibilitatea la abacavir','Absența oricărei asocieri HLA în afara B27','HLA-DQ2, ca în boala celiacă, pentru tipul 2 poliarticular'],'A',1201,'BII — HLA DRB7*0703 și HLA-B44',
 'Diferențierea DRB7*0703 (pauciarticular, articulații mari) de B44 (simetric, articulații mici), distinct de B27-sacroiliită.',
 ['Cele două asocieri HLA sunt explicite.','HLA-B51 ține de Behçet, nu de acest paragraf.','HLA-B*5701 ține de abacavir, nu de BII.','Textul descrie asocieri dincolo de B27.','HLA-DQ2 nu este asocierea citată pentru tipul 2.']],
 8,'Permutează alele HLA reale din alte capitole (B51, B*5701, DQ2) peste perechea DRB7/B44 a artropatiei BII.',['HLA ORB7*0703','HLA-B44']),

q(60,['Tabloul clinic al bolii Crohn, dincolo de triada diaree–durere–scădere ponderală:',
 ['Deficitul de creștere și întârzierea pubertății pot fi principalele manifestări la copii','Diareea poate fi cauzată de malabsorbția acizilor biliari după rezecție ileală sau boală ileală; steatoreea poate apărea în boala de intestin subțire','Poate debuta ca urgență cu durere acută în fosa iliacă dreaptă, mimând apendicita (diagnostic diferențial: Yersinia, TB); boala anală/perianală este simptomatologia de debut în 25% din cazuri','Fistulele enterice apar la sub 1% dintre pacienți','Simptomele GI lipsesc la 80%, diareea fiind rară'],'ABC',1202,'Boala Crohn — Copil, acizi biliari, fosa iliacă dreaptă și debut perianal 25%',
 'Integrarea prezentării pediatrice, a diareei prin săruri biliare, a mimic-ului apendicular și a debutului perianal la 25%.',
 ['Creșterea și pubertatea ca prezentare pediatrică sunt explicite.','Malabsorbția acizilor biliari și steatoreea sunt citate.','FID ca apendicită, Yersinia/TB și 25% debut perianal sunt din text.','Fistulele enterice apar în 20-40% din cazuri.','Simptomele GI lipsesc la 15%; diareea apare în 80%.']],
 8,'Permutează 15%, 25%, 80% și 20-40% între absența simptomelor, debutul perianal, diaree și fistule.',['25% dintre cazuri','fosa iliaca dreapta']),

q(61,['În evaluarea și îngrijirea generală a bolii Crohn se recomandă:',
 ['Calprotectina fecală și lactoferina ca markeri ieftini, non-invazivi, cu valoare și în predicția răspunsului sau eșecului la tratament','Fier intravenos la intoleranța la fierul oral; profilaxia trombembolismului la toți pacienții internați','Aminosalicilații ca inducție de primă linie, cu dovezi solide','Colonoscopia completă cu pregătire în atacul colonic sever','Continuarea fumatului, care protejează de recădere'],'AB',1203,'Boala Crohn — Calprotectină, fier i.v. și tromboprofilaxie',
 'Poziționarea calprotectinei/lactoferinei ca predictori și a fierului i.v. plus tromboprofilaxia la internați, fără a reintroduce aminosalicilații.',
 ['Valoarea predictivă a calprotectinei și lactoferinei este explicită.','Fierul i.v. și tromboprofilaxia la toți internații sunt citate.','Dovezile pentru aminosalicilați în BC sunt foarte puține.','În atacurile severe se evită colonoscopia completă.','Fumatul trebuie oprit.']],
 8,'Reintroduce aminosalicilații și fumatul ca „protectoare”, opusul textului, pe fondul calprotectinei reale.',['lactoferina','fier intravenos']),

q(62,['Opțiuni adjuvante și molecule în studiu în boala Crohn:',
 ['Boala perianală: drenajul chirurgical al colecțiilor septice, ciprofloxacină și metronidazol, azatioprină și anti-TNF','Mongersen (oligonucleotid antisense oral) leagă și degradează ARNm SMAD7, restabilind semnalizarea TGF-β1','Ozanimod, agonist oral al receptorului sfinfolipid-1-fosfat subtipurile 1 și 5, scade limfocitele circulante activate și este în faza 3','IRM de intestin subțire a înlocuit în general pasajul baritat; proliferarea fibro-adipoasă se corelează cu boala cronică','Mongersen este prima linie înaintea steroizilor, iar ozanimodul înlocuiește drenajul perianal'],'ABCD',1204,'Boala Crohn — Perianal, mongersen SMAD7 și ozanimod',
 'Poziționarea pachetului perianal (drenaj, cipro-metro, AZA, anti-TNF) și a agenților de fază 3 (mongersen SMAD7, ozanimod S1P), plus IRM-ul care înlocuiește bariul.',
 ['Pachetul perianal este în cadranul 32.40.','Mecanismul SMAD7/TGF-β1 este explicit.','Ozanimodul S1P1/5 în faza 3 este citat.','Înlocuirea bariului cu IRM și proliferarea fibro-adipoasă sunt din legendă.','Mongersen și ozanimodul sunt în studii, nu prima linie și nu înlocuiesc drenajul.']],
 8,'Ridică doi agenți de fază 3 la rang de primă linie și le atribuie drenajul perianal, pe fondul mecanismelor reale SMAD7/S1P.',['mongersen','Ozanimod']),

q(63,['Unele stricturi de intestin subțire din boala Crohn pot fi tratate prin:',
 ['stricturoplastie (dilatare), altele necesitând rezecție și anastomoză','proctocolectomie cu rezervor ileoanal de primă intenție','endarterectomie, ca în stenoza carotidiană','nutriție parenterală totală ca unică măsură, fără chirurgie','colectomie subtotală, chiar dacă rectul este crutat și boala este doar ileală'],'A',1205,'Chirurgia bolii Crohn — Stricturoplastie',
 'Recunoașterea stricturoplastiei ca alternativă la rezecție pentru unele stricturi de intestin subțire, nu a pouch-ului ileal.',
 ['Textul distinge stricturoplastia de rezecție-anastomoză.','Pacienții cu BC nu se pretează pentru pouch.','Endarterectomia ține de carotidă, nu de ileon.','Chirurgia rămâne indicată pentru complicații; NPT nu le înlocuiește.','Colectomia vizează boala colonică, nu strictura ileală izolată.']],
 8,'Înlocuiește stricturoplastia cu pouch-ul (contraindicat în BC) sau cu tehnici din alte capitole.',['stricturoplastie','rezectie şi anastomoza']),

q(64,['Indicațiile chirurgiei în boala Crohn includ:',
 ['Eșecul terapiei medicamentoase, cu simptome care alterează sănătatea','Complicații: dilatare toxică, obstrucție, perforație, abcese, fistulă enterocutanată','Retard de creștere la copii în ciuda tratamentului medicamentos; colecții septice perianale (consult sub anestezie, drenaj, tub de dren)','Pouch-ul ileal ca procedeu de elecție, recurența la acest nivel fiind rară','Menținerea fumatului postoperator, care reduce recăderea'],'ABC',1205,'Chirurgia bolii Crohn — Indicații și perianal',
 'Enumerarea eșecului medical, a complicațiilor și a retardului/perianalului (EUA, drenaj, seton), fără pouch și fără fumat.',
 ['Eșecul medicamentos este prima indicație.','Lista de complicații este explicită.','Retardul de creștere și protocolul perianal sunt citate.','BC nu se pretează pentru pouch.','Toți pacienții trebuie să renunțe la fumat.']],
 8,'Face din pouch indicație (opusul textului) și din fumat o măsură de menținere.',['fistula enterocutanata','tub de dren']),

q(65,['În atacul sever de colită ulcerativă, imagistica și endoscopia:',
 ['Radiografia abdominală pe gol este esențială pentru a exclude dilatarea colonică','Colonoscopia completă trebuie evitată pentru a preveni perforația; se folosește sigmoidoscopie flexibilă fără pregătire, pentru confirmare','Extinderea bolii este apreciată corect doar pe radiografia pe gol, endoscopia fiind superfluă','Capsulele endoscopice sunt de primă intenție, chiar cu stricturi','Ecografia nu poate evidenția inflamația peretelui colonic'],'AB',1206,'Colita ulcerativă severă — AXR și sigmoidoscopie fără pregătire',
 'Ierarhizarea AXR (exclude dilatarea) și a sigmoidoscopiei flexibile fără pregătire, evitând colonoscopia completă.',
 ['AXR esențială pentru dilatare este explicită.','Evitarea colonoscopiei complete și sigmoidoscopia fără pregătire sunt citate.','Extinderea nu este apreciată corect pe radiografia pe gol; endoscopia este preferată.','Stricturile contraindică capsula; nu este prima intenție în CU severă.','Textul menționează că inflamația peretelui colonic este evidențiată prin ecografie.']],
 8,'Inversează rolul AXR (extindere versus dilatare) și reintroduce capsula/colonoscopia completă în atacul sever.',['sigmoidoscopie flexibila','radiografie abdominala pe gol']),

q(66,['Aminosalicilații în colita ulcerativă ușoară-moderată:',
 ['Pilonul principal este un aminosalicilat cu acțiune topică în lumenul colonic; gruparea activă este 5-ASA, absorbită în intestinul subțire','Eliberarea colonică se face prin legătură azo la sulfapiridină (sulfasalazină), 4-aminobenzoil-β-alanină (balsalazidă) sau 5-ASA (olsalazină), acoperire pH-sensibilă sau microsfere','Modul de acțiune implică probabil PPAR-γ; sunt chemopreventivi pentru cancerul colorectal asociat CU; 5-ASA poate provoca rar boli renale','În proctită, supozitoarele 5-ASA sunt prima linie; steroizii topici sunt mai puțin eficienți decât 5-ASA','5-ASA se absoarbe în colon și este inactiv în lumen, de aceea proctita se tratează doar cu infliximab de la debut'],'ABCD',1206,'Colita ulcerativă — 5-ASA, PPAR-γ și proctită',
 'Mecanismul de eliberare azo/pH/microsfere, PPAR-γ, chemoprevenția și supozitoarele ca primă linie în proctită.',
 ['Acțiunea topică și absorbția 5-ASA în intestinul subțire sunt explicite.','Cele trei legături azo și celelalte formulări sunt enumerate.','PPAR-γ, chemoprevenția și nefrotoxicitatea rară sunt citate.','Supozitoarele ca primă linie și inferioritatea steroizilor topici sunt din text.','5-ASA trebuie eliberat în colon; infliximabul nu este prima linie a proctitei.']],
 8,'Declară 5-ASA inactiv în lumen și sare direct la infliximab, opusul pilonului topic și al supozitoarelor.',['balsalazida','PPAR']),

q(67,['După răspunsul la hidrocortizonul intravenos în colita ulcerativă severă, corticoterapia se schimbă pe cale orală după aproximativ:',
 ['24 de ore, cu oprire bruscă','5 zile, apoi se reduce treptat până la oprire în 8-10 săptămâni','3 luni de i.v. continuu, fără oral','12 luni, ca platoul de recuperare după AVC','7 zile de eradicare H. pylori, fără tapering'],'B',1207,'Colita ulcerativă severă — Trecerea pe oral și tapering 8-10 săptămâni',
 'Reținerea ferestrei de circa 5 zile până la oral și a reducerii în 8-10 săptămâni, distinct de pragul de 3 zile al salvării.',
 ['24 de ore este prea scurt față de text.','Textul indică schimbarea după aproximativ 5 zile, cu reducere treptată în 8-10 săptămâni.','3 luni i.v. nu este schema.','12 luni este platoul AVC, nu tapering-ul steroizilor.','7 zile ține de eradicarea H. pylori.']],
 8,'Permutează 5 zile și 8-10 săptămâni cu intervale reale din AVC, H. pylori și ziua 3 a salvării.',['aproximativ 5 zile','8-10 săptămâni']),

q(68,['Terapia de salvare în colita ulcerativă severă (după 3 zile de hidrocortizon i.v.):',
 ['Este necesară la CRP peste 45 mg/L sau peste 8 scaune/zi; continuarea monoterapiei corticosteroide întârzie colectomia și crește mortalitatea','Opțiuni cu beneficiu dovedit: ciclosporină 2 mg/kg pe zi i.v. în perfuzie continuă sau infliximab; albumina scăzută se asociază cu rată de răspuns mai mică','Corticoterapia se întrerupe rapid odată ce salvarea a început; toți internații pentru colită severă încep întreținere pe termen lung cu tiopurină','Salvarea se face cu budesonid oral, infliximabul fiind contraindicat la albumina scăzută','Tiopurinele se evită după internarea pentru colită severă'],'ABC',1207,'Colita ulcerativă severă — Ciclosporină 2 mg/kg, infliximab și tiopurină',
 'Aplicarea pragurilor CRP>45 / >8 scaune, a ciclosporinei 2 mg/kg sau infliximab, a opririi steroizilor și a tiopurinei de întreținere.',
 ['Pragurile și pericolul continuării steroizilor singuri sunt explicite.','Ciclosporina 2 mg/kg, infliximabul și albumina scăzută sunt citate.','Oprirea rapidă a steroizilor și tiopurina la toți internații sunt din text.','Budesonidul nu este terapia de salvare a atacului sever.','Textul cere tiopurină de întreținere după internarea pentru colită severă.']],
 8,'Înlocuiește ciclosporina/infliximab cu budesonid și interzice tiopurina, opusul paragrafului de salvare.',['2 mg/kg pe zi','45 mg/L']),

q(69,['Alicaforsen, inhibitor al moleculei de adeziune intracelulară-1, și-a demonstrat eficacitatea în studii clinice în:',
 ['Colita ulcerativă distală și inflamația rezervorului ileal (pouchită)','Inducția de primă linie a bolii Crohn ileale, înaintea budesonidului','Eradicarea H. pylori, în locul bismutului','Spasticitatea după AVC, ca baclofenul','Meningita criptococică, ca flucitozina'],'A',1207,'Colita ulcerativă — Alicaforsen (ICAM-1) și pouchită',
 'Poziționarea alicaforsenului în CU distală și pouchită, nu în Crohn, H. pylori sau patologii extra-digestive.',
 ['Textul indică eficacitate în CU distală și pouchită.','Budesonidul rămâne opțiunea ileocecală ușoară-moderată a Crohn, nu alicaforsenul.','Eradicarea H. pylori nu este indicația citată.','Baclofenul ține de spasticitatea post-AVC.','Flucitozina ține de criptococoză.']],
 8,'Permutează indicații reale din Crohn, H. pylori, neurologie și HIV peste alicaforsenul pentru CU distală/pouchită.',['Alicaforsen','pouchitis']),

q(70,['Colita colagenoasă microscopică se caracterizează histologic prin:',
 ['Un strat de colagen subepitelial îngroșat, peste 10 µm, adiacent membranei bazale, cu infiltrat în lamina propria și celule epiteliale de suprafață deteriorate','Infiltrat limfocitar intraepitelial fără îngroșare de colagen, care definește forma limfocitară, nu pe cea colagenoasă','Granuloame non-cazeificante, ca în Crohn','Abcese criptice dense cu depleție de caliciforme, ca în CU severă','Un strat de colagen sub 2 µm, patognomonic pentru colita ischemică'],'A',1208,'Colita microscopică — Pragul de 10 µm al formei colagenoase',
 'Reținerea pragului >10 µm ca definiție a formei colagenoase, distinct de forma limfocitară și de histologia Crohn/CU.',
 ['Pragul >10 µm și infiltratele asociate sunt explicite.','Absența îngroșării de colagen definește forma limfocitară.','Granuloamele țin de Crohn.','Abcesele criptice țin de CU.','Pragul citat este peste 10 µm, nu sub 2 µm.']],
 8,'Atribuie pragul de 10 µm formei limfocitare sau îl înlocuiește cu histologii Crohn/CU.',['>10 µm','Colita co/agenosa']),

q(71,['Un număr mic de pacienți cu colită microscopică limfocitară sau colagenoasă au concomitent malabsorbție de acizi biliari. În acest caz, textul atribuie un prognostic favorabil administrării de:',
 ['colestiramină','co-trimoxazol','ciclosporină 2 mg/kg','trombectomie','rifampicină'],'A',1208,'Colita microscopică — Colestiramină în malabsorbția biliară',
 'Recunoașterea colestiraminei ca măsură cu prognostic favorabil când colita microscopică se asociază cu malabsorbție de acizi biliari.',
 ['Textul precizează prognostic favorabil cu colestiramină.','Co-trimoxazolul ține de PCP, nu de colita microscopică.','Ciclosporina 2 mg/kg este salvarea colitei ulcerative severe.','Trombectomia ține de AVC.','Rifampicina ține de TBC/HIV.']],
 8,'Permutează patru terapii reale din alte capitole peste colestiramina indicată aici.',['colestiramină','malabsorbtie de acizi biliari']),

q(72,['Colita colagenoasă microscopică, epidemiologic și terapeutic:',
 ['Predomină la femeile de vârstă mijlocie sau vârstnice și se asociază cu afecțiuni autoimune (artrită, boală tiroidiană, sclerodermie cutanată limitată, ciroză biliară primară)','Incidența formelor limfocitară și colagenoasă este crescută la pacienții cu boală celiacă, diagnostic care trebuie exclus','Tratamentul este de obicei cu budesonidă; există dovezi și pentru aminosalicilați, bismut, iar în forme refractare prednisolon și azatioprină','Predomină la bărbații tineri, iar boala celiacă este protectivă','Budesonida este inutilă; singura opțiune este colectomia de urgență'],'ABC',1208,'Colita microscopică — Femei, autoimunitate, celiac și budesonid',
 'Profilul femeii de vârstă mijlocie/vârstnice cu autoimunitate, asocierea celiacă și ierarhia budesonid–5-ASA–bismut–azatioprină.',
 ['Predominanța feminină și lista autoimună sunt explicite.','Asocierea cu boala celiacă și necesitatea excluderii sunt citate.','Budesonida, aminosalicilații, bismutul și treapta prednisolon/azatioprină sunt din text.','Textul indică femei, nu bărbați tineri; celiacă crește incidența.','Budesonida este tratamentul obișnuit; colectomia de urgență ține de megacolonul toxic.']],
 8,'Inversează sexul/vârsta și asocierea celiacă și înlocuiește budesonida cu colectomia de urgență.',['sclerodermia cutanată limitată','budesonida']),
];
