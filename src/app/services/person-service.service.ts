import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }

  createPerson(person: Person): Observable<object> {
    return this.http.post(environment.personServiceUrl + '/person', JSON.stringify(person), httpOptions);
  }

  getPeople(): Observable<Person[]> {
    const headers = new HttpHeaders();
    const options = { headers };

    return this.http.get<Person[]>(environment.personServiceUrl + '/person', options);
  }
}
