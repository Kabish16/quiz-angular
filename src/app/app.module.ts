/*
I have commented these because first i tried with module approach and changed to the standalone approach which main.ts handles 


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { CommonModule } from '@angular/common'
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  
  providers: []
})
export class AppModule { }
/*/