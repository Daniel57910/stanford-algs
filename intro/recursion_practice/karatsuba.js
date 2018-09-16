class Karatsuba {

  multiply(firstNum, secondNum) {

    if (firstNum === 0 || secondNum === 0) {
      return 0
    }

    if (firstNum === 1) {
      return secondNum
    }

    if (secondNum === 1) {
      return firstNum
    }

    if (firstNum < 10 && secondNum < 10) {
      return firstNum * secondNum
    }
    firstNum = firstNum.toString()
    secondNum = secondNum.toString()
    let firstHigh = firstNum.slice(0, firstNum.length / 2)
    let secondHigh = secondNum.slice(0, secondNum.length / 2)
    let firstLow = firstNum.slice(firstNum.length / 2, firstNum.length)
    let secondLow = secondNum.slice(secondNum.length / 2, secondNum.length)
    console.log(`firstHigh is ${firstHigh}, secondHigh is ${secondHigh}`)
    console.log(`firstLow is ${firstLow}, secondLow is ${secondLow}`)

  
  }

}


module.exports = Karatsuba