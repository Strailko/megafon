import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users: User[] = [];
  userObj: User = {};

  constructor(private dataService: DataService) { }

  login(user: User) : number | undefined | null {
    this.userObj = this.dataService.getUserByEmailAndPassword(user.email, user.password);

    if(this.userObj != undefined && this.userObj != null && this.userObj !== '{}') {
      localStorage.setItem("user", JSON.stringify(this.userObj));
      let id = this.userObj.id;
      this.userObj = {};
      return id;
    }
    else {
      this.userObj = {};
      return null;
    }
  }

  register(user: User) : boolean {
    this.userObj = this.dataService.addUser(user);
    
    if(this.userObj !== 'undefined' && this.userObj !== 'null' && this.userObj !== '{}') {
      return true;
    }
    else {
      return false;
    }
  }

  logout() : boolean {
    localStorage.removeItem("user");
    return true;
  }

  getLoggedInUser() {
    return JSON.parse(localStorage.getItem("user") || '{}');
  }
}
