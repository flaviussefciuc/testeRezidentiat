import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling, withNavigationErrorHandler } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
// After a deploy, a tab opened on the previous version may ask for code chunks that no
// longer exist. Reload once to pick up the new version instead of showing a broken page.
function recoverFromStaleChunk(e:{error:unknown}){
 const message=String((e.error as Error)?.message??e.error);
 if(!/dynamically imported module|Importing a module script failed|Loading chunk/i.test(message))return;
 try{if(sessionStorage.getItem('rezi:reloaded'))return;sessionStorage.setItem('rezi:reloaded','1');}catch{/* storage unavailable */}
 location.reload();
}
// Registered in production; on localhost only with localStorage['rezi:sw']='1' (for testing).
const localDev=/^(localhost|127\.|\[::1\])/.test(location.hostname);
let swOptIn=false;try{swOptIn=localStorage.getItem('rezi:sw')==='1';}catch{/* storage unavailable */}
if('serviceWorker' in navigator&&(!localDev||swOptIn))window.addEventListener('load',()=>{void navigator.serviceWorker.register('/sw.js').catch(()=>{});});
bootstrapApplication(AppComponent, { providers: [provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:'enabled'}), withComponentInputBinding(), withNavigationErrorHandler(recoverFromStaleChunk))] }).catch(console.error);
