class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    let passChecker = pass
    let passWordArray = []
    return solve(pass, passChecker, attempt, passWordArray, 0)
  }

}

function solve(passWord, passChecker, attempt, passWordArray, index) {

 
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
  return passChecker.slice(passChecker.length - currentWord.length, passChecker.length)
}

module.exports = Password

