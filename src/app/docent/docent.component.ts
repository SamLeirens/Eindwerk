import {Component, OnInit, Injectable, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {Docent} from "../models/Docent"
import {DocentService} from "./docent.service";
import {Message} from "primeng/components/common/message";

import {SortEvent} from "primeng/api";
import {GroepService} from "../groep/groep.service";
import {Groep} from "../models/Groep";
import {Project} from "../models/Project";
import {Student} from "../models/Student";
import {MessageService} from "../common/service/MessageService";
import {Router} from "@angular/router";
@Component({
  selector: 'app-docent',
  templateUrl: 'docent.component.html',
  styleUrls: ['docent.component.css'],
  providers:[DocentService,GroepService]
})



export class DocentComponent implements AfterViewInit,OnInit {
    ngOnInit(): void {}

    public docs;

    msgs: Message[];
    cols: any[];
    selectedGroep: Groep;
    groepen: Array<{id:number,naam:string,projectEntity:Project,students:Array<Student>}>;
    studenten:Student[];


  ngAfterViewInit() {

      this.groepService.getGroepen().subscribe(data => {this.groepen = data as Groep[]});
/*
      this.groepen = [
        {"id": 1, "naam": "Software project groep 1","projectEntity":new Project(1),"students":this.studenten},
        {"id": 22, "naam": "Software project groep 2","projectEntity":new Project(2),"students":this.studenten},
        {"id": 3, "naam": "Software project groep 3","projectEntity":new Project(2),"students":this.studenten},
        {"id": 4, "naam": "Software project groep 4","projectEntity":new Project(3),"students":this.studenten},

      ];*/


    this.cols = [
        { field: 'id', header: 'Id' },
        { field: 'naam', header: 'Naam' },
        {field:'projectEntity',header: 'Project'}
    ];




    //grafiek aanmaken en data insteken

  }

constructor(private router: Router,private _docentService: DocentService, private groepService: GroepService,private messageService: MessageService)
{

}
    onRowSelect(event) {
        this.messageService.add({severity:'info', summary:' details van ' + event.data.naam});
      this.router.navigate(['/detailGroepen',event.data.id]);
    }

    onRowUnselect(event) {

    }

    getDocents(voornaam,achternaam) {
        this._docentService.getDocent(voornaam.value,achternaam.value).subscribe(
            data => {
                this.docs = data[0]
            }
        );
    }





}
