import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] // importing the commonmodule to use standalone components and routermodules for routing 
})
export class AppComponent { // root component of the app, with the title
  title = 'quiz-app';
}
