import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/components/common/menuitem";
import {MessageService} from "../../common/service/MessageService";
import {QuizService} from "./quiz.service";
import * as Chart from 'chart.js'
import {LeerlingService} from "../../aangemaakt-project/leerling.service";
import {Student} from "../../models/Student";
import {LoginServiceApi} from "../../login/loginApi.service";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers:[QuizService,LeerlingService],
  encapsulation:ViewEncapsulation.None

})
export class QuizComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 7;

  vraag1Valid: boolean = false;
  vraag1Data:any;

  vraag2Valid: boolean = false;
  vraag2Data:any;

  vraag3Valid: boolean = false;
  vraag3Data:any;

  vraag4Valid: boolean = false;
  vraag4Data:any;

  vraag5Valid: boolean = false;
  vraag5Data:any;

  vraag6Valid: boolean = false;
  vraag6Data:any;

  vraag7Valid: boolean = false;
  vraag7Data:any;

  roleChart=[];
  roles=[];
  scores=[];

  chosenRole:any;
  roleInProject:any;
    rolForm: FormGroup;
  constructor(private messageService:MessageService, private quizService:QuizService,private leerlingService:LeerlingService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.items = [{
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }, {
      label: ""
    }];

      this.rolForm = this.formBuilder.group({
          "rol": [null, Validators.compose([
              Validators.required])]
      });
  }


  vraag1Changed(event:any)
  {
    this.vraag1Valid = event.valid;
    this.vraag1Data = event.data;
  }

  vraag2Changed(event:any)
  {
    this.vraag2Valid = event.valid;
    this.vraag2Data = event.data;
  }

  vraag3Changed(event:any)
  {
    this.vraag3Valid = event.valid;
    this.vraag3Data = event.data;
  }
  vraag4Changed(event:any)
  {
    this.vraag4Valid = event.valid;
    this.vraag4Data = event.data;
  }
  vraag5Changed(event:any)
  {
    this.vraag5Valid = event.valid;
    this.vraag5Data = event.data;
  }
  vraag6Changed(event:any)
  {
    this.vraag6Valid = event.valid;
    this.vraag6Data = event.data;
  }
  vraag7Changed(event:any)
  {
    this.vraag7Valid = event.valid;
    this.vraag7Data = event.data;
  }
  next(){
    if(this.activeIndex ===0)
    {
      if(this.vraag1Valid) {this.activeIndex ++;}
      else {this.sendError();}
    }
    else if(this.activeIndex ===1)
    {if(this.vraag2Valid) {this.activeIndex ++;}
      else {this.sendError();}
    }
    else if(this.activeIndex ===2)
    {
      if(this.vraag3Valid) {this.activeIndex ++;}
      else {this.sendError();}
    }
    else if(this.activeIndex ===3)
    {
      if(this.vraag4Valid) {this.activeIndex ++;}
      else {this.sendError();}
    }
    else if(this.activeIndex ===4)
    {
      if(this.vraag5Valid) {this.activeIndex ++;}
      else {this.sendError();}
    }
    else if(this.activeIndex ===5)
    {
      if(this.vraag6Valid) {this.activeIndex ++;}
      else {this.sendError();}
    }
    else if(this.activeIndex ===6)
    {
      if(this.vraag7Valid)
      {this.activeIndex ++;
        let results = this.quizService.calculateRoleFromQuiz(this.vraag1Data,this.vraag2Data,this.vraag3Data,this.vraag4Data,this.vraag5Data,this.vraag6Data,this.vraag7Data);
       this.generateChart(results);
      }
      else {this.sendError();}
    }
  }

  previous(){
    if(this.activeIndex >0 ){this.activeIndex --;}}

  sendError(){
    this.messageService.add({severity: 'error', summary: 'Niet alles is ingevuld'})
  }

  sendRole()
  {
      let user_id:number = LoginServiceApi.user_id;
    let student = new Student(this.rolForm.value.rol,user_id);
    console.log(student);
    this.leerlingService.updateRol(student);
  };


  generateChart(results:any)
  { this.scores=[results.complete_finisher,results.coordinator,results.implementer,results.monitor_evaluator,results.plant,results.resource_investigator,results.shaper,results.team_worker];
    this.roles = ["complete finisher","coordinator","implementer","monitor evaluator","plant","resource investigator","shaper","team worker"];
    let winner = Math.max(results.complete_finisher,results.coordinator,results.implementer,results.monitor_evaluator,results.plant,results.resource_investigator,results.shaper,results.team_worker);

 if(winner == results.complete_finisher )
 {this.chosenRole = "complete finisher";this.roleInProject = "architect";}
 else if
 (winner == results.coordinator )
 {this.chosenRole = "coordinator";this.roleInProject = "architect";}
 else if
 (winner == results.implementer )
 {this.chosenRole = "implementer";this.roleInProject = "developer";}
 else if
 (winner == results.monitor_evaluator )
 {this.chosenRole = "monitor evaluator";this.roleInProject = "database manager";}
 else if
 (winner == results.plant )
 {this.chosenRole = "plant";this.roleInProject = "developer";}
 else if
 (winner == results.resource_investigator )
 {this.chosenRole = "resource investigator";this.roleInProject = "test manager";}
 else if
 (winner == results.shaper )
 {this.chosenRole = "shaper";this.roleInProject = "test manager";}
 else if
 (winner == results.team_worker )
 {this.chosenRole = "team worker";this.roleInProject = "developer";}
    this.roleChart = new Chart('canvas',
        {
          type: 'pie',
          data:
              {
                labels:this.roles,
                datasets: [{
                  label: "Behaalde score",
                  backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#81F781","#8A0886","#5E610B"],
                  data: this.scores
                }]
              },
          options:
              {
                rotation: -Math.PI,
                cutoutPercentage: 30,
                circumference: Math.PI,
                legend: {
                  position: 'left'
                },
                animation: {
                  animateRotate: false,
                  animateScale: true
                }
              }
        }
    )
  }
}
