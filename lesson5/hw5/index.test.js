import {findDivCount} from './index.js';

test('interval hasnt multiple', () => {
  const result = findDivCount(1, 1, 2);

  expect(result).toBe(0);
})

test('count is correct', () => {
  const result = findDivCount(1, 100, 2);

  expect(result).toBe(50);
})

test('count is correct for negative interval', () => {
  const result = findDivCount(-100, -1, 2);

  expect(result).toBe(50);
});

