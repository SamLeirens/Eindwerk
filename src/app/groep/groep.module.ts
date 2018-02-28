import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderModule} from "../header/header.module";
import {FormsModule} from "@angular/forms";
import {GroepComponent} from "./groep.component";
import {GroepService} from "./groep.service";
import {MatDialogModule} from "@angular/material";
import {TabMenuModule} from "primeng/components/tabmenu/tabmenu";
import {SharedModule} from "primeng/components/common/shared";
import {MenuModule} from "primeng/components/menu/menu";
import {TabViewModule, TabPanel} from "primeng/components/tabview/tabview";




@NgModule({
    declarations: [
        GroepComponent


    ],
    imports: [
        BrowserModule,
        HeaderModule,
        FormsModule,
        MatDialogModule
    ],

    exports:[
        GroepService
    ],
    providers: [GroepService],
    bootstrap: [GroepComponent]
})
export class GroepModule { }
