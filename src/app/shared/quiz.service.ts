import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpModule, JsonpModule, Http } from '@angular/http';



@Injectable()
export class QuizService {

  //--------------------------Properties------------------

  // readonly rootUrl= "http://localhost:4200";
  questions: any[];
  seconds:number;
  timer;
  qnProgress: number;


  //------------------Helper Methods-------------------------

  constructor(private http: Http) { }


  //-----------------------HTTP Methods----------------
  // insertParticipant( name: string, 
  //   email:string, 
  //   phoneNumber:number,
  //   country:string,
  //   jerseyNumber:number)
  //   {
  //   var body={
  //     Name: name,
  //     Email:email,
  //     PhoneNumber: phoneNumber,
  //     Country:country,
  //     JerseyNumber: jerseyNumber
  //   }
  //   return this.http.post(this.rootUrl+'/api/insertParticipant', body);
  //

  getQuestions(){
    // return this.http.get(this.rootUrl + 'src\assets\questions.json');
    return this.http.get('../assets/questions.json');
  }
  

}
