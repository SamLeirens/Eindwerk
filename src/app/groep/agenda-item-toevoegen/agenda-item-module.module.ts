import { NgModule } from '@angular/core';
import {AgendaItemToevoegenComponent} from "./agenda-item-toevoegen.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {GroepService} from "../groep.service";

@NgModule({
  declarations: [
    AgendaItemToevoegenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    AgendaItemToevoegenComponent
  ],
  providers: [GroepService],
  bootstrap: [AgendaItemToevoegenComponent]
})
export class AgendaItemModuleModule { }
