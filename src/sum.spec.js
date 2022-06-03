const sum = require('./sum')

test('sum function', () => {
  expect(sum(5, 5)).toBe(10)
})
