import { TwStockHistoryFetcherPage } from './app.po';

describe('tw-stock-history-fetcher App', () => {
  let page: TwStockHistoryFetcherPage;

  beforeEach(() => {
    page = new TwStockHistoryFetcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
