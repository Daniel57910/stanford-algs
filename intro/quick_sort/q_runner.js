const q_sort = require('./pivot_start')

let arr = [2, 5, 1, 9, 4]
// for (let i = 0; i < 100; i++) {
//   arr.push(Math.floor(Math.random() * 10000))
// }

q_sort(arr)
console.log(arr)
console.log(isSorted(arr))

function isSorted(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

var array = []
for (let i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 1000)
}

console.log(array)
q_sort(array)
console.log(array)