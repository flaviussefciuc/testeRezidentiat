import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const pdfOffset=(p:number)=>p<=618?p-523:p-525;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('endocrinologie',21,pdfOffset,`endocrinologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const ENDOCRINOLOGIE_D=[
q(45,['Identificați afirmația corectă referitoare la hipotiroidismul atrofic autoimun, în epidemiologia din capitol:',
 ['Este cea mai frecventă cauză de hipotiroidism; forma atrofică este de șase ori mai frecventă la femei, iar incidența crește cu vârsta','Predomină la bărbații tineri, raportul pe sexe fiind 1:6 în favoarea bărbaților','Este aproape totdeauna secundar hipofizar, fără autoanticorpi','Incidența scade odată cu vârsta, forma atrofică fiind rară la femei','Nu se asociază cu anemia pernicioasă, vitiligo sau alte insuficiențe endocrine'],'A',611,'Hipotiroidismul atrofic autoimun',
 'Reținerea statutului de cauză cea mai frecventă și a predominanței feminine de 6:1, cu creșterea incidenței la vârstă.',
 ['Șase ori mai frecvent la femei, creșterea cu vârsta și asocierea autoimună sunt din paragraf.','Raportul 6:1 este în favoarea femeilor, nu a bărbaților.','Hipofuncția este de obicei primară tiroidiană, nu hipofizară.','Incidența crește, nu scade, cu vârsta.','Textul asociază explicit pernicioasa, vitiligo și alte insuficiențe endocrine.']],
 8,'Distractorii inversează raportul 6:1 pe sexe și mută etiologia de la autoimun primar la hipofizar.',['de şase ori mai frecventă','anemia pernicioasă']),

q(46,['Anticorpii anti-tiroidieni, în datele serologice de deschidere, se caracterizează prin:',
 ['Antigenul anticorpilor microsomali este peroxidaza tiroidiană (TPO); anti-TPO se găsesc la până la 20% din populația normală, mai ales femei în vârstă','Doar 10-20% dintre purtătorii de anti-TPO din populația generală dezvoltă hipotiroidism manifest','Ocazional, hipotiroidismul este intermitent, cu recuperare; anticorpii blocanți ai receptorului TSH sunt uneori implicați','Anti-TPO sunt absenți la eutiroidieni, iar 90% dintre purtători evoluează rapid spre mixedem','TRAb sunt nespecifici, fiind prezenți identic în populația generală și în Hashimoto'],'ABC',611,'Anticorpii anti-tiroidieni; Hipotiroidismul atrofic',
 'Separarea prevalenței de 20% a anti-TPO de rata de 10-20% de progresie și de rolul ocazional al TRAb blocanți.',
 ['Cei 20% din populația normală și TPO ca antigen microsomal sunt din listă.','Doar 10-20% dintre aceste femei/purtători dezvoltă hipotiroidism manifest.','Forma intermitentă cu TRAb blocanți este din paragraful atrofic.','Textul dă anti-TPO la eutiroidieni și progresie doar la 10-20%, nu la 90%.','TRAb sunt descriși ca specifici pentru Graves.']],
 8,'Distractorii umflă progresia de la 10-20% la 90% și fac din TRAb un marker nespecific de Hashimoto.',['până la 20%','10-20% dintre acestea']),

q(47,['Tiroidita postpartum, în descrierea capitolului, se recunoaște prin:',
 ['Fenomen de obicei tranzitoriu după sarcină, care poate produce hiper-, hipotiroidism sau pe ambele, secvențial; histologic este o tiroidită limfocitară','Procesul este în mod normal autolimitant; dacă se pozitivează anticorpii convenționali, riscul de hipotiroidism permanent este mare','Poate fi diagnosticată eronat ca depresie postnatală, de unde necesitatea evaluării funcției tiroidiene în această situație','Este o tiroidită granulomatoasă virală, fără risc de hipotiroidism ulterior','Depresia postnatală exclude disfuncția tiroidiană, testarea TSH fiind superfluă'],'ABC',612,'Tiroidita postpartum',
 'Asocierea secvenței hiper/hipo, a histologiei limfocitare și a capcanei de depresie postnatală, plus riscul de permanență dacă se pozitivează anticorpii.',
 ['Tranzitoriul, secvența și limfocitele deschid definiția.','Autolimitarea versus permanența la anticorpi pozitivi este fraza următoare.','Confuzia cu depresia postnatală este avertismentul clinic.','Granulomatoza virală este a tiroiditei De Quervain, nu postpartum.','Textul cere tocmai testarea tiroidiană când tabloul mimează depresia.']],
 8,'Distractorii mută entitatea pe De Quervain viral și anulează screeningul tiroidian din depresia postnatală.',['Tiroidita postpartum','depresie postnatală']),

q(48,['Sindromul Pendred, ca formă familială de dishormonogeneză, se caracterizează prin:',
 ['Asociere cu surditate senzorială printr-o deleție pe cromozomul 7, care produce un defect al transportorului pendrina','Hipotiroidism cu gușă, în cadrul defectelor genetice rare de sinteză hormonală','Mutație RET, identică carcinomului medular familial','Deleție pe cromozomul 21, fără afectare auditivă','Gușa lipsește, surditatea fiind de conducere, nu senzorială'],'AB',612,'Dishormonogeneza — Sindromul Pendred',
 'Reținerea perechii cromozom 7 / pendrină / surditate senzorială, distinct de RET și de surditatea de conducere.',
 ['Deleția de cromozom 7 și pendrina sunt mecanismul citat.','Hipotiroidismul cu gușă este cadrul dishormonogenezei.','RET ține de CMT/MEN 2, nu de Pendred.','Locusul citat este cromozomul 7, nu 21.','Surditatea este senzorială; gușa face parte din fenotip.']],
 8,'Distractorii mută defectul pe RET sau cromozomul 21 și transformă surditatea senzorială în una de conducere.',['cromozomului 7','pendrina']),

q(49,['Anomaliile de laborator asociate hipotiroidismului primar, dincolo de TSH/fT4, includ:',
 ['Anemie de obicei normocromă-normocitară, dar care poate fi macrocitară (uneori prin anemie pernicioasă asociată) sau microcitară (menoragie sau boală celiacă nediagnosticată)','Creșterea AST (muşchi și/sau ficat) și a creatinkinazei, cu miopatie asociată','Hipercolesterolemie și hipertrigliceridemie','Hiponatremie prin creșterea ADH și eliminare defectuoasă a apei libere','Poliglobulie cu hipokaliemie, AST și CK fiind constant scăzute'],'ABCD',613,'Investigarea hipotiroidismului primar — Anomalii asociate',
 'Integrarea celor trei tipuri de anemie, a AST/CK, a dislipidemiei și a hiponatremiei prin ADH.',
 ['Spectrul normo/macro/micro al anemiei este enumerat explicit.','AST și CK cu miopatie sunt rânduri consecutive.','Perechea lipidică este un rând separat.','Mecanismul ADH/apă liberă închide lista.','Textul descrie anemie, nu poliglobulie, și enzime crescute, nu scăzute.']],
 8,'Distractorul inversează anemia în poliglobulie și AST/CK din creștere în scădere.',['creatin kinază','Hiponatremie']),

q(50,['Monitorizarea levotiroxinei și situațiile speciale din capitol includ:',
 ['În sarcină, doza de T4 se crește adesea cu 25-50 µg, pentru a menține TSH în intervalul mai strict 0,3-2,5 mU/L','Dificultățile de normalizare a TSH impun gândirea la complianță, la fier, calciu și inhibitori de pompă de protoni (interferă cu absorbția) și la boala celiacă nediagnosticată','Studiile randomizate nu au evidențiat un beneficiu constant al combinației T4+T3 asupra calității vieții','Se scade T4 în sarcină, ținta fiind TSH >10 mU/L, PPI-urile crescând absorbția','Combinația T4+T3 este superioară T4 în toate RCT-urile de calitate a vieții'],'ABC',613,'Monitorizarea; Sarcina; Combinația T4+T3',
 'Contrastarea creșterii 25-50 µg / TSH 0,3-2,5 din sarcină de interferențele de absorbție și de absența beneficiului T3 adjunct.',
 ['25-50 µg și fereastra 0,3-2,5 mU/L sunt ale sarcinii.','Fierul, calciul, IPP și celiaca sunt cauzele de TSH greu de normalizat.','Absența beneficiului constant T4+T3 este concluzia RCT.','În sarcină doza crește, nu scade; TSH-ul se strânge în jos, nu peste 10.','RCT-urile nu arată beneficiu constant al T3.']],
 8,'Distractorii inversează titrarea din sarcină (creștere versus scădere) și transformă eșecul T4+T3 în superioritate.',['25-50µ9','0,3-2,5 mU/L']),

q(51,['Adenomul sau nodulul toxic solitar, ca etiologie a hipertiroidismului, reprezintă aproximativ:',
 ['5% din cazuri; hipertiroidismul poate fi controlat medicamentos, dar afecțiunea nu remite, de regulă, după antitiroidiene','50% din cazuri, cu remisiune constantă după 6 săptămâni de carbimazol','>99% din cazuri, cauza hipofizară fiind superpozabilă','1 din 3.500 de nașteri, ca screening neonatal','0,1% din cazuri, remisiunea după ATD fiind regula'],'A',614,'Adenomul/nodulul toxic solitar',
 'Reținerea ponderii de 5% și a absenței remisiunii după antitiroidiene, distinct de Graves.',
 ['Cei 5% și eșecul remisiunii după ATD sunt fraza din paragraf.','50% și remisiunea rapidă nu sunt ale nodulului toxic.','>99% descrie originea tiroidiană intrinscă a hipertiroidismului, nu ponderea adenomului.','1/3.500 este incidența hipotiroidismului congenital.','Remisiunea după ATD este tocmai ceea ce textul neagă.']],
 8,'Distractorii umflă 5% spre 50% sau >99% și transformă eșecul remisiunii în regulă.',['aproximativ 5%','nu remite']),

q(52,['Tiroidita De Quervain, în tabloul din capitol, se caracterizează prin:',
 ['Tirotoxicoză tranzitorie dintr-un proces inflamator acut, probabil viral, cu febră, stare de rău, durere cervicală, tahicardie și sensibilitate tiroidiană','Testele arată tirotoxicoză inițială, VSH și vâscozitate plasmatică crescute, scintigramă cu captare suprimată în faza acută','Hipotiroidism, de obicei tranzitoriu, după câteva săptămâni','Tratamentul fazei acute: aspirină; prednisolon pe termen scurt în cazurile simptomatice grave','Captarea scintigrafică este difuz crescută, ca în Graves, steroizii fiind evitată, iar hipotiroidismul ulterior fiind imposibil'],'ABCD',614,'Tiroidita De Quervain',
 'Asocierea febrei/VSH/captării nule de faza hipotiroidiană tardivă și de aspira/prednisolonul scurt.',
 ['Clinica virală (febră, durere, sensibilitate) definește faza acută.','VSH/vâscozitatea și captarea suprimată sunt investigațiile.','Hipotiroidismul tranzitoriu după săptămâni este evoluția.','Aspirina și prednisolonul scurt sunt conduita.','Captarea crescută este a Graves; steroizii scurți sunt tocmai opțiunea din cazurile grave.']],
 8,'Distractorul aplică scintigrama Graves (captare difuză) și interzice steroizii, inversând două trăsături ale De Quervain.',['Tiroidita De Quervain','captării în faza acută']),

q(53,['La vârstnicul cu fibrilație atrială de novo, fără alte semne de tirotoxicoză, capitolul recomandă:',
 ['Testele tiroidiene se impun, deoarece la vârstnici hipertiroidismul se prezintă frecvent prin FA, alte tahicardii și/sau insuficiență cardiacă, adesea cu estomparea celorlalte semne','Ignorarea TSH, FA-ul vârstnicului fiind independent de tiroidă','Iod radioactiv imediat, fără confirmare biochimică','Carbimazol 2 mg săptămânal, ca screening','Doar ecografie cervicală, testele hormonale fiind superflue după 70 de ani'],'A',615,'Hipertiroidismul la vârstnici — Fibrilația atrială',
 'Recunoașterea FA ca prezentare oligosimptomatică la vârstnic și a obligației de a doza hormonii tiroidieni.',
 ['FA/tahicardie/ICC cu semne estompate și testele obligatorii în orice FA sunt fraza din paragraf.','Textul cere teste, nu ignorarea TSH.','IRA fără confirmare biochimică este interzisă în general, nu doar la vârstnic.','2 mg/săptămână nu este o doză de screening.','Ecografia nu înlocuiește testele funcționale în FA.']],
 8,'Distractorii anulează testarea tiroidiană obligatorie din FA, mesajul central al paragrafului geriatrie.',['fibrilaţie atrială','Testele tiroidiene sunt obligatorii']),

q(54,['Recidiva după o cură de carbimazol sau PTU, în datele de prognostic, se caracterizează prin:',
 ['Aproximativ 50% recidivează, cei mai mulți în cei 2 ani de după încheiere, ocazional mai târziu','Ciclul uzual de tratament este de 18 luni (unii folosesc 6-24 de luni)','La gușile nodulare sau multinodulare voluminoase remisiunea după o cură de ATD este puțin probabilă, fiind nevoie în general de tratament radical; riscul de recidivă este mai înalt și în hipertiroidismul biochimic sever','Recidiva este rară (<5%) după 18 luni, gușa multinodulară remițând constant medicamentos','Severitatea biochimică inițială protejează de recidivă'],'ABC',616,'Recidiva; Durata curei de ATD',
 'Reținerea ratei de 50% / 2 ani, a ferestrei 18 luni și a eșecului remisiunii la gușa nodulară voluminoasă.',
 ['50% și predominanța în primii 2 ani deschid prognosticul.','18 luni (6-24) este durata citată a titrării.','Gușa nodulară voluminoasă și severitatea biochimică ca factori de recidivă închid paragraful.','Textul dă ~50%, nu <5%; gușa nodulară mare nu remite medicamentos.','Severitatea biochimică crește, nu scade, riscul de recidivă.']],
 8,'Distractorii comprimă recidiva de la 50% la <5% și transformă gușa nodulară din indicație radicală în succes medicamentos.',['În jur de 50%','18 luni'],[617]),

q(55,['Următoarele afirmații despre fătul/neonatul din Graves maternă și despre rezistența la hormonii tiroidieni sunt adevărate:',
 ['Hipertiroidismul neonatal se poate dezvolta deoarece TSI au un timp de înjumătățire de aproximativ 3 săptămâni; clinic: iritabilitate, absența creșterii ponderale, diaree, semne oculare','Rezistența la hormonii tiroidieni, prin mutații TRβ, produce T4/T3 crescute cu TSH normal, la un pacient eutiroidian care nu necesită tratament','Orbitopatia Graves este mai frecventă și evoluează mai sever la fumători','Exacerbarea bolii oculare după iod radioactiv este de 15%, versus 3% sub medicație antitiroidiană; vederea este amenințată în 5-10% din cazuri','TSI nu persistă după naștere, rezistența TRβ impunând ATD de rutină, iar fumatul protejând de orbitopatie'],'ABCD',618,'Fătul; Rezistența la hormoni; Orbitopatia Graves',
 'Integrarea t½ TSI de 3 săptămâni, a profilului T4 crescut/TSH normal din rezistență și a cifrelor 15%/3% și 5-10% ale orbitopatiei.',
 ['Cele 3 săptămâni și tabloul neonatal deschid paragraful de neonat.','Mutațiile receptorului și profilul eutiroidian fără tratament definesc rezistența.','Fumatul ca factor de severitate este explicit.','15% versus 3% și 5-10% pentru vedere închid orbitopatia.','TSI persistă; rezistența nu se tratează de rutină cu ATD; fumatul agravează, nu protejează.']],
 8,'Patru cifre/mecanisme din aceeași pagină; distractorul inversează t½ TSI, indicația de tratament a rezistenței și rolul fumatului.',['3 săptămâni','15% versus 3%']),

q(56,['Carcinoamele papilare și foliculare, în epidemiologia și urmărirea din capitol, se recunosc prin:',
 ['Papilarul reprezintă circa 70% și folicularul circa 20% din cancerele tiroidiene; peste 75% din cazuri apar la femei','După ablație, TSH recombinant (tirotropina alfa, rhTSH) 900 µg în 2 doze pe 48 de ore stimulează tiroglobulina fără a întrerupe levotiroxina','Papilarul este <5%, identic anaplasticului, rhTSH-ul înlocuind chirurgia','Folicularul predomină la 70%, femeile fiind scutite','Doza de rhTSH este 25 µg unic, după oprirea definitivă a T4'],'AB',621,'Cadranul 21.33; Urmărirea Tg cu rhTSH',
 'Contrastarea ponderilor 70%/20% și a schemei rhTSH 900 µg × 2/48 h de anaplastic și de oprirea T4 ca unică metodă de stimulare.',
 ['70%, 20% și predominanța feminină >75% sunt din cadran/epidemiologie.','900 µg, două doze în 48 de ore, fără oprirea T4, este protocolul de stimulare.','<5% este al anaplasticului, nu al papilarului; chirurgia rămâne de elecție.','Raportul 70/20 este inversat; femeile sunt majoritare, nu scutite.','Doza citată este 900 µg × 2, tocmai pentru a evita oprirea T4.']],
 8,'Distractorii inversează 70% papilar versus 20% folicular și comprimă rhTSH-ul de 900 µg la 25 µg după oprirea T4.',['70%','900µg'],[622]),
];
