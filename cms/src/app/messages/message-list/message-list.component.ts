import { Component, OnInit } from '@angular/core';
import {Message} from "../message.model";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [
    new Message('1', 'Test', 'The grades for this assignment have been posted', 'Bro. Jackson'),
    new Message('2', 'Test', 'When is assignment 3 due?', 'Steve Johnson'),
    new Message('3', 'test', 'Assignment 3 is due on Saturday at 11:30 PM', 'Bro. Jackson'),
    new Message('4', 'test', 'Can I meet with you sometime? I need help with assignment 3', 'Mark Smith'),
    new Message('5', 'test', 'I can meet with you today at 4:00PM in my office', 'Bro. Jackson')
  ];
  constructor() { }

  ngOnInit() {
  }

  onSendMessage(message: Message) {
    this.messages.push(message);
  }

}
