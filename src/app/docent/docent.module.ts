import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderModule} from "../header/header.module";
import {DocentComponent} from "./docent.component";
import {DocentService} from "./docent.service";
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ChartModule} from "primeng/components/chart/chart";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "primeng/components/common/shared";
import {TableModule} from "primeng/table";
import {GroepModule} from "../groep/groep.module";
import {GroepService} from "../groep/groep.service";

@NgModule({
    declarations: [
        DocentComponent
    ],
    imports: [
        BrowserModule,
        HeaderModule,
        HttpClientModule,
        FormsModule,
        SharedModule,
        BrowserAnimationsModule,
        GroepModule
    ],
    providers: [DocentService,GroepService],
    bootstrap: [DocentComponent]
})
export class DocentModule {

}
