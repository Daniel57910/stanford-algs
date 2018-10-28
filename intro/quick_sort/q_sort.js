
function q_sort(arr) {
  let pivot = arr[arr.length - 1]
  let wall = current = 0

  while (current < arr.length-1) {
    /*ensures pivot not compared against itself*/
    if (arr[current] > pivot) {
      console.log(`current ${arr[current]} > pivot ${pivot}`)
      current++
    }
    if (arr[current] < pivot) {
      console.log(`current ${arr[current]} > pivot ${pivot}`)
      swap(arr, current, wall)
      wall = current
    }

    console.log(`current = ${current}`)
  }

  swap(arr, wall, arr.length - 1)

}

function swap(arr, current, wall) {
  let temp = arr[current]
  arr[current] = arr[wall]
  arr[wall] = temp
}

module.exports = q_sort