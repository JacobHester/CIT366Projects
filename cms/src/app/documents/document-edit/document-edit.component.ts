import { Component, OnInit } from '@angular/core';
import {Document} from "../document.model";
import {DocumentsService} from "../documents.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm, NgModel} from "@angular/forms";


@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  document: Document;
  originalDocument: Document;
  editMode: boolean = false;
  id: string;
  description: string;

  constructor(private documentService: DocumentsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];

        if (!this.id){
          this.editMode = false;
          return;
        }

        this.originalDocument = this.documentService.getDocument(this.id);
        if (this.originalDocument === null){
          return;
        }

        this.editMode = true;
        this.document = JSON.parse(JSON.stringify(this.originalDocument));
        console.log(this.editMode);
      }
    )
  }

  onSubmit(form: NgForm){
    const values = form.value;

    const newDocument = new Document('', values.documentTitle, values.documentDescription, values.documentUrl, null);

    if (this.editMode){
    this.documentService.updateDocument(this.originalDocument, newDocument);
    }else{
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents'], {relativeTo: this.route});


  }

  onCancel(){
    this.router.navigate(['/documents']);
  }




}
