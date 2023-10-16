import { QuestionBase } from '../base-class/question-base';

export class TextBoxQuestion extends QuestionBase<string> {

  override controlType = 'textbox';

}
