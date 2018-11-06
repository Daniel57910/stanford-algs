const q_sort = require('./pivot_start')
var readLineSync = require('read-each-line-sync')
var arr = []

readLineSync('q_sort_int.txt', 'utf8', function(line) {
  arr.push(parseInt(line))
})

let a = q_sort(arr)

function isSorted(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

console.log(isSorted(arr))
console.log(a)


var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
q_sort(array)