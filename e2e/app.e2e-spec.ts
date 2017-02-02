import { Applab12Page } from './app.po';

describe('applab12 App', function() {
  let page: Applab12Page;

  beforeEach(() => {
    page = new Applab12Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
