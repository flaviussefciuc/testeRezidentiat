import {Injectable,signal} from '@angular/core';
// App-wide dialog state, so dialogs can be lazy-loaded and still opened from anywhere.
@Injectable({providedIn:'root'})
export class Ui {
 readonly palette=signal(false);
 readonly news=signal(false);
}
