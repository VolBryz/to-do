import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserInterface } from './types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class MlaUsersService {
  constructor() {}

  getUsers(): Observable<UserInterface[]> {
    return of([
      { id: '1', name: 'Foo' },
      { id: '2', name: 'Bar' },
    ]);
  }
}
