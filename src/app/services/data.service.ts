import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {

  questions:Question[];

  constructor() {
    this.questions = [
      {
        text:'What is your name?',
        answer: 'My name is Anand',
        hide: true
      },
      {
        text:'What is your favorite color?',
        answer: 'My favourite color is White',
        hide: true
      },
      {
        text:'What is your favourite Language?',
        answer: 'My favourite language is Js',
        hide: true
      }
    ];
    
   }

   getQuestions(){
    return this.questions;
  }

}
