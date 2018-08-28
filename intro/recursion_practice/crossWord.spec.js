const wordGame = require('./crossWord')

describe('basic crossword with one word', () => {
  beforeEach(() => {
    let crossWord = []
    crossWord[0] = new Array('X', 'X', '-')
    crossWord[1] = new Array('X', 'X', '-')
    crossWord[2] = new Array('X', 'X', '-')
    let word = ['dog']
    game = new wordGame()
    game.crosswordPuzzle(crossWord, word)
  })
  it('generates a crossWord to be recursively filled out', () => {
    expect(game.crossword[0]).toEqual(['X', 'X', 'd'])
    expect(game.crossword[1]).toEqual(['X', 'X', 'o'])
    expect(game.crossword[2]).toEqual(['X', 'X', 'g'])
  })
})