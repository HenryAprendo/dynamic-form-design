import { Injectable } from '@angular/core';
import { QuestionBase } from '../base-class/question-base';
import { DropdownQuestion } from '../type-of-controls/dropdown-question';
import { TextBoxQuestion } from '../type-of-controls/text-box-question';
import { RadioButtonQuestion } from '../type-of-controls/radio-button-question';
import { CheckBoxQuestion } from '../type-of-controls/check-box-question';
import { TextAreaQuestion } from '../type-of-controls/text-area-question';
import { of } from 'rxjs';
import { ValidatorsCustom } from '../base-class/validators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions(){
    const questions: QuestionBase<string|boolean>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3
      }),

      new TextBoxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        validators: new ValidatorsCustom().setReq(),
        order: 1
      }),

      new TextBoxQuestion({
        key: 'emailAddress',
        label: 'Email',
        validators: new ValidatorsCustom().setReq(),
        type: 'email',
        order: 2
      }),

      new RadioButtonQuestion({
        key: 'power',
        label: 'Hero power',
        validators: new ValidatorsCustom().setReq(),
        options: [
          { key: 'superpower', value: 'Superpower'},
          { key: 'water', value: 'Water'},
          { key: 'fire', value: 'Fire'},
          { key: 'air', value: 'Air'},
        ],
        order: 4
      }),

      new CheckBoxQuestion({
        key: 'heroAlias',
        label: 'Hero alias',
        type: 'checkbox',
        value: false,
        order: 5
      }),

      new TextBoxQuestion({
        key: 'password',
        label: 'Password',
        validators: new ValidatorsCustom()
                          .setReq()
                          .setMinLength(4)
                          .setMaxLength(10),

        type: 'password',
        order: 6
      }),

      new TextAreaQuestion({
        key: 'description',
        label: 'Description',
        validators: new ValidatorsCustom().setReq(),
        order: 7
      })

    ];

    return of(questions.sort((a,b) => a.order - b.order));
  }

}











