/*

recursively print elements of array

function createRandomArray(arr) {
  let i = 0
  for (i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100)
  }
}

function recursivePrint(arr, x) {
  if (x === arr.length) {return}
  console.log(`x = ${x}, arr[x] = ${arr[x]}`)
  recursivePrint(arr, x + 1)
}

var arr = []
createRandomArray(arr)
console.log(arr)
recursivePrint(arr, 0)

*/

/*

recursively show that a string is a palindrome

function checkIfPalindrome(firstPoint, secondPoint, palind) {

  if (firstPoint === secondPoint) {
    console.log('palindrome')
    return true
  }

  if (palind[firstPoint] != palind[secondPoint]) {
    console.log('not palindrome')
    return false
  }

  console.log(`first = ${palind[firstPoint]}, second = ${palind[secondPoint]}, palind = ${palind}`)
  checkIfPalindrome(firstPoint + 1, secondPoint - 1, palind)

} 

let palind = "madam"
let notPalind = "madgam"

checkIfPalindrome(0, palind.length - 1, palind)
checkIfPalindrome(0, notPalind.length - 1, notPalind)

*/
