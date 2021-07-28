import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './../myservice.service';

export interface PeriodicElement {
  game_name: string;
  date: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { game_name: 'Hydrogen', date: '2021/04/02', time: 'H' },
];

@Component({
  selector: 'app-your-quotes',
  templateUrl: './your-quotes.component.html',
  styleUrls: ['your-quotes.component.css'],
})
export class YourQuotesComponent implements OnInit {
  quotes: any;
  currentUser: any;
  displayedColumns: string[] = ['game_name', 'date', 'time'];
  dataSource = ELEMENT_DATA;
  constructor(private service: MyserviceService) {}

  ngOnInit(): void {
    this.currentUser = this.service.currentUser.id;
    this.service.your_quotes(this.currentUser).subscribe((res: any) => {
      this.quotes = res.data;
      console.log(this.quotes);
    });
  }
}
