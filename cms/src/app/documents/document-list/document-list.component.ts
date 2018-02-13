import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();


  documents: Document[] = [
    new Document('test', 'CIT 260 - Object Oriented Programming', 'Code in Java', '#', '#'),
    new Document('test', 'CIT 366 - Full Web Stack Development', 'Learn how to develop modern web applications using the MEAN stack', 'https://content.byui.edu/file/b7c3e5ed-6947-4971-9d32-4e5b6b397cac/1/CIT 366 course description.pdf', '#'),
    new Document('test', 'CIT 425 - Data Warehousing', 'Database Stuff', '#', '#'),
    new Document('test', 'CIT 460 - Enterprise Development', 'Mer', '#', '#'),
    new Document('test', 'CIT 495 - Senior Practicum', 'Yer', '#','#')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
