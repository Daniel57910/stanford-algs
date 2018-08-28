const wordAxis = require('./wordAxis')
class Game {
  
  crosswordPuzzle(crossword, words) {
    this.crossword = crossword
    solve(0, 0, crossword, words[0])
    console.log(this.crossword)
  }
  
}

function solve(y, x, crossword, word) {

  console.log(`x = ${x}, y = ${y}`)
  console.log(`crossword = ${crossword}`)
  console.log(`word = ${word}`)
  if (word === '') {
    return
  }

  if (crossword[y][x] == "-") {
    crossword[y][x] = word[0]
    word = word.slice(1, word.length)
  }
  
  if (x >= 3) {
    return solve(y + 1, 0, crossword, word)
  }

  if (y >= 3) {
    return solve(0, x + 1, crossword, word )
  }
  
  if (x < 3) {
    return solve(y, x + 1, crossword, word)
  }

  if (y < 3) {
    return solve(y + 1, x , crossword, word)
  }

}

module.exports = Game