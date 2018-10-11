class Karatsuba {

  multiply(firstNum, secondNum) {


    if (firstNum < 10 && secondNum < 10) {
       return firstNum * secondNum
     }

     let first = firstNum.toString()
     let second = secondNum.toString()
     let length = (first.length > second.length ? first.length : second.length)
     let mid = length - Math.round(length / 2)

     let firstHigh = parseInt(first.slice(0, mid))
     let secondHigh = parseInt(second.slice(0, mid))
     let firstLow = parseInt(first.slice(mid, first.length))
     let secondLow = parseInt(second.slice(mid, second.length))


     let a = this.multiply(firstHigh, secondHigh)
     let b = this.multiply(firstLow, secondLow)
     let c = this.multiply(firstHigh + firstLow, secondHigh + secondLow) - (a + b)
     return a * Math.pow(10, 2 * mid) + c * Math.pow(10, mid) + b
 
  }

}

module.exports = Karatsuba