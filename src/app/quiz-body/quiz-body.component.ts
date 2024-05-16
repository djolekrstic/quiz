import { Component } from '@angular/core';
import { QuizQuestionComponent } from '../quiz-question/quiz-question.component';
import { questionsData } from '../shared/data/questions';

@Component({
  selector: 'app-quiz-body',
  standalone: true,
  imports: [QuizQuestionComponent],
  templateUrl: './quiz-body.component.html',
})
export class QuizBodyComponent {
  quizStarted = false;
  questions = questionsData;
  currentQuestion = 0;
}
