import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderModule} from "../header/header.module";
import {DocentComponent} from "./docent.component";
import {DocentService} from "./docent.service";
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        DocentComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [DocentService],
    bootstrap: [DocentComponent]
})
export class DocentModule {

}
