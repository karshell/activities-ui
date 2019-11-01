import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  private people: Person[];

  constructor() { }

  ngOnInit() {
    // todo: retrieve list of people from service
    this.people = [
      new Person('Kevin', 'Shelley', 'test@assd.asd', 'activity1'),
      new Person('Kevin', 'Shelley', 'test@assd.asd', 'activity2')
    ];
  }

}
