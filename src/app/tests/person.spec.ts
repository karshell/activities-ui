import { Person } from '../models/person';

describe('Person', () => {
  it('should create an instance', () => {
    expect(new Person('firstName', 'lastName', 'email@email.com', 'test activity')).toBeTruthy();
  });
});
