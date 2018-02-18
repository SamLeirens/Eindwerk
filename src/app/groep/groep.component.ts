import {Component, OnInit, TemplateRef, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroepService} from "./groep.service";
import {Groep} from "../models/Groep";
import {AgendaItem} from "../models/AgendaItem";


@Component({
  selector: 'app-groep',
  templateUrl: './groep.component.html',
  styleUrls: ['./groep.component.css'],
  providers: [GroepService]
})
export class GroepComponent implements OnInit {

  constructor(private route: ActivatedRoute,private _groepservice: GroepService) { }


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


    groepNaam: string;
  sub:any ;
  groepenArray:Groep[] = [];
    myData2: any = [];
    myAgendaItems:AgendaItem[];
    vandaag = this.getDate();
    dd: any;


    deleteAgendaItem(id:number)
        {
            console.log(id);
            this.removeAgenda(id);
            this._groepservice.deleteAgendaItem(id)
                .subscribe();

        }

    removeAgenda(id:number) {
        console.log("lengte"+ this.myAgendaItems.length);
        for (let i = 0 ; i < this.myAgendaItems.length; i++) {

            console.log("binne");
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
