
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { RuleComponent } from './rule/rule.component';
import { HowToPlayComponent } from './how-to-play/how-to-play.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizzComponent } from './quizz/quizz.component';

export const appRoutes : Routes=[
    {path:'', component: LandingPageComponent},
    {path:'register', component: RegisterComponent},
    {path:'quiz', component: QuizComponent},
    {path:'quizz', component: QuizzComponent},
    {path:'history', component: HistoryComponent},
    {path:'rule', component: RuleComponent},
    {path:'howto', component: HowToPlayComponent},
    {path:'leaderboard', component: LeaderboardComponent}

];