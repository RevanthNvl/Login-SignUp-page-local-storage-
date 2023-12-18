import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  usersListr: any;
  formSubmitted = false; // Track whether the form has been submitted
  selectedIndex: number | null = null; // Track the selected index for updating

  registrationForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  ngOnInit(): void {
    this.registrationForm.get('confirmPassword')?.setValidators(this.confirmPasswordValidator(this.registrationForm));
    this.usersListr = this.ds.getUsersList();
  }

  constructor(private fb: FormBuilder, private ds: DataService) {}

  confirmPasswordValidator(form: FormGroup) {
    return (control: any) => {
      const confirmPassword = control.value;
      const password = form.get('password')?.value;
      return password === confirmPassword ? null : { passwordsNotMatching: true };
    };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Registration Form Submitted:', this.registrationForm.value);

      if (this.selectedIndex !== null) {
        // Update existing user
        this.ds.updateUser(this.selectedIndex, this.registrationForm.value);
        this.selectedIndex = null;
      } else {
        // Add new user
        this.ds.addUser(this.registrationForm.get('username')?.value, this.registrationForm.get('password')?.value);
      }

      this.usersListr = this.ds.getUsersList();
      this.formSubmitted = true;
      this.registrationForm.reset();
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

  delUser(index: number) {
    this.ds.delUser(index);
  }

  update(index: number) {
    this.selectedIndex = index;
    this.formSubmitted = false;
    this.registrationForm.patchValue(this.usersListr[index]); // Populate form with selected user data
  }
}