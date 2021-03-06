import {Component, ElementRef, EventEmitter, OnInit, ViewChild, Output} from '@angular/core';
import {Message} from "../message.model";
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {

  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('messageInput') messageInputRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor(private messageService: MessagesService) {
  }

  ngOnInit() {
  }

  onSendMessage() {
    const currentSender = '1';
    const tempId = '5';
    const newSubject = this.subjectInputRef.nativeElement.value;
    const newMessage = this.messageInputRef.nativeElement.value;
    const newSentMessage = new Message (tempId, newSubject, newMessage, currentSender);
    this.messageService.addMessage(newSentMessage);
  }

  onClear() {
  this.subjectInputRef.nativeElement.value = " ";
  this.messageInputRef.nativeElement.value = " ";
  }
}


