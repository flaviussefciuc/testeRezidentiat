import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-58;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('arsuri',10,pdfOffset,`arsuri-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const ARSURI_ADVANCED=[
q(1,['Arsurile epidermice (de grad I) se caracterizează prin:',
 ['Zone hiperemice, dureroase, care se albesc la digitopresiune, fără flictene, și se vindecă fără cicatrice','Escară avasculară uscată și nedureroasă, prin distrugerea terminațiilor nervoase','Textură uscată, îngroșată, alb-cerată, cu durere redusă prin distrugerea multor terminații nervoase dermice','Necesitatea grefării pentru leziunile extensive, deoarece anexele epidermale sunt distruse','Formarea de cicatrici hipertrofice chiar și atunci când vindecarea survine în câteva zile'],'A',108,'Fiziopatologia leziunilor din arsură — Profunzime',
 'Diferențierea arsurii epidermice (fără flictene, fără cicatrice) de arsura de grosime parțială profundă și de cea de toată grosimea.',
 ['Dilatația capilarelor dermice, albeața la presiune, absența flictenelor și vindecarea fără cicatrice sunt descrise pentru arsurile epidermice.','Escară avasculară uscată și nedureroasă definește arsura de toată grosimea (grad III).','Aspectul alb-ceros cu durere redusă aparține arsurilor de profunzime parțială profundă.','Grefarea pentru leziuni extensive cu anexe distruse se referă la arsurile de toată grosimea.','Arsurile epidermice se vindecă în câteva zile, fără cicatrice, deoarece cicatrizarea apare în derm.']],
 8,'Distractorii mută semnele gradului II profund și III asupra arsurii epidermice, o confuzie clasică de evaluare a profunzimii.',['Arsurile epidermice','digitopresiune'],[109]),

q(2,['Alegeți afirmațiile corecte referitoare la intoxicația cu monoxid de carbon la ars:',
 ['Intoxicația cu CO este principala cauză de deces imediat la pacienții arși în incendii din clădiri','Puls-oximetria nu detectează intoxicația cu CO cu acuratețe; este necesară determinarea arterială a gazelor cu măsurarea directă a saturației hemoglobinei','Tratamentul constă în ventilație cu oxigen 100%, începută cât mai precoce','Concentrațiile de COHb de 0–10% produc comă și convulsii intermitente','Terapia cu oxigen hiperbar crește timpul de înjumătățire a COHb de la 20 de minute la 80 de minute'],'ABC',110,'Leziuni inhalatorii — Intoxicația cu monoxid de carbon',
 'Recunoașterea limitelor puls-oximetriei și a oxigenului 100% ca tratament de primă linie, față de pragurile COHb și de efectul OHB.',
 ['Textul identifică CO ca principala cauză de deces imediat în incendii de clădiri.','Limita puls-oximetriei și necesitatea gazelor arteriale cu saturație directă sunt explicite.','Ventilația cu O2 100%, ideal înainte de spital, este tratamentul descris.','Intervalul 0–10% este asimptomatic (până la 10% la fumători); coma apare la 50–60%.','OHB reduce timpul de înjumătățire de la 80 de minute (1 atmosferă) la aproximativ 20 de minute, nu invers.']],
 8,'Inversează tabelul COHb și direcția efectului oxigenului hiperbar asupra timpului de înjumătățire.',['carboxihemoglobină','oxigen 100%'],[111]),

q(3,['Formula Consensus pentru resuscitarea lichidiană în arsuri:',
 ['Necesarul de Ringer lactat în primele 24 de ore este 2–4 mL × greutatea (kg) × %SCT arsă','Jumătate din volumul calculat se administrează în primele 8 ore de la arsură','Coloizii sunt soluția de primă intenție, deoarece capilarele rămân impermeabile pentru proteine în primele ore','Diureticele sunt tratamentul de elecție când debitul urinar scade în timpul resuscitării','Formulele fixează un volum neschimbat pe 24 de ore, care nu se mai ajustează după diureză sau semne vitale'],'AB',115,'Perioada de resuscitare — Formula Consensus',
 'Aplicarea formulei 2–4 mL/kg/%SCT cu jumătate din volum în primele 8 ore și a principiului de a nu începe cu coloizi.',
 ['Formula 2–4 mL Ringer lactat × kg × %SCT este enunțată explicit.','Administrarea jumătății din volum în primele 8 ore este un principiu al formulei.','Capilarele sunt permeabile pentru proteine în primele ore, deci coloizii nu se folosesc inițial.','La scăderea diurezei se crește rata de fluide; majoritatea experților nu folosesc diuretic în această etapă.','Principiul E precizează că formulele indică doar de unde începe resuscitarea, ghidată ulterior de diureză, semne vitale și status mental.']],
 8,'Inversează rolul coloizilor și al diureticelor și tratează formula ca volum fix, neatins de răspunsul clinic.',['Ringer lactat','primele 8 ore'],[114]),

q(4,['Conform criteriilor de transfer către centrul de arsuri, se îndrumă pacientul cu:',
 ['Arsură de profunzime parțială cu peste 10% SCT','Arsură de profunzime parțială de 4% SCT, limitată la abdomen, la adultul tânăr fără comorbidități','Arsură solară extensivă, limitată la epiderm, fără alte leziuni','Arsură de grad I a umărului, fără implicarea articulațiilor majore','Arsură minoră a trunchiului, sub 5% SCT, la adultul sănătos'],'A',114,'Transferul către centrul de arsuri',
 'Aplicarea pragului >10% SCT pentru arsura de profunzime parțială ca criteriu de transfer, distinct de arsurile epidermice sau mini-leziunile de trunchi.',
 ['Primul criteriu din tabel este arsura de profunzime parțială cu >10% SCT.','4% SCT abdominală la adult sănătos nu îndeplinește criteriile tabelate.','Arsura solară este adesea limitată la epiderm și nu figurează ca criteriu de transfer.','Arsurile de grad I nu sunt listate ca indicație de transfer.','Arsura <5% a trunchiului la adult nu întrunește criteriile de centrul de arși.']],
 8,'Distractorii coboară pragul de 10% sau confunda arsura epidermică cu indicația de centru de arși.',['> 10% SCT','Criteriile de transfer']),

q(5,['Indicați afirmațiile corecte despre escarotomie la arsul cu leziuni circumferențiale:',
 ['Escarotomia este tratamentul circulației compromise prin arsură circumferențială, prin incizia escarei rigide','Escarotomiile nu reduc edemul, ci tratează compresia produsă de edemul acumulat sub suprafața inextensibilă','Când arsurile de la extremități sunt foarte profunde, pot fi necesare fasciotomii, mai ales în leziunile prin curent de înalt voltaj','Escarotomia restabilește circulația prin reducerea formării de edem în primele 8 ore','Escarotomiile toracice sunt inutile, deoarece edemul nu compromite mecanica respiratorie'],'ABC',116,'Resuscitarea — Escarotomia',
 'Diferențierea escarotomiei (eliberarea escarei) de fasciotomie și de mitul că incizia reduce edemul însuși.',
 ['Indicația (circulație compromisă în arsură circumferențială) și mecanismul (incizia escarei) sunt explicite.','Textul subliniază că escarotomiile nu reduc edemul, ci compresia sub escara inextensibilă.','Fasciotomia în arsuri foarte profunde, mai ales electrice de înalt voltaj, este menționată.','Escarotomia nu oprește formarea edemului; edemul continuă sub escara deja incizată.','Escarotomiile toracice sunt indicate când compresia afectează abdomenul și toracele, cu disfuncție respiratorie.']],
 8,'Inversează efectul asupra edemului și neagă indicația toracică, două confuzii tehnice frecvente.',['Escarotomia','fasciotomii']),

q(6,['Leziunile inhalatorii la pacientul ars se pot manifesta sub forma:',
 ['Intoxicației cu monoxid de carbon','Arsurilor de căi aeriene superioare, produse de căldură, cu edem progresiv în primele 24 de ore','Leziunilor „adevărate” ale căilor respiratorii inferioare prin fum, adesea silențioase 24–48 de ore','Intoxicației cu cianură, recunoscută prin alcaloză metabolică care răspunde rapid la cristaloizi','Unui singur tablou clinic, prezent de la locul accidentului, fără evoluție tardivă'],'ABC',110,'Fiziopatologia leziunilor inhalatorii',
 'Recunoașterea celor trei forme (CO, căi superioare termice, căi inferioare chimice) și a ferestrei de latență de 24–48 de ore.',
 ['CO este prima formă descrisă.','Arsurile de căi superioare sunt termice, cu tumefacție progresivă în 24 de ore.','Leziunile inferioare prin fum pot fi asimptomatice 24–48 de ore.','Cianura produce acidoză metabolică persistentă care nu răspunde la resuscitare lichidiană, nu alcaloză.','Cele trei forme pot fi simultane sau izolate, iar edemul și leziunea inferioară evoluează în timp.']],
 8,'Înlocuiește acidoza refractară din intoxicația cu cianură cu alcaloză și anulează latența de 24–48 de ore.',['Leziunile inhalatorii','24 de ore'],[111,112]),

q(7,['La victima electrocuției de înaltă tensiune cu mioglobinurie, diureza-țintă până la limpezirea urinii este de:',
 ['100 mL/oră sau mai mare','30 mL/oră, identică țintei din formula Consensus la adultul ars neelectric','1–1,5 mL/kg/oră, fără prag absolut','0,5 mL/kg/oră, pentru a limita resuscitarea excesivă','50 mL/oră, pragul de la care se introduc diuretice de rutină'],'A',120,'Leziuni electrice — Rabdomioliză',
 'Aplicarea țintei de 100 mL/oră pentru clearance-ul mioglobinei, distinctă de diureza de 30 mL/oră a resuscitării Consensus.',
 ['Textul cere producție de urină de 100 mL/oră sau mai mare până la limpezirea urinii sau remiterea mioglobinuriei.','30 mL/oră este ținta Consensus pentru adultul ars, nu pentru mioglobinuria electrică.','1–1,5 mL/kg/oră este ținta pediatrică din resuscitarea arsurii termice.','0,5 mL/kg/oră subestimează necesarul din rabdomioliză.','Bicarbonatul și manitolul nu s-au dovedit eficienți în studii prospective; nu se introduc de rutină la 50 mL/oră.']],
 8,'Distractorii substituie ținta de 100 mL/oră cu pragurile Consensus (30 mL/oră) sau pediatrice.',['100 mL/oră','mioglobinuria']),

q(8,['Selectați enunțurile adevărate despre excizia precoce și controlul infecției în arsuri:',
 ['Majoritatea centrelor optează pentru excizia precoce a pielii arse până în țesutul sănătos subiacent','Excizia tangențială produce sângerare semnificativă, dar rezultate cosmetice și funcționale adesea superioare exciziei fasciale','Acoperirea permanentă a unei leziuni excizate se realizează cu pielea proprie a pacientului (autogrefă)','Nitratul de argint s-a dovedit eficient în controlul infecțiilor cu stafilococ și streptococ','Pneumonia a fost înlocuită de sepsisul de plagă ca cea mai comună infecție a arșilor spitalizați'],'ABCD',117,'Excizia leziunilor și managementul infecției',
 'Diferențierea exciziei fasciale de cea tangențială și recunoașterea autogrefei ca unică acoperire permanentă, plus rolul nitratului de argint.',
 ['Opțiunea pentru excizia precoce până în țesut sănătos este explicită.','Contrastul sângerare vs rezultat cosmetic între tangențială și fascială este descris.','Doar autogrefa asigură acoperire permanentă.','Nitratul de argint este prezentat ca eficient pe Staphylococcus și Streptococcus.','După controlul infecției de plagă, pneumonia este actualmente una dintre cele mai comune infecții, nu invers.']],
 8,'Inversează ierarhia actuală infecție de plagă vs pneumonie, pe fondul distincției fascial/tangențial.',['excizia precoce','autogrefă'],[118]),
];
