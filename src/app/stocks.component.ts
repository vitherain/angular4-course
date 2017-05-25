import {Component} from '@angular/core';

@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
    {{title}}
    <ul>
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>
    `
})
export class StocksComponent {

    title = 'List of stocks';
    stocks = ['APPLE', 'IBM', 'GOOGLE', 'UDEMY'];
}
