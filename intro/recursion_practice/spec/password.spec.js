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

describe('string of > 2 attempts in order that matches password', () => {
  beforeEach(() => {
    passwordCalculator = new password()
  })
  it('returns the attempt if it matches the password', () => {
    expect(passwordCalculator.passwordCracker(test2password, test2attempt)).toEqual(test2attempt)
  })
})

describe('string of > 2 attempts in unsorted order with multiples', () => {
  beforeEach(() => {
    passwordCalculator = new password()
  })
  it('returns the correct password for a unsorted word string with multiples', () => {
    let correct = "the big dog is a big dog in the house"
    let attempt = "dog a house big the in is"
    let password = "thebigdogisabigdoginthehouse"
    expect(passwordCalculator.passwordCracker(password, attempt)).toEqual(correct)
  })
  it('returns the string if password.length = 1 but string is several', () => {
    let correct = "hamilton"
    let attempt = "fish in the sea hamilton mark joe"
    expect(passwordCalculator.passwordCracker(correct, attempt)).toEqual(correct)
  })
  it('returns the correct password if words are subsets of larger words', () => {
    let password = "fisheriesintheland"
    let attempt = "ries in the land fisheries"
    let correct = "fisheries in the land"
    expect(passwordCalculator.passwordCracker(password, attempt)).toEqual(correct)
  })
})

