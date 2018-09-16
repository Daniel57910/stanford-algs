const Karatsuba = require('../karatsuba')

describe("Implementation of the karatsuba algorithm", () => {
  beforeEach(() => {
    karatsuba = new Karatsuba()
  })
  it("passes the basis sanity check", () => {
    expect(karatsuba.multiply(100, 0)).toEqual(0)
    expect(karatsuba.multiply(0, 100)).toEqual(0)
    expect(karatsuba.multiply(251000, 1)).toEqual(251000)
    expect(karatsuba.multiply(1, 2450000)).toEqual(2450000)
  })
  it("returns x * y if both are less than 10", () => {
    expect(karatsuba.multiply(8, 6)).toEqual(48)
  })
})