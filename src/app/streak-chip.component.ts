import {Component,computed,inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Store} from './store';
import {Planner} from './planner';
import {IconComponent} from './icon.component';
import {dailyCounts,streak} from './activity';

@Component({selector:'app-streak-chip',standalone:true,imports:[RouterLink,IconComponent],template:`<a routerLink="/plan" class="streak-chip" [class.hot]="s().current>=3" [attr.aria-label]="s().current+' zile la rând, '+s().today+' din '+planner.perDay()+' grile azi'" [title]="'Serie: '+s().current+' zile · Azi: '+s().today+' / '+planner.perDay()+' grile'"><app-icon name="flame"/><strong>{{s().current}}</strong><span class="streak-today"><i [style.width.%]="min(100,s().today/planner.perDay()*100)"></i></span><small>{{s().today}}/{{planner.perDay()}}</small></a>`,styles:[`:host{display:contents}`]})
export class StreakChipComponent {
 store=inject(Store);planner=inject(Planner);min=Math.min;
 s=computed(()=>streak(dailyCounts(this.store.attempts())));
}
