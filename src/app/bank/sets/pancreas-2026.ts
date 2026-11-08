import {set2026} from '../set-author';

// Set 2026 · Pancreasul (Lawrence, cap. 17). P. 264 (Tabelul 17-4, criteriile Ranson) was asked
// four times in 2023–2025 and had three bank questions; these items test the parts of the
// table they left out: the 48-hour column, the gallstone column and the timing.
const PA='Pancreatita acută';

export const PANCREAS_2026=set2026('pancreas',[
[['Conform Tabelului 17-4, criteriile Ranson evaluate în primele 48 de ore includ:',
 ['scăderea hematocritului cu peste 10%','calcemia sub 8 mg/dl','PaO2 sub 60 mmHg','leucocitele peste 16.000/mm³','vârsta peste 55 de ani'],'ABC',264,PA,
 'Separarea criteriilor Ranson de la internare de cele evaluate în următoarele 48 de ore.',
 ['Scăderea hematocritului cu peste 10% este un criteriu al primelor 48 de ore.','Hipocalcemia sub 8 mg/dl este un criteriu al primelor 48 de ore.','Hipoxemia sub 60 mmHg este un criteriu al primelor 48 de ore.','Nu: leucocitoza peste 16.000/mm³ este un criteriu de la internare.','Nu: vârsta peste 55 de ani este un criteriu de la internare.']],
 'Distractorii sunt criteriile de la internare.',['Ranson','48 de ore']],
[['În pancreatita acută biliară, pragurile Ranson de la internare (Tabelul 17-4) sunt:',
 ['vârsta peste 70 de ani','leucocite peste 18.000/mm³','LDH peste 350 UI/l','vârsta peste 55 de ani','leucocite peste 16.000/mm³'],'AB',264,PA,
 'Coloana biliară a criteriilor Ranson, cu praguri mai mari decât coloana non-biliară.',
 ['În pancreatita biliară pragul de vârstă este 70 de ani.','În pancreatita biliară pragul leucocitar este 18.000/mm³.','Nu: 350 UI/l este pragul LDH al coloanei non-biliare; în pancreatita biliară pragul este mai mare.','Nu: 55 de ani este pragul de vârstă al pancreatitei non-biliare.','Nu: 16.000/mm³ este pragul leucocitar al pancreatitei non-biliare.']],
 'Distractorii sunt pragurile coloanei non-biliare.',['Ranson','biliară']],
[['Al doilea set de criterii Ranson se evaluează în primele:',
 ['48 de ore','6 ore','12 ore','72 de ore','7 zile'],'A',264,PA,
 'Momentul celor două evaluări din scorul Ranson.',
 ['Cinci criterii se evaluează la internare, iar restul în primele 48 de ore.','Nu: evaluarea a doua se face în primele 48 de ore.','Nu: evaluarea a doua cuprinde primele 48 de ore.','Nu: fereastra scorului Ranson este de 48 de ore.','Nu: scorul se completează în primele 48 de ore.']],
 'Distractorii schimbă fereastra de evaluare.',['Ranson','48 de ore']],
]);
