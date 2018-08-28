const wordGame = require('./crossWord')

describe('basic crossword with one word', () => {
  beforeEach(() => {
    let crossWord = []
    crossWord[0] = new Array('X', 'X', '-')
    crossWord[1] = new Array('X', 'X', '-')
    crossWord[2] = new Array('X', 'X', '-')
    game = new wordGame()
    game.crosswordPuzzle(crossWord, 'dog')
  })
  it('generates a crossWord to be recursively filled out', () => {
    expect(game.crossword[0]).toEqual(['X', 'X', '!'])
    expect(game.crossword[1]).toEqual(['X', 'X', '!'])
    expect(game.crossword[1]).toEqual(['X', 'X', '!'])
  })
})