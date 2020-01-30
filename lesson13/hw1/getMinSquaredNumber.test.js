
import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('array is empty array', () => {
  const res = getMinSquaredNumber([]);

  expect(res).toEqual(null);
});

it('pass string to function as argument', () => {
  const res = getMinSquaredNumber('test');

  expect(res).toEqual(null);
});

it('should return minimal the absolute value of a array', () => {
  const res = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(res).toEqual(4);
})