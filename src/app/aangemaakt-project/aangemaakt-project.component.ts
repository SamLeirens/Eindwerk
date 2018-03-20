import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {LeerlingService} from "./leerling.service";
import {Observable} from "rxjs";
import {Groep} from "../models/Groep";
import {Student} from "../models/Student";
import {GroepService} from "../groep/groep.service";

@Component({
  selector: 'aangemaakt-project',
  templateUrl: 'aangemaakt-project.component.html',
  styleUrls: ['aangemaakt-project.component.css'],
    providers: [LeerlingService,GroepService],
})
export class AangemaaktProjectComponent implements OnInit{

    studentIdLijst: any = [];
    aantalGroepen:number;
    myData: any = [];
    groepenArray:Groep[] = [];
    projId: number;
    sub:any;
    projNaam:string;

  constructor(private route: ActivatedRoute,private _leerlingService: LeerlingService,private _groepService: GroepService) { }

  updateStudent(student:Student){

      this._leerlingService.updateInGroep(student).subscribe(
          () => {}
      );

  }

    createGroep(groep:Groep)
    {
        this._groepService.addGroep(groep).subscribe(
            () => {}
        );

    }

  ngOnInit() {
      this.sub = +this.route.params.subscribe(params => {this.aantalGroepen =+params['aantalGroepen'];});
      this.projId = +this.route.snapshot.paramMap.get('id');
      this.projNaam = this.route.snapshot.paramMap.get('naam');


      for(let x = 1;x<=this.aantalGroepen;x++) {

          //gevraagd aantal groepen maken
         let groep = new Groep(x,this.projNaam+" groep "+x+" ",this.projId);

         //alle leerlingen ophalen
          this
              ._leerlingService
              .getLeerlingen()
              .subscribe
              (data =>
                  {
                      this.myData = data;
                      this.maakGroep(groep);
                  }
             );
          this.groepenArray.push(groep);

      }


  }

    maakGroep(groep:Groep) {
        let doneCheck1 = false;
        let doneCheck2 = false;

        for (let i = 0; i < this.myData.length; i++) {

            let student = <Student> this.myData[i];

            if (student.rol == "architect" && !student.inGroep && !doneCheck1 && !this.studentIdLijst.includes(i))
            {
                doneCheck1 = true;
                this.studentIdLijst += i;
                student.inGroep = true;
                student.groep = groep.naam;
                groep.students.push(student);
                this.updateStudent(student)
            } else if (student.rol == "database manager" && !student.inGroep && !doneCheck2 && !this.studentIdLijst.includes(i)) {
                doneCheck2 = true;
                this.studentIdLijst += i;
                student.inGroep = true;
                student.groep = groep.naam;
                groep.students.push(student);
                this.updateStudent(student)
            }
        }
        this.createGroep(groep);
    }



    }
