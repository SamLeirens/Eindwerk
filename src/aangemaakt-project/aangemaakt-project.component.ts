import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeerlingService} from "./leerling.service";
import {Observable} from "rxjs";
import {Groep} from "../models/Groep";
import {Student} from "../models/Student";

@Component({
  selector: 'aangemaakt-project',
  templateUrl: 'aangemaakt-project.component.html',
  styleUrls: ['aangemaakt-project.component.css'],
    providers: [LeerlingService],
})
export class AangemaaktProjectComponent implements OnInit{


  aantalGroepen:number;
  myData: any = [];
    groepenArray:Groep[] = [];
  constructor(private route: ActivatedRoute,private _leerlingService: LeerlingService) { }

  updateStudent(student:Student){

      this._leerlingService.updateInGroep(student).subscribe(
          data => {
              console.log(data)

          }

      );

  }

  ngOnInit() {
     this.aantalGroepen = +this.route.snapshot.paramMap.get('id');


      for(let x = 1;x<=this.aantalGroepen;x++) {

          let studentIdLijst: any = [];
          //gevraagd aantal groepen maken
         let groep = new Groep(x,"groep "+x);
         let doneCheck1 = false;
          let doneCheck2 = false;

         //alle leerlingen ophalen
          this
              ._leerlingService
              .getLeerlingen()
              .subscribe
              (data =>
                  {
                      this.myData = data;
                      //console.log(this.myData);
                      this.maakGroep(groep);
                  }
             );



          this.groepenArray.push(groep);
      }


  }

    maakGroep(groep:Groep) {

        console.log("in functie gegaan");
        let doneCheck1 = false;
        let doneCheck2 = false;
        let studentIdLijst: any = [];

        for (let i = 0; i < this.myData.length; i++) {
            let student = <Student> this.myData[i];

            if (student.rol == "architect" && !student.inGroep && !doneCheck1) {
                doneCheck1 = true;
                studentIdLijst += i;
                student.inGroep = true;
                student.groep = groep.id;
                console.log("groep id verandert");
                //groep id geven aan student
                this.updateStudent(student)
            } else if (student.rol == "xx" && !student.inGroep && !doneCheck2) {
                doneCheck2 = true;
                studentIdLijst += i;
                student.inGroep = true;
                student.groep = groep.id;
                //groep id geven aan student
                this.updateStudent(student)
            }

        }
    }



    }
