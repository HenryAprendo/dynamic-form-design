import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBase } from '../../base-class/question-base'
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-question.component.html',
  styles: [
  ]
})
export class DynamicFormQuestionComponent {

  @Input({ required: true }) question!: QuestionBase<string>;

  @Input() form!: FormGroup;

  get isValid(){
    return this.form.controls[this.question.key].valid;
  }

}
