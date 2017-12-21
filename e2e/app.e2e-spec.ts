import { ExamenPage } from './app.po';

describe('examen App', () => {
  let page: ExamenPage;

  beforeEach(() => {
    page = new ExamenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
