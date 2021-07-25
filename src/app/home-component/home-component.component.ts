import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponentComponent implements OnInit {
  myForm: FormGroup;
  hide = true;
  constructor(public fb: FormBuilder, private route: Router) {
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
    console.log('Hello there');
    this.route.navigate(['/', 'dashboard']);
  }

  get email() {
    return this.myForm.get('email');
  }
  get password() {
    return this.myForm.get('password');
  }

  ngOnInit(): void {}
}
