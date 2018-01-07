import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/Student";
import {HttpHeaders} from "@angular/common/http";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LeerlingService {


  constructor(private http:HttpClient ){ }

  private postURL = 'http://localhost:8080/student';  // URL to web api
  private getURL = 'http://localhost:8080/students';  // URL to web api




updateInGroep(student:Student) {


         this.http.post(this.postURL,JSON.stringify(student),httpOptions).subscribe(
            res => {
                console.log("student geupdate");
            },
            err => {
                console.log("Error occured");
            });

    return this.http.get(this.getURL,httpOptions);

    }

getLeerlingen() {


 return this
      .http
      .get(this.getURL);
}
}
