import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../../base-class/question-base';
import { QuestionControlService } from '../../services/question-control.service'
import { DynamicFormQuestionComponent } from '../dynamic-form-question/dynamic-form-question.component';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule,DynamicFormQuestionComponent, ReactiveFormsModule],
  templateUrl: './dynamic-form.component.html',
  styles: [],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  private qcs = inject(QuestionControlService);

  @Input() questions: QuestionBase<string>[] | null = [];

  form!:FormGroup;
  payLoad = '';

  ngOnInit(): void {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

}
