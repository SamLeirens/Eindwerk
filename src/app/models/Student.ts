import {isNullOrUndefined} from "util";
export class Student {
    id:number;
    voornaam: string;
    achternaam: string;
    traject: string;
    jaar: string;
    rol: string;
    inGroep: boolean;
    groep: string;

    constructor(x?:string,id?:number)
    {
        if(isNullOrUndefined(id))
        {
            this.voornaam = x
        }
        else {
            this.rol = x;
            this.id = id;
        }

    };
}
