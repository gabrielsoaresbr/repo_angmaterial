import { Component } from '@angular/core';

@Component({
  selector: 'minha-dashboard',
  templateUrl: './minha-dashboard.component.html',
  styleUrls: ['./minha-dashboard.component.css']
})
export class MinhaDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
