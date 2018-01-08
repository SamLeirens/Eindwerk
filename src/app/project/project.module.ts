import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProjectComponent } from './project.component';
import {HeaderModule} from "../header/header.module";
import {ProjectService} from "./project.service";


@NgModule({
    declarations: [
        ProjectComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule
    ],
    providers: [ProjectService],
    bootstrap: [ProjectComponent]
})
export class ProjectModule {

}
