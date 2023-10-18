import { QuestionBase } from '../base-class/question-base';

export class RadioButtonQuestion extends QuestionBase<string> {

  override controlType = 'radiobtn';

}

/**
 * En los controles radio button, se debe colocar la propiedad 'type' directamente sin usar Property binding, de lo contrario
 * daria el valor de la opcion seleccionada.
 */
