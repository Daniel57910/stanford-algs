function bang() {
  console.log('BANG')
}

function square(x) {
  console.log(x * x);
}

var a = "aaaaa"

module.exports.bang = bang
module.exports.square = square
module.exports.a = a