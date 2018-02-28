import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Project} from '../models/Project'
import {Router} from "@angular/router";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {

    constructor(private http:HttpClient,private router: Router) { }

    private postURL = 'http://localhost:8080/project';  // URL to web api
    private getURL = 'http://localhost:8080/projects';  // URL to web api
    p:Project;

    add(naam:String,aantal:number) {

        //TODO:project hardcoded met docentID 1 aangemaakt moet via ingelogde docent

        this.http.post(this.postURL,{"naam":naam,"docent":{"id":1}}).subscribe(
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
