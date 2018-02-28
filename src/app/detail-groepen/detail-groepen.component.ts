import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Chart from 'chart.js'
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-detail-groepen',
  templateUrl: './detail-groepen.component.html',
  styleUrls: ['./detail-groepen.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class DetailGroepenComponent implements OnInit,AfterViewInit {
  canvas: any;
  ctx: any;
  chart:any;
  studentenChart:any;
  groepId:number;
  sub:any;
  groepNaam:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.groepId = params['id']});

  }

  ngAfterViewInit(){


    //Groep chart

    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');

    let myChart = new Chart(this.ctx, {
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




    //Leden chart

    this.canvas = document.getElementById('studentenChart');
    this.ctx = this.canvas.getContext('2d');

    let studentenChart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ["Sprint 1", "Sprint 2", "Sprint 3"],
        datasets: [
          {
            label: 'Sam Leirens',
            data: [5,6,7],
            fill: false,
            borderColor: "#3cba9f",
            borderWidth: 1
          },
          {
            label: 'Robin Couck',
            data: [3,6,2],
            fill: false,
            borderColor: "red",
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

}
