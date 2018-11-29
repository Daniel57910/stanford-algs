const Pair = require(`../src/pair`)

describe(`an individual pair of node and vertices`, () => {
  beforeEach(() => {
    pair = new Pair(6, [18, 7, 11, 9])
  }) 
  it(`correctly generates a pair of node and vertices`, () => {
    expect(pair.node).toEqual(6)
    expect(pair.vertices).toEqual([18, 7, 11, 9])
  })

})