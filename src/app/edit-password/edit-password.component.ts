import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styles: [],
})
export class EditPasswordComponent implements OnInit {
  user: any;
  myForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public service: MyserviceService
  ) {
    this.myForm = formBuilder.group(
      {
        oldPassword: ['', [Validators.required]],
        newPassword: ['', Validators.required],
        confirm: ['', Validators.required],
      },
      { validator: this.passowordShouldMatch }
    );

    this.user = this.router.getCurrentNavigation()?.extras.state?.user;
    console.log(this.user);
  }
  onSubmit(e: any) {
    this.service
      .update_password(this.user._id, e.value)
      .subscribe((res: any) => {
        console.log(this.myForm);
        this.router.navigate(['dashboard']);
      });
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
