import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProjectComponent} from "./project/project.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./homepage/home.module";
import {HeaderModule} from "./header/header.module";
import { DocentComponent } from './docent/docent.component';
import {DocentService} from "./docent/docent.service";
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AangemaaktProjectComponent } from './aangemaakt-project/aangemaakt-project.component';
import { GroepComponent } from './groep/groep.component';
import {AuthGuard} from "./security/auth.guard";
import { LoginComponent } from './login/login.component';
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {LoginService} from "./security/login.service";
import {LoggedInGuard} from "./security/loggedIn.guard";
import {MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule} from "@angular/material";
import { DialogComponent } from './login/dialog/dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DocentComponent,
    AangemaaktProjectComponent,
    GroepComponent,
      LoginComponent,
      DialogComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HeaderModule,
    HttpClientModule,
      FormsModule,
    ShowHidePasswordModule.forRoot(),
    AngularFontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
      ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
      MatFormFieldModule
  ],
  providers: [DocentService,AuthGuard,LoginService,LoggedInGuard],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
