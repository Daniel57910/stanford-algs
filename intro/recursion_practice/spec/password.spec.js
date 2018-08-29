const password = require('../password')
const {incorrectBasic, incorrectAttempt} = require('./helperFunctions') 

describe('simple password of array one length', () => {
  it('returns wrong password if there is no match', () => {
    let passwordCalculator = new password()
    expect(passwordCalculator.passwordCracker(incorrectBasic, incorrectAttempt)).toEqual("WRONG PASSWORD")
    
  })
})