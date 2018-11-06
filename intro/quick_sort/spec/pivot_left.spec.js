function isSorted(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

const q_sort = require('../pivot_start')

describe(`Choosing pivot as most left side element`, () => {
  it(`returns the sorted array`, () => {
    let arr = [2, 5, 1, 9, 4]
    q_sort(arr)
    expect(isSorted(arr)).toEqual(true)
  })
  // it(`returns a larger sorted array of random numbers`, () => {
  //   let arr = []
  //   for (i = 0; i < 10000; i++) {
  //     arr.push(Math.floor(Math.random() * 10000))
  //   }
  //   q_sort(arr)
  //   expect(isSorted(arr)).toEqual(true)
  // })

})

describe(`Counting the number of recursive calls`, () => {
  it(`counts the number of recursive calls on a simple array`, () => {
    let arr = [2, 5, 1, 9, 4]
    expect(q_sort(arr)).toEqual(2)

  })
})

