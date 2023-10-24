import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
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
    let validators:ValidatorFn[] = [];

    questions.forEach(question => {
      let value = initValue(question);
      validators = getValidators(question);
      group[question.key] = validators.length > 0 ? new FormControl(value, validators)
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

function getValidators(question: QuestionBase<ValueWithUndefined<ValueFormControl>>): ValidatorFn[] {

  let listOfValidators:ValidatorFn[] = [];

  let validators = question.validators;

  if(validators.email){
    listOfValidators.push(Validators.email);
  }

  if(validators.required){
    listOfValidators.push(Validators.required);
  }

  if(validators.requiredTrue){
    listOfValidators.push(Validators.requiredTrue);
  }

  if(validators.min > 0){
    listOfValidators.push(Validators.min(validators.min));
  }

  if(validators.max > 0){
    listOfValidators.push(Validators.max(validators.max));
  }

  if(validators.minLength > 0){
    listOfValidators.push(Validators.minLength(validators.minLength));
  }

  if(validators.maxLength > 0){
    listOfValidators.push(Validators.maxLength(validators.maxLength));
  }

  if(validators.pattern && validators.pattern !== null){
    listOfValidators.push(Validators.pattern(validators.pattern));
  }

  return listOfValidators;

}
