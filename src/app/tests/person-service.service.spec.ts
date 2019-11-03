import { TestBed } from '@angular/core/testing';

import { PersonService } from '../services/person-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('PersonServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: PersonService = TestBed.get(PersonService);
    expect(service).toBeTruthy();
  });
});
