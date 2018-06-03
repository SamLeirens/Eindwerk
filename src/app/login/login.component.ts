import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "./dialog/dialog.component";
import { LoginServiceApi } from "./loginApi.service";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NotificationService } from "../common/service/notification.service";
import { PushNotificationService } from "ng-push-notification";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginServiceApi: LoginServiceApi,
    private router: Router
  ) {}

  ngOnInit() {
  }

  login(gebruikersnaam, wachtwoord) {
      this.loginServiceApi.getUser(gebruikersnaam.value, wachtwoord.value);
  }


}
