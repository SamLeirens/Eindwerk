import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeaderModule} from "../header/header.module";
import {AangemaaktProjectComponent} from "./aangemaakt-project.component";
import {LeerlingService} from "./leerling.service";


@NgModule({
    declarations: [
        AangemaaktProjectComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule
    ],
    providers: [LeerlingService],
    bootstrap: [AangemaaktProjectComponent]
})
export class ProjectModule {

}
