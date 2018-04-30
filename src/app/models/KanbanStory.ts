export class KanbanStory{
  user:string;
  subject:string;
  groep:string;

  constructor(user: string, subject: string, groep: string) {
    this.user = user;
    this.subject = subject;
    this.groep = groep;
  }
}
