import { Component } from '@angular/core';

import { GetmarketserviceService } from '../app/services/getmarketservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public marketService;
  constructor(MarketService: GetmarketserviceService) {
    this.marketService = MarketService;
  }
  title = 'stock-explorer';

  public getSym() {
    this.marketService.getTimeSeries("TIME_SERIES_DAILY_ADJUSTED", "MSFT", "full");
  }
}
