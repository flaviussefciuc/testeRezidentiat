import { existsSync, readFileSync, writeFileSync } from 'node:fs';
// Only these two public values are compiled into the SPA.
const local = Object.assign({}, ...['.env.local','.env'].map(file=>existsSync(file)?Object.fromEntries(readFileSync(file, 'utf8').split(/\r?\n/).filter(l => /^[A-Z_]+=/.test(l)).map(l => { const i=l.indexOf('='); return [l.slice(0,i),l.slice(i+1).replace(/^['"]|['"]$/g,'')]; })):{}));
const url = process.env.SUPABASE_URL || local.SUPABASE_URL || '';
const key = process.env.SUPABASE_PUBLISHABLE_KEY || local.SUPABASE_PUBLISHABLE_KEY || '';
if (key.startsWith('sb_secret_')) throw new Error('A secret key must never be included in a browser app.');
if (key.startsWith('eyJ')) { const payload=JSON.parse(Buffer.from(key.split('.')[1],'base64url').toString()); if(payload.role !== 'anon') throw new Error('Only an anon/public key may be used in the SPA.'); }
if (url && !/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url)) throw new Error('Invalid Supabase project URL.');
if (!!url !== !!key) throw new Error('Set both public Supabase configuration values.');
writeFileSync('src/app/config.generated.ts', `export const cloudConfig = ${JSON.stringify({url,key})};\n`);
if (!url) console.info('Supabase not configured: guest practice is available; account sync is unavailable.');
