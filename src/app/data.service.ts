import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userID = 3;
  users = [
    { id: 1, username: "Revanth", password: "rev1234" },
    { id: 2, username: "Harry", password: "har1234" }
  ];

  constructor() { }

  addUser(username: any, password: any) {
    this.users.push({ id: this.userID++, username: username, password: password });
  }

  delUser(index: any) {
    this.users.splice(index, 1);
  }

  getUsersList() {
    return this.users;
  }

  updateUser(index: number, updatedUser: any) {
    if (index >= 0 && index < this.users.length) {
      this.users[index] = { ...this.users[index], ...updatedUser };
    }
  }
}
