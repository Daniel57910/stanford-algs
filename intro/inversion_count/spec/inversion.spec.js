const inversionFunc = require('../inversion')

describe('Inversion Counter', () => {
  beforeEach(() => {
    inversionCount = inversionFunc.inversion
  })
  it(`returns 0 for a sorted array`, () => {
    expect(inversionCount([1, 2, 3, 4, 5, 6])).toEqual(0)
  })
  it(`retruns 0 for a sorted array with a majority element`, () => {
    expect(inversionCount([1, 1, 1, 2, 2])).toEqual(0)
  })
  it(`returns 1 for an array requiring one inversion`, () => {
    expect(inversionCount([1, 3, 2, 4, 5, 6])).toEqual(1)
  })
})

describe(`multiple inversions`, () => {
  beforeEach(() => {
    inversionCount = inversionFunc.inversion
  })
  it(`returns the correct number of inversions`, () => {
    
  })
})