class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    const passWord = pass
    let passChecker = pass
    let passWordArray = []
    solve(passWord, passChecker, attempt, passWordArray)
    
  }

}

function solve(passWord, passChecker, attempt, passWordArrray) {

  for (currentWord of attempt) {
    console.log(`current word is ${currentWord}`)
  }

}

module.exports = Password

