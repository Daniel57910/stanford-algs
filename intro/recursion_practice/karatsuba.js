class Karatsuba {

  multiply(firstNum, secondNum) {


    if (firstNum < 10 && secondNum < 10) {
       return firstNum * secondNum
     }

     var first = firstNum.toString()
     var second = secondNum.toString()
     var length = (first.length > second.length ? first.length : second.length)

     var subLeng = Math.round(length / 2)
    

     let firstHigh = parseInt(first.substring(0, first.length - subLeng))
     let secondHigh = parseInt(second.substring(0, second.length - subLeng))
     let firstLow = parseInt(first.substring(first.length - subLeng, first.length))
     let secondLow = parseInt(second.substring(second.length - subLeng, second.length))

     let a = this.multiply(firstHigh, secondHigh)
     let b = this.multiply(firstLow, secondLow)
     let c = this.multiply(firstHigh + firstLow, secondHigh + secondLow) - (a + b)
     return a * Math.pow(10, 2 * subLeng) + c * Math.pow(10, subLeng) + b
 
  }

}

module.exports = Karatsuba