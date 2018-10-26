var inversionCount = 0
/*try with 0 passed in as arg & returned */
function inversion_count(array) {

  if (array.length === 1) {
    return
  }

  let middlePointer = Math.floor(array.length / 2)
  let leftArray = array.slice(0, middlePointer)
  let rightArray = array.slice(middlePointer, array.length)

  inversion_count(leftArray)
  inversion_count(rightArray) 
  count_and_sort(leftArray, rightArray, array) 
  return inversionCount
}

function count_and_sort(leftArray, rightArray, array) {
   let rightIndex = leftIndex = count = 0
   let length = leftArray.length

   while (rightIndex < rightArray.length && leftIndex < leftArray.length) {
     if (leftArray[leftIndex] <= rightArray[rightIndex]) {
       array[count] = leftArray[leftIndex]
       leftIndex++
     } else {
      array[count] = rightArray[rightIndex]
      inversionCount += (length - leftIndex)
      rightIndex++
     }
     count++
   }

   for (rightIndex; rightIndex < rightArray.length; rightIndex++) {
   //copies any additional elements into array and calculates necessary inversions if all on left side not copied in
    array[count] = rightArray[rightIndex]
    inversionCount += (length - leftIndex)
    count++
  }

  for (leftIndex; leftIndex < leftArray.length; leftIndex++) {
    array[count] = leftArray[leftIndex]
    count++
  }


}

exports.inversion = inversion_count
