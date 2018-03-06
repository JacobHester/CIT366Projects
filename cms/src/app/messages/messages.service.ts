import {EventEmitter, Injectable} from '@angular/core';
import {Message} from "./message.model";
import {MOCKMESSAGES} from "./MOCKMESSAGES";

@Injectable()
export class MessagesService {
  messageChangeEvent = new EventEmitter<Message[]>();

  messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages() {
    return this.messages.slice();
  }

  getMessage(id: string): Message {
    return this.messages.filter((messages: Message) => {
      return messages.id === id;

    }) [0] || null;
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.messageChangeEvent.emit(this.messages.slice());
  }


}
