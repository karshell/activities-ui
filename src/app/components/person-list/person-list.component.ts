import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { PersonService } from 'src/app/services/person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  private people: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPeople().subscribe(
      result => this.people = result
    );
  }
}
