import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './base-class/question-base';
import { Observable } from 'rxjs';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DynamicFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [QuestionService]
})
export class AppComponent {
  title = 'dynamic-form-design';

  questions$: Observable<QuestionBase<any>[]>;

  private questionService = inject(QuestionService);

  constructor(){
    this.questions$ = this.questionService.getQuestions();
  }

}
