import { CPSproPage } from './app.po';

describe('cpspro App', () => {
  let page: CPSproPage;

  beforeEach(() => {
    page = new CPSproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
