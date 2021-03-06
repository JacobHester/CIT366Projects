import {Component, OnInit, OnDestroy} from '@angular/core';
import { Contact } from '../contact.model';
import {ContactService} from "../contact.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  term = '';
  subscription: Subscription;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.contactChangedEvent.subscribe(
      (contact: Contact[]) => {
        this.contacts = contact;
    }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onKeyPress(value: string){
    this.term = value;
  }


}
