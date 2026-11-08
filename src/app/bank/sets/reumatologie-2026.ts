import {set2026} from '../set-author';

// Set 2026 · Reumatologie (Kumar & Clark, cap. 18). P. 457 (lupusul eritematos sistemic) was
// asked twice in 2023–2025; the bank covered investigations and treatment there, not the
// autoantibodies or drug-induced lupus.
const L='Lupus eritematos sistemic';

export const REUMATOLOGIE_2026=set2026('reumatologie',[
[['Autoanticorpii în lupusul eritematos sistemic:',
 ['anticorpii antinucleari apar la majoritatea pacienților (circa 95%)','anticorpii anti-ADN dublu catenar sunt specifici bolii','anticorpii anti-Ro se asociază cu lupusul neonatal și blocul cardiac congenital','anticorpii antinucleari negativi confirmă diagnosticul','anticorpii anti-histone sunt markerul lupusului idiopatic'],'ABC',457,L,
 'Sensibilitatea și specificitatea autoanticorpilor din LES.',
 ['ANA sunt foarte sensibili: un rezultat negativ face diagnosticul puțin probabil.','Anti-ADN dublu catenar sunt specifici LES și urmăresc activitatea, mai ales renală.','Anti-Ro traversează placenta și pot produce lupus neonatal și bloc atrioventricular congenital.','Nu: ANA negativi fac diagnosticul de LES puțin probabil.','Nu: anticorpii anti-histone caracterizează lupusul indus medicamentos.']],
 'Distractorii confundă sensibilitatea cu specificitatea și lupusul medicamentos cu cel idiopatic.',['anticorpi antinucleari','anti-ADN']],
[['Lupusul indus medicamentos:',
 ['hidralazina și procainamida sunt cauze clasice','anticorpii anti-histone sunt caracteristici','se remite de obicei după oprirea medicamentului','izoniazida și minociclina îl pot declanșa','afectarea renală și a SNC este frecventă'],'ABCD',457,L,
 'Recunoașterea lupusului indus medicamentos și deosebirea lui de LES idiopatic.',
 ['Hidralazina și procainamida sunt cauzele clasice, legate de acetilarea lentă.','Anticorpii anti-histone sunt prezenți la majoritatea pacienților.','Boala se remite de regulă după oprirea medicamentului.','Izoniazida și minociclina sunt alte cauze cunoscute.','Nu: afectarea renală și neurologică este rară, spre deosebire de LES idiopatic.']],
 'Distractorul atribuie formei medicamentoase afectarea renală a LES.',['lupus indus medicamentos','hidralazină']],
]);
