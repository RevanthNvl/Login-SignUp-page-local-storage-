// login.component.ts

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authPage = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  usersList: any;
  authenticationResult: string = ''; // Added variable to hold authentication result message
  resultMsg: any;

  constructor(private ds: DataService) {
    this.usersList = this.ds.getUsersList();
  }

  onSubmit() {
    if (this.authPage.valid) {
      const username = this.authPage.get('username')?.value;
      const password = this.authPage.get('password')?.value;

      // Check if the provided username and password match any entry in usersList
      const user = this.usersList.find((u: any) => u.username === username && u.password === password);

      if (user) {
        this.authenticationResult = `Authentication successful for user: ${user.username}`;
        // You can perform additional actions here, e.g., navigate to a different page
        this.resultMsg = 'success';
      } else {
        this.authenticationResult = 'Authentication failed. Invalid username or password.';
        this.resultMsg = 'failure';
      }

    } else {
      this.markFormGroupTouched(this.authPage);
      this.authenticationResult = ''; // Clear the authentication result if the form is invalid
      this.resultMsg = ''; // Clear the class if the form is invalid
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  show() {
    console.log(this.usersList);
  }
}