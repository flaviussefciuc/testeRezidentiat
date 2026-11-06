// Highlights the words that decide a question: polarity (the question asks for the
// false option or the exception) and qualifiers that narrow the answer. Misreading
// them is one of the commonest ways to lose points in a timed exam.
export interface Seg {t:string;k:'neg'|'qual'|null}
const NEG=[String.raw`cu\s+excep[țt]ia`,String.raw`excep[țt]ia`,String.raw`este\s+fals[ăa]?(?=\s*[:?]?\s*$)`,String.raw`sunt\s+false`,String.raw`afirma[țt]ia\s+fals[ăa]`,String.raw`afirma[țt]iile\s+false`,String.raw`incorect[ăe]?`,String.raw`gre[șs]it[ăe]?`,String.raw`NU`,String.raw`nu\s+(?:este|sunt|se|reprezint[ăa]|include|apare|apar|caracterizeaz[ăa]|face\s+parte|poate|trebuie|corespunde)`];
const QUAL=[String.raw`cel\s+mai\s+(?:frecvent|probabil|important|sensibil|specific|util|precoce|rar|eficient|grav|caracteristic)`,String.raw`cea\s+mai\s+(?:frecvent[ăa]|probabil[ăa]|important[ăa]|sensibil[ăa]|specific[ăa]|util[ăa]|precoce|rar[ăa]|eficient[ăa]|grav[ăa]|caracteristic[ăa])`,String.raw`cele\s+mai\s+(?:frecvente|importante|probabile|caracteristice)`,String.raw`(?:de\s+)?prim[ăa]\s+inten[țt]ie`,String.raw`de\s+prim[ăa]\s+linie`,String.raw`de\s+elec[țt]ie`,String.raw`patognomonic[ăe]?`,String.raw`obligatoriu`,String.raw`[îi]ntotdeauna`,String.raw`niciodat[ăa]`,String.raw`doar`,String.raw`numai`,String.raw`exclusiv`,String.raw`ini[țt]ial[ăe]?`,String.raw`precoce`,String.raw`tardiv[ăe]?`,String.raw`contraindica[țt]i[ae]?`,String.raw`contraindicat[ăe]?`,String.raw`absolut[ăe]?`,String.raw`relativ[ăe]?`];
const word=(p:string)=>String.raw`(?<![\p{L}\p{N}])(?:${p})(?![\p{L}\p{N}])`;
// "NU" is matched only in capitals; everything else ignores case.
const NEG_RE=new RegExp(NEG.filter(p=>p!=='NU').map(word).join('|'),'giu');
const NU_RE=new RegExp(word('NU'),'gu');
const QUAL_RE=new RegExp(QUAL.map(word).join('|'),'giu');

export function emphasize(text:string):Seg[]{
 const marks:('neg'|'qual'|null)[]=new Array(text.length).fill(null);
 const paint=(re:RegExp,k:'neg'|'qual')=>{re.lastIndex=0;let m;while((m=re.exec(text))){for(let i=m.index;i<m.index+m[0].length;i++)if(marks[i]!=='neg')marks[i]=k;}};
 paint(QUAL_RE,'qual');paint(NEG_RE,'neg');paint(NU_RE,'neg');
 const out:Seg[]=[];for(let i=0;i<text.length;i++){const last=out[out.length-1];if(last&&last.k===marks[i])last.t+=text[i];else out.push({t:text[i],k:marks[i]});}
 return out;
}
// Stems that ask for the false statement or the exception.
const POLARITY=new RegExp([String.raw`cu\s+excep[țt]ia`,String.raw`(?:este|sunt)\s+(?:fals[ăa]?|false|incorect[ăe]?|gre[șs]it[ăe]?)\s*[:?]\s*$`,String.raw`afirma[țt]i(?:a|ile)\s+(?:fals[ăa]|false|incorect[ăe]?)`].map(word).join('|'),'iu');
export const isNegative=(stem:string)=>POLARITY.test(stem);
