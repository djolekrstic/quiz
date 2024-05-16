import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizNavComponent } from './quiz-nav/quiz-nav.component';
import { QuizBodyComponent } from './quiz-body/quiz-body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizNavComponent, QuizBodyComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
