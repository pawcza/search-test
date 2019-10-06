import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserRepository } from '@search-app/data';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private repo: UserRepository) { }

  search$(query: string): Observable<User[]> {
    return this.repo.search$(query);
  }
}
