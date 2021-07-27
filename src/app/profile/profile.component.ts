import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';
// import {
//   FormGroup,
//   FormBuilder,
//   Validators,
//   FormControl,
//   AbstractControl,
// } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.css'],
})
export class ProfileComponent implements OnInit {
  users: any;
  currentUser: any;
  constructor(public service: MyserviceService) {}

  ngOnInit(): void {
    this.currentUser = this.service.currentUser.id;
    this.service.getUser(this.currentUser).subscribe((res: any) => {
      this.users = res.data;
      console.log(this.users);
      
    });
  }
}
