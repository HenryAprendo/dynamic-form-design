import { QuestionBase } from '../base-class/question-base';

export class DropdownQuestion extends QuestionBase<string> {

  override controlType = 'dropdown';

}
