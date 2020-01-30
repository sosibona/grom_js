import {calc} from './calculator.js';


it('sum is correct', () => {
  expect(calc('1 + 4')).toEqual('1 + 4 = 5');
});

it('subtraction is correct', () => {
  expect(calc('1 - 4')).toEqual('1 - 4 = -3');
});

it('multiplication is correct', () => {
  expect(calc('1 * 4')).toEqual('1 * 4 = 4');
});

it('division is correct', () => {
  expect(calc('1 / 4')).toEqual('1 / 4 = 0.25');
});

it('argument isnt type of string', () => {
  expect(calc(1234)).toEqual(null);
});


