import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderModule} from "../header/header.module";
import {FormsModule} from "@angular/forms";
import {GroepComponent} from "./groep.component";
import {GroepService} from "./groep.service";
import {MatDialogModule} from "@angular/material";
import {AgendaItemToevoegenComponent } from './agenda-item-toevoegen/agenda-item-toevoegen.component'
import {AgendaItemModuleModule} from "./agenda-item-toevoegen/agenda-item-module.module";





@NgModule({
    declarations: [
        GroepComponent,
        AgendaItemToevoegenComponent,

    ],
    imports: [
        BrowserModule,
        HeaderModule,
        FormsModule,
        AgendaItemModuleModule,
        MatDialogModule
    ],

    exports:[
        GroepService
    ],
    providers: [GroepService],
    bootstrap: [GroepComponent]
})
export class GroepModule { }
