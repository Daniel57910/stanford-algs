
function q_sort(arr) {

  let right = arr.length
  let left = 0
  var partitions_count = 0
  divide(arr, left, right-1)
  return partitions_count

  function divide(array, left, right) {

    //base case for returning from function
    if (right <= left || array.length <= 1) {
      return
    }

    /*quicksort the array and retrieve the wall where Ai <= p <= Ai */
    let wall = partition(array, left, right)
    
    /*sort the array around all elements before the wall */
    divide(array, left, wall - 1)

    /*sort the elements around all elements after the wall */
    divide(array, wall + 1, right)

  }

}

function partition(arr, leftSide, RightSide) {

  let pivot = arr[leftSide]
  let wall = leftSide + 1

  for (let left = leftSide + 1; left <= RightSide; left++) {
    if (pivot > arr[left]) {
      swap(arr, left, wall)
      wall++
    }
  }

  arr[leftSide] = arr[wall - 1]
  arr[wall - 1] = pivot
  return wall - 1

  }

function swap(arr, current, wall) {
  let temp = arr[current]
  arr[current] = arr[wall]
  arr[wall] = temp
}

module.exports = q_sort