import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Project} from '../models/Project'
import {Router} from "@angular/router";
import {LoginServiceApi} from "../login/loginApi.service";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {

    constructor(private http:HttpClient,private router: Router) { }

    private postURL = 'http://46.101.57.64:1337/project';  // URL to web api
    private getURL = 'http://46.101.57.64:1337/projects';  // URL to web api
    p:Project;

    add(naam:String,aantal:number) {
         let id = LoginServiceApi.user_id;
        this.http.post(this.postURL,{"naam":naam,"docent":{"id":id}}).subscribe(
            res => {
                this.p = <Project>res;
                this.p.aantalGroepen = aantal;
                this.router.navigate(['/aangemaaktProject',aantal,this.p]);

            },
            err => {
                console.log("Error occured");
            });


        return this.http.get(this.getURL,httpOptions);
    }



}

