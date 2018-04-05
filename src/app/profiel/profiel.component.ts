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
  providers:[LoginServiceApi],
    encapsulation:ViewEncapsulation.None
})
export class ProfielComponent implements OnInit {

  constructor(private messageService:MessageService,private loginService:LoginServiceApi) { }

  ngOnInit() {

  }
  changePw(pw,nieuwpw,herhaaldpw){
    if(nieuwpw.value !== herhaaldpw.value)
    {
      this.messageService.add({severity: 'error', summary: this.messageService.add({severity: 'error', summary: this.translate.instant('CHANGEPW.ERROR')})})
    }
    else
    {
      this.loginService.changePw(LoginServiceApi.loginId,pw.value,nieuwpw.value);
    }
  }

  loggedInAsNewStudent()
  { return LoginServiceApi.rol === 'nieuweStudent';}
}
