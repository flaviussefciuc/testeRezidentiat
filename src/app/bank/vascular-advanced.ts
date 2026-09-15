import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION='Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025';
const pdfOffset=(p:number)=>p<=527?p-315:p-321;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('vascular',26,pdfOffset,`vascular-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const VASCULAR_ADVANCED=[
q(1,['Disecția de aortă Stanford se caracterizează prin:',
 ['Tipul A interesează aorta toracică ascendentă și se tratează chirurgical în urgență','Tipul B interesează aorta descendentă, distal de artera subclaviculară stângă','Tratamentul tipului B include scăderea tensiunii arteriale, a frecvenței cardiace și a velocității contracției ventriculului stâng (dp/dt)','Tipul B necomplicat se operează de urgență, similar tipului A','Diagnosticul se confirmă doar prin radiografie toracică simplă'],'ABC',520,'Disecția de aortă',
 'Diferențierea tipului A (chirurgie de urgență) de tipul B (control tensional și dp/dt) după clasificarea Stanford.',
 ['Interesarea aortei ascendente și indicația de chirurgie în urgență sunt explicite.','Originea distal de subclaviculara stângă definește tipul B.','Scăderea TA, a frecvenței și a dp/dt este strategia medicală a tipului B.','Tipul B necomplicat se tratează medical; chirurgia se rezervă rupturii, ischemiei de organ sau anevrismului cu risc de ruptură.','Diagnosticul se confirmă prin ecocardiografie transesofagiană, CT sau angiografie, nu prin radiografie simplă.']],
 8,'Inversează indicația de urgență între tipul A și B, pe o clasificare Stanford ușor de oglindit.',['tip A Stanford','tip B Stanford']),

q(2,['Localizarea cea mai frecventă a bolii ocluzive femuro-popliteale este:',
 ['Artera femurală superficială, în canalul adductorilor (Hunter)','Artera femurală profundă, la emergența din iliaca externă','Trifurcația poplitee, la adultul tânăr fără diabet','Aorta infrarenală, ca unică localizare la diabetici','Artera tibială anterioară, la pacienții de 45–65 de ani fără factori de risc'],'A',520,'Boala arterială periferică — Localizare',
 'Recunoașterea arterei femurale superficiale în canalul Hunter ca sediu predilect al bolii femuro-popliteale.',
 ['Textul identifică AFS în canalul adductorilor (Hunter) ca localizarea cea mai frecventă.','Artera femurală profundă poate asigura colaterale în repaus, nu este sediul predilect.','Boala ocluzivă tibială (sub trifurcație) este tipică diabetului, insuficienței renale terminale și vârstei înaintate.','Boala aorto-iliacă predilectă la 45–65 de ani nu este localizarea femuro-popliteală.','Arterele tibiale definesc boala ocluzivă tibială, nu sediul femuro-popliteal clasic.']],
 8,'Mută sediul clasic Hunter către AFP, tibiale sau aorto-iliac, entități învecinate din aceeași pagină.',['arterei femurale','canalul adductorilor']),

q(3,['Indicele gleznă-braț (IGB) în boala arterială periferică:',
 ['Un IGB >0,9 este, în general, normal','Un IGB <0,8 este în concordanță cu stadiul de claudicație, iar un IGB <0,4 cu durerea de repaus sau leziunile tisulare','Semnalul Doppler normal este monofazic, iar stenoza îl face trifazic','IGB nu scade la efort pe bandă la pacienții cu claudicație','Semnul Buerger constă în paloare în declivitate și eritroză la ridicarea piciorului'],'AB',522,'Evaluarea BAP — IGB și Doppler',
 'Aplicarea pragurilor IGB (0,9 / 0,8 / 0,4) față de morfologia undei Doppler și de semnul Buerger.',
 ['Pragul >0,9 ca valoare normală este citat.','Corespondența <0,8–claudicație și <0,4–durere de repaus/leziuni este explicită.','Unda normală este trifazică; stenoza o face bifazică, apoi monofazică.','La claudicație, IGB scade când apar simptomele pe bandă.','În declivitate piciorul devine roșu (rubor), iar la ridicare palid — inversul enunțului.']],
 8,'Inversează secvența trifazic→monofazic și semnul Buerger, pe pragurile IGB care se memorează greșit.',['1GB >0.9','1GB <0.4']),

q(4,['Selectați enunțurile adevărate despre revascularizarea în BAP:',
 ['Endarterectomia este tratamentul chirurgical standard pentru ateroscleroza bifurcației carotidiene, dar are utilitate limitată la membrele inferioare','Bypassul aortofemural are o rată de patență la 5 ani de peste 90%','După o intervenție endovasculară, clopidogrelul împreună cu aspirina se administrează cel puțin 6 săptămâni, urmat de aspirină pe termen nelimitat','Intervențiile iliace cu stentare și angioplastie prezintă 70–90% patență primară la 1 an','Angioplastia infrapopliteală este prima opțiune la claudicația ușoară a adultului tânăr fără comorbidități'],'ABCD',525,'Tratamentul BAP — Endovascular și chirurgical',
 'Diferențierea rolului endarterectomiei carotidiene de limitele ei în BAP, cu patența aortofemurală și dual antiplachetar post-PTA.',
 ['Contrastul carotidă versus membre inferioare (leziuni extinse, fără zone clare de început/sfârșit) este explicit.','Patența >90% la 5 ani a bypassului aortofemural este citată.','Schema clopidogrel+aspirină ≥6 săptămâni, apoi aspirină nelimitat, este descrisă.','Patența iliaca 70–90% la 1 an este menționată.','Angioplastia infrapopliteală este rezervată pacienților cu risc chirurgical, bypass limitat sau ulcer limitat al piciorului.']],
 8,'Împerechează patențe (90% la 5 ani vs 70–90% la 1 an) cu indicația carotidă a endarterectomiei, ușor de generalizat la membru.',['peste 90%','Clopidogrelul']),

q(5,['Ischemia mezenterică cronică se caracterizează prin:',
 ['Simptomatologia este frecventă atunci când două din cele trei artere viscerale principale sunt obstruate','Tabloul include durere abdominală postprandială (de obicei în prima oră după masă) și scădere ponderală cu frică alimentară','Patența la 3 ani este circa 70% pentru angioplastia cu balon, față de peste 90% pentru bypass','Un singur vas stenozat produce infarct mezenteric imediat, colateralele fiind absente','Bypassul este preferat vârstnicilor malnutriți, deoarece morbiditatea imediată este mai mică decât a stentării'],'ABC',527,'Ischemia mezenterică cronică',
 'Recunoașterea pragului de două vase, a anginei intestinale cronice și a compromisului patență versus morbiditate PTA/bypass.',
 ['Textul leagă simptomele de ocluzia a 2 din 3 artere principale.','Durerea postprandială precoce și frica alimentară cu scădere ponderală sunt descrise.','Cifrele ~70% PTA versus >90% bypass la 3 ani sunt citate.','Celelalte două artere compensează prin gastroduodenală și arcada marginală; infarctul nu urmează stenozei unui singur vas.','Deși patența PTA este inferioară, morbiditatea imediată este mai mică, deci stentarea este preferată la vârstnici malnutriți.']],
 8,'Inversează alegerea PTA versus bypass la vârstnicul malnutrit și neagă circulația colaterală între cele trei trunchiuri.',['2 din cele 3','pentru bypass la 3 ani'],[526]),

q(6,['Identificați afirmația corectă privind sindromul de furt subclavicular:',
 ['Fluxul se inversează în artera vertebrală în timpul efortului membrului superior, scăzând perfuzia bazilară','Este mai frecvent pe dreapta, artera subclaviculară dreaptă fiind mai lungă','Diferența tensională brahială ipsilaterală tipică este sub 5 mmHg','Endarterectomia carotidă nu poate ameliora simptomele insuficienței bazilare, chiar asociată unei stenoze carotidiene','Angioplastia subclaviculară agravează fluxul anterograd în artera vertebrală'],'A',534,'Boala vertebro-bazilară — Sindromul de furt subclavicular',
 'Recunoașterea inversării de flux vertebral la efortul brațului ca mecanism al furtului subclavicular.',
 ['Textul descrie scăderea rezistenței la efort, inversarea fluxului vertebral și scăderea perfuziei bazilare.','Incidența este de 3–4 ori mai mare pe stânga, artera subclaviculară stângă fiind mai lungă.','Presiunea brahială ipsilaterală este redusă cu cel puțin 15 mmHg.','La stenoza carotidă asociată, endarterectomia carotidă singură poate ameliora simptomele prin colaterale.','Angioplastia subclaviculară, bypassul carotido-subclavicular și reimplantarea restabilesc fluxul anterograd vertebral.']],
 8,'Inversează predilecția stânga/dreapta și pragul de 15 mmHg, pe un mecanism de furt ușor de oglindit.',['cel puţin 15 mmHg','3--4 ori mai mare']),
];
