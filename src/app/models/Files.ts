export class Files {
  id: number;
  name: string;
  lastModified:string;
  lastModifiedDate:string;
  size:number;
  type:string;
  webkitRelativePath:string;
  groep:string;


  constructor(id: number, name: string, lastModified: string, lastModifiedDate: string, size: number, type: string, webkitRelativePath: string, groep: string) {
    this.id = id;
    this.name = name;
    this.lastModified = lastModified;
    this.lastModifiedDate = lastModifiedDate;
    this.size = size;
    this.type = type;
    this.webkitRelativePath = webkitRelativePath;
    this.groep = groep;
  }
}
