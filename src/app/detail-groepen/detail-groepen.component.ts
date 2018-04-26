import {AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as Chart from 'chart.js'
import {ActivatedRoute} from "@angular/router";
import {DetailGroepenService} from "./detail-groepen.service";
import {Groep} from "../models/Groep";
import {Punten} from "../models/Punten";
import {UIChart} from "primeng/chart";
import {Student} from "../models/Student";
import {MessageService} from "../common/service/MessageService";
import {TranslateService} from "@ngx-translate/core";
import {NotificationService} from "../common/service/notification.service";
@Component({
  selector: 'app-detail-groepen',
  templateUrl: './detail-groepen.component.html',
  styleUrls: ['./detail-groepen.component.css'],
  providers:[DetailGroepenService],
    encapsulation:ViewEncapsulation.None
})
export class DetailGroepenComponent implements OnInit,AfterViewInit {

  val:number;
  canvas: any;
  ctx: any;
  studChart=[];
  chart:any;
  studentenChart:any;
  groepId:string;
  sub:any;
  groepNaam:string;
  leden:Student[];
  punten:Punten[];
  datasets:Array<String>;
  graphData:any;
  result:any;
  constructor(private route: ActivatedRoute,private notificationService:NotificationService,private detailGroepenService:DetailGroepenService,private messageService:MessageService,private translate:TranslateService) { }


  ngOnInit() {
    this.notificationService.start();
    this.sub = this.route.params.subscribe(params => {this.groepId = params['id']});
    //grafieken aanmaken voor alle leden
    this.detailGroepenService.getPuntenFromGroep(this.groepId)
      .subscribe(
        data  => {
          let gegevens:any = data as Punten[];
          let punt1 = gegevens.map(res=> res.puntSprint1);
          let punt2 = gegevens.map(res=> res.puntSprint2);
          let punt3 = gegevens.map(res=> res.puntSprint3);
          let namen = gegevens.map(res=> res.student.voornaam);
          this.leden = gegevens.map(res=> res.student);
            this.studChart = new Chart('canvas',
              {
                type: 'bar',
                data:
                  {
                    labels:namen,
                    datasets:[{
                      data:punt1,
                      label:'Sprint 1',
                      borderColor:'#0000FF',
                      backgroundColor:'#0000FF'
                    },
                      {
                        data:punt2,
                        label:'Sprint 2',
                        borderColor:'#FF0000',
                        backgroundColor:'#FF0000'
                      },
                      {
                        data:punt3,
                        label:'Sprint 3',
                        borderColor:'#00FF00',
                        backgroundColor:'#00FF00'
                      }
                    ]
                  },
                options:
                  {
                  responsive: false,
                  display:true
                  }
              }
            )
        });
    this.notificationService.stop();
  }

  ngAfterViewInit()
  {
    //Groep chart
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx,
      {
          type: 'line',
          data: {
            labels: ["Sprint 1", "Sprint 2", "Sprint 3"],
            datasets: [
              {
                label: 'Groep',
                data: [8,3,9],
                fill: false,
                borderColor: "#3cba9f",
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: false,
            display:true
          }
      });
  }

  puntenIngeven(studentId,sprint,punt)
  {
   this.result = this.detailGroepenService.addPunten(studentId.value,sprint.value,punt.value).subscribe(() => this.messageService.add({severity:'success', summary:this.translate.instant('GROUPDETAIL.GRADECHANGED')}));
  }
}
