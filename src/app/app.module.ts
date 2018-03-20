import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProjectComponent} from "./project/project.component";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./homepage/home.module";
import {HeaderModule} from "./header/header.module";
import { DocentComponent } from './docent/docent.component';
import {DocentService} from "./docent/docent.service";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AangemaaktProjectComponent } from './aangemaakt-project/aangemaakt-project.component';
import { GroepComponent } from './groep/groep.component';
import {AuthGuard} from "./security/auth.guard";
import { LoginComponent } from './login/login.component';
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {LoggedInGuard} from "./security/loggedIn.guard";
import {MatDialogModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule} from "@angular/material";
import { DialogComponent } from './login/dialog/dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GrowlModule} from 'primeng/growl';
import {MessageService} from "./common/service/MessageService";
import {ChartModule} from "primeng/components/chart/chart";
import {DataTableModule, SpinnerModule, TabMenuModule, TabViewModule} from "primeng/primeng";
import {TableModule} from "primeng/table";
import {CalendarModule} from "primeng/components/calendar/calendar";
import { DetailGroepenComponent } from './detail-groepen/detail-groepen.component';
import {LoginServiceApi} from "./login/loginApi.service";
import { ProfielComponent } from './profiel/profiel.component';
import { GroepWerkQuestionsComponent } from './profiel/vraag-1/groep-werk-questions.component';
import { QuizComponent } from './profiel/quiz/quiz.component';
import {StepsModule} from "primeng/components/steps/steps";
import { Vraag2Component } from './profiel/vraag-2/vraag-2.component';
import { Vraag3Component } from './profiel/vraag-3/vraag-3.component';
import { Vraag4Component } from './profiel/vraag-4/vraag-4.component';
import { Vraag5Component } from './profiel/vraag-5/vraag-5.component';
import { Vraag6Component } from './profiel/vraag-6/vraag-6.component';
import { Vraag7Component } from './profiel/vraag-7/vraag-7.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    DocentComponent,
    AangemaaktProjectComponent,
    GroepComponent,
    LoginComponent,
    DialogComponent,
    DetailGroepenComponent,
    ProfielComponent,
    QuizComponent,
    GroepWerkQuestionsComponent,
    Vraag2Component,
    Vraag3Component,
    Vraag4Component,
    Vraag5Component,
    Vraag6Component,
    Vraag7Component

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
    MatFormFieldModule,
    GrowlModule,
    ChartModule,
    DataTableModule,
    TableModule,
    TabViewModule,
    CalendarModule,
    SpinnerModule,
    StepsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [DocentService,AuthGuard,LoginServiceApi,LoggedInGuard,MessageService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
