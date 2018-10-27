function solve(array) {

  var inversionCount = 0
  inversion_count(array)
  return inversionCount
  /*try with 0 passed in as arg & returned */
  function inversion_count(array) {

    if (array.length <= 1) {
      return inversionCount
    }

    let middlePointer = Math.floor(array.length / 2)
    let leftArray = array.slice(0, middlePointer)
    let rightArray = array.slice(middlePointer, array.length)

    inversion_count(leftArray)
    inversion_count(rightArray)
    count_and_sort(leftArray, rightArray, array)
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
      array[count] = rightArray[rightIndex]
      count++
    }

    for (leftIndex; leftIndex < leftArray.length; leftIndex++) {
      array[count] = leftArray[leftIndex]
      count++
    }

  }

}

exports.inversion = solve