import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Docent} from "../models/Docent";
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Router} from "@angular/router";
import {MessageService} from "../common/service/MessageService";
import {Login} from "../models/Login";
import {HeaderComponent} from "../header/header.component";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class LoginServiceApi {
    public static loggedIn: boolean = false;
    public static rol: string;
    public static username: string;
    public static user_id: number;

    loggedInUser:Login;
    constructor(private http:HttpClient,private router:Router,private messageService:MessageService) {

    }

    private postURL = 'http://localhost:8080/login/';  // URL to web api



    getUser(username:String,password:String) {
       return this.http.post(this.postURL,{
            username:username,
            password:password}).subscribe(
            res => {
                this.loggedInUser = res as Login;
                if(res != null)
                {
                    console.log(this.loggedInUser);
                    LoginServiceApi.loggedIn = true;
                    LoginServiceApi.rol = this.loggedInUser.rol;
                    LoginServiceApi.username = this.loggedInUser.username;
                    LoginServiceApi.user_id = this.loggedInUser.userId;
                    this.messageService.add({
                        severity: 'success', summary: 'Logged in'
                    }
                );
                this.router.navigate(['/']);
                }
                else
                {
                    this.messageService.add({
                            severity: 'error', summary: 'gebruikersnaam of wachtwoord is fout'
                        }
                    );
                }
            },
            err => {
                this.messageService.add({
                        severity: 'error', summary: 'gebruikersnaam of wachtwoord is fout'
                    }
                );
            });

    }




}

