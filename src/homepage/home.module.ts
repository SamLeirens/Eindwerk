import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {HeaderModule} from "../header/header.module";
import {HeaderComponent} from "../header/header.component";





@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [HomeComponent]
})
export class HomeModule { }
