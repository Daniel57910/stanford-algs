class Digit {

  digitSum(n) {
    return addTheDigits(0, n)
  }

}

function addTheDigits(x = 0, n) {
  return (n.toString().split('').map(x => Number(x)).reduce((a, b) => a + b))
}

module.exports = Digit


