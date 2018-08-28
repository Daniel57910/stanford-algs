const digit = require('./digit')


describe('Recursive super digit calculator', () => {
  beforeEach(() => {
    digitCalculator = new digit()
  })
  it('aggregates the sum of the integers', () => {
    expect(digitCalculator.digitSum(9999, 1)).toEqual(9)
  })
  it('appends the digits to original number k times', () => {
    expect(digitCalculator.digitSum(1234, 2)).toEqual(2)
    expect(digitCalculator.digitSum(148, 3)).toEqual(3)
    expect(digitCalculator.digitSum(123, 3)).toEqual(9)
    expect(digitCalculator.digitSum(9875, 4)).toEqual(8)

  })
})