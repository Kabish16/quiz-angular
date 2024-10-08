import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { Router } from '@angular/router';
import {ButtonModule} from 'primeng/button'


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  standalone: true,
  imports: [CommonModule , ButtonModule]
})
export class ResultsComponent implements OnInit { // holds the quiz results in the variables 
  score = 0;
  correctAnswers = 0;
  totalQuestions = 0;
  userAnswers: string[] = [];
  correctAnswerKeys: string[] = [];

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() { // ngon Intialization, is used to get and calculate the quiz results from the service 
    const { score, correctAnswers } = this.quizService.calculateScore();
    this.score = score;
    this.correctAnswers = correctAnswers;
    this.totalQuestions = this.quizService.getQuestions().length;
    this.userAnswers = this.quizService.getUserAnswers();
    this.correctAnswerKeys = this.quizService.getCorrectAnswerKeys();
  }

  retakeQuiz() { // this function is used to retake the quiz
    this.router.navigate(['/']);
  }
}
