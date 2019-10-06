import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, delay, debounceTime } from 'rxjs/operators';

export interface UserInfo {
  id: string;
  name: string;
  personId: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserRepository {

  private list: UserInfo[];

  constructor(private client: HttpClient) { }

  search$(query: string) {
    // Simulate unexpected error
    if (Math.floor(Math.random() * 10) === 5) {
      return throwError(new Error('Simulated error occurred'));
    }

    query = query.toLowerCase();
    return of(this.list.filter(m => m.name.toLowerCase().indexOf(query) !== -1)).pipe(delay(Math.floor(Math.random() * 2000)));
  }

  update$(user: UserInfo, id: string) {
    // Simulate unexpected error
    if (Math.floor(Math.random() * 10) === 5) {
      return throwError(new Error('Simulated error occurred'));
    }

    const index = this.list.findIndex(m => m.id === id);

    if (index === -1) {
      throwError(new Error('User not found'));
    }

    this.list[index] = user;
  }

  load$(): Promise<boolean> {
    return this.client.get<UserInfo[]>('assets/users.json').pipe(
      tap(m => this.list = m),
      tap(m => console.log('Users loaded')),
      map(() => true)
    )
    .toPromise();
  }
}
