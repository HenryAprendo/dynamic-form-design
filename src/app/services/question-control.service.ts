import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../base-class/question-base';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  /**
   * Metodo para crear controles de formularios e incluirlos en grupo de formulario, según la información de cada instancia.
   *
   * @param questions Instancias del tipo QuestionBase(TextBoxQuestion,DropdownQuestion)
   * @returns Un grupo de formulario
   */
  toFormGroup(questions:QuestionBase<string|boolean>[]): FormGroup<any> {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value ?? '', Validators.required)
                                              : new FormControl(question.value ?? '');
    });

    return new FormGroup(group);
  }

}
