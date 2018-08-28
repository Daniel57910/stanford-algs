const digit = require('./digit')


describe('Recursive super digit calculator', () => {
  beforeEach(() => {
    digitCalculator = new digit()
  })
  it('aggregates the sum of the integers', () => {
    expect(digitCalculator.digitSum(9999)).toEqual(36)
  })
})