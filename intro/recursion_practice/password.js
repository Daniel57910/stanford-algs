class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    let passChecker = pass
    let passWordArray = []
    return solve(pass, passChecker, attempt, passWordArray, 0)
  }

}

function solve(passWord, passChecker, attempt, passWordArray, index) {

 //console.log(`password = ${passWord}, checker = ${passChecker}`)
  //console.log(`attempt = ${attempt}, passWordArray = ${passWordArray}, at index ${index} ${attempt[index]}`)
  //console.log(`comparing ${attempt[index]} with ${sliceWord(passChecker, attempt[index])}`)

  if (passWordArray.join('') === passWord) {
    return passWordArray.join(" ")
  }

  if (index === attempt.length) {
    return "WRONG PASSWORD"
  }

  if (isAMatch(passChecker, attempt[index]) || attempt[index] === passChecker) {
    passWordArray.unshift(attempt[index])
    passChecker = passChecker.slice(0, passChecker.length - attempt[index].length)
    return solve(passWord, passChecker, attempt, passWordArray, 0)
  }
  else {
    return solve(passWord, passChecker, attempt, passWordArray, index + 1)
  }

}

function isAMatch(passChecker, currentWord) {
  return (sliceWord(passChecker, currentWord) === currentWord)
}

function sliceWord(passChecker, currentWord) {
  let word =  passChecker.slice(passChecker.length - currentWord.length, passChecker.length)
  //console.log(`word thats returned is ${word}`)
  return word
}

module.exports = Password

