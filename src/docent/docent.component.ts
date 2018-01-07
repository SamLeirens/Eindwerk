import {Component, OnInit, Injectable} from '@angular/core';
import {Docent} from "../models/Docent"
import {DocentService} from "./docent.service";

@Component({
  selector: 'app-docent',
  templateUrl: 'docent.component.html',
  styleUrls: ['docent.component.css'],
  providers:[DocentService]
})



export class DocentComponent implements OnInit {

    public docs;

ngOnInit(){};

constructor(private _docentService: DocentService) { }

    getDocents(voornaam,achternaam) {
        this._docentService.getDocent(voornaam.value,achternaam.value).subscribe(
            data => {
                this.docs = data[0]

            }

        );
    }

}
