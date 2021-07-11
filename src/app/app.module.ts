import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { MessageComponent } from './messages/message/message.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    MessageComponent,
    InputTextComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
