import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginService} from "./login.service";
import {MessageService} from "../common/service/MessageService";
import {Message} from "../common/service/Message";




@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private router: Router, private loginService: LoginService,private messageService:MessageService){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean
    {
        if(LoginService.loggedIn === true)
        {
            this.messageService.add({
                severity: 'error', summary:'Already logged in'}
            );
            return false;
        }
        else
        {
            return true;
        }





    }
}
