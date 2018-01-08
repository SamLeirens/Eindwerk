import {Component, OnInit} from '@angular/core';
import {Project} from '../models/Project'
import {ProjectService} from './project.service'

@Component({
    selector: 'project',
    templateUrl: 'project.component.html',
    styleUrls: ['project.component.css'],
    providers:[ProjectService]
})
export class ProjectComponent implements OnInit{


    public docs;

    ngOnInit(){};

    constructor(private _projectService: ProjectService) { }

    maakProject(projectNaam,aantalGroepen) {

        this._projectService.add(projectNaam.value,aantalGroepen.value).subscribe(
            data => {
                this.docs = <Project>data[0];
            }

        );
    }


}
