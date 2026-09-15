import {advancedQuestion} from './advanced-author';
import type {SourceRow} from './source-author';

const EDITION="Chirurgie generală și specialități chirurgicale, ediția pentru rezidențiat MG 2025";
const pdfOffset=(p:number)=>p-55;
const q=(n:number,row:SourceRow,score:number,reason:string,expressions:string[],related:number[]=[])=>
 advancedQuestion('infectii-chir',8,pdfOffset,`infectii-chir-adv-${String(n).padStart(3,'0')}`,row,[score,reason],expressions,undefined,related,'Lawrence',EDITION);

export const INFECTII_CHIR_D=[
q(36,['După controlul adecvat al sursei primare în infecția intra-abdominală, durata antibioterapiei:',
 ['Nu trebuie să fie mai lungă de 2 zile de la încetarea febrei și a leucocitozei','Se prelungește 14 zile de principiu, independent de defervescență','Se oprește la incizie, analog profilaxiei herniei curate','Se ghidează doar după PCR, febra fiind ignorată','Cere oxigen hiperbar ca substitut al controlului sursei'],'A',78,'Infecții intra-abdominale — Durata după defervescență',
 'Recunoașterea limitei de 2 zile după dispariția febrei și leucocitozei, distinctă de STOP-IT (4 zile) din același paragraf.',
 ['Textul fixează durata la cel mult 2 zile de la încetarea febrei și leucocitozei după controlul sursei.','14 zile neselectiv contrazice limita citată.','Hernia curată nu dictează durata curativă intra-abdominală.','Febra și leucocitoza sunt tocmai reperul de oprire.','Controlul sursei rămâne pasul esențial; OHB nu îl înlocuiește.']],
 8,'Permutează fereastra de 2 zile după defervescență cu 14 zile sau cu STOP-IT, două durate din același capitol.',['2 zile de la','încetarea febrei']),

q(37,['Diagnosticul microbiologic și terapia empirică în PAV includ:',
 ['Cultură cantitativă pozitivă: ≥10⁴ UFC/mL la lavajul bronhoalveolar și ≥10³ CFU/mL la periajul bronșic protejat','Pacienții spitalizați sub 5 zile au risc scăzut de germeni rezistenți; acoperirea vizează S. aureus și Gram-negativi','Spitalizare >5 zile, imunodepresie sau SDRA impun acoperire MRSA și Pseudomonas; 7 zile de antibiotic specific sunt suficiente la majoritatea','O cultură negativă din aspiratul endotraheal are valoare predictivă negativă foarte puternică; sub pragul cantitativ, empiricul se oprește','Empiricul se continuă 21 de zile chiar la culturi negative, spitalizarea sub 5 zile impunând MRSA de principiu'],'ABCD',79,'PAV — Praguri 10⁴/10³, fereastra de 5 zile și cura de 7 zile',
 'Aplicarea pragurilor cantitative, a riscului de rezistență după 5 zile și a duratei de 7 zile, versus continuarea neselectivă.',
 ['Pragurile BAL ≥10⁴ și periaj ≥10³ sunt explicite.','Fereastra <5 zile cu spectru S. aureus/GNN este enunțată.','MRSA/Pseudomonas peste 5 zile/SDRA și cele 7 zile sunt citate.','VPN-ul aspiratului negativ și oprirea empiricului sub prag sunt descrise.','Textul cere oprirea la culturi negative și 7 zile, nu 21; <5 zile nu impune MRSA.']],
 8,'Inversează fereastra <5 zile (fără MRSA) cu acoperirea MRSA și prelungește cura de 7 zile la 21.',['7 zile','periajul bronşic']),

q(38,['Manifestările precoce ale infecțiilor necrozante de țesuturi moi includ:',
 ['Durere disproporționată față de aspectul leziunii','Edem care depășește eritemul, desensibilizare tegumentară, epidermoliză și decolorare; leucocitoza și hiponatremia pot susține suspiciunea','Emfizemul de țesuturi moi este detectat doar la 39% dintre pacienți, absența lui neexcluzând INTM; explorarea chirurgicală este adesea necesară','Bulele, crepitațiile și gangrena dermică sunt semne precoce, hiponatremia infirmând diagnosticul','Emfizemul radiologic este sine qua non pentru diagnostic, explorarea fiind superfluă'],'ABC',79,'INTM — Durere disproporționată și emfizem la 39%',
 'Contrastarea durerii disproporționate și a semnelor precoce de hiponatremia/leucocitoză față de emfizemul inconstant (39%).',
 ['Durerea disproporționată este descrisă ca cel mai caracteristic simptom.','Edemul extra-eritematos, desensibilizarea și perechea leucocitoză-hiponatremie sunt listate.','Cifra 39% și necesitatea explorării sunt de pe pagina următoare.','Bulele și crepitațiile sunt manifestări tardive, asociate sepsisului.','Absența emfizemului nu exclude INTM; explorarea rămâne adesea necesară.']],
 8,'Transformă semnele tardive (bule, crepitații) în criterii precoce și face din emfizemul de 39% un sine qua non.',['disprop011ionată','39% dintre pacienţi'],[80]),

q(39,['Eritemul care nu dispare la digitopresiune, în gangrena streptococică necrotizantă, indică:',
 ['Tromboza subdermică a vascularizației nutritive tegumentare','Celulită streptococică simplă, tratată doar cu pansamente calde','Hidrosadenită apocrină axilară, fără debridare','Limfangită cu striuri, fără risc de necroză','Colonizare de Pasteurella după mușcătură de pisică'],'A',80,'INTM — Eritem neresponsiv la digitopresiune',
 'Recunoașterea eritemului care nu dispare la digitopresiune ca semn de tromboză subdermică, nu de celulită banală.',
 ['Textul leagă explicit eritemul neresponsiv de tromboza subdermică a vaselor nutritive.','Celulita simplă dispare la digitopresiune și răspunde la penicilină, fără acest semn.','Hidrosadenita este o entitate tabelată distinctă, apocrină.','Limfangita are striuri limfatice, nu tromboză subdermică.','Pasteurella ține de mușcătura animală, nu de această gangrenă.']],
 8,'Confundă semnul de tromboză subdermică cu celulita care dispare la presiune, două entități alăturate.',['digitopresiune','tromboza subdem']),

q(40,['În INTM cu suspiciune de streptococ de grup A, antibioterapia include:',
 ['Penicilină în doze mari','Un inhibitor al sintezei proteice, precum clindamicina, folosit teoretic pentru a reduce producția de toxine','Oxigen hiperbar ca substitut al debridării','Vancomicină fără acoperire anaerobă, SGA fiind rezistent la penicilină','Metronidazol izolat, identic abcesului amebian'],'AB',80,'INTM — Penicilină în doză mare și clindamicină antitoxină',
 'Asocierea penicilinei în doză mare cu clindamicina ca inhibitor de sinteză proteică, versus OHB ca substitut.',
 ['Penicilina în doze mari la suspiciune de SGA este explicită.','Clindamicina ca inhibitor al sintezei proteice, cu efect teoretic antitoxinic, este citată.','OHB este adjuvant, nu substitut al debridării.','SGA rămâne sensibil la penicilină; acoperirea INTM include și anaerobi/MRSA.','Metronidazolul izolat nu este schema SGA.']],
 8,'Înlocuiește penicilina plus clindamicina cu OHB ca monoterapie, ignorând mecanismul antitoxinic.',['sintezei proteice','penicilina în doze']),

q(41,['Abcesul mamar, dincolo de etiologia stafilococică, se caracterizează prin:',
 ['Vârsta de gestație >41 de săptămâni figurează printre factorii de risc','Drenajul chirurgical, acceptat ca primă intenție, asociază rezultat cosmetic mai prost și rată mai mare de fistule de duct mamar','Tegumentul supraiacent compromis sau eșecul aspirației seriate impun drenaj chirurgical','Alăptarea se întrerupe de principiu, fistulele contraindicând orice lactație','Factorii de risc exclud vârsta gestațională avansată, fistulele fiind absente după drenaj'],'ABC',81,'Abcesul mamar — Gestație >41 săptămâni și fistula ductală',
 'Adăugarea pragului >41 de săptămâni și a prețului cosmetic/fistulos al drenajului chirurgical, versus oprirea lactației.',
 ['Pragul >41 de săptămâni este listat printre factorii de risc.','Rezultatul cosmetic inferior și fistulele de duct sunt explicite.','Tegumentul compromis și eșecul aspirației sunt indicațiile de drenaj chirurgical.','Mamele care alăptează sunt încurajate să continue.','Vârsta gestațională >41 de săptămâni este tocmai un factor listat; fistulele sunt o complicație a drenajului.']],
 8,'Omită pragul >41 de săptămâni și inversează indicația de a continua lactația, două detalii din același paragraf.',['>41 de săptămâni','fistule de duct mamar']),

q(42,['Infecțiile spațiilor profunde ale mâinii se recunosc prin:',
 ['Infecția spațiului tenar: durere și tumefacție a eminenței tenare, policele ținut în abducție pentru a reduce durerea','Abcesul compartimentului palmar: pierderea concavității normale prin tumefacție dureroasă în tensiune a palmei','Policele se menține în adducție forțată, concavitatea palmară fiind accentuată','Panarițiul unghial se tratează prin deschiderea tecii pe toată lungimea, identic tenosinovitei','Spațiul hipotenar este scutit de infecție, abducția policeului fiind un semn de vindecare'],'AB',82,'Infecțiile mâinii — Tenar (abducție) versus palmar (concavitate)',
 'Diferențierea abducției antalgice a policeului (tenar) de pierderea concavității palmare, versus tenosinovită/panarițiu.',
 ['Abducția policeului în infecția tenară este explicită.','Pierderea concavității palmare este semnul abcesului palmar.','Textul descrie abducție, nu adducție; concavitatea se pierde, nu se accentuează.','Deschiderea tecii definește tenosinovita, nu panarițiul unghial.','Spațiul hipotenar poate prezenta, rar, tumefacție și durere la mobilizare.']],
 8,'Inversează abducția tenară cu adducția și confundă pierderea concavității palmare cu tenosinovita.',['abducţie','concavităţii']),

q(43,['Angiocolita obstructivă, dincolo de triada Charcot, se caracterizează prin:',
 ['Adăugarea hipotensiunii și a alterării stării mentale definește pentada Reynolds','Drenajul prompt al căii biliare plus antibiotice empirice sistemice sunt imperative','Calea poate fi drenată endoscopic (ERCP cu extracție și sfincterotomie Oddi), prin colangio-cateter transhepatic percutanat sau chirurgical','Colecistectomia se realizează odată ce patologia septică a fost corectată','Pentada înlocuiește resuscitarea volemică, colecistectomia fiind primul gest în șoc'],'ABCD',82,'Angiocolită — Pentada Reynolds și căile de drenaj',
 'Completarea triadei Charcot cu pentada Reynolds și ierarhia ERCP/transhepatic/chirurgie, plus colecistectomia după controlul sepsiei.',
 ['Hipotensiunea și alterarea mentală ca plus față de Charcot sunt explicite.','Drenajul prompt și antibioticele sunt imperative.','Cele trei căi de drenaj sunt enumerate.','Colecistectomia după corectarea sepsiei este enunțată.','Resuscitarea volemică agresivă este cerută în șoc; colecistectomia nu este primul gest.']],
 8,'Pune colecistectomia înaintea drenajului căii și anulează pentada Reynolds, două trepte din același algoritm.',['pentada Reynold','sfincterotomie']),

q(44,['Perforația colonică, pe CT și în forma localizată, se caracterizează prin:',
 ['CT poate descrie îngroșarea peretelui, densificarea grăsimii mezenterice, pneumatoză intestinală, colecții pericolonice și pneumoperitoneu','Anumiți pacienți cu perforație localizată, inclusiv mezocolonică, pot fi gestionați inițial conservator, cu condiția drenajului adecvat','Perforațiile colonului necesită, de regulă, rezecția segmentului perforat și devierea tranzitului','Pneumatoza infirmă perforația, managementul conservator fiind regula în peritonita difuză cu șoc','Devierea tranzitului este superfluă, antibioticele izolând perforația colonică virulentă'],'ABC',84,'Perforația colonică — Semne CT și perforația mezocolonică',
 'Integrarea semnelor CT (inclusiv pneumatoza) cu excepția conservatoare a perforației localizate/mezocolonice.',
 ['Cele cinci semne CT sunt enumerate.','Excepția perforației localizate/mezocolonice cu drenaj este explicită.','Rezecția plus devierea este conduita uzuală.','Pneumatoza este un semn CT de perforație, nu o infirmare; forma difuză cu șoc cere chirurgie.','Antibioticele nu înlocuiesc rezecția și deturnarea.']],
 8,'Transformă pneumatoza într-un semn de liniștire și generalizează conservatorul asupra peritonitei difuze.',['pneumatoza intestinală','mezocolonică'],[83]),

q(45,['Pneumonia asociată spitalizării și cea asociată ventilatorului, împreună:',
 ['Reprezintă 22% din totalul infecțiilor dobândite în spital, ceea ce le face cele mai frecvente infecții nosocomiale','Aproximativ 10% dintre pacienții care necesită ventilație mecanică sunt diagnosticați cu PAV, rata nescăzând în ultimul deceniu','Reprezintă 5% din nosocomiale, identic incidenței globale la internați','PAV apare la 50% dintre ventilați, analog plăgilor murdare','IPC rămâne cea mai frecventă nosocomială, PAV fiind rară sub 1%'],'AB',79,'HAP/PAV — Pondere 22% și incidență 10% la ventilați',
 'Fixarea ponderii de 22% (cea mai frecventă nosocomială) și a ratei de 10% la ventilați, versus 5% sau 50%.',
 ['Cifra 22% și statutul de cele mai frecvente nosocomiale sunt explicite.','Cei 10% dintre ventilați și stagnarea ratei sunt citați.','5% este incidența nosocomială globală la internați, nu ponderea HAP/PAV.','50% este riscul plăgilor murdare, nu al PAV.','Textul plasează HAP/PAV înaintea IPC ca nosocomială cea mai frecventă.']],
 8,'Permutează 22% (HAP/PAV) cu 5% (nosocomial global) și 50% (plagă murdară), trei procente din capitol.',['22% din toatalul','Aproximativ 10%']),
];
