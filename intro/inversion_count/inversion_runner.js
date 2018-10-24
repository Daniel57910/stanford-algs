const inversion = require('./inversion')
var inversion_count = inversion.inversion

let array = [1, 3, 2]
let countSwap = inversion_count(array)
console.log(countSwap)
console.log(array)
