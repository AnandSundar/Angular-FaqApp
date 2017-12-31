import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions:Object[];

  constructor() {
    this.questions = [
      {
        text:'What is your name?',
        answer: 'My name is Anand'
      },
      {
        text:'What is your favorite color?',
        answer: 'My favourite color is White'
      },
      {
        text:'What is your favourite Language?',
        answer: 'My favourite language is Js'
      }
    ];
   }

  ngOnInit() {
  }

}
