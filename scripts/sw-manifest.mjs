// Writes dist/.../sw-precache.json after `ng build`: every built file the app may need
// offline, plus the current active bank. The build id changes whenever a hashed file
// name changes, which makes the service worker install a fresh cache.
import {createHash} from 'node:crypto';
import {readdirSync,readFileSync,statSync,writeFileSync} from 'node:fs';
import {join,relative,sep} from 'node:path';

const root='dist/rezidentiat/browser';
const skip=new Set(['sw.js','sw-precache.json','bank/history.json','bank/active.json','3rdpartylicenses.txt','prerendered-routes.json']);
const walk=dir=>readdirSync(dir).flatMap(name=>{const p=join(dir,name);return statSync(p).isDirectory()?walk(p):[relative(root,p).split(sep).join('/')];});
const files=walk(root).filter(f=>!skip.has(f)).sort();
const index=readFileSync('src/app/bank-index.generated.ts','utf8');
const bankVersion=/BANK_VERSION="([0-9a-f]+)"/.exec(index)?.[1]??'0';
const build=createHash('sha256').update(files.join('\n')).update(bankVersion).digest('hex').slice(0,12);
writeFileSync(join(root,'sw-precache.json'),JSON.stringify({build,files:['/',...files.filter(f=>f!=='index.html').map(f=>'/'+f)],bank:[`/bank/active.json?v=${bankVersion}`]}));
console.info(`Service worker precache: ${files.length} files, build ${build}.`);
