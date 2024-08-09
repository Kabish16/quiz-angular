import { Injectable } from '@angular/core';
import { Question } from '../question.model';

@Injectable({
  providedIn: 'root' // this provides the service
})
export class QuizService { // array that contains the question , options and the correct answer for the quiz
  private questions: Question[] = [
    { text: 'What is the Capital of Sri Lanka?', options: ['Colombo', 'Madrid', 'Kandy', 'Kotte'], correctAnswer: 'Colombo' },
    { text: 'What is the Capital of France?', options: ['Colombo', 'Madrid', 'Paris', 'Lyon'], correctAnswer: 'Paris' },
    { text: 'What is the Capital of Spain?', options: ['Barcelona', 'Madrid', 'Prague', 'Seville'], correctAnswer: 'Madrid' },
    { text: 'What is the Capital of India?', options: ['Colombo', 'Madrid', 'Kandy', 'Delhi'], correctAnswer: 'Delhi' },
    { text: 'What is the Capital of The USA?', options: ['Washington', 'Madrid', 'Kandy', 'Kotte'], correctAnswer: 'Washington' }
  ];

  private userAnswers: string[] = []; // array to store the users's answer
  private correctAnswerKeys: string[] = this.questions.map(q => q.correctAnswer); // this stores the correct answer 

  getQuestions(): Question[] {
    return this.questions;
  }
// this assigns the user's answer to each specific question by index 
  setUserAnswer(index: number, answer: string): void {
    this.userAnswers[index] = answer;
  }

  getUserAnswers(): string[] { // gets the user's answers
    return this.userAnswers;
  }

  getCorrectAnswerKeys(): string[] { // gets all the correct answers
    return this.correctAnswerKeys;
  }
// calculates the user's score with answers stored in the userAnswers
  calculateScore(): { score: number, correctAnswers: number } {
    let score = 0;
    this.userAnswers.forEach((answer, index) => {
      if (answer === this.questions[index].correctAnswer) {
        score++;
      }
    });
    return { score, correctAnswers: score };
  }
}
