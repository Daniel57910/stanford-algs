class Digit {

  digitSum(n) {
    console.log(n)
    if (n < 10) {return n}
    return this.digitSum(addTheDigits(n))
  }

}

function addTheDigits( n) {
  return (n.toString().split('').map(x => Number(x)).reduce((a, b) => a + b))
}

module.exports = Digit


