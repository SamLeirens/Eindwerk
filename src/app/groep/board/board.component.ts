import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GroepService } from './../groep.service';
import { Timesheet } from './../../models/Timesheet';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {

  timesheets: Timesheet[];
  groepNaam:String;
  list2:Timesheet[] = [];


  constructor(
    private _groepservice: GroepService,   
    private route:ActivatedRoute 
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.groepNaam = params["naam"];
    });

    this._groepservice.getTimesheetByGroep(this.groepNaam).subscribe(data => {
      this.timesheets = data as Timesheet[];
    });
  }
  
  sourceToTarget(event:any)
  {
    console.log(event);
    console.log(this.timesheets);
    console.log(this.list2);
  }

  targetToSource(event:any)
  {
    console.log(event);
    console.log(this.timesheets);
    console.log(this.list2);
  }

}
