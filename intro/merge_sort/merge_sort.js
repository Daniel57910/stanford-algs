class mergeObject {
  constructor() {
    this.array = []
  }

  createArray(length) {
    this.array = [];
    for (let i  = 0; i < length;i++) {
      this.array[i] = (Math.floor(Math.random() * 10000))
    }
  }
  
  currentArray() {
    return this.array
  }

  mergeSort(array) {

    let middlePointer = Math.floor(array.length / 2)
    let leftArray = array.slice(0, middlePointer)
    let rightArray = array.slice(middlePointer, array.length)
    if (array.length === 1) {
      return
    }

    this.mergeSort(leftArray)
    this.mergeSort(rightArray)
    sortDividedArrays(leftArray, rightArray, array)

  }

}

function sortDividedArrays(leftArray, rightArray, array) {
  let rightIndex = leftIndex = count = 0;
  while (rightIndex < rightArray.length && leftIndex < leftArray.length) {
    console.log(`left index = ${leftIndex}: ${leftArray[leftIndex]}, right index = ${rightIndex}: ${rightArray[rightIndex]}`)
    console.log(`left array = ${leftArray}, right array = ${rightArray}`)
    console.log(`count = ${count}`)
    console.log(`array = ${array}`)
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      array[count] = leftArray[leftIndex]
      leftIndex++
    }
    else {
      array[count] = rightArray[rightIndex]
      rightIndex++
    }
    count++
    console.log(`array after = ${array}`)
    console.log('\n\n')
  }

  for (rightIndex; rightIndex < rightArray.length;  rightIndex++) {
    array[count] = rightArray[rightIndex]
    count++
  } 
  
  for (leftIndex; leftIndex < leftArray.length; leftIndex++) {
    array[count] = leftArray[leftIndex]
    count++
  }
  console.log( array)
}





  


function divideArray(start, end, dividedArray, array) {
  for (let i = 0; start < end; start++, i++) {
    dividedArray[i] = array[start]
  }
} 


module.exports = mergeObject;