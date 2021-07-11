import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '../messages/message.model';

@Component({
  selector: 'app-imput-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Output() message = new EventEmitter<Message>();

  text: string = '';
  inputForm!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  onSubmitMessage() {
    console.log(this.inputForm.value);
    this.message.emit(new Message(this.inputForm.value.text));
    this.inputForm.reset();
  }

  private initForm() {
    this.inputForm = new FormGroup({
      text: new FormControl(null, Validators.required),
    });
  }
}
