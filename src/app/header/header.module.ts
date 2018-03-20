import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";
import { TranslateModule } from '@ngx-translate/core';




@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      TranslateModule
    ],
    exports:[
        HeaderComponent,
      TranslateModule
    ],
    providers: [],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }
