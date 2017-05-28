import { Component } from '@angular/core';
import { StocksComponent } from './stocks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vít Herain';
  today = new Date();
  profile = { id: 10001, name: 'James Bond', role: 'Administrator'};
}
