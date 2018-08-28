const testPower = require ('./power')

describe('Test Power', () => {
  beforeEach(() => {
    powerCalculator = new testPower()
  })
  it('returns the number of times an integer can be expressed in unique, natural numbers', () => {
    expect(powerCalculator.powerSum(10, 2)).toEqual(1)
    expect(powerCalculator.powerSum(100, 2)).toEqual(3)
    expect(powerCalculator.powerSum(100, 3)).toEqual(1)
  })
})