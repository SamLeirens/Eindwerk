import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {MessageService} from "../common/service/MessageService";


@Injectable()
export class LoginService {

public static loggedIn: boolean = false;

constructor(private router: Router,private messageService: MessageService){}


        login()
        {
            LoginService.loggedIn = true;
            this.messageService.add({
                    severity: 'success', summary:'Logged in'
                }
            );
            this.router.navigate(['/']);

        }

}

