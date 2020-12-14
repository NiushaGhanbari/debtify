import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../authentication.models';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  constructor(private AuthenticationService: AuthenticationService) {

  }
  registrationForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null),
    email: new FormControl(null),
    password: new FormControl(null),
    confirmPassword: new FormControl(null),
  });

  matchedPassword: boolean = false;
  MAIL_REGEX: RegExp = /^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/;

  ngOnInit(): void {
    this.createForm(); 
  }

  createForm() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required,Validators.pattern(this.MAIL_REGEX)]),
      password: new FormControl(null, [Validators.required]),
      confirmPassword: new FormControl(null, [Validators.required]),
    });
  }

  matchPassword(confirmPassword:any, password:any) {
		if (confirmPassword == password) {
			this.matchedPassword = true;
		} else {
			this.matchedPassword = false;
		}
  }
  
  registerUser() {
    let userModel: UserModel = {
      FirstName: this.registrationForm.value.firstName,
      LastName: this.registrationForm.value.lastName,
      Email: this.registrationForm.value.email,
      Password: this.registrationForm.value.password,
    }
    this.AuthenticationService.signup(userModel)
    .subscribe(
      (data) => {
        console.log(data);
      },
      (error)=> {
        console.log(error);
      })
      // because we dont have real api in back end i put this here but it must be inside the subscribe
      alert('Registration Completed')
      this.registrationForm.reset();
  }
}
