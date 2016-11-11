import { SheferMobileMaterialPage } from './app.po';

describe('shefer-mobile-material App', function() {
  let page: SheferMobileMaterialPage;

  beforeEach(() => {
    page = new SheferMobileMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
