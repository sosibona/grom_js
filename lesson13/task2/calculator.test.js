import getSum, {getSquaredArray, getOddNumbers} from './calculator.js';

// eslint-disable-next-line no-undef
it('should get squared every element of array', () =>{
  const res = getSquaredArray([1, 2, 3, 4]);

  // eslint-disable-next-line no-undef
  expect(res).toEqual([1, 4, 9, 16]);
});

// eslint-disable-next-line no-undef
it('should returns only odd element of array', () => {
  const res = getOddNumbers([1, 1, 2, 5]);
  // eslint-disable-next-line no-undef
  expect(res).toEqual([1, 1, 5]);
});

// eslint-disable-next-line no-undef
it('sum mus be correct', () => {
  const res = getSum(1, 5);
  // eslint-disable-next-line no-undef
  expect(res).toEqual(6);
})