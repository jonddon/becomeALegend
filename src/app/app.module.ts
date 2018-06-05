import { QuizService } from './shared/quiz.service';
import { QuizzService } from './quizz.service';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';


import{ FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { RuleComponent } from './rule/rule.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizzComponent } from './quizz/quizz.component';
import { HttpModule} from '@angular/http';
import { ResultComponent } from './result/result.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import {MatSelectModule} from '@angular/material'


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    QuizComponent,
    LandingPageComponent,
    HistoryComponent,
    RuleComponent,
    HowToPlayComponent,
    LeaderboardComponent,
    QuizzComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot()
    // MatSelectModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [QuizzService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
