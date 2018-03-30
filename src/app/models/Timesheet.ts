export class Timesheet {
    id: number;
    datum: string;
    beginTijd: string;
    eindTijd: string;
    onderwerp:string;
    groep:string;

    constructor(datum,begin,einde,onderwerp,groep)
    {
        this.datum = datum;
        this.beginTijd = begin;
        this.eindTijd = einde;
        this.onderwerp = onderwerp;
        this.groep = groep;
    }
}
