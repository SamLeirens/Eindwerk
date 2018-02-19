import { Injectable } from '@angular/core';
import {Router} from "@angular/router";


@Injectable()
export class LoginService {

public static loggedIn: boolean = false;

constructor(private router: Router){}


        login()
        {
            LoginService.loggedIn = true;
            this.router.navigate(['/']);
        }

}

