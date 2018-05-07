import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Docent} from "../models/Docent";
import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {MessageService} from "../common/service/MessageService";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()
export class DetailGroepenService {

  constructor(private http:HttpClient) { }

  private getURL = 'http://46.101.57.64:1337/punten/';  // URL to web api
  private groepenPunten="http://46.101.57.64:1337/puntenGroep/";

  getPuntenByGroup(groep:String) {
    console.log(groep);
    return this
        .http
        .get(this.groepenPunten+groep);
}

  getPuntenFromGroep(naam:String) {
    return this
      .http
      .get(this.getURL+naam);
  }


  addPunten(studentId:number,sprint:String,punt:number)
  {
    return this.http.get(this.getURL+studentId+"/"+sprint+"/"+punt)
  }
  addPuntenGroep(groep:string,sprint:String,punt:number)
  {
    return this.http.get(this.groepenPunten+groep+"/"+sprint+"/"+punt)
  }

}

