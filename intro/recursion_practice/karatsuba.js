class Karatsuba {

  multiply(firstNum, secondNum) {

    firstNum = firstNum.toString()
    secondNum = secondNum.toString()
    
    if (firstNum < 10 || secondNum < 10) {
      return firstNum * secondNum
    }

  
    
    let firstHigh = firstNum.slice(0, firstNum.length / 2)
    let firstLow = firstNum.slice(firstNum.length / 2, firstNum.length)
    let secondHigh = secondNum.slice(0, secondNum.length / 2)
    let secondLow = secondNum.slice(secondNum.length / 2, secondNum.length)

    let summedFirst = parseInt(firstHigh) + parseInt(firstLow)
    let summedSecond = parseInt(secondHigh) + parseInt(secondLow)
    let a = this.multiply(firstHigh, secondHigh)
    let b = this.multiply(firstLow, secondLow)
    let c = this.multiply(summedFirst, summedSecond) - a - b
    a *= Math.pow(10, firstNum.length)
    c *= Math.pow(10, firstNum.length / 2)
    let d = a + b + c
    console.log(d)
    return d
  }

}

module.exports = Karatsuba