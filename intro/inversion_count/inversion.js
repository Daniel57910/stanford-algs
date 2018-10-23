function inversion_count(array) {

  if (array.length === 1) {
    return 0
  }
  let countSwap = 0

  let middlePointer = Math.floor(array.length / 2)
  let leftArray = array.slice(0, middlePointer)
  let rightArray = array.slice(middlePointer, array.length)

  inversion_count(leftArray)
  inversion_count(rightArray)
  console.log(leftArray)
  console.log(rightArray)
  countSwap += count_and_sort(leftArray, rightArray, array)
  console.log(`count swap is ${countSwap}`)
  console.log(array)
  return countSwap
  
}

function count_and_sort(leftArray, rightArray, array) {
   let rightIndex = leftIndex = count = inversionCount = 0

   while (rightIndex < rightArray.length && leftIndex < leftArray.length) {
     if (leftArray[leftIndex] < rightArray[rightIndex]) {
       array[count] = leftArray[leftIndex]
       leftIndex++
     } else {
       array[count] = rightArray[rightIndex]
      inversionCount += 1 + leftIndex - rightIndex
      console.log(`inversion count is ${inversionCount}`)
      rightIndex++
     }
     count++
   }

  for (leftIndex; leftIndex < leftArray.length; leftIndex++) {
    array[count] = leftArray[leftIndex]
    count++
  }

  for (rightIndex; rightIndex < rightArray.length; rightIndex++) {
    array[count] = rightArray[rightIndex]
    inversionCount += 1 + leftIndex - rightIndex
    console.log(`inversion count is ${inversionCount}`)
    count++
  }

  return inversionCount

}

exports.inversion = inversion_count
