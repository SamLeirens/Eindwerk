import {Student} from "./Student";

export class Punten {
  id:number;
  student: Student;
  punt_sprint_1: number;
  punt_sprint_2: number;
  punt_sprint_3: number;


  constructor(id: number, punt_sprint_1: number, punt_sprint_2: number, punt_sprint_3: number, student: Student) {
    this.id = id;
    this.student = student;
    this.punt_sprint_1 = punt_sprint_1;
    this.punt_sprint_2 = punt_sprint_2;
    this.punt_sprint_3 = punt_sprint_3;
  }
}
