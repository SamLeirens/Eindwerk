import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HeaderModule} from "../header/header.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {LoginServiceApi} from "./loginApi.service";





@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoginServiceApi],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
