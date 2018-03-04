import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog} from "@angular/material";
import {DialogComponent} from "./dialog/dialog.component";
import {LoginServiceApi} from "./loginApi.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginServiceApi]
})
export class LoginComponent implements OnInit {

  constructor(private loginServiceApi: LoginServiceApi) { }


  ngOnInit() {
  };
    login(gebruikersnaam,wachtwoord)
    {
       this.loginServiceApi.getUser(gebruikersnaam.value,wachtwoord.value);
    }


}

