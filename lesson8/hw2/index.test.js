import { getAdults } from './index.js';

const source = {
  'Tom': 20, 
  'Bob': 21, 
  'Ann': 3,
}

test('should return older than 18', () => {
  expect(getAdults(source))
        .toEqual({'Tom': 20, 'Bob': 21}); 
})

test('Source object is not changed', () => {
  expect(source)
    .toEqual({
      'Tom': 20, 
      'Bob': 21, 
      'Ann': 3,
    }); 
})

test('should return empty object', () => {
  expect(getAdults({})).toEqual({});
})