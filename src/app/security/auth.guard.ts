import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "./login.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean
  {



    if(LoginService.loggedIn === true)
    {
      console.log("logged in")
      return true;
    }
    else
    {
      console.log("not logged in")
      this.router.navigate(['/login']);
    }





  }
}
