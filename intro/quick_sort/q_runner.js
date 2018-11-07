const q_right = require('./pivot_end')
const q_left = require('./pivot_start')
var readLineSync = require('read-each-line-sync')
var arrRight = []
var arrLeft = []

readLineSync('q_sort_int.txt', 'utf8', function(line) {
  arrRight.push(parseInt(line))
  arrLeft.push(parseInt(line))
})


let leftC = q_left(arrLeft)
let rightC = q_right(arrRight)


var arr = [2, 1, 4, 5, 3, 7, 6, 3, 2, 0, 4, -10]
console.log(arr)
q_right(arr)
console.log(arr)



function isSorted(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

console.log(isSorted(arrRight))
console.log(isSorted(arrLeft))
console.log(leftC)
console.log(rightC)



