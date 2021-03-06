import { Injectable } from "@angular/core";

@Injectable()
export class Document {
  public id: string;
  public name: string;
  public description: string;
  public url: string;
  public children: string;

  constructor(docId: string, name: string, description: string,
              url: string, children: string) {
    this.id = this.id;
    this.name = name;
    this.description = description;
    this.url = url;
    this.children = children;
  }

}
/**import { Injectable} from "@angular/core";

@Injectable()
export class Document {
  constructor(public id: string,
              public name: string,
              public url: string) {

  }
}*/

