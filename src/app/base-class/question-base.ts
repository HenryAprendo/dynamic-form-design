
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
   * Define si el control tiene un valor requerido y agrega un validador required
   */
  required: boolean;

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
    required?: boolean;
    order?: number;
    controlType?: string;
    type?: string;
    options?: {key:string, value: string}[];

  } = {}){

    this.value = options.value;
    this.key = options.key ?? '';
    this.label = options.label ?? '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType ?? '';
    this.type = options.type ?? '';
    this.options = options.options ?? [];

  }

}

