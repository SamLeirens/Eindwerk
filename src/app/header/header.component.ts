import {Component, OnInit} from '@angular/core';
import {LoginServiceApi} from "../login/loginApi.service";
import {Login} from "../models/Login";
import {Router} from "@angular/router";
import {LeerlingService} from "../aangemaakt-project/leerling.service";
import {Student} from "../models/Student";
import {MessageService} from "../common/service/MessageService";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'HeaderComponent',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css'],
    providers:[LeerlingService]
})
export class HeaderComponent implements OnInit{

    constructor(private translate:TranslateService,private router:Router,private leerlingService:LeerlingService,private messageService:MessageService){
    };

    ngOnInit()
    {
    }
    loggedInUser:any;
    sub:any;

    getStudentGroep(){
        if(LoginServiceApi.rol === 'student')
        {
           this.sub = this.leerlingService.getLeerlingenById(LoginServiceApi.user_id).subscribe(res =>
           {
               this.loggedInUser = res;
               if(this.loggedInUser.inGroep)
               {
                   this.router.navigate(['/groep/' + this.loggedInUser.groep])
               }
               else
               {
                   this.messageService.add({severity: 'error', summary: this.translate.instant("HEADER.NOTINGROUP")})
               }
           });
        }
        else{this.messageService.add({severity: 'error', summary: this.translate.instant("HEADER.NOTINGROUP")})}

    }

    loggedInAsDocent()
    { return LoginServiceApi.rol === 'docent';}

    loggedIn()
    { return LoginServiceApi.loggedIn;}

    logout()
    {
        LoginServiceApi.loggedIn = false;
        LoginServiceApi.rol = "";
        LoginServiceApi.username = "";
        LoginServiceApi.user_id = null;

        this.router.navigate(["/login"]);
    }

  changeLanguage(event: any, language: string): boolean {
    event.preventDefault();
    this.translate.use(language);

    return false;
  }
}
