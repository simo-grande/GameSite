import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from './../myservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  games: any;
  currentUser: any;
  constructor(public service: MyserviceService, private route: Router) {}

  ngOnInit(): void {
    this.service.getAllGames().subscribe((res: any) => {
      this.games = res.data;
      console.log(this.games);
    });
    this.currentUser = this.service.currentUser.id;
  }

  requestQuote(game: any): void {
    this.route.navigate(['quoteForm'], { state: { game: game } });
    //   console.log(game);
  }

  deleteGame(id: any): void {
    this.service.deleteGame(id).subscribe((res: any) => {
      if (res.status === 'success') {
        alert('You have succesfully removed your game!');
        this.service.getAllGames().subscribe((res: any) => {
          this.games = res.data;
          console.log(this.games);
        });
        this.route.navigate(['dashboard']);
      }
    });
  }
}
