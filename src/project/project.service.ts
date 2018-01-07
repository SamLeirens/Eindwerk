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

    add(naam:String,aantal:Number) {
        console.log(this.http.get(this.getURL,httpOptions).toString());

        //TODO:project hardcoded met docentID 1 aangemaakt moet via ingelogde docent

        this.http.post(this.postURL,{"naam":naam,"docent":{"id":1}}).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            });

        //number meegeven naar nieuwe pagina
        this.router.navigate(['/aangemaaktProject',aantal]);

        return this.http.get(this.getURL,httpOptions);
    }



}

