describe('Color page', () => {
  beforeAll(() => {
    browser.driver.get('http://192.168.99.100:81/');
    browser.ignoreSynchronization = true;
  });

  it('should display the color name and correct text color', () => {
    element(by.css('h1')).getText().then((color) => {
      console.log(color);
      expect(color.length).not.toBe(0);
      expect(element(by.css('h1')).getAttribute('style')).toContain('color: ' + color);
    });
  });
});
