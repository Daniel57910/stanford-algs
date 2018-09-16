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
  
  }

}


module.exports = Karatsuba