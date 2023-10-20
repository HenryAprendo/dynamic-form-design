import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from '../base-class/question-base';

type ValueFormControl = string|number|boolean;
type ValueWithUndefined<T> = T|undefined;


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
  toFormGroup(questions:QuestionBase<string|boolean|number>[]): FormGroup<any> {
    const group: any = {};

    questions.forEach(question => {
      let value = initValue(question);
      group[question.key] = question.required ? new FormControl(value, Validators.required)
                                              : new FormControl(value);
    });

    return new FormGroup(group);
  }

}

/**
 * Este método garantiza un inicialización con el tipo de dato correcto y de forma dinamica pra el
 * control de formulario.
 * @param question Una instancia del tipo QuestionBase que representa un control de formulario
 * @returns El valor con el cual se inicializa el control de formulario
 */
function initValue(question: QuestionBase<ValueWithUndefined<ValueFormControl>>): ValueFormControl {

  let valueType = typeof question.value;

  if(valueType !== undefined){
    return question.value as ValueFormControl;
  }

  return valueType === 'boolean' ? false
                                 : valueType === 'number' ? 0 : '';
}

