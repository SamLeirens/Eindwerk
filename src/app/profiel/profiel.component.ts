import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {GroepWerkQuestionsComponent} from "./vraag-1/groep-werk-questions.component";
import {QuizComponent} from "./quiz/quiz.component";
import {MenuItem} from "primeng/api";
import {LoginServiceApi} from "../login/loginApi.service";

@Component({
  selector: 'profiel',
  templateUrl: 'profiel.component.html',
  styleUrls: ['profiel.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class ProfielComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  loggedInAsNewStudent()
  { return LoginServiceApi.rol === 'nieuweStudent';}
}
