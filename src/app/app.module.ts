import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProjectComponent} from "../project/project.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "../homepage/home.component";
import {HomeModule} from "../homepage/home.module";
import {HeaderModule} from "../header/header.module";
import { DocentComponent } from '../docent/docent.component';
import {DocentModule} from "../docent/docent.module";
import {DocentService} from "../docent/docent.service";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AangemaaktProjectComponent } from '../aangemaakt-project/aangemaakt-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DocentComponent,
    AangemaaktProjectComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    HttpClientModule,
      FormsModule
  ],
  providers: [DocentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
