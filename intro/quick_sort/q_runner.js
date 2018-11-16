const q_right = require('./pivot_end')
const q_left = require('./pivot_start')
const q_mid = require('./pivot_mid')
var readLineSync = require('read-each-line-sync')

function isSorted(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false 
    }
  }
  return true
}

// var arrRight = []
// var arrLeft = []

// readLineSync('q_sort_int.txt', 'utf8', function(line) {
//   arrRight.push(parseInt(line))
//   arrLeft.push(parseInt(line))
// })


// let leftC = q_left(arrLeft)
// let rightC = q_right(arrRight)

// console.log(isSorted(arrRight))
// console.log(isSorted(arrLeft))
// console.log(leftC)
// console.log(rightC)

big_arr_random = []

for (let i = 0; i < 100000; i++) {
  big_arr_random.push(Math.floor(Math.random() * 100))
}

let arr_end_ev = [1, 3, 9, 5, 2]
let arr_mid_ev = [1, 8, 6, 2, 12]
let arr_start_ev = [5, 2, 1, 6, 7, 12]
q_mid(arr_end_ev)
q_mid(arr_mid_ev)
q_mid(arr_start_ev)
q_mid(big_arr_random)

console.log(arr_end_ev)
console.log(arr_mid_ev)
console.log(arr_start_ev)
console.log(isSorted(big_arr_random))
