import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import {GroepWerkQuestionsComponent} from "./vraag-1/groep-werk-questions.component";
import {QuizComponent} from "./quiz/quiz.component";
import {MenuItem} from "primeng/api";
import {LoginServiceApi} from "../login/loginApi.service";
import {MessageService} from "../common/service/MessageService";
import {LeerlingService} from "../aangemaakt-project/leerling.service";
import {Student} from "../models/Student";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'profiel',
  templateUrl: 'profiel.component.html',
  styleUrls: ['profiel.component.css'],
  providers:[LoginServiceApi,LeerlingService],
    encapsulation:ViewEncapsulation.None
})
export class ProfielComponent implements OnInit {

  emailOutput:string;
  gsmOutput:string;
  constructor(private messageService:MessageService,private loginService:LoginServiceApi,private leerlingService:LeerlingService,private translate:TranslateService) { }

  ngOnInit() {

    this.leerlingService.getLeerlingenById(LoginServiceApi.user_id).subscribe(
      res =>{
        let student = res as Student; this.emailOutput = student.email;this.gsmOutput = student.gsm
      }
        );
  }
  changePw(pw,nieuwpw,herhaaldpw){
    if(nieuwpw.value !== herhaaldpw.value)
    {
      this.messageService.add({severity: 'error', summary: this.translate.instant('CHANGEPW.ERROR')})
    }
    else
    {
      this.loginService.changePw(LoginServiceApi.loginId,pw.value,nieuwpw.value);
    }
  }

  loggedInAsNewStudent()
  { return LoginServiceApi.rol === 'nieuweStudent';}

  changeEmail(email)
  {
    this.leerlingService.changeEmail(LoginServiceApi.user_id,email.value);
    this.messageService.add({severity: 'success', summary: this.translate.instant('CHANGED')});
    this.emailOutput = email.value;
    (<HTMLInputElement>document.getElementById("email")).value = "";

  }

  changeGsm(gsm)
  {
    this.leerlingService.changeGsm(LoginServiceApi.user_id,gsm.value);
    this.messageService.add({severity: 'success', summary: this.translate.instant('CHANGED')});
    this.gsmOutput = gsm.value;
    (<HTMLInputElement>document.getElementById("gsm")).value = "";

  }
}
