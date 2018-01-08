import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {AppRoutingModule} from "../app-routing.module";
import {FormsModule} from "@angular/forms";





@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    exports:[
        HeaderComponent
    ],
    providers: [],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }
