import type {Routes} from '@angular/router';
export const routes:Routes=[
 {path:'',loadComponent:()=>import('./dashboard.component').then(m=>m.DashboardComponent)},
 {path:'teste',loadComponent:()=>import('./practice.component').then(m=>m.PracticeComponent)},
 {path:'test',loadComponent:()=>import('./quiz.component').then(m=>m.QuizComponent)},
 {path:'progres',loadComponent:()=>import('./progress.component').then(m=>m.ProgressComponent)},
 {path:'rezultat/:id',loadComponent:()=>import('./result.component').then(m=>m.ResultComponent)},
 {path:'fise',loadComponent:()=>import('./sheets.component').then(m=>m.SheetsComponent)},
 {path:'fise/:topic',loadComponent:()=>import('./sheets.component').then(m=>m.SheetsComponent)},
 {path:'recitire',loadComponent:()=>import('./reading.component').then(m=>m.ReadingComponent)},
 {path:'cauta',loadComponent:()=>import('./search.component').then(m=>m.SearchComponent)},
 {path:'plan',loadComponent:()=>import('./plan.component').then(m=>m.PlanComponent)},
 {path:'notite',loadComponent:()=>import('./notes.component').then(m=>m.NotesComponent)},
 {path:'grila/:id',loadComponent:()=>import('./single.component').then(m=>m.SingleComponent)},
 {path:'provocare',loadComponent:()=>import('./challenge.component').then(m=>m.ChallengePageComponent)},
 {path:'tiparit',loadComponent:()=>import('./paper.component').then(m=>m.PaperComponent)},
 {path:'adevarat-fals',loadComponent:()=>import('./drill.component').then(m=>m.DrillComponent)},
 {path:'bibliografie',loadComponent:()=>import('./resources.component').then(m=>m.ResourcesComponent)},
 {path:'cont',loadComponent:()=>import('./auth.component').then(m=>m.AuthComponent)},
 {path:'**',redirectTo:''}
];
