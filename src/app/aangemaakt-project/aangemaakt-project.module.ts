import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from "../header/header.module";
import { AangemaaktProjectComponent } from "./aangemaakt-project.component";
import { LeerlingService } from "./leerling.service";
import { GroepService } from "../groep/groep.service";


@NgModule({
    declarations: [
        AangemaaktProjectComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule
    ],
    providers: [LeerlingService, GroepService],
    bootstrap: [AangemaaktProjectComponent]
})
export class ProjectModule {

}
