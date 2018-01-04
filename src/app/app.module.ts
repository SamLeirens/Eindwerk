import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProjectComponent} from "../project/project.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "../homepage/home.component";
import {HomeModule} from "../homepage/home.module";
import {HeaderModule} from "../header/header.module";


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
