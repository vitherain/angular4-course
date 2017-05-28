import {Component} from '@angular/core';
import { StockService } from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
    {{title}}
    <ul>
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>

    <hr>

    <ul>
        <li *ngFor="let stockMarket of stockMarkets">
            {{stockMarket}}
        </li>
    </ul>
    `
})
export class StocksComponent {

    title = 'List of stocks';
    //stocks = ['APPLE', 'IBM', 'GOOGLE', 'UDEMY'];
    stocks;

    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];

    constructor(stockService : StockService) {
        this.stocks = stockService.getStocks();
    }
}
