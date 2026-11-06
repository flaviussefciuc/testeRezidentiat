// Diacritic- and case-insensitive text for matching Romanian queries.
export const fold=(s:string)=>s.toLocaleLowerCase('ro').normalize('NFD').replace(/\p{Diacritic}/gu,'');
