class Digit {

  digitSum(n) {
    return (n.toString().split('').map(x => Number(x)).reduce((a, b) => a + b))
  }

}

module.exports = Digit


let a = 9999
console.log(a.toString().split('').map(x => Number(x)).reduce((a, b) => a + b))