import {Component} from '@angular/core';
import { StockService } from './stock.service';

@Component({
    selector: 'stocks',
    template: `<h1>Stocks</h1>
    {{title}}
    <ul [ngStyle] = "{'color': myColor, 'font-size': mySize}">
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>

    <hr>

    <ul *ngIf="stockMarkets.length === 5" [ngClass]="{customClass: isColorBrown, centerClass: isCenter}">
        <li *ngFor="let stockMarket of stockMarkets">
            {{stockMarket}}
        </li>
    </ul>

    <hr>

    <div [ngSwitch]="market">
        <div *ngSwitchCase="'NYSE'">New York Stock Exchange</div>
        <div *ngSwitchCase="'LSE'">London Stock Exchange</div>
        <div *ngSwitchCase="'HKSE'">Hong Kong Stock Exchange</div>
        <div *ngSwitchCase="'NASDAQ'">moc dlouhý</div>
        <div *ngSwitchDefault>Could not find a match</div>
    </div>
    `,
    styles: [`
        .customClass {
            color: brown;
        }

        .centerClass {
            text-align: center;
        }
    `
    ]
})
export class StocksComponent {

    isCenter = false;
    isColorBrown = true;
    myColor = 'blue';
    mySize = '200%';
    market = 'LSE';

    title = 'List of stocks';
    //stocks = ['APPLE', 'IBM', 'GOOGLE', 'UDEMY'];
    stocks;
    showStockMarket = true;

    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];

    constructor(stockService : StockService) {
        this.stocks = stockService.getStocks();
    }
}
