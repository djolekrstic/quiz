import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [],
  templateUrl: './quiz-question.component.html',
})
export class QuizQuestionComponent {
  @Input() question: any;
}
