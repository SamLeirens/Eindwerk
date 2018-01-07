import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {ProjectComponent} from "../project/project.component";
import {HomeComponent} from "../homepage/home.component";
import {DocentComponent} from "../docent/docent.component";
import {AangemaaktProjectComponent} from "../aangemaakt-project/aangemaakt-project.component";

const appRoutes: Routes = [
    {path: 'project', component: ProjectComponent},
    {path: 'index', component: HomeComponent},
    {path: 'docent', component: DocentComponent},
    {path: 'aangemaaktProject/:id', component: AangemaaktProjectComponent},
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
