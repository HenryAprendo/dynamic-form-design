import { QuestionBase } from '../base-class/question-base';

export class CheckBoxQuestion extends QuestionBase<boolean> {

  override controlType = 'checkbox';

}
