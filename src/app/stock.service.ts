import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StockService {

    constructor (private http: Http) {

    }

    getStocksAPI(): Observable<any> {
        return this.http.get('http://localhost:3000/stocks')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || ' Server Error'));
    }

    getStocks() : string[] {
        return ['APPLE', 'IBM', 'MICROSOFT'];
    }

    createStock(newStockCode: string, newName: string) : Observable<any> {
        return this.http.post('http://localhost:3000/stocks', { name: newName, stockCode: newStockCode });
    }

    updateStock(stockId: string, newStockCode: string, newName: string) : Observable<any> {
        return this.http.put(`http://localhost:3000/stocks/${stockId}`, { name: newName, stockCode: newStockCode });
    }
}