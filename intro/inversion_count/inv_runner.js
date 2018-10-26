const inversion = require('./inversion')
var inversion_count = inversion.inversion
let array = [6, 5, 4, 3, 2, 1]

let countSwap = inversion_count(array)
console.log(array)
console.log('countswap is ' + countSwap)