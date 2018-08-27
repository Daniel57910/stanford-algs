class Power {

  powerSum(X, N) {
    let arr = []
    getPower(X, N, 1, arr)
    return arr.length
  }
   
}

module.exports = Power

function getPower(total, constant, current, arr) {

  if (checkPower(current, constant) === total) {
    arr.push(checkPower(current, constant))
  }

  if (checkPower(current, constant) < total) {
    getPower(total, constant, current + 1, arr) + getPower(total - checkPower(current, constant), constant, current + 1, arr)
  }
  
}

function checkPower(current, constant) {
  return Math.pow(current, constant)
}
  


