import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {ProjectComponent} from "./project/project.component";
import {HomeComponent} from "./homepage/home.component";
import {DocentComponent} from "./docent/docent.component";
import {AangemaaktProjectComponent} from "./aangemaakt-project/aangemaakt-project.component";
import {GroepComponent} from "./groep/groep.component";

const appRoutes: Routes = [
    {path: 'project', component: ProjectComponent},
    {path: 'index', component: HomeComponent},
    {path: 'docent', component: DocentComponent},
    {path: 'aangemaaktProject/:aantal;:projId', component: AangemaaktProjectComponent},
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
