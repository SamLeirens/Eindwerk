import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ProjectComponent } from './project.component';
import {HeaderModule} from "../header/header.module";


@NgModule({
    declarations: [
        ProjectComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule
    ],
    providers: [],
    bootstrap: [ProjectComponent]
})
export class ProjectModule { }
