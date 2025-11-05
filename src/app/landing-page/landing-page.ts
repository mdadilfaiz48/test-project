import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  singUpValidations = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]),

    mobileNo: new FormControl('', [
      Validators.required,
      Validators.pattern('^(\\+91[- ]?|0)?[6-9][0-9]{9}$'),
    ]),

    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'),
    ]),
  });
  get name(): any {
    return this.singUpValidations.get('name');
  }
  get mobileNo(): any {
    return this.singUpValidations.get('mobileNo');
  }
  get email(): any {
    return this.singUpValidations.get('email');
  }

  get password(): any {
    return this.singUpValidations.get('password');
  }
  onSubmit() {
    console.log(this.singUpValidations.value);
  }

  constructor(private router: Router) {}
}
