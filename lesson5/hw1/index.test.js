import { getSum } from './index.js';

test('sum even numbers', () => {
  expect(getSum(0, 10)).toEqual(30);
});

test('should return 0 without even numbers', () => {
  expect(getSum(0, 1)).toEqual(0);
})

test('sum even negative numbers', () => {
  expect(getSum(-10, -5)).toEqual(-24);
});