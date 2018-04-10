import {EventEmitter, Injectable, Output} from '@angular/core';
import {Document} from "./document.model";
import {MOCKDOCUMENTS} from "./MOCKDOCUMENTS";
import {Subject} from "rxjs/Subject";
import {Http, Response} from '@angular/http'

@Injectable()
export class DocumentsService {
  documentSelectedEvent = new EventEmitter<Document>();
 @Output() documentChangedEvent = new EventEmitter<Document[]>();
 documentListChangedEvent = new Subject<Document[]>();

  documents: Document[] = [];
  maxDocumentId: any;

  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
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
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);
  }

  getMaxId(): number {
    let maxId = 0;
    for (let i in this.documents) {
      let currentID = parseInt(this.documents[i].id);
      if (currentID > maxId){
        maxId = currentID;
      }
    }

    return maxId;

  }

  addDocument(newDocument: Document){
    if(!newDocument) {
      return;
    }
    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId + "";
    this.documents.push(newDocument);
    const documentslistClone = this.documents.slice();
    this.documentListChangedEvent.next(documentslistClone);

    }

  updateDocument(originalDocument: Document,
                 newDocument: Document){
    if((originalDocument || newDocument) === null){
      return;
    }

    let pos = this.documents.indexOf(originalDocument);
    if(pos < 0){
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    let documentsListClone = this.documents.slice();
    this.documentListChangedEvent.next(documentsListClone);

  }

}
