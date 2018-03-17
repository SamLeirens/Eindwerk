import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";



const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class QuizService {


    constructor(private http:HttpClient ){ }


    calculateRoleFromQuiz(vraag1:any,vraag2:any,vraag3:any,vraag4:any,vraag5:any,vraag6:any,vraag7:any)
    {

      let shaper:number;
      let coordinator:number;
      let plant:number;
      let resource_investigator:number;
      let monitor_evaluator:number;
      let implementer:number;
      let team_worker:number;
      let complete_finisher:number;

      shaper = Number(vraag1.A3) + Number(vraag2.A10) + Number(vraag4.A27) + Number(vraag4.A32) + Number(vraag6.A46) + Number(vraag7.A56);
      coordinator = Number(vraag1.A7) + Number(vraag2.A16) + Number(vraag3.A24) + Number(vraag5.A33) + Number(vraag6.A45) + Number(vraag7.A54);
      plant = Number(vraag1.A4) + Number(vraag2.A15)+ Number(vraag4.A26)+ Number(vraag5.A36)+ Number(vraag6.A41)+ Number(vraag7.A55);
      resource_investigator = Number(vraag1.A6)+ Number(vraag3.A18)+ Number(vraag3.A22)+ Number(vraag5.A34)+ Number(vraag6.A47)+ Number(vraag7.A51);
      monitor_evaluator = Number(vraag1.A5)+ Number(vraag2.A14)+ Number(vraag3.A23)+ Number(vraag5.A35)+ Number(vraag6.A43)+ Number(vraag7.A53);
      implementer = Number(vraag1.A1)+ Number(vraag3.A17)+ Number(vraag4.A25)+ Number(vraag4.A31)+ Number(vraag6.A44)+ Number(vraag7.A56);
      team_worker = Number(vraag1.A8)+ Number(vraag2.A13)+ Number(vraag4.A28)+ Number(vraag5.A38)+ Number(vraag6.A42)+ Number(vraag7.A56);
      complete_finisher = Number(vraag1.A2)+ Number(vraag2.A12)+ Number(vraag3.A21)+ Number(vraag5.A36)+ Number(vraag6.A48)+ Number(vraag7.A52);

      console.log(shaper);
      console.log(coordinator);
      console.log(plant);
      console.log(resource_investigator);
      console.log(monitor_evaluator);
      console.log(implementer);
      console.log(team_worker);
      console.log(complete_finisher);

      let winner = Math.max(shaper,coordinator,plant,resource_investigator,monitor_evaluator,implementer,team_worker,complete_finisher);
      console.log(winner);
      return {
        shaper,
        coordinator,
        plant,
        resource_investigator,
        monitor_evaluator,
        implementer,
        team_worker,
        complete_finisher
      };
    }

}
