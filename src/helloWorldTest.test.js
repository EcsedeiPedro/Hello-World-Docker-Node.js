const helloWorld = require('./helloWorld');

describe('should return', () => {
  it('should return hello world', () => {
    expect(helloWorld('hello', 'world')).toBe('hello world');
  });
});