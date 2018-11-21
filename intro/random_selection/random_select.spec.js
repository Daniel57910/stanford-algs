const random_select = require(`./random_select`)

describe(`random selection function`, () => {
  test(`basic selection of 10 in random`, () => {
    let arr = generate_random_array(10)
    let nth_value = random_select(arr, 8)
    arr.sort((a, b) => a - b)
    expect(nth_value).toEqual(arr[8])
  })
  test(`basic selection out of greater amounts`, () => {
    let arr = generate_random_array(100)
    let nth_value = random_select(arr, 35)
    arr.sort((a, b) => a - b)
    expect(nth_value).toEqual(arr[35])
  })
  test(`search of 1000`, () => {
    let arr = generate_random_array(1000)
    let nth_value = random_select(arr, 652)
    arr.sort((a, b) => a - b)
    expect(nth_value).toEqual(arr[652])
  })
})


function generate_random_array(val) {
  let arr = []
  for (i in val) {
    arr.push(Math.floor(Math.random() * 100))
  }
  return arr
}