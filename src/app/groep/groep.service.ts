import { Injectable } from '@angular/core';
import {Groep} from "../models/Groep";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {AgendaItem} from "../models/AgendaItem";
import {Files} from "../models/Files";
import {TimesheetsComponent} from "./timesheets/timesheets.component";
import {Timesheet} from "../models/Timesheet";
import {NotificationService} from "../common/service/notification.service";



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class GroepService {


  constructor(private http:HttpClient , private notificationService:NotificationService){ }

    private postURL = 'http://46.101.57.64:1337/groep';  // URL to web api
    private getURL = 'http://46.101.57.64:1337/groeps';  // URL to web api
    private getByIdUrl = 'http://46.101.57.64:1337/groeps/';
    private getStudentsUrl ='http://46.101.57.64:1337/students/';
    private agenda='http://46.101.57.64:1337/agenda/';
    private deleteAgenda='http://46.101.57.64:1337/deleteAgenda/';
    private fileUrl = 'http://46.101.57.64:1337/file/';
    private filesUrl = 'http://46.101.57.64:1337/files/';
    private timesheetUrl = 'http://46.101.57.64:1337/timesheet/';
    private chatURL = "http://46.101.57.64:1337/chat";
    private deleteTimesheet="http://46.101.57.64:1337/deleteTimesheet/";


    getChatByGroup(groep:String) {
      return this
          .http
          .get(this.chatURL+"/"+groep);
  }

  saveChatMsg(chatBericht:any)
  {
    this.notificationService.start();
      console.log(chatBericht);
      console.log(JSON.stringify(chatBericht));
      this.http.post(this.chatURL,JSON.stringify(chatBericht),httpOptions).subscribe(
          res => {
          },
          err => {
              console.log("Error occured");
          });
    this.notificationService.stop();
  }
    
    uploadFile(file:any)
    {
      this.notificationService.start();
        console.log(file);
        console.log(JSON.stringify(file));
        this.http.post(this.fileUrl,JSON.stringify(file),httpOptions).subscribe(
            res => {
                console.log("file geupload");
            },
            err => {
                console.log("Error occured");
            });
      this.notificationService.stop();

      return this.getFilesByGroep(file.groep);
    }

    addAgendaItem(agendaItem: AgendaItem)
    {
      this.notificationService.start();
      this.http.post(this.agenda,agendaItem,httpOptions).subscribe(
        res => {
            console.log("agenda geupdate");
        },
        err => {
            console.log("Error occured");
        });
      this.notificationService.stop();

      return this.getAgendaByGroep(agendaItem.groep);
    }

  addTimesheetItem(ts: Timesheet)
  {
    this.notificationService.start();
    this.http.post(this.timesheetUrl,ts,httpOptions).subscribe(
      res => {
        console.log("timesheet geupdate");
      },
      err => {
        console.log("Error occured");
      });

    this.notificationService.stop();
    return this.getTimesheetByGroep(ts.groep);
  }
    getFilesByGroep(naam:String) {
        return this
            .http
            .get(this.filesUrl+naam);

    }


    getAgendaByGroep(naam:String) {
        return this
            .http
            .get(this.agenda+naam);

    }

  getTimesheetByGroep(naam:String) {
    return this
      .http
      .get(this.timesheetUrl+naam);

  }

    deleteAgendaItem(id:number) {
        return this
            .http
            .get(this.deleteAgenda+id);
    }

  deleteTs(id:number) {
    return this
      .http
      .get(this.deleteTimesheet+id);
  }



    addGroep(groep:Groep) {
      this.notificationService.start();
      this.http.post(this.postURL,JSON.stringify(groep),httpOptions).subscribe(
        res => {
          console.log("groep geupdate");
        },
        err => {
          console.log("Error occured");
        });
      this.notificationService.stop();

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
