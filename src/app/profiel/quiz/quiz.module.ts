import {NgModule} from "@angular/core";
import {QuizComponent} from "./quiz.component";
import {GroepWerkQuestionsComponent} from "../vraag-1/groep-werk-questions.component";
import {BrowserModule} from "@angular/platform-browser";
import {HeaderModule} from "../../header/header.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    QuizComponent,
    GroepWerkQuestionsComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports:[QuizComponent],
  bootstrap: [QuizComponent]
})
export class QuizModule { }
