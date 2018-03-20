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
import {TranslateService} from "@ngx-translate/core";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class LoginServiceApi {
    public static loggedIn: boolean = false;
    public static rol: string;
    public static username: string;
    public static user_id: number;
    public static loginId: number;

    loggedInUser:Login;
    constructor(private http:HttpClient,private router:Router,private messageService:MessageService,private translate:TranslateService) {

    }

    private postURL = 'http://localhost:8080/login/';  // URL to web api
    private postRolURL = 'http://localhost:8080/loginRole/';  // URL to web api


    getUser(username:String,password:String) {
      return this.http.post(this.postURL, {
        username: username,
        password: password
      }).subscribe(
        res => {
          this.loggedInUser = res as Login;
          if (res != null) {
            LoginServiceApi.loginId = this.loggedInUser.id;
            LoginServiceApi.loggedIn = true;
            LoginServiceApi.rol = this.loggedInUser.rol;
            LoginServiceApi.username = this.loggedInUser.username;
            LoginServiceApi.user_id = this.loggedInUser.userId;
            this.messageService.add({
                severity: 'success', summary: this.translate.instant('LOGIN.LOGGEDIN')
              }
            );
            this.router.navigate(['/']);
          }
          else {
            this.messageService.add({
                severity: 'error', summary: this.translate.instant('LOGIN.ERROR')
              }
            );
          }
        },
        err => {
          this.messageService.add({severity: 'error', summary: this.translate.instant('LOGIN.ERROR')}
          );
        });
    }
      changeRole(id:Number) {
        return this.http.post(this.postRolURL,{
          id:id}).subscribe(
          res => {
             console.log(res);
          },
          err => {
            console.log(err);
          });
    }




}

