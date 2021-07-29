import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['quoteform.component.css'],
})
export class QuoteformComponent implements OnInit {
  game: any;
  myForm: FormGroup;
  currentUser: any;
  invalidQuote: any;
  constructor(
    public service: MyserviceService,
    private route: Router,
    public formBuilder: FormBuilder
  ) {
    this.myForm = formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      // phone_number: [
      //   ,
      //   [Validators.pattern('^((\\+1-?)|0)?[0-9]{10}$'), Validators.required],
      // ],
    });

    this.game = this.route.getCurrentNavigation()?.extras.state?.game;
    console.log(this.game);
  }
  onSubmit(e: any) {
    this.service
      .reserve_quote({
        ...e.value,
        userId: this.currentUser,
        gameId: this.game._id,
      })
      .subscribe((res: any) => {
        if (res.status === 'quote exists') this.invalidQuote = true;
        else {
          this.route.navigate(['dashboard']);
        }
      });
  }

  get email() {
    return this.myForm.get('email');
  }
  ngOnInit(): void {
    this.currentUser = this.service.currentUser.id;
  }
}
