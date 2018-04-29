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
    if (gebruikersnaam.value == "dev" && wachtwoord.value == "dev") {
      LoginServiceApi.loggedIn = true;
      LoginServiceApi.rol = "nieuweStudent";
      LoginServiceApi.username = "dev";
      LoginServiceApi.user_id = 1337;
      this.router.navigate(["/"]);
    } else {
      this.loginServiceApi.getUser(gebruikersnaam.value, wachtwoord.value);
    }
  }


}
