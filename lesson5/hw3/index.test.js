import {increaser } from './index.js';

test('number is more than index', () => {
  expect(increaser(10, 3)).toEqual(13);
});

test('number is less than index', () => {
  expect(increaser(3, 10)).toEqual(3);
});

test('should return a number', () => {
  expect(typeof increaser(1, 5)).toBe('number');
});