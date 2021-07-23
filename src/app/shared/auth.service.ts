import { Injectable } from '@angular/core';
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User = {};

  constructor() { }

  getLoggedInUser() {
    return this.user;
  }
}
