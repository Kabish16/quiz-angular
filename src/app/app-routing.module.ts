/* I have commented these because first i tried with module approach and changed to the standalone approach which main.ts handles 

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [ // have impleted 2 routes 
  { path: '', component: QuizComponent }, // Default route for quiz
  { path: 'results', component: ResultsComponent }, // route for results 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //configures the router with the routes defined above 
  exports: [RouterModule] // exports the routeModule to be used in the root module
})
export class AppRoutingModule { }
/*/