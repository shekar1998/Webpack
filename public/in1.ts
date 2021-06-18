export class Book {
    id: any;
    title:string;
    author:string;
    constructor(id:any,title:any, author:any) {
      this.id=id;
      this.title = title;
      this.author = author;
    }

    disp(){
        return this.id+'  '+this.title+' '+' '+this.author
    }
  }