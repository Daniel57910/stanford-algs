class Digit {

  digitSum(n, k) {

    console.log(`n = ${n}, k = ${k}`)
    n = addTheDigits(n) * k
    console.log(`n = ${n}`)
    return calculate(addTheDigits(n))
  }

}

function calculate(int) {
  console.log(int)
  if (int < 10) {return int }
  return calculate(addTheDigits(int))
}

function addTheDigits( n) {
  return (n.toString().split('').map(x => Number(x)).reduce((a, b) => a + b))
}


module.exports = Digit


