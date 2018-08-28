class Digit {
  digitSum(n, k) {
    return calculate(addTheDigits(n) * k)
  }
}

function calculate(int) {
  if (int < 10) {return int }
  return calculate(addTheDigits(int))
}

function addTheDigits(n) {
  return (n.toString().split('').map(x => Number(x)).reduce((a, b) => a + b))
}


module.exports = Digit


