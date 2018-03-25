import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {GroepWerkQuestionsComponent} from "./vraag-1/groep-werk-questions.component";
import {QuizComponent} from "./quiz/quiz.component";
import {MenuItem} from "primeng/api";
import {LoginServiceApi} from "../login/loginApi.service";
import {MessageService} from "../common/service/MessageService";

@Component({
  selector: 'profiel',
  templateUrl: 'profiel.component.html',
  styleUrls: ['profiel.component.css'],
    encapsulation:ViewEncapsulation.None
})
export class ProfielComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit() {

  }
  changePw(pw,nieuwpw,herhaaldpw){
    if(nieuwpw.value !== herhaaldpw.value)
    {
      this.messageService.add({severity: 'error', summary: 'wachtwoorden komen niet overeen'})
    }
    else
    {
      /*TODO:check of ingevuld wachtwoord gelijk is aan wachtwoord van login met login_id van de ingelogde gebruiker*/
    }
  }

  loggedInAsNewStudent()
  { return LoginServiceApi.rol === 'nieuweStudent';}
}
