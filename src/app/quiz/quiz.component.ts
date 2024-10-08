import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../services/quiz.service';
import { Question } from '../question.model';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import{CardModule} from 'primeng/card';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  standalone: true,
  imports: [CommonModule,ButtonModule,RadioButtonModule,CardModule] // importing the common module from the angular directory
})
export class QuizComponent implements OnInit { //Question array keep track of the questions and the current position
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion: Question | null = null;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit() { // ngonIntialization is used to get the data from the service 
    this.questions = this.quizService.getQuestions();
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }

  selectAnswer(option: string) { 
    this.quizService.setUserAnswer(this.currentQuestionIndex, option);
  }

  nextQuestion() { // to navigate to the next question else takes to the results page if  it is the last question
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    } else {
      this.goToResults();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
    }
  }

  goToResults() { // function used to navigate to the results page
    this.router.navigate(['/results']);
  }
// to check if the user as selected an option
  isSelected(option: string): boolean {
    return this.quizService.getUserAnswers()[this.currentQuestionIndex] === option;
  }
}
