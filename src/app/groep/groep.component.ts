import {Component, OnInit, TemplateRef, ElementRef, ViewChild, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroepService} from "./groep.service";

import {AgendaItem} from "../models/AgendaItem";
import {DialogComponent} from "../login/dialog/dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material";
import { saveAs } from 'file-saver';
import {isNullOrUndefined} from "util";
import {Groep} from "../models/Groep";
import {Student} from "../models/Student";
import {Project} from "../models/Project";
import {TranslateService} from "@ngx-translate/core";
import {Files} from "../models/Files";

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
    fileNameDialogRef: MatDialogRef<DialogComponent>;
    newAgendaItem: AgendaItem;
    uploadedFiles: Files[] = [];
    groepen: Array<{ id: number, naam: string, projectEntity: Project, students: Array<Student> }>;

    constructor(private route: ActivatedRoute,private _groepservice: GroepService,public dialog: MatDialog,private translate:TranslateService) { }

  ngAfterViewInit() {

    this._groepservice.getGroepen().subscribe(data => {
      this.groepen = data as Groep[]
    });

      this._groepservice.getFilesByGroep(this.groepNaam).subscribe(res => this.uploadedFiles = res as Files[]);

  }

  onUpload(event) {

    //Lelijke code want het werkte niet anders
    let file = new Files(0,event.files[0].name,event.files[0].lastModified,
        event.files[0].lastModifiedDate,event.files[0].size,event.files[0].type
        ,event.files[0].webkitRelativePath,this.groepNaam);

      this._groepservice.uploadFile(file).subscribe(() => this.uploadedFiles.push(file));


    }

  onRowSelect(event) {
    console.log(event.data.name);
      window.location.href = "http://localhost:8080/download/"+event.data.name+"/"+this.groepNaam;
/*
      this._groepservice.download(event.data.name,this.groepNaam).subscribe(() => {});
*/

  }
    openDialog()
    {
        this.fileNameDialogRef = this.dialog.open(DialogComponent, {
            height: '400px',
            width: '600px',
        });

        this.fileNameDialogRef
            .afterClosed()
            .subscribe(event =>{if(!isNullOrUndefined(event[0])){this.addAgenda(event[0],event[1],event[2])}});

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

    removeAgenda(id:number) {
        for (let i = 0 ; i < this.myAgendaItems.length; i++) {
            if (this.myAgendaItems[i].id == id) {
                this.myAgendaItems.splice(i, 1);
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

    }

}
