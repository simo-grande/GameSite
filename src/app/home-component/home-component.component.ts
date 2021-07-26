import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponentComponent implements OnInit {
  myForm: FormGroup;
  hide = true;
  userInfo: any = {};
  invalidLogin: boolean | any;
  constructor(
    public fb: FormBuilder,
    private service: MyserviceService,
    private route: Router
  ) {
    this.myForm = fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  onSubmit(e: any) {
    this.service.loginHandler(e.value).subscribe((res: any) => {
      if (res === 'error') this.invalidLogin = true;
      else if (res && res.result) {
        localStorage.setItem('token', res.result);
        this.route.navigate(['/', 'dashboard']);
      }
    });
  }

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }

  ngOnInit(): void {}
}
