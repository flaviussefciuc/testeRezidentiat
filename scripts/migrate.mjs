import pg from 'pg';
import {readFileSync} from 'node:fs';
import {localEnv} from './env.mjs';
const env=localEnv();
const connection=new URL(env.POSTGRES_URL_NON_POOLING||env.POSTGRES_URL);connection.searchParams.delete('sslmode');
const db=new pg.Client({connectionString:connection.toString(),ssl:{ca:readFileSync('supabase/ssl/prod-ca-2021.crt','utf8'),rejectUnauthorized:true},connectionTimeoutMillis:20000});
try{await db.connect();await db.query('begin');await db.query('create table if not exists public.app_migrations (version text primary key, applied_at timestamptz not null default now())');await db.query('revoke all on public.app_migrations from anon, authenticated');await db.query('alter table public.app_migrations enable row level security');const {rows}=await db.query("select version from public.app_migrations where version=$1",['202609110001']);if(!rows.length){await db.query(readFileSync('supabase/migrations/202609110001_attempts.sql','utf8'));await db.query('insert into public.app_migrations(version) values($1)',['202609110001']);}await db.query('commit');console.log('Account-isolated attempts schema applied.');}catch(e){console.error('Migration failed:',e.code||e.name);process.exitCode=1;}finally{await db.end();}
