import {readFileSync,existsSync} from 'node:fs';
export function localEnv(){return Object.assign({},...['.env.local','.env'].map(file=>existsSync(file)?Object.fromEntries(readFileSync(file,'utf8').split(/\r?\n/).filter(l=>/^[A-Z_]+=/.test(l)).map(l=>{const i=l.indexOf('=');return[l.slice(0,i),l.slice(i+1).replace(/^['"]|['"]$/g,'')];})):{}),process.env);}
