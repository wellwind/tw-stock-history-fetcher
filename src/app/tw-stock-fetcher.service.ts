import { Observable } from 'rxjs/Observable';
import { StockData } from './shared/interfaces/stock-data';
import { RequestOptions, Response, Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TwStockFetcherService {

  constructor(private http: Http) { }

  private getPostRequestOptions() {
    const requestHeaders = new Headers();
    requestHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
    const requestOptions = new RequestOptions({ headers: requestHeaders });
    return requestOptions;
  }

  private getQueryString(obj: any) {
    return Object.keys(obj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`).join('&');
  }

  GetStockData(stock: string, year: string, month: string): Observable<StockData[]> {
    const queryObj = {
      'download': 'csv',
      'query_year': year,
      'query_month': month,
      'CO_ID': stock
    };
    return this.http.post('http://www.twse.com.tw/ch/trading/exchange/STOCK_DAY/STOCK_DAYMAIN.php',
      this.getQueryString(queryObj),
      this.getPostRequestOptions()
    ).map(response => this.processResponseDataToStockData(response.text()));
  }

  private processResponseDataToStockData(csvData: string): StockData[] {
    console.log(csvData);
    return [];
  }
}
