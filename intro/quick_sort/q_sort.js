
function q_sort(arr) {

  let pivot = arr[arr.length - 1]
  let wall = 0

  for (let left = 0; left < arr.length; left++) {

    if (pivot > arr[left]) {
      swap(arr, wall, left)
      wall++
    }
  }
  
  swap(arr, wall, arr.length - 1)
  
}

function swap(arr, current, wall) {
  let temp = arr[current]
  arr[current] = arr[wall]
  arr[wall] = temp
}

module.exports = q_sort