const password = require('../password')
const {incorrectBasic, basicAttempt, test2attempt, test2password} = require('./helperFunctions') 

describe('simple solution where only one password is checked', () => {
  beforeEach(() => {
    passwordCalculator = new password()
  })
  it('returns wrong password if there is no match', () => {
    expect(passwordCalculator.passwordCracker(incorrectBasic, basicAttempt)).toEqual("WRONG PASSWORD")
  })
  it('returns the string if the word is a match', () => {
    expect(passwordCalculator.passwordCracker(basicAttempt, basicAttempt)).toEqual(basicAttempt)
  })
})

describe('string of > 2 attempts in order of password', () => {
  beforeEach(() => {
    passwordCalculator = new password()
  })
  it('returns the attempt if it matches the password', () => {
    expect(passwordCalculator.passwordCracker(test2password, test2attempt)).toEqual(test2attempt)
  })
})
