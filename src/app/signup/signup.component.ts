import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [],
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  states: string[] = ['AZ', 'CO', 'CA', 'IA', 'TX'];
  cities: any = {
    TX: ['Austin', 'Dallas', 'Housten', 'San-Antenio', 'San-Marcos'],
    CA: ['Los Angelos', 'Oakland', 'San Deigo', 'San Francisco', 'San Jose'],
    CO: ['Denver', 'Aurora', 'Springs', 'Fort Colns', 'Castle Rock'],
    IA: ['Iowa City', 'Cedar Rapids', 'Fair Field', 'Ottumwa', 'Des Moines'],
    AZ: ['Phonix', 'Taxon', 'Gilbert', 'Mesa', 'Tempe'],
  };
  hide: boolean = true;
  constructor(public fb: FormBuilder, private route: Router) {
    this.myForm = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone_number: [
        ,
        [Validators.pattern('^((\\+1-?)|0)?[0-9]{10}$'), Validators.required],
      ],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  submit(e: any) {
    this.route.navigate(['/', 'home']);
  }

  get email() {
    return this.myForm.get('email');
  }
  get firstName() {
    return this.myForm.get('firstName');
  }
  get lastName() {
    return this.myForm.get('lastName');
  }
  get password() {
    return this.myForm.get('password');
  }

  get state() {
    return this.myForm.get('state');
  }
  get city() {
    return this.myForm.get('city');
  }
  get phone_number() {
    return this.myForm.get('phone_number');
  }
  get confirm_password() {
    return this.myForm.get('cofirm_password');
  }
  ngOnInit(): void {}
}
