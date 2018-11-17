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
    let wall = partition(array, left, right)
    partitions_count += right - left 
    divide(array, left, wall - 1)
    divide(array, wall + 1, right)

  }

}

function partition(arr, leftSide, RightSide) {

  let midPoint = Math.floor((leftSide + RightSide) / 2)
  let pivot = return_median_index(arr[leftSide], arr[midPoint], arr[RightSide])
  let wall = leftSide + 1

  if (pivot === arr[midPoint]) {
    swap(arr, leftSide, midPoint)
  }

  else if (pivot === arr[RightSide]) {
    swap(arr, leftSide, RightSide)
  }

  for (let left = leftSide + 1; left <= RightSide; left++) {
     if (pivot > arr[left]) {
       swap(arr, wall, left)
       wall++
     }
   }

   swap(arr, wall - 1, leftSide)
   return wall - 1
  
}

function swap(arr, current, wall) {
  let temp = arr[current]
  arr[current] = arr[wall]
  arr[wall] = temp
}

function return_median_index(left, mid, right) {

  let candidates = []

  candidates.push(left)
  candidates.push(mid)
  candidates.push(right)

  candidates.sort((a, b) => { return a - b })
  return candidates[Math.floor(candidates.length / 2)]
}



module.exports = q_sort