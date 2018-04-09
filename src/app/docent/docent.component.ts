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
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-docent',
  templateUrl: 'docent.component.html',
  styleUrls: ['docent.component.css'],
  providers:[DocentService,GroepService]
})



export class DocentComponent implements AfterViewInit,OnInit {
  ngOnInit(): void {
  }

  public docs;

  msgs: Message[];
  cols: any[];
  selectedGroep: Groep;
  groepen: Array<{ id: number, naam: string, projectEntity: Project, students: Array<Student> }>;
  studenten: Student[];


  ngAfterViewInit() {

    this.groepService.getGroepen().subscribe(data => {
      this.groepen = data as Groep[]
    });

    this.cols = [
      {field: 'id', header: 'Id'},
      {field: 'naam', header: this.tranlate.instant("NAME")},
    ];
  }

  constructor(private tranlate:TranslateService,private router: Router, private _docentService: DocentService, private groepService: GroepService, private messageService: MessageService) {
  }

  onRowSelect(event) {
    this.messageService.add({severity: 'info', summary: this.tranlate.instant("TEACHER.INFOOF") + event});
    this.router.navigate(['/detailGroepen', event]);
  }

  onRowUnselect(event) {}
}
