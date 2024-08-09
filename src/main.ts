// this is the entry point for the application, intializes the app and sets up the route component
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { QuizComponent } from './app/quiz/quiz.component';
import { ResultsComponent } from './app/results/results.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'results', component: ResultsComponent }
];
// Bootstrap the app with the root Appcomponent and the router config
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // provides the router with the defined routes 
  ]
});
