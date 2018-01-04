import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {ProjectComponent} from "../project/project.component";
import {HomeComponent} from "../homepage/home.component";

const appRoutes: Routes = [
    {path: 'project', component: ProjectComponent},
    {path: 'index', component: HomeComponent},
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
