import {Student} from "./Student";
import {Project} from "./Project";
export class Groep {
    id:number;
    naam: string;
    projectEntity: Project;
    students: Array<Student>;

    constructor(id:number, naam:string,projId:number){this.id =id; this.naam = naam;this.projectEntity = new Project(projId);this.students = new Array<Student>();}


}
