import { QuizService } from './../shared/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
// import "rxjs/add/observable/timer";
// import "rxjs/add/operator/finally";
// import "rxjs/add/operator/takeUntil";
// import "rxjs/add/operator/map";
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private router: Router, private quizService:QuizService) { }


  ngOnInit() {
    // this.quizService.seconds=0;
    // this.quizService.qnProgress=0;
    // this.quizService.getQuestions().subscribe(
    //   (data:any)=>{
    //     this.quizService.questions= data;
    //     this.startTimer();
    //   }
    // );

    // countries =[
    //   {name:"Argentina", value: "Argentina"},
    //   {name:"Australia", value: "Australia"},
    //   {name:"Belgium", value: "Belgium"},
    //   {name:"Brazil", value: "Brazil"},
    //   {name:"Colombia", value: "Colombia"},
    //   {name:"Costa Rica", value: "Costa-Rica"},
    //   {name:"Croatia", value: "Croatia"},
    //   {name:"Denmark", value: "Denmark"},
    //   {name:"Egypt ", value: "Egypt"},
    //   {name:"England ", value: "England"},
    //   {name:"France", value: "France"},
    //   {name:"Germany", value: "Germany"},
    //   {name:"Iceland", value: "Iceland"},
    //   {name:"Iran", value: "Iran"},
    //   {name:"Japan", value: "Japan"},
    //   {name:"Mexico", value: "Mexico"},
    //   {name:"Morocco", value: "Morocco"},
    //   {name:"Nigeria", value: "Nigeria"},
    //   {name:"Panama ", value: "Panama"},
    //   {name:"Peru", value: "Peru"},
    //   {name:"Poland", value: "Poland"},
    //   {name:"Portugal", value: "Portugal"},
    //   {name:"Russia", value: "Russia"},
    //   {name:"Saudi Arabia", value: "Saudi-Arabia"},
    //   {name:"Senegal", value: "Senegal"},
    //   {name:"Serbia", value: "Serbia"},
    //   {name:"South Korea", value: "South-Korea"},
    //   {name:"Spain", value: "Spain"},
    //   {name:"Sweden", value: "Sweden"},
    //   {name:"Switzerland", value: "Switzerland"},
    //   {name:"Tunisia", value: "Tunisia"},
    //   {name:"Uruguay", value: "Uruguay"}
    // ]
  }

  startTimer(){
    this.quizService.timer= setInterval(()=>{
      this.quizService.seconds++
    },1000);
  }
  
  // Answer(qID, choice){
    
  // }

}
