class Password {
  
  passwordCracker(pass, attempt) {
    attempt = attempt.split(' ')
    console.log(attempt)
    let currentString = ""
    checkPasswords(currentString, pass, attempt, 0)
  }

}

function checkPasswords(currentString, pass, attempt, index) {
  if (index === attempt.length) {return "INCORRECT PASSWORD"}
  currentString = attempt[index]
  console.log(`string going into first recursive = ${currentString}`)
  console.log(`array = ${attempt}`)
  isValidCombination(currentString, pass, attempt, index)
  checkPasswords(currentString, pass, attempt, index + 1)

}

function isValidCombination(currentString, pass, arrayOfOptions, permIndex) {

  if (permIndex === arrayOfOptions.length) {return}
  swap(permIndex, arrayOfOptions)
  debugger
  
  console.log(`in second recursive current string = ${currentString}, array = ${arrayOfOptions}`)
  conquerPassword(currentString, pass, arrayOfOptions.slice(0, arrayOfOptions.length))
  return isValidCombination(currentString, pass, arrayOfOptions.slice(0, arrayOfOptions.length), permIndex + 1)
}

function conquerPassword(currentString, pass, arrayOfOptions) {

  if (currentString === pass) {
    console.log(`success! ${currentString} = ${pass}. array is ${arrayOfOptions}`)
    return
  }

  if (arrayOfOptions.length === 0) { 
    return 
  }
  currentString += arrayOfOptions.shift()

  console.log(`in third recursive current string = ${currentString}, pass = ${pass}, array = ${arrayOfOptions}`)
  return conquerPassword(currentString, pass, arrayOfOptions)

}
function swap(continuant, arrayOfOptions) {
  let temp = arrayOfOptions[0]
  arrayOfOptions[0] = arrayOfOptions[continuant]
  arrayOfOptions[continuant] = temp
}

module.exports = Password