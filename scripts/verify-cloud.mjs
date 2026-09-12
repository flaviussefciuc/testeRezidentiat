import assert from 'node:assert/strict';
import {randomUUID} from 'node:crypto';
import {createClient} from '@supabase/supabase-js';
import {localEnv} from './env.mjs';
const env=localEnv();
const options={auth:{persistSession:false,autoRefreshToken:false}};
const admin=createClient(env.SUPABASE_URL,env.SUPABASE_SECRET_KEY||env.SUPABASE_SERVICE_ROLE_KEY,options);
const client=()=>createClient(env.SUPABASE_URL,env.SUPABASE_PUBLISHABLE_KEY,options);
const users=[];
try{
 const password=randomUUID()+'aA1!';
 for(let i=0;i<2;i++){
  const email=`rezi-verification-${randomUUID()}@example.invalid`;
  const {data,error}=await admin.auth.admin.createUser({email,password,email_confirm:true});
  assert.ifError(error);users.push({id:data.user.id,email});
 }
 const first=client(),secondDevice=client(),stranger=client();
 for(const [c,u] of [[first,users[0]],[secondDevice,users[0]],[stranger,users[1]]]){
  const {error}=await c.auth.signInWithPassword({email:u.email,password});assert.ifError(error);
 }
 const id=randomUUID(),date=new Date().toISOString();
 const row={id,user_id:users[0].id,mode:'practice',started_at:date,completed_at:date,answers:[{questionId:'sepsis-01',selected:[1]}]};
 const inserted=await first.from('attempts').upsert([row],{onConflict:'id',ignoreDuplicates:true});assert.ifError(inserted.error);
 const repeated=await first.from('attempts').upsert([row],{onConflict:'id',ignoreDuplicates:true});assert.ifError(repeated.error);
 const restored=await secondDevice.from('attempts').select('*').eq('id',id);assert.ifError(restored.error);assert.equal(restored.data.length,1);
 const hidden=await stranger.from('attempts').select('*').eq('id',id);assert.ifError(hidden.error);assert.equal(hidden.data.length,0);
 const forged=await stranger.from('attempts').insert({...row,id:randomUUID()});assert.ok(forged.error);
 console.log('PASS: password login, cross-device results, duplicate retry, account isolation, forged ownership blocked.');
 const reset=await admin.auth.admin.generateLink({type:'recovery',email:users[0].email,options:{redirectTo:'https://testerezidentiat.vercel.app/cont'}});
 assert.ifError(reset.error);
 console.log('Recovery redirect:',new URL(reset.data.properties.action_link).searchParams.get('redirect_to'));
}finally{
 for(const user of users){const {error}=await admin.auth.admin.deleteUser(user.id);if(error)throw new Error('Could not remove verification account');}
 console.log('Temporary verification accounts removed.');
}
