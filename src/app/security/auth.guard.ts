import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MessageService} from "../common/service/MessageService";
import {LoginServiceApi} from "../login/loginApi.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginServiceApi: LoginServiceApi,private messageService: MessageService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean
  {
    if(LoginServiceApi.loggedIn === true && LoginServiceApi.rol === "docent")
    {
      return true;
    }
    else
    {
      this.messageService.add({
            severity: 'error', summary:'Not logged in yet'}
      );
      this.router.navigate(['/login']);
    }





  }
}
