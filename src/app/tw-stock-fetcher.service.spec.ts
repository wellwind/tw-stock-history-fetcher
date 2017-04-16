import { TestBed, inject } from '@angular/core/testing';

import { TwStockFetcherService } from './tw-stock-fetcher.service';

describe('TwStockFetcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwStockFetcherService]
    });
  });

  it('should ...', inject([TwStockFetcherService], (service: TwStockFetcherService) => {
    expect(service).toBeTruthy();
  }));
});
