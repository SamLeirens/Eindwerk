import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {AppRoutingModule} from "../app/app-routing.module";





@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    exports:[
        HeaderComponent
    ],
    providers: [],
    bootstrap: [HeaderComponent]
})
export class HeaderModule { }
