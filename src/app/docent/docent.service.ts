import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Docent} from "../models/Docent";
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import {Http, Response, RequestOptions, Headers} from "@angular/http";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()
export class DocentService {

    constructor(private http:HttpClient) { }

    private postURL = 'http://46.101.57.64:1337/docent';  // URL to web api
    private getURL = 'http://46.101.57.64:1337/docents';  // URL to web api

    getDocent(voornaam:String,achternaam:String) {
        this.http.post(this.postURL,{
            voornaam:voornaam,
            achternaam:achternaam}).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            });
        return this.http.get(this.getURL,httpOptions);
    }




}

