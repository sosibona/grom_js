import {reverseArray} from './index.js'

test('should work with string as element', () => {
  expect(reverseArray(['a', 'b'])).toEqual(['b', 'a']);
})

const source = [1, 2, 3, 4];

test('Source array is not changed', () => {

  expect(source).toEqual([1, 2, 3, 4]); 
})

test('should return null with not array', () => {
  expect(reverseArray({})).toBe(null);
})
