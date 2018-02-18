export class AgendaItem {
    id: number;
    datum: string;
    tijd: string;
    onderwerp:string;
    groep:string;

    constructor(datum,tijd,onderwerp,groep)
    {
        this.datum = datum;
        this.tijd = tijd;
        this.onderwerp = onderwerp;
        this.groep = groep;
    }
}
