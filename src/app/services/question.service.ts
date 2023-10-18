import { Injectable } from '@angular/core';
import { QuestionBase } from '../base-class/question-base';
import { DropdownQuestion } from '../type-of-controls/dropdown-question';
import { TextBoxQuestion } from '../type-of-controls/text-box-question';
import { RadioButtonQuestion } from '../type-of-controls/radio-button-question';
import { CheckBoxQuestion } from '../type-of-controls/check-box-question';
import { of } from 'rxjs';

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
        required: true,
        order: 1
      }),

      new TextBoxQuestion({
        key: 'emailAddress',
        label: 'Email',
        required: true,
        type: 'email',
        order: 2
      }),

      new RadioButtonQuestion({
        key: 'power',
        label: 'Hero power',
        required: true,
        options: [
          { key: 'superpower', value: 'Superpower'},
          { key: 'water', value: 'Water'},
          { key: 'fire', value: 'Fire'},
          { key: 'air', value: 'Air'},
        ],
        order: 4
      }),

      new CheckBoxQuestion({
        key: 'aliasForName',
        label: 'change to a hero alias',
        type: 'checkbox',
        value: false,
        order: 5
      })

    ];

    return of(questions.sort((a,b) => a.order - b.order));
  }

}











