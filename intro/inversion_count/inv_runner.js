const inversion = require('./inversion')
var inversion_count = inversion.inversion
let array = [6, 5, 4, 3, 2, 1]
let arr2 = [1, 3, 2, 4, 5, 6]
console.log(inversion_count(array))
console.log(inversion_count(arr2))
console.log(array)
