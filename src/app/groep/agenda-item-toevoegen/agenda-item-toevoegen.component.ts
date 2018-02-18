import { Component, OnInit } from '@angular/core';
import {GroepService} from "../groep.service";
import {AgendaItem} from "../../models/AgendaItem";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'agendaItemToevoegen',
  templateUrl: './agenda-item-toevoegen.component.html',
  styleUrls: ['./agenda-item-toevoegen.component.css']
})
export class AgendaItemToevoegenComponent implements OnInit {

  agendaItem: AgendaItem;
  groepNaam:string;
  sub:any;

  constructor(private route: ActivatedRoute,private _groepservice: GroepService) { }

  ngOnInit() {
  }

  addAgendaItem(datum,tijd,onderwerp)
  {
    console.log("addAgendaItem");
    this.sub = this.route.params.subscribe(params => {this.groepNaam = params['naam']; });
    this.agendaItem = new AgendaItem(datum.value,tijd.value,onderwerp.value,this.groepNaam);

    this._groepservice.addAgendaItem(this.agendaItem).subscribe(
        data => {
          console.log(data)

        }

    );
  }
}
