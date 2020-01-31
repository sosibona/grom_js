import { pickProps } from './index.js';

test('should work for object and array', () => {
  const obj = {'a': 1, 'b': 2, 'c': 3};
  const arr = ['a', 'c']
  // const [obj, arr] = pickProps(, );
  expect(pickProps(obj, arr)).toEqual({'a': 1, 'c': 3});
})

const source = {
  name: 'Taras',
  test: 'test'
}

test('Source object is not changed', () => {

  expect(source)
    .toEqual({
      name: 'Taras', 
      test: 'test'
    }); 
})

test('should return empty object', () => {
  const obj = {'a': 1, 'b': 2, 'c': 3};
  const arr = ['d', 'e'];
  expect(pickProps(obj, arr)).toEqual({});
})