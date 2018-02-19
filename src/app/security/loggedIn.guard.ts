import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "./login.service";

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean
    {



        if(LoginService.loggedIn === true)
        {
            console.log("already logged in")
            return false;
        }
        else
        {
            console.log("not logged in")
            return true;
        }





    }
}
