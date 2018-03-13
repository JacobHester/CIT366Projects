import {EventEmitter, Injectable, Output} from '@angular/core';
import {Document} from "./document.model";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";

@Injectable()
export class DocumentsService {
  documentSelectedEvent = new EventEmitter<Document>();
 @Output() documentChangedEvent = new EventEmitter<Document[]>();

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

  deleteDocument(document: Document) {
    if (document === null) {
    return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0) {
      return;
    }

    this.documents.splice(pos, 1);
    this.documentChangedEvent.emit(this.documents.slice());
  }
}
