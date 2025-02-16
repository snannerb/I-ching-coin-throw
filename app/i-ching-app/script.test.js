// script.test.js
const { throwCoin, generateHexagram } = require('./script');

test('throwCoin should return 0 or 1', () => {
  const result = throwCoin();
  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThanOrEqual(1);
});

test('generateHexagram should return an array of 6 lines (0 or 1)', () => {
  const result = generateHexagram();
  expect(result.length).toBe(6);
  result.forEach((line) => {
    expect(line).toBeGreaterThanOrEqual(0);
    expect(line).toBeLessThanOrEqual(1);
  });
});