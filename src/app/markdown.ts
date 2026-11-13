// Minimal, safe Markdown for the chapter summaries (public/rezumate/*.md): headings, paragraphs,
// bullet and numbered lists (one nested level), tables, blockquotes, **bold**, *italic* and `code`.
// Every piece of text is HTML-escaped before markup is added, so the output can be bound with innerHTML.

const esc=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
export const slug=(s:string)=>s.toLocaleLowerCase('ro').normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60);
const NL=/\r\n/g;

export function inline(text:string):string{
 let s=esc(text);
 s=s.replace(/`([^`]+)`/g,'<code>$1</code>');
 s=s.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
 s=s.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?=[^*\w]|$)/g,'$1<em>$2</em>');
 s=s.replace(/★/g,'<span class="md-star" title="Pagină din care s-au dat întrebări în 2023–2025">★</span>');
 return s;
}

const isTableRow=(l:string)=>/^\s*\|.*\|\s*$/.test(l);
const isSeparator=(l:string)=>/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
const cells=(l:string)=>l.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(c=>c.trim());
const listItem=/^(\s*)([-*]|\d+[.)])\s+(.*)$/;
const heading=/^(#{1,4})\s+(.*)$/;

export function renderMarkdown(md:string):string{
 const lines=md.replace(NL,'\n').split('\n');
 const out:string[]=[];
 let i=0;
 while(i<lines.length){
  const line=lines[i];
  if(!line.trim()){i++;continue;}
  const h=heading.exec(line);
  if(h){const n=h[1].length,text=h[2].trim();out.push(`<h${n} id="${slug(text)}">${inline(text)}</h${n}>`);i++;continue;}
  if(line.startsWith('>')){
   const inner:string[]=[];
   while(i<lines.length&&lines[i].startsWith('>')){inner.push(lines[i].replace(/^>\s?/,''));i++;}
   out.push(`<blockquote>${renderMarkdown(inner.join('\n'))}</blockquote>`);continue;
  }
  if(isTableRow(line)&&i+1<lines.length&&isSeparator(lines[i+1])){
   const head=cells(line);i+=2;const body:string[][]=[];
   while(i<lines.length&&isTableRow(lines[i])){body.push(cells(lines[i]));i++;}
   out.push(`<div class="md-table"><table><thead><tr>${head.map(c=>`<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${body.map(r=>`<tr>${head.map((_,k)=>`<td>${inline(r[k]??'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
   continue;
  }
  const li=listItem.exec(line);
  if(li){
   const ordered=/\d/.test(li[2]);const items:{text:string;sub:string[]}[]=[];const baseIndent=li[1].length;
   while(i<lines.length){
    const m=listItem.exec(lines[i]);
    if(m&&m[1].length<=baseIndent){if(/\d/.test(m[2])!==ordered)break;items.push({text:m[3],sub:[]});i++;continue;}
    if(m&&m[1].length>baseIndent&&items.length){items[items.length-1].sub.push(lines[i].trim());i++;continue;}
    if(lines[i].trim()&&/^\s{2,}\S/.test(lines[i])&&items.length){items[items.length-1].text+=' '+lines[i].trim();i++;continue;}
    break;
   }
   const tag=ordered?'ol':'ul';
   out.push(`<${tag}>${items.map(it=>`<li>${inline(it.text)}${it.sub.length?renderMarkdown(it.sub.join('\n')):''}</li>`).join('')}</${tag}>`);
   continue;
  }
  const para:string[]=[];
  while(i<lines.length&&lines[i].trim()&&!heading.test(lines[i])&&!lines[i].startsWith('>')&&!listItem.test(lines[i])&&!(isTableRow(lines[i])&&i+1<lines.length&&isSeparator(lines[i+1]))){para.push(lines[i].trim());i++;}
  out.push(`<p>${inline(para.join(' '))}</p>`);
 }
 return out.join('\n');
}

// A summary split at its level-2 headings: the preamble (title, subtitle, key points) and the themes.
export interface MdSection {title:string;slug:string;md:string;stars:number}
export function splitSections(md:string):{preamble:string;sections:MdSection[]}{
 const parts=md.replace(NL,'\n').split(/\n(?=## )/);
 const preamble=parts[0].startsWith('## ')?'':parts.shift()!;
 return {preamble,sections:parts.map(p=>{const end=p.indexOf('\n');const title=(end>0?p.slice(3,end):p.slice(3)).trim();return {title,slug:slug(title),md:p,stars:(title.match(/★/g)??[]).length};})};
}

// Pieces collected across chapters for the cross-chapter recaps. A chapter may be split in parts,
// each with its own title and key points.
export function keyPoints(md:string):string{
 return md.replace(NL,'\n').split(/\n(?=# )/).map(part=>{
  const lines=part.split('\n');const start=lines.findIndex(l=>l.startsWith('>'));if(start<0)return '';
  const out:string[]=[];for(let i=start;i<lines.length&&lines[i].startsWith('>');i++)out.push(lines[i].replace(/^>\s?/,''));
  return out.filter(l=>!/^\*\*Esențialul/.test(l.trim())).join('\n');
 }).filter(Boolean).join('\n');
}
export function namedSection(md:string,title:RegExp):string{
 const {sections}=splitSections(md);
 return sections.filter(x=>title.test(x.title)).map(s=>s.md.replace(/^## .*\n?/,'').trim()).filter(Boolean).join('\n');
}
export function tables(md:string):string[]{
 const lines=md.replace(NL,'\n').split('\n');const out:string[]=[];
 for(let i=0;i<lines.length;i++){
  if(!/^###\s+(Tabel|Comparație)/i.test(lines[i]))continue;
  const block=[lines[i]];let j=i+1;
  while(j<lines.length&&!/^#{1,3}\s/.test(lines[j])){block.push(lines[j]);j++;}
  out.push(block.join('\n').trim());i=j-1;
 }
 return out;
}
