import {Component, OnInit, TemplateRef, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroepService} from "./groep.service";

import {AgendaItem} from "../models/AgendaItem";
import {DialogComponent} from "../login/dialog/dialog.component";
import {MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-groep',
  templateUrl: './groep.component.html',
  styleUrls: ['./groep.component.css'],
  providers: [GroepService],
  encapsulation:ViewEncapsulation.None
})
export class GroepComponent implements OnInit {

    groepNaam: string;
    sub:any ;
    myData2: any = [];
    myAgendaItems:AgendaItem[];
    fileNameDialogRef: MatDialogRef<DialogComponent>;
    newAgendaItem: AgendaItem;


    constructor(private route: ActivatedRoute,private _groepservice: GroepService,public dialog: MatDialog) { }


    openDialog()
    {
        this.fileNameDialogRef = this.dialog.open(DialogComponent, {
            height: '400px',
            width: '600px',
        });

        this.fileNameDialogRef
            .afterClosed()
            .subscribe(event => this.addAgenda(event[0],event[1],event[2]));

    }


    addAgenda(date,time,event)
    {
        this.newAgendaItem = new AgendaItem(date,time,event,this.groepNaam);

        this._groepservice.addAgendaItem(this.newAgendaItem).subscribe(
            data => {

            }

        );
        if(this.newAgendaItem.tijd != null)
        {
            this.myAgendaItems.push(this.newAgendaItem);
        }
    }

  show()
  {
      var div = document.getElementById('content');
      if (div.style.display !== 'none') {
          div.style.display = 'none';
      }
      else {
          div.style.display = 'block';
      }
  }


    getDate(){
    return new Date('yyyy-mm-dd')
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
    ngOnInit() {




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
