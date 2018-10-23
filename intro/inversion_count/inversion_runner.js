const inversion = require('./inversion')
var inversion_count = inversion.inversion

let array = [2, 1, 3, 1, 2]
let countSwap = inversion_count(array)
console.log(array)
console.log(countSwap)