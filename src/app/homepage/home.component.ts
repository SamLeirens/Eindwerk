import {Component, EventEmitter, Output, ViewEncapsulation} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class HomeComponent {


  constructor(private translateService:TranslateService) {};


}
