import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {HeaderModule} from "../header/header.module";
import {HeaderComponent} from "../header/header.component";
import {FormsModule} from "@angular/forms";





@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
