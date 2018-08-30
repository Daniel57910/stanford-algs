const password = require('../password')
const {incorrectBasic, basicAttempt} = require('./helperFunctions') 

describe('simple solution where only one password is checked', () => {
  beforeEach(() => {
    passwordCalculator = new password()
  })
  it('returns wrong password if there is no match', () => {
    expect(passwordCalculator.passwordCracker(incorrectBasic, basicAttempt)).toEqual("WRONG PASSWORD")
  })
})