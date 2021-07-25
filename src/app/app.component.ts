import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'gaming';
  constructor(private route: Router) {}
  ngOnInit() {
    this.route.navigate(['/', 'home']);
  }
}
