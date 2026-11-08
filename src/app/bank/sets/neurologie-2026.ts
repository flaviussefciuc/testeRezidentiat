import {set2026} from '../set-author';

// Set 2026 · Neurologie (Kumar & Clark, cap. 26). P. 839 (atacul ischemic tranzitoriu) was asked
// three times in 2023–2025; the bank covered amaurosis fugax and the ABCD2 score there.
const AVC='Accidentul vascular cerebral';

export const NEUROLOGIE_2026=set2026('neurologie',[
[['Simptomele care indică un AIT în teritoriul vertebro-bazilar:',
 ['diplopie, vertij și disartrie','ataxie și tetrapareză tranzitorie','amauroză fugace monoculară','afazie cu hemipareză dreaptă','neglijare spațială stângă'],'AB',839,AVC,
 'Deosebirea simptomelor vertebro-bazilare de cele carotidiene în AIT.',
 ['Trunchiul cerebral și cerebelul produc diplopie, vertij și disartrie.','Ataxia și deficitul motor bilateral indică trunchiul cerebral.','Nu: amauroza fugace monoculară ține de artera oftalmică, ram al carotidei interne.','Nu: afazia indică emisferul dominant, irigat de artera cerebrală medie (teritoriu carotidian).','Nu: neglijarea spațială indică lobul parietal drept, din teritoriul carotidian.']],
 'Distractorii sunt simptome din teritoriul carotidian.',['vertebro-bazilar','amauroză fugace']],
[['Atacul ischemic tranzitoriu:',
 ['deficitul se remite de obicei în mai puțin de o oră','imagistica nu arată un infarct acut','riscul de accident vascular este maxim în primele zile','definiția admite simptome care durează până la 7 zile','nu necesită investigații dacă simptomele s-au remis'],'ABC',839,AVC,
 'Definiția tisulară a AIT și urgența investigării.',
 ['Majoritatea episoadelor durează minute, mult sub o oră.','Definiția actuală cere absența infarctului la imagistică.','Riscul de AVC este cel mai mare în primele zile după AIT, de aceea evaluarea este urgentă.','Nu: simptomele care durează zile corespund unui accident vascular constituit.','Nu: AIT impune investigare urgentă (carotide, ritm, factori de risc).']],
 'Distractorii prelungesc durata și minimalizează riscul.',['atac ischemic tranzitoriu','ABCD2']],
]);
