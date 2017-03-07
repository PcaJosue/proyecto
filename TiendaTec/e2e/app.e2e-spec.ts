import { TiendaTecPage } from './app.po';

describe('tienda-tec App', function() {
  let page: TiendaTecPage;

  beforeEach(() => {
    page = new TiendaTecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
