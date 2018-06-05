import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Injectable()
export class QuizzService {
  
  correctAnswers: any[];
  questions: any[];
  answers:any[];
  questionNumber=0;
  result;
  timer;
  seconds=30;

  constructor(private http: Http, private router:Router) { 
   
  }


  getQuestions() {
    return  this.http.get('assets/questions.json');
  }


  postScores(scores){
    this.result=scores;
    return this.result;
  }

  getScores(){
    return this.result;
  }
}
