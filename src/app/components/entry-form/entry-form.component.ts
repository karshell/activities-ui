import { Component, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from 'src/app/services/person-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss']
})
export class EntryFormComponent {

  private model: Person;

  constructor(private personService: PersonService, private router: Router) {
    this.model = new Person();
  }

  private register() {
    this.personService.createPerson(this.model).subscribe(
      result => this.router.navigateByUrl('/list')
    );
  }

}
