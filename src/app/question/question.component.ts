import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RadioButtonModule} from 'primeng/radiobutton'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  standalone: true,
  imports: [CommonModule,RadioButtonModule] // Imported the CommonModule from the angular directory 
})
export class QuestionComponent { // Inputs to get the current position index,totalQuestions and the function that handles selected answer
  @Input() question!: any;
  @Input() questionIndex!: number;
  @Input() totalQuestions!: number;
  @Input() selectAnswer!: (option: string) => void;
}
