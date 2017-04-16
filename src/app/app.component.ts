import { TwStockFetcherService } from './tw-stock-fetcher.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  /**
   *
   */
  constructor(private stockService: TwStockFetcherService) {
    stockService.GetStockData('0050', '2016', '01').subscribe(data => console.log(data));
  }
}
