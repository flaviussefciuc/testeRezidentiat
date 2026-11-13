import {test} from 'node:test';
import assert from 'node:assert/strict';
import {keyPoints,namedSection,renderMarkdown,splitSections,tables} from '../src/app/markdown.ts';

const doc=`# Capitol
Kumar & Clark · cap. 1 · p. 1–2

> **Esențialul capitolului**
> - primul punct
> - al doilea **punct**

## Temă A · p. 1 ★
- **termen**: fapt (p. 1)
  - detaliu
1. pas unu
2. pas doi

### Tabel: Scor (Cadranul 1.1, p. 2) ★
| Criteriu | Puncte |
|---|---|
| <b>vârstă</b> | 1 |

## Cifre de reținut
- 5%: ceva

## Capcane frecvente
- A ≠ B`;

test('renders headings, lists, tables and blockquotes, escaping HTML',()=>{
 const html=renderMarkdown(doc);
 assert.match(html,/<h2 id="tema-a-p-1">Temă A · p\. 1 <span class="md-star"/);
 assert.match(html,/<ul><li><strong>termen<\/strong>: fapt \(p\. 1\)<ul><li>detaliu<\/li><\/ul><\/li><\/ul>/);
 assert.match(html,/<ol><li>pas unu<\/li><li>pas doi<\/li><\/ol>/);
 assert.match(html,/<table><thead><tr><th>Criteriu<\/th><th>Puncte<\/th><\/tr><\/thead><tbody><tr><td>&lt;b&gt;vârstă&lt;\/b&gt;<\/td><td>1<\/td><\/tr>/);
 assert.match(html,/<blockquote><p><strong>Esențialul capitolului<\/strong><\/p>\n<ul><li>primul punct<\/li><li>al doilea <strong>punct<\/strong><\/li><\/ul><\/blockquote>/);
 assert.ok(!html.includes('<b>'),'raw HTML must be escaped');
});
test('splits a summary into themes and collects recap pieces, across chapter parts',()=>{
 const {preamble,sections}=splitSections(doc);
 assert.match(preamble,/^# Capitol/);
 assert.deepEqual(sections.map(s=>[s.title,s.stars]),[['Temă A · p. 1 ★',1],['Cifre de reținut',0],['Capcane frecvente',0]]);
 const two=doc+'\n\n# Capitol — partea a II-a\n\n> **Esențialul capitolului**\n> - al treilea\n\n## Cifre de reținut\n- 7%: altceva';
 assert.equal(keyPoints(two),'- primul punct\n- al doilea **punct**\n- al treilea');
 assert.equal(namedSection(two,/^Cifre/),'- 5%: ceva\n- 7%: altceva');
 assert.equal(tables(doc).length,1);
 assert.match(tables(doc)[0],/^### Tabel: Scor/);
});
