class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    let passChecker = pass
    let passWordArray = []
    return solve(pass, passChecker, attempt, passWordArray, 0)
  }

}

function solve(passWord, passChecker, attempt, passWordArray, index) {

  if (passWordArray.join('') === passWord) { return passWordArray.join(" ") }
  
  if (index === attempt.length) { return "WRONG PASSWORD" }

  if ( isAMatch(passChecker, attempt[index], subtractDistance(passChecker, attempt[index]), passChecker.length ) || attempt[index] === passChecker) {
    passWordArray.unshift(attempt[index])
    return solve(passWord, sliceWord(passChecker, 0, subtractDistance(passChecker, attempt[index])), attempt, passWordArray, 0)
  }
  else {
    return solve(passWord, passChecker, attempt, passWordArray, index + 1)
  }

}

function subtractDistance(word1, word2) {
  return word1.length - word2.length
}

function isAMatch(passChecker, currentWord, index1, index2) {
  return (sliceWord(passChecker, index1, index2) === currentWord)
}

function sliceWord(passChecker, index1, index2) {
  return passChecker.slice(index1, index2)
}

module.exports = Password

