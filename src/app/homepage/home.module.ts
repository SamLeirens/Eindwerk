import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {HeaderModule} from "../header/header.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GroepWerkQuestionsComponent} from "../profiel/vraag-1/groep-werk-questions.component";
import {QuizComponent} from "../profiel/quiz/quiz.component";
import {TranslateModule} from "@ngx-translate/core";





@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        FormsModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
