import { Component, OnInit } from '@angular/core';

import { StockService } from '../stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: string[];

  selectedStock: any;
  updateEnabled = false;

  constructor(private stockService: StockService) {

  }

  ngOnInit() {
    this.getAllStocks();
  }

  getAllStocks() {
    this.stockService.getStocksAPI().subscribe(
      data => this.stocks = data,
      error => console.log('Server Error')
    );
  }

  createStock(newStockCode: string, newName: string) {
    this.stockService.createStock(newStockCode, newName).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  updateStock(newStockCode: string, newName: string) {
    this.stockService.updateStock(this.selectedStock.id, newStockCode, newName).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  deleteStock(stockId: string) {
    this.stockService.deleteStock(stockId).subscribe(
      data => {
        this.getAllStocks();
      }
    );
  }

  loadDetails(stock: any) {
    this.updateEnabled = true;
    this.selectedStock = stock;
  }
}
