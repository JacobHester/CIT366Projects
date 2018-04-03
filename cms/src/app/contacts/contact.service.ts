import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from "./MOCKCONTACTS";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ContactService {

  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new Subject<Contact[]>();

  contacts: Contact[] = [];
  maxContactId: any;

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId()
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }
  getContact(id: string): Contact {
    return this.contacts.filter((contacts: Contact)=> {
      return contacts.id === id;
    })[0] || null;

  }

  deleteContact(contact: Contact) {
    if (contact === null) {
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    this.contacts.splice(pos, 1);
    this.contactChangedEvent.next(this.contacts.slice());
  }

  getMaxId(): number {
    let maxId = 0;
    for (let i in this.contacts){
      let currentID = parseInt(this.contacts[i].id);
      if(currentID > maxId){
        maxId = currentID;
      }
    }
    return maxId;
  }

  addContact(newContact: Contact){
    if(!newContact) {
      return;
    }
    this.maxContactId++;
    newContact.id = this.maxContactId + "";
    this.contacts.push(newContact);
    const contactslistClone = this.contacts.slice();
    this.contactChangedEvent.next(contactslistClone);
    }

    updateContact(originalContact: Contact,
                  newContact: Contact){
    if((originalContact || newContact) === null){
      return;
    }
    let pos = this.contacts.indexOf(originalContact);
    if(pos < 0){
      return;
    }
    newContact.id = originalContact.id;
    this.contacts[pos] = newContact;
    let contactsListClone = this.contacts.slice();
    this.contactChangedEvent.next(contactsListClone);


    }


}
