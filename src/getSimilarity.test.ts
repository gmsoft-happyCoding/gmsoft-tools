const getSimilarity = require('./getSimilarity');

test('test getSimilarity', () => {
  expect(getSimilarity.default('123', '123')).toBe(1);
  expect(getSimilarity.default('123', '456')).toBe(0);
  expect(getSimilarity.default('1235', '1')).toBe(0.25);
  expect(getSimilarity.default('aaaa', 'jack')).toBe(0.25);
  expect(getSimilarity.default('有限公司', '重庆某某科技有限公司')).toBe(0.4);
});
