class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    for (let i = 0; i <= attempt.length; i++) {
      if (possiblePassword(attempt, 0, i) === pass)  {
        return possiblePassword(attempt, 0, i)
      }
    }
    return "WRONG PASSWORD"
  }

}

function possiblePassword(attempt, index, loop) {
  return attempt.slice(index, loop).join()
}

module.exports = Password