import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/routes';
bootstrapApplication(AppComponent, { providers: [provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration:'enabled'}), withComponentInputBinding())] }).catch(console.error);
