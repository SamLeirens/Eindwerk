import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GroepService} from "./groep.service";

@Component({
  selector: 'app-groep',
  templateUrl: './groep.component.html',
  styleUrls: ['./groep.component.css'],
  providers: [GroepService]
})
export class GroepComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

 groepNaam: string;
  sub:any ;

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {this.groepNaam = params['naam']; });

  }

}
