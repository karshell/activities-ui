import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent {
  @Output() registration: EventEmitter<any>;

  private model: Person;

  constructor(private personService: PersonService) {
    this.registration = new EventEmitter();
    this.model = new Person();
  }

  private register() {
    this.personService.createPerson(this.model).subscribe(
      result => this.registration.emit()
    );
  }

}
