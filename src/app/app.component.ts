import { Component } from '@angular/core';
import { Message } from './messages/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'chat-project';

  messages: Message[] = [
    {
      message: 'Hola',
    },
    {
      message: 'Hola1',
    },
    {
      message: 'Hola2',
    },
    {
      message: 'Hola3',
    },
    {
      message: 'Hola4',
    },
    {
      message: 'Hola5',
    },
    {
      message: 'Hola',
    },
    {
      message: 'Hola1',
    },
    {
      message: 'Hola2',
    },
    {
      message: 'Hola3',
    },
    {
      message: 'Hola4',
    },
    {
      message: 'Hola5',
    },
    {
      message: 'Hola',
    },
    {
      message: 'Hola1',
    },
    {
      message: 'Hola2',
    },
    {
      message: 'Hola3',
    },
    {
      message: 'Hola4',
    },
    {
      message: 'Hola5',
    },
    {
      message: 'Hola',
    },
    {
      message: 'Hola1',
    },
    {
      message: 'Hola2',
    },
    // {
    //   message: 'Hola3',
    // },
    // {
    //   message: 'Hola4',
    // },
    // {
    //   message: 'Hola5',
    // },
    // {
    //   message: 'Hola5',
    // },
  ];

  eventNewMessage(message: Message) {
    console.log(message);
    this.messages.push(message);
  }
}
