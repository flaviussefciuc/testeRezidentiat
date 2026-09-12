import type {Routes} from '@angular/router';
export const routes:Routes=[
 {path:'',loadComponent:()=>import('./dashboard.component').then(m=>m.DashboardComponent)},
 {path:'teste',loadComponent:()=>import('./practice.component').then(m=>m.PracticeComponent)},
 {path:'test',loadComponent:()=>import('./quiz.component').then(m=>m.QuizComponent)},
 {path:'progres',loadComponent:()=>import('./progress.component').then(m=>m.ProgressComponent)},
 {path:'rezultat/:id',loadComponent:()=>import('./result.component').then(m=>m.ResultComponent)},
 {path:'bibliografie',loadComponent:()=>import('./resources.component').then(m=>m.ResourcesComponent)},
 {path:'cont',loadComponent:()=>import('./auth.component').then(m=>m.AuthComponent)},
 {path:'**',redirectTo:''}
];
