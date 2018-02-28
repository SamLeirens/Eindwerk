import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {ProjectComponent} from "./project/project.component";
import {HomeComponent} from "./homepage/home.component";
import {DocentComponent} from "./docent/docent.component";
import {AangemaaktProjectComponent} from "./aangemaakt-project/aangemaakt-project.component";
import {GroepComponent} from "./groep/groep.component";
import {AuthGuard} from "./security/auth.guard";
import {LoginComponent} from "./login/login.component";
import {LoggedInGuard} from "./security/loggedIn.guard";
import {DetailGroepenComponent} from "./detail-groepen/detail-groepen.component";

const appRoutes: Routes = [
    {path: 'project', component: ProjectComponent},
    {path: 'index', component: HomeComponent},
    {path: 'login', component: LoginComponent,canActivate:[LoggedInGuard]},
    {path: 'docent', component: DocentComponent,/*TODO:terug aanzetten canActivate:[AuthGuard]*/},
    {path: 'aangemaaktProject/:aantal;:projId', component: AangemaaktProjectComponent},
    {path: 'detailGroepen/:id', component: DetailGroepenComponent},
    {path: 'groep/:naam', component: GroepComponent},
    {path: '**', redirectTo: 'index'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
