import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "./login.service";
import {MessageService} from "../common/service/MessageService";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService,private messageService: MessageService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean
  {



    if(LoginService.loggedIn === true)
    {
      return true;
    }
    else
    {
      this.messageService.add({
            severity: 'error', summary:'Not logged in yet'
          }
      );
      this.router.navigate(['/login']);
    }





  }
}
