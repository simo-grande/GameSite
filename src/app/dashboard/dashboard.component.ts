import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  games: any;
  constructor(public service: MyserviceService) {}

  ngOnInit(): void {
    this.service.getAllGames().subscribe((res: any) => {
      this.games = res.data;
      console.log(this.games);
    });
  }
}
