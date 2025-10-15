import nonUniqueElements from './nonUniqueElements.js';


test('Returns non unique elements', () => {
  expect(nonUniqueElements([1, 2, 3, 1, 3])).toEqual([1, 3, 1, 3]);
  expect(nonUniqueElements([1, 2, 3, 4, 5])).toEqual([]);
  expect(nonUniqueElements([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
  expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).toEqual([10, 9, 10, 10, 9]);
})

test('Returns undefined', () => {
  expect(nonUniqueElements([])).toEqual([]);
  expect(nonUniqueElements(10)).toEqual(undefined);
  expect(nonUniqueElements('string')).toEqual(undefined);
  expect(nonUniqueElements(true)).toEqual(undefined);
  expect(nonUniqueElements(false)).toEqual(undefined);
  expect(nonUniqueElements(null)).toEqual(undefined);
  expect(nonUniqueElements(undefined)).toEqual(undefined);
})
