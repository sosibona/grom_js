

it('17', () => {
  expect(17).toEqual(17);
});

it('18', () => {
  expect(18).not.toEqual(17);
});

function getEvenNumbers(numbers) {
  return numbers.filter(el => (el % 2 === 0));
} 

it('should return even numbers', () => {
  const res = getEvenNumbers([1, 2, 3, 4]);

  expect(res).toEqual([2, 4]);
});