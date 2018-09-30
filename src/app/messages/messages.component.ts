import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterContentInit, ViewChildren, ContentChild } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, AfterViewInit, AfterContentInit {

  messages: {}[] = [{message: 'Olufemi'}, {message: 'John'}];
  message = '';
  index = 1;

  @ViewChild(MessageComponent) appMessage: MessageComponent;
  @ContentChild(MessageComponent) contentChild: MessageComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.contentChild.message = this.messages[1];
  }

  ngAfterViewInit() {
    // this.appMessage.message = { message: 'I am a king' };
  }

  addMessage() {
    this.messages.push({message: this.message, id: this.index++});
    this.message = '';
  }

  deleteMessageEvent($event) {
    console.log($event);
    this.messages.splice($event, 1);
  }

}
