import {EventEmitter, Injectable} from '@angular/core';
import {Document} from "./document.model";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";

@Injectable()
export class DocumentsService {
  documentSelectedEvent = new EventEmitter<Document>();

  documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    return this.documents.filter((documents: Document) => {
      return documents.id === id;
    }) [0] || null;
  }

}