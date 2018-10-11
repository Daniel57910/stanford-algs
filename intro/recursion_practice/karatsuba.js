class Karatsuba {

  multiply(firstNum, secondNum) {

    // console.log(`firstNum is ${firstNum}, secondNum is ${secondNum}`)

    if (firstNum < 10 || secondNum < 10) {
       return firstNum * secondNum
     }

     var first = firstNum.toString()
     var second = secondNum.toString()
     var length = (first.length > second.length ? first.length : second.length)
     console.log(length)
     var subLeng = Math.round(length / 2)
    

     let firstHigh = parseInt(first.substring(0, first.length - subLeng))
     let secondHigh = parseInt(second.substring(0, second.length - subLeng))
     let firstLow = parseInt(first.substring(first.length - subLeng, first.length))
     let secondLow = parseInt(second.substring(second.length - subLeng, second.length))

     console.log(`firstHigh = ${firstHigh}, secondHigh = ${secondHigh}`)
     console.log(`firstLow = ${firstLow}, secondLow = ${secondLow}`)

     let a = this.multiply(firstHigh, secondHigh)
     let b = this.multiply(firstLow, secondLow)
     let c = this.multiply(firstHigh + firstLow, secondHigh + secondLow) - (a + b)
     let d = (a * Math.pow(10, 2 * subLeng)) + (c * Math.pow(10, subLeng)) + b
 
   console.log(`a is ${a}, b is ${b}, c is ${c}, d is ${d}`)
   return d
  }

}

module.exports = Karatsuba