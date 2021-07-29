import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['signup.component.css'],
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
  invalidEmail: boolean | any;
  constructor(
    public fb: FormBuilder,
    private service: MyserviceService,
    private route: Router
  ) {
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
      password: ['', [Validators.required, Validators.minLength(3)]],
      phone_number: [
        ,
        [Validators.pattern('^((\\+1-?)|0)?[0-9]{10}$'), Validators.required],
      ],
      address: fb.group({
        street: '',
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zipcode: '',
      }),
    });
    console.log(this.myForm.value);
  }
  submit(e: any) {
    this.service.signUpHandler(e.value).subscribe((res: any) => {
      if (res.status === 'exists') this.invalidEmail = true;
      else this.route.navigate(['/', 'home']);
      console.log(res.status);
    });
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
