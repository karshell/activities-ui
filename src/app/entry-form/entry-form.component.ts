import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent {
  @Output() registration: EventEmitter<any>;

  private model: Person;

  constructor() {
    this.registration = new EventEmitter();
    this.model = new Person();
  }

  private register() {
    // todo: call registration api
    this.registration.emit();
  }

}
