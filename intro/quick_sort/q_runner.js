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

var arrRight = []
var arrLeft = []
var arrMid = [] 

readLineSync('q_sort_int.txt', 'utf8', function(line) {
  arrRight.push(parseInt(line))
  arrLeft.push(parseInt(line))
  arrMid.push(parseInt(line))
})


let leftC = q_left(arrLeft)
let rightC = q_right(arrRight)
let midC = q_mid(arrMid)

console.log(isSorted(arrLeft))
console.log(isSorted(arrRight))
console.log(isSorted(arrMid))
console.log(leftC)
console.log(rightC)
console.log(midC)


