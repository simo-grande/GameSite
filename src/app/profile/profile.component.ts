import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  user: any;
  myForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group(
      {
        oldPassword: ['', [Validators.required]],
        newPassword: ['', Validators.required],
        confirm: ['', Validators.required],
      },
      { validator: this.passowordShouldMatch }
    );

    this.user = this.router.getCurrentNavigation()?.extras.state?.user;
    // console.log(this.user);
  }
  onSubmit() {
    console.log(this.myForm);
    this.router.navigate(['dashboard']);
  }

  get oldPassword() {
    return this.myForm.get('oldPassword');
  }
  get newPassword() {
    return this.myForm.get('newPassword');
  }
  get confirm() {
    return this.myForm.get('confirm');
  }

  /**-- checking if old password is valid-- */
  asyncPasswordValidator(control: FormControl) {
    return new Promise((resolve) => {
      if (control.value !== '1234') {
        resolve({ invalidOldPassword: true });
      } else {
        resolve({ invalidOldPassword: null });
      }
    });
  }

  /**--- confirmation of new password */
  passowordShouldMatch(control: FormControl) {
    let np = control.get('newPassword');
    let cp = control.get('confirm');
    // console.log(np?.value);

    if (np?.value !== cp?.value) {
      return { passowordShouldMatch: true };
    } else {
      return null;
    }
  }

  ngOnInit(): void {}
}
