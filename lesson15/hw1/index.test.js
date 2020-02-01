import { createCalculator } from './index.js';

test('method add works correct', () => {
  const res = createCalculator().add(10);
  expect(res).toBe(10);
})

test('method decrease works correct', () => {
  const res = createCalculator().decrease(10);
  expect(res).toBe(-10);
})

test('method reset make res to zero', () => {
  const res = createCalculator().reset();
  expect(res).toBe(0);
})

test('method getMemo show last res', () => {
  const res = createCalculator().getMemo();
  expect(res).toBe(0);
})

test('function createClaculator return an object', () => {
  const calculator = typeof createCalculator();
  expect(calculator).toEqual('object');
})

