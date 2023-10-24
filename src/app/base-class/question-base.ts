import { ValidatorsCustom } from '../base-class/validators';

export class QuestionBase<T> {

  /**
   * El valor del input
   */
  value: T|undefined;

  /**
   * Configura las propiedades id, name, formControlName en los input y for en los label.
   */
  key: string;

  /**
   * Contenido de la etiqueta label en el formulario.
   */
  label: string;

  /**
   * Set de validadores para controles de formularios
   */
  validators: ValidatorsCustom;

  /**
   * Indica el orden en el que se representaran los controles
   */
  order: number;

  /**
   * Util para filtrar entre un grupo de controles, a cual de ellos renderizar
   */
  controlType: string;

  /**
   * Configura la propiedad type de los inputs
   */
  type: string;

  /**
   * En conjunto con un control select, definen el grupo de opciones a escoger.
   */
  options: {key: string, value: string}[];

  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    validators?: ValidatorsCustom;
    order?: number;
    controlType?: string;
    type?: string;
    options?: {key:string, value: string}[];

  } = {}){

    this.value = options.value;
    this.key = options.key ?? '';
    this.label = options.label ?? '';
    this.validators = options.validators ?? {} as ValidatorsCustom;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType ?? '';
    this.type = options.type ?? '';
    this.options = options.options ?? [];

  }

}
