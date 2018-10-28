
function q_sort(arr) {

  let pivot = arr[arr.length - 1]
  let wall = 0

  for (let left = 0; left < arr.length; left++) {

    console.log(`pivot is ${pivot}`)
    if (pivot > arr[left]) {
      console.log(`${arr[left]} < ${pivot}`)
      swap(arr, left, wall)
      wall++
    }
  }
  
  swap(arr, arr.length - 1, wall)
  
}

function swap(arr, current, wall) {
  let temp = arr[current]
  arr[current] = arr[wall]
  arr[wall] = temp
}

module.exports = q_sort