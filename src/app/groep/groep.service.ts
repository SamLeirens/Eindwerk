import { Injectable } from '@angular/core';
import {Groep} from "../models/Groep";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {AgendaItem} from "../models/AgendaItem";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class GroepService {


  constructor(private http:HttpClient ){ }

    private postURL = 'http://localhost:8080/groep';  // URL to web api
    private getURL = 'http://localhost:8080/groeps';  // URL to web api
    private getByIdUrl = 'http://localhost:8080/groeps/';
    private getStudentsUrl ='http://localhost:8080/students/';
    private agenda='http://localhost:8080/agenda/';
    private deleteAgenda='http://localhost:8080/deleteAgenda/';



    addAgendaItem(agendaItem: AgendaItem)
    {
        console.log(agendaItem);
        this.http.post(this.agenda,agendaItem,httpOptions).subscribe(
        res => {
            console.log("agenda geupdate");
        },
        err => {
            console.log("Error occured");
        });
        return this.getAgendaByGroep(agendaItem.groep);

    }

    getAgendaByGroep(naam:String) {
        return this
            .http
            .get(this.agenda+naam);

    }

    deleteAgendaItem(id:number) {
        console.log(this.deleteAgenda+id);
        return this
            .http
            .get(this.deleteAgenda+id);
    }




    addGroep(groep:Groep) {

    this.http.post(this.postURL,JSON.stringify(groep),httpOptions).subscribe(
        res => {
          console.log("groep geupdate");
        },
        err => {
          console.log("Error occured");
        });

    return this.http.get(this.getURL,httpOptions);

  }

  getGroepen() {


    return this
        .http
        .get(this.getURL);
  }


    getGroepByNaam(id:String) {

        return this
            .http
            .get(this.getByIdUrl+id);
    }

    getStudentsByGroep(naam:String) {
        return this
            .http
            .get(this.getStudentsUrl+naam);

    }



}
