import {squareArray} from './index.js'

test('result for empty array is empty array', () => {
  expect(squareArray([])).toEqual([]);
})

const source = [1, 2, 3, 4];

test('Source array is not changed', () => {

  expect(source).toEqual([1, 2, 3, 4]); 
})

test('should return null with not array', () => {
  expect(squareArray(12)).toBe(null);
})