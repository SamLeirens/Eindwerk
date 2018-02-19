import {Component, OnInit, Inject} from '@angular/core';
import {LoginService} from "../security/login.service";
import {MatDialog} from "@angular/material";
import {DialogComponent} from "./dialog/dialog.component";
//declare var $:JQueryStatic;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,public dialog: MatDialog) { }

    openDialog()
    {
      this.dialog.open(DialogComponent, {
        data: {
          animal: 'panda'
        }
      });
    }

  ngOnInit() {
  }

    login(gebruikersnaam,wachtwoord)
    {


      console.log(gebruikersnaam.value);
        console.log(wachtwoord.value);

       this.loginService.login();
    }


}

