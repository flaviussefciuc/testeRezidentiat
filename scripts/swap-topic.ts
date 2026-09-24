// After scripts/retire-topic.ts has frozen a topic, replaces its old bank files in
// src/app/questions.ts with the rewritten src/app/bank/<topic>-v2.ts export and
// deletes the old files (their content lives on in bank/retired/<topic>.ts).
// Usage: node --import tsx scripts/swap-topic.ts <topicId>
import {readFileSync,readdirSync,writeFileSync,unlinkSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';

const topic=process.argv[2];
if(!topic)throw new Error('Usage: swap-topic.ts <topicId>');
const v2File=`src/app/bank/${topic}-v2.ts`;
if(!existsSync(v2File))throw new Error(`Missing ${v2File}`);
const v2Const=topic.toUpperCase().replace(/[^A-Z0-9]/g,'_')+'_V2';
if(!readFileSync(v2File,'utf8').includes(`export const ${v2Const}=`))throw new Error(`${v2File} must export ${v2Const}`);

let src=readFileSync('src/app/questions.ts','utf8');
const removed:string[]=[];
for(const m of [...src.matchAll(/^import \{(\w+)\} from '\.\/bank\/([\w-]+)';\r?\n/gm)]){
 const [line,name,file]=m;
 if(file.startsWith('retired')||file.endsWith('-author')||file===`${topic}-v2`)continue;
 const mod=await import(pathToFileURL(resolve(`src/app/bank/${file}.ts`)).href);
 const arr=mod[name];
 if(!Array.isArray(arr)||!arr.length||!arr.every((q:any)=>q?.topicId===topic))continue;
 if(!/-(advanced|[b-z])$/.test(file))continue;
 src=src.replace(line,'');
 src=src.replace(new RegExp(`,\\.\\.\\.${name}(?=[,\\]])`),'').replace(new RegExp(`\\[\\.\\.\\.${name},`),'[');
 removed.push(file);
}
if(!removed.length)throw new Error(`No single-topic bank files found for ${topic}`);
src=src.replace("import {advancedEligibilityErrors} from './bank/advanced-author';",`import {${v2Const}} from './bank/${topic}-v2';\nimport {advancedEligibilityErrors} from './bank/advanced-author';`);
const before=src;
src=src.replace(/(const ALL_ADVANCED=\[[^\r\n]*)\];/,`$1,...${v2Const}];`);
if(src===before)throw new Error('ALL_ADVANCED list not found in questions.ts');
writeFileSync('src/app/questions.ts',src);
for(const f of removed)unlinkSync(`src/app/bank/${f}.ts`);
console.log(`Replaced ${removed.join(', ')} with ${v2Const}.`);
