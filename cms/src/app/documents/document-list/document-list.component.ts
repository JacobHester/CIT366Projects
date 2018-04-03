import {Component, OnInit, OnDestroy } from '@angular/core';
import { Document } from '../document.model';
import {DocumentsService} from "../documents.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {

  documents: Document[] = [];
  subscription: Subscription;

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.documents = this.documentsService.getDocuments();
    this.subscription = this.documentsService.documentListChangedEvent.subscribe(
      (documentsList: Document[]) => {
        this.documents = documentsList;
      }
    )
  }

ngOnDestroy() {
    this.subscription.unsubscribe();
}


}
