import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('reumatologie',18,-370,`reumatologie-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related);

export const REUMATOLOGIE_B=[
q(14,['Cele trei subtipuri principale de afecțiuni articulare inflamatoare sunt:',
 ['Artrita reumatoidă (asociată cu autoanticorpi), spondilartrita (asociată cu HLA-B27) și artrita metabolică/microcristalină','Artroza, polimialgia reumatică și febra reumatică','Artrita septică, hemartroza și tumora juxta-articulară','Doar AR și spondilartrita, cristalele fiind excluse din clasificare','Spondilartrita asociată MHC de clasă II și AR asociată HLA-B27'],'A',437,'Afecțiuni articulare inflamatoare — Cadranul 18.24',
 'Identificarea triadei AR / spondilartrită / microcristalină și a markerilor genetici inversați în distractor.',
 ['Cele trei subtipuri și asocierile (autoanticorpi, HLA-B27, cristale) sunt cele din Cadranul 18.24.','Artroza este mecanică, nu un subtip inflamator principal din cadran.','Acestea sunt cauze de monoartrită, nu subtipurile principale.','Artrita microcristalină este al treilea subtip.','Asocierile MHC sunt inverse: AR cu clasa II, spondilartrita cu B27 (clasa I).']],
 8,'Distractorii reciclează cauze reale de artrită din același capitol, dar schimbă nivelul de clasificare sau markerul genetic.',['Cele trei subtipuri','HLA-827']),

q(15,['Caracteristicile prognostice negative pentru poliartrita nediferențiată includ:',
 ['Debut poliarticular','ACPA pozitivi și factor reumatoid pozitiv','Eroziuni articulare radiografice la prezentare','Durată a bolii mai mare de 3-6 luni','Monoartrită de scurtă durată, seronegativă, fără eroziuni'],'ABCD',437,'Poliartrită inflamatorie precoce',
 'Reținerea clusterului de rău prognostic care impune trimiterea urgentă și DMARD precoce.',
 ['Debutul poliarticular figurează în listă.','Atât ACPA, cât și FR sunt enumerați.','Eroziunile la prezentare sunt un factor negativ.','Durata peste 3-6 luni completează lista.','Profilul mono, scurt și seronegativ nu este cel de rău prognostic.']],
 8,'Patru elemente reale de prognostic; distractorul descrie tocmai profilul favorabil din același paragraf.',['debutul poliarticular','3-6 luni']),

q(16,['Selectați enunțurile adevărate despre autoanticorpii din artrita reumatoidă:',
 ['Factorii reumatoizi se găsesc la 75-80% dintre pacienții cu AR','Spre deosebire de FR, ACPA sunt mai specifici și au sensibilitate mai mare pentru diagnostic','Fumatul este un potențial declanșator, în special în AR ACPA-pozitivă','FR au valoare predictivă mare în populația generală, fiind suficienți pentru screeningul de masă','Antigenul declanșator al ACPA este, cu dovezi solide, colagenul de tip II la om'],'ABC',438,'Artrita reumatoidă — Autoanticorpi; Imunologie',
 'Contrastarea prevalenței FR (75-80%) cu specificitatea superioară a ACPA și cu rolul fumatului.',
 ['Intervalul 75-80% este cifra din text.','Comparația de specificitate/sensibilitate este explicită.','Fumatul este legat de forma ACPA-pozitivă.','FR au valoare predictivă mică în populația generală.','Textul precizează că există puține dovezi că antigenul ar fi colagenul de tip II la om.']],
 8,'Distractorii inversează valoarea predictivă a FR și atribuie colagenului II un rol pe care textul îl slăbește.',['75-80%','ACPA'],[439]),

q(17,['Pannusul sinovial și momentul eroziunilor în AR:',
 ['Sinovita hiperplazică se răspândește de la marginile articulare pe cartilaj, blocând nutriția și acționând prin citokine asupra condrocitelor','IRM arată procesul în primele 3-6 luni de la debut, înainte ca eroziunile prost definite să apară pe radiografii, justificând DMARD în acest interval','Eroziunile radiografice precedă de regulă cu ani modificările IRM, motiv pentru care DMARD se amână','Pannusul protejează cartilajul prin hipertrofie nutritivă','Osteoporoza juxta-articulară lipsește în sinovita activă'],'AB',439,'Artrita reumatoidă — Patologie',
 'Legarea pannusului de fereastra IRM de 3-6 luni care justifică DMARD înaintea eroziunilor radiografice.',
 ['Definiția și mecanismul pannusului sunt cele din paragraf.','Fereastra 3-6 luni și indicația de DMARD precoce sunt explicite.','Relația IRM–radiografie este inversă.','Pannusul subțiază cartilajul, nu îl protejează.','Osteoporoza juxta-articulară apare în sinovita activă.']],
 8,'Distractorii inversează succesiunea IRM versus radiografie, exact argumentul pentru DMARD precoce.',['primele 3-6 luni','pannus']),

q(18,['Conform criteriilor ACR/EULAR 2010, un pacient se clasifică drept AR la un scor de:',
 ['cel puțin 6 puncte','cel puțin 3 puncte','cel puțin 10 puncte','1 punct pentru o articulație medie/mare, suficient singur','0 puncte, dacă există redoare matinală'],'A',440,'Cadranul 18.28 — Criteriile ACR/EULAR 2010',
 'Reținerea pragului de clasificare ≥6 puncte, distinct de punctajele parțiale ale domeniilor.',
 ['Textul precizează clasificarea drept AR la ≥6 puncte.','3 puncte pot proveni din serologie sau din articulații mici, dar nu ating pragul.','10 puncte depășesc pragul; nu este pragul de clasificare.','O articulație medie/mare valorează 0 puncte, nu 1.','Redoarea nu este un domeniu punctat în Cadranul 18.28.']],
 8,'Distractorii reciclează punctaje reale din același tabel (0, 2, 3, 5) în locul pragului de 6.',['e:6 puncte','ACR/EULAR 2010']),

q(19,['Afectarea tipică în AR se caracterizează prin:',
 ['Prezentare obișnuită (~70%) ca poliartrită periferică simetrică, progresivă, pe săptămâni sau luni, între 30 și 50 de ani','Mai rar (~15%), debut rapid în câteva zile, cu poliartrită simetrică severă, mai ales la vârstnici','Durere și redoare a articulațiilor mici ale mâinilor (MCF, IFP) și picioarelor (MTF); articulațiile IFD sunt de obicei cruțate','10% prezintă monoartrită de genunchi sau umăr, ori sindrom de tunel carpian','Articulațiile IFD sunt sediul de debut cel mai frecvent, MCF fiind cruțate'],'ABCD',440,'Tablou clinic — Afectarea tipică în AR',
 'Integrarea proporțiilor 70% și 15% cu distribuția MCF/IFP/MTF și cruțarea IFD.',
 ['Profilul de 70% este cel din paragraf.','Debutul exploziv de ~15% la vârstnici este al doilea tipar.','Cruțarea IFD este explicită.','Cele 10% cu monoartrită sau tunel carpian completează spectrul.','IFD sunt cruțate; MCF și IFP sunt afectate.']],
 8,'Patru date de prezentare; distractorul inversează IFD și MCF, confuzia clasică cu artroza nodulară.',['Articulaţiile IFD','a:70%']),

q(20,['Deformările degetelor din AR constituită includ:',
 ['Flexie fixă a IFP (deformare în butonieră) sau hiperextensie fixă a IFP (deformare în gât de lebădă)','Combinație de deviere ulnară și subluxație palmară a articulațiilor MCF','Ruptura extensorilor 4 și 5 prin tenosinovita flexorilor, fără legătură cu stiloida ulnară','Deformarea în gât de lebădă este flexia fixă a IFP','MCF rămân aliniate; devierea ulnară este o deformare a IFD'],'AB',441,'Afectarea articulară — Articulațiile mâinilor și carpul',
 'Diferențierea butonierei (flexie IFP) de gâtul de lebădă (hiperextensie IFP) și a devierii ulnare MCF.',
 ['Cele două deformări IFP sunt descrise astfel.','Devierea ulnară cu subluxație palmară MCF este combinația citată.','Ruptura extensorilor 4 și 5 este legată de subluxația dorsală a stiloidei ulnare, nu de tenosinovita flexorilor (care dă tunel carpian).','Flexia fixă este butoniera; gâtul de lebădă este hiperextensia.','Devierea ulnară privește MCF, nu IFD.']],
 8,'Distractorii inversează butoniera și gâtul de lebădă și atribuie ruptura extensorilor tenosinovitei flexorilor.',['în butonieră','gât de lebădă']),

q(21,['Afectarea picioarelor în AR include:',
 ['Una dintre primele manifestări este tumefierea dureroasă a articulațiilor MTF','Piciorul se lățește și se dezvoltă deforme de degete în ciocan','Migrarea anterioară a pernei fibro-adipoase expune capetele metatarsiene la presiune','Glezna se deformează frecvent în valg','Prima manifestare este protruzia acetabulară, MTF fiind cruțate'],'ABCD',441,'Afectarea articulară — Picioarele',
 'Succesiunea MTF – degete în ciocan – expunerea capetelor metatarsiene – valg de gleznă.',
 ['MTF dureroase sunt printre primele semne.','Lățirea și degetele în ciocan sunt descrise.','Migrarea pernei și expunerea capetelor apar în figură și text.','Valgul de gleznă este frecvent.','Protruzia acetabulară privește șoldul, nu piciorul precoce.']],
 8,'Patru elemente ale piciorului reumatoid; distractorul mută o leziune de șold (protrusio) asupra debutului MTF.',['degete „în ciocan"','capetelor metatarsiene'],[442]),

q(22,['Afectarea coloanei cervicale în AR:',
 ['Sinovita C1-C2 și a burselor odontoidului poate produce instabilitate atlanto-axială','IRM este imagistica de primă intenție; radiografiile în flexie și extensie pot obiectiva instabilitatea','Dificultatea de mers neexplicată, slăbiciunea picioarelor sau pierderea controlului sfincterian sunt urgențe neurochirurgicale','Imagistica în flexie/extensie este recomandată înainte de chirurgie sau endoscopie digestivă superioară','Compresia medulară se exclude clinic dacă durerea de gât este musculară, fără imagistică'],'ABCD',442,'Afectarea articulară — Coloana cervicală',
 'Recunoașterea instabilității atlanto-axiale, a IRM ca primă intenție și a semnelor de urgență sfincteriană.',
 ['Mecanismul sinovitei superioare este enunțat.','IRM prima intenție și radiografiile dinamice sunt explicite.','Semnele piramidale/sfincteriene definesc urgența.','Verificarea preoperatorie/pre-endoscopică este recomandarea.','Durerea musculară este frecventă, dar nu exclude instabilitatea.']],
 8,'Patru reguli de imagistică și urgență; distractorul transformă durerea musculară comună într-o excludere a compresiei.',['instabilitate atlanto-axială','urgenţă neurochirurgicală']),

q(23,['Afectarea cardiovasculară descrisă în AR include:',
 ['AR slab controlată, cu PCR crescut persistent și hipercolesterolemie, este un factor de risc cardiovascular independent de factorii tradiționali','Pericardita este rareori simptomatică','Endocardita și boala miocardică, rareori simptomatice, sunt evidențiate postmortem în aproximativ 20% din cazuri','Riscul cardiovascular dispare odată ce diagnosticul de AR este stabilit, independent de controlul bolii','Pericardita este manifestarea dominantă, prezentă simptomatic la majoritatea pacienților'],'ABC',443,'Manifestări extraarticulare — Cordul și vasele periferice',
 'Separarea riscului CV independent de leziunile postmortem de 20% și de pericardita rar simptomatică.',
 ['Riscul independent de factorii tradiționali este enunțat.','Pericardita rar simptomatică este listată.','Cifra de aproximativ 20% postmortem este din text.','Textul cere gestionarea agresivă a riscului, nu dispariția lui.','Pericardita este rareori simptomatică, nu dominantă.']],
 8,'Distractorii inversează caracterul silențios al pericarditei și anulează riscul CV independent.',['factor de risc cardiovascular','aproximativ 20%']),

q(24,['Scorul DAS28, utilizat pentru activitatea AR, se interpretează astfel:',
 ['Peste 5,1 — activitate înaltă; sub 3,2 — activitate scăzută; sub 2,6 — remisiune','Peste 2,6 — activitate înaltă; sub 5,1 — remisiune','Sub 5,1 — remisiune; peste 3,2 — inactivitate','Pragurile 5,1 / 3,2 / 2,6 privesc VSH-ul izolat, nu scorul compozit','DAS28 nu include evaluarea pacientului, ci doar numărul de articulații'],'A',444,'Terapia medicamentoasă — DAS28',
 'Reținerea celor trei praguri numerice ale DAS28 (5,1 / 3,2 / 2,6).',
 ['Cele trei praguri sunt enunțate explicit.','2,6 este remisiunea, nu activitatea înaltă.','Remisiunea este sub 2,6, nu sub 5,1.','Pragurile se aplică scorului compozit.','Scorul include și evaluarea globală pe scala analogică vizuală.']],
 8,'Distractorii permută cele trei praguri reale 5,1, 3,2 și 2,6 între activitate înaltă, scăzută și remisiune.',['DAS28','mai mică de 2,6']),

q(25,['Strategia treat-to-target în AR nou diagnosticată:',
 ['Începe de obicei cu o combinație de csDMARD cu acțiune lentă și glucocorticoizi cu acțiune rapidă, în doză/durată limitată','Dacă nu se atinge activitate scăzută sau remisiune cu csDMARD, se prescriu bDMARD','tsDMARD (inhibitori JAK) au biodisponibilitate orală, debut rapid și eficacitate similară cu bDMARD','Tratamentul se limitează la AINS, DMARD fiind rezervate eroziunilor radiografice tardive','Glucocorticoizii se folosesc nelimitat ca monoterapie de fond, fără csDMARD'],'ABC',444,'Terapia medicamentoasă — Treat to target',
 'Ierarhizarea csDMARD plus glucocorticoizi, apoi bDMARD, cu locul tsDMARD orale.',
 ['Combinația csDMARD + GC limitați este startul descris.','Eșecul csDMARD duce la bDMARD.','Proprietățile tsDMARD sunt cele din paragraf.','Diagnosticarea precoce și T2T precedă așteptarea eroziunilor tardive.','GC au doză/durată limitată, nu sunt monoterapie de fond nelimitată.']],
 8,'Distractorii amână DMARD până la eroziuni tardive, inversând logica T2T din același paragraf.',['treat to target','tsDMARDs']),

q(26,['Metotrexatul în AR:',
 ['Doza săptămânală inițială de 7,5-10 mg oral se crește până la 15-25 mg, conform T2T','Acidul folic oral reduce efectele secundare; se monitorizează hemograma și biochimia hepatică','Screeningul include radiografie toracică și IGRA la cei cu risc, plus vaccinare antipneumococică și antigripală anuală','Nu trebuie utilizat în sarcină; la greață sau absorbție slabă se poate trece pe subcutanat','Doza zilnică de 25 mg este schema standard, acidul folic fiind contraindicat'],'ABCD',445,'Medicamente antireumatice — Metotrexat',
 'Reținerea schemei săptămânale 7,5-10→15-25 mg, a folatului, a IGRA și a interdicției din sarcină.',
 ['Eșalonarea săptămânală este cea din text.','Folatul și monitorizarea sunt explicite.','Pachetul TB/vaccinuri este cerut.','Sarcina și calea s.c. sunt precizate.','Administrarea este săptămânală, nu zilnică; folatul se administrează.']],
 8,'Patru reguli de prescriere; distractorul transformă doza săptămânală într-una zilnică de 25 mg.',['7,5-10 mg','15-25 mg']),

q(27,['Sulfasalazina și hidroxiclorochina în AR:',
 ['Sulfasalazina poate fi utilizată în sarcină; doza crește de la 500 mg/zi la 2-3 g/zi, cu răspuns la circa 50% în 3-6 luni','Hidroxiclorochina (200-400 mg zilnic) se folosește în boala ușoară sau ca adjuvant; screening oftalmologic în primul an, apoi anual, din cauza retinopatiei','Sulfasalazina este contraindicată în sarcină, similar metotrexatului','Hidroxiclorochina nu necesită supraveghere oftalmologică','Doza de întreținere a sulfasalazinei este de 200-400 mg, identică hidroxiclorochinei'],'AB',445,'Sulfasalazină; Hidroxiclorochină',
 'Contrastarea uzului în sarcină și a dozelor (2-3 g versus 200-400 mg) plus regula de screening retinian.',
 ['Sarcina, eșalonarea 500 mg→2-3 g și rata de 50% sunt din paragraf.','Doza 200-400 mg și screeningul oftalmologic sunt explicite.','Sulfasalazina poate fi folosită în sarcină.','Screeningul oftalmologic este recomandat.','200-400 mg este doza hidroxiclorochinei, nu a sulfasalazinei.']],
 8,'Distractorii inversează siguranța în sarcină și permută dozele 2-3 g versus 200-400 mg între cele două csDMARD.',['2-3 g pe zi','200-400']),

q(28,['Blocanții TNF-α, dincolo de structura moleculară, se caracterizează prin:',
 ['Se folosesc după eșecul a cel puțin două csDMARD (de obicei metotrexat și sulfasalazină), de regulă asociați cu metotrexat','Reactivarea tuberculozei poate apărea; se recomandă radiografie toracică, IGRA și tratarea TB înaintea bDMARD','Nu trebuie utilizați la pacienții cu insuficiență cardiacă severă','Se inițiază ca primă linie, înaintea oricărui csDMARD, la toți pacienții cu AR','Insuficiența cardiacă severă este o indicație preferențială de anti-TNF'],'ABC',445,'Blocanții TNF-α',
 'Aplicarea regulii „după două csDMARD”, a screeningului TB și a contraindicației din IC severă.',
 ['Secvența după două csDMARD și asocierea cu MTX sunt explicite.','Pachetul TB (Rx, IGRA, tratament/profilaxie) este descris.','IC severă este o contraindicație.','Anti-TNF vin după eșecul csDMARD, nu ca primă linie.','IC severă contraindică, nu indică, anti-TNF.']],
 8,'Distractorii mută anti-TNF înaintea csDMARD și transformă contraindicația din IC într-o indicație.',['cel puţin două csDMARD','insuficienţă cardiacă severă'],[447]),

q(29,['La pacienții cu AR care obțin remisiune susținută peste un an, bibliografia descrie ca obișnuită:',
 ['Reducerea dozei de DMARD sau prelungirea intervalului dintre administrări','Creșterea imediată a dozei de bDMARD, independent de remisiune','Oprirea tuturor csDMARD în prima lună de remisiune clinică','Înlocuirea de rutină a csDMARD cu chimioterapie citotoxică','Inițierea anti-TNF la toți pacienții aflați în remisiune'],'A',447,'Schimbarea terapiilor DMARD și taperingul',
 'Identificarea taperingului (doză sau interval) după remisiune susținută >1 an.',
 ['Reducerea dozei sau prelungirea intervalului este conduita descrisă după >1 an.','Creșterea dozei contrazice logica remisiunii.','Taperingul este gradual, nu oprire în prima lună.','Chimioterapia citotoxică nu este strategia de tapering.','Anti-TNF se adaugă la eșec, nu la remisiune.']],
 8,'Distractorii inversează taperingul în intensificare sau oprire bruscă, două extreme față de reducerea descrisă.',['>1 an','reducerea dozei']),

q(30,['Spondilartrita, ca grup, cuprinde:',
 ['Spondilartrita axială (inclusiv spondilita anchilozantă), artrita psoriazică, artrita reactivă (sexuală sau post-dizenterică) și artrita enteropatică','Doar spondilita anchilozantă, celelalte fiind seropozitive','AR seropozitivă și guta tofacee','Polimialgia reumatică și arterita temporală','Artroza nodulară și periartrita calcifiantă'],'A',447,'Cadranul 18.34 — Spondilartrita',
 'Recunoașterea listei de entități SpA, distinct de AR seropozitivă și de artropatiile cristaline.',
 ['Cele cinci entități sunt lista din Cadranul 18.34.','Grupul nu se reduce la SA.','AR seropozitivă și guta nu fac parte din SpA.','PMR și arterita temporală sunt alte boli.','Artroza și FCB nu sunt SpA.']],
 8,'Distractorii propun boli inflamatoare sau cristaline reale din capitol, dar din afara grupului HLA de clasă I.',['Spondilartrita axială','Artrită enteropatică']),

q(31,['În spondilita anchilozantă, evaluarea, extra-articularul și prognosticul includ:',
 ['HLA-B27 nu este diagnostic, din cauza frecvenței ridicate în populație, dar poate consolida un diagnostic suspectat','Anomalii de conducere cardiacă la aproximativ 5% și aortită/insuficiență aortică la circa 1% dintre cei cu SA constituită','Cu exerciții și ameliorarea durerii, peste 80% își păstrează activitatea profesională','HLA-B27 pozitiv confirmă singur diagnosticul de SA la un adult tânăr cu durere lombară','Anomaliile de conducere lipsesc în SA, interesul cardiac fiind doar pericardic, ca în AR'],'ABC',449,'Spondilita anchilozantă — Investigații; Extra-articular; Prognostic',
 'Separarea valorii non-diagnostice a HLA-B27 de cifrele cardiace 1% / 5% și de prognosticul ocupațional de 80%.',
 ['Limitarea diagnostică a HLA-B27 este explicită.','Cifrele 5% (conducere) și 1% (aortită) sunt din text.','Peste 80% păstrează activitatea profesională.','Frecvența populațională împiedică confirmarea izolată.','Anomaliile de conducere sunt citate; pericardita este extra-articularul AR.']],
 8,'Distractorii transformă un test de consolidare (HLA-B27) în criteriu suficient și neagă afectarea de conducere.',['nu este diagnostic','peste 80%'],[450]),

q(32,['Artrita psoriazică, în epidemiologie și tratament (dincolo de formele lezionale deja consacrate):',
 ['Prevalența psoriazisului este 2-3%; circa 10% dezvoltă APs, care precede pielea în aproximativ 15% din cazuri','În forma spondilitică, doar 50% au HLA-B27','Hidroxiclorochina se evită (reacții cutanate psoriazice); glucocorticoizii orali pot destabiliza psoriazisul','APs urmează afectarea cutanată în toate cazurile, fără excepție de precedență articulară','Hidroxiclorochina este csDMARD-ul de primă intenție, iar prednisonul oral stabilizează pielea'],'ABC',450,'Artrita psoriazică — Epidemiologie; Tratament',
 'Reținerea proporțiilor 2-3% / 10% / 15% și 50% HLA-B27, plus evitarea HCQ și a steroizilor orali.',
 ['Cele trei procente epidemiologice sunt din deschidere.','50% HLA-B27 în spondilită este cifra dată.','Evitarea HCQ și a GC orali este explicită.','Artrita precede pielea în ~15% din cazuri.','HCQ și GC orali sunt tocmai de evitat.']],
 8,'Distractorii inversează regula HCQ/steroid și neagă precedența cutanată de 15%.',['2-3%','aproximativ 15%']),

q(33,['Artrita reactivă, în epidemiologie și evoluție (fără leziunile cutaneo-mucoase clasice):',
 ['Spondilartrita se dezvoltă la 1-2% după dizenterie sau infecție sexuală (uretrită/cervicită nespecifică)','La bărbați, HLA-B27 crește riscul după o astfel de infecție de 30-50 de ori','70% se recuperează complet în 6 luni; conjunctivita sterilă apare în 30% din cazuri','Femeile sunt afectate mai frecvent decât bărbații','Toți pacienții cu artrită reactivă sunt HLA-B27 pozitivi'],'ABC',450,'Artrita reactivă — Epidemiologie; Tablou clinic',
 'Integrarea riscului 1-2%, a multiplicatorului 30-50× la bărbați și a ratelor 70% / 30%.',
 ['Proporția 1-2% este cea de deschidere.','Multiplicatorul 30-50 de ori la bărbați este explicit.','70% la 6 luni și conjunctivita 30% sunt din tabloul clinic.','Femeile sunt mai rar afectate.','Nu toți pacienții sunt HLA-B27 pozitivi.']],
 8,'Cere simultan patru procente distincte; distractorii inversează sexul și absolutizează HLA-B27.',['30-50 de ori','70% dintre pacienţi'],[451]),

q(34,['Artrita enteropatică asociată BII:',
 ['Sinovita apare la până la 10-15% dintre pacienții cu colită ulcerativă sau Crohn, asimetric, predominant la membrele inferioare','Remisiunea colitei ulcerative și colectomia totală duc de obicei la remisiunea articulară, dar artrita poate persista în Crohn bine controlat','bDMARD comune artritei și BII includ infliximab, adalimumab, certolizumab și ustekinumab','Colectomia nu influențează artrita din CU, spre deosebire de Crohn, unde vindecă articulațiile','AINS ameliorează simptomele fără risc de agrava diareea'],'ABC',451,'Artrită enteropatică',
 'Contrastarea remisiunii după colectomie în CU versus persistența în Crohn și lista bDMARD comune.',
 ['Prevalența 10-15% și distribuția sunt din paragraf.','Diferența CU (colectomie) versus Crohn este explicită.','Cele patru bDMARD sunt enumerate.','Relația colectomie–CU versus Crohn este inversată.','AINS pot agrava diareea.']],
 8,'Distractorii inversează efectul colectomiei asupra CU versus Crohn, distincția centrală a paragrafului.',['10-15%','colectomia totală']),

q(35,['Guta și hiperuricemia, în epidemiologie și patogenie:',
 ['Prevalența a crescut la 2,5% în Marea Britanie și 3,9% în SUA; raportul bărbați:femei este 5:1','Aproximativ 85-90% din cazuri sunt idiopatice; 90% au reducerea excreției acidului uric','Hiperuricemia patologică este un AUS de 408 µmol/L, valoare peste care se formează cristale in vitro la pH și temperatură fiziologică','Cristalele activează inflamazomul NLRP3, cu recrutarea caspazei 1 și activarea IL-1β','Majoritatea cazurilor se datorează unei erori enzimatice înnăscute, excreția fiind păstrată'],'ABCD',452,'Gută și hiperuricemie — Epidemiologie; Patogeneză',
 'Integrarea prevalenței 2,5%/3,9%, a raportului 5:1, a underexcreției de 90% și a pragului 408 µmol/L cu calea NLRP3.',
 ['Cifrele UK/SUA și raportul 5:1 sunt din epidemiologie.','85-90% idiopatice și 90% underexcreție sunt din patogenie.','Pragul 408 µmol/L este definiția in vitro.','NLRP3–caspaza 1–IL-1β este cascada autoinflamatorie.','Eroarea enzimatică este <1%; 90% au underexcreție.']],
 8,'Patru fapte cantitative; distractorul umflă eroarea enzimatică rară (<1%) la cauza majoritară.',['2,5%','408']),

q(36,['Tratamentul atacului de gută și al hiperuricemiei:',
 ['Naproxen 750 mg imediat, apoi 500 mg la 8-12 ore; după 24-48 de ore doze reduse încă o săptămână','Ținta AUS este sub 360 µmol/L la toți, și sub 300 µmol/L la gută severă (tofi, atacuri frecvente)','Alopurinolul nu se începe în termen de o lună de la un atac și se asociază AINS sau colchicină 2-4 săptămâni înainte și 4 după','Febuxostatul este mai sigur în insuficiența renală (metabolizare hepatică), dar alopurinolul rămâne prima alegere','Alopurinolul se inițiază în plin atac, fără acoperire, pentru a dizolva cristalele mai rapid'],'ABCD',453,'Gută — Tratament; Alopurinol; Febuxostat',
 'Reținerea schemei de naproxen, a țintelor 360/300 µmol/L și a ferestrei de o lună a alopurinolului.',
 ['Schema naproxen 750 apoi 500 mg este cea din text.','Cele două ținte 360 și 300 µmol/L sunt explicite.','Regula de o lună plus acoperirea AINS/colchicină este enunțată.','Metabolizarea hepatică și statutul de primă alegere al alopurinolului sunt din paragraful despre febuxostat.','Inițierea în atac, fără acoperire, este tocmai ceea ce textul interzice.']],
 8,'Patru praguri (750 mg, 360, 300, o lună); distractorul încalcă regula de a nu începe alopurinolul în atac.',['750 mg imediat','360 pmol/L']),

q(37,['Artropatia prin depunere de pirofosfat de calciu (PFCD):',
 ['Este a treia cea mai frecventă artrită inflamatorie; atacul mimează guta, dar este mai frecvent la femei în vârstă și afectează de obicei genunchiul sau carpul','Diagnosticul se face prin cristale romboidale cu birefringență pozitivă slabă sau prin calcificarea cartilajului','Este mai frecventă la bărbații tineri și afectează tipic MTF1, ca guta clasică','Cristalele sunt aciculare, cu birefringență negativă puternică, identice uratului','Există un tratament specific care elimină cristalele de PFCD, de primă intenție'],'AB',454,'Artropatie prin depunere de PFCD',
 'Diferențierea terenului (femeie vârstnică, genunchi/carp) și a cristalului romboidal slab pozitiv de uratul acicular.',
 ['Terenul și sediile genunchi/carp sunt din paragraf.','Morfologia și calcificarea sunt criteriile diagnostice.','MTF1 la bărbatul tânăr este guta, nu PFCD.','Acicular negativ este uratul; PFCD este romboidal slab pozitiv.','Nu există tratament de eliminare a cristalelor.']],
 8,'Distractorii atribuie PFCD epidemiologia și morfologia cristalului de urat din pagina anterioară.',['birefringeţă pozitivă slabă','femeile în vârstă']),

q(38,['Identificați afirmația corectă referitoare la investigațiile din LES:',
 ['VSH-ul este crescut în raport cu activitatea bolii, pe când PCR este de obicei normală, putând crește în pleurezie lupică, peritonită, artrită sau infecție coexistentă','PCR urmărește liniar activitatea lupică, iar VSH-ul rămâne normal în puseu','Leucocitoza cu neutrofilie este hemograma tipică de puseu, limfopenia fiind rară','C3 și C4 cresc în boala activă, ca reactanți de fază acută','ANA lipsește de regulă; diagnosticul se bazează doar pe anti-ADNdc'],'A',457,'Lupus eritematos sistemic — Investigații',
 'Contrastarea VSH crescut / PCR de obicei normală, cu excepțiile (serozită, artrită, infecție).',
 ['Disociația VSH/PCR și excepțiile sunt enunțate explicit.','Relația este inversă: PCR nu urmărește liniar puseul.','Hemograma poate arăta leucopenie, limfopenie și/sau trombocitopenie.','C3 și C4 sunt adesea scăzute în boala activă.','ANA și anti-ADNdc, anti-Ro, anti-Sm, anti-La sunt semnificativi.']],
 8,'Distractorii inversează disociația VSH/PCR și direcția complementului, două capcane clasice din același paragraf.',['PCR este de obicei normală','anti-ADNdc']),
];
