import {Component, OnInit, TemplateRef, ElementRef, ViewChild, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroepService} from "./groep.service";

import {AgendaItem} from "../models/AgendaItem";
import {Timesheet} from "../models/Timesheet";
import {DialogComponent} from "../login/dialog/dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import { saveAs } from 'file-saver';
import {isNullOrUndefined} from "util";
import {Groep} from "../models/Groep";
import {Student} from "../models/Student";
import {Project} from "../models/Project";
import {TranslateService} from "@ngx-translate/core";
import {Files} from "../models/Files";
import {TimesheetsComponent} from "./timesheets/timesheets.component";
import * as jsPDF from 'jspdf'
import * as jpt from 'jspdf-autotable';

@Component({
  selector: 'app-groep',
  templateUrl: './groep.component.html',
  styleUrls: ['./groep.component.css'],
  providers: [GroepService],
  encapsulation:ViewEncapsulation.None
})
export class GroepComponent implements AfterViewInit,OnInit {

    groepNaam: string;
    sub:any ;
    myData2: any = [];
    myAgendaItems:AgendaItem[];
    myTimesheetsItems:Timesheet[];
    fileNameDialogRef: MatDialogRef<DialogComponent>;
    fileNameDialogRefTimesheets: MatDialogRef<TimesheetsComponent>;
    newAgendaItem: AgendaItem;
    newTimesheet:Timesheet;
    uploadedFiles: Files[] = [];
    groepen: Array<{ id: number, naam: string, projectEntity: Project, students: Array<Student> }>;

    constructor(private route: ActivatedRoute,private _groepservice: GroepService,public dialog: MatDialog,private translate:TranslateService) { }


  exportToPdf()
  {
    let doc = new jsPDF('p', 'pt');    jpt;

    doc.setFontType('bold');
    doc.text('Timesheet ' + this.groepNaam, 10, 35);

    doc.setDrawColor(0, 153, 255);
    doc.setLineWidth(1);
    doc.line(10, 40, 300, 40);
    doc.setFontSize(11);
    if (this.myTimesheetsItems.length > 0) {
      let columnsExtra = ["Datum", "Begin","Einde","Onderwerp"];
      let rowsExtra = [];
      for (let i = 0; i < this.myTimesheetsItems.length; i++) {
        rowsExtra.push([this.myTimesheetsItems[i].datum,this.myTimesheetsItems[i].beginTijd,this.myTimesheetsItems[i].eindTijd,this.myTimesheetsItems[i].onderwerp])
      }
      doc.autoTable(columnsExtra, rowsExtra, {
        startY: 50,
        pageBreak: 'avoid',
        theme: 'grid',
        styles: { overflow: 'linebreak' }
      });
    }
    doc.save("timesheet.pdf");
  }

  ngAfterViewInit() {

    this._groepservice.getGroepen().subscribe(data => {
      this.groepen = data as Groep[]
    });

      this._groepservice.getFilesByGroep(this.groepNaam).subscribe(res => this.uploadedFiles = res as Files[]
      );

  }

  onUpload(event) {

    //Lelijke code want het werkte niet anders
    let file = new Files(0,event.files[0].name,event.files[0].lastModified,
        event.files[0].lastModifiedDate,event.files[0].size,event.files[0].type
        ,event.files[0].webkitRelativePath,this.groepNaam);

      this._groepservice.uploadFile(file).subscribe(() => this.uploadedFiles.push(file));


    }
  openTimesheets()
  {
    this.fileNameDialogRefTimesheets = this.dialog.open(TimesheetsComponent, {
      height: '400px',
      width: '600px',
    });

    this.fileNameDialogRefTimesheets
      .afterClosed()
      .subscribe(event =>{if(!isNullOrUndefined(event)){{if(!isNullOrUndefined(event[0])){this.addTimesheet(event[0],event[1],event[2],event[3])}}}});

  };
  addTimesheet(date,begin,einde,event)
  {
    this.newTimesheet = new Timesheet(date,begin,einde,event,this.groepNaam);

    this._groepservice.addTimesheetItem(this.newTimesheet).subscribe(() => {});

    if(this.newTimesheet.eindTijd != null) {this.myTimesheetsItems.push(this.newTimesheet);}
  }

  onRowSelect(event) {
    console.log(event.data.name);
      window.location.href = "http://localhost:8080/download/"+event.data.name+"/"+this.groepNaam;
  }
    openDialog()
    {
        this.fileNameDialogRef = this.dialog.open(DialogComponent, {
            height: '400px',
            width: '600px',
        });

        this.fileNameDialogRef
            .afterClosed()
            .subscribe(event =>{if(!isNullOrUndefined(event)){if(!isNullOrUndefined(event[0])){this.addAgenda(event[0],event[1],event[2])}}});

    };


    addAgenda(date,time,event)
    {
        this.newAgendaItem = new AgendaItem(date,time,event,this.groepNaam);

        this._groepservice.addAgendaItem(this.newAgendaItem).subscribe(() => {});

        if(this.newAgendaItem.tijd != null)
        {
            this.myAgendaItems.push(this.newAgendaItem);
        }
    }

  show()
  {
      var div = document.getElementById('content');
      if (div.style.display !== 'none')
      {
          div.style.display = 'none';
      }
      else
      {
          div.style.display = 'block';
      }
  }

    deleteAgendaItem(id:number)
        {
            this.removeAgenda(id);
            this._groepservice.deleteAgendaItem(id)
                .subscribe();

        }
  deleteTimesheetItem(id:number)
  {
    this.removeTimesheet(id);
    this._groepservice.deleteTs(id).subscribe();
  }
    removeAgenda(id:number) {
        for (let i = 0 ; i < this.myAgendaItems.length; i++) {
            if (this.myAgendaItems[i].id == id) {
                this.myAgendaItems.splice(i, 1);
                break;
            }
        }
    }
  removeTimesheet(id:number) {
    for (let i = 0 ; i < this.myTimesheetsItems.length; i++) {
      if (this.myTimesheetsItems[i].id == id) {
        this.myTimesheetsItems.splice(i, 1);
        break;
      }
    }
  }
    ngOnInit()
    {
        this.sub = this.route.params.subscribe(params => {this.groepNaam = params['naam']; });
        this
            ._groepservice
            .getStudentsByGroep(this.groepNaam)
            .subscribe
            (data =>
                {
                    this.myData2 = data;
                }
            );
        this
            ._groepservice
            .getAgendaByGroep(this.groepNaam)
            .subscribe
            (data =>
                {
                    this.myAgendaItems = data as AgendaItem[];
                }
            );
      this
        ._groepservice
        .getTimesheetByGroep(this.groepNaam)
        .subscribe
        (data =>
          {
            this.myTimesheetsItems = data as Timesheet[];
          }
        );

    }

}
