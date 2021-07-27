import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-invites',
  templateUrl: './invites.component.html',
  styles: [],
})
export class InvitesComponent implements OnInit {
  myForm: FormGroup;
  user: any;
  currentUser: any;
  invalidPost: any;
  schedules: string[] = [
    'Tournament Single Elimination',
    'Tournament Double Elimination',
  ];
  games: string[] = [
    'FIFA',
    'Minecraft',
    'Call of Duty',
    'DOTA 2',
    'Overwatch',
    'Starcraft 2',
    'Fallout 4',
  ];
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service: MyserviceService
  ) {
    this.myForm = formBuilder.group({
      game_name: ['', [Validators.required]],
      pic_url: ['', [Validators.required]],
      no_players: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      schedule_type: ['', Validators.required],
    });
    this.currentUser = this.service.currentUser.id;
    this.user = this.router.getCurrentNavigation()?.extras.state?.user;
    // console.log(this.user);
  }

  onSubmit(e: any) {
    this.service
      .new_game_schedule({ ...e.value, userId: this.currentUser })
      .subscribe((res: any) => {
        if (res.status === 'already posted') this.invalidPost = true;
        else {
          this.router.navigate(['dashboard']);
        }
      });
  }

  get game_name() {
    return this.myForm.get('game_name');
  }
  get no_players() {
    return this.myForm.get('no_players');
  }
  get date() {
    return this.myForm.get('date');
  }
  get time() {
    return this.myForm.get('time');
  }
  get schedule_type() {
    return this.myForm.get('schedule_type');
  }

  ngOnInit(): void {
    this.currentUser = this.service.currentUser.id;
    console.log(this.currentUser);
  }
}
