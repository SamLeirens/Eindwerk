import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/components/common/menuitem";
import {MessageService} from "../../common/service/MessageService";
import {QuizService} from "./quiz.service";
import * as Chart from 'chart.js'
import {Results} from "../../models/Results";

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers:[QuizService],
  encapsulation:ViewEncapsulation.None

})
export class QuizComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number = 0;

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
  constructor(private messageService:MessageService, private quizService:QuizService) { }

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
      if(this.vraag1Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===1)
    {
      if(this.vraag2Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===2)
    {
      if(this.vraag3Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===3)
    {
      if(this.vraag4Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===4)
    {
      if(this.vraag5Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===5)
    {
      if(this.vraag6Valid)
      {
        this.activeIndex ++;
      }
      else
      {
        this.sendError();
      }
    }
    else if(this.activeIndex ===6)
    {
      if(this.vraag7Valid)
      {
        this.activeIndex ++;
        let results = this.quizService.calculateRoleFromQuiz(this.vraag1Data,this.vraag2Data,this.vraag3Data,this.vraag4Data,this.vraag5Data,this.vraag6Data,this.vraag7Data);
       this.generateChart(results);
      }
      else
      {
       this.sendError();
      }
    }
  }

  previous(){
    if(this.activeIndex >0 ){this.activeIndex --;}

  }

  sendError(){
    this.messageService.add({
      severity: 'error', summary: 'Niet alles is ingevuld'
    })
  }

  generateChart(results:any)
  {

    this.scores=[results.complete_finisher,results.coordinator,results.implementer,results.monitor_evaluator,results.plant,results.resource_investigator,results.shaper,results.team_worker];
    this.roles = ["complete finisher","coordinator","implementer","monitor evaluator","plant","resource investigator","shaper","team worker"];

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
