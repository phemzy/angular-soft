import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: {};
  @Input() id: number;
  @Output() deleteEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteMessage() {
    console.log(this.id);
    this.deleteEmitter.emit(this.id);
  }

}
