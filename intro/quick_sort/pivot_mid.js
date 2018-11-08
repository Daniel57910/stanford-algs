function q_sort(arr) {

  let right = arr.length
  let left = 0
  var partitions_count = 0

  divide(arr, left, right - 1)
  return partitions_count

  function divide(array, left, right) {

    //base case for returning from function
    if (right <= left || array.length <= 1) {
      return
    }

    /*quicksort the array and retrieve the wall where Ai <= p <= Ai */
    partition(array, left, right)
    // partitions_count += right - left

    // divide(array, left, wall - 1)
    // divide(array, wall + 1, right)

  }

}

function partition(arr, leftSide, RightSide) {

  let midPoint = find_mid_point(arr)
  let pivot = return_median_index(arr)
  console.log(`pivot = ${pivot}`)

  if (pivot === arr[leftSide]) {
    console.log(`left side is the mid of the three`)
  }
  else if (pivot === arr[midPoint]) {
    console.log(`mid point is mid of three`)
  }
  else {
    console.log(`end point is mid of the three`)
  }
  // swap(arr, leftSide, RightSide)
  // let pivot = arr[leftSide]
  // let wall = leftSide + 1

  // for (let left = leftSide + 1; left <= RightSide; left++) {
  //   if (pivot > arr[left]) {
  //     swap(arr, wall, left)
  //     wall++
  //   }
  // }

  // swap(arr, wall - 1, leftSide)

  // return wall - 1
  // /* wall acts as partition point for everything around array */

}

// function swap(arr, current, wall) {
//   let temp = arr[current]
//   arr[current] = arr[wall]
//   arr[wall] = temp
// }

function return_median_index(arr) {
  let candidates = []

  candidates.push(arr[0])
  candidates.push(arr[find_mid_point(arr)])
  candidates.push(arr[arr.length - 1])
  candidates.sort((a, b) => { return a - b })
  return candidates[find_mid_point(candidates)]
}

function find_mid_point(array) {
  return Math.floor((array.length - 1) / 2)
}



module.exports = q_sort