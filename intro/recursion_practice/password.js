class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    let passChecker = pass
    let passWordArray = []
    return solve(pass, passChecker, attempt, passWordArray)
    
  }

}

function solve(passWord, passChecker, attempt, passWordArray) {

  if (passWordArray.join("") === passWord) {
    console.log(`password Array is correct ${passWordArray}`)
    return passWordArray.join("")
  }

  for (currentWord of attempt) {
    console.log(`current word is ${currentWord}`)

    if (currentWord === passChecker) {
      passWordArray.unshift(currentWord)
      return passWordArray.join("")

    }
    if (isAMatch(passChecker, currentWord)) {
      console.log(`match between ${passChecker} + ${currentWord}`)
      passWordArray.unshift(currentWord)
      return solve(passWord, sliceWord(passChecker, currentWord), attempt, passWordArrray)
    }
  }

  return "WRONG PASSWORD"

}

function isAMatch(passChecker, currentWord) {
  return (sliceWord(passChecker, currentWord) === currentWord)
}

function sliceWord(passChecker, currentWord) {
  return passChecker.substring(currentWord.length, passChecker.length)
}

module.exports = Password

