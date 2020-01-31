import {compareSums, sum} from './index.js'

it('first interval is more than second', () => {
  const res = compareSums(1, 10, 2, 4);
  
  expect(res).toBe(true);
});

it('first interval is less than second', () => {
  const res = compareSums(1, 2, 2, 4);
  
  expect(res).toBe(false);
});

it('first interval = second', () => {
  const res = compareSums(1, 10, 1, 10);
  
  expect(res).toBe(false);
});