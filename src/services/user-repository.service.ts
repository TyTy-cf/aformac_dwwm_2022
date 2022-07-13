import { Injectable } from '@angular/core';
import {User} from "../models/spotifish/user";

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {

  private _users: User[] = [];

  constructor() {
    let birthDate: Date = new Date();
    birthDate.setFullYear(2000);

    this._users.push(
      new User(
        'toto@gmail.com',
        'ZuperToto',
        birthDate
      ),
      new User(
        'anothertoto@gmail.com',
        'MoreZuperToto',
        birthDate
      ),
      new User(
        'moretoto@gmail.com',
        'MoreMoreZuperToto',
        birthDate
      )
    );
  }

  get users(): User[] {
    return this._users;
  }

  getOneUserByEmail(email: string): User {
    return this._users.filter((user) => user.email === email)[0];
  }
}
