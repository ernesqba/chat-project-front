import { Component, Input } from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent {
  @Input() messages: Message[] | undefined;
}
