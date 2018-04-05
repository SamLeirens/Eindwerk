import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../models/Student";
import {HttpHeaders} from "@angular/common/http";
import {Groep} from "../models/Groep";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class LeerlingService {


  constructor(private http:HttpClient ){ }

    private postURL = 'http://localhost:8080/student';
    private getURL = 'http://localhost:8080/students';
    private getStudent = 'http://localhost:8080/student/';
    private updateRolUrl = 'http://localhost:8080/student/rol/';
    private gsmUrl = 'http://localhost:8080/studentGsm/';

updateRol(student:Student) {
        this.http.post(this.updateRolUrl,JSON.stringify(student),httpOptions).subscribe(
            res => {
                console.log("student geupdate");
            },
            err => {
                console.log("Error occured");
            });
    }

updateInGroep(student:Student) {
this.http.post(this.postURL,JSON.stringify(student),httpOptions).subscribe
    (
    res => {
        console.log("student geupdate");
    },
    err => {
        console.log("Error occured");
    });
  return this.http.get(this.getURL,httpOptions);
    }

getLeerlingen()
    {
     return this
          .http
          .get(this.getURL);
    }

getLeerlingenById(id:number)
    {
        return this
            .http
            .get(this.getStudent+id);
    }

  changeEmail(id:number,email:string) {

    this.http.post(this.postURL+"/"+id+"/"+email,{}).subscribe
    (
      () => {
      },
      err => {
        console.log("Error occured");
      });

  }

  changeGsm(id:number,gsm:string  ){
    this.http.post(this.gsmUrl+"/"+id+"/"+gsm,{}).subscribe
    (
      res => {
      },
      err => {
        console.log("Error occured");
      });
  }
}
