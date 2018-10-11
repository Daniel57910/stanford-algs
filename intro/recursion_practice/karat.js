const karatsuba = require('./karatsuba')

let karats = new karatsuba()
console.log(karats.multiply(12, 12))
console.log(karats.multiply(123, 123))
console.log(karats.multiply(1234, 1234))
console.log(karats.multiply(12345, 12345))
console.log(karats.multiply(123456, 123456))
console.log(karats.multiply(1234567, 1234567))
console.log(karats.multiply(123456789, 123456789))
console.log(karats.multiply(12345678910, 12345678910))
console.log(karats.multiply(1234567891011, 1234567891011))
console.log(karats.multiply(123456789101112, 123456789101112))



